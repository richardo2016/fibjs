if NOT EXIST llvm-installer.exe (
    IF /I "%PLATFORM%" == "x64" (
        appveyor DownloadFile http://releases.llvm.org/9.0.0/LLVM-9.0.0-win64.exe -FileName llvm-installer.exe
        ECHO "install llvm for x64"
    )
    IF /I "%PLATFORM%" == "x86" (
        appveyor DownloadFile http://releases.llvm.org/9.0.0/LLVM-9.0.0-win32.exe -FileName llvm-installer.exe
        ECHO "install llvm for x86"
    )
)

START /WAIT llvm-installer.exe /S /D=C:\"Program Files\LLVM"
@set PATH="C:\Program Files\LLVM\bin";%PATH%

EXIT