#!/bin/bash

# generate jsc_test-<arch>.jsc, jsc_test-<arch>-<os>.jsc

set -ev

if [[ $TARGET_OS_NAME == 'Linux' ]]; then
    if [[ $TARGET_ARCH == "arm" ]]; then # generate jsc on arm using qemu
        docker run --rm --privileged multiarch/qemu-user-static:register
        DIR=`pwd`;docker run --privileged=true -t --env CI=$CI -v ${DIR}:/home/ci fibjs/build-env:clang /bin/sh -c "
        cd /home;
        sh init_armhf.sh;
        cp -f ./ci/bin/Linux_arm_release/fibjs ./arm_root_fs/bin/fibjs;
        chroot ./arm_root_fs fibjs ./test/vm_test/build_jsc.js"
    elif [[ $TARGET_ARCH == "arm64" ]]; then # generate jsc on arm64 using qemu
        docker run --rm --privileged multiarch/qemu-user-static:register
        DIR=`pwd`;docker run --privileged=true -t --env CI=$CI -v ${DIR}:/home/ci fibjs/build-env:clang /bin/sh -c "
        cd /home;
        sh init_arm64.sh;
        cp -f ./ci/bin/Linux_arm64_release/fibjs ./arm64_root_fs/bin/fibjs;
        chroot ./arm64_root_fs fibjs ./test/vm_test/build_jsc.js"
    else # Other Linux
        ./bin/$DIST_DIR/fibjs ./test/vm_test/build_jsc.js
    fi
else # Darwin/Windows
    ./bin/$DIST_DIR/fibjs ./test/vm_test/build_jsc.js
fi

exit 0;