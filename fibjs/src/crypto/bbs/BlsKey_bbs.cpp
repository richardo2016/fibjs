/*
 * BbsSigner.cpp
 *
 *  Created on: Jun 20, 2023
 *      Author: lion
 */

#include "defs.h"
#include "encode.h"
#include "Generators.h"
#include "Signature.h"
#include "Proof.h"
#include "Buffer.h"
#include "BlsKey.h"
#include "ssl.h"
#include <blst/include/bbs.h>
#include "encoding.h"

namespace fibjs {

blst_p2 BlsKey_g2::get_pk()
{
    mbedtls_ecp_keypair* ecp = mbedtls_pk_ec(m_key);
    unsigned char buf[G2_COMPRESSED_SIZE];

    mbedtls_mpi_write_binary(&ecp->Q.X, buf, G2_COMPRESSED_SIZE);

    blst_p2 pk;
    blst_p2_affine pka;

    blst_p2_uncompress(&pka, buf);
    blst_p2_from_affine(&pk, &pka);

    return pk;
}

blst_scalar BlsKey_g2::get_sk()
{
    mbedtls_ecp_keypair* ecp = mbedtls_pk_ec(m_key);
    unsigned char buf[FR_BYTE_SIZE];

    mbedtls_mpi_write_binary(&ecp->d, buf, FR_BYTE_SIZE);

    blst_scalar sk;
    blst_scalar_from_bendian(&sk, buf);
    return sk;
}

result_t get_index(Variant& idx, size_t msg_len, std::vector<int32_t>& idx_i, std::vector<int32_t>& idx_j)
{
    obj_ptr<NArray> _idx = (NArray*)idx.object();

    idx_i.reserve(_idx->length());
    idx_j.reserve(msg_len - _idx->length());

    size_t pos_j = 1;

    for (size_t i = 0; i < _idx->length(); i++) {
        Variant v;

        _idx->_indexed_getter(i, v);

        int32_t n = v.intVal();
        if (n < pos_j || n > msg_len)
            return CALL_E_INVALID_DATA;

        while (pos_j < n)
            idx_j.push_back(pos_j++);
        pos_j++;

        idx_i.push_back(n);
    }

    while (pos_j <= msg_len)
        idx_j.push_back(pos_j++);

    return 0;
}

static void bbs_hash_to_g1(blst_p1* out, const byte* msg, size_t msg_len,
    const byte* DST, size_t DST_len, int32_t suite)
{
    if (suite == Bls12381Sha256)
        blst_hash_to_g1(out, msg, msg_len, DST, DST_len);
    else
        blst_hash_to_g1_xof(out, msg, msg_len, DST, DST_len);
}

static void bbs_expand_message(unsigned char* bytes, size_t len_in_bytes, const unsigned char* msg, size_t msg_len,
    const unsigned char* DST, size_t DST_len, int32_t suite)
{
    if (suite == Bls12381Sha256)
        blst_expand_message_xmd(bytes, len_in_bytes, msg, msg_len, DST, DST_len);
    else
        blst_expand_message_xof(bytes, len_in_bytes, msg, msg_len, DST, DST_len);
}

static void blst_hash_to_scalar(blst_scalar* out, const byte* msg, size_t msg_len,
    const byte* DST, size_t DST_len, int32_t suite)
{
    byte buf[G1_COMPRESSED_SIZE];

    bbs_expand_message(buf, G1_COMPRESSED_SIZE, msg, msg_len, DST, DST_len, suite);
    blst_scalar_from_be_bytes(out, buf, G1_COMPRESSED_SIZE);
}

static std::vector<blst_scalar> messagesToFr(Variant& _msgs, int32_t suite)
{
    const NArray* msgs = (NArray*)_msgs.object();
    size_t sz = msgs->length();
    std::vector<blst_scalar> fr_messages;

    fr_messages.resize(sz);

    for (size_t i = 0; i < sz; i++) {
        Variant v;

        msgs->_indexed_getter(i, v);

        Buffer* buf = Buffer::Cast((Buffer_base*)v.object());
        blst_hash_to_scalar(&fr_messages[i], buf->data(), buf->length(), DST(MSG_TO_SCALAR, suite), suite);
    }

    return fr_messages;
}

blst_scalar calculate_domain(const blst_p2& pk, const Generators& gens, Buffer_base* header, int32_t suite)
{
    blst_scalar s;
    Buffer* buf = Buffer::Cast(header);

    std::vector<uint8_t> data = encode(pk,
        gens.size, gens.q1, codec_impl::span(gens.h, gens.size),
        codec_impl::span(DST(SUITE, suite)),
        buf ? buf->length() : 0,
        buf ? codec_impl::span(buf->data(), buf->length()) : codec_impl::span((uint8_t*)NULL, 0));
    blst_hash_to_scalar(&s, data.data(), data.size(), DST(H2S, suite), suite);

    return s;
}

blst_scalar calculate_challenge(const blst_p1& abar, const blst_p1& bbar, const blst_p1& c,
    const std::vector<int32_t>& idx_i, const std::vector<blst_scalar>& fr_messages, const blst_scalar& domain, Buffer_base* ph, int32_t suite)
{
    blst_scalar s;
    Buffer* buf = Buffer::Cast(ph);

    std::vector<uint8_t> data = encode(abar, bbar, c, idx_i.size(), idx_i, fr_messages, domain,
        buf ? buf->length() : 0,
        buf ? codec_impl::span(buf->data(), buf->length()) : codec_impl::span((uint8_t*)NULL, 0));
    blst_hash_to_scalar(&s, data.data(), data.size(), DST(H2S, suite), suite);

    return s;
}

blst_scalar generate_random_scalar()
{
    byte buf[48];
    blst_scalar s;

    mbedtls_ctr_drbg_random(&g_ssl.ctr_drbg, buf, sizeof(buf));
    blst_scalar_from_be_bytes(&s, buf, sizeof(buf));
    return s;
}

result_t BlsKey_g2::get_bbs_suite(exlib::string& retVal)
{
    retVal = m_bbs_suite == (int32_t)Bls12381Sha256 ? "Bls12381Sha256" : "Bls12381Shake256";
    return 0;
}

result_t BlsKey_g2::set_bbs_suite(exlib::string newVal)
{
    if (newVal == "Bls12381Sha256")
        m_bbs_suite = Bls12381Sha256;
    else if (newVal == "Bls12381Shake256")
        m_bbs_suite = Bls12381Shake256;
    else
        return CALL_E_INVALID_DATA;

    return 0;
}

result_t BlsKey_g2::check_bbs_opts(v8::Local<v8::Object> opts, AsyncEvent* ac)
{
    static const char* s_keys[] = {
        "format", "header", "proof_header", NULL
    };

    if (!ac->isSync())
        return 0;

    Isolate* isolate = holder();
    result_t hr;

    hr = CheckConfig(opts, s_keys);
    if (hr < 0)
        return hr;

    exlib::string fmt = "raw";
    hr = GetConfigValue(isolate, opts, "format", fmt, true);
    if (hr < 0 && hr != CALL_E_PARAMNOTOPTIONAL)
        return hr;
    if (fmt != "raw")
        return CHECK_ERROR(Runtime::setError(exlib::string("unsupported format \'") + fmt + "\'."));

    ac->m_ctx.resize(4);

    obj_ptr<Buffer_base> header;
    hr = GetConfigValue(isolate, opts, "header", header);
    if (hr < 0 && hr != CALL_E_PARAMNOTOPTIONAL)
        return hr;
    ac->m_ctx[2] = header;

    obj_ptr<Buffer_base> proof_header;
    hr = GetConfigValue(isolate, opts, "proof_header", proof_header);
    if (hr < 0 && hr != CALL_E_PARAMNOTOPTIONAL)
        return hr;
    ac->m_ctx[3] = proof_header;

    return CHECK_ERROR(CALL_E_NOSYNC);
}

result_t BlsKey_g2::bbsSign(v8::Local<v8::Array> messages, v8::Local<v8::Object> opts, obj_ptr<Buffer_base>& retVal, AsyncEvent* ac)
{
    if (ac->isSync()) {
        ac->m_ctx.resize(1);

        obj_ptr<NArray> _msg = new NArray();
        result_t hr = _msg->append_array<obj_ptr<Buffer_base>>(messages);
        if (hr < 0)
            return hr;

        ac->m_ctx[0] = _msg;

        return check_bbs_opts(opts, ac);
    }

    std::vector<blst_scalar> fr_messages = messagesToFr(ac->m_ctx[0], m_bbs_suite);
    Generators gens(fr_messages.size(), m_bbs_suite);

    blst_scalar domain = calculate_domain(get_pk(), gens, (Buffer_base*)ac->m_ctx[2].object(), m_bbs_suite);
    blst_p1 b = gens.compute_b(fr_messages.data(), domain, m_bbs_suite);

    Signature s;

    s.sign(get_sk(), b);
    s.serialize(retVal);

    return 0;
}

result_t BlsKey_g2::bbsVerify(v8::Local<v8::Array> messages, Buffer_base* sig, v8::Local<v8::Object> opts, bool& retVal, AsyncEvent* ac)
{
    if (ac->isSync()) {
        ac->m_ctx.resize(1);

        obj_ptr<NArray> _msg = new NArray();
        result_t hr = _msg->append_array<obj_ptr<Buffer_base>>(messages);
        if (hr < 0)
            return hr;

        ac->m_ctx[0] = _msg;

        return check_bbs_opts(opts, ac);
    }

    std::vector<blst_scalar> fr_messages = messagesToFr(ac->m_ctx[0], m_bbs_suite);

    Signature s;
    if (!s.parse(sig)) {
        retVal = false;
        return 0;
    }

    blst_p2 pk = get_pk();

    Generators gens(fr_messages.size(), m_bbs_suite);
    blst_scalar domain = calculate_domain(pk, gens, (Buffer_base*)ac->m_ctx[2].object(), m_bbs_suite);
    blst_p1 b = gens.compute_b(fr_messages.data(), domain, m_bbs_suite);

    retVal = s.verify(pk, b);
    return 0;
}

result_t BlsKey_g2::proofGen(Buffer_base* sig, v8::Local<v8::Array> messages, v8::Local<v8::Array> idx,
    v8::Local<v8::Object> opts, obj_ptr<Buffer_base>& retVal, AsyncEvent* ac)
{
    result_t hr;

    if (ac->isSync()) {
        ac->m_ctx.resize(2);

        obj_ptr<NArray> _msg = new NArray();
        hr = _msg->append_array<obj_ptr<Buffer_base>>(messages);
        if (hr < 0)
            return hr;

        ac->m_ctx[0] = _msg;

        obj_ptr<NArray> _idx = new NArray();
        hr = _idx->append_array<int32_t>(idx);
        if (hr < 0)
            return hr;

        ac->m_ctx[1] = _idx;

        return check_bbs_opts(opts, ac);
    }

    Signature s;
    if (!s.parse(sig))
        return CALL_E_INVALID_DATA;

    std::vector<blst_scalar> fr_messages = messagesToFr(ac->m_ctx[0], m_bbs_suite);
    size_t msg_len = fr_messages.size();

    std::vector<int32_t> idx_i;
    std::vector<int32_t> idx_j;

    hr = get_index(ac->m_ctx[1], msg_len, idx_i, idx_j);
    if (hr < 0)
        return hr;

    blst_p2 pk = get_pk();

    Generators gens(msg_len, m_bbs_suite);
    blst_scalar domain = calculate_domain(pk, gens, (Buffer_base*)ac->m_ctx[2].object(), m_bbs_suite);

    blst_scalar r1 = generate_random_scalar();
    blst_scalar r2 = generate_random_scalar();
    blst_scalar r3 = generate_random_scalar();
    std::vector<blst_scalar> rs;

    rs.reserve(idx_j.size());
    for (size_t i = 0; i < idx_j.size(); i++)
        rs.push_back(generate_random_scalar());

    blst_p1 b = gens.compute_b(fr_messages.data(), domain, m_bbs_suite);

    Proof p;

    blst_p1_mult(&p.abar, &s.a, (const byte*)&r1, 256);

    blst_p1_mult(&p.bbar, &p.abar, (const byte*)&s.e, 256);
    blst_p1_cneg(&p.bbar, 1);
    add_mul(p.bbar, b, r1);

    blst_p1 c;

    blst_p1_mult(&c, &p.bbar, (const byte*)&r3, 256);
    add_mul(c, p.abar, r2);
    for (size_t i = 0; i < idx_j.size(); i++)
        add_mul(c, gens.h[idx_j[i] - 1], rs[i]);

    std::vector<blst_scalar> fr_messages_i;

    fr_messages_i.reserve(idx_i.size());
    for (size_t i = 0; i < idx_i.size(); i++)
        fr_messages_i.push_back(fr_messages[idx_i[i] - 1]);

    for (size_t i = 0; i < idx_i.size(); i++)
        idx_i[i]--;

    p.c = calculate_challenge(p.abar, p.bbar, c, idx_i, fr_messages_i, domain, (Buffer_base*)ac->m_ctx[3].object(), m_bbs_suite);

    blst_fr fr4;

    blst_fr_from_scalar(&fr4, &r1);
    blst_fr_cneg(&fr4, &fr4, 1);
    blst_fr_inverse(&fr4, &fr4);

    blst_fr fr2, fr3, fr5, frc, fre;
    blst_fr_from_scalar(&fr2, &r2);
    blst_fr_from_scalar(&fr3, &r3);
    blst_fr_from_scalar(&frc, &p.c);
    blst_fr_from_scalar(&fre, &s.e);

    blst_fr_mul(&fr5, &fr4, &fre);
    blst_fr_mul(&fr5, &fr5, &frc);
    blst_fr_add(&fr5, &fr5, &fr2);
    blst_scalar_from_fr(&p.r2hat, &fr5);

    blst_fr_mul(&fr5, &fr4, &frc);
    blst_fr_add(&fr5, &fr5, &fr3);
    blst_scalar_from_fr(&p.r3hat, &fr5);

    p.mhat.resize(idx_j.size());
    for (size_t i = 0; i < idx_j.size(); i++) {
        blst_fr fr6;

        blst_fr_from_scalar(&fr5, &fr_messages[idx_j[i] - 1]);
        blst_fr_mul(&fr5, &fr5, &frc);

        blst_fr_from_scalar(&fr6, &rs[i]);
        blst_fr_add(&fr5, &fr5, &fr6);
        blst_scalar_from_fr(&p.mhat[i], &fr5);
    }

    p.serialize(retVal);

    return 0;
}

result_t BlsKey_g2::proofVerify(v8::Local<v8::Array> messages, v8::Local<v8::Array> idx, Buffer_base* proof,
    v8::Local<v8::Object> opts, bool& retVal, AsyncEvent* ac)
{
    result_t hr;

    if (ac->isSync()) {
        ac->m_ctx.resize(2);

        obj_ptr<NArray> _msg = new NArray();
        hr = _msg->append_array<obj_ptr<Buffer_base>>(messages);
        if (hr < 0)
            return hr;

        ac->m_ctx[0] = _msg;

        obj_ptr<NArray> _idx = new NArray();
        hr = _idx->append_array<int32_t>(idx);
        if (hr < 0)
            return hr;

        ac->m_ctx[1] = _idx;

        return check_bbs_opts(opts, ac);
    }

    Proof p;
    if (!p.parse(proof)) {
        retVal = false;
        return 0;
    }

    std::vector<blst_scalar> fr_messages = messagesToFr(ac->m_ctx[0], m_bbs_suite);
    size_t msg_len = fr_messages.size() + p.mhat.size();

    std::vector<int32_t> idx_i;
    std::vector<int32_t> idx_j;

    hr = get_index(ac->m_ctx[1], msg_len, idx_i, idx_j);
    if (hr < 0)
        return hr;

    if (fr_messages.size() != idx_i.size()) {
        retVal = false;
        return 0;
    }

    blst_p2 pk = get_pk();

    Generators gens(msg_len, m_bbs_suite);
    blst_scalar domain = calculate_domain(pk, gens, (Buffer_base*)ac->m_ctx[2].object(), m_bbs_suite);

    blst_p1 d, c;

    blst_p1_from_affine(&d, m_bbs_suite == 0 ? &BLS12_381_G1_P1 : &BLS12_381_G1_P1_XOF);
    add_mul(d, gens.q1, domain);
    for (size_t i = 0; i < idx_i.size(); i++)
        add_mul(d, gens.h[idx_i[i] - 1], fr_messages[i]);

    blst_p1_mult(&c, &p.abar, (const byte*)&p.r2hat, 256);
    add_mul(c, p.bbar, p.r3hat);
    for (size_t i = 0; i < idx_j.size(); i++)
        add_mul(c, gens.h[idx_j[i] - 1], p.mhat[i]);
    add_mul(c, d, p.c);

    for (size_t i = 0; i < idx_i.size(); i++)
        idx_i[i]--;

    blst_scalar cv = calculate_challenge(p.abar, p.bbar, c, idx_i, fr_messages, domain, (Buffer_base*)ac->m_ctx[3].object(), m_bbs_suite);
    if (memcmp(&cv, &p.c, sizeof(blst_scalar))) {
        retVal = false;
        return 0;
    }

    retVal = p.verify(pk);

    return 0;
}

}
