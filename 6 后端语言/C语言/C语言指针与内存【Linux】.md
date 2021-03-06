> 【2019.9.21】整理自[【视频：Linux C 语言指针与内存】](https://www.imooc.com/learn/394)


---

## 初始指针

声明指针类型：使用 `int* a` 或 `int *a` 进行指针类型声明皆可

- 指针类型的 `a` 变量本身是一段内存地址

- 而指针 `*a` 代表的是这段内存地址所指向的数据

### 指针变量的应用

首先，来看错误案例：

```c
#include <stdio.h>

void change(int a,int b)
{
  int t = a;
  a = b;
  b = t;
}

int main()
{
  int a =5;
  int b =3;

  change(a,b);
  // 此时 `change()` 函数内 `a` `b` 的值已经互换，但只限于 `change()` 函数内，并未传递出来

  printf("a = %d\nb = %d\n",a,b);
  // 此处获取到的 `a` `b` 的值还是原本 `a` `b` 的值，并未发生改变

  return 0;
}
```

然后，经过一番调整后：

```c
#include <stdio.h>

void change(int *a,int *b)
{
  int t = *a;
  *a = *b;
  *b = t;
}

int main()
{
  int a =5;
  int b =3;

  change(&a,&b);
  // 此处使用变量地址进行传参
  // 此时 `a` `b` 的值已经被互换

  printf("a = %d\nb = %d\n",a,b);
  return 0;
}
```

> ### void 的作用：
> - 对函数返回的限定，意思是不返回任何值
> - 对函数参数的限定，意思是没有参数

## 调试工具 gdb

- 编译代码时使用 `-g` 参数可使编译之后的文件可进行 `gdb` 工具进行调试：

```
gcc -g change.err.c -o change.err.o
```

- 使用以下命令进入调试模式：

```
gdb ./change.err.o
```

### gdb 常用工具命令

名称|作用
-|-
回车键|重复上一命令
list|查看原代码（ `list n` ：从第 `n` 行开始查看代码；`list 函数名`：查看具体函数），简写 `l`
start|单步执行，运行程序，停在第一执行语句
next|单步调试（逐过程，函数直接执行），简写 `n`
step|单步调试（逐语句：跳入自定义函数内部执行），简写 `s`
backtrace|查看函数的调用的栈帧和层级关系，简写 `bt`
print|打印值及地址，简写 `p`
frame|切换函数的栈帧，简写 `f`
x|查看内存 `x/20xw` 显示 `20` 个单元，`16 进制` ，`4 字节` 每单元

[【更多命令参考地址】](https://www.cnblogs.com/tangtangde12580/p/8045980.html)

#### `x` 查看内存命令的使用

格式：`x/<n/f/u> <addr>`

- `n` `f` `u` 是可选的参数

  - `n` 是一个正整数，表示需要显示的内存单元的个数，也就是说从当前地址向后显示几个内存单元的内容，而一个内存单元的大小由后面的 `u` 定义
  
  - `f` 表示显示的格式：
  
    如果地址所指的是字符串，那么格式可以是 `s`
  
    如果地址所指是指令地址，那么格式可以是 `i`

  - `u` 表示从当前地址往后请求的字节数，如果不指定的话，`GDB` 默认是 `4` 个字节

    `u` 参数可以用下面的字符来代替：`b` 表示单字节，`h` 表示双字节，`w` 表示四字节，`g` 表示八字节
    
    当我们指定了字节长度后，`GDB` 会从指内存定的内存地址开始，读写指定字节，并把其当作一个值取出来

  - `n` `f` `u` 三个参数可以一起使用，例如命令：`x/3uh 0x54320`

    它表示，从内存地址 `0x54320` 开始读取内容：

    - `h` 表示以双字节为一个单位
    - `3` 表示输出三个单位
    - `u` 表示按十六进制显示

- `<addr>` 表示一个内存编码地址

> ### 注意：
> 严格区分 `n` 和 `u` 的关系，`n` 表示单元个数，`u` 表示每个单元的大小

## 指针变量

- 我们用 `*变量名` 来表示指针变量，如 `*ab`

  - `*ab` 中 `ab` 本身保存的是一段内存地址

  - `*ab` 表示的是这段内存地址所指向的值

  - `ab` 依然有自己的内存地址，用 `&ab` 来表示

- 相比较于正常的变量，如 `cc`

  - `cc` 本身保存的是一个值

  - `cc` 有自己的内存地址，用 `&cc` 来表示

> 需要注意的是：`cc` 没有 `*cc` 的表示方法
> - 因为 `cc` 本身保存的不是一段内存地址，也就是说：
> - 你无法通过 `cc` 本身保存的 `东西` (因为它不是内存地址)找到它所指向的值
> - 命令行中报错如下类似：`Cannot access memory at address 0x0`

## 操作系统对内存的管理

### 了解 二进制 十进制 十六进制

> 计算机中常用的数的进制主要有：二进制、八进制、十进制、十六进制，学习计算机要对其有所了解

- 二进制，用两个阿拉伯数字：0、1

- 八进制，用八个阿拉伯数字：0 到 7

- 十进制，用十个阿拉伯数字：0 到 9

- 十六进制就是逢 16 进 1 ，但我们只有 0~9 这十个数字，所以我们用 `A，B，C，D，E，F` 这五个字母来分别表示 `10，11，12，13，14，15`

  - 字母不区分大小写

### 内存管理

编号|内存
-|-
1|系统内核
2|栈
3|动态区域
4|堆
5|数据段
6|代码段

> 编号越小，层级越高，内存地址编号越大

- 系统内核：系统运行所需的内存

- 栈：记录函数相关的信息

  由编译器在需要的时候分配，在无需的时候自动清楚的变量的存储区
  
  里面的变量通常是局部变量、函数参数等

- 动态区域：计算机自由可分配内存

- 堆：一般由程序员控制

  由 `new` 分配的内存块，他们的释放编译器不管，由我们的应用程式去控制
  
  一般一个 `new` 就要对应一个 `delete`（假如程式员没有释放掉，那么在程式结束后，操作系统会自动回收）

- 数据段：存放 `静态变量` 、`全局变量` 、`常量` ，存放顺序是越后声明的内存地址编号越大

- 代码段：存放我们的运算代码，如 `a+b` `1+2`等

> [【扩展资料：堆和栈究竟有什么区别】](https://wenku.baidu.com/view/bd80060e69eae009581becd3.html)

### 栈内存

> 栈的特点
> - 先进后出：先进入的函数，也会最后退出
> - 从上向下：函数由上向下排序，越先进入的函数的栈内存编号地址越大，排序位置也会越下
>> 不同的操作系统可能会有所差别

栈内存中存放以下信息：

- 当前调用的函数

- 当前调用的函数运行到哪

- 函数中运行的变量，这些变量的值

### 内存堆和栈的区别

> 堆和栈都是一种数据项按序排列的数据结构

这里有必要把内存分配也提一下：

- 一般情况下程序存放在Rom（只读内存，比如硬盘）或Flash中

- 运行时需要拷到RAM（随机存储器RAM）中执行，RAM会分别存储不同的信息

如下图所示：

![内存分配](https://upload-images.jianshu.io/upload_images/2963877-e396648077b97c87..jpg?imageMogr2/auto-orient/strip|imageView2/2/w/501/format/webp)

#### 堆区和栈区

- 内存中的栈区处于相对较高的地址

  - 以地址的增长方向为上的话，栈地址是向下增长的，栈中分配局部变量空间

- 堆区是向上增长的用于分配程序员申请的内存空间

- 另外还有静态区是分配静态变量，全局变量空间的

- 只读区是分配常量和程序代码空间的
  
- 以及其他一些分区

### 变量和指针的本质

> C 语言不允许我们直接去操作代码段

- 变量的本质就是内存

  - 变量名只是一个代号

- 指针的本质就是地址

  - 指针保存的是内存地址

### `gcc` 的编译优化

使用 `gcc` 编译代码时，操作系统在对代码进行机器编码转化时，会对变量声明进行一定的优化操作，如：

- 同类型同层级的变量放在一起声明，不管声明先后顺序

- 先声明的变量内存编码地址较小，后声明的较大

> 操作系统是 32 位还是 64 位会对编译优化操作进行一定的影响

## 函数指针

如果在程序中定义了一个函数，那么在编译时系统就会为这个函数代码分配一段存储空间，这段存储空间的首地址称为这个函数的地址

- 函数名表示的就是这个地址

- 既然是地址我们就可以定义一个指针变量来存放，这个指针变量就叫作函数指针变量，简称函数指针

- 函数指针的定义方式：`函数返回值类型(*指针变量名)(函数参数列表)`

  - `函数返回值类型` 表示该指针变量可以指向具有什么返回值类型的函数

  - `(*指针变量名)` 两端的括号不能省略，括号改变了运算符的优先级;如果省略了括号，就不是定义函数指针而是一个函数声明了，即声明了一个返回值类型为指针型的函数

  - `函数参数列表` 表示该指针变量可以指向具有什么参数列表的函数

    - 这个参数列表中只需要写函数的参数类型即可

  - 如：`int(*p)(int, int)`

    - 这个语句就定义了一个指向函数的指针变量 `p`
    
    - 首先它是一个指针变量，所以要有一个 `*` ，并用括号包裹，即 `(*p)`
    
    - 其次前面的 int 表示这个指针变量可以指向返回值类型为 int 型的函数
    
    - 后面括号中的两个 int 表示这个指针变量可以指向有两个参数且都是 int 型的函数
    
    - 所以合起来这个语句的意思就是：定义了一个指针变量 `p` ，该指针变量可以指向返回值类型为 int 型，且有两个整型参数的函数
    
    - `p` 的类型为 `int(*)(int，int)`

### 判断指针变量

问题：怎么判断一个指针变量是指向变量的指针变量，还是指向函数的指针变量呢？

- 首先看变量名前面有没有 `*`

  - 如果有 `*` 说明是指针变量

- 其次看变量名的后面有没有带有形参类型的圆括号

  - 如果有就是指向函数的指针变量，即函数指针

  - 如果没有就是指向变量的指针变量

> ### 需要注意的是：
> 指向函数的指针变量没有 `++` 和 `--` 运算

### 如何用函数指针调用函数

现有一个函数指针：`int (*f)(int x)`

- 给它接收一个名为 `Func` 函数的地址：`f = Func`

- 当我们要通过函数指针来调用 Func 这个函数时：`(*f)(x)`

### 如何让函数指针联系一个函数

- 使用函数指针的变量名进行赋值

  ```c
  int Func(int x);
  // 声明一个函数

  int (*f)(int x);
  // 定义一个函数指针

  f = Func;
  // 将 Func 函数的首地址赋给指针变量 f

  (*f)(x);
  // 调用 Func 函数
  ```

  - 赋值时函数 `Func` 不带括号，也不带参数

  - 由于函数名 `Func` 代表函数的首地址，因此经过赋值以后，指针变量 `f` 就指向函数 `Func()` 代码的首地址了

- 声明函数指针为函数名的地址

  ```c
  int Func(int x);
  // 声明一个函数

  int (*f)(int x) = &Func;
  // 定义一个函数指针，并接收 Func 函数的地址
  // 这里做了两件事情，如同以下两行
  // int (*f)(int x);
  // f = Func;

  (*f)(x);
  // 调用 Func 函数
  ```

## 数组声明的内存排列

现有一段程序：

```c
#include <stdio.h>

int main(int argc, char const *argv[])
{
  int a = 3;
  int b = 2;
  int array[2];
  array[0] = 1;
  array[1] = 10;
  array[2] = 100;

  int *p = &a;
  int i;
  for (i = 0; i < 6; i++)
  {
    printf("*p=%d\n", *p);
    p++;
  }

  printf("====================\n");

  p = &a;
  for (i = 0; i < 6; i++)
  {
    printf("p[i]=%d\n", p[i]);
  }
  return 0;
}
```

> 注意：
> - `int array[2]` 的中括号 `[]` 内的值为多少在此处并无实际意义
> - 此程序的运行结果与电脑的运行状态有较大关系，结果类似如下

```
*p=3
*p=1
*p=2
*p=-272288168
*p=32767
*p=-272287920
====================
p[i]=3
p[i]=1
p[i]=2
p[i]=-272288180
p[i]=32767
p[i]=-272287920
*** stack smashing detected ***: <unknown> terminated
Aborted (core dumped)
```

- 这里我们看出：

  - 上下两段输出值的前三个是可以猜测的(我们的代码段中有出现这几个值)
  
  - 而后面三个则是没有根据的(不知道从哪来的)

- 实际上，前三个值分别为 `a` `i` `b` 的值

  - 它们前面的顺序是 `操作系统` 进行 `编码优化` 之后而来的排列顺序

  - 至于 `i` 的值为什么是 `1` ？因为当它被读取到的时候已经由 `0` 进行了一次 `i++` 得到的
- 而后三个值是哪里来的？实际上，我们也不会知道：

  - 原因在于你的电脑这块内存在干什么，我们暂时不是轻易可以知道的

  - 至于为什么不是数组的值？因为 `操作系统` 在对你的代码进行 `编码优化` 了之后，并没有把你的数组的内存区域放在 `a` `i` `b` 这三个值的后面

### 指针变量遇到数组

如果我们一定要输出数组的值，那么调整一下前面的这段程序代码：

- 修改 `int *p = &a` 为 `int *p = &array[0]`

- 也就是说，我现在想从数组的第一项开始打印指向的值

- 这里数组长度只有 `3` ，而我还是循环 `6` 次，后面的三个值为多少依然不可预测

```c
#include <stdio.h>

int main(int argc, char const *argv[])
{
  int a = 3;
  int b = 2;
  int array[2];
  array[0] = 1;
  array[1] = 10;
  array[2] = 100;

  int *p = &array[0];
  int i;
  for (i = 0; i < 3; i++)
  {
    printf("*p=%d\n", *p);
    p++;
  }

  printf("====================\n");

  p = &a;
  for (i = 0; i < 6; i++)
  {
    printf("p[i]=%d\n", p[i]);
  }
  return 0;
}
```

这里我们运行一下：

```
*p=1
*p=10
*p=100
*p=-933887180
*p=304089056
*p=32662
====================
p[i]=3
p[i]=1
p[i]=2
p[i]=-758275828
p[i]=32767
p[i]=1
*** stack smashing detected ***: <unknown> terminated
Aborted (core dumped)
```

- 我们可以看到 `1` `10` `100` 出现在了输出结果里面，数组的每个值被输出出来了

- 指针变量 `*p` 的变量本身 `p` 是一个 `内存编码地址`，当 `p` 进行 `++` 操作时

  - 其实并不是真的进行了运算，而是向 `下一个内存编码地址` 进行偏移

  - 此时 `*p` 指向的不再是原来的 `内存编码地址` 里面的数据了，而是 `下一个内存编码地址` 的数据

- 我们可以得知：当 `array` 数组被声明时，内存会给它分配几个 `连续的` 内存编码地址，用以 `按顺序的` 存放 `array` 数组的各个元素

这里我们可以修改下代码：

```c
#include <stdio.h>

int main(int argc, char const *argv[])
{
  int a = 3;
  int b = 2;
  int array[2];
  int *pp = array;
  *pp[0] = 1;
  *pp[1] = 10;
  *pp[2] = 100;

  int *p = &array[0];
  int i;
  for (i = 0; i < 3; i++)
  {
    printf("*p=%d\n", *p);
    p++;
  }

  printf("====================\n");

  p = &a;
  for (i = 0; i < 6; i++)
  {
    printf("p[i]=%d\n", p[i]);
  }
  return 0;
}
```

- 其输出结果依然不会有太大变化，因为 `int *pp = array` 时，`pp` 就已经拿到了数组的 `内存编码地址` ，其后就可以把它当作数组来进行操作

- 当我们把代码中上下两个循环的循环次数依次增加到 `11` 和 `10` 之后，输出结果如下：

```
*p=1
*p=10
*p=100
*p=-1054003692
*p=148899808
*p=32531
*p=140647319
*p=32531
*p=1
*p=0
*p=-477893976
====================
p[i]=3
p[i]=1
p[i]=2
p[i]=-477894244
p[i]=32767
p[i]=1
p[i]=10
p[i]=100
p[i]=-1054003692
p[i]=148899808
*** stack smashing detected ***: <unknown> terminated
Aborted (core dumped)
```

> 在这里，需要告诉你的是：除了 `a` `i` `b` 和 `array` 数组的输出结果，每次运行的输出结果都是不尽相同的！
>> 原因是什么呢？因为你所遇到的这几个 `内存编码地址` 是电脑的 `操作系统` 正在做别的事情，而被你不幸读到了它们的值；当你再次运行你的程序时，你已经不一定会再次遇到上次的那几个 `内存编码地址` 了

## 字符串数组

在 C 语言中，字符串是一个数组的形式存在，每个 `字母` 对应一个 `内存编码地址`

- 遇到中文字符串时，中文会被转码，如 '\346'

```c
#include <stdio.h>

int main(int argc, char const *argv[])
{
  char str[] = "hello";
  char *str2 = "world";
  char str3[10];
  printf("input the value \n");
  scanf("%s", str3);
  printf("str is %s\n", str);
  printf("str2 is %s\n", str2);
  printf("str3 is %s\n", str3);
  return 0;
}
```

运行结果：

```
input the value
我是
str is hello
str2 is world
str3 is 我是
```

### 结束字符串输出 `\0`

调整一下前面的程序代码：

```c
#include <stdio.h>

int main(int argc, char const *argv[])
{
  char str[] = "hello";
  char *str2 = "world";
  char str3[10];
  printf("input the value \n");
  scanf("%s", str3);
  str[3] = '\0';
  printf("str is %s\n", str);
  printf("str2 is %s\n", str2);
  printf("str3 is %s\n", str3);
  return 0;
}
```

我们在 `str` 字符串的从 `0` 开始的第 `3` 个位置放入了一个 `\0`

- 也就是说，我们只想要 `hel`

- 查看输出结果：

```
input the value
abc
str is hel
str2 is world
str3 is abc
```

#### C 语言中 `双引号` 与 `单引号` 的区别

`双引号` 里面的是字符串，`单引号` 里面的代表字符

- 只要是在 `双引号` 里面的不代表任何表达式的意义

  - 例如以下代码段：

    ```c
    // ...以下省略其他代码

    char b[] = "a";
    printf("%s",b)
    ```

  - 输出结果为 `a`

- `单引号` 里面的值为被转译

  - 继续修改上面的例子：

    ```c
    // ...以下省略其他代码

    int b = 'a';
    printf("%d",b)
    ```

  - 输出结果为 `97`
  
  - 为什么代码块变了？而且 `97` 是从哪里来的？

    前面的代码块直接修改为 `char b[] = 'a'` ，然后同样的去打印 `b` 这个变量，会在 `char b[] = 'a'` 这报错

    因为 `单引号` 中的这个 `a` 就不是前面 `双引号` 那个了，而是 `ASCII` 中的 `a` 字符，对应的数字就是 `97`

    直接 `char` 声明 `字符串` 类型是肯定不行的

### 向字符数组中输入过量字符

继续调整前面的程序代码：

```c
#include <stdio.h>

int main(int argc, char const *argv[])
{
  char str[] = "hello";
  char *str2 = "world";
  char str3[10];
  printf("input the value \n");
  scanf("%s", str);
  printf("str is %s\n", str);
  printf("str2 is %s\n", str2);
  printf("str3 is %s\n", str3);
  return 0;
}
```

- 我们在输入那里，输入的值赋值给 `str` 这个字符串数组

- 此时我们决定来点作死的操作，输出很多个字符会怎样？

```
input the value
abcdbadddddddddddddddlsddddddddd
str is abcdbadddddddddddddddlsddddddddd
str2 is world
str3 is dddddddddddddddlsddddddddd
*** stack smashing detected ***: <unknown> terminated
Aborted (core dumped)
```

- 我们发现：`str3` 虽然没被有被赋值，但也打印出来了东西

- 重新运行程序：

```
input the value
abcabc
str is abcabc
str2 is world
str3 is
```

- 此时 `str3` 没有值

- 再次运行程序：

```
input the value
abcabcabcccc
str is abcabcabcccc
str2 is world
str3 is abcccc
```

- 这次 `str3` 有值了，而且刚好是我们输入给 `str` 的字符串的第 `7` 个字母开始的字符串

- 这是因为 `str` 在声明字符串数组时，只确定了 `6` 个字符，这几个位置没填满前，不会溢出（根据电脑 `操作系统` 的区别，此处结果可能会有较大差别）
