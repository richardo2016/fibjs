/***************************************************************************
 *                                                                         *
 *   This file was automatically generated using idlc.js                   *
 *   PLEASE DO NOT EDIT!!!!                                                *
 *                                                                         *
 ***************************************************************************/

#ifndef _BigIntStats_base_H_
#define _BigIntStats_base_H_

/**
 @author Leo Hoo <lion@9465.net>
 */

#include "../object.h"
#include "ifs/Stat.h"

namespace fibjs {

class Stat_base;

class BigIntStats_base : public Stat_base {
    DECLARE_CLASS(BigIntStats_base);

public:
    // BigIntStats_base
    virtual result_t get_dev(int64_t& retVal) = 0;
    virtual result_t get_ino(int64_t& retVal) = 0;
    virtual result_t get_mode(int64_t& retVal) = 0;
    virtual result_t get_nlink(int64_t& retVal) = 0;
    virtual result_t get_uid(int64_t& retVal) = 0;
    virtual result_t get_gid(int64_t& retVal) = 0;
    virtual result_t get_rdev(int64_t& retVal) = 0;
    virtual result_t get_size(int64_t& retVal) = 0;
    virtual result_t get_blksize(int64_t& retVal) = 0;
    virtual result_t get_blocks(int64_t& retVal) = 0;
    virtual result_t get_mtimeMs(int64_t& retVal) = 0;
    virtual result_t get_mtimeNs(int64_t& retVal) = 0;
    virtual result_t get_atimeMs(int64_t& retVal) = 0;
    virtual result_t get_atimeNs(int64_t& retVal) = 0;
    virtual result_t get_ctimeMs(int64_t& retVal) = 0;
    virtual result_t get_ctimeNs(int64_t& retVal) = 0;
    virtual result_t get_birthtimeMs(int64_t& retVal) = 0;
    virtual result_t get_birthtimeNs(int64_t& retVal) = 0;

public:
    static void s__new(const v8::FunctionCallbackInfo<v8::Value>& args)
    {
        CONSTRUCT_INIT();

        Isolate* isolate = Isolate::current();

        isolate->m_isolate->ThrowException(
            isolate->NewString("not a constructor"));
    }

public:
    static void s_get_dev(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_ino(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_mode(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_nlink(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_uid(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_gid(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_rdev(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_size(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_blksize(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_blocks(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_mtimeMs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_mtimeNs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_atimeMs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_atimeNs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_ctimeMs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_ctimeNs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_birthtimeMs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_birthtimeNs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
};
}

namespace fibjs {
inline ClassInfo& BigIntStats_base::class_info()
{
    static ClassData::ClassProperty s_property[] = {
        { "dev", s_get_dev, block_set, false },
        { "ino", s_get_ino, block_set, false },
        { "mode", s_get_mode, block_set, false },
        { "nlink", s_get_nlink, block_set, false },
        { "uid", s_get_uid, block_set, false },
        { "gid", s_get_gid, block_set, false },
        { "rdev", s_get_rdev, block_set, false },
        { "size", s_get_size, block_set, false },
        { "blksize", s_get_blksize, block_set, false },
        { "blocks", s_get_blocks, block_set, false },
        { "mtimeMs", s_get_mtimeMs, block_set, false },
        { "mtimeNs", s_get_mtimeNs, block_set, false },
        { "atimeMs", s_get_atimeMs, block_set, false },
        { "atimeNs", s_get_atimeNs, block_set, false },
        { "ctimeMs", s_get_ctimeMs, block_set, false },
        { "ctimeNs", s_get_ctimeNs, block_set, false },
        { "birthtimeMs", s_get_birthtimeMs, block_set, false },
        { "birthtimeNs", s_get_birthtimeNs, block_set, false }
    };

    static ClassData s_cd = {
        "BigIntStats", false, s__new, NULL,
        0, NULL, 0, NULL, ARRAYSIZE(s_property), s_property, 0, NULL, NULL, NULL,
        &Stat_base::class_info()
    };

    static ClassInfo s_ci(s_cd);
    return s_ci;
}

inline void BigIntStats_base::s_get_dev(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.dev");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_dev(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_ino(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.ino");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_ino(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_mode(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.mode");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_mode(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_nlink(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.nlink");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_nlink(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_uid(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.uid");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_uid(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_gid(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.gid");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_gid(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_rdev(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.rdev");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_rdev(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_size(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.size");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_size(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_blksize(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.blksize");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_blksize(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_blocks(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.blocks");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_blocks(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_mtimeMs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.mtimeMs");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_mtimeMs(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_mtimeNs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.mtimeNs");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_mtimeNs(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_atimeMs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.atimeMs");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_atimeMs(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_atimeNs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.atimeNs");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_atimeNs(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_ctimeMs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.ctimeMs");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_ctimeMs(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_ctimeNs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.ctimeNs");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_ctimeNs(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_birthtimeMs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.birthtimeMs");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_birthtimeMs(vr);

    METHOD_RETURN();
}

inline void BigIntStats_base::s_get_birthtimeNs(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    int64_t vr;

    METHOD_NAME("BigIntStats.birthtimeNs");
    METHOD_INSTANCE(BigIntStats_base);
    PROPERTY_ENTER();

    hr = pInst->get_birthtimeNs(vr);

    METHOD_RETURN();
}
}

#endif
