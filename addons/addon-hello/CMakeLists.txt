cmake_minimum_required(VERSION 2.6)

set(CMAKE_WINDOWS_EXPORT_ALL_SYMBOLS ON)

set(name "addon-hello")
project(${name})

include(../../vender/tools/option.cmake)

# set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -fvisibility=default")
# set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fvisibility=default")

add_library(${name} SHARED ${src_list} ${src_platform_list})

set(LIBRARY_OUTPUT_PATH ${PROJECT_BINARY_DIR}/../../../bin/${CMAKE_HOST_SYSTEM_NAME}_${ARCH}_${BUILD_TYPE})
set(EXECUTABLE_OUTPUT_PATH ${PROJECT_BINARY_DIR}/../../../bin/${CMAKE_HOST_SYSTEM_NAME}_${ARCH}_${BUILD_TYPE})

include_directories(
	"${PROJECT_SOURCE_DIR}/include"
	"${PROJECT_SOURCE_DIR}/../../vender"
	"${CMAKE_CURRENT_BINARY_DIR}")

setup_result_library(${name})

# if(link_flags)
# 	set_target_properties(${name} PROPERTIES LINK_FLAGS "${link_flags}")
# endif()