#!/usr/bin/env bash

get_envs() {
	HOST_OS=`uname`
	HOST_ARCH=`uname -m`

	case $HOST_OS in
		MINGW*|CYGWIN*) HOST_OS="win32" ;;
	esac

  case $OSTYPE in
    msys*|cygwin*) HOST_OS="win32" ;;
  esac

	case $HOST_ARCH in
		i386|i686) HOST_ARCH="x86";;
		x86_64|amd64) HOST_ARCH="x64";;
		armv6) HOST_ARCH="armv6";;
		armv7|armv7s|armv7l) HOST_ARCH="arm";;
		aarch64) HOST_ARCH="arm64";;
		mips|mipsel) HOST_ARCH="mips";;
		mips64) HOST_ARCH="mips64";;
		powerpc) HOST_ARCH="ppc";;
		ppc64) HOST_ARCH="ppc64";;
	esac
}

get_envs;

if [ ! -z $TARGET_ARCH ]; then
  VENDER_ARCH=${TARGET_ARCH}
else
  VENDER_ARCH=${HOST_ARCH}
fi
if [ -z $TARGET_OS ]; then
  TARGET_OS=${HOST_OS}
fi

case $BUILD_TYPE in
  *) BUILD_TYPE=release ;;
  debug) BUILD_TYPE=debug ;;
esac

VENDER_OS=`echo "$TARGET_OS" | tr "[:upper:]" "[:lower:]"`

case "${VENDER_ARCH}" in
  i386) VENDER_ARCH=x86 ;;
  amd64) VENDER_ARCH=x64 ;;
esac

echo "VENDER_ARCH to downloaded is $VENDER_ARCH";

VENDER_ASSETS_FILE="fibjs_vender-$VENDER_OS-$VENDER_ARCH-$BUILD_TYPE.tar.gz"
if [[ "$BUILD_TARGET" != "" ]]; then
    VENDER_RELEASE_FILE="fibjs_vender-$BUILD_TARGET-$VENDER_ARCH-$BUILD_TYPE.tar.gz"
else
    VENDER_RELEASE_FILE="fibjs_vender-$VENDER_OS-$VENDER_ARCH-$BUILD_TYPE.tar.gz"
fi

# get vender name

FIBJS_DIR=`pwd`
FIBJS_VENDER_DIR="$FIBJS_DIR/vender"
BIN_DIR="$FIBJS_DIR/bin"

cd $FIBJS_VENDER_DIR

git fetch --all --prune;

LATEST_REV_CROSS_ALL_BRANCHES=`git rev-list --tags --max-count=1`
LATEST_VENDER_TAG=`git describe --tags $LATEST_REV_CROSS_ALL_BRANCHES`

echo "LATEST_VENDER_TAG is $LATEST_VENDER_TAG"

cd $FIBJS_DIR

# ensure bin directory exsited
mkdir -p $BIN_DIR
cd $BIN_DIR;
if [ ! -e $BIN_DIR/$VENDER_ASSETS_FILE ]; then
    ASSET_URL=https://github.com/fibjs/fibjs_vender/releases/download/$LATEST_VENDER_TAG/$VENDER_RELEASE_FILE
    echo "starting download vender from $ASSET_URL"
    curl -sL $ASSET_URL -o $BIN_DIR/$VENDER_ASSETS_FILE
    ls -la ./;
    echo "download vender success!"
fi

if [ ! -e $BIN_DIR/$VENDER_ASSETS_FILE ]; then
    echo "no built vender found"
    unset USE_VENDER_DIST
else
    echo "built vender found, would extract it";
    tar -xvzf "$BIN_DIR/$VENDER_ASSETS_FILE" -C $FIBJS_DIR;
fi

# go back to root
cd $FIBJS_DIR;
