【 2019 年 6 月 18 日开始】整理自[【菜鸟教程 Java 教程】](https://www.runoob.com/java/java-tutorial.html)

---


![图片](https://www.runoob.com/wp-content/uploads/2013/12/java.jpg)

# Java

Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的高级程序设计语言

- Java 可运行于多个平台，如

  - Windows
  - Mac OS
  - 其他多种 UNIX 版本的系统

- [【 Java 在线工具】](https://www.runoob.com/try/showjava.php?filename=HelloWorld)

- [【 JDK 1.6 在线中文手册】](https://www.runoob.com/manual/jdk1.6/)

## 初识Java

以下我们通过一个简单的实例来展示 Java 编程，创建文件 HelloWorld.java (文件名需与类名一致), 代码如下：

```java
public class HelloWorld {
    public static void main(String[] args) {
       System.out.println("Hello World");
    }
}
```

> 注意：`String args[]` 与 `String[] args` 都可以执行
>> 但推荐使用 `String[] args` ，这样可以避免歧义和误读

运行以上实例，输出结果如下：

```
$ javac HelloWorld.java
$ java HelloWorld
Hello World
```

执行命令解析：

- 以上我们使用了两个命令

  - javac

    javac 后面跟着的是 java 文件的文件名，例如 HelloWorld.java

    该命令用于将 java 源文件编译为 class 字节码文件，如：javac HelloWorld.java

    运行 javac 命令后，如果成功编译没有错误的话，会出现一个 HelloWorld.class 的文件

    > 若出现 `错误: 编码GBK的不可映射字符` 等编码错误时，可在 javac 命令后添加几个参数，如
    >> `javac -encoding UTF-8 HelloWorld.java`
    >> - `UTF-8` 为你的编辑器的编码格式

  - java

    java 后面跟着的是 java 文件中的类名,例如 HelloWorld 就是类名，如：java HelloWorld

    > 注意：java 命令后面不要加 `.class`

![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-HelloWorld.gif)

## Java 简介

Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的 Java 面向对象程序设计语言和 Java 平台的总称

由 James Gosling 和同事们共同研发，并在 1995 年正式推出

Java 分为三个体系：

- JavaSE（J2SE）

  Java2 Platform Standard Edition，java平台标准版

- JavaEE(J2EE)

  Java 2 Platform,Enterprise Edition，java平台企业版

- JavaME(J2ME)

  Java 2 Platform Micro Edition，java平台微型版

> 2005 年 6 月，JavaOne 大会召开，SUN 公司公开 Java SE 6
>> 此时 Java 的各种版本已经更名以取消其中的数字 `2`
>> - J2EE 更名为 Java EE
>> - J2SE 更名为 Java SE
>> - J2ME 更名为 Java ME

### 主要特性

> [【详细情况可点击链接进行了解】](https://www.runoob.com/java/java-intro.html)

- Java 语言是简单的：

  Java 语言的语法与 C 语言和 C++ 语言很接近，使得大多数程序员很容易学习和使用

- Java 语言是面向对象的：

  Java 语言提供类、接口和继承等面向对象的特性

- Java 语言是分布式的：

  Java 语言支持 Internet 应用的开发

- Java 语言是健壮的：

  Java 的强类型机制、异常处理、垃圾的自动收集等是 Java 程序健壮性的重要保证

- Java 语言是安全的：

  Java 通常被用在网络环境中，为此，Java 提供了一个安全机制以防恶意代码的攻击

- Java 语言是体系结构中立的：

  Java 程序（后缀为 java 的文件）在 Java 平台上被编译为体系结构中立的字节码格式（后缀为 class 的文件），然后可以在实现这个 Java 平台的任何系统中运行

- Java 语言是可移植的：

  这种可移植性来源于体系结构中立性，另外，Java 还严格规定了各个基本数据类型的长度

- Java 语言是解释型的：

  如前所述，Java 程序在 Java 平台上被编译为字节码格式，然后可以在实现这个 Java 平台的任何系统中运行

- Java 是高性能的：

  与那些解释型的高级脚本语言相比，Java 的确是高性能的

- Java 语言是多线程的：

  在 Java 语言中，线程是一种特殊的对象，它必须由 Thread 类或其子（孙）类来创建

- Java 语言是动态的：

  Java 语言的设计目标之一是适应于动态变化的环境

## Java 开发环境配置

如何搭建 Java 开发环境：

- [【 Windows 上安装开发环境】](https://www.runoob.com/java/java-environment-setup.html#win-install)

- [【 Linux 上安装开发环境】](https://www.runoob.com/java/java-environment-setup.html#linux-install)

- [【安装 Eclipse 运行 Java 】](https://www.runoob.com/java/java-environment-setup.html#eclipse-install)

- [【 Cloud Studio 在线运行 Java 】](https://www.runoob.com/java/java-environment-setup.html#cs-install)

### window 系统安装 java

> 此处仅以 window 系统为例，另需注意的是：最终操作请根据实际情况进行调整

- 下载 JDK

  - 首先我们需要下载 java 开发工具包[【 JDK 下载地址】](http://www.oracle.com/technetwork/java/javase/downloads/index.html)，点击如下下载按钮：

  ![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-download.jpg)

  - 在下载页面中你需要选择接受许可，并根据自己的系统选择对应的版本，本文以 Window 64位系统为例：

  ![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-download-1.jpg)

  - 下载后 JDK 的安装根据提示进行，还有安装 JDK 的时候也会安装 JRE ，一并安装就可以了

    > 安装 JDK ，安装过程中可以自定义安装目录等信息，例如我们选择安装目录为 `C:\Program Files (x86)\Java\jdk1.8.0_91`
    >> 这个安装目录在后面的 `配置环境变量` 的操作时需要用到

- 配置环境变量

  - 安装完成后，右击 `我的电脑` ，点击 `属性` ，选择 `高级系统设置`

  ![图片](https://www.runoob.com/wp-content/uploads/2013/12/win-java1.png)

  - 选择 `高级` 选项卡，点击 `环境变量`

  ![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-win2.png)

  - 然后就会出现如下图所示的画面

  ![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-win3.png)

  - 在 `系统变量` 中设置以下 3 项属性(大小写无所谓)，若已存在则点击 `编辑` ，不存在则点击 `新建`

    - JAVA_HOME
    - PATH
    - CLASSPATH

  - 变量设置参数如下

    - 变量名：JAVA_HOME

      变量值：C:\Program Files (x86)\Java\jdk1.8.0_91

      > 要根据自己的实际路径配置

    ![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-win4.png)

    ![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-win5.png)

    - 变量名：Path

      变量值：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;

    ![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-win6.png)

    ![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-win7.png)

    > 注意：在 Windows10 中，Path 变量里是分条显示的，我们需要将 %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin; 分开添加，否则无法识别

    ```
    %JAVA_HOME%\bin;
    %JAVA_HOME%\jre\bin;
    ```

    ![图片](https://www.runoob.com/wp-content/uploads/2013/12/44A70696-B2E6-4055-B88F-7FC0222DCCA4.png)

    > 更多内容可参考[【 Windows 10 配置 Java 环境变量】](https://www.runoob.com/w3cnote/windows10-java-setup.html)

    - 变量名：CLASSPATH

      变量值：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;

      > 注意前面有个 `.`

    ![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-win8.png)

    > 注意：如果使用 1.5 以上版本的 JDK ，不用设置 CLASSPATH 环境变量，也可以正常编译和运行 Java 程序

- 测试 JDK 是否安装成功

  - `开始` => `运行` 键入 `cmd`

  - 键入 `java -version` 命令，出现类似以下图片上的信息，说明环境变量配置成功

  ![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-win9.png)


# Java 基础

## 语法

一个 Java 程序可以认为是一系列对象的集合，而这些对象通过调用彼此的方法来协同工作

下面简要介绍下类、对象、方法和实例变量的概念：

- 对象

  对象是类的一个实例，有状态和行为

  例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等

- 类

  类是一个模板，它描述一类对象的行为和状态

- 方法

  方法就是行为，一个类可以有很多方法

  逻辑运算、数据修改以及所有动作都是在方法中完成的

- 实例变量

  每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定

### 第一个 Java 程序

下面看一个简单的 Java 程序，它将打印字符串 `Hello World`

```java
public class HelloWorld {
    /* 第一个Java程序
     * 它将打印字符串 Hello World
     */
    public static void main(String[] args) {
        System.out.println("Hello World");
        // 打印 Hello World
    }
}
```

下面将逐步介绍如何保存、编译以及运行这个程序：

- 打开代码编辑器，把上面的代码添加进去

- 把文件名保存为：`HelloWorld.java`

- 打开 `cmd` 命令窗口，进入目标文件所在的位置，假设是 `C:\`

- 在命令行窗口输入 `javac HelloWorld.java` 按下回车键编译代码

  - 如果代码没有错误，`cmd` 命令提示符会进入下一行（假设环境变量都设置好了）

    若出现 `错误: 编码GBK的不可映射字符` 等编码错误时，可在 javac 命令后添加几个参数，如

    - `javac -encoding UTF-8 HelloWorld.java`

    - `UTF-8` 为你的编辑器的编码格式

- 再键输入 `java HelloWorld` 按下回车键就可以运行程序了

- 你将会在窗口看到 `Hello World`

```
C : > javac HelloWorld.java
C : > java HelloWorld
Hello World
```

Gif 图演示：

![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-HelloWorld.gif)

### 基本语法

编写 Java 程序时，应注意以下几点：

- 大小写敏感

  Java 是大小写敏感的，这就意味着标识符 `Hello` 与 `hello` 是不同的

- 类名

  对于所有的类来说，类名的首字母应该大写

  如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 `MyFirstJavaClass`

- 方法名

  所有的方法名都应该以小写字母开头

  如果方法名含有若干单词，则后面的每个单词首字母大写

- 源文件名

  源文件名必须和类名相同

  当保存文件的时候，你应该使用类名作为文件名保存（切记 Java 是大小写敏感的），文件名的后缀为 `.java`

  > 如果文件名和类名不相同则会导致编译错误

- 主方法入口

  所有的 Java 程序由 `public static void main(String[] args)` 方法开始执行

### Java 标识符

Java 所有的组成部分都需要名字 —— 类名、变量名以及方法名都被称为标识符

关于 Java 标识符，有以下几点需要注意：

- 所有的标识符都应该以其中一项开始：

  - 字母（A-Z 或者 a-z）
  - 美元符（$）
  - 下划线（_）

- 首字符之后可以是

  - 字母（A-Z 或者 a-z）
  - 美元符（$）
  - 下划线（_）
  - 数字的任何字符组合

- 关键字不能用作标识符

- 标识符是大小写敏感的

- 合法标识符举例：

  - age
  - $salary
  - _value
  - __1_value

- 非法标识符举例：

  - 123abc
  - -salary

### Java 修饰符

像其他语言一样，Java 可以使用修饰符来修饰类中方法和属性

主要有两类修饰符：

- 访问控制修饰符：

  - default
  - public
  - protected
  - private

- 非访问控制修饰符：

  - final
  - abstract
  - static
  - synchronized

### Java 变量

Java 中主要有如下几种类型的变量：

- 局部变量
- 类变量（静态变量）
- 成员变量（非静态变量）

### Java 数组

数组是储存在堆上的对象，可以保存多个同类型变量

### Java 枚举

`Java 5.0` 引入了枚举，枚举限制变量只能是预先设定好的值

> 使用枚举可以减少代码中的 bug

- 例如，我们为果汁店设计一个程序，它将限制果汁为

  - 小杯
  - 中杯
  - 大杯

> 这就意味着它不允许顾客点除了这三种尺寸外的果汁

```java
class FreshJuice {
   enum FreshJuiceSize{ SMALL, MEDIUM , LARGE }
   FreshJuiceSize size;
}

public class FreshJuiceTest {
   public static void main(String[] args){
      FreshJuice juice = new FreshJuice();
      juice.size = FreshJuice.FreshJuiceSize.MEDIUM  ;
   }
}
```

> 注意：
> - 枚举可以单独声明或者声明在类里面
> - 方法、变量、构造函数也可以在枚举中定义

### Java 关键字

下面列出了 Java 关键字（这些保留字不能用于常量、变量、和任何标识符的名称）

类别|关键字|说明
-|-|-
访问控制|private|私有的
-|protected|受保护的
-|public|公共的
类、方法和变量修饰符|abstract|声明抽象
-|class|类
-|extends|扩充,继承
-|final|最终值,不可改变的
-|implements|实现（接口）
-|interface|接口
-|native|本地，原生方法（非 Java 实现）
-|new|新,创建
-|static|静态
-|strictfp|严格,精准
-|synchronized|线程,同步
-|transient|短暂
-|volatile|易失
程序控制语句|break|跳出循环
-|case|定义一个值以供 switch 选择
-|continue|继续
-|default|默认
-|else|运行
-|do|否则
-|for|运行
-|if|如果
-|instanceof|实例
-|return|返回
-|switch|根据值选择执行
-|while|循环
错误处理|assert|断言表达式是否为真
-|catch|捕捉异常
-|finally|有没有异常都执行
-|throw|抛出一个异常对象
-|throws|声明一个异常可能被抛出
-|try|捕获异常
包相关|import|引入
-|package|包
基本类型|boolean|布尔型
-|byte|字节型
-|char|字符型
-|double|双精度浮点
-|float|单精度浮点
-|int|整型
-|long|长整型
-|short|短整型
变量引用|super|父类,超类
-|this|本类
-|void|无返回值
保留关键字|goto|是关键字，但不能使用
-|const|是关键字，但不能使用
-|null|空

### Java 注释

类似于 C / C++ ，Java 也支持单行以及多行注释

注释中的字符将被 Java 编译器忽略：

```java
public class HelloWorld {
   /* 这是第一个Java程序
    * 它将打印Hello World
    * 这是一个多行注释的示例
    */
    public static void main(String[] args){
       // 这是单行注释的示例
       /* 这个也是单行注释的示例 */
       System.out.println("Hello World");
    }
}
```

### Java 空行

空白行或者有注释的行，Java 编译器都会忽略掉

### 继承

在 Java 中，一个类可以由其他类派生

- 如果你要创建一个类，而且已经存在一个类具有你所需要的属性或方法

- 那么你可以将新创建的类继承该类

利用继承的方法，可以重用已存在类的方法和属性，而不用重写这些代码

- 被继承的类称为超类（super class）

- 派生类称为子类（subclass）

### 接口

在 Java 中，接口可理解为对象间相互通信的协议

- 接口在继承中扮演着很重要的角色

> 接口只定义派生要用到的方法
>> 但是方法的具体实现完全取决于派生类

### Java 源程序与编译型运行区别

![图片](https://www.runoob.com/wp-content/uploads/2013/12/ZSSDMld.png)

## Java 对象和类

Java作为一种面向对象语言，支持以下基本概念：

- 多态
- 继承
- 封装
- 抽象
- 类
- 对象
- 实例
- 方法
- 重载

本节我们重点研究对象和类的概念：

- 对象

  对象是类的一个实例（对象不是找个女朋友），有状态和行为

  例如，一条狗是一个对象

  - 它的状态有：

    - 颜色
    - 名字
    - 品种

  - 它的行为有：

    - 摇尾巴
    - 叫
    - 吃 等等

- 类

  类是一个模板，它描述一类对象的行为和状态

下图中男孩女孩为类，而具体的每个人为该类的对象：

![图片](https://www.runoob.com/wp-content/uploads/2013/12/object-class.jpg)

### Java 中的对象

看看周围真实的世界，会发现身边有很多对象，车，狗，人等等

- 所有这些对象都有自己的状态和行为

拿一条狗来举例

- 它的状态有：

  - 名字
  - 品种
  - 颜色

- 它的行为有：

  - 叫
  - 摇尾巴
  - 跑

对比现实对象和软件对象，它们之间十分相似：

- 软件对象也有状态和行为

  软件对象的状态就是属性，行为通过方法体现

- 在软件开发中，方法操作对象内部状态的改变

  对象的相互调用也是通过方法来完成

### Java 中的类

类可以看成是创建 Java 对象的模板

通过下面一个简单的类来理解下 Java 中类的定义：

```java
public class Dog{
  String breed;
  int age;
  String color;
  void barking(){
  }

  void hungry(){
  }

  void sleeping(){
  }
}
```

一个类可以包含以下类型变量：

- 局部变量

  在方法、构造方法或者语句块中定义的变量被称为局部变量

  变量声明和初始化都是在方法中，方法结束后，变量就会自动销毁

- 成员变量

  成员变量是定义在类中，方法体之外的变量

  这种变量在创建对象的时候实例化

  成员变量可以被类中方法、构造方法和特定类的语句块访问

- 类变量

  类变量也声明在类中，方法体之外，但必须声明为 `static 类型`

> 一个类可以拥有多个方法，在上面的例子中：
> - barking()
> - hungry()
> - sleeping()
>> 都是 `Dog 类` 的方法

### 构造方法

每个类都有构造方法：

- 如果没有显式地为类定义构造方法

- Java 编译器将会为该类提供一个默认构造方法

- 在创建一个对象的时候，至少要调用一个构造方法

> 构造方法的名称必须与类同名，一个类可以有多个构造方法

下面是一个构造方法示例：

```java
public class Puppy{
    public Puppy(){
    }

    public Puppy(String name){
        // 这个构造器仅有一个参数：name
    }
}
```

### 创建对象

对象是根据类创建的：

- 在 Java 中，使用关键字 new 来创建一个新的对象

- 创建对象需要以下三步：

  - 声明

    声明一个对象，包括对象名称和对象类型

  - 实例化

    使用关键字 new 来创建一个对象

  - 初始化

    使用 new 创建对象时，会调用构造方法初始化对象

下面是一个创建对象的例子：

```java
public class Puppy{
   public Puppy(String name){
      //这个构造器仅有一个参数：name
      System.out.println("小狗的名字是 : " + name );
   }
   public static void main(String[] args){
      // 下面的语句将创建一个Puppy对象
      Puppy myPuppy = new Puppy( "tommy" );
   }
}
```

编译并运行上面的程序，会打印出下面的结果：

```
小狗的名字是 : tommy
```

### 访问实例变量和方法

通过已创建的对象来访问成员变量和成员方法，如下所示：

```java
/* 实例化对象 */
Object referenceVariable = new Constructor();
/* 访问类中的变量 */
referenceVariable.variableName;
/* 访问类中的方法 */
referenceVariable.methodName();
```

### 实例

下面的例子展示如何访问实例变量和调用成员方法：

```java
public class Puppy{
   int puppyAge;
   public Puppy(String name){
      // 这个构造器仅有一个参数：name
      System.out.println("小狗的名字是 : " + name );
   }

   public void setAge( int age ){
       puppyAge = age;
   }

   public int getAge( ){
       System.out.println("小狗的年龄为 : " + puppyAge );
       return puppyAge;
   }

   public static void main(String[] args){
      /* 创建对象 */
      Puppy myPuppy = new Puppy( "tommy" );
      /* 通过方法来设定age */
      myPuppy.setAge( 2 );
      /* 调用另一个方法获取age */
      myPuppy.getAge( );
      /*你也可以像下面这样访问成员变量 */
      System.out.println("变量值 : " + myPuppy.puppyAge );
   }
}
```

编译并运行上面的程序，产生如下结果：

```
小狗的名字是 : tommy
小狗的年龄为 : 2
变量值 : 2
```

### 源文件声明规则

当在一个源文件中定义多个类，并且还有 `import` 语句和 `package` 语句时，要特别注意这些规则：

- 一个源文件中只能有一个 `public 类`

- 一个源文件可以有多个 `非 public 类`

- 源文件的名称应该和 `public 类` 的 `类名` 保持一致

  - 例如：源文件中 public 类的类名是 `Employee` ，那么源文件应该命名为 `Employee.java`

- 如果一个类定义在某个包中，那么 `package 语句` 应该在源文件的首行

- 如果源文件包含 `import 语句` ，那么应该放在 `package 语句` 和 `类定义` 之间

  - 如果没有 `package 语句` ，那么 `import 语句` 应该在源文件的 `最前面`

- `import 语句` 和 `package 语句` 对源文件中定义的所有类都有效

  - 在同一源文件中，不能给不同的类不同的包声明

类有若干种访问级别，并且类也分不同的类型：

- 抽象类

- final 类等等

- Java 还有一些特殊的类，如：

  - 内部类
  - 匿名类

### Java 包

> 包主要用来对类和接口进行分类

当开发 Java 程序时，可能编写成百上千的类，因此很有必要对类和接口进行分类

### Import 语句

在 Java 中，如果给出一个完整的限定名，包括包名、类名，那么 Java 编译器就可以很容易地定位到源代码或者类

- Import 语句就是用来提供一个合理的路径，使得编译器可以找到某个类

- 例如，下面的命令行将会命令编译器载入 `java_installation/java/io` 路径下的所有类

  ```java
  import java.io.*;
  ```

### 一个简单的例子

在该例子中，我们创建两个类：

- Employee
- EmployeeTest

首先打开文本编辑器，把下面的代码粘贴进去

- 注意将文件保存为 `Employee.java`

- `Employee 类` 有四个成员变量：

  - name
  - age
  - designation
  - salary

- 该类显式声明了一个构造方法，该方法只有一个参数

```java
// Employee.java 文件代码
import java.io.*;

public class Employee{
  String name;
  int age;
  String designation;
  double salary;
  // Employee 类的构造器
  public Employee(String name){
    this.name = name;
  }
  // 设置age的值
  public void empAge(int empAge){
    age =  empAge;
  }
  /* 设置designation的值*/
  public void empDesignation(String empDesig){
    designation = empDesig;
  }
  /* 设置salary的值*/
  public void empSalary(double empSalary){
    salary = empSalary;
  }
  /* 打印信息 */
  public void printEmployee(){
    System.out.println("名字:"+ name );
    System.out.println("年龄:" + age );
    System.out.println("职位:" + designation );
    System.out.println("薪水:" + salary);
  }
}
```

程序都是从 `main 方法` 开始执行

- 为了能运行这个程序，必须包含 `main 方法` 并且创建一个实例对象

下面给出 `EmployeeTest 类` ，该类实例化 2 个 `Employee 类` 的实例，并调用方法设置变量的值

- 将下面的代码保存在 EmployeeTest.java 文件中

```java
// EmployeeTest.java 文件代码
import java.io.*;

public class EmployeeTest{
  public static void main(String[] args){
    /* 使用构造器创建两个对象 */
    Employee empOne = new Employee("RUNOOB1");
    Employee empTwo = new Employee("RUNOOB2");

    // 调用这两个对象的成员方法
    empOne.empAge(26);
    empOne.empDesignation("高级程序员");
    empOne.empSalary(1000);
    empOne.printEmployee();

    empTwo.empAge(21);
    empTwo.empDesignation("菜鸟程序员");
    empTwo.empSalary(500);
    empTwo.printEmployee();
   }
}
```

编译这两个文件并且运行 `EmployeeTest 类` ，可以看到如下结果：

```
$ javac EmployeeTest.java
$ java EmployeeTest
名字:RUNOOB1
年龄:26
职位:高级程序员
薪水:1000.0
名字:RUNOOB2
年龄:21
职位:菜鸟程序员
薪水:500.0
```

## Java 基本数据类型

变量就是申请内存来存储值

- 也就是说，当创建变量的时候，需要在内存中申请空间

- 内存管理系统根据变量的类型为变量分配存储空间，分配的空间只能用来储存该类型数据

![图片](https://www.runoob.com/wp-content/uploads/2013/12/memorypic1.jpg)

因此，通过定义不同类型的变量，可以在内存中储存整数、小数或者字符

Java 的两大数据类型:

- 内置数据类型
- 引用数据类型

### 内置数据类型

Java 语言提供了八种基本类型

六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型

#### byte

- byte 数据类型是 8 位、有符号的，以二进制补码表示的整数

- 最小值是 -128（-2^7）

- 最大值是 127（2^7-1）

- 默认值是 0

- byte 类型用在大型数组中节约空间，主要代替整数

  - 因为 byte 变量占用的空间只有 int 类型的四分之一

- 例子：byte a = 100，byte b = -50

#### short

- short 数据类型是 16 位、有符号的以二进制补码表示的整数

- 最小值是 -32768（-2^15）

- 最大值是 32767（2^15 - 1）

- short 数据类型也可以像 byte 那样节省空间

  - 一个 short 变量是 int 型变量所占空间的二分之一

- 默认值是 0

- 例子：short s = 1000，short r = -20000

#### int

- int 数据类型是 32 位、有符号的以二进制补码表示的整数

- 最小值是 -2,147,483,648（-2^31）

- 最大值是 2,147,483,647（2^31 - 1）

- 一般地整型变量默认为 int 类型

- 默认值是 0

- 例子：int a = 100000, int b = -200000

#### long

- long 数据类型是 64 位、有符号的以二进制补码表示的整数

- 最小值是 -9,223,372,036,854,775,808（-2^63）

- 最大值是 9,223,372,036,854,775,807（2^63 -1）

- 这种类型主要使用在需要比较大整数的系统上

- 默认值是 0L

- 例子： long a = 100000L，Long b = -200000L。

  - `L` 理论上不分大小写，但是若写成 `l` 容易与数字 `1` 混淆，不容易分辩

  - 所以最好大写，即 Long

#### float

- float 数据类型是单精度、32 位、符合 IEEE 754 标准的浮点数

- float 在储存大型浮点数组的时候可节省内存空间

- 默认值是 0.0f

- 浮点数不能用来表示精确的值，如货币

- 例子：float f1 = 234.5f

#### double

- double 数据类型是双精度、64 位、符合 IEEE 754 标准的浮点数

- 浮点数的默认类型为 double 类型

- double 类型同样不能表示精确的值，如货币

- 默认值是 0.0d

- 例子：double d1 = 123.4

#### boolean

- boolean 数据类型表示一位的信息

- 只有两个取值：

  - true
  - false

- 这种类型只作为一种标志来记录 true / false 情况

- 默认值是 false

- 例子：boolean one = true

#### char

- char 类型是一个单一的 16 位 Unicode 字符

- 最小值是 \u0000（即为 0 ）

- 最大值是 \uffff（即为 65,535 ）

- char 数据类型可以储存任何字符

- 例子：char letter = 'A'

#### 实例

对于数值类型的基本类型的取值范围，我们无需强制去记忆，因为它们的值都已经以常量的形式定义在对应的包装类中了

请看下面的例子：

```java
public class PrimitiveTypeTest {
  public static void main(String[] args) {
    // byte
    System.out.println("基本类型：byte 二进制位数：" + Byte.SIZE);
    System.out.println("包装类：java.lang.Byte");
    System.out.println("最小值：Byte.MIN_VALUE=" + Byte.MIN_VALUE);
    System.out.println("最大值：Byte.MAX_VALUE=" + Byte.MAX_VALUE);
    System.out.println();

    // short
    System.out.println("基本类型：short 二进制位数：" + Short.SIZE);
    System.out.println("包装类：java.lang.Short");
    System.out.println("最小值：Short.MIN_VALUE=" + Short.MIN_VALUE);
    System.out.println("最大值：Short.MAX_VALUE=" + Short.MAX_VALUE);
    System.out.println();

    // int
    System.out.println("基本类型：int 二进制位数：" + Integer.SIZE);
    System.out.println("包装类：java.lang.Integer");
    System.out.println("最小值：Integer.MIN_VALUE=" + Integer.MIN_VALUE);
    System.out.println("最大值：Integer.MAX_VALUE=" + Integer.MAX_VALUE);
    System.out.println();

    // long
    System.out.println("基本类型：long 二进制位数：" + Long.SIZE);
    System.out.println("包装类：java.lang.Long");
    System.out.println("最小值：Long.MIN_VALUE=" + Long.MIN_VALUE);
    System.out.println("最大值：Long.MAX_VALUE=" + Long.MAX_VALUE);
    System.out.println();

    // float
    System.out.println("基本类型：float 二进制位数：" + Float.SIZE);
    System.out.println("包装类：java.lang.Float");
    System.out.println("最小值：Float.MIN_VALUE=" + Float.MIN_VALUE);
    System.out.println("最大值：Float.MAX_VALUE=" + Float.MAX_VALUE);
    System.out.println();

    // double
    System.out.println("基本类型：double 二进制位数：" + Double.SIZE);
    System.out.println("包装类：java.lang.Double");
    System.out.println("最小值：Double.MIN_VALUE=" + Double.MIN_VALUE);
    System.out.println("最大值：Double.MAX_VALUE=" + Double.MAX_VALUE);
    System.out.println();

    // char
    System.out.println("基本类型：char 二进制位数：" + Character.SIZE);
    System.out.println("包装类：java.lang.Character");
    // 以数值形式而不是字符形式将Character.MIN_VALUE输出到控制台
    System.out.println("最小值：Character.MIN_VALUE="
      + (int) Character.MIN_VALUE);
    // 以数值形式而不是字符形式将Character.MAX_VALUE输出到控制台
    System.out.println("最大值：Character.MAX_VALUE="
      + (int) Character.MAX_VALUE);
  }
}
```

编译以上代码输出结果如下所示：

```
基本类型：byte 二进制位数：8
包装类：java.lang.Byte
最小值：Byte.MIN_VALUE=-128
最大值：Byte.MAX_VALUE=127

基本类型：short 二进制位数：16
包装类：java.lang.Short
最小值：Short.MIN_VALUE=-32768
最大值：Short.MAX_VALUE=32767

基本类型：int 二进制位数：32
包装类：java.lang.Integer
最小值：Integer.MIN_VALUE=-2147483648
最大值：Integer.MAX_VALUE=2147483647

基本类型：long 二进制位数：64
包装类：java.lang.Long
最小值：Long.MIN_VALUE=-9223372036854775808
最大值：Long.MAX_VALUE=9223372036854775807

基本类型：float 二进制位数：32
包装类：java.lang.Float
最小值：Float.MIN_VALUE=1.4E-45
最大值：Float.MAX_VALUE=3.4028235E38

基本类型：double 二进制位数：64
包装类：java.lang.Double
最小值：Double.MIN_VALUE=4.9E-324
最大值：Double.MAX_VALUE=1.7976931348623157E308

基本类型：char 二进制位数：16
包装类：java.lang.Character
最小值：Character.MIN_VALUE=0
最大值：Character.MAX_VALUE=65535
```

float 和 double 的最小值和最大值都是以科学记数法的形式输出的，结尾的 `E+` 或 `E-` 数字 表示 E 之前的数字要乘以 10 的正或负多少次方

> 比如
> - 3.14E3 就是 3.14 × 10 × 10 × 10 = 3140
> - 3.14E-3 就是 3.14 / 10 / 10 / 10 = 0.00314

> 实际上，JAVA 中还存在另外一种基本类型 void ，它也有对应的包装类 java.lang.Void ，不过我们无法直接对它们进行操作

### 类型默认值

下表列出了 Java 各个类型的默认值：

数据类型|默认值
-|-
byte|0
short|0
int|0
long|0L
float|0.0f
double|0.0d
char|'u0000'
String (or any object)|null
boolean|false

实例：

```java
public class Test {
  static boolean bool;
  static byte by;
  static char ch;
  static double d;
  static float f;
  static int i;
  static long l;
  static short sh;
  static String str;

  public static void main(String[] args) {
    System.out.println("Bool :" + bool);
    System.out.println("Byte :" + by);
    System.out.println("Character:" + ch);
    System.out.println("Double :" + d);
    System.out.println("Float :" + f);
    System.out.println("Integer :" + i);
    System.out.println("Long :" + l);
    System.out.println("Short :" + sh);
    System.out.println("String :" + str);
  }
}
```

实例输出结果为：

```
Bool :false
Byte :0
Character:
Double :0.0
Float :0.0
Integer :0
Long :0
Short :0
String :null
```

### 引用类型

- 在 Java 中，引用类型的变量非常类似于 C / C++ 的指针

  - 引用类型指向一个对象，指向对象的变量是引用变量

  - 这些变量在声明时被指定为一个特定的类型，比如 Employee 、 Puppy 等

  - 变量一旦声明后，类型就不能被改变了

- 对象、数组都是引用数据类型

- 所有引用类型的默认值都是 null

- 一个引用变量可以用来引用任何与之兼容的类型

- 例子：Site site = new Site("Runoob")

### Java 常量

常量在程序运行时是不能被修改的

- 在 Java 中使用 final 关键字来修饰常量，声明方式和变量类似：

  ```java
  final double PI = 3.1415927;
  ```

  虽然常量名也可以用小写，但为了便于识别，通常使用大写字母表示常量

- 字面量可以赋给任何内置类型的变量，例如：

  ```java
  byte a = 68;
  char a = 'A';
  ```

- byte 、int 、long 、和 short 都可以用十进制、十六进制以及八进制的方式来表示

  当使用常量的时候，前缀 0 表示 `八进制` ，而前缀 0x 代表 `十六进制` , 例如：

  ```java
  int decimal = 100;
  int octal = 0144;
  int hexa =  0x64;
  ```

- 和其他语言一样，Java 的字符串常量也是包含在两个引号之间的字符序列

  下面是字符串型字面量的例子：

  ```java
  "Hello World"
  "two\nlines"
  "\"This is in quotes\""
  ```

- 字符串常量和字符常量都可以包含任何 Unicode 字符

  ```java
  char a = '\u0001';
  String a = "\u0001";
  ```

> Java 语言支持一些特殊的转义字符序列

符号|字符含义
-|-
`\n`|换行 (0x0a)
`\r`|回车 (0x0d)
`\f`|换页符(0x0c)
`\b`|退格 (0x08)
`\0`|空字符 (0x20)
`\s`|字符串
`\t`|制表符
`\"`|双引号
`\'`|单引号
`\\`|反斜杠
`\ddd`|八进制字符 (ddd)
`\uxxxx`|16进制Unicode字符 (xxxx)

### 自动类型转换

整型、实型（常量）、字符型数据可以混合运算

运算中，不同类型的数据先转化为同一类型，然后进行运算

> 低 —> 高
>> byte , short , char —> int —> long —> float —> double

数据类型转换必须满足如下规则：

- 不能对 boolean 类型进行类型转换

- 不能把对象类型转换成不相关类的对象

- 在把容量大的类型转换为容量小的类型时必须使用强制类型转换。

- 转换过程中可能导致溢出或损失精度，例如：

  ```java
  int i = 128;
  byte b = (byte)i;
  ```

  因为 byte 类型是 8 位，最大值为127，所以当 int 强制转换为 byte 类型时，值 128 就会导致溢出

- 浮点数到整数的转换是通过舍弃小数得到，而不是四舍五入，例如：

  ```java
  (int)23.7 == 23;
  (int)-45.89f == -45;
  ```

#### 自动转换

必须满足转换前的数据类型的位数要低于转换后的数据类型，例如：

- short 数据类型的位数为 16 位，就可以自动转换位数为 32 的 int 类型

- 同样 float 数据类型的位数为 32 ，可以自动转换为 64 位的 double 类型

```java
public class ZiDongLeiZhuan{
  public static void main(String[] args){
    char c1='a';//定义一个char类型
    int i1 = c1;//char自动类型转换为int
    System.out.println("char 自动类型转换为 int 后的值等于 "+i1);
    char c2 = 'A';//定义一个char类型
    int i2 = c2+1;//char 类型和 int 类型计算
    System.out.println("char 类型和 int 计算后的值等于 "+i2);
  }
}
```

运行结果为：

```java
char 自动类型转换为 int 后的值等于 97
char 类型和 int 计算后的值等于 66
```

解析：

- c1 的值为字符 a

- 查 ASCII 码表可知对应的 int 类型值为 97

- A 对应值为 65

- 所以 i2 = 65+1 = 66

#### 强制转换

- 条件是转换的数据类型必须是兼容的

- 格式：(type)value type 是要强制类型转换后的数据类型

```java
public class QiangZhiZhuanHuan{
  public static void main(String[] args){
    int i1 = 123;
    byte b = (byte)i1; // 强制类型转换为 byte
    System.out.println("int 强制类型转换为 byte 后的值等于 "+b);
  }
}
```

运行结果：

```java
int 强制类型转换为 byte 后的值等于 123
```

#### 隐含强制转换

- 整数的默认类型是 int

- 浮点型不存在这种情况

  - 因为在定义 float 类型时必须在数字后面跟上 F 或者 f

## Java 变量类型

在 Java 语言中，所有的变量在使用前必须声明

声明变量的基本格式如下：

```java
type identifier [ = value][, identifier [= value] ...] ;
```

> 格式说明：
> - type 为 Java 数据类型
> - identifier 是变量名，可以使用逗号隔开来声明多个同类型变量

以下列出了一些变量的声明实例：

> 注意有些包含了初始化过程

```java
int a, b, c;         // 声明三个int型整数：a、 b、c
int d = 3, e = 4, f = 5; // 声明三个整数并赋予初值
byte z = 22;         // 声明并初始化 z
String s = "runoob";  // 声明并初始化字符串 s
double pi = 3.14159; // 声明了双精度浮点型变量 pi
char x = 'x';        // 声明变量 x 的值是字符 'x'
```

Java 语言支持的变量类型有：

- 局部变量

  类的方法中的变量

- 实例变量

  独立于方法之外的变量，不过没有 static 修饰

- 类变量

  独立于方法之外的变量，用 static 修饰

```java
public class Variable{
  static int allClicks=0;    // 类变量

  String str="hello world";  // 实例变量

  public void method(){

    int i =0;  // 局部变量

  }
}
```

### Java 局部变量

- 局部变量声明在方法、构造方法或者语句块中

- 局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁

- 访问修饰符不能用于局部变量

- 局部变量只在声明它的方法、构造方法或者语句块中可见

- 局部变量是在栈上分配的

- 局部变量没有默认值，所以局部变量被声明后，必须经过初始化，才可以使用

#### 实例 1

在以下实例中 age 是一个局部变量：

- 定义在 pupAge() 方法中，它的作用域就限制在这个方法中

```java
public class Test{
   public void pupAge(){
      int age = 0;
      age = age + 7;
      System.out.println("小狗的年龄是: " + age);
   }

   public static void main(String[] args){
      Test test = new Test();
      test.pupAge();
   }
}
```

以上实例编译运行结果如下：

```
小狗的年龄是: 7
```

#### 实例 2

在下面的例子中 age 变量没有初始化，所以在编译时会出错：

```java
public class Test{
   public void pupAge(){
      int age;
      age = age + 7;
      System.out.println("小狗的年龄是 : " + age);
   }

   public static void main(String[] args){
      Test test = new Test();
      test.pupAge();
   }
}
```

以上实例编译运行结果如下：

```
Test.java:4:variable number might not have been initialized
age = age + 7;
         ^
1 error
```

### 实例变量

- 实例变量声明在一个类中，但在方法、构造方法和语句块之外

- 当一个对象被实例化之后，每个实例变量的值就跟着确定

- 实例变量在对象创建的时候创建，在对象被销毁的时候销毁

- 实例变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息

- 实例变量可以声明在使用前或者使用后

- 访问修饰符可以修饰实例变量

- 实例变量对于类中的方法、构造方法或者语句块是可见的

  一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见

- 实例变量具有默认值

  - 数值型变量的默认值是 0
  - 布尔型变量的默认值是 false
  - 引用类型变量的默认值是 null

    > 变量的值可以在声明时指定，也可以在构造方法中指定

- 实例变量可以直接通过变量名访问

  但在静态方法以及其他类中，就应该使用完全限定名：ObejectReference.VariableName

#### 实例

```java
// 前文用到的 Employee.java 文件代码
import java.io.*;
public class Employee{
  // 这个实例变量对子类可见
  public String name;
  // 私有变量，仅在该类可见
  private double salary;
  //在构造器中对name赋值
  public Employee (String empName){
    name = empName;
  }
  //设定salary的值
  public void setSalary(double empSal){
    salary = empSal;
  }
  // 打印信息
  public void printEmp(){
    System.out.println("名字 : " + name );
    System.out.println("薪水 : " + salary);
  }

  public static void main(String[] args){
    Employee empOne = new Employee("RUNOOB");
    empOne.setSalary(1000);
    empOne.printEmp();
  }
}
```

以上实例编译运行结果如下：

```
$ javac Employee.java
$ java Employee
名字 : RUNOOB
薪水 : 1000.0
```

### 类变量（静态变量）

- 类变量也称为静态变量，在类中以 static 关键字声明，但必须在方法之外

- 无论一个类创建了多少个对象，类只拥有类变量的一份拷贝

- 静态变量除了被声明为常量外很少使用

  常量是指声明为 public / private ，final 和 static类型的变量

  常量初始化后不可改变

- 静态变量储存在静态存储区

  经常被声明为常量，很少单独使用 static 声明变量

- 静态变量在第一次被访问时创建，在程序结束时销毁

- 与实例变量具有相似的可见性

  但为了对类的使用者可见，大多数静态变量声明为 public 类型

- 默认值和实例变量相似

  - 数值型变量默认值是 0
  - 布尔型默认值是 false
  - 引用类型默认值是null

  变量的值可以在声明的时候指定，也可以在构造方法中指定

  此外，静态变量还可以在静态语句块中初始化

- 静态变量可以通过：ClassName.VariableName 的方式访问

- 类变量被声明为 public static final 类型时，类变量名称一般建议使用大写字母

  如果静态变量不是 public 和 final 类型，其命名方式与实例变量以及局部变量的命名方式一致

#### 实例

```java
// 前文用到的 Employee.java 文件代码
import java.io.*;

public class Employee {
    // salary 是静态的私有变量
    private static double salary;
    // DEPARTMENT 是一个常量
    public static final String DEPARTMENT = "开发人员";
    public static void main(String[] args){
    salary = 10000;
    System.out.println(DEPARTMENT+"平均工资:"+salary);
    }
}
```

以上实例编译运行结果如下：

```
开发人员平均工资:10000.0
```

> 注意：
>> 如果其他类想要访问该变量，可以这样访问：Employee.DEPARTMENT

## Java 修饰符

Java 语言提供了很多修饰符，主要分为以下两类：

- 访问修饰符
- 非访问修饰符

修饰符用来定义类、方法或者变量，通常放在语句的最前端

```java
public class className {
  // ...
}
private boolean myFlag;
static final double weeks = 9.5;
protected static final int BOXWIDTH = 42;
public static void main(String[] arguments) {
  // 方法体
}
```

### 访问控制修饰符

Java 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问

Java 支持 4 种不同的访问权限：

- default (即缺省，什么也不写）

  在同一包内可见，不使用任何修饰符

  使用对象：

  - 类
  - 接口
  - 变量
  - 方法

- private

  > 注意：不能修饰类（外部类）

  在同一类内可见

  使用对象：

  - 变量
  - 方法

- public

  对所有类可见

  使用对象：

  - 类
  - 接口
  - 变量
  - 方法

- protected

  > 注意：不能修饰类（外部类）

  对同一包内的类和所有子类可见

  使用对象：

  - 变量
  - 方法

我们可以通过以下表来说明访问权限：

修饰符|当前类|同一包内|子孙类(同一包)|子孙类(不同包)|其他包
-|-|-|-|-|-
default|Y|Y|Y|N|N
private|Y|N|N|N|N
public|Y|Y|Y|Y|Y
protected|Y|Y|Y|Y/N（说明）|N

### 默认访问修饰符 default

> 不使用任何关键字

使用默认访问修饰符声明的变量和方法，对同一个包内的类是可见的

- 接口里的变量都隐式声明为 `public static final` ,而接口里的方法默认情况下访问权限为 `public`

如下例所示，变量和方法的声明可以不使用任何修饰符：

```java
String version = "1.5.1";
boolean processOrder() {
  return true;
}
```

### 私有访问修饰符 private

私有访问修饰符是最严格的访问级别，所以被声明为 private 的方法、变量和构造方法只能被所属类访问

- 类和接口不能声明为 private

- 声明为私有访问类型的变量只能通过类中公共的 getter 方法被外部类访问

- private 访问修饰符的使用主要用来隐藏类的实现细节和保护类的数据

下面的类使用了私有访问修饰符：

```java
public class Logger {
  private String format;
  public String getFormat() {
    return this.format;
  }
  public void setFormat(String format) {
    this.format = format;
  }
}
```

> 实例中，Logger 类中的 format 变量为私有变量，所以其他类不能直接得到和设置该变量的值

为了使其他类能够操作该变量，定义了两个 public 方法：

- getFormat()

  返回 format的值

- setFormat(String)

  设置 format 的值

### 公有访问修饰符 public

被声明为 public 的类、方法、构造方法和接口能够被任何其他类访问

- 如果几个相互访问的 public 类分布在不同的包中，则需要导入相应 public 类所在的包

- 由于类的继承性，类所有的公有方法和变量都能被其子类继承

以下函数使用了公有访问控制：

```java
public static void main(String[] arguments) {
  // ...
}
```

> Java 程序的 main() 方法必须设置成公有的，否则，Java 解释器将不能运行该类

### 受保护的访问修饰符 protected

protected 需要从以下两个点来分析说明：

- 子类与基类在同一包中

  被声明为 protected 的变量、方法和构造器能被同一个包中的任何其他类访问

- 子类与基类不在同一包中

  那么在子类中，子类实例可以访问其从基类继承而来的 protected 方法，而不能访问基类实例的protected 方法

> protected 可以修饰数据成员，构造方法，方法成员，不能修饰类（内部类除外）

> 接口及接口的成员变量和成员方法不能声明为 protected

可以看看下图演示：

![图片](https://www.runoob.com/wp-content/uploads/2013/12/java-protected.gif)

> 子类能访问 protected 修饰符声明的方法和变量，这样就能保护不相关的类使用这些方法和变量

下面的父类使用了 protected 访问修饰符，子类重写了父类的 openSpeaker() 方法：

```java
class AudioPlayer {
  protected boolean openSpeaker(Speaker sp) {
    // 实现细节
  }
}

class StreamingAudioPlayer extends AudioPlayer {
  protected boolean openSpeaker(Speaker sp) {
    // 实现细节
  }
}
```

- 如果把 openSpeaker() 方法声明为 private ，那么除了 AudioPlayer 之外的类将不能访问该方法

- 如果把 openSpeaker() 声明为 public ，那么所有的类都能够访问该方法

- 如果我们只想让该方法对其所在类的子类可见，则将该方法声明为 protected

> protected 是最难理解的一种 Java 类成员访问权限修饰词，更多详细内容请查看[【 Java protected 关键字详解】](https://www.runoob.com/w3cnote/java-protected-keyword-detailed-explanation.html)

### 访问控制和继承

请注意以下方法继承的规则：

- 父类中声明为 private 的方法，不能够被继承

- 父类中声明为 public 的方法在子类中也必须为 public

- 父类中声明为 protected 的方法在子类中要么声明为 protected ，要么声明为 public ，不能声明为 private

### 非访问修饰符

为了实现一些其他的功能，Java 也提供了许多非访问修饰符

- static 修饰符，用来修饰类方法和类变量

- final 修饰符，用来修饰类、方法和变量

  - final 修饰的类不能够被继承

  - 修饰的方法不能被继承类重新定义

  - 修饰的变量为常量，是不可修改的

- abstract 修饰符，用来创建抽象类和抽象方法

- synchronized 和 volatile 修饰符，主要用于线程的编程

#### static 修饰符

- 静态变量

  static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝

  静态变量也被称为类变量

  局部变量不能被声明为 static 变量

- 静态方法

  static 关键字用来声明独立于对象的静态方法

  静态方法不能使用类的非静态变量

  静态方法从参数列表得到数据，然后计算这些数据

> 对类变量和方法的访问可以直接使用 `classname.variablename` 和 `classname.methodname` 的方式访问

如下例所示，static 修饰符用来创建类方法和类变量：

```java
public class InstanceCounter {
  private static int numInstances = 0;
  protected static int getCount() {
    return numInstances;
  }

  private static void addInstance() {
    numInstances++;
  }

  InstanceCounter() {
    InstanceCounter.addInstance();
  }

  public static void main(String[] arguments) {
    System.out.println("Starting with " +
    InstanceCounter.getCount() + " instances");
    for (int i = 0; i < 500; ++i){
        new InstanceCounter();
        }
    System.out.println("Created " +
    InstanceCounter.getCount() + " instances");
  }
}
```

以上实例运行编辑结果如下：

```
Starting with 0 instances
Created 500 instances
```

#### final 修饰符

> final 表示 `最后的、最终的` 含义，变量一旦赋值后，不能被重新赋值

- final 变量：

  被 final 修饰的实例变量必须显式指定初始值

  final 修饰符通常和 static 修饰符一起使用来创建类常量

  ```java
  public class Test{
    final int value = 10;
    // 下面是声明常量的实例
    public static final int BOXWIDTH = 6;
    static final String TITLE = "Manager";

    public void changeValue(){
      value = 12; //将输出一个错误
    }
  }
  ```

- final 方法

  类中的 final 方法可以被子类继承，但是不能被子类修改

  声明 final 方法的主要目的是防止该方法的内容被修改

  如下所示，使用 final 修饰符声明方法：

  ```java
  public class Test{
    public final void changeName(){
      // 方法体
    }
  }
  ```

- final 类

  final 类不能被继承，没有类能够继承 final 类的任何特性

  ```java
  public final class Test {
    // 类体
  }
  ```

#### abstract 修饰符

- 抽象类

  抽象类不能用来实例化对象，声明抽象类的唯一目的是为了将来对该类进行扩充

  > - 一个类不能同时被 abstract 和 final 修饰
  > - 如果一个类包含抽象方法，那么该类一定要声明为抽象类，否则将出现编译错误

  抽象类可以包含抽象方法和非抽象方法：

  ```java
  abstract class Caravan{
    private double price;
    private String model;
    private String year;

    public abstract void goFast(); //抽象方法
    public abstract void changeColor();
  }
  ```

- 抽象方法

  抽象方法是一种没有任何实现的方法，该方法的的具体实现由子类提供

  > - 抽象方法不能被声明成 final 和 static
  > - 任何继承抽象类的子类必须实现父类的所有抽象方法，除非该子类也是抽象类
  > - 如果一个类包含若干个抽象方法，那么该类必须声明为抽象类
  > - 抽象类可以不包含抽象方法

  抽象方法的声明以分号结尾，例如：`public abstract sample();`

  ```java
  public abstract class SuperClass{
    abstract void m(); //抽象方法
  }

  class SubClass extends SuperClass{
    //实现抽象方法
    void m(){
      .........
    }
  }
  ```

#### synchronized 修饰符

synchronized 关键字声明的方法同一时间只能被一个线程访问

- synchronized 修饰符可以应用于四个访问修饰符

```java
public synchronized void showDetails(){
.......
}
```

#### transient 修饰符

序列化的对象包含被 transient 修饰的实例变量时，java 虚拟机( JVM )跳过该特定的变量

- 该修饰符包含在定义变量的语句中，用来预处理类和变量的数据类型

```java
public transient int limit = 55;   // 不会持久化
public int b; // 持久化
```

#### volatile 修饰符

volatile 修饰的成员变量在每次被线程访问时，都强制从共享内存中重新读取该成员变量的值

- 而且，当成员变量发生变化时，会强制线程将变化值回写到共享内存

- 这样在任何时刻，两个不同的线程总是看到某个成员变量的同一个值

- 一个 volatile 对象引用可能是 null

```java
public class MyRunnable implements Runnable
{
  private volatile boolean active;
  public void run()
  {
    active = true;
    while (active) // 第一行
    {
      // 代码
    }
  }
  public void stop()
  {
    active = false; // 第二行
  }
}
```

通常情况下，在一个线程调用 `run()` 方法（在 Runnable 开启的线程），在另一个线程调用 `stop()` 方法

- 如果 `第一行` 中缓冲区的 active 值被使用，那么在 `第二行` 的 active 值为 false 时循环不会停止

- 但是以上代码中我们使用了 volatile 修饰 active ，所以该循环会停止

## Java 运算符

计算机的最基本用途之一就是执行数学运算，作为一门计算机语言，Java 也提供了一套丰富的运算符来操纵变量

我们可以把运算符分成以下几组：

- 算术运算符
- 关系运算符
- 位运算符
- 逻辑运算符
- 赋值运算符
- 其他运算符

### 算术运算符

算术运算符用在数学表达式中，它们的作用和在数学中的作用一样

下表列出了所有的算术运算符（表格中的实例假设整数 `变量 A 的值为 10` ，`变量 B 的值为 20` ）：

操作符|描述|例子
-|-|-
+|加法 - 相加运算符两侧的值|A + B 等于 30
-|减法 - 左操作数减去右操作数|A – B 等于 -10
*|乘法 - 相乘操作符两侧的值|A * B等于200
/|除法 - 左操作数除以右操作数|B / A等于2
％|取余 - 左操作数除以右操作数的余数|B%A等于0
++|自增: 操作数的值增加1|B++ 或 ++B 等于 21（区别详见下文）
--|自减: 操作数的值减少1|B-- 或 --B 等于 19（区别详见下文）

实例

下面的简单示例程序演示了算术运算符：

```java
public class Test {

  public static void main(String[] args) {
    int a = 10;
    int b = 20;
    int c = 25;
    int d = 25;
    System.out.println("a + b = " + (a + b) );
    System.out.println("a - b = " + (a - b) );
    System.out.println("a * b = " + (a * b) );
    System.out.println("b / a = " + (b / a) );
    System.out.println("b % a = " + (b % a) );
    System.out.println("c % a = " + (c % a) );
    System.out.println("a++ = " + (a++) );
    System.out.println("a-- = " + (a--) );
    // 查看  d++ 与 ++d 的不同
    System.out.println("d++ = " + (d++) );
    System.out.println("++d = " + (++d) );
  }
}
```

以上实例编译运行结果如下：

```
a + b = 30
a - b = -10
a * b = 200
b / a = 2
b % a = 0
c % a = 5
a++ = 10
a-- = 11
d++ = 25
++d = 27
```

> `a--` 值为何为 11
> - 在进行 `a--` 之前先 `a` 的值给 `=` 左边进行赋值
> - `a` 在此时已经因为前面的 `a++` 运算时改变了值，值为 `11`
> - 再进行 `a` 自己的 `--` 运算，此时 `a` 的值为 `9`

#### 自增自减运算符

自增（++）自减（--）运算符是一种特殊的算术运算符，在算术运算符中需要两个操作数来进行运算，而自增自减运算符是一个操作数

```java
public class selfAddMinus{
  public static void main(String[] args){
    int a = 3;//定义一个变量；
    int b = ++a;//自增运算
    int c = 3;
    int d = --c;//自减运算
    System.out.println("进行自增运算后的值等于"+b);
    System.out.println("进行自减运算后的值等于"+d);
  }
}
```

运行结果为：

```
进行自增运算后的值等于4
进行自减运算后的值等于2
```

解析：

- `int b = ++a` ; 拆分运算过程为: `a=a+1=4 ; b=a=4` , 最后结果为 `b=4 , a=4`

- `int d = --c` ; 拆分运算过程为: `c=c-1=2 ; d=c=2` , 最后结果为 `d=2 , c=2`

> 另：
> - 前缀自增自减法( `++a` , `--a` )
>> - 先进行自增或者自减运算，再进行表达式运算
> - 后缀自增自减法( `a++` , `a--` )
>> - 先进行表达式运算，再进行自增或者自减运算

实例：

```java
public class selfAddMinus{
  public static void main(String[] args){
    int a = 5;//定义一个变量；
    int b = 5;
    int x = 2*++a;
    int y = 2*b++;
    System.out.println("自增运算符前缀运算后a=" + a + "，x=" + x);
    System.out.println("自增运算符后缀运算后b=" + b + "，y=" + y);
  }
}
```

运行结果为：

```
自增运算符前缀运算后a=6，x=12
自增运算符后缀运算后b=6，y=10
```

### 关系运算符

下表为 Java 支持的关系运算符（表格中的实例整数变量 A 的值为 10 ，变量 B 的值为 20 ）：

运算符|描述|例子
-|-|-
`==`|检查如果两个操作数的值是否相等，如果相等则条件为真|(A == B)为假
`!=`|检查如果两个操作数的值是否相等，如果值不相等则条件为真|(A != B) 为真
`>`|检查左操作数的值是否大于右操作数的值，如果是那么条件为真|(A> B)为假
`<`|检查左操作数的值是否小于右操作数的值，如果是那么条件为真|(A <B)为真
`>=`|检查左操作数的值是否大于或等于右操作数的值，如果是那么条件为真|(A> = B)为假
`<=`|检查左操作数的值是否小于或等于右操作数的值，如果是那么条件为真|(A <= B)为真

#### 实例

下面的简单示例程序演示了关系运算符

```java
public class Test {
  public static void main(String[] args) {
    int a = 10;
    int b = 20;
    System.out.println("a == b = " + (a == b) );
    System.out.println("a != b = " + (a != b) );
    System.out.println("a > b = " + (a > b) );
    System.out.println("a < b = " + (a < b) );
    System.out.println("b >= a = " + (b >= a) );
    System.out.println("b <= a = " + (b <= a) );
  }
}
```

以上实例编译运行结果如下：

```
a == b = false
a != b = true
a > b = false
a < b = true
b >= a = true
b <= a = false
```

### 位运算符

Java 定义了位运算符，应用于整数类型(int)，长整型(long)，短整型(short)，字符型(char)，和字节型(byte)等类型

> 位运算符作用在所有的位上，并且按位运算

例（假设 a = 60 ，b = 13 ）：

```java
A = 0011 1100
B = 0000 1101
-----------------
A&b = 0000 1100
A | B = 0011 1101
A ^ B = 0011 0001
~A= 1100 0011
```

下表列出了位运算符的基本运算（假设整数变量 A 的值为 60 和变量 B 的值为 13 ）：

操作符|描述|例子
-|-|-
`＆`|如果相对应位都是1，则结果为1，否则为0|(A＆B)，得到12，即0000 1100
`|`|如果相对应位都是0，则结果为0，否则为1|(A | B)得到61，即 0011 1101
`^`|如果相对应位值相同，则结果为0，否则为1|(A ^ B)得到49，即 0011 0001
`〜`|按位取反运算符翻转操作数的每一位，即0变成1，1变成0|（〜A）得到-61，即1100 0011
`<<`|按位左移运算符，左操作数按位左移右操作数指定的位数|A << 2得到240，即 1111 0000
`>>`|按位右移运算符，左操作数按位右移右操作数指定的位数|A >> 2得到15即 1111
`>>>`|按位右移补零操作符，左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充|A>>>2得到15即0000 1111

#### 实例

下面的简单示例程序演示了位运算符：

```java
public class Test {
  public static void main(String[] args) {
    int a = 60; /* 60 = 0011 1100 */
    int b = 13; /* 13 = 0000 1101 */
    int c = 0;
    c = a & b;       /* 12 = 0000 1100 */
    System.out.println("a & b = " + c );

    c = a | b;       /* 61 = 0011 1101 */
    System.out.println("a | b = " + c );

    c = a ^ b;       /* 49 = 0011 0001 */
    System.out.println("a ^ b = " + c );

    c = ~a;          /*-61 = 1100 0011 */
    System.out.println("~a = " + c );

    c = a << 2;     /* 240 = 1111 0000 */
    System.out.println("a << 2 = " + c );

    c = a >> 2;     /* 15 = 1111 */
    System.out.println("a >> 2  = " + c );

    c = a >>> 2;     /* 15 = 0000 1111 */
    System.out.println("a >>> 2 = " + c );
  }
}
```

以上实例编译运行结果如下：

```
a & b = 12
a | b = 61
a ^ b = 49
~a = -61
a << 2 = 240
a >> 2  = 15
a >>> 2 = 15
```

### 逻辑运算符

下表列出了逻辑运算符的基本运算（假设布尔变量A为真，变量B为假）

操作符|描述|例子
-|-|-
`&&`|称为逻辑与运算符:当且仅当两个操作数都为真，条件才为真|(A && B)为假
`||`|称为逻辑或操作符:如果任何两个操作数任何一个为真，条件为真|(A | | B)为真
`!`|称为逻辑非运算符:用来反转操作数的逻辑状态;如果条件为true，则逻辑非运算符将得到false|!(A && B)为真

#### 实例

下面的简单示例程序演示了逻辑运算符：

```java
public class Test {
  public static void main(String[] args) {
    boolean a = true;
    boolean b = false;
    System.out.println("a && b = " + (a&&b));
    System.out.println("a || b = " + (a||b) );
    System.out.println("!(a && b) = " + !(a && b));
  }
}
```

以上实例编译运行结果如下：

```
a && b = false
a || b = true
!(a && b) = true
```

### 短路逻辑运算符









































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































