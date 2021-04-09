/**
 * @author richardo2016@gmail.com
 * @email richardo2016
 * @create date 2021-04-10 02:16:35
 * @modify date 2021-04-10 02:16:35
 * 
 * @desc TTYStream.h
 */

#pragma once

#include "ifs/TTYStream.h"
#include "ifs/process.h"
#include "UVStream.h"

namespace fibjs {

#ifndef _WIN32
#define _fileno fileno
#endif

class TTYStream : public TTYStream_base {
public:
    TTYStream()
        : m_isRaw(false)
    {
        process_base::get_stdin(m_stream_stdin);
        process_base::get_stdout(m_stream_stdout);
        process_base::get_stderr(m_stream_stdoerr);
    }

public:
    // Stream_base
    virtual result_t get_fd(int32_t& retVal);
    virtual result_t read(int32_t bytes, obj_ptr<Buffer_base>& retVal, AsyncEvent* ac);
    virtual result_t write(Buffer_base* data, AsyncEvent* ac);
    virtual result_t flush(AsyncEvent* ac);
    virtual result_t close(AsyncEvent* ac);
    virtual result_t copyTo(Stream_base* stm, int64_t bytes, int64_t& retVal, AsyncEvent* ac);

public:
    // TTYStream_base
    virtual result_t get_isRaw(bool& retVal);
    virtual result_t get_isTTY(bool& retVal);
    virtual result_t setRawMode(bool isRawMode, obj_ptr<TTYStream_base>& retVal);

public:
    bool m_isRaw;

private:
    obj_ptr<Stream_base> m_stream_stdin;
    obj_ptr<Stream_base> m_stream_stdout;
    obj_ptr<Stream_base> m_stream_stdoerr;
};

} /* namespace fibjs */
