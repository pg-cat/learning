【2019.12.2】以下部分整理自[【菜鸟教程：Python 教程】](https://www.runoob.com/python/python-tutorial.html)

---

# Python

Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言

- 由 Guido van Rossum 于 1989 年底发明，第一个公开发行版发行于 1991 年

- 像 Perl 语言一样，Python 源代码同样遵循 GPL(GNU General Public License) 协议

> 官方宣布，2020 年 1 月 1 日， 停止 Python 2 的更新
>> Python 2.7 被确定为最后一个 Python 2.x 版本

> **在继续本教程之前，你应该了解一些基本的计算机编程术语；如果你学习过 PHP ，ASP 等编程语言，将有助于你更快的了解 Python 编程**

## 简介

> Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言

Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构

- Python 是一种解释型语言

    这意味着开发过程中没有了编译这个环节

    类似于PHP和Perl语言

- Python 是交互式语言

    这意味着，你可以在一个 Python 提示符 `>>>` 后直接执行代码

- Python 是面向对象语言

    这意味着 Python 支持面向对象的风格或代码封装在对象的编程技术

- Python 是初学者的语言

    Python 对初级程序员而言，是一种伟大的语言，它支持广泛的应用程序开发，从简单的文字处理到 WWW 浏览器再到游戏

### 发展历史

Python 是由 Guido van Rossum 在八十年代末和九十年代初，在荷兰国家数学和计算机科学研究所设计出来的

- Python 本身也是由诸多其他语言发展而来的,这包括

  - ABC
  - Modula-3
  - C
  - C++
  - Algol-68
  - SmallTalk
  - Unix shell
  - 等其他的脚本语言等等

- 像 Perl 语言一样，Python 源代码同样遵循 GPL(GNU General Public License)协议

- 现在 Python 是由一个核心开发团队在维护，Guido van Rossum 仍然占据着至关重要的作用，指导其进展

- Python 2.7 被确定为最后一个 Python 2.x 版本，它除了支持 Python 2.x 语法外，还支持部分 Python 3.1 语法

### 特点

- 易于学习

  Python 有相对较少的关键字，结构简单，和一个明确定义的语法，学习起来更加简单

- 易于阅读

  Python 代码定义的更清晰

- 易于维护

  Python 的成功在于它的源代码是相当容易维护的

- 一个广泛的标准库

  Python 的最大的优势之一是丰富的库，跨平台的，在 UNIX 、Windows 和 Macintosh 兼容很好

- 互动模式

  互动模式的支持，你可以从终端输入执行代码并获得结果的语言，互动的测试和调试代码片断

- 可移植

  基于其开放源代码的特性，Python 已经被移植(也就是使其工作)到许多平台

- 可扩展

  如果你需要一段运行很快的关键代码，或者是想要编写一些不愿开放的算法，你可以使用 C 或 C++ 完成那部分程序，然后从你的 Python 程序中调用

- 数据库

  Python 提供所有主要的商业数据库的接口

- GUI 编程

  Python 支持 GUI 可以创建和移植到许多系统调用

- 可嵌入

  你可以将 Python 嵌入到 C / C++ 程序，让你的程序的用户获得 **`脚本化`** 的能力

## 环境搭建

> Python 可应用于多平台包括 Linux 和 Mac OS X

你可以通过终端窗口输入 `python` 命令来查看本地是否已经安装 Python 以及 Python 的安装版本

- Unix (Solaris 、Linux 、FreeBSD 、AIX 、HP/UX 、SunOS 、IRIX 等等)
- Win 9x/NT/2000
- Macintosh (Intel 、PPC 、68K)
- OS/2
- DOS (多个DOS版本)
- PalmOS
- Nokia 移动手机
- Windows CE
- Acorn/RISC OS
- BeOS
- Amiga
- VMS/OpenVMS
- QNX
- VxWorks
- Psion
- Python 同样可以移植到 Java 和 .NET 虚拟机上

### 下载

Python 最新源码，二进制文档，新闻资讯等可以在 Python 的官网查看到：

- Python官网：https://www.python.org/

- Python文档下载地址：https://www.python.org/doc/

  简体中文版本文档地址：https://docs.python.org/zh-cn/3/

### 安装

Python已经被移植在许多平台上(经过改动使它能够工作在不同平台上)

- 下载适用于你使用平台的二进制代码，然后安装 Python

- 如果平台的二进制代码是不可用的，你需要使用 C 编译器手动编译源代码

- 编译的源代码，功能上有更多的选择性，为 Python 安装提供了更多的灵活性

以下是各个平台安装包的下载地址：

![图片](https://www.runoob.com/wp-content/uploads/2013/11/DC24DD0C-08A2-4D61-8C6F-4CA1EEB23535.jpg)

### Unix & Linux 平台安装 Python

以下为在 Unix & Linux 平台上安装 Python 的简单步骤：

- 打开 WEB 浏览器访问 https://www.python.org/downloads/source/

- 选择适用于 Unix / Linux 的源码压缩包

- 下载及解压压缩包

- 如果你需要自定义一些选项修改 `Modules/Setup`

- 执行 `./configure` 脚本

- make

- make install

> 执行以上操作后，Python 会安装在 `/usr/local/bin` 目录中，Python 库安装在 `/usr/local/lib/pythonXX` ，`XX` 为你使用的 Python 的版本号

### Window 平台安装 Python

以下为在 Window 平台上安装 Python 的简单步骤：

- 打开 WEB 浏览器访问 https://www.python.org/downloads/windows/

![图片](https://www.runoob.com/wp-content/uploads/2013/11/721E917D-CCA5-4F37-8FD6-486315EC8CF8.png)

- 在下载列表中选择 Window 平台安装包，包格式为：`python-XYZ.msi` 文件 ，`XYZ` 为你要安装的版本号

  - 要使用安装程序 `python-XYZ.msi` , Windows 系统必须支持 `Microsoft Installer 2.0` 搭配使用

    只要保存安装文件到本地计算机，然后运行它，看看你的机器支持 MSI

    Windows XP 和更高版本已经有 `MSI` ，很多老机器也可以安装 MSI

![图片](https://www.runoob.com/wp-content/uploads/2013/11/20180711-160607.png)

- 下载后，双击下载包，进入 Python 安装向导，安装非常简单，你只需要使用默认的设置一直点击 **`下一步`** 直到安装完成即可

### MAC 平台安装 Python

MAC 系统一般都自带有 Python2.x 版本的环境，你也可以在链接 https://www.python.org/downloads/mac-osx/ 上下载最新版安装

### 环境变量配置

> 程序和可执行文件可以在许多目录，而这些路径很可能不在操作系统提供可执行文件的搜索路径中

**`path(路径)`** 存储在环境变量中，这是由操作系统维护的一个命名的字符串

- 这些变量包含可用的命令行解释器和其他程序的信息

- Unix 或 Windows 中路径变量为 PATH ( UNIX 区分大小写，Windows 不区分大小写)

- 在 Mac OS 中，安装程序过程中改变了 python 的安装路径

  如果你需要在其他目录引用 Python ，你必须在 path 中添加 Python 目录

#### 在 Unix / Linux 设置环境变量

- 在 `csh shell:` 执行以下代码

```
setenv PATH "$PATH:/usr/local/bin/python"
```

- 在 `bash shell (Linux):` 执行以下代码

```
export PATH="$PATH:/usr/local/bin/python"
```

- 在 `sh` 或者 `ksh shell:` 执行以下代码

```
PATH="$PATH:/usr/local/bin/python"
```

> 注意: `/usr/local/bin/python` 是 Python 的安装目录

#### 在 Windows 设置环境变量

> 在环境变量中添加 Python 目录

在命令提示框中( cmd )执行以下命令：

```
path=%path%;C:\Python
```

> 注意: `C:\Python` 是 Python 的安装目录

也可以通过以下方式设置：

- 右键点击 【计算机】，然后点击 【属性】

- 然后点击 【高级系统设置】

- 选择 【系统变量】 窗口下面的 【 `Path` 】，双击即可！

- 然后在【 `Path` 】行，添加  安装路径即可(我的 `D:\Python32` )，所以在后面，添加该路径即可(记住，路径直接用分号 `；` 隔开！)

- 最后设置成功以后，在 cmd 命令行，输入命令 `python` ，就可以有相关显示

![图片](https://www.runoob.com/wp-content/uploads/2013/11/201209201707594792.png)

### Python 环境变量

下面几个重要的环境变量，它应用于Python ：

变量名|描述
-|-
PYTHONPATH|PYTHONPATH 是 Python 搜索路径，默认 import 的模块都会从 PYTHONPATH 里面寻找
PYTHONSTARTUP|Python 启动后，先寻找 PYTHONSTARTUP 环境变量，然后执行此变量指定的文件中的代码
PYTHONCASEOK|加入 PYTHONCASEOK 的环境变量, 就会使 python 导入模块的时候不区分大小写
PYTHONHOME|另一种模块搜索路径，它通常内嵌于的 PYTHONSTARTUP 或 PYTHONPATH 目录中，使得两个模块库更容易切换

### 运行 Python

有三种方式可以运行 Python ：

#### 交互式解释器

你可以通过命令行窗口进入 python 并开在交互式解释器中开始编写 Python 代码

- 你可以在 Unix ，DOS 或任何其他提供了命令行或者 shell 的系统进行 python 编码工作

```python
$ python # Unix/Linux

# 或者

C:>python # Windows/DOS
```

以下为 Python 命令行参数：

选项|描述
-|-
-d|在解析时显示调试信息
-O|生成优化代码 ( `.pyo` 文件 )
-S|启动时不引入查找Python路径的位置
-V|输出Python版本号
-X|从 1.6 版本之后基于内建的异常（仅仅用于字符串）已过时
-c cmd|执行 Python 脚本，并将运行结果作为 cmd 字符串
file|在给定的 python 文件执行 python 脚本

#### 命令行脚本

在你的应用程序中通过引入解释器可以在命令行中执行 Python 脚本，如下所示：

```python
$ python script.py # Unix/Linux

# 或者

C:>python script.py # Windows/DOS
```

> 注意：在执行脚本时，请检查脚本是否有可执行权限

#### 集成开发环境 PyCharm

PyCharm 是由 JetBrains 打造的一款 Python IDE ，支持 macOS 、Windows 、Linux 系统

- 功能：调试、语法高亮、Project 管理、代码跳转、智能提示、自动完成、单元测试、版本控制……

- PyCharm 下载地址：https://www.jetbrains.com/pycharm/download/

- PyCharm 安装地址：http://www.runoob.com/w3cnote/pycharm-windows-install.html

![图片](https://www.runoob.com/wp-content/uploads/2014/06/pycharm_ui_darcula.png)

## 中文编码

> 前面你已经学会了如何用 Python 输出 `Hello, World!` ，英文没有问题，但是如果你输出中文字符 **`你好，世界`** 就有可能会碰到中文编码问题

Python 文件中如果未指定编码，在执行过程会出现报错：

```python
#!/usr/bin/python

print ("你好，世界")
```

以上程序执行输出结果为：

```
  File "test.py", line 2
SyntaxError: Non-ASCII character '\xe4' in file test.py on line 2, but no encoding declared; see http://www.python.org/peps/pep-0263.html for details
```

> 这是因为 Python 中默认的编码格式是 ASCII 格式，在没修改编码格式时无法正确打印汉字，所以在读取中文时会报错
>> 解决方法为只要在文件开头加入 `# -*- coding: UTF-8 -*-` 或者 `# coding=utf-8` 就行了
>> - 注意：`# coding=utf-8` 的 `=` 号两边不要空格

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

print "你好，世界";
```

输出结果为：

```
你好，世界
```

> 所以如果在代码中包含中文，就需要在头部指定编码

> 注意
> - `Python3.X` 源码文件默认使用 `utf-8` 编码，所以可以正常解析中文，无需指定 UTF-8 编码
>> 如果你使用编辑器，同时需要设置 `py` 文件存储的格式为 `UTF-8` ，否则会出现类似以下错误信息：

```
SyntaxError: (unicode error) ‘utf-8’ codec can’t decode byte 0xc4 in position 0:
invalid continuation byte
```

> Pycharm 设置 `utf-8` 步骤：
> - 进入 `file` > `Settings` ，在输入框搜索 `encoding`
> - 找到 `Editor` > `File encodings` ，将 `IDE Encoding` 和 `Project Encoding` 设置为 `utf-8`

![图片](https://www.runoob.com/wp-content/uploads/2014/12/pycharm-utf8.jpg)

## 基础语法

Python 语言与 Perl ，C 和 Java 等语言有许多相似之处(但是，也存在一些差异)

### 第一个 Python 程序

#### 交互式编程

交互式编程不需要创建脚本文件，是通过 Python 解释器的交互模式进来编写代码

- linux上你只需要在命令行中输入 Python 命令即可启动交互式编程,提示窗口如下：

```
$ python
Python 2.7.6 (default, Sep  9 2014, 15:04:36)
[GCC 4.2.1 Compatible Apple LLVM 6.0 (clang-600.0.39)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

- Window 上在安装 Python 时已经安装了交互式编程客户端，提示窗口如下：

![图片](https://www.runoob.com/wp-content/uploads/2013/11/prompt_1.png)

在 python 提示符中输入以下文本信息，然后按 Enter 键查看运行效果：

```
>>> print ("Hello, Python!")
```

在 Python 2.7.6 版本中,以上实例输出结果如下：

```
Hello, Python!
```

#### 脚本式编程

通过脚本参数调用解释器开始执行脚本，直到脚本执行完毕

> 当脚本执行完成后，解释器不再有效

写一个简单的 Python 脚本程序：

- 所有 Python 文件将以 `.py` 为扩展名

- 将以下的源代码拷贝至 `test.py` 文件中

```python
print ("Hello, Python!")
```

这里，假设你已经设置了 Python 解释器 PATH 变量，使用以下命令运行程序：

```
$ python test.py
```

- 输出结果：

```
Hello, Python!
```

让我们尝试另一种方式来执行 Python 脚本，修改 test.py 文件，如下所示：

```python
#!/usr/bin/python

print ("Hello, Python!")
```

- 这里，假定你的 Python 解释器在 `/usr/bin` 目录中，使用以下命令执行脚本：

```
$ chmod +x test.py     # 脚本文件添加可执行权限
$ ./test.py
```

- 输出结果：

```
Hello, Python!
```

### 标识符

在 Python 里，标识符由字母、数字、下划线组成

- 在 Python 中，所有标识符可以包括英文、数字以及下划线( _ )，但不能以数字开头

- Python 中的标识符是区分大小写的

- 以下划线开头的标识符是有特殊意义的

  - 以单下划线开头 `_foo` 的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 `from xxx import *` 而导入

  - 以双下划线开头的 `__foo` 代表类的私有成员，以双下划线开头和结尾的 `__foo__` 代表 Python 里特殊方法专用的标识，如 `__init__()` 代表类的构造函数

- Python 可以同一行显示多条语句，方法是用分号 `;` 分开，如：

```
>>> print ('hello');print ('runoob');
hello
runoob
```

### 保留字符

下面的列表显示了在 Python 中的保留字

- 这些保留字不能用作常数或变数，或任何其他标识符名称

- 所有 Python 的关键字只包含小写字母


-|-|-
-|-|-
and|exec|not
assert|finally|or
break|for|pass
class|from|print
continue|global|raise
def|if|return
del|import|try
elif|in|while
else|is|with
except|lambda|yield

### 行和缩进

学习 Python 与其他语言最大的区别就是，Python 的代码块不使用大括号 `{}` 来控制类，函数以及其他逻辑判断

- python 最具特色的就是 **`用缩进来写模块`**

- 缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白数量，这个必须严格执行

以下实例缩进为四个空格：

```python
if True:
    print ("True")
else:
    print ("False")
```

- 以下代码将会执行错误：

```pthon
#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 文件名：test.py

if True:
    print ("Answer")
    print ("True")
else:
    print ("Answer")
    # 没有严格缩进，在执行时会报错
  print ("False")
```

- 执行以上代码，会出现如下错误提醒：

```python
  File "test.py", line 11
    print ("False")
                  ^
IndentationError: unindent does not match any outer indentation level
```

- `IndentationError: unindent does not match any outer indentation level` 错误表明，你使用的缩进方式不一致，有的是 `tab` 键缩进，有的是空格缩进，改为一致即可

  如果是 `IndentationError: unexpected indent` 错误, 则 python 编译器是在告诉你 **`Hi，老兄，你的文件里格式不对了，可能是tab和空格没对齐的问题`** ，所有 python 对格式要求非常严格

- 因此，在 Python 的代码块中必须使用相同数目的行首缩进空格数

- 建议你在每个缩进层次使用 **`单个制表符`** 或 **`两个空格`** 或 **`四个空格`** , 切记不能混用

### 多行语句

Python 语句中一般以新行作为语句的结束符

- 但是我们可以使用斜杠 `\` 将一行的语句分为多行显示

```python
total = item_one + \
        item_two + \
        item_three
```

- 语句中包含 `[]` , `{}` 或 `()` 括号就不需要使用多行连接符

```python
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
```

### 引号

Python 可以使用单引号 `'` 、双引号 `"` 、三个单引号 `'''` 或三个双引号 `"""` 来表示字符串，引号的开始与结束必须的是相同类型的

- 其中三引号可以由多行组成，编写多行文本的快捷语法，常用于文档字符串，在文件的特定地点，被当做注释

```python
word = 'word'
sentence = "这是一个句子。"
paragraph = """这是一个段落。
包含了多个语句"""
```

### 注释

Python 中单行注释采用 `#` 开头

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 文件名：test.py

# 第一个注释
print ("Hello, Python!")  # 第二个注释
```

- 输出结果：

```
Hello, Python!
```

- 注释可以在语句或表达式行末：

```python
name = "Madisetti" # 这是一个注释
```

python 中多行注释使用三个单引号 `'''` 或三个双引号 `"""`

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 文件名：test.py


'''
这是多行注释，使用单引号。
这是多行注释，使用单引号。
这是多行注释，使用单引号。
'''

"""
这是多行注释，使用双引号。
这是多行注释，使用双引号。
这是多行注释，使用双引号。
"""
```

### 空行

函数之间或类的方法之间用空行分隔，表示一段新的代码的开始

- 类和函数入口之间也用一行空行分隔，以突出函数入口的开始

空行与代码缩进不同，空行并不是 Python 语法的一部分

- 书写时不插入空行，Python 解释器运行也不会出错

- 但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构

> 记住：空行也是程序代码的一部分

### 等待用户输入

下面的程序执行后就会等待用户输入，按回车键后就会退出：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

raw_input("按下 enter 键退出，其他任意键显示...\n")
```

- 以上代码中 ，`\n` 实现换行

  一旦用户按下 enter 回车键退出，其它键显示

### 同一行显示多条语句

Python 可以在同一行中使用多条语句，语句之间使用分号 `;` 分割，以下是一个简单的实例：

```python
#!/usr/bin/python

import sys; x = 'runoob'; sys.stdout.write(x + '\n')
```

- 执行以上代码，输入结果为：

```
$ python test.py
runoob
```

### print 输出

print 默认输出是换行的，如果要实现不换行需要在变量末尾加上逗号 `,`

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

x='a'
y='b'

# 换行输出
print x
print y

print '--------------'

# 不换行输出
print x,
print y

print '--------------'

# 不换行输出
print x,y
```

- 以上实例执行结果为：

```
a
b
--------------
a b
--------------
a b
```

### 多个语句构成代码组

缩进相同的一组语句构成一个代码块，我们称之代码组

- 像 `if` 、`while` 、`def` 和 `class` 这样的复合语句，首行以关键字开始，以冒号 `:` 结束，该行之后的一行或多行代码构成代码组

- 我们将首行及后面的代码组称为一个子句(`clause` )

```python
if expression :
   suite
elif expression :
   suite
else :
   suite
```

### 命令行参数

很多程序可以执行一些操作来查看一些基本信息，Python 可以使用 -h 参数查看各参数帮助信息：

```
$ python -h
usage: python [option] ... [-c cmd | -m mod | file | -] [arg] ...
Options and arguments (and corresponding environment variables):
-c cmd : program passed in as string (terminates option list)
-d     : debug output from parser (also PYTHONDEBUG=x)
-E     : ignore environment variables (such as PYTHONPATH)
-h     : print this help message and exit

[ etc. ]
```

> 我们在使用脚本形式执行 Python 时，可以接收命令行输入的参数，具体使用可以参照[【 Python 命令行参数】](https://www.runoob.com/python/python-command-line-arguments.html)

## 变量类型

变量存储在内存中的值，这就意味着在创建变量时会在内存中开辟一个空间

- 基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中

- 因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符

### 变量赋值

Python 中的变量赋值不需要类型声明

- 每个变量在内存中创建，都包括变量的标识，名称和数据这些信息

- 每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建

- 等号 `=` 用来给变量赋值

- 等号 `=` 运算符左边是一个变量名，等号 `=` 运算符右边是存储在变量中的值

实例( `Python 2.0+` )

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

counter = 100 # 赋值整型变量
miles = 1000.0 # 浮点型
name = "John" # 字符串

print counter
print miles
print name
```

- 以上实例中，`100` ，`1000.0` 和 `"John"` 分别赋值给 `counter` ，`miles` ，`name` 变量

- 执行以上程序会输出如下结果：

```
100
1000.0
John
```

### 多个变量赋值

Python 允许同时为多个变量赋值

```python
a = b = c = 1
```

- 以上实例，创建一个整型对象，值为 `1` ，三个变量被分配到相同的内存空间上

- 我们也可以为多个对象指定多个变量

```python
a, b, c = 1, 2, "john"
```

- 以上实例，两个整型对象 `1` 和 `2` 分别分配给变量 `a` 和 `b` ，字符串对象 `"john"` 分配给变量 `c`

### 标准数据类型

在内存中存储的数据可以有多种类型，例如

- 一个人的年龄可以用数字来存储

- 他的名字可以用字符来存储

> Python 定义了一些标准类型，用于存储各种类型的数据

Python 有五个标准的数据类型：

- Numbers 数字
- String 字符串
- List 列表
- Tuple 元组
- Dictionary 字典

### 数字

数字数据类型用于存储数值

- 他们是不可改变的数据类型，这意味着改变数字数据类型会分配一个新的对象

- 当你指定一个值时，Number 对象就会被创建：

```python
var1 = 1
var2 = 10
```

- 你也可以使用 `del` 语句删除一些对象的引用

```python
del var1[,var2[,var3[....,varN]]]]
```

- 你可以通过使用 `del` 语句删除单个或多个对象的引用

```python
del var
del var_a, var_b
```

Python 支持四种不同的数字类型：

- int 有符号整型
- long 长整型(也可以代表八进制和十六进制)
- float 浮点型
- complex 复数

一些数值类型的实例：

int|long|float|complex
-|-|-|-
10|51924361L|0.0|3.14j
100|-0x19323L|15.20|45.j
-786|0122L|-21.9|9.322e-36j
080|0xDEFABCECBDAECBFBAEl|32.3e+18|.876j
-0490|535633629843L|-90.|-.6545+0J
-0x260|-052318172735L|-32.54e100|3e+26J
0x69|-4721885298529L|70.2E-12|4.53e-7j

- 长整型也可以使用小写 `l` ，但是还是建议您使用大写 `L` ，避免与数字 `1` 混淆( Python 使用 `L` 来显示长整型)

- Python 还支持复数，复数由实数部分和虚数部分构成，可以用 `a + bj` ，或者 `complex(a,b)` 表示， 复数的实部 `a` 和虚部 `b` 都是浮点型

> 注意：
> - `long` 类型只存在于 `Python2.X` 版本中，在 `2.2` 以后的版本中，`int` 类型数据溢出后会自动转为 `long` 类型
> - 在 `Python3.X` 版本中 `long` 类型被移除，使用 `int` 替代

### 字符串

字符串或串 `String` 是由数字、字母、下划线组成的一串字符，一般记为：

```
s="a1a2···an"(n>=0)
```

- 它是编程语言中表示文本的数据类型

Python 的字串列表有 `2` 种取值顺序：

- 从左到右索引默认 `0` 开始的，最大范围是字符串长度少 `1`

- 从右到左索引默认 `-1` 开始的，最大范围是字符串开头

![图片](https://www.runoob.com/wp-content/uploads/2013/11/python-string-slice.png)

- 如果你要实现从字符串中获取一段子字符串的话，可以使用 **`[头下标:尾下标]`** 来截取相应的字符串，其中下标是从 `0` 开始算起，可以是正数或负数，下标可以为空表示取到头或尾

- **`[头下标:尾下标]`** 获取的子字符串包含头下标的字符，但不包含尾下标的字符

```
>>> s = 'abcdef'
>>> s[1:5]
'bcde'
```

当使用以冒号分隔的字符串，Python 返回一个新的对象，结果包含了以这对偏移标识的连续的内容，左边的开始是包含了下边界

- 上面的结果包含了 `s[1]` 的值 `b` ，而取到的最大范围不包括尾下标，就是 `s[5]` 的值 `f`

![图片](https://www.runoob.com/wp-content/uploads/2013/11/o99aU.png)

加号 `+` 是字符串连接运算符，星号 `*` 是重复操作，实例( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

str = 'Hello World!'

print str           # 输出完整字符串
print str[0]        # 输出字符串中的第一个字符
print str[2:5]      # 输出字符串中第三个至第六个之间的字符串
print str[2:]       # 输出从第三个字符开始的字符串
print str * 2       # 输出字符串两次
print str + "TEST"  # 输出连接的字符串
```

- 以上实例输出结果：

```python
Hello World!
H
llo
llo World!
Hello World!Hello World!
Hello World!TEST
```

Python 列表截取可以接收第三个参数，参数作用是截取的步长

- 以下实例在索引 `1` 到索引 `4` 的位置并设置为步长为 `2` (间隔一个位置)来截取字符串：

![图片](https://www.runoob.com/wp-content/uploads/2013/11/python_list_slice_2.png)

### 列表

`List` (列表)是 Python 中使用最频繁的数据类型

- 列表可以完成大多数集合类的数据结构实现

  - 它支持字符，数字，字符串甚至可以包含列表(即嵌套)

- 列表用 `[ ]` 标识，是 Python 最通用的复合数据类型

- 列表中值的切割也可以用到变量 **`[头下标:尾下标]`** ，就可以截取相应的列表

  - 从左到右索引默认 `0` 开始，从右到左索引默认 `-1` 开始，下标可以为空表示取到头或尾

![图片](https://www.runoob.com/wp-content/uploads/2013/11/list_slicing1.png)

加号 `+` 是列表连接运算符，星号 `*` 是重复操作，实例( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
tinylist = [123, 'john']

print list               # 输出完整列表
print list[0]            # 输出列表的第一个元素
print list[1:3]          # 输出第二个至第三个元素
print list[2:]           # 输出从第三个开始至列表末尾的所有元素
print tinylist * 2       # 输出列表两次
print list + tinylist    # 打印组合的列表
```

- 以上实例输出结果：

```
['runoob', 786, 2.23, 'john', 70.2]
runoob
[786, 2.23]
[2.23, 'john', 70.2]
[123, 'john', 123, 'john']
['runoob', 786, 2.23, 'john', 70.2, 123, 'john']
```

### 元组

元组是另一个数据类型，类似于 `List` (列表)，实例( `Python 2.0+` )：

- 元组用 `()` 标识

- 内部元素用逗号隔开

> 元组不能二次赋值，相当于只读列表

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

tuple = ( 'runoob', 786 , 2.23, 'john', 70.2 )
tinytuple = (123, 'john')

print tuple               # 输出完整元组
print tuple[0]            # 输出元组的第一个元素
print tuple[1:3]          # 输出第二个至第四个（不包含）的元素
print tuple[2:]           # 输出从第三个开始至列表末尾的所有元素
print tinytuple * 2       # 输出元组两次
print tuple + tinytuple   # 打印组合的元组
```

- 以上实例输出结果：

```
('runoob', 786, 2.23, 'john', 70.2)
runoob
(786, 2.23)
(2.23, 'john', 70.2)
(123, 'john', 123, 'john')
('runoob', 786, 2.23, 'john', 70.2, 123, 'john')
```

以下是元组无效的，因为元组是不允许更新的，实例( `Python 2.0+` )：

> 而列表是允许更新的

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

tuple = ( 'runoob', 786 , 2.23, 'john', 70.2 )
list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
tuple[2] = 1000    # 元组中是非法应用
list[2] = 1000     # 列表中是合法应用
```

### 字典

字典( `dictionary` )是除列表以外 Python 之中最灵活的内置数据结构类型

- 列表是有序的对象集合，字典是无序的对象集合

- 两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取

- 字典用 `{ }` 标识

  字典由索引( `key` )和它对应的值 `value` 组成

实例( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"

tinydict = {'name': 'john','code':6734, 'dept': 'sales'}


print dict['one']          # 输出键为'one' 的值
print dict[2]              # 输出键为 2 的值
print tinydict             # 输出完整的字典
print tinydict.keys()      # 输出所有键
print tinydict.values()    # 输出所有值
```

- 输出结果为：

```
This is one
This is two
{'dept': 'sales', 'code': 6734, 'name': 'john'}
['dept', 'code', 'name']
['sales', 6734, 'john']
```

### 数据类型转换

> 有时候，我们需要对数据内置的类型进行转换，数据类型的转换，你只需要将数据类型作为函数名即可

以下几个内置的函数可以执行数据类型之间的转换

- 这些函数返回一个新的对象，表示转换的值

函数|描述
-|-
int(x [,base])|将x转换为一个整数
long(x [,base] )|将x转换为一个长整数
float(x)|将x转换到一个浮点数
complex(real [,imag])|创建一个复数
str(x)|将对象 x 转换为字符串
repr(x)|将对象 x 转换为表达式字符串
eval(str)|用来计算在字符串中的有效Python表达式,并返回一个对象
tuple(s)|将序列 s 转换为一个元组
list(s)|将序列 s 转换为一个列表
set(s)|转换为可变集合
dict(d)|创建一个字典；d 必须是一个序列 (key,value)元组
frozenset(s)|转换为不可变集合
chr(x)|将一个整数转换为一个字符
unichr(x)|将一个整数转换为Unicode字符
ord(x)|将一个字符转换为它的整数值
hex(x)|将一个整数转换为一个十六进制字符串
oct(x)|将一个整数转换为一个八进制字符串

> 详细案例可自行了解，或[【点击查看此网页底部 **`Python 数据类型转换`** 表格】](https://www.runoob.com/python/python-variable-types.html)

## 运算符

举个简单的例子 `4 + 5 = 9`

- 例子中，`4` 和 `5` 被称为操作数，`+` 称为运算符

Python 语言支持以下类型的运算符:

- 算术运算符
- 比较（关系）运算符
- 赋值运算符
- 逻辑运算符
- 位运算符
- 成员运算符
- 身份运算符
- 运算符优先级

### 算术运算符

以下假设变量：a=10 ，b=20

运算符|描述|实例
-|-|-
+|加 - 两个对象相加|a + b 输出结果 30
-|减 - 得到负数或是一个数减去另一个数|a - b 输出结果 -10
*|乘 - 两个数相乘或是返回一个被重复若干次的字符串|a * b 输出结果 200
/|除 - x除以y|b / a 输出结果 2
%|取模 - 返回除法的余数|b % a 输出结果 0
`**`|幂 - 返回x的y次幂|a ** b 为10的20次方， 输出结果 100000000000000000000
//|取整除 - 返回商的整数部分（向下取整）| -

此处为 `//` 运算符的实例：

```
>>> 9//2
4
>>> -9//2
-5
```

以下实例演示了 Python 所有算术运算符的操作实例( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

a = 21
b = 10
c = 0

c = a + b
print "1 - c 的值为：", c

c = a - b
print "2 - c 的值为：", c

c = a * b
print "3 - c 的值为：", c

c = a / b
print "4 - c 的值为：", c

c = a % b
print "5 - c 的值为：", c

# 修改变量 a 、b 、c
a = 2
b = 3
c = a ** b
print "6 - c 的值为：", c

a = 10
b = 5
c = a // b
print "7 - c 的值为：", c
```

- 以上实例输出结果：

```
1 - c 的值为：31
2 - c 的值为：11
3 - c 的值为：210
4 - c 的值为：2
5 - c 的值为：1
6 - c 的值为：8
7 - c 的值为：2
```

> #### 注意：
> `Python2.x` 里，整数除整数，只能得出整数
> - 如果要得到小数部分，把其中一个数改成浮点数即可

```
>>> 1/2
0
>>> 1.0/2
0.5
>>> 1/float(2)
0.5
```

### 比较运算符

以下假设变量：a=10 ，b=20

运算符|描述|实例
-|-|-
==|等于 - 比较对象是否相等|(a == b) 返回 False
!=|不等于 - 比较两个对象是否不相等|(a != b) 返回 true.
<>|不等于 - 比较两个对象是否不相等( **`python 3 已废弃`** )|(a <> b) 返回 true；这个运算符类似 !=
`>`|大于 - 返回 **`x是否大于y`**|(a > b) 返回 False
<|小于 - 返回 **`x是否小于y`** ，所有比较运算符返回 `1` 表示真，返回 `0` 表示假；这分别与特殊的变量 `True` 和 `False` 等价|(a < b) 返回 true
`>=`|大于等于 - 返回 **`x是否大于等于y`**|(a >= b) 返回 False
<=|小于等于 - 返回 **`x是否小于等于y`**|(a <= b) 返回 true

以下实例演示了 Python 所有比较运算符的操作实例( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

a = 21
b = 10
c = 0

if  a == b :
   print "1 - a 等于 b"
else:
   print "1 - a 不等于 b"

if  a != b :
   print "2 - a 不等于 b"
else:
   print "2 - a 等于 b"

if  a <> b :
   print "3 - a 不等于 b"
else:
   print "3 - a 等于 b"

if  a < b :
   print "4 - a 小于 b"
else:
   print "4 - a 大于等于 b"

if  a > b :
   print "5 - a 大于 b"
else:
   print "5 - a 小于等于 b"

# 修改变量 a 和 b 的值
a = 5
b = 20
if  a <= b :
   print "6 - a 小于等于 b"
else:
   print "6 - a 大于  b"

if  b >= a :
   print "7 - b 大于等于 a"
else:
   print "7 - b 小于 a"
```

- 以上实例输出结果：

```
1 - a 不等于 b
2 - a 不等于 b
3 - a 不等于 b
4 - a 大于等于 b
5 - a 大于 b
6 - a 小于等于 b
7 - b 大于等于 a
```

### 赋值运算符

以下假设变量：a=10 ，b=20

运算符|描述|实例
-|-|-
=|简单的赋值运算符|c = a + b 将 a + b 的运算结果赋值为 c
+=|加法赋值运算符|c += a 等效于 c = c + a
-=|减法赋值运算符|c -= a 等效于 c = c - a
*=|乘法赋值运算符|c *= a 等效于 c = c * a
/=|除法赋值运算符|c /= a 等效于 c = c / a
%=|取模赋值运算符|c %= a 等效于 c = c % a
**=|幂赋值运算符|c **= a 等效于 c = c ** a
//=|取整除赋值运算符|c //= a 等效于 c = c // a

以下实例演示了Python所有赋值运算符的操作实例( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

a = 21
b = 10
c = 0

c = a + b
print "1 - c 的值为：", c

c += a
print "2 - c 的值为：", c

c *= a
print "3 - c 的值为：", c

c /= a
print "4 - c 的值为：", c

c = 2
c %= a
print "5 - c 的值为：", c

c **= a
print "6 - c 的值为：", c

c //= a
print "7 - c 的值为：", c
```

- 以上实例输出结果：

```
1 - c 的值为：31
2 - c 的值为：52
3 - c 的值为：1092
4 - c 的值为：52
5 - c 的值为：2
6 - c 的值为：2097152
7 - c 的值为：99864
```

### 位运算符

按位运算符是把数字看作二进制来进行计算的

- 现有变量 `a=60` ，`b=13` ，二进制格式如下：

```
a = 0011 1100

b = 0000 1101

-----------------

a&b = 0000 1100

a|b = 0011 1101

a^b = 0011 0001

~a  = 1100 0011
```

- Python 中的按位运算法则如下：

运算符|描述|实例
-|-|-
&|按位与运算符：参与运算的两个值,如果两个相应位都为 `1` ,则该位的结果为 `1` ,否则为 `0`|(a & b) 输出结果 `12` ，二进制解释：`0000 1100`
丨|按位或运算符：只要对应的二个二进位有一个为 `1` 时，结果位就为 `1`|( `a 丨 b` ) 输出结果 `61` ，二进制解释：`0011 1101`
^|按位异或运算符：当两对应的二进位相异时，结果为 `1` |(a ^ b) 输出结果 `49` ，二进制解释：`0011 0001`
~|按位取反运算符：对数据的每个二进制位取反,即把 `1` 变为 `0` ,把 `0` 变为 `1` ，`~x` 类似于 `-x-1`|(~a) 输出结果 `-61` ，二进制解释：`1100 0011` ，在一个有符号二进制数的补码形式
<<|左移动运算符：运算数的各二进位全部左移若干位，由 `<<` 右边的数字指定了移动的位数，高位丢弃，低位补 `0`|(a << 2) 输出结果 `240` ，二进制解释：`1111 0000`
`>>`|右移动运算符：把 `>>` 左边的运算数的各二进位全部右移若干位，`>>` 右边的数字指定了移动的位数|(a >> 2) 输出结果 `15` ，二进制解释：`0000 1111`

> 因显示问题，上表中 `|` 用中文 **`丨`** 展示

以下实例演示了 Python 所有位运算符的操作实例( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

a = 60            # 60 = 0011 1100
b = 13            # 13 = 0000 1101
c = 0

c = a & b;        # 12 = 0000 1100
print "1 - c 的值为：", c

c = a | b;        # 61 = 0011 1101
print "2 - c 的值为：", c

c = a ^ b;        # 49 = 0011 0001
print "3 - c 的值为：", c

c = ~a;           # -61 = 1100 0011
print "4 - c 的值为：", c

c = a << 2;       # 240 = 1111 0000
print "5 - c 的值为：", c

c = a >> 2;       # 15 = 0000 1111
print "6 - c 的值为：", c
```

- 以上实例输出结果：

```
1 - c 的值为：12
2 - c 的值为：61
3 - c 的值为：49
4 - c 的值为：-61
5 - c 的值为：240
6 - c 的值为：15
```

### 逻辑运算符

Python 语言支持逻辑运算符，以下假设变量：a=10 ，b=20

运算符|逻辑表达式|描述|实例
-|-|-|-
and|x and y|布尔 **`与`** - 如果 x 为 `False` ，x and y 返回 `False` ，否则它返回 y 的计算值|(a and b) 返回 `20`
or|x or y|布尔 **`或`** - 如果 x 是非 `0` ，它返回 x 的值，否则它返回 y 的计算值|(a or b) 返回 `10`
not|not x|布尔 **`非`** - 如果 x 为 `True` ，返回 `False` ；如果 x 为 `False` ，它返回 `True` |not(a and b) 返回 `False`

以上实例输出结果( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

a = 10
b = 20

if  a and b :
   print "1 - 变量 a 和 b 都为 true"
else:
   print "1 - 变量 a 和 b 有一个不为 true"

if  a or b :
   print "2 - 变量 a 和 b 都为 true，或其中一个变量为 true"
else:
   print "2 - 变量 a 和 b 都不为 true"

# 修改变量 a 的值
a = 0
if  a and b :
   print "3 - 变量 a 和 b 都为 true"
else:
   print "3 - 变量 a 和 b 有一个不为 true"

if  a or b :
   print "4 - 变量 a 和 b 都为 true，或其中一个变量为 true"
else:
   print "4 - 变量 a 和 b 都不为 true"

if not( a and b ):
   print "5 - 变量 a 和 b 都为 false，或其中一个变量为 false"
else:
   print "5 - 变量 a 和 b 都为 true"
```

- 以上实例输出结果：

```
1 - 变量 a 和 b 都为 true
2 - 变量 a 和 b 都为 true，或其中一个变量为 true
3 - 变量 a 和 b 有一个不为 true
4 - 变量 a 和 b 都为 true，或其中一个变量为 true
5 - 变量 a 和 b 都为 false，或其中一个变量为 false
```

### 成员运算符

除了以上的一些运算符之外，Python 还支持成员运算符，测试实例中包含了一系列的成员，包括字符串，列表或元组

运算符|描述|实例
-|-|-
in|如果在指定的序列中找到值返回 `True` ，否则返回 `False`|x 在 y 序列中, 如果 x 在 y 序列中返回 `True`
not in|如果在指定的序列中没有找到值返回 `True` ，否则返回 `False`|x 不在 y 序列中, 如果 x 不在 y 序列中返回 `True`

以下实例演示了 Python 所有成员运算符的操作实例( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

a = 10
b = 20
list = [1, 2, 3, 4, 5 ];

if ( a in list ):
   print "1 - 变量 a 在给定的列表中 list 中"
else:
   print "1 - 变量 a 不在给定的列表中 list 中"

if ( b not in list ):
   print "2 - 变量 b 不在给定的列表中 list 中"
else:
   print "2 - 变量 b 在给定的列表中 list 中"

# 修改变量 a 的值
a = 2
if ( a in list ):
   print "3 - 变量 a 在给定的列表中 list 中"
else:
   print "3 - 变量 a 不在给定的列表中 list 中"
```

- 以上实例输出结果：

```
1 - 变量 a 不在给定的列表中 list 中
2 - 变量 b 不在给定的列表中 list 中
3 - 变量 a 在给定的列表中 list 中
```

### 身份运算符

身份运算符用于比较两个对象的存储单元

运算符|描述|实例
-|-|-
is|is 是判断两个标识符是不是引用自一个对象|(x is y) 类似 id(x) == id(y) , 如果引用的是同一个对象则返回 `True` ，否则返回 `False`
is not|is not 是判断两个标识符是不是引用自不同对象|(x is not y) 类似 id(a) != id(b)；如果引用的不是同一个对象则返回结果 `True` ，否则返回 `False`

> 注：`id()` 函数用于获取对象内存地址

以下实例演示了 Python 所有身份运算符的操作实例( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

a = 20
b = 20

if ( a is b ):
   print "1 - a 和 b 有相同的标识"
else:
   print "1 - a 和 b 没有相同的标识"

if ( a is not b ):
   print "2 - a 和 b 没有相同的标识"
else:
   print "2 - a 和 b 有相同的标识"

# 修改变量 b 的值
b = 30
if ( a is b ):
   print "3 - a 和 b 有相同的标识"
else:
   print "3 - a 和 b 没有相同的标识"

if ( a is not b ):
   print "4 - a 和 b 没有相同的标识"
else:
   print "4 - a 和 b 有相同的标识"
```

- 以上实例输出结果：

```
1 - a 和 b 有相同的标识
2 - a 和 b 有相同的标识
3 - a 和 b 没有相同的标识
4 - a 和 b 没有相同的标识
```

> `is` 与 `==` 区别：
> - `is` 用于判断两个变量引用对象是否为同一个(同一块内存空间)
> - `==` 用于判断引用变量的值是否相等

```
>>> a = [1, 2, 3]
>>> b = a
>>> b is a
True
>>> b == a
True
>>> b = a[:]
>>> b is a
False
>>> b == a
True
```

### 运算符优先级

以下表格列出了从最高到最低优先级的所有运算符：

运算符|描述
-|-
**|指数 (最高优先级)
~ + -|按位翻转, 一元加号和减号 (最后两个的方法名为 `+@` 和 `-@` )
`* / % //`|乘，除，取模和取整除
`+ -`|加法减法
`>> <<`|右移，左移运算符
&|位 'AND'
`^ 丨`|位运算符
<= < > >=|比较运算符
<> == !=|等于运算符
= %= /= //= -= += *= **=|赋值运算符
is is not|身份运算符
in not in|成员运算符
not and or|逻辑运算符

> 因显示问题，上表中 `|` 用中文 **`丨`** 展示

以下实例演示了 Python 所有运算符优先级的操作实例( `Python 2.0+` )：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

a = 20
b = 10
c = 15
d = 5
e = 0

e = (a + b) * c / d       #( 30 * 15 ) / 5
print "(a + b) * c / d 运算结果为：",  e

e = ((a + b) * c) / d     # (30 * 15 ) / 5
print "((a + b) * c) / d 运算结果为：",  e

e = (a + b) * (c / d);    # (30) * (15/5)
print "(a + b) * (c / d) 运算结果为：",  e

e = a + (b * c) / d;      #  20 + (150/5)
print "a + (b * c) / d 运算结果为：",  e
```

- 以上实例输出结果：

```
(a + b) * c / d 运算结果为： 90
((a + b) * c) / d 运算结果为： 90
(a + b) * (c / d) 运算结果为： 90
a + (b * c) / d 运算结果为： 50
```

## 条件语句





























































































































































































































































































































































































































































































































































































































































































































































































































































































