cmake_minimum_required(VERSION 2.6)

project(addon_hello)

set(FIBJS_DIR "${PROJECT_SOURCE_DIR}/../../../")
set(VENDER_DIR "${FIBJS_DIR}/vender")
set(USED_BY_FIBJS "1")

include(${VENDER_DIR}/tools/Addon.cmake)