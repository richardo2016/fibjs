/*
 * RTCDataChannel.h
 *
 *  Created on: Apr 27, 2024
 *      Author: lion
 */

#pragma once

#define RTC_STATIC

#include "ifs/RTCDataChannel.h"
#include "datachannel/include/rtc/rtc.hpp"

namespace fibjs {

class RTCDataChannel : public RTCDataChannel_base {
public:
    RTCDataChannel(const std::shared_ptr<rtc::DataChannel>& dataChannel);
    ~RTCDataChannel();

    EVENT_SUPPORT();

public:
    // RTCDataChannel_base
    virtual result_t send(Buffer_base* data);
    virtual result_t send(exlib::string data);
    virtual result_t close();
    virtual result_t get_id(int32_t& retVal);
    virtual result_t get_label(exlib::string& retVal);
    virtual result_t get_protocol(exlib::string& retVal);
    virtual result_t get_bufferedAmount(double& retVal);

public:
    EVENT_FUNC(open);
    EVENT_FUNC(message);
    EVENT_FUNC(close);
    EVENT_FUNC(error);
    EVENT_FUNC(bufferedamountlow);

private:
    std::shared_ptr<rtc::DataChannel> m_dataChannel;
};

} /* namespace fibjs */