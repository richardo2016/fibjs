## compile

```bash
mkdir -p build && cd build
rm -rf ./* && cmake ../ && make
```

## view symbols in dynamic library

### Unix

```bash
# use nm
nm -n -m libhello_library.dylib

# use objdump on mac
objdump -syms libhello_library.dylib
```

### Windows

```cmd
>dumpbin /LINKERMEMBER libjssdk.lib
```