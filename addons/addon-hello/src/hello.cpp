#include <stdio.h>

// #include <jssdk/fapi/fapi.h>
#include <jssdk/fapi/macros.h>

EXTERN_C_START

JSSDK_EXPORT void OnInitializeCjs()
{
    printf("Hello world");
}

EXTERN_C_END