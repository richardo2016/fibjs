/*
 * X509Certificate.h
 *
 *  Created on: Fec 26, 2024
 *      Author: lion
 */

#pragma once

#include "crypto_util.h"
#include "ifs/X509Certificate.h"
#include "KeyObject.h"

namespace fibjs {

class X509Certificate : public X509Certificate_base {

public:
    // X509Certificate_base
    virtual result_t get_ca(bool& retVal);
    virtual result_t get_fingerprint(exlib::string& retVal);
    virtual result_t get_fingerprint256(exlib::string& retVal);
    virtual result_t get_fingerprint512(exlib::string& retVal);
    virtual result_t get_infoAccess(exlib::string& retVal);
    virtual result_t get_issuer(exlib::string& retVal);
    virtual result_t get_issuerCertificate(obj_ptr<X509Certificate_base>& retVal);
    virtual result_t get_publicKey(obj_ptr<KeyObject_base>& retVal);
    virtual result_t get_raw(obj_ptr<Buffer_base>& retVal);
    virtual result_t get_serialNumber(exlib::string& retVal);
    virtual result_t get_subject(exlib::string& retVal);
    virtual result_t get_subjectAltName(exlib::string& retVal);
    virtual result_t get_validFrom(exlib::string& retVal);
    virtual result_t get_validTo(exlib::string& retVal);
    virtual result_t checkEmail(exlib::string email, v8::Local<v8::Object> options, exlib::string& retVal);
    virtual result_t checkHost(exlib::string name, v8::Local<v8::Object> options, exlib::string& retVal);
    virtual result_t checkIP(exlib::string ip, exlib::string& retVal);
    virtual result_t checkIssued(X509Certificate_base* issuer, bool& retVal);
    virtual result_t checkPrivateKey(KeyObject_base* privateKey, bool& retVal);
    virtual result_t verify(KeyObject_base* publicKey, bool& retVal);

public:
    virtual result_t toString(exlib::string& retVal);

public:
    result_t load_cert(Buffer_base* cert);

private:
    X509Pointer m_cert;
    obj_ptr<KeyObject_base> m_publicKey;
    obj_ptr<X509Certificate_base> m_issuer;
};

}
