#include "ifs/tty.h"
#include "AsyncUV.h"
#include "TTYStream.h"

#ifdef _WIN32
#include <io.h>
#endif

namespace fibjs {

DECLARE_MODULE(tty);

result_t tty_base::isatty(int32_t fd, bool& retVal)
{
#ifndef _WIN32
    if (fd < 0)
        return CHECK_ERROR(CALL_E_INVALID_CALL);

    int32_t hr = ::isatty(fd);
#else
    if (fd == -2) {
        retVal = true;
        return 0;
    }

    if (fd < 0)
        return CHECK_ERROR(CALL_E_INVALID_CALL);

    int32_t hr = _isatty(fd);
    if (hr == FALSE && _lseek(fd, 0, SEEK_CUR) < 0)
        hr = TRUE;
#endif
    if (hr < 0)
        return CHECK_ERROR(LastError());

    retVal = !!hr;
    return 0;
}

result_t tty_base::get_readStream(obj_ptr<TTYStream_base>& retVal)
{
    Isolate* isolate = Isolate::current();

    if (!isolate->m_ttyReadSteram)
        isolate->m_ttyReadSteram = new TTYStream();

    Stream_base* stm = (Stream_base*)isolate->m_ttyReadSteram;

    retVal = (TTYStream_base*)stm;

    return 0;
}

result_t TTYStream::get_isRaw(bool& retVal)
{
    retVal = m_isRaw;
    return 0;
}

result_t TTYStream::get_isTTY(bool& retVal)
{
    retVal = true;
    return 0;
}

result_t TTYStream::setRawMode(bool isRawMode, obj_ptr<TTYStream_base>& retVal)
{
    obj_ptr<Stream_base> stm_stdin;
    process_base::get_stdin(stm_stdin);

    UVStream* stm = (UVStream*)(Stream_base*)stm_stdin;

    uv_call([&] {
        return uv_tty_set_mode(&stm->m_tty, isRawMode ? UV_TTY_MODE_RAW : UV_TTY_MODE_NORMAL);
    });
    m_isRaw = isRawMode;

    retVal = this;

    return 0;
}

result_t TTYStream::get_fd(int32_t& retVal)
{
    return CHECK_ERROR(CALL_E_INVALID_CALL);
}

result_t TTYStream::read(int32_t bytes, obj_ptr<Buffer_base>& retVal, AsyncEvent* ac)
{
    return m_stream_stdin->read(bytes, retVal, ac);
}

result_t TTYStream::write(Buffer_base* data, AsyncEvent* ac)
{
    return CHECK_ERROR(CALL_E_INVALID_CALL);
}

result_t TTYStream::flush(AsyncEvent* ac)
{
    return CHECK_ERROR(CALL_E_INVALID_CALL);
}

result_t TTYStream::close(AsyncEvent* ac)
{
    return CHECK_ERROR(CALL_E_INVALID_CALL);
}

result_t TTYStream::copyTo(Stream_base* stm, int64_t bytes, int64_t& retVal, AsyncEvent* ac)
{
    return CHECK_ERROR(CALL_E_INVALID_CALL);
}

}