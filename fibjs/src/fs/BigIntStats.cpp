/**
 * @author Richard
 * @email richardo2016@gmail.com
 * @create date 2020-03-14 19:41:09
 * @modify date 2020-03-14 19:41:09
 * @desc implementation of `BigIntStats`
 */

#include "ifs/fs.h"
#include "object.h"
#include "Stat.h"
#include "path.h"
#include "utf8.h"

namespace fibjs {

result_t BigIntStats::get_dev(int64_t& retVal)
{
    retVal = m_stat->dev;
    return 0;
};
result_t BigIntStats::get_ino(int64_t& retVal)
{
    retVal = m_stat->ino;
    return 0;
};
result_t BigIntStats::get_mode(int64_t& retVal)
{
    retVal = m_stat->mode;
    return 0;
};
result_t BigIntStats::get_nlink(int64_t& retVal)
{
    retVal = m_stat->nlink;
    return 0;
};
result_t BigIntStats::get_uid(int64_t& retVal)
{
    retVal = m_stat->uid;
    return 0;
};
result_t BigIntStats::get_gid(int64_t& retVal)
{
    retVal = m_stat->gid;
    return 0;
};
result_t BigIntStats::get_rdev(int64_t& retVal)
{
    retVal = m_stat->rdev;
    return 0;
};
result_t BigIntStats::get_size(int64_t& retVal)
{
    retVal = m_stat->size;
    return 0;
};
result_t BigIntStats::get_blksize(int64_t& retVal)
{
    retVal = m_stat->blksize;
    return 0;
};
result_t BigIntStats::get_blocks(int64_t& retVal)
{
    retVal = m_stat->blocks;
    return 0;
};
result_t BigIntStats::get_mtimeMs(int64_t& retVal)
{
    retVal = m_stat->mtime.date();
    return 0;
};
result_t BigIntStats::get_mtimeNs(int64_t& retVal)
{
    retVal = m_stat->mtimeNs;
    return 0;
};
result_t BigIntStats::get_atimeMs(int64_t& retVal)
{
    retVal = m_stat->atime.date();
    return 0;
};
result_t BigIntStats::get_atimeNs(int64_t& retVal)
{
    retVal = m_stat->atimeNs;
    return 0;
};
result_t BigIntStats::get_ctimeMs(int64_t& retVal)
{
    retVal = m_stat->ctime.date();
    return 0;
};
result_t BigIntStats::get_ctimeNs(int64_t& retVal)
{
    retVal = m_stat->ctimeNs;
    return 0;
};
result_t BigIntStats::get_birthtimeMs(int64_t& retVal)
{
    retVal = m_stat->birthtime.date();
    return 0;
};
result_t BigIntStats::get_birthtimeNs(int64_t& retVal)
{
    retVal = m_stat->birthtimeNs;
    return 0;
};
}