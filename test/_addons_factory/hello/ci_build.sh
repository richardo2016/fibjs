#!/bin/bash

DIR=`pwd`;

mkdir -p $DIR/build && cd build;

rm -rf ./*;

cmake \
	-DCMAKE_MAKE_PROGRAM=make \
	-G"Unix Makefiles" \
    .. > CMake.log;

if [ ! "$BUILD_JOBS" = "" ]; then
	sh -c "${BUILD_VERBOSE} make -j${BUILD_JOBS}"
else
	sh -c "${BUILD_VERBOSE} make"
fi

cd $DIR;