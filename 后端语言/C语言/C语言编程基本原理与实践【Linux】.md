> 【2019.9.20】整理自[【视频：Linux C 语言编程基本原理与实践】](https://www.imooc.com/learn/248)


---

## C 语言

C 语言是一种广泛使用的计算机语言，它与 `Java` 编程语言一样普及，二者在现代软件程序员之间都得到广泛使用

### 特点

- 简单
- 快速
- 高性能
- 兼容性好
- 功能强大
- 易于学习

### 适合做什么

- 小巧灵活
- 语法简单
- 适合做小工具
- 和硬件打交道的程序

## 第一个 C 程序 HelloWorld.c

```c
// HelloWorld.c
#include <stdio.h>
 
int main()
{
  printf("Hello, World! \n");
  return 0;
}
```

- 在命令行中执行以下代码对 C 语言文件进行编译，编译成机器语言文件

```
gcc HelloWorld.c -o HelloWorld.out
```

- 然后直接在命令行运行文件即可

```
./HelloWorld.out

// 此处会显示程序文件执行后的结果
```

### gcc 命令的常用参数选项

参数|解释
-|-
-ansi|只支持 ANSI 标准的 C 语法，这一选项将禁止 GNU C 的某些特色，例如 asm 或 typeof 关键词
-c|只编译并生成目标文件
-DMACRO|以字符串 `"1"` 定义 MACRO 宏
-DMACRO=DEFN|以字符串 `"DEFN"` 定义 MACRO 宏
-E|只运行 C 预编译器
-g|生成调试信息，GNU 调试器可利用该信息
-IDIRECTORY|指定额外的头文件搜索路径 DIRECTORY
-LDIRECTORY|指定额外的函数库搜索路径 DIRECTORY
-lLIBRARY|连接时搜索指定的函数库 LIBRARY
-m486|针对 486 进行代码优化
-o FILE|生成指定的输出文件，用在生成可执行文件时
-O0|不进行优化处理
-O 或 -O1|优化生成代码
-O2|进一步优化
-O3|比 -O2 更进一步优化，包括 inline 函数
-shared|生成共享目标文件，通常用在建立共享库时
-static|禁止使用共享连接
-UMACRO|取消对 MACRO 宏的定义
-w|不生成任何警告信息
-Wall|生成所有警告信息

## 代码分割
现有一个 max.c 的程序文件：

```c
// max.c
int max(int a, int b)
{
  if(a>b){
    return a;
  }else{
    return b;
  }
}
```

我们可以使用 `#include` 引用文件和系统组件库：

```c
#include <stdio.h>  // 引用系统组件库
#include "max.c"  // 引用 max.c 文件
```

> 实际上我们并不这么引用
> - 作为一种保护方式，`.c` 文件可能并不具备可读性，其内包含了函数实现，变量定义等内容(有时候人们并不想公布它们)
> - 所以出现 `.h` 文件作为头文件，其内包含了函数声明、宏定义、结构体定义等内容

```c
#include <stdio.h>  // 引用系统组件库
#include "max.h"  // 系统会查找并引用 max.c 文件
```

max.h 文件内容

```c
int max(int a, int b);
```

## 批量编译文件

理论上我们可以通过以下的方式进行多文件的编译：

```
gcc max.c min.c HelloWord.c -o main.out
```

### 使用 make 插件进行多文件编译

当文件超过一定数量的时候，多文件编译将会是一场灾难，这时候需使用 make 插件

- Linux 下安装 make 插件

```
sudo apt-get make
```

> 另一条参考命令：sudo apt-get build-essential
>> 遇到直接安装 make 命令出现错误时可使用

- 安装 make 插件后可直接运行命令 make 进行自动编译

  - 但在此之前需先创建一个名为 `Makefile` 的文件来编辑批量编译的命令

```
# Makefile
HelloWord.c: max.o min.o HelloWord.c
	gcc max.o min.o HelloWord.c
max.o:max.c
	gcc -c max.c
min.o:min.c
	gcc -c min.c
```

- 然后运行命令

```
make
```

> 可用 `&&` 连接两个命令进行输出，以下命令就是编译完成之后立即进行执行：
>> `gcc main.c -o main.out && ./main.out`

## return 的作用

linux 上执行`echo $?` 时会输出你的 `return 0` 中的 `0`

> windows 系统上的蓝屏信息也是可以 return 出来的

## main 函数中的参数

### argv 参数

```c
// argv.c
#include <stdio.h>

int main(int argv, char *argc[])
{
  printf("argv is %d \n", argv);
  return 0;
}
```

当用以下命令执行以上程序文件时，执行结果会给出结果 `4`

- `./argv.out` 文件本身会被当作第一个参数进行统计

- 其后跟随的 `-l -a -s` 会被当作剩下的 `3` 个参数进行统计

```
gcc argv.c -o argv.out && ./argv.out -l -a -s
```

> `-l -a -s` 这部分参数为随意添加，无实际意义

### argc[] 参数

```c
#include <stdio.h>

int main(int argv, char *argc[])
{
  printf("argv is %d \n", argv);
  int i;
  for (i = 0; i < argv; i++)
  {
    printf("argc[%d]is %s\n", i, argc[i]);
  }
  return 0;
}
```

与前面的 `argv 参数` 相同，当用 `gcc argc.c -o argc.out && ./argc.out -l -a -s` 命令执行以上程序文件时，执行结果如下：

```
argv is 4
argc[0]is ./argc.out
argc[1]is -l
argc[2]is -a
argc[3]is -s
```

### 格式说明

格式说明由 `％` 和格式字符组成，如 `％d` `％f` 等

- 它的作用是将输出的数据转换为指定的格式输出

- 格式说明总是由 `％` 字符开始的

- 格式字符有 `d,o,x,u,c,s,f,e,g` 等

格式|说明
-|-
％d|整型输出
％ld|长整型输出
％o|以八进制数形式输出整数
％x|以十六进制数形式输出整数，或输出字符串的地址
％u|以十进制数输出 unsigned 型数据(无符号数)
％c|用来输出一个字符
％s|用来输出一个字符串
％f|用来输出实数，以小数形式输出，默认情况下保留小数点 6 位
%.100f|用来输出实数，保留小数点 100 位
％e|以指数形式输出实数
％g|根据大小自动选f格式或e格式，且不输出无意义的零

> ## 注意：
> `%d` 与 `%u` 有无符号的数值范围，也就是极限的值，不然数值打印出来会有误

## 标准 输入 / 输出 / 错误 流

之前我们使用的 `printf` 是已经被包装过的工具，它们有：

- printf 输出工具
- scanf 输入工具

我们需要了解的：

- stdin 标准输入流，回个话指的键盘
- stdout  标准输出流，默认指的终端
- stderr  标准错误流

```c
#include <stdio.h>

/*
stdin
stdout
stderr
*/

int main()
{
  // printf("plesse input the value a :\n");
  // 同下一行
  fprintf(stdout,"plesse input the value a :\n");
  
  int a;

  // scanf("%d",&a);
  // 同下一行
  fscanf(stdin,"%d",&a);

  if(a<0){
    // 标准错误流
    fprintf(stderr,"the value must > 0\n");
    return 1;
  }

  return 0;
}
```

## 使用通道（管道）重定向输出内容

### 使用 `>>` 向后累加输出内容

```c
// re.c
#include <stdio.h>

int main()
{
  printf("input the int value i:\n");
  int i, j;
  scanf("%d", &i);
  printf("input the int value j:\n");
  scanf("%d", &j);
  printf("i+j=%d\n", i + j);
  return 0;
}
```

执行以下命令进行 `结果的转存` :

```
gcc re.c -o re.out && ./re.out >> a.txt
```

- 仔细查找会发现当前目录多出一个 `a.txt` 的文件，打开如下：

```
input the int value i:
input the int value j:
i+j=8
```

- 以上即是通过 `>>` 对结果进行转存(重定向输出)的操作

> ### 特点：
> 每次重定向的结果会不断向后累加进重定向的地方(此处是 `a.txt` 文件内)

### 使用 `>` 对重定向结果进行覆盖

同 `>>` ，但会覆盖掉前面的内容，只显示最后一次输出结果

### 使用 `<` 进行输入内容

- 新建一个 `b.txt` 文件，其内容为：

```
5
5
```

- 执行以下命令：

```
gcc re.c -o re.out && ./re.out < b.txt
```

- 命令行中会给出结果：

```
input the int value i:
input the int value j:
i+j=10
```

### 标准错误流的重定向

现有以下 `err.c` 文件：

```c
// err.c
#include <stdio.h>

int main()
{
  printf("input the int value i:\n");
  int i, j;
  scanf("%d", &i);
  printf("input the int value j:\n");
  scanf("%d", &j);
  if (j != 0)
  {
    printf("%d/%d=%d\n", i, j, i / j);
  }
  else
  {
    fprintf(stderr, "j != 0\n");
  }
  return 0;
}
```

- 可分析看出 `j` 的值为被除数，是不能为 0 的，否则会出错，并输出了 `j != 0`

```
input the int value i:
1
input the int value j:
0
j != 0
```

- 以上我依次输入了 `1` 和 `0`

### 分开输出 `正确 / 错误` 的结果

还是同样的 `err.c` 文件：

```c
// err.c
#include <stdio.h>

int main()
{
  printf("input the int value i:\n");
  int i, j;
  scanf("%d", &i);
  printf("input the int value j:\n");
  scanf("%d", &j);
  if (j != 0)
  {
    printf("%d/%d=%d\n", i, j, i / j);
  }
  else
  {
    fprintf(stderr, "j != 0\n");
    return 1;
  }
  return 0;
}
```

- 现在在命令行中输入以下命令，可分别在 `ri.txt` 和 `er.txt` 文件中存放正确和错误的信息：

```
gcc re.c -o re.out && ./re.out 1> ri.txt 2>er.txt
```

- 在上述命令中，`1` 表示正确的输出内容，`2` 表示错误的输出内容，且它们为固定数值

- 此时在当前目录下会出现

  - `ri.txt` 文件，它记录了最后一次正确的输出信息
  
  - `er.txt` 文件，它记录了最后一次错误的输出信息

> 当把 `>` 符号换成 `>>` 符号时，会不断累加输出信息
>> `gcc re.c -o re.out && ./re.out 1>> ri.txt 2>>er.txt`

> 再次修改命令行中的命令：
>> `gcc re.c -o re.out && ./re.out 1> ri.txt 2>er.txt <input.txt`
>>> `<input.txt` 表示输入 input.txt 文件中的数据

## 管道符号 `|`

连接多个程序文件，以达到程序的连续操作

```
a.c | b.c
```

或

```
ls /etc/ | grep ab
```

- 以上命令行代码表示 `列出 etc 文件夹` 中的所有包含 ab 字符的文件及文件夹

### 一个小实例：计算平均工资

- 计算平均数的方法

```c
#include <stdio.h>

int main()
{
  int s, n;
  scanf("%d,%d", &s, &n);
  float v = s / n;
  printf("v=%f\n", v);
  return 0;
}
```

> ### 注意
> `scanf("%d,%d", &s, &n)` 中的 `"%d,%d"` 部分，两个参数间隔的符号，须要求为英文 `,` ，便于后续的程序使用

- 统计工资的方法

```c
#include <stdio.h>

int main(int argc, char const *argv[])
{
  int i;
  int count=0;
  int s = 0;
  while(1){
    scanf("%d",&i);
    if(i==0) break;
    s+=i;
    count++;
  }
  printf("%d,%d\n",s,count);
  return 0;
}
```

  - 上述代码进行统计键盘输入的值，并统计输入次数，输入 `0` 时中断输入

- 分别对两个程序进行编译

```
cc avg.c -o avg.o && ./avg.o
```

```
cc tong.c -o tong.o && ./tong.o
```

- 使用以下代码进行流程控制

```
./tong.o | ./avg.o
```

  - 先执行 tong.o
  - 再把上一步的执行结果传递给 avg.o 进行操作

> ### 关于 cc
> - 如果讨论范围在Unix和Linux之间，那么cc和gcc不是同一个东西：cc 来自于 Unix 的 c 语言编译器，是 c compiler 的缩写；gcc 来自 Linux 世界，是 GNU compiler collection 的缩写，注意这是一个编译器集合，不仅仅是 c 或 c++ 
> - 如果讨论范围仅限于 Linux ，我们可以认为它们是一样的，在 Linux 下调用 cc 时，其实际上并不指向 unix 的 cc 编译器，而是指向了 gcc ，也就是说 cc 是 gcc 的一个链接（快捷方式）
