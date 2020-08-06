【2020.8.6】以下部分整理自[【 Python 官方文档（版本号 3.8.5 ）】](https://docs.python.org/zh-cn/3.8/tutorial/index.html)

---

## 1. 简介

Python 程序的书写是紧凑而易读的

Python 代码通常比同样功能的 `C` `C++` `Java` 代码要短很多，有如下几个原因：

- 高级数据类型允许在一个表达式中表示复杂的操作

- 代码块的划分是按照缩进而不是成对的花括号

- 不需要预先定义变量或参数

Python 是 **`可扩展的`**

- 如果你知道怎么写 `C` 语言程序，就能很容易地给解释器添加新的内置函数或模块，不论是让关键的操作以最高速度运行，还是把 Python 程序链接到只提供预编译程序的库（比如硬件相关的图形库）

- 一旦你真正链接上了，就能在 Python 解释器中扩展或者控制 `C` 语言编写的应用了

## 2. 使用 Python 解释器

### 2.1. 调用解释器

Python 解释器在其被使用的机器上通常安装为 `/usr/local/bin/python3.8`

- 将 `/usr/local/bin` 加入你的 `Unix` 终端的搜索路径就可以通过键入以下命令来启动它：

```
python3.8
```

安装时可以选择安装目录，所以解释器也可能在别的地方

- 可以问问你身边的 Python 大牛，或者你的系统管理员

- 比如 `/usr/local/python` 也是比较常用的备选路径

> 在 Windows 机器上当你从[【 Microsoft Store 】](https://docs.python.org/zh-cn/3.8/using/windows.html#windows-store)安装 Python 之后，python3.8 命令将可使用
> - 如果你安装了[【 `py.exe` 】](https://docs.python.org/zh-cn/3.8/using/windows.html#launcher)启动器，你将可以使用 `py` 命令
>> 参阅[【附录：设置环境变量】](https://docs.python.org/zh-cn/3.8/using/windows.html#setting-envvars)了解其他启动 Python 的方式

在主提示符中输入文件结束字符（在 `Unix` 系统中是 `Control-D` ，Windows 系统中是 `Control-Z` ）就退出解释器并返回退出状态为 `0`

- 如果这样不管用，你还可以写这个命令退出：`quit()`

解释器的行编辑功能在支持[【 GNU Readline 】](https://tiswww.case.edu/php/chet/readline/rltop.html)库的系统中也包括交互式编辑，历史替换和代码补全等

- 检测是否支持行编辑最快速的方式是在首次出现 Python 提示符时输入 `Control-P`

- 如果听到 **`哔`** 提示音，就说明支持行编辑

  请参阅附录[【交互式编辑和编辑历史】](https://docs.python.org/zh-cn/3.8/tutorial/interactive.html#tut-interacting)了解有关功能键的介绍

- 如果什么都没发生，或是回显了 `^P` ，说明不支持行编辑

  你只能用退格键从当前行中删除字符

解释器运行的时候有点像 `Unix` 命令行

- 在一个标准输入 `tty` 设备上调用，它能交互式地读取和执行命令

- 调用时提供文件名参数，或者有个文件重定向到标准输入的话，它就会读取和执行文件中的 **`脚本`**

另一种启动解释器的方式是 `python -c command [arg] ...`

- 其中 `command` 要换成想执行的指令，就像命令行的 `-c` 选项

- 由于 Python 代码中经常会包含对终端来说比较特殊的字符，通常情况下都建议用英文单引号把 `command` 括起来

有些 Python 模块也可以作为脚本使用

- 可以这样输入：`python -m module [arg] ...` ，这会执行 `module` 的源文件，就跟你在命令行把路径写全了一样

- 在运行脚本的时候，有时可能也会需要在运行后进入交互模式

  这种时候在文件参数前，加上选项 `-i` 就可以了。

> 关于所有的命令行选项，请参考[【命令行与环境】](https://docs.python.org/zh-cn/3.8/using/cmdline.html#using-on-general)

#### 2.1.1. 传入参数

如果可能的话，解释器会读取命令行参数，转化为字符串列表存入 `sys` 模块中的 `argv` 变量中

- 执行命令 `import sys` 你可以导入这个模块并访问这个列表

  这个列表最少也会有一个元素
  
- 如果没有给定输入参数，`sys.argv[0]` 就是个空字符串
  
- 如果脚本名是 `-`（标准输入）时，`sys.argv[0]` 就是 `-`

- 使用 `-c` 命令 时，`sys.argv[0]` 就会是 `-c`

- 如果使用选项 `-m module` ，`sys.argv[0]` 就是包含目录的模块全名

- 在 `-c command` 或 `-m module` 之后的选项不会被解释器处理，而会直接留在 `sys.argv` 中给命令或模块来处理

#### 2.1.2. 交互模式

在终端（ `tty` ）输入并执行指令时，我们说解释器是运行在 **`交互模式（interactive mode）`**

- 在这种模式中，它会显示 **`主提示符（primary prompt）`**，提示输入下一条指令，通常用三个大于号（ `>>>` ）表示

- 连续输入行的时候，它会显示 **`次要提示符`** ，默认是三个点（ `...` ）

- 进入解释器时，它会先显示欢迎信息、版本信息、版权声明，然后就会出现提示符

```
$ python3.8
Python 3.8 (default, Sep 16 2015, 09:25:04)
[GCC 4.8.2] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

多行指令需要在连续的多行中输入，比如，以 `if` 为例：

```
>>> the_world_is_flat = True
>>> if the_world_is_flat:
...     print("Be careful not to fall off!")
...
Be careful not to fall off!
```

> 有关交互模式的更多内容，请见[【交互模式】](https://docs.python.org/zh-cn/3.8/tutorial/appendix.html#tut-interac)

### 2.2. 解释器的运行环境

#### 2.2.1. 源文件的字符编码

默认情况下，Python 源码文件以 `UTF-8` 编码方式处理

- 在这种编码方式中，世界上大多数语言的字符都可以同时用于字符串字面值、变量或函数名称以及注释中

- 尽管标准库中只用常规的 `ASCII` 字符作为变量或函数名，而且任何可移植的代码都应该遵守此约定

- 要正确显示这些字符，你的编辑器必须能识别 `UTF-8` 编码，而且必须使用能支持打开的文件中所有字符的字体

如果不使用默认编码，要声明文件所使用的编码，文件的 **`第一行`** 要写成特殊的注释，语法如下所示：

```py
# -*- coding: encoding -*-
```

其中 `encoding` 可以是 Python 支持的任意一种[【 codecs 】](https://docs.python.org/zh-cn/3.8/library/codecs.html#module-codecs)

- 比如，要声明使用 `Windows-1252` 编码，你的源码文件要写成：

```py
# -*- coding: cp1252 -*-
```

- 关于 **`第一行`** 规则的一种例外情况是，源码以 **`UNIX "shebang" 行`** 开头

  这种情况下，编码声明就要写在文件的第二行

```py
#!/usr/bin/env python3
# -*- coding: cp1252 -*-
```

> 备注：
>> 在 `Unix` 系统中，`Python 3.x` 解释器默认安装后的执行文件并不叫作 `python` ，这样才不会与同时安装的 `Python 2.x` 冲突

## 3. Python 的非正式介绍

在下面的例子中，通过提示符 `>>>` 与 `...` 的出现与否来区分输入和输出：

- 如果你想复现这些例子，当提示符出现后，你必须在提示符后键入例子中的每一个词

- 不以提示符开头的那些行是解释器的输出

- 注意例子中某行中出现第二个提示符意味着你必须键入一个空白行，这是用来结束多行命令的

> 这个手册中的许多例子都包含注释，甚至交互性命令中也有
> - Python 中的注释以井号 `#` 开头，并且一直延伸到该文本行结束为止
> - 注释可以出现在一行的开头或者是空白和代码的后边，但是不能出现在字符串中间（字符串中的井号就是井号）
> - 因为注释是用来阐明代码的，不会被 Python 解释，所以在键入这些例子时，注释是可以被忽略的

```py
# this is the first comment
spam = 1  # and this is the second comment
          # ... and now a third!
text = "# This is not a comment because it's inside quotes."
```

### 3.1. Python 作为计算器使用

让我们尝试一些简单的 Python 命令

- 启动解释器，等待界面中的提示符 `>>>` （这应该花不了多少时间）

#### 3.1.1. 数字

解释器就像一个简单的计算器一样：

- 你可以在里面输入一个表达式然后它会写出答案

表达式的语法很直接：

- 运算符 `+` `-` `*` `/` 的用法和其他大部分语言一样（比如 `Pascal` 或者 `C` 语言）；括号 `()` 用来分组

```py
>>> 2 + 2
4
>>> 50 - 5*6
20
>>> (50 - 5*6) / 4
5.0
>>> 8 / 5  # division always returns a floating point number
1.6
```

- 整数（比如 `2` 、`4` 、`20` ）的类型是 `int` ，有小数部分的（比如 `5.0` 、`1.6` ）的类型是 `float`

> 在这个手册的后半部分我们会看到更多的数字类型

- 除法运算 `/` 永远返回浮点数类型

  如果要做 floor division 得到一个整数结果（忽略小数部分）你可以使用 `//` 运算符
  
  如果要计算余数，可以使用 `%`

```py
>>> 17 / 3  # classic division returns a float
5.666666666666667
>>>
>>> 17 // 3  # floor division discards the fractional part
5
>>> 17 % 3  # the % operator returns the remainder of the division
2
>>> 5 * 3 + 2  # result * divisor + remainder
17
```

在 Python 中，可以使用 `**` 运算符来计算乘方

```py
>>> 5 ** 2  # 5 squared
25
>>> 2 ** 7  # 2 to the power of 7
128
```

等号 `=` 用于给一个变量赋值

- 然后在下一个交互提示符之前不会有结果显示出来

```py
>>> width = 20
>>> height = 5 * 9
>>> width * height
900
```

如果一个变量未定义（未赋值），试图使用它时会向你提示错误

```py
>>> n  # try to access an undefined variable
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'n' is not defined
```

Python 中提供浮点数的完整支持

- 包含多种混合类型运算数的运算会把整数转换为浮点数

```py
>>> 4 * 3.75 - 1
14.0
```

在交互模式下，上一次打印出来的表达式被赋值给变量 `_`

- 这意味着当你把 Python 用作桌面计算器时，继续计算会相对简单

```py
>>> tax = 12.5 / 100
>>> price = 100.50
>>> price * tax
12.5625
>>> price + _
113.0625
>>> round(_, 2)
113.06
```

这个变量应该被使用者当作是只读类型

- 不要向它显式地赋值

- 你会创建一个和它名字相同独立的本地变量，它会使用魔法行为屏蔽内部变量

除了 `int` 和 `float` ，Python 也支持其他类型的数字

- 例如 `Decimal` 或者 `Fraction`

- Python 也内置对 **`复数`** 的支持，使用后缀 `j` 或者 `J` 就可以表示虚数部分（例如 `3+5j` ）

#### 3.1.2. 字符串

除了数字，Python 也可以操作字符串

- 字符串有多种形式，可以使用单引号 `''` ，双引号 `""` 都可以获得同样的结果

- 反斜杠 `\` 可以用来转义

```py
>>> 'spam eggs'  # single quotes
'spam eggs'
>>> 'doesn\'t'  # use \' to escape the single quote...
"doesn't"
>>> "doesn't"  # ...or use double quotes instead
"doesn't"
>>> '"Yes," they said.'
'"Yes," they said.'
>>> "\"Yes,\" they said."
'"Yes," they said.'
>>> '"Isn\'t," they said.'
'"Isn\'t," they said.'
```

在交互式解释器中，输出的字符串外面会加上引号，特殊字符会使用反斜杠来转义

- 虽然有时这看起来会与输入不一样（外面所加的引号可能会改变），但两个字符串是相同的

- 如果字符串中有单引号而没有双引号，该字符串外将加双引号来表示，否则就加单引号

- [【 `print()` 】](https://docs.python.org/zh-cn/3.8/library/functions.html#print)函数会生成可读性更强的输出，即略去两边的引号，并且打印出经过转义的特殊字符

```py
>>> '"Isn\'t," they said.'
'"Isn\'t," they said.'
>>> print('"Isn\'t," they said.')
"Isn't," they said.
>>> s = 'First line.\nSecond line.'  # \n means newline
>>> s  # without print(), \n is included in the output
'First line.\nSecond line.'
>>> print(s)  # with print(), \n produces a new line
First line.
Second line.
```

如果你不希望前置了 `\` 的字符转义成特殊字符，可以使用 **`原始字符串`** 方式，在引号前添加 `r` 即可

```py
>>> print('C:\some\name')  # here \n means newline!
C:\some
ame
>>> print(r'C:\some\name')  # note the r before the quote
C:\some\name
```

字符串字面值可以跨行连续输入

- 一种方式是用三重引号：`"""` 或 `'''`

- 字符串中的回车换行会自动包含到字符串中，如果不想包含，在行尾添加一个 `\` 即可

```py
print("""\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
""")
```

将产生如下输出（注意最开始的换行没有包括进来）

```
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
```

字符串可以用 `+` 进行连接（粘到一起），也可以用 `*` 进行重复

```py
>>> # 3 times 'un', followed by 'ium'
>>> 3 * 'un' + 'ium'
'unununium'
```

相邻的两个或多个 **`字符串字面值`** （引号引起来的字符）将会自动连接到一起

```py
>>> 'Py' 'thon'
'Python'
```

把很长的字符串拆开分别输入的时候尤其有用

```py
>>> text = ('Put several strings within parentheses '
...         'to have them joined together.')
>>> text
'Put several strings within parentheses to have them joined together.'
```

只能对两个字面值这样操作，变量或表达式不行

```py
>>> prefix = 'Py'
>>> prefix 'thon'  # can't concatenate a variable and a string literal
  File "<stdin>", line 1
    prefix 'thon'
                ^
SyntaxError: invalid syntax
>>> ('un' * 3) 'ium'
  File "<stdin>", line 1
    ('un' * 3) 'ium'
                   ^
SyntaxError: invalid syntax
```

如果你想连接变量，或者连接变量和字面值，可以用 `+` 号

```py
>>> prefix + 'thon'
'Python'
```

字符串是可以被 *`索引`* （下标访问）的，第一个字符索引是 `0`

- 单个字符并没有特殊的类型，只是一个长度为一的字符串

```py
>>> word = 'Python'
>>> word[0]  # character in position 0
'P'
>>> word[5]  # character in position 5
'n'
```

- 索引也可以用负数，这种会从右边开始数

```py
>>> word[-1]  # last character
'n'
>>> word[-2]  # second-last character
'o'
>>> word[-6]
'P'
```

> 注意 `-0` 和 `0` 是一样的，所以负数索引从 `-1` 开始

- 除了索引，字符串还支持 **`切片`** ，索引可以得到单个字符，而 **`切片`** 可以获取子字符串

```py
>>> word[0:2]  # characters from position 0 (included) to 2 (excluded)
'Py'
>>> word[2:5]  # characters from position 2 (included) to 5 (excluded)
'tho'
```

> 注意：切片的开始总是被包括在结果中，而结束不被包括
>> 这使得 `s[:i] + s[i:]` 总是等于 `s`

```py
>>> word[:2] + word[2:]
'Python'
>>> word[:4] + word[4:]
'Python'
```

切片的索引有默认值：省略开始索引时默认为 `0` ，省略结束索引时默认为到字符串的结束

```py
>>> word[:2]   # character from the beginning to position 2 (excluded)
'Py'
>>> word[4:]   # characters from position 4 (included) to the end
'on'
>>> word[-2:]  # characters from the second-last (included) to the end
'on'
```

- 您也可以这么理解切片：将索引视作指向字符 **`之间`** ，第一个字符的左侧标为 `0` ，最后一个字符的右侧标为 `n` ，其中 `n` 是字符串长度

```
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
 0   1   2   3   4   5   6
-6  -5  -4  -3  -2  -1
```

- 第一行数标注了字符串 `0...6` 的索引的位置，第二行标注了对应的负的索引

  那么从 `i` 到 `j` 的切片就包括了标有 `i` 和 `j` 的位置之间的所有字符

对于使用非负索引的切片，如果索引不越界，那么得到的切片长度就是起止索引之差

- 例如， `word[1:3]` 的长度为2

试图使用过大的索引会产生一个错误

```py
>>> word[42]  # the word only has 6 characters
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: string index out of range
```

- 但是，切片中的越界索引会被自动处理

```py
>>> word[4:42]
'on'
>>> word[42:]
''
```

Python 中的字符串不能被修改，它们是[【 immutable 】](https://docs.python.org/zh-cn/3.8/glossary.html#term-immutable)的

- 因此，向字符串的某个索引位置赋值会产生一个错误

```py
>>> word[0] = 'J'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
>>> word[2:] = 'py'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
```

如果需要一个不同的字符串，应当新建一个

```py
>>> 'J' + word[1:]
'Jython'
>>> word[:2] + 'py'
'Pypy'
```

内建函数 `len()` 返回一个字符串的长度

```py
>>> s = 'supercalifragilisticexpialidocious'
>>> len(s)
34
```

> 参见
> - [【文本序列类型 --- str 】](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#textseq)
> - 字符串是一种 **`序列类型`** ，因此也支持序列类型的各种操作
>> - [【字符串的方法】](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#string-methods)
>> - 字符串支持许多变换和查找的方法
> - [【格式化字符串字面值】](https://docs.python.org/zh-cn/3.8/reference/lexical_analysis.html#f-strings)
> - 内嵌表达式的字符串字面值
>> - [【格式字符串语法】](https://docs.python.org/zh-cn/3.8/library/string.html#formatstrings)
>> - 使用[【 `str.format()` 】](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#str.format)进行字符串格式化。
> - [【 printf 风格的字符串格式化】](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#old-string-formatting)
> - 这里详述了使用 `%` 运算符进行字符串格式化

#### 3.1.3. 列表

Python 中可以通过组合一些值得到多种 **`复合`** 数据类型

- 其中最常用的 **`列表`** ，可以通过方括号括起、逗号分隔的一组值（元素）得到

- 一个 **`列表`** 可以包含不同类型的元素，但通常使用时各个元素类型相同

```py
>>> squares = [1, 4, 9, 16, 25]
>>> squares
[1, 4, 9, 16, 25]
```

和字符串（以及各种内置的[【 `sequence` 】](https://docs.python.org/zh-cn/3.8/glossary.html#term-sequence)类型）一样，列表也支持索引和切片

```py
>>> squares[0]  # indexing returns the item
1
>>> squares[-1]
25
>>> squares[-3:]  # slicing returns a new list
[9, 16, 25]
```

所有的切片操作都返回一个包含所请求元素的新列表。 这意味着以下切片操作会返回列表的一个[【浅拷贝】](https://docs.python.org/zh-cn/3.8/library/copy.html#shallow-vs-deep-copy)

```py
>>> squares[:]
[1, 4, 9, 16, 25]
```

列表同样支持拼接操作

```py
>>> squares + [36, 49, 64, 81, 100]
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

与[【 immutable 】](https://docs.python.org/zh-cn/3.8/glossary.html#term-immutable)的字符串不同, 列表是一个[【 mutable 】](https://docs.python.org/zh-cn/3.8/glossary.html#term-mutable)类型，就是说，它自己的内容可以改变

```py
>>> cubes = [1, 8, 27, 65, 125]  # something's wrong here
>>> 4 ** 3  # the cube of 4 is 64, not 65!
64
>>> cubes[3] = 64  # replace the wrong value
>>> cubes
[1, 8, 27, 64, 125]
```

你也可以在列表末尾通过 `append()` 方法来添加新元素（我们将在后面介绍有关方法的详情）

```py
>>> cubes.append(216)  # add the cube of 6
>>> cubes.append(7 ** 3)  # and the cube of 7
>>> cubes
[1, 8, 27, 64, 125, 216, 343]
```

给切片赋值也是可以的，这样甚至可以改变列表大小，或者把列表整个清空

```py
>>> letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
>>> letters
['a', 'b', 'c', 'd', 'e', 'f', 'g']
>>> # replace some values
>>> letters[2:5] = ['C', 'D', 'E']
>>> letters
['a', 'b', 'C', 'D', 'E', 'f', 'g']
>>> # now remove them
>>> letters[2:5] = []
>>> letters
['a', 'b', 'f', 'g']
>>> # clear the list by replacing all the elements with an empty list
>>> letters[:] = []
>>> letters
[]
```

内置函数[【 `len()` 】](https://docs.python.org/zh-cn/3.8/library/functions.html#len)也可以作用到列表上

```py
>>> letters = ['a', 'b', 'c', 'd']
>>> len(letters)
4
```

也可以嵌套列表 (创建包含其他列表的列表), 比如说

```py
>>> a = ['a', 'b', 'c']
>>> n = [1, 2, 3]
>>> x = [a, n]
>>> x
[['a', 'b', 'c'], [1, 2, 3]]
>>> x[0]
['a', 'b', 'c']
>>> x[0][1]
'b'
```

### 3.2. 走向编程的第一步

当然，我们可以将 Python 用于更复杂的任务，而不是仅仅两个和两个一起添加

例如，我们可以编写 **`斐波那契数列`** 的初始子序列，如下所示

```py
>>> # Fibonacci series:
... # the sum of two elements defines the next
... a, b = 0, 1
>>> while a < 10:
...     print(a)
...     a, b = b, a+b
...
0
1
1
2
3
5
8
```

这个例子引入了几个新的特性：

- 第一行含有一个 **`多重赋值`** : 

  变量 `a` 和 `b` 同时得到了新值 `0` 和 `1`

  最后一行又用了一次多重赋值, 这展示出了右手边的表达式，在任何赋值发生之前就被求值了
  
  右手边的表达式是从左到右被求值的

- [【 `while` 】](https://docs.python.org/zh-cn/3.8/reference/compound_stmts.html#while)循环只要它的条件（这里指： a < 10）保持为真就会一直执行

  Python 和 C 一样，任何非零整数都为真；零为假
  
  这个条件也可以是字符串或是列表的值，事实上任何序列都可以；长度非零就为真，空序列就为假
  
  在这个例子里，判断条件是一个简单的比较
  
  标准的比较操作符的写法和 C 语言里是一样：`<`（小于）、`>`（大于）、`==`（等于）、`<=`（小于或等于)、`>=`（大于或等于）以及 `!=`（不等于）

- **`循环体`** 是 **`缩进的`** ：

  缩进是 Python 组织语句的方式
  
  在交互式命令行里，你得给每个缩进的行敲下 Tab 键或者（多个）空格键
  
  实际上用文本编辑器的话，你要准备更复杂的输入方式；所有像样的文本编辑器都有自动缩进的设置
  
  交互式命令行里，当一个组合的语句输入时, 需要在最后敲一个空白行表示完成（因为语法分析器猜不出来你什么时候打的是最后一行）
  
  注意，在同一块语句中的每一行，都要缩进相同的长度

- [【 `print()` 】](https://docs.python.org/zh-cn/3.8/library/functions.html#print)函数将所有传进来的参数值打印出来

  它和直接输入你要显示的表达式(比如我们之前在计算器的例子里做的)不一样，`print()` 能处理多个参数，包括浮点数，字符串
  
  字符串会打印不带引号的内容, 并且在参数项之间会插入一个空格, 这样你就可以很好的把东西格式化

```py
>>> i = 256*256
>>> print('The value of i is', i)
The value of i is 65536
```

关键字参数 `end` 可以用来取消输出后面的换行, 或使用另外一个字符串来结尾

```py
>>> a, b = 0, 1
>>> while a < 1000:
...     print(a, end=',')
...     a, b = b, a+b
...
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,
```

> 备注
> - 因为 `**` 比 `-` 有更高的优先级, 所以 `-3**2` 会被解释成 `-(3**2)` ，因此结果是 `-9`
> - 为了避免这个并且得到结果 `9` ，你可以用这个式子 `(-3)**2`
>> - 和其他语言不一样的是, 特殊字符比如说 `\n` 在单引号 `''` 和双引号 `""` 里有一样的意义
>> - 这两种引号唯一的区别是，你不需要在单引号里转义双引号 `"`（但是你必须把单引号转义成 `\'` ），反之亦然

## 4. 其他流程控制工具

除了刚刚介绍过的[【 `while` 】](https://docs.python.org/zh-cn/3.8/reference/compound_stmts.html#while)语句，Python 中也会使用其他语言中常见的流程控制语句，只是稍有变化

### 4.1. if 语句

可能最为人所熟知的编程语句就是[【 `if` 】](https://docs.python.org/zh-cn/3.8/reference/compound_stmts.html#if)语句了

```py
>>> x = int(input("Please enter an integer: "))
Please enter an integer: 42
>>> if x < 0:
...     x = 0
...     print('Negative changed to zero')
... elif x == 0:
...     print('Zero')
... elif x == 1:
...     print('Single')
... else:
...     print('More')
...
More
```

可以有零个或多个[【 `elif` 】](https://docs.python.org/zh-cn/3.8/reference/compound_stmts.html#elif)部分，以及一个可选的[【 `else` 】](https://docs.python.org/zh-cn/3.8/reference/compound_stmts.html#else)部分

- 关键字 `elif` 是 `else if` 的缩写，适合用于避免过多的缩进

- 一个 `if ... elif ... elif ...` 序列可以看作是其他语言中的 `switch` 或 `case` 语句的替代

### 4.2. for 语句

Python 中的[【 `for` 】](https://docs.python.org/zh-cn/3.8/reference/compound_stmts.html#for)语句与你在 `C` 或 `Pascal` 中所用到的有所不同

- Python 中的 `for` 语句并不总是对算术递增的数值进行迭代（如同 `Pascal` ），或是给予用户定义迭代步骤和暂停条件的能力（如同 `C` ）

- 而是对任意序列进行迭代（例如列表或字符串），条目的迭代顺序与它们在序列中出现的顺序一致

例如（此处英文为双关语）：

```py
>>> # Measure some strings:
... words = ['cat', 'window', 'defenestrate']
>>> for w in words:
...     print(w, len(w))
...
cat 3
window 6
defenestrate 12
```

在遍历同一个集合时修改该集合的代码可能很难获得正确的结果

- 通常，更直接的做法是循环遍历该集合的副本或创建新集合：

```py
# Strategy:  Iterate over a copy
for user, status in users.copy().items():
    if status == 'inactive':
        del users[user]

# Strategy:  Create a new collection
active_users = {}
for user, status in users.items():
    if status == 'active':
        active_users[user] = status
```

### 4.3. range() 函数

如果你确实需要遍历一个数字序列，内置函数[【 `range()` 】](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#range)会派上用场，它生成算术级数

```py
>>> for i in range(5):
...     print(i)
...
0
1
2
3
4
```

给定的终止数值并不在要生成的序列里：`range(10)` 会生成 `10` 个值，并且是以合法的索引生成一个长度为 `10` 的序列

- `range` 也可以以另一个数字开头，或者以指定的幅度增加（甚至是负数；有时这也被叫做 **`步进`** ）

```py
range(5, 10)
   5, 6, 7, 8, 9

range(0, 10, 3)
   0, 3, 6, 9

range(-10, -100, -30)
  -10, -40, -70
```

要以序列的索引来迭代，您可以将 `range()` 和 `len()` 组合如下

```py
>>> a = ['Mary', 'had', 'a', 'little', 'lamb']
>>> for i in range(len(a)):
...     print(i, a[i])
...
0 Mary
1 had
2 a
3 little
4 lamb
```

然而，在大多数这类情况下，使用[【 `enumerate()` 】](https://docs.python.org/zh-cn/3.8/library/functions.html#enumerate)函数比较方便，请参见[【循环的技巧】](https://docs.python.org/zh-cn/3.8/tutorial/datastructures.html#tut-loopidioms)

如果你只打印 `range` ，会出现奇怪的结果：

```py
>>> print(range(10))
range(0, 10)
```

> `range()` 所返回的对象在许多方面表现得像一个列表，但实际上却并不是
> - 此对象会在你迭代它时基于所希望的序列返回连续的项
> - 但它没有真正生成列表，这样就能节省空间

我们称这样对象为[【 `iterable` 】](https://docs.python.org/zh-cn/3.8/glossary.html#term-iterable)，也就是说，适合作为这样的目标对象：

- 函数和结构期望从中获取连续的项直到所提供的项全部耗尽

- 我们已经看到 `for` 语句就是这样一种结构，而接受可迭代对象的函数的一个例子是[【 `sum()` 】](https://docs.python.org/zh-cn/3.8/library/functions.html#sum)

```py
>>> sum(range(4))  # 0 + 1 + 2 + 3
6
```

最后，也许你会很好奇如何从一个指定范围内获取一个列表，以下是解决方案：

```py
>>> list(range(4))
[0, 1, 2, 3]
```

> 在[【数据结构】](https://docs.python.org/zh-cn/3.8/tutorial/datastructures.html#tut-structures)章节中，我们将讨论[【 `list()` 】](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#list)的更多细节

### 4.4. break 和 continue 语句，以及循环中的 else 子句

[【 `break` 】](https://docs.python.org/zh-cn/3.8/reference/simple_stmts.html#break)语句，和 `C` 中的类似，用于跳出最近的 `for` 或 `while` 循环

循环语句可能带有 `else` 子句，它会在循环耗尽了可迭代对象 (使用 `for` ) 或循环条件变为假值 (使用 `while` ) 时被执行，但不会在循环被 `break` 语句终止时被执行

以下搜索素数的循环就是这样的一个例子：

```py
>>> for n in range(2, 10):
...     for x in range(2, n):
...         if n % x == 0:
...             print(n, 'equals', x, '*', n//x)
...             break
...     else:
...         # loop fell through without finding a factor
...         print(n, 'is a prime number')
...
2 is a prime number
3 is a prime number
4 equals 2 * 2
5 is a prime number
6 equals 2 * 3
7 is a prime number
8 equals 2 * 4
9 equals 3 * 3
```

> 是的，这是正确的代码
>> 仔细看：`else` 子句属于 `for` 循环，不属于 `if` 语句

当和循环一起使用时，`else` 子句与[【 `try` 】](https://docs.python.org/zh-cn/3.8/reference/compound_stmts.html#try)语句中的 `else` 子句的共同点多于 `if` 语句中的同类子句：

- `try` 语句中的 `else` 子句会在未发生异常时执行，而循环中的 `else` 子句则会在未发生 `break` 时执行

- 有关 `try` 语句和异常的更多信息，请参阅[【处理异常】](https://docs.python.org/zh-cn/3.8/tutorial/errors.html#tut-handling)

[【 `continue` 】](https://docs.python.org/zh-cn/3.8/reference/simple_stmts.html#continue)语句也是借鉴自 `C` 语言，表示继续循环中的下一次迭代：

```py
>>> for num in range(2, 10):
...     if num % 2 == 0:
...         print("Found an even number", num)
...         continue
...     print("Found a number", num)
Found an even number 2
Found a number 3
Found an even number 4
Found a number 5
Found an even number 6
Found a number 7
Found an even number 8
Found a number 9
```

### 4.5. pass 语句

[【 `pass` 】](https://docs.python.org/zh-cn/3.8/reference/simple_stmts.html#pass)语句什么也不做

当语法上需要一个语句，但程序需要什么动作也不做时，可以使用它，例如

```py
>>> while True:
...     pass  # Busy-wait for keyboard interrupt (Ctrl+C)
...
```

这通常用于创建最小的类：

```py
>>> class MyEmptyClass:
...     pass
...
```

pass 的另一个可以使用的场合是：在你编写新的代码时作为一个函数或条件子句体的占位符，允许你保持在更抽象的层次上进行思考

- pass 会被静默地忽略

```py
>>> def initlog(*args):
...     pass   # Remember to implement this!
...
```

### 4.6. 定义函数

我们可以创建一个输出任意范围内 Fibonacci 数列的函数

```py
>>> def fib(n):    # write Fibonacci series up to n
...     """Print a Fibonacci series up to n."""
...     a, b = 0, 1
...     while a < n:
...         print(a, end=' ')
...         a, b = b, a+b
...     print()
...
>>> # Now call the function we just defined:
... fib(2000)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
```

- 关键字[【 `def` 】](https://docs.python.org/zh-cn/3.8/reference/compound_stmts.html#def)引入一个 **`函数定义`**

  - 它必须后跟函数名称和带括号的形式参数列表

  - 构成函数体的语句从下一行开始，并且必须缩进

- 函数体的第一个语句可以（可选的）是字符串文字

  这个字符串文字是函数的文档字符串或 `docstring`（有关文档字符串的更多信息，请参阅[【文档字符串】](https://docs.python.org/zh-cn/3.8/tutorial/controlflow.html#tut-docstrings)部分）
  
  有些工具使用文档字符串自动生成在线或印刷文档，或者让用户以交互式的形式浏览代码；在你编写的代码中包含文档字符串是一种很好的做法，所以要养成习惯

- 函数的 **`执行`** 会引入一个用于函数局部变量的新符号表；更确切地说，函数中所有的变量赋值都将存储在局部符号表中

  而变量引用会首先在局部符号表中查找，然后是外层函数的局部符号表，再然后是全局符号表，最后是内置名称的符号表
  
  因此，全局变量和外层函数的变量不能在函数内部直接赋值（除非是在[【 `global` 】](https://docs.python.org/zh-cn/3.8/reference/simple_stmts.html#global)语句中定义的全局变量，或者是在[【 `nonlocal` 】](https://docs.python.org/zh-cn/3.8/reference/simple_stmts.html#nonlocal)语句中定义的外层函数的变量），尽管它们可以被引用

- 在函数被调用时，实际参数（实参）会被引入被调用函数的本地符号表中

  因此，实参是通过 **`按值调用`** 传递的（其中 **`值`** 始终是对象 引用 而不是对象的值）
  
  当一个函数调用另外一个函数时，将会为该调用创建一个新的本地符号表

函数定义会将函数名称与函数对象在当前符号表中进行关联

- 解释器会将该名称所指向的对象识别为用户自定义函数

- 其他名称也可指向同一个函数对象并可被用来访问访函数

```py
>>> fib
<function fib at 10042ed0>
>>> f = fib
>>> f(100)
0 1 1 2 3 5 8 13 21 34 55 89
```

如果你学过其他语言，你可能会认为 `fib` 不是函数而是一个过程，因为它并不返回值

- 事实上，即使没有 `return` 语句的函数也会返回一个值，尽管它是一个相当无聊的值

- 这个值称为 `None`（它是内置名称）

- 一般来说解释器不会打印出单独的返回值 `None` ，如果你真想看到它，你可以使用 `print()`

```py
>>> fib(0)
>>> print(fib(0))
None
```

写一个返回斐波那契数列的列表（而不是把它打印出来）的函数：

```py
>>> def fib2(n):  # return Fibonacci series up to n
...     """Return a list containing the Fibonacci series up to n."""
...     result = []
...     a, b = 0, 1
...     while a < n:
...         result.append(a)    # see below
...         a, b = b, a+b
...     return result
...
>>> f100 = fib2(100)    # call it
>>> f100                # write the result
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
```

此示例中，像往常一样，演示了一些新的 Python 功能：

- `return` 语句会从函数内部返回一个值

  不带表达式参数的 return 会返回 None
  
  函数执行完毕退出也会返回 None

- `result.append(a)` 语句调用了列表对象 `result` 的 **`方法`**

  方法是 **`属于`** 一个对象的函数，它被命名为 `obj.methodname` ，其中 `obj` 是某个对象（也可能是一个表达式），`methodname` 是由对象类型中定义的方法的名称
  
  不同的类型可以定义不同的方法
  
  不同类型的方法可以有相同的名称而不会引起歧义（可以使用 **`类`** 定义自己的对象类型和方法，请参阅[【类】](https://docs.python.org/zh-cn/3.8/tutorial/classes.html#tut-classes)）
  
  示例中的方法 `append()` 是为列表对象定义的；它会在列表的最后添加一个新的元素，在这个示例中它相当于 `result = result + [a]` ，但更高效

### 4.7. 函数定义的更多形式

给函数定义有可变数目的参数也是可行的

这里有三种形式，可以组合使用：

#### 4.7.1. 参数默认值

最有用的形式是对一个或多个参数指定一个默认值

这样创建的函数，可以用比定义时允许的更少的参数调用，比如：

```py
def ask_ok(prompt, retries=4, reminder='Please try again!'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)
```

这个函数可以通过几种方式调用:

- 只给出必需的参数：

  `ask_ok('Do you really want to quit?')`

- 给出一个可选的参数：

  `ask_ok('OK to overwrite the file?', 2)`

- 或者给出所有的参数：

  `ask_ok('OK to overwrite the file?', 2, 'Come on, only yes or no!')`

这个示例还介绍了 `in` 关键字，它可以测试一个序列是否包含某个值

默认值是在 **`定义过程`** 中在函数定义处计算的，所以：

```py
i = 5

def f(arg=i):
    print(arg)

i = 6
f()
```

结果会打印 5

> 重要警告：默认值只会执行一次
>> 这条规则在默认值为可变对象（列表、字典以及大多数类实例）时很重要

比如，下面的函数会存储在后续调用中传递给它的参数

```py
def f(a, L=[]):
    L.append(a)
    return L

print(f(1))
print(f(2))
print(f(3))
```

这将打印出

```
[1]
[1, 2]
[1, 2, 3]
```

如果你不想要在后续调用之间共享默认值，你可以这样写这个函数：

```py
def f(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L
```

#### 4.7.2. 关键字参数




































































































































































































































































































































































































































































































































































