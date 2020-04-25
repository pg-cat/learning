## 下载 MinGW

在当前目录中找到 `mingw-get-setup.exe` 程序进行安装，需勾选以下两项：

- mingw32-base-bin

- mingw32-gcc-g++-bin

勾选完成后点击左上角 `Installation` 进行安装

## 配置环境变量

在电脑环境变量 `PATH` 中添加你安装 `MinGW` 的目录，如 `C:\MinGW\bin`

## 测试是否安装成功

- 在命令行中输入 `gcc` 提示此类报错：

```cmd
gcc.exe: fatal error: no input files
compilation terminated.
```

> 这是提示 `未找到输入文件` ，证明你的 `gcc` 已开始正常工作，安装成功

- 在命令行中输入 `gdb` 出现如下提示：

```cmd
GNU gdb (GDB) 7.6.1
Copyright (C) 2013 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.  Type "show copying"
and "show warranty" for details.
This GDB was configured as "mingw32".
For bug reporting instructions, please see:
<http://www.gnu.org/software/gdb/bugs/>.
(gdb)
```

> 并且光标在末尾等待输入，即是 `gdb` 安装成功