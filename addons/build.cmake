include(../vender/tools/get_env.cmake)

set(addons
    hello
)

set(WORK_ROOT $ENV{WORK_ROOT})
if(NOT WORK_ROOT)
    set(WORK_ROOT "${CMAKE_CURRENT_SOURCE_DIR}/../../")
endif()

set(BIN_ROOT "${WORK_ROOT}/bin")
set(OUT_ROOT "${WORK_ROOT}/out")
set(DIST_DIRNAME "${CMAKE_HOST_SYSTEM_NAME}_${BUILD_ARCH}_${BUILD_TYPE}")

if("${CLEAN_BUILD}" STREQUAL "true")
    rimraf(${BIN_ROOT}/${DIST_DIRNAME})
    rimraf(${OUT_ROOT}/${DIST_DIRNAME})
else()
    set(OUT_PATH "${OUT_ROOT}/${DIST_DIRNAME}")

    foreach(addon ${addons})
        build("${CMAKE_CURRENT_SOURCE_DIR}/addon-${addon}" "${OUT_PATH}/addon-${addon}")
    endforeach()

    foreach(addon ${addons})
        if(EXISTS "${CMAKE_CURRENT_SOURCE_DIR}/addon-${addon}/test")
            build("${CMAKE_CURRENT_SOURCE_DIR}/addon-${addon}/test" "${OUT_PATH}/addon-${addon}_test")
        endif()
    endforeach()
endif()
