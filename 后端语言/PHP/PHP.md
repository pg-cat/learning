【2019.9.27】以下部分整理自[【菜鸟教程：PHP 教程】](https://www.runoob.com/php/php-echo-print.html)

---

# PHP

> 又名 `超文本预处理器`

- PHP 是一门服务器端的脚本语言

  - PHP 文件不宜双击打开，须经过服务器打开，不经过服务器不可访问


## 初识 PHP

PHP 文件名规范：

- 文件名允许使用英文字母，但不允许使用中文

- 文件名需有一定的相关意义，便于管理

- 文件后缀名一般为小写的 php 字母

### PHP 的其他特性

- PHP 是一门脚本语言，可以和其他代码进行混编( HTML / CSS / JS 等等)

- PHP 代码在服务器上执行，结果以纯 HTML 形式返回给浏览器

- PHP 可在不同的平台上运行( Windows 、Linux 、Unix 、Mac OS X 等)

- PHP 与目前几乎所有的正在被使用的服务器相兼容( Apache 、IIS 等)

- PHP 提供了广泛的数据库支持

- PHP 是免费的[【可从官方的 PHP 资源下载它】](https://www.php.net)

- PHP 易于学习，并可高效地运行在服务器端

### 配置初学者使用的 PHP 环境【 windows 】

- wamp

  - `window apache mysql php`

- lamp

  - `linux apache mysql php`

#### `wamp` 环境启动

> 以下都以 `wamp` 为例进行说明

wamp 启动后，会在任务栏看到其图标：

- 红色：表示所有服务都未启动

- 黄色：表示部分服务未启动

- 绿色：表示所有服务已启动，且可正常使用

#### 访问 PHP 文件

打开浏览器并输入地址(以下任选其一即可)

- `localhost`
- `127.0.0.1`

> 此时，你即可访问到服务器中管理的 `www` 目录

> 注意，在 `wamp` 环境中：
> - 你访问到的 `www` 目录中不会直接显示 `php` 文件名，只会显示目录名
> - 但你依然可以通过 `PHP` 文件名访问到它

#### 配置虚拟主机

> 也就是调整 `apache` 的配置文件

- 找到 `httpd.conf` 文件

  - 文件位置(请根据实际情况自行查找)：

    `D:\wamp64\bin\apache\apache2.4.37\conf\httpd.conf`

  - 去掉文件内容中 `Include conf/extra/httpd-vhosts.conf` 前的 `#` 号注释，用以开启虚拟主机配置文件

- 找到 `http-vhost.conf` 文件，此文件是虚拟主机的配置文件

  - 文件位置(请根据实际情况自行查找)：

    `D:\wamp64\bin\apache\apache2.4.37\conf\extra\httpd-vhosts.conf`

  - 复制 `<VirtualHost *:80>...</VirtualHost>` 标签中的代码，例

  ```
  <VirtualHost *:80>
    ServerName abc.com
    DocumentRoot "${INSTALL_DIR}/www"
    <Directory "${INSTALL_DIR}/www/">
      Options +Indexes +Includes +FollowSymLinks +MultiViews
      AllowOverride All
      Require local
    </Directory>
  </VirtualHost>
  ```

  - ServerName

    你的域名

  - DocumentRoot

    你需要管理的目录

  - 也可以配置其他项，如

    - 域名的别名 `ServerAlias` ，以达到多个域名同时指向一个网站的目的

    - 具体情况可自行查找资料

- 找到 hosts 文件

  - 文件位置(请根据实际情况自行查找)：

    `C:\Windows\System32\drivers\etc\hosts`

  - 配置并绑定你的域名，在文件中添加一行

  ```
  127.0.0.1 abc.com
  ```

  - `abc.com` 为你的域名，且与前面的 `IP` 地址至少相距一个空格

- 重启你的服务器，使用绑定好的域名进行访问即可

> 如果 `localhost` 不能再访问,请回头查找配置域名时是否被注释

### 配置 PHP 环境【 linux 】

> 此处 `linux` 为 `ubuntu` 版的 `linux` ，其他版本未做测试

#### 更新源

```
sudo apt update
```

#### 安装套件 lamp-server

linux 上有一整套 `PHP 环境的套件` 可供下载，包名称为 `lamp-server` ，此处直接进行安装：

```
sudo apt lamp-server^
```

- 一定要加上 `^` 符号，具体意义不明

- 此套件分别包括了以下三个包，且都是稳定版：

  - PHP

  - apache

  - mysql

  - 此时你已可以使用 `php 文件名.php` 来执行 PHP 文件

- 安装成功后，进入 `/var/www/html/` 可查看到有一个 `index.html` 文件，此为默认的主页文件

  - 在浏览器使用 `http://localhost` 即可访问主页，默认为 `apache` 相关的配置信息

  - 在浏览器中输入 `http://127.0.0.1` 同上

> 若发现使用 `php 文件名.php` 可以执行 PHP 文件，但在浏览器使用 `http://localhost` 却无法访问
> - 原因可能是 `apache` 服务器未开户，执行 `sudo apachectl start` 来启动服务器即可
> - 另附上重启服务器的命令 `sudo apachectl restart`

### phpinfo() 查看配置信息

在 `/var/www/html/` 目录中新建一个 PHP 文件,并输入以下内容：

- 此目录 `/var/www/html/` 有时是  `/var/www/` ，具体酌情而定

```php
<?php
  phpinfo();
?>
```

当在浏览器中访问此文件时，会看到此服务器的一些配置信息

```
PHP Version 7.2.14
```

- 这一块一般在左上角，为 PHP 的版本号

- 其下的列表信息中，我们需要注意的是以下两项:

  - Configuration File (php.ini) Path

    服务器读取的配置文件 php.ini 的位置

  - Loaded Configuration File

    服务器真实加载的配置文件 php.ini 的位置

- 再往下的每个列表及其标题是指一个个的功能模块，如

  - mysqli

    数据库模块，支持数据库相关功能

  - 等等

更多 `PHP 如何安装` 等问题[【可从 `菜鸟教程` 进行查看】](https://www.runoob.com/php/php-install.html)


## PHP 基础

### 语法

PHP 中的每个代码行都必须以分号结束

- 分号是一种分隔符，用于把指令集区分开来

#### PHP 的开始和结束标记

- 完整格式：

  `<?php ... ?>`

- 短风格(需对 `PHP.ini` 配置文件进行配置)：

  `<? ... ?>`

  - 打开前面提到的 `php.ini` 文件的真实地址，找到： `short_open_tag = Off`

    - 修改为： `short_open_tag = on`

    - 然后必须重启服务器，短风格即可使用了

- PHP 版本低于 `7` 之前，可使用：

  `<% ... %>`

  - 打开前面提到的 `php.ini` 文件的真实地址，找到： `asp_tag = Off`

    - 修改为： `asp_tag = on`

    - 然后必须重启服务器，短风格即可使用了

  - 也可使用长风格(又叫做脚本语言)：

    `<script language="php">...</script>`

> 注意：
> - 尽管 PHP 书写风格有多种，但依然推荐使用完整格式 `<?php ... ?>`

#### PHP 中的注释

```php
<?php
// 这是 PHP 单行注释

/*
这是
PHP 多行
注释
*/
?>
```

### PHP 中的变量

与代数类似，可以给 PHP 变量赋予某个值 `x=5` 或者表达式 `z=x+y`

- 变量可以是很短的名称，如 `x` 和 `y` ，或者更具描述性的名称，如 `age` 、`carname` 、`totalvolume`

- PHP 变量规则：

  - 变量以 `$` 符号开始，后面跟着变量的名称

  - 变量名必须以字母或者下划线字符开始

  - 变量名只能包含字母数字字符以及下划线，如 `A-z` 、`0-9` 和 `_`

  - 变量名不能包含空格

  - 变量名是区分大小写的，如 `$y` 和 `$Y` 是两个不同的变量

> PHP 语句和 PHP 变量都是区分大小写的

#### 声明变量

> PHP 没有声明变量的命令

变量在第一次赋值给它的时候被创建：

```php
<?php
$txt="Hello world!";
$x=5;
$y=10.5;
?>
```

- 在上面的语句执行中，变量 `txt` 将保存值 `Hello world!` ，且变量 `x` 将保存值 `5`

- 注意：当赋一个文本值给变量时，请在文本值两侧加上双引号

#### PHP 是一门弱类型语言

> PHP 会根据变量的值，自动把变量转换为正确的数据类型

要知道，在强类型的编程语言中，我们必须在使用变量前先声明(定义)变量的类型和名称

#### 变量作用域

变量的作用域是脚本中变量 `可被引用` / `使用` 的部分，PHP 有四种不同的变量作用域：

- `local` 局部

  在 PHP 函数内部声明的变量是局部变量，仅能在函数内部访问

  你可以在不同函数中使用相同的变量名称，因为这些函数内定义的变量名是局部变量，只作用于该函数内

- `global` 全局

  在所有函数外部定义的变量，拥有全局作用域

  `global` 关键字用于函数内访问全局变量：

  ```php
  <?php
  $x=5;
  $y=10;

  function myTest()
  {
    global $x,$y;
    $y=$x+$y;
  }

  myTest();
  echo $y; // 输出 15
  ?>
  ```

  PHP 将所有全局变量存储在一个名为 `$GLOBALS[index]` 的数组中

  - `index` 保存变量的名称

  - 这个数组可以在函数内部访问，也可以直接用来更新全局变量

  - 上面的实例可以写成这样：

  ```php
  <?php
  $x=5;
  $y=10;

  function myTest()
  {
      $GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];
  }

  myTest();
  echo $y;
  ?>
  ```

- `static` 静态

  当一个函数完成时，它的所有变量通常都会被删除

  有时候我们希望某个局部变量不要被删除，那么声明变量时使用 `static` 关键字

  ```php
  <?php
  function myTest()
  {
    static $x=0;
    echo $x;
    $x++;

    echo PHP_EOL;
    // 换行符
  }

  myTest(); // 0
  myTest(); // 1
  myTest(); // 2
  ?>
  ```

  然后，每次调用该函数时，该变量将会保留着函数前一次被调用时的值

  - 注意：该变量仍然是函数的局部变量

- `parameter` 参数

  参数是通过调用代码将值传递给函数的局部变量，参数是在参数列表中声明的，作为函数声明的一部分：

  ```php
  <?php
  function myTest($x)
  {
      echo $x;
  }
  myTest(5);
  ?>
  ```

### `echo` 和 `print` 语句

两者的区别:

- echo

  可以输出一个或多个字符串

- print

  只允许输出一个字符串，返回值总为 1

> ### 提示：
> `echo` 输出的速度比 `print` 快，`echo` 没有返回值，`print` 有返回值 `1`

#### `echo` 语句

> `echo` 是一个语言结构，使用的时候可以不用加括号，也可以加上括号：`echo` 或 `echo()`

```php
<?php
  echo "<h2>PHP 很有趣!</h2>";
  echo "Hello world!<br>";
  echo "我要学 PHP!<br>";
  echo "这是一个","字符串，","使用了","多个","参数。<br>";
  echo "这是一个"."字符串，"."使用了"."多个"."参数。\n";
?>
```

- 连接多个参数，使用 `,` 或 `.` 皆可

下面的实例演示了如何使用 `echo` 命令输出变量和字符串：

```php
<?php
  $txt1="学习 PHP";
  $txt2="RUNOOB.COM";
  $cars=array("Volvo","BMW","Toyota");

  echo $txt1;
  echo "<br>";
  echo "在 $txt2 学习 PHP ";
  echo "<br>";
  echo "我车的品牌是 {$cars[0]}\n";
  echo "$txt2\n";
  echo "\$txt2\n";
?>
```

- 变量可直接写在双引号内，并可正常被使用

> #### 注意，有多个参数时，不能使用括号！例如：
> - `echo $arg1,$arg2` 是正确的
> - `echo($arg1,$arg2)` 会导致解析错误

#### `print` 语句

> `print` 同样是一个语言结构，可以使用括号，也可以不使用括号：`print` 或 `print()`

下面的实例演示了如何使用 print 命令输出变量和字符串：(字符串可以包含 HTML 标签)：

```php
<?php
  $txt1="学习 PHP";
  $txt2="RUNOOB.COM";
  $cars=array("Volvo","BMW","Toyota");

  print $txt1;
  print "<br>";
  print "在 $txt2 学习 PHP ";
  print "<br>";
  print "我车的品牌是 {$cars[0]}";
?>
```

#### `echo` 和 `print` 语句的相同之处

- `print "text$a text"` 和 `print "text $a text"` 和 `print "text{$a}text"` 都可以正常显示 `$a` 的值，不使用 `{}` 则 `&a` 之后必须有一个空格，不然就无法识别变量

  - `"text$atext"` 中的 `$a` 会识别为变量 `$atext` ，`echo` 同理

- 当同时只有一个参数的时候，`echo` 和 `print` 后面的括号 `(parenthesis)` 都是可选的，即：

  - `echo($argument1)` 等价于 `echo $argument1`

  - `print($argument)` 等价于 `print $argument`

- `echo` 和 `print` 在输出之前，都会将参数的进行转换，尝试转换为字符串类型

#### `echo` 和 `print` 语句的区别

- echo 可以输出一个或多个字符串

  - print 只允许输出一个字符串，返回值总为 1

- echo 输出的速度比 print 快

  - echo 没有返回值，print 有返回值 1

- echo 是语言结构 `language construct` ，而并不是真正的函数，因此不能作为表达式的一部分使用

  - `print()` 是函数，它打印一个值(它的参数)，如果字符串成功显示则返回 `true` ，否则返回 `false`

#### 常见的输出语句

- `echo()`

  可以一次输出多个值，多个值之间用逗号分隔

  `echo` 是语言结构 `language construct` ，而并不是真正的函数，因此不能作为表达式的一部分使用

- `print()`

  函数 `print()` 打印一个值(它的参数)，如果字符串成功显示则返回 `true` ，否则返回 `false`

- `print_r()`

  可以把字符串和数字简单地打印出来，而数组则以括起来的键和值得列表形式显示，并以 `Array` 开头

  但 `print_r()` 输出布尔值和NULL的结果没有意义，因为都是打印 `\n`

  因此用 `var_dump()` 函数更适合调试

- `var_dump()`

  判断一个变量的类型与长度,并输出变量的相关信息,如果变量有值输的是变量的值并回返数据类型

  此函数显示关于一个或多个表达式的结构信息，包括表达式的类型与值

  数组将递归展开值，通过缩进显示其结构

```php
<?php
  $txt1="学习 PHP";
  $txt2="RUNOOB.COM";
  $cars=array("Volvo","BMW","Toyota");

  echo $txt1;
  echo "<br>";
  echo "在 $txt2 学习 PHP ";
  echo "<br>";
  echo "我车的品牌是 {$cars[0]}\n";
  echo "$txt2\n";
  echo "\$txt2\n";

  var_dump($cars);
  // 输出 $cars 的类型、长度、数值
?>
```

### `PHP EOF(heredoc)` 使用说明

`PHP EOF(heredoc)` 是一种在命令行 `shell`(如 sh 、csh 、ksh 、bash 、PowerShell 和 zsh )和程序语言(像 Perl 、PHP 、Python和Ruby )里定义一个字符串的方法

- 必须后接分号，否则编译通不过

- EOF 可以用任意其它字符代替，只需保证结束标识与开始标识一致

- 开始标识可以不带引号或带单双引号，不带引号与带双引号效果一致，解释内嵌的变量和转义符号，带单引号则不解释内嵌的变量和转义符号

  - 就是按照原样，包括换行格式什么的，输出在其内部的东西

  - 任何特殊字符都不需要转义

  - 但会解析 `html` 格式内容，并且在双引号内的内容也有转义效果

  ```php
  <?php
    $name="变量会被解析";
    $a=<<<EOF
    $name<br><a>html格式会被解析</a><br/>双引号和Html格式外的其他内容都不会被解析
    "双引号外所有被排列好的格式都会被保留"
    "但是双引号内会保留转义符的转义效果,比如table:\t和换行：\n下一行"
    EOF;

    echo $a;
  ?>
  ```

- 结束标识必须顶格独自占一行(即必须从行首开始，前后不能衔接任何空白和字符)

- 内容需要内嵌引号(单引号或双引号)时，不需要加转义符，本身对单双引号转义，此处相当与 `q` 和 `qq` 的用法

```php
<?php
echo <<<EOF
    <h1>我的第一个标题</h1>
    <p>我的第一个段落。</p>
EOF;
// 结束需要独立一行且前后不能空格
?>
```

> #### 注意：
> - 以 `<<<EOF` 开始标记开始，以 `EOF` 结束标记结束，结束标记必须顶头写，不能有缩进和空格，且在结束标记末尾要有分号
> - 开始标记和结束标记相同，比如常用大写的 `EOT` 、`EOD` 、`EOF` 来表示，但是不只限于那几个(也可以用：`JSON` 、`HTML` 等)，只要保证开始标记和结束标记不在正文中出现即可
> - 位于开始标记和结束标记之间的变量可以被正常解析，但是函数则不可以
> - 在 `heredoc` 中，变量不需要用连接符 `.` 或 `,` 来拼接

```php
<?php
  $name="runoob";
  $a= <<<EOF
    "abc"$name
    "123"
  EOF;
  // 结束需要独立一行且前后不能空格

  echo $a;
?>
```

### PHP 5 数据类型

- String 字符串
- Integer 整型
- Float 浮点型
- Boolean 布尔型
- Array 数组
- Object 对象
- NULL 空值

#### String 字符串

一个字符串是一串字符的序列，就像 `"Hello world!"` ，你可以将任何文本放在单引号和双引号中

```php
<?php
  $x = "Hello world!";
  echo $x;
  echo "<br>";
  $x = 'Hello world!';
  echo $x;
?>
```

#### 整型

整数是一个没有小数的数字，其规则：

- 整数必须至少有一个数字 (0-9)

- 整数不能包含逗号或空格

- 整数是没有小数点的

- 整数可以是正数或负数

- 整型可以用三种格式来指定：

  - 十进制
  - 十六进制，以 0x 为前缀
  - 或 八进制，前缀为 0

在以下实例中我们将测试不同的数字：

- `var_dump()` 函数返回变量的数据类型和值

```php
<?php
$x = 5985;
var_dump($x);
echo "<br>";
$x = -345; // 负数
var_dump($x);
echo "<br>";
$x = 0x8C; // 十六进制数
var_dump($x);
echo "<br>";
$x = 047; // 八进制数
var_dump($x);
?>
```

#### 浮点型

浮点数是带小数部分的数字，或是指数形式：

- `var_dump()` 函数返回变量的数据类型和值

```php
<?php
$x = 10.365;
var_dump($x);
echo "<br>";
$x = 2.4e3;
var_dump($x);
echo "<br>";
$x = 8E-5;
var_dump($x);
?>
```

- 注意 `$x=2.4e3` ，实现了整型和浮点型的转换

#### 布尔型

布尔型可以是 `TRUE` 或 `FALSE`

```php
$x=true;
$y=false;
```

- 布尔型通常用于条件判断

#### 数组

数组可以在一个变量中存储多个值

```php
<?php
$cars=array("Volvo","BMW","Toyota");
var_dump($cars);
?>
```

命令行中输出结果：

```
array(3) {
 [0]=>
 string(5) "Volvo"
 [1]=>
 string(3) "BMW"
 [2]=>
 string(6) "Toyota"
}
```

#### 对象

对象数据类型也可以用于存储数据

> 在 PHP 中，对象必须声明

- 首先，你必须使用 `class` 关键字声明类对象

  - 类是可以包含属性和方法的结构

- 然后我们在类中定义数据类型

- 然后在实例化的类中使用数据类型：

```php
<?php
class Car
{
  var $color;
  function __construct($color="green") {
    $this->color = $color;
  }
  function what_color() {
    return $this->color;
  }
}
?>
```

- 以上实例中 PHP 关键字 `this` 就是指向当前对象实例的指针，不指向任何其他对象或类

#### NULL 值

> `NULL` 值表示变量没有值；`NULL` 是数据类型为 `NULL` 的值

`NULL` 值指明一个变量是否为空值，同样可用于数据空值和 `NULL` 值的区别

- 可以通过设置变量值为 `NULL` 来清空变量数据

```php
<?php
$x="Hello world!";
$x=null;
var_dump($x);
?>
```

### 类型比较

虽然 PHP 是弱类型语言，但也需要明白变量类型及它们的意义，因为我们经常需要对 PHP 变量进行比较：

- 松散比较：

  使用两个等号 `==` 比较，只比较 `值` ，不比较 `类型`

- 严格比较：

  用三个等号 `===` 比较，除了比较 `值` ，也比较 `类型`

例如：

- "42" 是一个字符串；而 42 是一个整数

- false 是一个布尔值；而 "false" 是一个字符串

```php
<?php
if(42 == "42") {
  echo '1、值相等';
}

echo PHP_EOL; // 换行符

if(42 === "42") {
  echo '2、类型相等';
} else {
  echo '3、不相等';
}
?>
```

以上实例输出结果为：

```
1、值相等
3、不相等
```

#### PHP 中比较 `0` 、`false` 、`null`

```php
<?php
echo '0 == false: ';
var_dump(0 == false);
echo '0 === false: ';
var_dump(0 === false);
echo PHP_EOL;
echo '0 == null: ';
var_dump(0 == null);
echo '0 === null: ';
var_dump(0 === null);
echo PHP_EOL;
echo 'false == null: ';
var_dump(false == null);
echo 'false === null: ';
var_dump(false === null);
echo PHP_EOL;
echo '"0" == false: ';
var_dump("0" == false);
echo '"0" === false: ';
var_dump("0" === false);
echo PHP_EOL;
echo '"0" == null: ';
var_dump("0" == null);
echo '"0" === null: ';
var_dump("0" === null);
echo PHP_EOL;
echo '"" == false: ';
var_dump("" == false);
echo '"" === false: ';
var_dump("" === false);
echo PHP_EOL;
echo '"" == null: ';
var_dump("" == null);
echo '"" === null: ';
var_dump("" === null);
```

以上实例输出结果为：

```
0 == false: bool(true)
0 === false: bool(false)

0 == null: bool(true)
0 === null: bool(false)

false == null: bool(true)
false === null: bool(false)

"0" == false: bool(true)
"0" === false: bool(false)

"0" == null: bool(false)
"0" === null: bool(false)

"" == false: bool(true)
"" === false: bool(false)

"" == null: bool(true)
"" === null: bool(false)
```

![图片](https://www.runoob.com/wp-content/uploads/2019/05/1791863413-572055b100304_articlex.png)

![图片](https://www.runoob.com/wp-content/uploads/2019/05/xxxxphp.png)

### PHP 5 常量

常量值被定义后，在脚本的其他任何地方都不能被改变

- 常量是一个简单值的标识符，且该值在脚本中不能改变

- 一个常量由英文字母、下划线、和数字组成,但数字不能作为首字母出现

  - 常量名不需要加 `$` 修饰符

- 常量在整个脚本中都可以使用！

设置常量，使用 define() 函数，函数语法如下(该函数有三个参数)：

```
bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )
```

- name

  必选参数，常量名称，即标志符

- value

  必选参数，常量的值

- case_insensitive

  可选参数，如果设置为 `TRUE` ，则该常量大小写不敏感，默认是大小写敏感的

以下实例我们创建一个 `区分大小写的常量` , 常量值为 `"欢迎访问 Runoob.com"` ：

```php
<?php
// 区分大小写的常量名
define("GREETING", "欢迎访问 Runoob.com");
echo GREETING;    // 输出 "欢迎访问 Runoob.com"
echo '<br>';
echo greeting;   // 输出 "greeting"
?>
```

以下实例我们创建一个 `不区分大小写的常量` , 常量值为 `"欢迎访问 Runoob.com"` ：

```php
<?php
// 不区分大小写的常量名
define("GREETING", "欢迎访问 Runoob.com", true);
echo greeting;  // 输出 "欢迎访问 Runoob.com"
?>
```

#### 常量是全局的

常量在定义后，默认是全局变量，可以在整个运行的脚本的任何地方使用

- 以下实例演示了在函数内使用常量，即便常量定义在函数外也可以正常使用常量

```php
<?php
define("GREETING", "欢迎访问 Runoob.com");

function myTest() {
  echo GREETING;
}

myTest();    // 输出 "欢迎访问 Runoob.com"
?>
```

> 使用常量时，不能在常量名前添加 `$` 符号，不然会将常量转换成新的未定义变量使用，会导致报错

```php
<?php
define('LOG','OPEN');//定义常量，常量使用不能添加$
echo $LOG;
?>
```

运行结果：

```
Notice: Undefined variable: LOG in D:\Program Files\apache-tomcat-7.0.75\webapps\myweb\test.php on line 3
```

### 字符串变量

字符串变量用于存储并处理文本

- 字符串变量用于包含有字符的值

- 在创建字符串之后，我们就可以对它进行操作了

- 以直接在函数中使用字符串，或者把它存储在变量中

下面的实例中，我们创建一个名为 `txt` 的字符串变量，并赋值为 `"Hello world!"` ，然后我们输出 txt 变量的值：

```php
<?php
$txt="Hello world!";
echo $txt;
?>
```

> 注意：当我们赋一个文本值给变量时，请记得给文本值加上单引号或者双引号

#### 并置运算符

在 PHP 中，只有一个字符串运算符：并置运算符 `.` ，用于把两个字符串值连接起来

```php
<?php
$txt1="Hello world!";
$txt2="What a nice day!";
echo $txt1 . " " . $txt2;
?>
```

- 上面的代码将输出：Hello world! What a nice day!

> #### 提示：
> - 在上面的代码中，我们已经使用了两次并置运算符
> - 这是由于我们需要在两个字符串之间插入一个空格

#### strlen() 函数返回字符串的长度

有时知道字符串值的长度是很有用的，`strlen()` 函数返回字符串的长度(字符数)

```php
<?php
echo strlen("Hello world!");
?>
```

- 上面的代码将输出：12

> #### 提示：
> - `strlen()` 常常用在循环和其他函数中，因为那时确定字符串何时结束是很重要的
> - 例如，在循环中，我们需要在字符串中的最后一个字符之后结束循环

#### strpos() 函数在字符串内查找一个字符或一段指定的文本

如果在字符串中找到匹配，该函数会返回第一个匹配的字符位置

- 如果未找到匹配，则返回 `FALSE`

- 下面的实例在字符串 `"Hello world!"` 中查找文本 `"world"` ：

```php
<?php
echo strpos("Hello world!","world");
?>
```

- 上面的代码将输出：6

> #### 提示：
> - 在上面的实例中，字符串 `"world"` 的位置是 `6`
> - 之所以是 `6` 而不是 `7` 的原因是，字符串中第一个字符的位置是 `0` ，而不是 `1`

```php
<?php
echo strlen("中文字符");   // 输出 12
?>
```

- 输出结果为 `12` ，因为一个中文占 `3` 个字符数

- 可以使用 mb_strlen 设置指定编码输出中文字符个数：

```php
<?php
echo mb_strlen("中文字符",'utf-8');  // 输出 4
?>
```

#### 对于中文，可以使用 `mb_strpos` 来查询中文字符的位置

- 中英文的感叹号、双引号等不同，如：`！` 和 `!`

- `mb_strpos` 按字处理，`strpos` 按字符处理

```php
<?php
echo strpos('开始23测试ceshi', '测试') . PHP_EOL;
echo mb_strpos('开始23测试ceshi', '测试') . PHP_EOL;

echo strpos('123测试ceshi', '测试') . PHP_EOL;
echo mb_strpos('123测试ceshi', '测试') . PHP_EOL;
?>
```

输出结果为：

```
8
4
3
3
```

#### [【完整的 PHP String 参考手册】](https://www.runoob.com/php/php-ref-string.html)

### 运算符

- 在 PHP 中，赋值运算符 `=` 用于给变量赋值

- 在 PHP 中，算术运算符 `+` 用于把值加在一起

#### 算术运算符

运算符|名称|描述|实例|结果
-|-|-|-|-
x + y|加|x 和 y 的和|2 + 2|4
x - y|减|x 和 y 的差|5 - 2|3
x * y|乘|x 和 y 的积|5 * 2|10
x / y|除|x 和 y 的商|15 / 5|3
x % y|模(除法的余数)|x 除以 y 的余数|5 % 2|1
-|-|-|10 % 8|2
-|-|-|10 % 2|0
`-x`|取反|x取反|-2|-2
a . b|并置|连接两个字符串|"Hi" . "Ha"|HiHa

以下实例演示了使用不同算术运算符得到的不同结果：

```php
<?php
$x=10;
$y=6;

echo ($x + $y); // 输出 16
echo '<br>';  // 换行

echo ($x - $y); // 输出 4
echo '<br>';  // 换行

echo ($x * $y); // 输出 60
echo '<br>';  // 换行

echo ($x / $y); // 输出 1.6666666666667
echo '<br>';  // 换行

echo ($x % $y); // 输出 4
echo '<br>';  // 换行

echo -$x; // 输出 -10
?>
```

> PHP7+ 版本新增 `整除运算符 intdiv()`

`整除运算符 intdiv()` 使用实例：

```php
<?php
var_dump(intdiv(10, 3));
?>
```

以上实例会输出：

```
int(3)
```

#### 赋值运算符

在 PHP 中，基本的赋值运算符是 `=`

- 它意味着左操作数被设置为右侧表达式的值

- 也就是说，`$x = 5` 的值是 `5`

运算符|等同于|描述
-|-|-
x = y|x = y|左操作数被设置为右侧表达式的值
x += y|x = x + y|加
x -= y|x = x - y|减
x *= y|x = x * y|乘
x /= y|x = x / y|除
x %= y|x = x % y|模(除法的余数)
a .= b|a = a . b|连接两个字符串

以下实例演示了使用不同赋值运算符得到的不同结果：

```php
<?php
$x=10;
echo $x; // 输出 10

$y=20;
$y += 100;
echo $y; // 输出 120

$z=50;
$z -= 25;
echo $z; // 输出 25

$i=5;
$i *= 6;
echo $i; // 输出 30

$j=10;
$j /= 5;
echo $j; // 输出 2

$k=15;
$k %= 4;
echo $k; // 输出 3
?>
```

以下实例演示了使用不同字符串运算符得到的相同结果：

```php
<?php
$a = "Hello";
$b = $a . " world!";
echo $b; // 输出 Hello world!

$x="Hello";
$x .= " world!";
echo $x; // 输出 Hello world!
?>
```

#### `递增` / `递减` 运算符

运算符|名称|描述
-|-|-
++x|预递增|x 加 1，然后返回 x
x++|后递增|返回 x，然后 x 加 1
--x|预递减|x 减 1，然后返回 x
x--|后递减|返回 x，然后 x 减 1

以下实例演示了使用 `递增` / `递减` 运算符得到的结果：

```php
<?php
$x=10;
echo ++$x; // 输出 11

$y=10;
echo $y++; // 输出 10

$z=5;
echo --$z; // 输出 4

$i=5;
echo $i--; // 输出 5
?>
```

> 运算顺序是 `从左往右的` ，先遇到什么执行什么
> - `$x++` 先遇到变量 `$x` 即返回变量 `$x` ，再执行后面的 `++` 操作改变变量 `$x`
> - `++$x` 先遇到操作 `++` 即执行操作改变了变量 `$x` ，后遇到变量 `$x` ，再返回已被改变的 `$x`

#### 比较运算符

> 比较操作符可以让我们比较两个值

运算符|名称|描述|实例
-|-|-|-
x == y|等于|如果 x 等于 y，则返回 true|5==8 返回 false
x === y|绝对等于|如果 x 等于 y，且它们类型相同，则返回 true|5==="5" 返回 false
x != y|不等于|如果 x 不等于 y，则返回 true|5!=8 返回 true
x <> y|不等于|如果 x 不等于 y，则返回 true|5<>8 返回 true
x !== y|绝对不等于|如果 x 不等于 y，或它们类型不相同，则返回 true|5!=="5" 返回 true
x > y|大于|如果 x 大于 y，则返回 true|5>8 返回 false
x < y|小于|如果 x 小于 y，则返回 true|5<8 返回 true
x >= y|大于等于|如果 x 大于或者等于 y，则返回 true|5>=8 返回 false
x <= y|小于等于|如果 x 小于或者等于 y，则返回 true|5<=8 返回 true

以下实例演示了使用一些比较运算符得到的不同结果：

```php
<?php
$x=100;
$y="100";

var_dump($x == $y);
echo "<br>";
var_dump($x === $y);
echo "<br>";
var_dump($x != $y);
echo "<br>";
var_dump($x !== $y);
echo "<br>";

$a=50;
$b=90;

var_dump($a > $b);
echo "<br>";
var_dump($a < $b);
?>
```

#### 逻辑运算符

运算符|名称|描述|实例
-|-|-|-
x and y|与|如果 x 和 y 都为 true，则返回 true|x=6;y=3;(x < 10 and y > 1) 返回 true
x or y|或|如果 x 和 y 至少有一个为 true，则返回 true|x=6;y=3;(x==6 or y==5) 返回 true
x xor y|异或|如果 x 和 y 有且仅有一个为 true，则返回 true|x=6;y=3;(x==6 xor y==3) 返回 false
x && y|与|如果 x 和 y 都为 true，则返回 true|x=6;y=3;(x < 10 && y > 1) 返回 true
x丨丨y|或|如果 x 和 y 至少有一个为 true，则返回 true|x=6;y=3;(x==5 || y==5) 返回 false
!x|非|如果 x 不为 true，则返回 true|x=6;y=3;!(x==y) 返回 true

#### 数组运算符

运算符|名称|描述
-|-|-
x + y|集合|x 和 y 的集合
x == y|相等|如果 x 和 y 具有相同的键/值对，则返回 true
x === y|恒等|如果 x 和 y 具有相同的键/值对，且顺序相同类型相同，则返回 true
x != y|不相等|如果 x 不等于 y，则返回 true
x <> y|不相等|如果 x 不等于 y，则返回 true
x !== y|不恒等|如果 x 不等于 y，则返回 true

以下实例演示了使用一些数组运算符得到的不同结果：

```php
<?php
$x = array("a" => "red", "b" => "green");
$y = array("c" => "blue", "d" => "yellow");
$z = $x + $y; // $x 和 $y 数组合并
var_dump($z);
var_dump($x == $y);
var_dump($x === $y);
var_dump($x != $y);
var_dump($x <> $y);
var_dump($x !== $y);
?>
```

#### 三元运算符

另一个条件运算符是 `?:` (或三元)运算符

- 语法格式：`(expr1) ? (expr2) : (expr3)`

- 对 `expr1` 求值为 `TRUE` 时的值为 `expr2` ，在 `expr1` 求值为 `FALSE` 时的值为 `expr3`

  - 自 `PHP 5.3` 起，可以省略三元运算符中间那部分

  - 表达式 `expr1 ?: expr3` ，在 `expr1` 求值为 `TRUE` 时返回 `expr1` ，否则返回 `expr3`

以下实例中通过判断 `$_GET` 请求中含有 `user` 值，如果有返回 `$_GET['user']` ，否则返回 `nobody` ：

```php
<?php
$test = '菜鸟教程';
// 普通写法
$username = isset($test) ? $test : 'nobody';
echo $username, PHP_EOL;

// PHP 5.3+ 版本写法
$username = $test ?: 'nobody';
echo $username, PHP_EOL;
?>
```

运行结果：

```
菜鸟教程
菜鸟教程
```

> 在 PHP7+ 版本多了一个 `NULL` 合并运算符 `??`

```php
<?php
// 如果 `$_GET['user']` 不存在返回 `'nobody'`，否则返回 `$_GET['user']` 的值
$username = $_GET['user'] ?? 'nobody';

// 类似的三元运算符
$username = isset($_GET['user']) ? $_GET['user'] : 'nobody';
?>
```

#### 组合比较符( `PHP7+` )

`PHP7+` 支持组合比较符 `combined comparison operator` 也称之为 `太空船操作符` ，符号为 `<=>`

- `组合比较运算符` 可以轻松实现 `两个变量的比较` ，当然 `不仅限于数值类数据的比较`

- 语法格式如下：`$c = $a <=> $b`

- 解析如下：

  如果 `$a > $b` ，则 `$c` 的值为 `1`

  如果 `$a == $b` ，则 `$c` 的值为 `0`

  如果 `$a < $b` ，则 `$c` 的值为 `-1`

```php
<?php
// 整型
echo 1 <=> 1; // 0
echo 1 <=> 2; // -1
echo 2 <=> 1; // 1

// 浮点型
echo 1.5 <=> 1.5; // 0
echo 1.5 <=> 2.5; // -1
echo 2.5 <=> 1.5; // 1

// 字符串
echo "a" <=> "a"; // 0
echo "a" <=> "b"; // -1
echo "b" <=> "a"; // 1
?>
```

#### 运算符优先级

下表按照优先级 `从高到低` 列出了运算符

- 同一行中的运算符具有相同优先级，此时它们的结合方向决定求值顺序

- 说明：左 ＝ `从左到右` ，右 ＝ `从右到左`

结合方向|运算符|附加信息
-|-|-
无|clone new|clone 和 new
左|[|array()
右|++ -- ~ (int) (float) (string) (array) (object) (bool) @|类型和递增／递减
无|instanceof|类型
右|!|逻辑运算符
左|* / %|算术运算符
左|+ – .|算术运算符和字符串运算符
左|<< >>|位运算符
无|== != === !== <>|比较运算符
左|&|位运算符和引用
左|^|位运算符
左|`|`|位运算符
左|&&|逻辑运算符
左|`||`|逻辑运算符
左|? :|三元运算符
右|= += -= *= /= .= %= &= |= ^= <<= >>= =>|赋值运算符
左|and|逻辑运算符
左|xor|逻辑运算符
左|or|逻辑运算符
左|,|多处用到

> 运算符优先级中，`or` 和 `||` ，`&&` 和 `and` 都是逻辑运算符，效果一样，但是其优先级却不一样

```php
<?php
// 优先级： && > = > and
// 优先级： || > = > or

$a = 3;
$b = false;

$c = $a or $b;
var_dump($c);
// 这里的 $c 为 int 值 3 ，而不是 boolean 值 true
// 形同 ($c = $a) or $b

$d = $a || $b;
var_dump($d);
// 这里的 $d 就是 boolean 值 true
// 形同 $d = ($a || $b)
?>
```

以上实例输出结果为：

```
int(3)
bool(true)
```

> 运算符的优先级口诀：括(号)、单(操作数)、算(术)、移(位)、关(系)；位(运算符)、逻(辑)、条(件)、赋(值)、逗(号)

#### 括号的使用

我们通过括号的配对来明确标明运算顺序，而非靠运算符优先级和结合性来决定，通常能够增加代码的可读性

```php
<?php
// 括号优先运算

$a = 1;
$b = 2;
$c = 3;

$d = $a + $b * $c;
echo $d;
echo "\n";

$e = ($a + $b) * $c;
// 使用括号
echo $e;
echo "\n";
?>
```

以上实例输出结果为：

```
7
9
```

### `If...Else` 语句

> 条件语句用于根据不同条件执行不同动作

#### 条件语句

编写代码时常常需要为不同的判断执行不同的动作，在 PHP 中，提供了下列条件语句：

- if 语句

  在条件成立时执行代码

- if...else 语句

  在条件成立时执行一块代码，条件不成立时执行另一块代码

- if...elseif....else 语句

  在若干条件之一成立时执行一个代码块

- switch 语句

  在若干条件之一成立时执行一个代码块

#### `if` 语句

if 语句用于仅当指定条件成立时执行代码

- 语法

```
if (条件)
{
  条件成立时要执行的代码;
}
```

如果当前时间小于 `20` ，下面的实例将输出 `"Have a good day!"` ：

```php
<?php
$t=date("H");
if ($t<"20")
{
    echo "Have a good day!";
}
?>
```

#### `if...else` 语句

在条件成立时执行一块代码，条件不成立时执行另一块代码，请使用 `if....else` 语句

- 语法

```
if (条件)
{
条件成立时执行的代码;
}
else
{
条件不成立时执行的代码;
}
```

如果当前时间小于 `20` ，下面的实例将输出 `"Have a good day!"` ，否则输出 `"Have a good night!"` ：

```php
<?php
$t=date("H");
if ($t<"20")
{
    echo "Have a good day!";
}
else
{
    echo "Have a good night!";
}
?>
```

#### `if...elseif....else` 语句

在若干条件之一成立时执行一个代码块，请使用 `if....elseif...else` 语句

- `elseif` 和 `else if` 完全同效果，`elseif` 是 PHP 为 `else if` 专门做到容错版

  - 更准确更严格到写法为后者: `else if`

- 语法

```
if (条件)
{
    if 条件成立时执行的代码;
}
elseif (条件)
{
    elseif 条件成立时执行的代码;
}
else
{
    条件不成立时执行的代码;
}
```

如果当前时间小于 `10` ，下面的实例将输出 `"Have a good morning!"` ，如果当前时间不小于 `10` 且小于 `20` ，则输出 `"Have a good day!"` ，否则输出 `"Have a good night!"` ：

```php
<?php
$t=date("H");
if ($t<"10")
{
    echo "Have a good morning!";
}
elseif ($t<"20")
{
    echo "Have a good day!";
}
else
{
    echo "Have a good night!";
}
?>
```

> 如果你觉得最后这两个实例的运行结果不对，那是因为自 `PHP5.0` 开始，用 PHP `获取系统时间` 时，时间比当前时间少 `8` 个小时
> - 原因是 `PHP.ini` 中没有设置 `timezone` 时，PHP 是使用的 `UTC` 时间，所以在中国时间要少 `8` 小时
> - 因此你的时间都要 `-8` ，所以代码是没问题的

以上问题的解决办法：

- 在 `PHP.ini` 文件中修改设置

```
[Date]
; Defines the default timezone used by the date functions
date.timezone = Asia/Shanghai
```

- 在 PHP 程序中运行时设置

```php
<?php
if(date_default_timezone_get() != "1Asia/Shanghai") date_default_timezone_set("Asia/Shanghai");
?>
```

> #### 注意：
> 用 `date_default_timezone_get` 获得的时间设置中有一个 `1`

- 在使用时间时自己多加 `8*3600` 秒也是行滴

```php
<?php
echo date("Y-m-d H:i:s",time()+8*3600);
?>
```

#### `switch` 语句

`switch` 语句用于 `根据多个不同条件执行不同动作`，也就是 `有选择地执行若干代码块之一`

```php
<?php
switch (n)
{
case label1:
  如果 n=label1，此处代码将执行;
  break;
case label2:
  如果 n=label2，此处代码将执行;
  break;
default:
  如果 n 既不等于 label1 也不等于 label2，此处代码将执行;
}
?>
```

- 首先对一个简单的表达式 `n`(通常是变量)进行一次计算

- 将表达式的值与结构中每个 `case` 的值进行比较

- 如果存在匹配，则执行与 `case` 关联的代码

- 代码执行后，使用 `break` 来阻止代码跳入下一个 `case` 中继续执行

- `default` 语句用于不存在匹配(即没有 `case` 为真)时执行

> 若无 `break` ，则会跳入下一个 `case` 中继续执行，包括 `default` 中的代码，直到代码块执行结束

```php
<?php
$favcolor="red";
switch ($favcolor)
{
case "red":
  echo "你喜欢的颜色是红色!";
  break;
case "blue":
  echo "你喜欢的颜色是蓝色!";
  break;
case "green":
  echo "你喜欢的颜色是绿色!";
  break;
default:
  echo "你喜欢的颜色不是 红, 蓝, 或绿色!";
}
?>
```

### 数组

数组能够在单个变量中存储多个值

```php
<?php
$cars=array("Volvo","BMW","Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>
```

#### 数组是什么

> 数组是一个能在单个变量中存储多个值的特殊变量

例如，有一个项目清单(例如：车名字的清单)，将其存储到单个变量中，如下所示：

```
$cars1="Volvo";
$cars2="BMW";
$cars3="Toyota";
```

> 问题：如果想要遍历数组并找出特定的一个呢？如果数组的项不只 `3` 个而是 `300` 个呢？
> - 解决办法是创建一个数组！
>> 数组可以在单个变量中存储多个值，并且我们可以根据键访问其中的值

#### 在 PHP 中创建数组

在 PHP 中，`array()` 函数用于创建数组，且在 PHP 中，有三种类型的数组：

- 数值数组

  带有数字 `ID` 键的数组

- 关联数组

  带有指定的键的数组，每个键关联一个值

- 多维数组

  包含一个或多个数组的数组

#### PHP 数值数组

PHP 中有两种创建数值数组的方法：

- 自动分配 `ID` 键( `ID` 键总是从 `0` 开始)：

```php
$cars=array("Volvo","BMW","Toyota");
```

- 人工分配 ID 键：

```php
$cars[0]="Volvo";
$cars[1]="BMW";
$cars[2]="Toyota";
```

下面的实例创建一个名为 `$cars` 的数值数组，并给数组分配三个元素，然后打印一段包含数组值的文本：

```php
<?php
$cars=array("Volvo","BMW","Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>
```

#### `count()` 函数获取数组的长度(元素的数量)

```php
<?php
$cars=array("Volvo","BMW","Toyota");
echo count($cars); // 输出 3
?>
```

#### 遍历数值数组

遍历并打印数值数组中的所有值，可以使用 `for` 循环，如下所示：

```php
<?php
$cars=array("Volvo","BMW","Toyota");
$arrlength=count($cars);

for($x=0;$x<$arrlength;$x++)
{
  echo $cars[$x];
  echo "<br>";
}
?>
```

#### PHP 关联数组

> 关联数组是分配给数组的 `指定的键` 的数组

有两种创建关联数组的方法：

```php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
```

或

```php
$age['Peter']="35";
$age['Ben']="37";
$age['Joe']="43";
```

在 PHP 中使用数组指定的键：

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old."; // 输出 "Peter is 35 years old"
?>
```

#### 遍历关联数组

遍历并打印关联数组中的所有值，我们可以使用 `foreach` 循环，如下所示：

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");

foreach($age as $x=>$x_value)
{
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}
?>
```

#### 多维数组

[【点击了解 多维数组】](https://www.runoob.com/php/php-arrays-multi.html)

#### [【完整的 PHP `Array` 参考手册】](https://www.runoob.com/php/php-ref-array.html)

### 数组排序

数组中的元素可以按字母或数字顺序进行降序或升序排列

#### 数组排序函数

PHP 数组排序函数：

- `sort()`

  对数组进行升序排列

- `rsort()`

  对数组进行降序排列

- `asort()`

  根据关联数组的值，对数组进行升序排列

- `ksort()`

  根据关联数组的键，对数组进行升序排列

- `arsort()`

  根据关联数组的值，对数组进行降序排列

- `krsort()`

  根据关联数组的键，对数组进行降序排列

#### `sort()` 对数组进行升序排列

下面的实例将 `$cars` 数组中的元素按照字母升序排列：

```php
<?php
$cars=array("Volvo","BMW","Toyota");
sort($cars);

print_r($cars);
// Array ( [0] => BMW [1] => Toyota [2] => Volvo )
?>
```

下面的实例将 `$numbers` 数组中的元素按照数字升序排列：

```php
<?php
$numbers=array(4,6,2,22,11);
sort($numbers);

print_r($numbers);
// Array ( [0] => 2 [1] => 4 [2] => 6 [3] => 11 [4] => 22 )
?>
```

#### `rsort()` 对数组进行降序排列

下面的实例将 `$cars` 数组中的元素按照字母降序排列：

```php
<?php
$cars=array("Volvo","BMW","Toyota");
rsort($cars);
?>
```

下面的实例将 `$numbers` 数组中的元素按照数字降序排列：

```php
<?php
$numbers=array(4,6,2,22,11);
rsort($numbers);
?>
```

#### `asort()` 根据数组的值进行升序排列

下面的实例根据数组的值，对关联数组进行升序排列：

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
asort($age);

print_r($age);
// Array ( [Peter] => 35 [Ben] => 37 [Joe] => 43 )
?>
```

#### `ksort()` 根据数组的键进行升序排列

下面的实例根据数组的键，对关联数组进行升序排列：

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
ksort($age);
?>
```

#### `arsort()` 根据数组的值进行降序排列

下面的实例根据数组的值，对关联数组进行降序排列：

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
arsort($age);
?>
```

#### `krsort()` 根据数组的键进行降序排列

下面的实例根据数组的键，对关联数组进行降序排列：

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
krsort($age);
?>
```

#### [【完整的 PHP `Array` 参考手册】](https://www.runoob.com/php/php-ref-array.html)

### 超级全局变量

> 超级全局变量在 `PHP 4.1.0` 之后被启用, 是 PHP 系统中自带的变量，在一个脚本的全部作用域中都可用

PHP 中预定义了几个超级全局变量 `superglobals` ，这意味着它们在一个脚本的全部作用域中都可用

- 你不需要特别说明，就可以在函数及类中使用

超级全局变量列表

- `$GLOBALS`

  PHP 中的一个超级全局变量组，在一个 PHP 脚本的全部作用域中都可以访问

  - 一个包含了全部变量的全局组合数组

  - 变量的名字就是数组的键

  ```php
  <?php
  $x = 75;
  $y = 25;

  function addition()
  {
    $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
  }

  addition();
  echo $z;
  ?>
  ```

  以上实例中 `z` 是一个 `$GLOBALS` 数组中的超级全局变量，该变量同样可以在函数外访问

- `$_SERVER`

  一个包含了诸如 `头信息(header)` 、`路径(path)` 、以及 `脚本位置(script locations)` 等等信息的数组

  这个数组中的项目由 `Web` 服务器创建，但不能保证每个服务器都提供全部项目，服务器可能会忽略一些，或者提供一些没有在这里列举出来的项目

  ```php
  <?php
  echo $_SERVER['PHP_SELF'];
  echo "<br>";
  echo $_SERVER['SERVER_NAME'];
  echo "<br>";
  echo $_SERVER['HTTP_HOST'];
  echo "<br>";
  echo $_SERVER['HTTP_REFERER'];
  echo "<br>";
  echo $_SERVER['HTTP_USER_AGENT'];
  echo "<br>";
  echo $_SERVER['SCRIPT_NAME'];
  ?>
  ```

> 下表列出了所有 `$_SERVER` 变量中的重要元素：

元素/代码|描述
-|-
$_SERVER['PHP_SELF']|当前执行脚本的文件名，与 `document root` 有关，例如，在地址为 `http://example.com/test.php/foo.bar` 的脚本中使用 `$_SERVER['PHP_SELF']` 将得到 `/test.php/foo.bar` ，`__FILE__` 常量包含当前(例如包含)文件的完整路径和文件名；从 `PHP 4.3.0` 版本开始，如果 `PHP` 以命令行模式运行，这个变量将包含脚本名(之前的版本该变量不可用)
$_SERVER['GATEWAY_INTERFACE']|服务器使用的 `CGI` 规范的版本；例如，`"CGI/1.1"`
$_SERVER['SERVER_ADDR']|当前运行脚本所在的服务器的 `IP` 地址
$_SERVER['SERVER_NAME']|当前运行脚本所在的服务器的主机名，如果脚本运行于虚拟主机中，该名称是由那个虚拟主机所设置的值决定(如: `www.runoob.com` )
$_SERVER['SERVER_SOFTWARE']|服务器标识字符串，在响应请求时的头信息中给出(如：`Apache/2.2.24` )
$_SERVER['SERVER_PROTOCOL']|请求页面时通信协议的名称和版本，例如，`"HTTP/1.0"`
$_SERVER['REQUEST_METHOD']|访问页面使用的请求方法；例如，`"GET", "HEAD"，"POST"，"PUT"`
$_SERVER['REQUEST_TIME']|请求开始时的时间戳，从 `PHP 5.1.0` 起可用(如：`1377687496` )
$_SERVER['QUERY_STRING']|`query string`(查询字符串)，如果有的话，通过它进行页面访问
$_SERVER['HTTP_ACCEPT']|当前请求头中 `Accept:` 项的内容，如果存在的话
$_SERVER['HTTP_ACCEPT_CHARSET']|当前请求头中 `Accept-Charset:` 项的内容，如果存在的话，例如：`"iso-8859-1,*,utf-8"`
$_SERVER['HTTP_HOST']|当前请求头中 `Host:` 项的内容，如果存在的话
$_SERVER['HTTP_REFERER']|引导用户代理到当前页的前一页的地址(如果存在)，由 `user agent` 设置决定；但并不是所有的用户代理都会设置该项，有的还提供了修改 `HTTP_REFERER` 的功能(简言之，该值并不可信)
$_SERVER['HTTPS']|如果脚本是通过 `HTTPS` 协议被访问，则被设为一个非空的值
$_SERVER['REMOTE_ADDR']|浏览当前页面的用户的 `IP` 地址
$_SERVER['REMOTE_HOST']|浏览当前页面的用户的主机名，`DNS` 反向解析不依赖于用户的 `REMOTE_ADDR`
$_SERVER['REMOTE_PORT']|用户机器上连接到 `Web` 服务器所使用的端口号
$_SERVER['SCRIPT_FILENAME']|当前执行脚本的绝对路径
$_SERVER['SERVER_ADMIN']|该值指明了 `Apache` 服务器配置文件中的 `SERVER_ADMIN` 参数；如果脚本运行在一个虚拟主机上，则该值是那个虚拟主机的值(如：`someone@runoob.com` )
$_SERVER['SERVER_PORT']|`Web` 服务器使用的端口，默认值为 `"80"`；如果使用 `SSL` 安全连接，则这个值为用户设置的 `HTTP` 端口
$_SERVER['SERVER_SIGNATURE']|包含了服务器版本和虚拟主机名的字符串
$_SERVER['PATH_TRANSLATED']|当前脚本所在文件系统(非文档根目录)的基本路径，这是在服务器进行虚拟到真实路径的映像后的结果
$_SERVER['SCRIPT_NAME']|包含当前脚本的路径，这在页面需要指向自己时非常有用；`__FILE__` 常量包含当前脚本(例如包含文件)的完整路径和文件名
$_SERVER['SCRIPT_URI']|`URI` 用来指定要访问的页面，例如 `"/index.html"`

- `$_REQUEST`

  用于收集 `HTML 表单` 提交的数据

  以下实例显示了一个输入字段 `input` 及提交按钮 `submit` 的表单 `form`

  当用户通过点击 `Submit 按钮` 提交表单数据时, 表单数据将发送至 `<form>` 标签中 `action` 属性中指定的脚本文件(在这个实例中，我们是用的 `PHP 脚本语句` 来处理表单数据；如果你希望其他的 `PHP 文件` 来处理该数据，你可以修改该指定的脚本文件名)

  在这里，我们可以使用超级全局变量 `$_REQUEST` 来收集表单中的 `input` 字段数据：

  ```php
  <html>
  <body>

  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
  Name: <input type="text" name="fname">
  <input type="submit">
  </form>

  <?php
  $name = $_REQUEST['fname'];
  echo $name;
  ?>

  </body>
  </html>
  ```

- `$_POST`

  被广泛应用于收集表单数据，在 `HTML form` 标签的指定该属性：`"method="post"`

  以下实例显示了一个输入字段 `input` 及提交按钮 `submit` 的表单 `form`

  当用户通过点击 `Submit 按钮` 提交表单数据时, 表单数据将发送至 `<form>` 标签中 `action` 属性中指定的脚本文件(在这个实例中，我们是用的 `PHP 脚本语句` 来处理表单数据；如果你希望其他的 `PHP 文件` 来处理该数据，你可以修改该指定的脚本文件名)

  在这里，我们可以使用超级全局变量 `$_POST` 来收集表单中的 `input` 字段数据：

  ```php
  <html>
  <body>

  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
  Name: <input type="text" name="fname">
  <input type="submit">
  </form>

  <?php
  $name = $_POST['fname'];
  echo $name;
  ?>

  </body>
  </html>
  ```

- `$_GET`

  同样被广泛应用于收集表单数据，在 `HTML form` 标签的指定该属性：`"method="get"`

  也可以收集 `URL` 中发送的数据

  假定我们有一个包含参数的超链接 HTML 页面：

  ```php
  <html>
  <body>

  <a href="test_get.php?subject=PHP&web=runoob.com">Test $GET</a>

  </body>
  </html>
  ```

  当用户点击链接 `Test $GET`

  参数 `subject` 和 `web` 将发送至 `test_get.php`

  你可以在  `test_get.php` 文件中使用 `$_GET` 变量来获取这些数据

  以下实例显示了 `test_get.php` 文件的代码：

  ```php
  <html>
  <body>

  <?php
  echo "Study " . $_GET['subject'] . " @ " . $_GET['web'];
  ?>

  </body>
  </html>
  ```

- `$_FILES`

- `$_ENV`

- `$_COOKIE`

- `$_SESSION`

> 其他属性，请自行了解

### 循环

循环执行代码块指定的次数，或者当指定的条件为真时循环执行代码块

- 编写代码时，经常需要让相同的代码块一次又一次地重复运行

- 我们可以在代码中使用循环语句来完成这个任务

在 PHP 中，提供了下列循环语句：

- `while`

  只要指定的条件成立，则循环执行代码块

- `do...while`

  `首先执行一次` 代码块，然后在指定的条件成立时重复这个循环

- `for`

  循环执行代码块指定的次数

- `foreach`

  根据数组中每个元素来循环代码块

#### `while` 循环

重复执行代码块，直到指定的条件不成立

- 语法

```
while (条件)
{
  要执行的代码;
}
```

下面的实例：

- 首先设置变量 `i` 的值为 `1` ，即 `$i=1`

- 然后，只要 `i` 小于或者等于 `5` ，`while` 循环将继续运行

- 循环每运行一次，`i` 就会递增 `1`

```php
<html>
<body>

<?php
$i=1;
while($i<=5)
{
  echo "The number is " . $i . "<br>";
  $i++;
}
?>

</body>
</html>
```

输出结果：

```
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
```

#### `do...while` 语句

`do...while` 语句会至少执行一次代码，然后检查条件，只要条件成立，就会重复进行循环

- 语法

```
do
{
  要执行的代码;
}
while (条件);
```

下面的实例：

- 首先设置变量 `i` 的值为 `1` ，即 `$i=1`

- 然后，开始 `do...while` 循环

- 循环将变量 `i` 的值递增 `1` ，然后输出

- 先检查条件 `i 小于或者等于 5` ，只要 `i` 小于或者等于 `5` ，循环将继续运行：

```php
<html>
<body>

<?php
$i=1;
do
{
    $i++;
    echo "The number is " . $i . "<br>";
}
while ($i<=5);
?>

</body>
</html>
```

输出结果：

```
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
```

#### `for` 循环

`for` 循环用于预先知道脚本需要运行的次数的情况

- 语法

```
for (初始值; 条件; 增量)
{
    要执行的代码;
}
```

- 初始值：

  主要是初始化一个变量值，用于设置一个计数器(但可以是任何在循环的开始被执行一次的代码)

- 条件：

  循环执行的限制条件

  如果为 TRUE，则循环继续

  如果为 FALSE，则循环结束

- 增量：

  主要用于递增计数器(但可以是任何在循环的结束被执行的代码)

> #### 注意：
> 上面的初始值和增量参数可为空，或者有多个表达式(用逗号分隔)

下面的实例：

- 定义一个初始值为 `i=1` 的循环

- 只要变量 `i` 小于或者等于 `5` ，循环将继续运行

- 循环每运行一次，变量 `i` 就会递增 `1` ：

```php
<?php
for ($i=1; $i<=5; $i++)
{
    echo "The number is " . $i . "<br>";
}
?>
```

输出结果：

```
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
```

#### `foreach` 循环

`foreach` 循环用于遍历数组

- 语法

```
foreach ($array as $value)
{
    要执行代码;
}
```

- 每进行一次循环，当前数组元素的值就会被赋值给 `$value` 变量(数组指针会逐一地移动)

- 在进行下一次循环时，我们将看到数组中的下一个值

下面的实例演示了一个输出给定数组的值的循环：

```php
<?php
$x=array("one","two","three");
foreach ($x as $value)
{
  echo $value . "<br>";
}
?>
```

输出结果：

```
one
two
three
```

### 函数

PHP 的真正威力源自于它的函数，在 PHP 中，提供了超过 `1000` 个内建的函数

> 如需查看所有数组函数的完整参考手册和实例[【请访问我们的 `PHP 参考手册`】](https://www.runoob.com/php/php-ref-array.html)

- 如要在页面加载时执行脚本，可以把它放到函数里

- 函数是通过调用函数来执行的

- 可以在页面的任何位置调用函数

#### 创建 PHP 函数

函数是通过调用函数来执行的

- 语法

```php
<?php
function functionName()
{
  // 要执行的代码
}
?>
```

- 函数的名称应该提示出它的功能

- 函数名称以字母或下划线开头(不能以数字开头)

例如，一个简单的函数，在其被调用时能输出我的名称：

```php
<?php
function writeName()
{
    echo "Kai Jim Refsnes";
}

echo "My name is ";
writeName();
?>
```

输出结果：

```
My name is Kai Jim Refsnes
```

#### 添加参数

为了给函数添加更多的功能，我们可以添加参数，参数类似变量

- 参数就在函数名称后面的一个括号内指定

下面的实例将输出不同的名字，但姓是相同的：

```php
<?php
function writeName($fname)
{
  echo $fname . " Refsnes.<br>";
}

echo "My name is ";
writeName("Kai Jim");
echo "My sister's name is ";
writeName("Hege");
echo "My brother's name is ";
writeName("Stale");
?>
```

输出结果：

```
My name is Kai Jim Refsnes.
My sister's name is Hege Refsnes.
My brother's name is Stale Refsnes.
```

下面的函数有两个参数：

```php
<?php
function writeName($fname,$punctuation)
{
    echo $fname . " Refsnes" . $punctuation . "<br>";
}

echo "My name is ";
writeName("Kai Jim",".");
echo "My sister's name is ";
writeName("Hege","!");
echo "My brother's name is ";
writeName("Ståle","?");
?>
```

输出结果：

```
My name is Kai Jim Refsnes.
My sister's name is Hege Refsnes!
My brother's name is Ståle Refsnes?
```

#### 返回值

如需让函数返回一个值，请使用 `return` 语句

```php
<?php
function add($x,$y)
{
  $total=$x+$y;
  return $total;
}

echo "1 + 16 = " . add(1,16);
?>
```

输出结果：

```
1 + 16 = 17
```

### 魔术常量

PHP 向它运行的任何脚本提供了大量的预定义常量

- 不过很多常量都是由不同的扩展库定义的

- 只有在加载了这些扩展库时才会出现

- 或者动态加载后

- 或者在编译时已经包括进去了

有八个魔术常量：

- 它们的值随着它们在代码中的位置改变而改变

  - 例如 `__LINE__` 的值就依赖于它在脚本中所处的行来决定

- 这些特殊的常量不区分大小写

#### `__LINE__`

文件中的当前行号

```php
<?php
echo '这是第 " '  . __LINE__ . ' " 行';
?>
```

以上实例输出结果为：

```
这是第 "2" 行
```

#### `__FILE__`

文件的完整路径和文件名

- 如果用在被包含文件中，则返回被包含的文件名

- 自 `PHP 4.0.2` 起，`__FILE__` 总是包含一个绝对路径(如果是符号连接，则是解析后的绝对路径)，而在此之前的版本有时会包含一个相对路径

```php
<?php
echo '该文件位于 " '  . __FILE__ . ' " ';
?>
```

以上实例输出结果为(根据实际情况结果会有差异)：

```
该文件位于 "E:\wamp\www\test\index.php"
```

#### `__DIR__`

文件所在的目录

- 如果用在被包括文件中，则返回被包括的文件所在的目录

- 它等价于 `dirname(__FILE__)`

  - 除非是根目录，否则目录中名称不包括末尾的斜杠( `PHP 5.3.0` 中新增)

```php
<?php
echo '该文件位于 " '  . __DIR__ . ' " ';
?>
```

以上实例输出结果为(根据实际情况结果会有差异)：

```
该文件位于 "E:\wamp\www\test"
```

#### `__FUNCTION__`

函数名称( `PHP 4.3.0` 新加)

- 自 `PHP 5` 起本常量返回该函数被定义时的名字(区分大小写)

- 在 `PHP 4` 中该值总是 `小写字母` 的

```php
<?php
function test() {
  echo  '函数名为：' . __FUNCTION__ ;
}
test();
?>
```

以上实例输出结果为：

```
函数名为：test
```

#### `__CLASS__`

类的名称( `PHP 4.3.0` 新加)

- 自 `PHP 5` 起本常量返回该类被定义时的名字(区分大小写)

- 在 `PHP 4` 中该值总是 `小写字母` 的

  - 类名包括其被声明的作用区域(例如 `Foo` \ `Bar` )

> #### 注意：
> - 自 `PHP 5.4` 起 `__CLASS__` 对 `trait` 也起作用
> - 当用在 `trait` 方法中时，`__CLASS__` 是调用 `trait` 方法的类的名字

```php
<?php
class test {
  function _print() {
    echo '类名为：'  . __CLASS__ . "<br>";
    echo  '函数名为：' . __FUNCTION__ ;
  }
}
$t = new test();
$t->_print();
?>
```

以上实例输出结果为：

```
类名为：test
函数名为：_print
```

#### `__TRAIT__`

`Trait` 的名字( `PHP 5.4.0` 新加)

- 自 `PHP 5.4.0` 起，PHP 实现了代码复用的一个方法，称为 `traits`

- `Trait` 名包括其被声明的作用区域(例如 `Foo` \ `Bar` )

- 从基类继承的成员被插入的 `SayWorld Trait` 中的 `MyHelloWorld` 方法所覆盖

  - 其行为 `MyHelloWorld` 类中定义的方法一致

  - 优先顺序是当前类中的方法会覆盖 `trait` 方法，而 `trait` 方法又覆盖了基类中的方法

```php
<?php
class Base {
  public function sayHello() {
    echo 'Hello ';
  }
}

trait SayWorld {
  public function sayHello() {
    parent::sayHello();
    echo 'World!';
  }
}

class MyHelloWorld extends Base {
  use SayWorld;
}

$o = new MyHelloWorld();
$o->sayHello();
?>
```

以上例程会输出：

```
Hello World!
```

#### `__METHOD__`

类的方法名( `PHP 5.0.0` 新加)

- 返回该方法被定义时的名字(`区分大小写`)

```php
<?php
function test() {
  echo  '函数名为：' . __METHOD__ ;
}
test();
?>
```

以上实例输出结果为：

```
函数名为：test
```

#### `__NAMESPACE__`

当前命名空间的名称(`区分大小写`)

- 此常量是在编译时定义的( `PHP 5.3.0` 新增)

```php
<?php
namespace MyProject;

echo '命名空间为："', __NAMESPACE__, '"';
// 输出 "MyProject"
?>
```

### PHP 命名空间 `namespace`

PHP 命名空间 `namespace` 是在 `PHP 5.3` 中加入的，如果你学过 `C#` 和 `Java` ，那命名空间就不算什么新事物

- 不过在 PHP 当中还是有着相当重要的意义

PHP 命名空间可以解决以下两类问题：

- 用户编写的代码与 PHP 内部的 `类 / 函数 / 常量或第三方类 / 函数 / 常量` 之间的名字冲突

- 为很长的标识符名称(通常是为了缓解第一类问题而定义的)创建一个别名(或简短)的名称，提高源代码的可读性

#### 定义命名空间

默认情况下，所有常量、类和函数名都放在全局空间下，就和 PHP 支持命名空间之前一样

- 命名空间通过关键字 `namespace` 来声明

- 如果一个文件中包含命名空间，它必须在其它所有代码之前声明命名空间

- 语法格式如下；

```php
<?php
// 定义代码在 'MyProject' 命名空间中
namespace MyProject;

// ... 代码 ...
```

你也可以在同一个文件中定义不同的命名空间代码，如：

```php
<?php
namespace MyProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

namespace AnotherProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
?>
```

- 不过，我们并不建议使用这种语法在单个文件中定义多个命名空间

- 建议使用下面的大括号形式的语法

```php
<?php
namespace MyProject {
  const CONNECT_OK = 1;
  class Connection { /* ... */ }
  function connect() { /* ... */  }
}

namespace AnotherProject {
  const CONNECT_OK = 1;
  class Connection { /* ... */ }
  function connect() { /* ... */  }
}
?>
```

- 将全局的非命名空间中的代码与命名空间中的代码组合在一起，只能使用大括号形式的语法

- `全局代码` 必须用一个 `不带名称的 namespace 语句` 加上大括号括起来

```php
<?php
namespace MyProject {

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // 全局代码
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
?>
```

- 在声明命名空间之前唯一合法的代码是用于 `定义源文件编码方式` 的 `declare` 语句

  - 所有非 PHP 代码包括空白符都不能出现在命名空间的声明之前

```php
<?php
declare(encoding='UTF-8'); //定义多个命名空间和不包含在命名空间中的代码
namespace MyProject {
const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
}

namespace { // 全局代码
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
?>
```

- 以下代码会出现语法错误：

```php
<html>
<?php
namespace MyProject; // 命名空间前出现了 <html> 会致命错误 -　命名空间必须是程序脚本的第一条语句
?>
```

#### 子命名空间

与目录和文件的关系很像，PHP 命名空间也允许指定层次化的命名空间的名称

- 因此，命名空间的名字可以使用分层次的方式定义

```php
<?php
namespace MyProject\Sub\Level;  //声明分层次的单个命名空间

const CONNECT_OK = 1;
class Connection { /* ... */ }
function Connect() { /* ... */  }
?>
```

上面的例子创建了：

- 常量 `MyProject\Sub\Level\CONNECT_OK`

- 类 `MyProject\Sub\Level\Connection`

- 函数 `MyProject\Sub\Level\Connect`

#### 命名空间使用

PHP 命名空间中的类名可以通过三种方式引用：

- 非限定名称，或不包含前缀的类名称

  例如 `$a=new foo()` 或 `foo::staticmethod()`

  - 如果当前命名空间是 `currentnamespace` ，`foo` 将被解析为 `currentnamespace\foo`

  - 如果使用 `foo` 的代码是全局的，不包含在任何命名空间中的代码，则 `foo` 会被解析为 `foo`

> 警告：如果命名空间中的函数或常量 `未定义` ，则该非限定的函数名称或常量名称会被解析为 `全局函数名称` 或 `常量名称`

- 限定名称，或包含前缀的名称

  例如 `$a = new subnamespace\foo()` 或 `subnamespace\foo::staticmethod()`

  - 如果当前的命名空间是 `currentnamespace` ，则 `foo` 会被解析为 `currentnamespace\subnamespace\foo`

  - 如果使用 `foo` 的代码是全局的，不包含在任何命名空间中的代码，`foo` 会被解析为 `subnamespace\foo`

- 完全限定名称，或包含了全局前缀操作符的名称

  例如，`$a = new \currentnamespace\foo()` 或 `\currentnamespace\foo::staticmethod()`

  - 在这种情况下，`foo` 总是被解析为代码中的 `文字名 literal name` 、`currentnamespace\foo`

下面是一个使用这三种方式的实例：

- `file1.php 文件`

```php
<?php
namespace Foo\Bar\subnamespace;

const FOO = 1;
function foo() {}
class foo
{
  static function staticmethod() {}
}
?>
```

- `file2.php 文件`

```php
<?php
namespace Foo\Bar;
include 'file1.php';

const FOO = 2;
function foo() {}
class foo
{
  static function staticmethod() {}
}

/* 非限定名称 */
foo(); // 解析为函数 Foo\Bar\foo
foo::staticmethod(); // 解析为类 Foo\Bar\foo ，方法为 staticmethod
echo FOO; // 解析为常量 Foo\Bar\FOO

/* 限定名称 */
subnamespace\foo(); // 解析为函数 Foo\Bar\subnamespace\foo
subnamespace\foo::staticmethod(); // 解析为类 Foo\Bar\subnamespace\foo ，以及类的方法 staticmethod
echo subnamespace\FOO; // 解析为常量 Foo\Bar\subnamespace\FOO

/* 完全限定名称 */
\Foo\Bar\foo(); // 解析为函数 Foo\Bar\foo
\Foo\Bar\foo::staticmethod(); // 解析为类 Foo\Bar\foo, 以及类的方法 staticmethod
echo \Foo\Bar\FOO; // 解析为常量 Foo\Bar\FOO
?>
```

> #### 注意：
> - 访问任意全局类、函数或常量，都可以使用完全限定名称
> - 例如 `\strlen()` 或 `\Exception` 或 `\INI_ALL`

在命名空间内部访问全局类、函数和常量：

```php
<?php
namespace Foo;

function strlen() {}
const INI_ALL = 3;
class Exception {}

$a = \strlen('hi'); // 调用全局函数strlen
$b = \INI_ALL; // 访问全局常量 INI_ALL
$c = new \Exception('error'); // 实例化全局类 Exception
?>
```

> #### 注意：
> - 以上 `$a` 、`$b` 、`$c` 通过添加 `\` 访问的是全局状态下的 `strlen()` 、`INI_ALL` 、`Exception()` 进行相应赋值
> - 并不是当前命名空间 `Foo` 下的
> - 去掉 `\` 即是访问的当前命名空间 `Foo` 下的

#### 命名空间和动态语言特征

PHP 命名空间的实现受到其语言自身的动态特征的影响

- 因此，如果要将下面的代码转换到命名空间中动态访问元素：

- `example1.php 文件`

```php
<?php
class classname
{
  function __construct()
  {
    echo __METHOD__,"\n";
  }
}

function funcname()
{
  echo __FUNCTION__,"\n";
}

const constname = "global";

$a = 'classname';
$obj = new $a;
// 输出 classname::__construct

echo "\n";

$b = 'funcname';
$b();
// 输出 funcname

echo "\n";

echo constant('constname'), "\n";
// 输出 global

echo "\n";
```

- 必须使用完全限定名称(包括命名空间前缀的类名称)

> #### 注意：
> 因为在动态的 `类名称、函数名称或常量名称` 中，限定名称和完全限定名称没有区别，因此其前导的反斜杠是不必要的

#### 动态访问命名空间的元素

```php
<?php
namespace namespacename;
class classname
{
    function __construct()
    {
        echo __METHOD__,"\n";
    }
}
function funcname()
{
    echo __FUNCTION__,"\n";
}
const constname = "namespaced";

include 'example1.php';

$a = 'classname';
$obj = new $a; // 输出 classname::__construct
$b = 'funcname';
$b(); // 输出函数名
echo constant('constname'), "\n"; // 输出 global

/* 如果使用双引号，使用方法为 "\\namespacename\\classname"*/
$a = '\namespacename\classname';
$obj = new $a; // 输出 namespacename\classname::__construct
$a = 'namespacename\classname';
$obj = new $a; // 输出 namespacename\classname::__construct
$b = 'namespacename\funcname';
$b(); // 输出 namespacename\funcname
$b = '\namespacename\funcname';
$b(); // 输出 namespacename\funcname
echo constant('\namespacename\constname'), "\n"; // 输出 namespaced
echo constant('namespacename\constname'), "\n"; // 输出 namespaced
?>
```

#### `namespace` 关键字和 `__NAMESPACE__` 常量

PHP支持两种抽象的 `访问当前命名空间内部元素` 的方法：

- `__NAMESPACE__` 魔术常量

  - 常量 `__NAMESPACE__` 的值是包含 `当前命名空间名称的字符串`

  - 在全局的，不包括在任何命名空间中的代码，它包含 `一个空的字符串`

  - 在命名空间中的代码：

  ```php
  <?php
  namespace MyProject;

  echo '"', __NAMESPACE__, '"'; // 输出 "MyProject"
  ?>
  ```

  - 全局代码：

  ```php
  <?php
  echo '"', __NAMESPACE__, '"'; // 输出 ""
  ?>
  ```

  常量 `__NAMESPACE__` 在动态创建名称时很有用，例如：

  ```php
  <?php
  namespace MyProject;

  function get($classname)
  {
    $a = __NAMESPACE__ . '\\' . $classname;
    return new $a;
  }
  ?>
  ```

- `namespace` 关键字

  - 关键字 `namespace` 可用来显式访问当前命名空间或子命名空间中的元素

  - 它等价于类中的 `self` 操作符

  命名空间中的代码：

  ```php
  <?php
  namespace MyProject;

  use blah\blah as mine; // see "Using namespaces: importing/aliasing"

  blah\mine(); // calls function blah\blah\mine()
  namespace\blah\mine(); // calls function MyProject\blah\mine()

  namespace\func(); // calls function MyProject\func()
  namespace\sub\func(); // calls function MyProject\sub\func()
  namespace\cname::method(); // calls static method "method" of class MyProject\cname
  $a = new namespace\sub\cname(); // instantiates object of class MyProject\sub\cname
  $b = namespace\CONSTANT; // assigns value of constant MyProject\CONSTANT to $b
  ?>
  ```

  全局代码：

  ```php
  <?php
  namespace\func(); // calls function func()
  namespace\sub\func(); // calls function sub\func()
  namespace\cname::method(); // calls static method "method" of class cname
  $a = new namespace\sub\cname(); // instantiates object of class sub\cname
  $b = namespace\CONSTANT; // assigns value of constant CONSTANT to $b
  ?>
  ```

#### 使用命名空间：别名 / 导入

`PHP 命名空间支持` 有两种使用别名或导入方式：

- 为类名称使用别名

- 或为命名空间名称使用别名

- 使用 `use 操作符` 导入 / 使用别名

```php
<?php
namespace foo;
use My\Full\Classname as Another;

// 下面的例子与 use My\Full\NSname as NSname 相同
use My\Full\NSname;

// 导入一个全局类
use \ArrayObject;
// 如果不使用 "use \ArrayObject" ，则实例化一个 foo\ArrayObject 对象

$obj = new namespace\Another;
// 实例化 foo\Another 对象

$obj = new Another;
// 实例化 My\Full\Classname　对象

NSname\subns\func();
// 调用函数 My\Full\NSname\subns\func

$a = new ArrayObject(array(1));
// 实例化 ArrayObject 对象
?>
```

- 一行中包含多个 `use` 语句

```php
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // 实例化 My\Full\Classname 对象
NSname\subns\func(); // 调用函数 My\Full\NSname\subns\func
?>
```


- `导入` 和 `动态名称`

  导入操作是在编译执行的，但动态的类名称、函数名称或常量名称则不是

```php
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another;
// 实例化一个 My\Full\Classname 对象

$a = 'Another';
$obj = new $a;
// 实际化一个 Another 对象
?>
```

- `导入` 和 `完全限定名称`

  导入操作只影响 `非限定名称` 和 `限定名称`

  完全限定名称由于是 `确定的` ，故不受导入的影响

```php
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another;
// 实例化 My\Full\Classname 类

$obj = new \Another;
// 实例化 Another 类

$obj = new Another\thing;
// 实例化 My\Full\Classname\thing 类

$obj = new \Another\thing;
// 实例化 Another\thing 类
?>
```

#### 使用命名空间：后备全局函数 / 常量

在一个命名空间中，当 PHP 遇到一个 `非限定的类、函数或常量名称` 时，它使用不同的优先策略来解析该名称

- 类名称总是解析到当前命名空间中的名称

- 因此在访问系统内部或不包含在命名空间中的类名称时，必须使用完全限定名称

- 在命名空间中访问全局类：

```php
<?php
namespace A\B\C;
class Exception extends \Exception {}

$a = new Exception('hi');
// $a 是类 A\B\C\Exception 的一个对象

$b = new \Exception('hi');
// $b 是类 Exception 的一个对象

$c = new ArrayObject;
// 致命错误, 找不到 A\B\C\ArrayObject 类
?>
```

- 命名空间中后备的全局函数 / 常量：

  对于函数和常量来说，如果当前命名空间中不存在该函数或常量，PHP 会 `退而使用全局空间中的函数或常量`

```php
<?php
namespace A\B\C;

const E_ERROR = 45;
function strlen($str)
{
  return \strlen($str) - 1;
}

echo E_ERROR, "\n";
// 输出 "45"

echo INI_ALL, "\n";
// 输出 "7" - 使用全局常量 INI_ALL

echo strlen('hi'), "\n";
// 输出 "2"

if (is_array('hi')) { // 输出 "is not array"
  echo "is array\n";
} else {
  echo "is not array\n";
}
?>
```

#### 全局空间

如果没有定义任何命名空间，所有的类与函数的定义都是在全局空间，与 PHP 引入命名空间概念前一样

- 在名称前加上前缀 `\` 表示该名称是全局空间中的名称，即使该名称位于其它的命名空间中时也是如此

```php
<?php
namespace A\B\C;

/* 这个函数是 A\B\C\fopen */
function fopen() {
  /* ... */
  $f = \fopen(...); // 调用全局的fopen函数
  return $f;
}
?>
```

#### 命名空间的顺序

自从有了命名空间之后，最容易出错的该是使用类的时候，这个类的寻找路径是什么样的了

```php
<?php
namespace A;
use B\D, C\E as F;

//// 函数调用

foo();
// 首先尝试调用定义在命名空间"A"中的函数foo()
// 再尝试调用全局函数 "foo"

\foo();
// 调用全局空间函数 "foo"

my\foo();
// 调用定义在命名空间"A\my"中函数 "foo"

F();
// 首先尝试调用定义在命名空间"A"中的函数 "F"
// 再尝试调用全局函数 "F"


//// 类引用

new B();
// 创建命名空间 "A" 中定义的类 "B" 的一个对象
// 如果未找到，则尝试自动装载类 "A\B"

new D();
// 使用导入规则，创建命名空间 "B" 中定义的类 "D" 的一个对象
// 如果未找到，则尝试自动装载类 "B\D"

new F();
// 使用导入规则，创建命名空间 "C" 中定义的类 "E" 的一个对象
// 如果未找到，则尝试自动装载类 "C\E"

new \B();
// 创建定义在全局空间中的类 "B" 的一个对象
// 如果未发现，则尝试自动装载类 "B"

new \D();
// 创建定义在全局空间中的类 "D" 的一个对象
// 如果未发现，则尝试自动装载类 "D"

new \F();
// 创建定义在全局空间中的类 "F" 的一个对象
// 如果未发现，则尝试自动装载类 "F"


//// 调用另一个命名空间中的静态方法或命名空间函数

B\foo();
// 调用命名空间 "A\B" 中函数 "foo"

B::foo();
// 调用命名空间 "A" 中定义的类 "B" 的 "foo" 方法
// 如果未找到类 "A\B" ，则尝试自动装载类 "A\B"

D::foo();
// 使用导入规则，调用命名空间 "B" 中定义的类 "D" 的 "foo" 方法
// 如果类 "B\D" 未找到，则尝试自动装载类 "B\D"

\B\foo();
// 调用命名空间 "B" 中的函数 "foo"

\B::foo();
// 调用全局空间中的类 "B" 的 "foo" 方法
// 如果类 "B" 未找到，则尝试自动装载类 "B"


//// 当前命名空间中的静态方法或函数

A\B::foo();
// 调用命名空间 "A\A" 中定义的类 "B" 的 "foo" 方法
// 如果类 "A\A\B" 未找到，则尝试自动装载类 "A\A\B"

\A\B::foo();
// 调用命名空间 "A" 中定义的类 "B" 的 "foo" 方法
// 如果类 "A\B" 未找到，则尝试自动装载类 "A\B"
?>
```

名称解析遵循下列规则：

- 对完全限定名称的函数，类和常量的调用在编译时解析

  例如，`new \A\B` 解析为类 `A\B`

- 所有的非限定名称和限定名称(非完全限定名称)根据当前的导入规则在编译时进行转换

  例如，如果命名空间 `A\B\C` 被导入为 `C` ，那么对 `C\D\e()` 的调用就会被转换为 `A\B\C\D\e()`

- 在命名空间内部，所有的没有根据导入规则转换的限定名称均会在其前面加上当前的命名空间名称

  例如，在命名空间 `A\B` 内部调用 `C\D\e()` ，则 `C\D\e()` 会被转换为 `A\B\C\D\e()`

- 非限定类名根据当前的导入规则在编译时转换(用全名代替短的导入名称)

  例如，如果命名空间 `A\B\C` 导入为 `C` ，则 `new C()` 被转换为 `new A\B\C()`

- 在命名空间内部(例如 `A\B` )，对非限定名称的函数调用是在运行时解析的

  例如对函数 `foo()` 的调用是这样解析的：

  - 在当前命名空间中查找名为 `A\B\foo()` 的函数

  - 尝试查找并调用 `全局( global )` 空间中的函数 `foo()`

- 在命名空间(例如 `A\B` )内部对非限定名称或限定名称类(非完全限定名称)的调用是在运行时解析的

  下面是调用 `new C()` 及 `new D\E()` 的解析过程：

  - `new C()` 的解析：

    在当前命名空间中查找 `A\B\C` 类

    尝试自动装载类 `A\B\C`

  - `new D\E()` 的解析：

    在类名称前面加上当前命名空间名称变成：`A\B\D\E` ，然后查找该类

    尝试自动装载类 `A\B\D\E`

  - 为了引用全局命名空间中的全局类，必须使用完全限定名称 `new \C()`

#### 特例记录(来自网友的笔记)：

- 可以把非限定名称类比为文件名(例如 `comment.php` )

- 限定名称类比为相对路径名(例如 `./article/comment.php` )

- 完全限定名称类比为绝对路径名(例如 `/blog/article/comment.php`)

```php
<?php
// 创建空间 Blog
namespace Blog;

class Comment { }

// 非限定名称，表示当前空间 Blog
// 这个调用将被解析成 Blog\Comment()
$blog_comment = new Comment();

// 限定名称，类前面没有反斜杆 \ ，表示相对于空间 Blog
// 这个调用将被解析成 Blog\Article\Comment()
$article_comment = new Article\Comment();

// 完全限定名称，类前面有反斜杆 \ ，表示绝对于空间 Blog
// 这个调用将被解析成 Blog\Comment()
$article_comment = new \Blog\Comment();

// 完全限定名称，类前面有反斜杆 \ ，表示绝对于空间 Blog
// 这个调用将被解析成 Blog\Article\Comment()
$article_comment = new \Blog\Article\Comment();


// 创建 Blog 的子空间 Article
namespace Blog\Article;

class Comment { }
?>
```

[【更多内容可参考：PHP 命名空间 `Namespace` 的使用详解】](https://www.runoob.com/w3cnote/php-namespace-intro.html)


### PHP 面向对象

在面向对象的程序设计(英语：`Object-oriented programming` ，缩写：`OOP` )中，`对象是一个由信息及对信息进行处理的描述所组成的整体` ，是对现实世界的抽象

- 在现实世界里我们所面对的事情都是对象，如计算机、电视机、自行车等

#### 对象的主要三个特性：

- 对象的行为：

  可以给对象施加的操作，如开灯、关灯就是行为

- 对象的形态：

  当施加那些方法时对象如何响应，颜色，尺寸，外型

- 对象的表示：

  对象的表示就相当于身份证，具体区分在相同的行为与状态下有什么不同

比如 `Animal (动物)` 是一个抽象类，我们可以具体到一只狗跟一只羊，而狗跟羊就是具体的对象，他们有颜色属性，可以写，可以跑等行为状态：

![图片](https://www.runoob.com/wp-content/uploads/2016/05/animals.png)

#### 面向对象内容

- 类

  定义了一件事物的抽象特点

  类的定义包含了数据的形式以及对数据的操作

- 对象

  是类的实例

- 成员变量

  定义在类内部的变量

  该变量的值对外是不可见的，但是可以通过成员函数访问

  在类被实例化为对象后，该变量即可称为对象的属性

- 成员函数

  定义在类的内部，可用于访问对象的数据

- 继承

  继承性是子类自动共享父类数据结构和方法的机制，这是类之间的一种关系

  在定义和实现一个类的时候，可以在一个已经存在的类的基础之上来进行，把这个已经存在的类所定义的内容作为自己的内容，并加入若干新的内容

- 父类

  一个类被其他类继承，可将该类称为父类，或基类，或超类

- 子类

  一个类继承其他类称为子类，也可称为派生类

- 多态

  多态性是指相同的函数或方法可作用于多种类型的对象上并获得不同的结果

  不同的对象，收到同一消息可以产生不同的结果，这种现象称为多态性

- 重载

  简单说，就是函数或者方法有同样的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法

- 抽象性

  抽象性是指将具有一致的数据结构(属性)和行为(操作)的对象抽象成类

  一个类就是这样一种抽象，它反映了与应用有关的重要性质，而忽略其他一些无关内容

  任何类的划分都是主观的，但必须与具体的应用有关

- 封装

  封装是指将现实世界中存在的某个客体的属性与行为绑定在一起，并放置在一个逻辑单元内

- 构造函数

  主要用来在创建对象时初始化对象，即为对象成员变量赋初始值，总与 `new 运算符` 一起使用在创建对象的语句中

- 析构函数

  `析构函数 destructor` 与 `构造函数` 相反，当对象结束其生命周期时(例如对象所在的函数已调用完毕)，系统自动执行析构函数

  析构函数往往用来做 `清理善后` 的工作(例如在建立对象时用 `new` 开辟了一片内存空间，应在退出前在析构函数中用 `delete` 释放)

下图中我们通过 `Car` 类 创建了三个对象：`Mercedes` 、`Bmw` 和 `Audi`

```php
$mercedes = new Car ();
$bmw = new Car ();
$audi = new Car ();
```

![图片](https://www.runoob.com/wp-content/uploads/2016/05/1462335800-8110-classes-and-objects.jpg)

#### PHP 类定义

PHP 定义类通常语法格式如下：

```php
<?php
class phpClass {
  var $var1;
  var $var2 = "constant string";

  function myfunc ($arg1, $arg2) {
    [..]
  }
  [..]
}
?>
```

- 类使用 `class` 关键字后加上类名定义

- 类名后的一对大括号 `{}` 内可以定义变量和方法

- 类的变量使用 `var` 来声明, 变量也可以初始化值

- 函数定义类似 `PHP` 函数的定义，但函数只能通过该类及其实例化的对象访问

```php
<?php
class Site {
  /* 成员变量 */
  var $url;
  var $title;

  /* 成员函数 */
  function setUrl($par){
    $this->url = $par;
  }

  function getUrl(){
    echo $this->url . PHP_EOL;
  }

  function setTitle($par){
    $this->title = $par;
  }

  function getTitle(){
    echo $this->title . PHP_EOL;
  }
}
?>
```

> 变量 `$this` 代表自身的对象

#### PHP 中创建对象

类创建后，我们可以使用 `new` 运算符来实例化该类的对象：

```php
$runoob = new Site;
$taobao = new Site;
$google = new Site;
```

> 以上代码是我们根据前面提到的 class 类 `Site` 创建了三个对象
> - 三个对象各自都是独立的，接下来我们来看看如何访问成员方法与成员变量

#### 调用成员方法

在实例化对象后，我们可以使用该对象调用成员方法，该对象的成员方法只能操作该对象的成员变量：

```php
// 调用成员函数，设置标题和URL
$runoob->setTitle( "菜鸟教程" );
$taobao->setTitle( "淘宝" );
$google->setTitle( "Google 搜索" );

$runoob->setUrl( 'www.runoob.com' );
$taobao->setUrl( 'www.taobao.com' );
$google->setUrl( 'www.google.com' );

// 调用成员函数，获取标题和URL
$runoob->getTitle();
$taobao->getTitle();
$google->getTitle();

$runoob->getUrl();
$taobao->getUrl();
$google->getUrl();
```

- 完整代码如下：

```php
<?php
class Site {
  /* 成员变量 */
  var $url;
  var $title;

  /* 成员函数 */
  function setUrl($par){
    $this->url = $par;
  }

  function getUrl(){
    echo $this->url . PHP_EOL;
  }

  function setTitle($par){
    $this->title = $par;
  }

  function getTitle(){
    echo $this->title . PHP_EOL;
  }
}

$runoob = new Site;
$taobao = new Site;
$google = new Site;

// 调用成员函数，设置标题和URL
$runoob->setTitle( "菜鸟教程" );
$taobao->setTitle( "淘宝" );
$google->setTitle( "Google 搜索" );

$runoob->setUrl( 'www.runoob.com' );
$taobao->setUrl( 'www.taobao.com' );
$google->setUrl( 'www.google.com' );

// 调用成员函数，获取标题和URL
$runoob->getTitle();
$taobao->getTitle();
$google->getTitle();

$runoob->getUrl();
$taobao->getUrl();
$google->getUrl();
?>
```

- 执行以上代码，输出结果为：

```
菜鸟教程
淘宝
Google 搜索
www.runoob.com
www.taobao.com
www.google.com
```

#### PHP 构造函数

> 构造函数是一种特殊的方法

主要用来在创建对象时初始化对象，即为对象成员变量赋初始值，在创建对象的语句中与 `new` 运算符一起使用

- `PHP 5` 允许开发者在一个类中定义一个方法作为构造函数，语法格式如下：

```
void __construct ([ mixed $args [, $... ]] )
```

- 在前面的例子中我们就可以通过构造方法来初始化 `$url` 和 `$title` 变量：

```php
function __construct( $par1, $par2 ) {
   $this->url = $par1;
   $this->title = $par2;
}
```

- 现在我们就不需要再调用 `setTitle` 和 `setUrl` 方法了：

```php
$runoob = new Site('www.runoob.com', '菜鸟教程');
$taobao = new Site('www.taobao.com', '淘宝');
$google = new Site('www.google.com', 'Google 搜索');

// 调用成员函数，获取标题和URL
$runoob->getTitle();
$taobao->getTitle();
$google->getTitle();

$runoob->getUrl();
$taobao->getUrl();
$google->getUrl();
```

#### 析构函数

`析构函数 destructor` 与 `构造函数` 相反，当 `对象结束其生命周期` 时(例如对象所在的函数已调用完毕)，`系统自动执行析构函数`

- `PHP 5` 引入了析构函数的概念，这类似于其它面向对象的语言，其语法格式如下：

```
void __destruct ( void )
```

实例：

```php
<?php
class MyDestructableClass {
  function __construct() {
    print "构造函数\n";
    $this->name = "MyDestructableClass";
  }

  function __destruct() {
    print "销毁 " . $this->name . "\n";
  }
}

$obj = new MyDestructableClass();
?>
```

执行以上代码，输出结果为：

```
构造函数
销毁 MyDestructableClass
```

#### 继承

PHP 使用关键字 `extends` 来继承一个类，`PHP 不支持多继承` ，格式如下：

```
class Child extends Parent {
  // 代码部分
}
```

以下实例中 `Child_Site` 类继承了 `Site` 类，并扩展了功能：

```php
<?php
// 子类扩展站点类别
class Child_Site extends Site {
  var $category;

  function setCate($par){
    $this->category = $par;
  }

  function getCate(){
    echo $this->category . PHP_EOL;
  }
}
```

#### 方法重写

如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的 `覆盖 override` ，也称为方法的重写

- 实例中重写了 `getUrl` 与 `getTitle` 方法：

```php
// ... 其他代码

function getUrl() {
  echo $this->url . PHP_EOL;
  return $this->url;
}

function getTitle(){
  echo $this->title . PHP_EOL;
  return $this->title;
}
```

#### 访问控制

PHP 对属性或方法的访问控制，是通过在前面添加关键字 `public(公有)` ，`protected(受保护)` 或 `private(私有)` 来实现的：

- public(公有)

  公有的类成员可以在任何地方被访问

- protected(受保护)

  受保护的类成员则可以被其自身以及其子类和父类访问

- private(私有)

  私有的类成员则只能被其定义所在的类访问

#### 属性的访问控制

类属性必须定义为公有，受保护，私有之一

- 如果用 `var` 定义，则被视为公有

```php
<?php
/**
 * Define MyClass
 */
class MyClass
{
  public $public = 'Public';
  protected $protected = 'Protected';
  private $private = 'Private';

  function printHello()
  {
    echo $this->public;
    echo $this->protected;
    echo $this->private;
  }
}

$obj = new MyClass();
echo $obj->public; // 这行能被正常执行
echo $obj->protected; // 这行会产生一个致命错误
echo $obj->private; // 这行也会产生一个致命错误
$obj->printHello(); // 输出 Public、Protected 和 Private


/**
 * Define MyClass2
 */
class MyClass2 extends MyClass
{
  // 可以对 public 和 protected 进行重定义，但 private 而不能
  protected $protected = 'Protected2';

  function printHello()
  {
    echo $this->public;
    echo $this->protected;
    echo $this->private;
  }
}

$obj2 = new MyClass2();
echo $obj2->public; // 这行能被正常执行
echo $obj2->private; // 未定义 private
echo $obj2->protected; // 这行会产生一个致命错误
$obj2->printHello(); // 输出 Public、Protected2 和 Undefined
?>
```

#### 方法的访问控制

类中的方法可以被定义为公有，私有或受保护

- 如果没有设置这些关键字，则该方法默认为公有

```php
<?php
/**
 * Define MyClass
 */
class MyClass
{
  // 声明一个公有的构造函数
  public function __construct() { }

  // 声明一个公有的方法
  public function MyPublic() { }

  // 声明一个受保护的方法
  protected function MyProtected() { }

  // 声明一个私有的方法
  private function MyPrivate() { }

  // 此方法为公有
  function Foo()
  {
    $this->MyPublic();
    $this->MyProtected();
    $this->MyPrivate();
  }
}

$myclass = new MyClass;
$myclass->MyPublic(); // 这行能被正常执行
$myclass->MyProtected(); // 这行会产生一个致命错误
$myclass->MyPrivate(); // 这行会产生一个致命错误
$myclass->Foo(); // 公有，受保护，私有都可以执行


/**
 * Define MyClass2
 */
class MyClass2 extends MyClass
{
  // 此方法为公有
  function Foo2()
  {
    $this->MyPublic();
    $this->MyProtected();
    $this->MyPrivate(); // 这行会产生一个致命错误
  }
}

$myclass2 = new MyClass2;
$myclass2->MyPublic(); // 这行能被正常执行
$myclass2->Foo2(); // 公有的和受保护的都可执行，但私有的不行

class Bar
{
  public function test() {
    $this->testPrivate();
    $this->testPublic();
  }

  public function testPublic() {
    echo "Bar::testPublic\n";
  }

  private function testPrivate() {
    echo "Bar::testPrivate\n";
  }
}

class Foo extends Bar
{
  public function testPublic() {
    echo "Foo::testPublic\n";
  }

  private function testPrivate() {
    echo "Foo::testPrivate\n";
  }
}

$myFoo = new foo();
$myFoo->test();
// Bar::testPrivate
// Foo::testPublic
?>
```

#### 接口

使用 `接口 interface` ，可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体内容

- 接口是通过 `interface` 关键字来定义的，就像 `定义一个标准的类一样` ，但其中 `定义所有的方法都是空的`

- 接口中定义的所有方法都 `必须是公有` ，这是接口的特性


- 要实现一个接口，使用 `implements 操作符`

  - 类中 `必须实现接口中定义的所有方法` ，否则会报一个致命错误

  - 类可以实现多个接口，用逗号来分隔多个接口的名称

```php
<?php

// 声明一个'iTemplate'接口
interface iTemplate
{
  public function setVariable($name, $var);
  public function getHtml($template);
}


// 实现接口
class Template implements iTemplate
{
  private $vars = array();

  public function setVariable($name, $var)
  {
    $this->vars[$name] = $var;
  }

  public function getHtml($template)
  {
    foreach($this->vars as $name => $value) {
      $template = str_replace('{' . $name . '}', $value, $template);
    }

    return $template;
  }
}
```

#### 常量

可以把在类中始终保持不变的值定义为常量

- 在定义和使用常量的时候 `不需要` 使用 `$` 符号

- 常量的值 `必须是一个定值` ，不能是变量，类属性，数学运算的结果或函数调用

- 自 `PHP 5.3.0` 起，可以用一个变量来动态调用类

  - 但该变量的值不能为关键字(如 `self` ，`parent` 或 `static` )

```php
<?php
class MyClass
{
  const constant = '常量值';

  function showConstant() {
    echo  self::constant . PHP_EOL;
  }
}

echo MyClass::constant . PHP_EOL;

$classname = "MyClass";
echo $classname::constant . PHP_EOL; // 自 5.3.0 起

$class = new MyClass();
$class->showConstant();

echo $class::constant . PHP_EOL; // 自 PHP 5.3.0 起
?>
```

> 在访问 `PHP 类` 中的成员变量或方法时
> - 如果被引用的变量或者方法被声明成 `const`(定义常量)或者 `static`(声明静态)，那么就必须使用操作符 `::`
>> 如果从类的内部访问 `const` 或者 `static` 变量或者方法，那么就必须使用自引用的 `self`
> - 反之如果被引用的变量或者方法没有被声明成 `const` 或者 `static` ，那么就必须使用操作符 `->`
>> 反之如果从类的内部访问不为 `const` 或者 `static` 变量或者方法，那么就必须使用自引用的 `$this`

#### 抽象类

任何一个类，如果它里面至少有一个方法是被声明为抽象的，那么这个类就必须被声明为抽象的

- 定义为抽象的类不能被实例化

- 被定义为抽象的方法只是声明了其调用方式(参数)，不能定义其具体的功能实现

- 继承一个抽象类的时候，子类必须定义父类中的所有抽象方法

  - 另外，这些方法的访问控制必须和父类中一样(或者更为宽松)

  - 例如某个抽象方法被声明为受保护的，那么子类中实现的方法就应该声明为受保护的或者公有的，而不能定义为私有的

```php
<?php
abstract class AbstractClass
{
 // 强制要求子类定义这些方法
  abstract protected function getValue();
  abstract protected function prefixValue($prefix);

  // 普通方法(非抽象方法)
  public function printOut() {
    print $this->getValue() . PHP_EOL;
  }
}

class ConcreteClass1 extends AbstractClass
{
  protected function getValue() {
    return "ConcreteClass1";
  }

  public function prefixValue($prefix) {
    return "{$prefix}ConcreteClass1";
  }
}

class ConcreteClass2 extends AbstractClass
{
  public function getValue() {
    return "ConcreteClass2";
  }

  public function prefixValue($prefix) {
    return "{$prefix}ConcreteClass2";
  }
}

$class1 = new ConcreteClass1;
$class1->printOut();
echo $class1->prefixValue('FOO_') . PHP_EOL;

$class2 = new ConcreteClass2;
$class2->printOut();
echo $class2->prefixValue('FOO_') . PHP_EOL;
?>
```

执行以上代码，输出结果为：

```
ConcreteClass1
FOO_ConcreteClass1
ConcreteClass2
FOO_ConcreteClass2
```

- 此外，子类方法可以包含父类抽象方法中不存在的可选参数

  - 例如，子类定义了一个可选参数，而父类抽象方法的声明里没有，则也是可以正常运行的

```php
<?php
abstract class AbstractClass
{
  // 我们的抽象方法仅需要定义需要的参数
  abstract protected function prefixName($name);
}

class ConcreteClass extends AbstractClass
{
  // 我们的子类可以定义父类签名中不存在的可选参数
  public function prefixName($name, $separator = ".") {
    if ($name == "Pacman") {
      $prefix = "Mr";
    } elseif ($name == "Pacwoman") {
      $prefix = "Mrs";
    } else {
      $prefix = "";
    }
    return "{$prefix}{$separator} {$name}";
  }
}

$class = new ConcreteClass;
echo $class->prefixName("Pacman"), "\n";
echo $class->prefixName("Pacwoman"), "\n";
?>
```

#### static 关键字

声明类属性或方法为 `static 静态` ，就可以不实例化类而直接访问

- 静态属性不能通过一个类已实例化的对象来访问，但 `静态方法可以`

- 由于静态方法不需要通过对象即可调用，所以伪变量 `$this` 在静态方法中不可用

- 静态属性不可以由对象通过 `->` 操作符来访问

- 自 `PHP 5.3.0` 起，可以用一个变量来动态调用类

  - 但该变量的值不能为关键字 `self` ，`parent` 或 `static`

```php
<?php
class Foo {
  public static $my_static = 'foo';

  public function staticValue() {
    return self::$my_static;
  }
}

print Foo::$my_static . PHP_EOL;
$foo = new Foo();

print $foo->staticValue() . PHP_EOL;
?>
```

执行以上程序，输出结果为：

```
foo
foo
```

#### final 关键字

`PHP 5` 新增了一个 `final` 关键字

- 如果父类中的方法被声明为 `final` ，则子类无法覆盖该方法

- 如果一个类被声明为 `final` ，则不能被继承

- 以下代码执行会报错：

```php
<?php
class BaseClass {
  public function test() {
    echo "BaseClass::test() called" . PHP_EOL;
  }

  final public function moreTesting() {
    echo "BaseClass::moreTesting() called"  . PHP_EOL;
  }
}

class ChildClass extends BaseClass {
  public function moreTesting() {
    echo "ChildClass::moreTesting() called"  . PHP_EOL;
  }
}

// 报错信息 Fatal error: Cannot override final method BaseClass::moreTesting()
?>
```

#### 调用父类构造方法

PHP 不会在子类的构造方法中自动的调用父类的构造方法

- 要执行父类的构造方法，需要在子类的构造方法中调用 `parent::__construct()`

```php
<?php
class BaseClass {
  function __construct() {
    print "BaseClass 类中构造方法" . PHP_EOL;
  }
}

class SubClass extends BaseClass {
  function __construct() {
    parent::__construct();
    // 子类构造方法不能自动调用父类的构造方法

    print "SubClass 类中构造方法" . PHP_EOL;
  }
}

class OtherSubClass extends BaseClass {
  // 继承 BaseClass 的构造方法
}

// 调用 BaseClass 构造方法
$obj = new BaseClass();

// 调用 BaseClass、SubClass 构造方法
$obj = new SubClass();

// 调用 BaseClass 构造方法
$obj = new OtherSubClass();
?>
```

执行以上程序，输出结果为：

```
BaseClass 类中构造方法
BaseClass 类中构造方法
SubClass 类中构造方法
BaseClass 类中构造方法
```

### PHP 测验

[【详细可点击查看：菜鸟教程 PHP 测验】](https://www.runoob.com/quiz/php-quiz.html)


## PHP 表单

PHP 中的 `$_GET` 和 `$_POST` 变量用于检索表单中的信息，比如用户输入

### PHP 表单处理

> 有一点很重要的事情值得注意，当处理 `HTML 表单` 时，PHP 能把来自 `HTML 页面` 中的 `表单元素自动变成可供 PHP 脚本` 使用

下面的实例包含了一个 HTML 表单，带有两个输入框和一个提交按钮

- `form.html 文件` 代码：

```html
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<form action="welcome.php" method="post">
名字: <input type="text" name="fname">
年龄: <input type="text" name="age">
<input type="submit" value="提交">
</form>

</body>
</html>
```

- 当用户填写完上面的表单并点击提交按钮时，表单的数据会被送往名为 `welcome.php` 的 PHP 文件：

- `welcome.php 文件` 代码：

```php
欢迎<?php echo $_POST["fname"]; ?>!<br>
你的年龄是 <?php echo $_POST["age"]; ?> 岁。
```

- 通过浏览器访问演示如下：

![表单](https://www.runoob.com/wp-content/uploads/2013/08/form1.gif)

> 我们将在后面讲解 PHP 中的 `$_GET` 和 `$_POST` 变量

#### PHP 获取下拉菜单的数据

- 下拉菜单单选

  以下实例我们设置了下拉菜单三个选项：

  - 表单使用 GET 方式获取数据

  - action 属性值为空表示提交到当前脚本

  - 我们可以通过 select 的 name 属性获取下拉菜单的值

  - `php_form_select.php 文件` 代码：

```php
<?php
$q = isset($_GET['q'])? htmlspecialchars($_GET['q']) : '';
if($q) {
  if($q =='RUNOOB') {
    echo '菜鸟教程<br>http://www.runoob.com';
  } else if($q =='GOOGLE') {
    echo 'Google 搜索<br>http://www.google.com';
  } else if($q =='TAOBAO') {
    echo '淘宝<br>http://www.taobao.com';
  }
} else {
?>
<form action="" method="get">
    <select name="q">
    <option value="">选择一个站点:</option>
    <option value="RUNOOB">Runoob</option>
    <option value="GOOGLE">Google</option>
    <option value="TAOBAO">Taobao</option>
    </select>
    <input type="submit" value="提交">
    </form>
<?php
}
?>
```

- 下拉菜单多选

  如果下拉菜单是多选的 `multiple="multiple"` ，我们可以通过将设置 `select name="q[]"` 以数组的方式获取

  以下使用 POST 方式提交，代码如下所示：

  - `php_form_select_mul.php 文件` 代码：

```php
<?php
$q = isset($_POST['q'])? $_POST['q'] : '';
if(is_array($q)) {
  $sites = array(
    'RUNOOB' => '菜鸟教程: http://www.runoob.com',
    'GOOGLE' => 'Google 搜索: http://www.google.com',
    'TAOBAO' => '淘宝: http://www.taobao.com',
  );
  foreach($q as $val) {
    // PHP_EOL 为常量，用于换行
    echo $sites[$val] . PHP_EOL;
  }
} else {
?>

<form action="" method="post">
  <select multiple="multiple" name="q[]">
    <option value="">选择一个站点:</option>
    <option value="RUNOOB">Runoob</option>
    <option value="GOOGLE">Google</option>
    <option value="TAOBAO">Taobao</option>
  </select>
  <input type="submit" value="提交">
</form>

<?php
}
?>
```

#### 单选按钮表单

单选按钮表单中 `name 属性的值` 是一致的，`value 值` 是不同的，代码如下所示：

- `php_form_radio.php 文件` 代码：

```php
<?php
$q = isset($_GET['q'])? htmlspecialchars($_GET['q']) : '';
if($q) {
  if($q =='RUNOOB') {
    echo '菜鸟教程<br>http://www.runoob.com';
  } else if($q =='GOOGLE') {
    echo 'Google 搜索<br>http://www.google.com';
  } else if($q =='TAOBAO') {
    echo '淘宝<br>http://www.taobao.com';
  }
} else {
?>

<form action="" method="get">
  <input type="radio" name="q" value="RUNOOB" />Runoob
  <input type="radio" name="q" value="GOOGLE" />Google
  <input type="radio" name="q" value="TAOBAO" />Taobao
  <input type="submit" value="提交">
</form>

<?php
}
?>
```

#### checkbox 复选框

checkbox 复选框可以选择多个值

- `php_form_select_checkbox.php 文件` 代码：

```php
<?php
$q = isset($_POST['q'])? $_POST['q'] : '';
if(is_array($q)) {
  $sites = array(
    'RUNOOB' => '菜鸟教程: http://www.runoob.com',
    'GOOGLE' => 'Google 搜索: http://www.google.com',
    'TAOBAO' => '淘宝: http://www.taobao.com',
  );
  foreach($q as $val) {
    // PHP_EOL 为常量，用于换行
    echo $sites[$val] . PHP_EOL;
  }
} else {
?>

<form action="" method="post">
  <input type="checkbox" name="q[]" value="RUNOOB"> Runoob<br>
  <input type="checkbox" name="q[]" value="GOOGLE"> Google<br>
  <input type="checkbox" name="q[]" value="TAOBAO"> Taobao<br>
  <input type="submit" value="提交">
</form>

<?php
}
?>
```

### 表单验证

- 我们应该尽可能的对用户的输入进行验证(通过客户端脚本)

  - 浏览器验证速度更快，并且可以减轻服务器的压力

- 如果用户输入需要插入数据库，我们应该考虑使用服务器验证

  - 在服务器验证表单的一种好的方式是，把表单的数据传给当前页面(异步提交的方式更好)，而不是跳转到不同的页面

  - 这样用户就可以在同一张表单页面得到错误信息

  - 用户也就更容易发现错误了

> 在处理 PHP 表单时我们需要考虑安全性
>> 为了防止黑客及垃圾信息，我们需要对表单进行数据安全验证

```php
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  <style>
    .error {color: #FF0000;}
  </style>
</head>

<body>

<?php
// 定义变量并默认设置为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
  if (empty($_POST["name"]))
  {
    $nameErr = "名字是必需的";
  }
  else
  {
    $name = test_input($_POST["name"]);
    // 检测名字是否只包含字母跟空格
    if (!preg_match("/^[a-zA-Z ]*$/",$name))
    {
      $nameErr = "只允许字母和空格";
    }
  }

  if (empty($_POST["email"]))
  {
    $emailErr = "邮箱是必需的";
  }
  else
  {
    $email = test_input($_POST["email"]);
    // 检测邮箱是否合法
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email))
    {
      $emailErr = "非法邮箱格式";
    }
  }

  if (empty($_POST["website"]))
  {
    $website = "";
  }
  else
  {
    $website = test_input($_POST["website"]);
    // 检测 URL 地址是否合法
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website))
    {
      $websiteErr = "非法的 URL 的地址";
    }
  }

  if (empty($_POST["comment"]))
  {
    $comment = "";
  }
  else
  {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"]))
  {
    $genderErr = "性别是必需的";
  }
  else
  {
    $gender = test_input($_POST["gender"]);
  }
}

function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<h2>PHP 表单验证实例</h2>
<p><span class="error">* 必需字段。</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  名字: <input type="text" name="name" value="<?php echo $name;?>">
  <span class="error">* <?php echo $nameErr;?></span>
  <br><br>
  E-mail: <input type="text" name="email" value="<?php echo $email;?>">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>
  网址: <input type="text" name="website" value="<?php echo $website;?>">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  备注: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
  <br><br>
  性别:
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?> value="female">女
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?> value="male">男
  <span class="error">* <?php echo $genderErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Submit">
</form>

<?php
echo "<h2>输入的内容是:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $website;
echo "<br>";
echo $comment;
echo "<br>";
echo $gender;
?>

</body>
</html>
```

上述表单验证规则如下：

字段|验证规则
-|-
名字|必须，只能包含字母和空格
E-mail|必须，必须是一个有效的电子邮件地址(包含 `@` 和 `.` )
网址|可选，如果存在，它必须包含一个有效的 `URL`
备注|可选，多行输入字段(文本域)
性别|必须，必须选择一个

#### 文本字段

`名字` 、`E-mail` 及 `网址` 字段为文本输入元素，`备注` 字段是 `textarea`

- HTML 代码如下所示：

```php
名字: <input type="text" name="name">
E-mail: <input type="text" name="email">
网址: <input type="text" name="website">
备注: <textarea name="comment" rows="5" cols="40"></textarea>
```

#### 单选按钮

`性别` 字段是单选按钮，HTML 代码如下所示：

```php
性别:
<input type="radio" name="gender" value="female">女
<input type="radio" name="gender" value="male">男
```

#### 表单元素
HTML 表单代码如下所示：

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
```

- 该表单使用 `method="post"` 方法来提交数据

- `$_SERVER["PHP_SELF"]` 会发送表单数据到当前页面，而不是跳转到不同的页面

> #### 什么是 `$_SERVER["PHP_SELF"]` 变量?
> `$_SERVER["PHP_SELF"]` 是超级全局变量，返回当前正在执行脚本的文件名，与 `document root` 相关

> #### 什么是 `htmlspecialchars()` 方法?
> `htmlspecialchars()` 函数把一些预定义的字符转换为 HTML 实体
>> 预定义的字符是：
>> - `&`(和号) 成为 `&amp;`
>> - `"`(双引号) 成为 `&quot;`
>> - `'`(单引号) 成为 `&#039;`
>> - `<`(小于) 成为 `&lt;`
>> - `>`(大于) 成为 `&gt;`

#### PHP 表单中的漏洞

> `$_SERVER["PHP_SELF"]` 变量有可能会被黑客使用！
> - 当黑客使用跨网站脚本的 `HTTP 链接` 来攻击时，`$_SERVER["PHP_SELF"]` 服务器变量也会被植入脚本
> - 原因就是跨网站脚本是附在执行文件的路径后面的，因此 `$_SERVER["PHP_SELF"]` 的字符串就会包含 `HTTP 链接` 后面的 `JavaScript 程序代码`
>> `XSS` 又叫 `CSS (Cross-Site Script)` ，跨站脚本攻击
>> - 恶意攻击者往 `Web 页面` 里插入 `恶意 html 代码` ，当用户浏览该页之时，嵌入其中 Web 里面的 html 代码会被执行，从而达到恶意用户的特殊目的

例如，现在指定以下表单文件名为 `test_form.php` ：

```php
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
```

- 现在，我们使用 URL 来指定提交地址 `test_form.php` ，以上代码修改为如下所示：

```php
<form method="post" action="test_form.php">
```

- 这样做就很好了

但是，考虑到用户会在浏览器地址栏中输入以下地址：

```
http://www.runoob.com/test_form.php/%22%3E%3Cscript%3Ealert('hacked')%3C/script%3E
```

- 以上的 URL 中，将被解析为如下代码并执行：

```php
<form method="post" action="test_form.php/"><script>alert('hacked')</script>
```

- 代码中添加了 script 标签，并添加了 alert 命令

  - 当页面载入时会执行该 Javascript 代码(用户会看到弹出框)

  - 这仅仅只是一个简单的实例来说明 `PHP_SELF 变量` 会被黑客利用

> #### 请注意
> 任何 JavaScript 代码可以添加在 `<script>` 标签中！
> - 黑客可以利用这点重定向页面到另外一台服务器的页面上，页面代码文件中可以保护恶意代码，代码可以修改全局变量或者获取用户的表单数据

#### 如何避免 `$_SERVER["PHP_SELF"]` 被利用

`$_SERVER["PHP_SELF"]` 可以通过 `htmlspecialchars()` 函数来避免被利用

- form 代码如下所示：

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
```

- `htmlspecialchars()` 把一些预定义的字符转换为 HTML 实体

- 现在如果用户想利用 `PHP_SELF` 变量, 结果将输出如下所示：

```php
<form method="post" action="test_form.php/&quot;&gt;&lt;script&gt;alert('hacked')&lt;/script&gt;">
```

- 尝试该漏洞失败！

#### 使用 PHP 验证表单数据

- 首先我们对用户所有提交的数据都通过 PHP 的 `htmlspecialchars()` 函数处理

  当我们使用 `htmlspecialchars()` 函数时，在用户尝试提交以下文本域：

  ```php
  <script>location.href('http://www.runoob.com')</script>
  ```

  该代码将不会被执行，因为它会被保存为 HTML 转义代码，如下所示：

  ```php
  &lt;script&gt;location.href('http://www.runoob.com')&lt;/script&gt;
  ```

  - 以上代码是安全的，可以正常在页面显示或者插入邮件中

- 当用户提交表单时，我们将做以下两件事情：

  - 使用 PHP 的 `trim()` 函数去除用户输入数据中不必要的字符，如：`空格` 、`tab` 、`换行`

  - 使用 PHP 的 `stripslashes()` 函数去除用户输入数据中的反斜杠 `\`

- 接下来让我们将这些过滤的函数写在一个我们自己定义的函数中，这样可以大大提高代码的复用性

  - 将函数命名为 `test_input()`

  - 现在，我们可以通过 `test_input()` 函数来检测 `$_POST` 中的所有变量, 脚本代码如下所示：

  ```php
  <?php
  // 定义变量并默认设置为空值
  $name = $email = $gender = $comment = $website = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST")
  {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $website = test_input($_POST["website"]);
    $comment = test_input($_POST["comment"]);
    $gender = test_input($_POST["gender"]);
  }

  function test_input($data)
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  ?>
  ```

> #### 注意
> 我们在执行以上脚本时，会通过 `$_SERVER["REQUEST_METHOD"]` 来检测表单是否被提交
> - 如果 `REQUEST_METHOD` 是 `POST` ，表单将被提交(数据将被验证)
> - 如果表单未提交将跳过验证并显示空白
>> 在以上实例中使用输入项都是可选的，即使用户不输入任何数据也可以正常显示

### 表单必需字段及错误信息

> 我们来介绍如何设置表单必需字段及错误信息

在前面我们已经介绍了下表的验证规则，我们可以看到 `名字` 、`E-mail` 、`性别` 这三个字段是必需的，且不能为空

字段|验证规则
-|-
名字|必须，只能包含字母和空格
E-mail|必须，必须是一个有效的电子邮件地址(包含 `@` 和 `.` )
网址|可选，如果存在，它必须包含一个有效的 `URL`
备注|可选，多行输入字段(文本域)
性别|必须，必须选择一个

在以下代码中我们加入了一些新的变量，这些错误变量将显示在必需字段上:

- $nameErr
- $emailErr
- $genderErr
- $websiteErr

> 我们还为每个 `$_POST` 变量增加了一个 `if else` 语句
> - 这些语句将检查 `$_POST` 变量是否为空(使用 php 的 `empty()` 函数)
> - 如果为空，将显示对应的错误信息
> - 如果不为空，数据将传递给 `test_input()` 函数

```php
<?php
// 定义变量并默认设为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "名字是必需的。";
  } else {
    $name = test_input($_POST["name"]);
  }

  if (empty($_POST["email"])) {
    $emailErr = "邮箱是必需的。";
  } else {
    $email = test_input($_POST["email"]);
  }

  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "性别是必需的。";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}
?>
```

#### PHP 显示错误信息

在以下的 HTML 实例表单中，我们为每个字段中添加了一些脚本，各个脚本会在信息输入错误时显示错误信息(如果用户未填写信息就提交表单则会输出错误信息)：

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
   名字: <input type="text" name="name">
   <span class="error">* <?php echo $nameErr;?></span>
   <br><br>
   E-mail: <input type="text" name="email">
   <span class="error">* <?php echo $emailErr;?></span>
   <br><br>
   网址: <input type="text" name="website">
   <span class="error"><?php echo $websiteErr;?></span>
   <br><br>
   备注: <textarea name="comment" rows="5" cols="40"></textarea>
   <br><br>
   性别:
   <input type="radio" name="gender" value="female">女
   <input type="radio" name="gender" value="male">男
   <span class="error">* <?php echo $genderErr;?></span>
   <br><br>
   <input type="submit" name="submit" value="Submit">
</form>
```

### 验证邮件和 URL

我们将介绍如何验证 names (名称)，e-mails (邮件)，和 URLs

#### 验证名称

以下代码将通过简单的方式来检测 `name 字段` 是否包含字母和空格，如果 name 字段值不合法，将输出错误信息：

```php
$name = test_input($_POST["name"]);
if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
  $nameErr = "只允许字母和空格";
}
```

> #### `preg_match()` 函数表示进行正则表达式匹配
> 语法：int preg_match ( string $pattern , string $subject [, array $matches [, int $flags ]] )
> - 在 `subject` 字符串中搜索与 `pattern` 给出的正则表达式相匹配的内容
> - 如果提供了 `matches` ，则其会被搜索的结果所填充
> - `$matches[0]` 将包含与整个模式匹配的文本，`$matches[1]` 将包含与第一个捕获的括号中的子模式所匹配的文本，以此类推

#### 验证邮件

以下代码将通过简单的方式来检测 e-mail 地址是否合法

- 如果 e-mail 地址不合法，将输出错误信息：

```php
$email = test_input($_POST["email"]);
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
  $emailErr = "非法邮箱格式";
}
```

#### 验证 URL

以下代码将检测 URL 地址是否合法(以下正则表达式运行 URL 中含有破折号：`-` )，如果 URL 地址不合法，将输出错误信息：

```php
$website = test_input($_POST["website"]);
if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
  $websiteErr = "非法的 URL 的地址";
}
```

#### 验证 `Name` 、`E-mail` 、`URL`

```php
<?php
// 定义变量并默认设置为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
    } else {
      $name = test_input($_POST["name"]);
      // 检测名字是否只包含字母跟空格
      if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "只允许字母和空格";
      }
    }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // 检测邮箱是否合法
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
      $emailErr = "非法邮箱格式";
    }
  }

  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // 检测 URL 地址是否合法
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
      $websiteErr = "非法的 URL 的地址";
    }
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "性别是必需的";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}
?>
```

### 完整表单实例

在用户点击提交按钮后，为确保字段值是否输入正确，我们在 HTML 的 input 元素中插添加 PHP 脚本， 各字段名为: `name` 、`email` 、`website`

- 在备注中的 `textarea` 字段中，我们将脚本放于 `<textarea>` 和 `</textarea>` 标签之间

- HP脚本输出值为：`$name` 、`$email` 、`$website` 、`$comment` 变量

- 然后，我们同样需要检查被选中的单选按钮，对于这一点，我们必须设置好 checked 属性(不是 radio 按钮的 value 属性)

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  名字: <input type="text" name="name" value="<?php echo $name;?>">
  <span class="error">* <?php echo $nameErr;?></span>
  <br><br>
  E-mail: <input type="text" name="email" value="<?php echo $email;?>">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>
  网址: <input type="text" name="website" value="<?php echo $website;?>">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  备注: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
  <br><br>
  性别:
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?> value="female">女
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?> value="male">男
  <span class="error">* <?php echo $genderErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Submit">
</form>
```

#### 完整表单实例

```php
<!DOCTYPE HTML>
<html>
  <head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  <style>
    .error {color: #FF0000;}
  </style>
  </head>
<body>

<?php
// 定义变量并默认设置为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
  if (empty($_POST["name"]))
  {
    $nameErr = "名字是必需的";
  }
  else
  {
    $name = test_input($_POST["name"]);
    // 检测名字是否只包含字母跟空格
    if (!preg_match("/^[a-zA-Z ]*$/",$name))
    {
      $nameErr = "只允许字母和空格";
    }
  }

  if (empty($_POST["email"]))
  {
    $emailErr = "邮箱是必需的";
  }
  else
  {
    $email = test_input($_POST["email"]);
    // 检测邮箱是否合法
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email))
    {
      $emailErr = "非法邮箱格式";
    }
  }

  if (empty($_POST["website"]))
  {
    $website = "";
  }
  else
  {
    $website = test_input($_POST["website"]);
    // 检测 URL 地址是否合法
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website))
    {
      $websiteErr = "非法的 URL 的地址";
    }
  }

  if (empty($_POST["comment"]))
  {
    $comment = "";
  }
  else
  {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"]))
  {
    $genderErr = "性别是必需的";
  }
  else
  {
    $gender = test_input($_POST["gender"]);
  }
}

function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<h2>PHP 表单验证实例</h2>
<p><span class="error">* 必需字段。</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  名字: <input type="text" name="name" value="<?php echo $name;?>">
  <span class="error">* <?php echo $nameErr;?></span>
  <br><br>
  E-mail: <input type="text" name="email" value="<?php echo $email;?>">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>
  网址: <input type="text" name="website" value="<?php echo $website;?>">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  备注: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
  <br><br>
  性别:
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?> value="female">女
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?> value="male">男
  <span class="error">* <?php echo $genderErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Submit">
</form>

<?php
echo "<h2>输入的内容是:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $website;
echo "<br>";
echo $comment;
echo "<br>";
echo $gender;
?>

</body>
</html>
```

实例中执行结果类似如下图所示：

![图片](https://www.runoob.com/wp-content/uploads/2014/02/DF07BBDE-F4C8-4E21-B353-4CDA09364DFE.jpg)

### `$_GET` 变量

在 PHP 中，预定义的 `$_GET` 变量用于收集来自 `method="get"` 的表单中的值

- 从带有 GET 方法的表单发送的信息，对任何人都是可见的(会显示在浏览器的地址栏)，并且对发送信息的量也有限制

- `form.html 文件` 代码如下：

```php
<html>
  <head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  </head>
<body>

<form action="welcome.php" method="get">
  名字: <input type="text" name="fname">
  年龄: <input type="text" name="age">
  <input type="submit" value="提交">
</form>

</body>
</html>
```

- 当用户点击 `submit 按钮` 时，发送到服务器的 URL 如下所示：

```
http://www.runoob.com/welcome.php?fname=Runoob&age=3
```

- `welcome.php` 文件现在可以通过 `$_GET` 变量来收集表单数据了(请注意，表单域的名称会自动成为 `$_GET` 数组中的键)：

```php
欢迎 <?php echo $_GET["fname"]; ?>!<br>
你的年龄是 <?php echo $_GET["age"]; ?> 岁。
```

- 以上表单执行演示：

![图片](https://www.runoob.com/wp-content/uploads/2013/08/form2.gif)

#### 何时使用 `method="get"`

在 HTML 表单中使用 `method="get"` 时，所有的变量名和值都会显示在 URL 中

- 然而，正因为变量显示在 URL 中，因此可以在收藏夹中收藏该页面

  - 在某些情况下，这是很有用的

> #### 警告：
> - 在发送密码或其他敏感信息时，不应该使用 `HTTP GET` 方法！
> - `HTTP GET` 方法不适合大型的变量值，它的值是不能超过 `2000` 个字符的

### `$_POST` 变量

在 PHP 中，预定义的 `$_POST` 变量用于收集来自 `method="post"` 的表单中的值

- 从带有 `POST 方法` 的表单发送的信息，对任何人都是不可见的(不会显示在浏览器的地址栏)，并且对发送信息的量也没有限制

> #### 注意：
> 默认情况下，`POST 方法` 的发送信息的量最大值为 `8 MB` (可通过设置 php.ini 文件中的 `post_max_size` 进行更改)

- `form.html 文件` 代码如下：

```php
<html>
  <head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  </head>
<body>

<form action="welcome.php" method="post">
  名字: <input type="text" name="fname">
  年龄: <input type="text" name="age">
  <input type="submit" value="提交">
</form>

</body>
</html>
```

- 当用户点击 `提交` 按钮时，URL 类似如下所示：

```
http://www.runoob.com/welcome.php
```

- `welcome.php` 文件现在可以通过 `$_POST 变量` 来收集表单数据了(请注意，表单域的名称会自动成为 `$_POST` 数组中的键)：

```php
欢迎 <?php echo $_POST["fname"]; ?>!<br>
你的年龄是 <?php echo $_POST["age"]; ?> 岁。
```

- 以上表单执行演示：

![图片](https://www.runoob.com/wp-content/uploads/2013/08/form1.gif)

#### 何时使用 `method="post"`

从带有 `POST 方法` 的表单发送的信息，对任何人都是不可见的，并且对发送信息的量也没有限制

- 然而，由于变量不显示在 URL 中，所以无法把页面加入书签

#### `$_REQUEST` 变量

预定义的 `$_REQUEST` 变量包含了 `$_GET` 、`$_POST`、`$_COOKIE` 的内容

- `$_REQUEST` 变量可用来收集通过 `GET` 和 `POST` 方法发送的表单数据

- 你可以将 `welcome.php` 文件修改为如下代码，它可以接受 `$_GET` 、`$_POST` 等数据

```php
欢迎 <?php echo $_REQUEST["fname"]; ?>!<br>
你的年龄是 <?php echo $_REQUEST["age"]; ?> 岁。
```


## PHP 高级教程

### 多维数组

一个数组中的值可以是另一个数组，另一个数组的值也可以是一个数组

- 依照这种方式，我们可以创建二维或者三维数组

```php
<?php
// 二维数组:
$cars = array
(
  array("Volvo",100,96),
  array("BMW",60,59),
  array("Toyota",110,100)
);
?>
```

- 多维数组是包含一个或多个数组的数组

- 在多维数组中，主数组中的每一个元素也可以是一个数组，子数组中的每一个元素也可以是一个数组

#### 实例 1

在下面这个实例中，我们创建了一个 `自动分配` ID 键的多维数组：

```php
<?php
$sites = array
(
  "runoob"=>array
  (
    "菜鸟教程",
    "http://www.runoob.com"
  ),
  "google"=>array
  (
    "Google 搜索",
    "http://www.google.com"
  ),
  "taobao"=>array
  (
    "淘宝",
    "http://www.taobao.com"
  )
);
print("<pre>"); // 格式化输出数组
print_r($sites);
print("</pre>");
?>
```

上面的数组将输出如下：

![多维数组](https://www.runoob.com/wp-content/uploads/2013/08/198533EB-73EE-4AA7-8025-A6C0F778D4F0.jpg)

#### 实例 2

让我们试着显示上面数组中的某个值：

```php
echo $sites['runoob'][0] . '地址为：' . $sites['runoob'][1];
```

上面的代码将输出：

```
菜鸟教程地址为：http://www.runoob.com
```

### `date()` 函数

PHP `date()` 函数用于格式化 `时间` / `日期` ，可把时间戳格式化为可读性更好的日期和时间

- 语法：

```
string date ( string $format [, int $timestamp ] )
```

参数|描述
-|-
format|必需，规定时间戳的格式
timestamp|可选，规定时间戳，默认是当前的日期和时间

#### 格式化日期

`date()` 函数的第一个必需参数 format 规定了如何格式化日期/时间

- 这里列出了一些可用的字符：

  - d

    代表月中的天(01 - 31)

  - m

    代表月(01 - 12)

  - Y

    代表年(四位数)

> 如需了解 `format 参数` 中可用的所有字符列表，请查阅我们的 `PHP Date 参考手册`[【 `date()` 函数】](https://www.runoob.com/php/func-date-date.html)

可以在字母之间插入其他字符，比如 `/` 、`.` 或者 `-` ，这样就可以增加附加格式了：

```php
<?php
echo date("Y/m/d") . "<br>";
echo date("Y.m.d") . "<br>";
echo date("Y-m-d");
?>
```

上面代码的输出如下所示：

```
2016/10/21
2016.10.21
2016-10-21
```

> 格式字串可以识别以下 format 参数的字符串

format 字符|说明|返回值例子
-|-|-
日||
l|星期几，完整的文本格式|Sunday 到 Saturday
w|星期中的第几天，数字表示|0 (表示星期天)到 6 (表示星期六)
N|ISO-8601 格式数字表示的星期中的第几天( `PHP 5.1.0` 新加)|1 (表示星期一)到 7 (表示星期天)
D|星期中的第几天，文本表示，3 个字母|Mon 到 Sun
d|月份中的第几天，有前导零的 2 位数字|01 到 31
j|月份中的第几天，没有前导零|1 到 31
S|每月天数后面的英文后缀，2 个字符|st ，nd ，rd 或者 th ，可以和 j 一起用
z|年份中的第几天|0 到 365
星期||
W|ISO-8601 格式年份中的第几周，每周从星期一开始( `PHP 4.1.0` 新加的)|例如：42 (当年的第 42 周)
月||
F|月份，完整的文本格式，例如 January 或者 March|January 到 December
M|三个字母缩写表示的月份|Jan 到 Dec
m|数字表示的月份，有前导零|01 到 12
n|数字表示的月份，没有前导零|1 到 12
t|给定月份所应有的天数|28 到 31
年||
L|是否为闰年|如果是闰年为 1 ，否则为 0
Y|4 位数字完整表示的年份|例如：1999 或 2003
o|ISO-8601 格式年份数字，这和 Y 的值相同，只除了如果 ISO 的星期数(W)属于前一年或下一年，则用那一年( `PHP 5.1.0` 新加)|Examples: 1999 or 2003
y|2 位数字表示的年份|例如：99 或 03
时间||
a|小写的上午和下午值|am 或 pm
A|大写的上午和下午值|AM 或 PM
B|Swatch Internet 标准时|000 到 999
h|小时，12 小时格式，有前导零|01 到 12
H|小时，24 小时格式，有前导零|00 到 23
g|小时，12 小时格式，没有前导零|1 到 12
G|小时，24 小时格式，没有前导零|0 到 23
i|有前导零的分钟数|00 到 59>
s|秒数，有前导零|00 到 59>
u|毫秒 ( `PHP 5.2.2` 新加)，需要注意的是：`date() 函数` 总是返回 `000000` ，因为它只接受 `integer 参数` ，而 `DateTime::format()` 才支持毫秒|示例：654321
时区||
e|时区标识( `PHP 5.1.0` 新加)|例如：UTC ，GMT ，Atlantic/Azores
I|是否为夏令时|如果是夏令时为 1 ，否则为 0
O|与格林威治时间相差的小时数|例如：+0200
P|与格林威治时间( GMT )的差别，小时和分钟之间有冒号分隔( `PHP 5.1.3` 新加)|例如：+02:00
T|本机所在的时区|例如：EST ，MDT(【译者注】在 Windows 下为完整文本格式，例如 `Eastern Standard Time` ，中文版会显示 `中国标准时间` )
Z|时差偏移量的秒数，UTC 西边的时区偏移量总是负的，UTC 东边的时区偏移量总是正的|-43200 到 43200
完整的日期(时间)||
c|ISO 8601 格式的日期( `PHP 5` 新加)|`2004-02-12T15:19:21+00:00`
r|RFC 822 格式的日期|例如：`Thu, 21 Dec 2000 16:01:07 +0200`
U|从 Unix 纪元( `January 1 1970 00:00:00 GMT` )开始至今的秒数|参见 `time()`

#### [【完整的 PHP Date 参考手册】](https://www.runoob.com/php/php-ref-date.html)

### 包含文件

在 PHP 中，我们可以在服务器执行 PHP 文件之前在该文件中插入一个文件的内容

- `include` 和 `require` 语句用于在执行流中插入写在其他文件中的有用的代码

- include 和 require 除了处理错误的方式不同之外，在其他方面都是相同的：

  - require 生成一个致命错误 `E_COMPILE_ERROR` ，在错误发生后脚本会停止执行

  - include 生成一个警告 `E_WARNING` ，在错误发生后脚本会继续执行

- 包含文件省去了大量的工作

  - 这意味着我们可以为所有网页创建标准页头、页脚或者菜单文件

  - 然后，在页头需要更新时，我们只需更新这个页头包含文件即可

- 语法：

```
include 'filename';

或者

require 'filename';
```

> 如果我们希望继续执行，并向用户输出结果，即使包含文件已丢失，那么请使用 include
> - 否则，在框架、CMS 或者复杂的 PHP 应用程序编程中，请始终使用 require 向执行流引用关键文件
> - 这有助于提高应用程序的安全性和完整性，在某个关键文件意外丢失的情况下

#### 基础实例一

假设我们有一个标准的页头文件，名为 `header.php` ，如需在页面中引用这个页头文件，请使用 `include` / `require` ：

```php
<html>
  <head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  </head>
<body>

<?php include 'header.php'; ?>
<h1>欢迎来到我的主页!</h1>
<p>一些文本。</p>

</body>
</html>
```

假设我们有一个在所有页面中使用的标准菜单文件 `menu.php` ：

```php
echo '<a href="/">主页</a><a href="/html">HTML 教程</a><a href="/php">PHP 教程</a>';
```

网站中的所有页面均应引用该菜单文件，以下是具体的做法：

```php
<html>
  <head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  </head>
<body>

<div class="leftmenu">
<?php include 'menu.php'; ?>
</div>
<h1>欢迎来到我的主页!</h1>
<p>一些文本。</p>

</body>
</html>
```

#### 基础实例二

假设我们有一个定义变量的包含文件 `vars.php` ：

```php
<?php
$color='red';
$car='BMW';
?>
```

这些变量可用在调用文件中：

```php
<html>
  <head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  </head>
<body>

<h1>欢迎来到我的主页!</h1>
<?php
include 'vars.php';

echo "I have a $color $car";
// I have a red BMW
?>

</body>
</html>
```

### 文件处理

`fopen()` 函数用于在 PHP 中打开文件

- 此函数的第一个参数含有要打开的文件的名称

- 第二个参数规定了使用哪种模式来打开文件

```php
<html>
<body>

<?php
$file=fopen("welcome.txt","r");
?>

</body>
</html>
```

#### `fopen()` 打开文件

文件可能通过下列模式来打开：

模式|描述
-|-
r|只读，在文件的开头开始
r+|读 / 写，在文件的开头开始
w|只写，打开并清空文件的内容；如果文件不存在，则创建新文件
w+|读 / 写，打开并清空文件的内容；如果文件不存在，则创建新文件
a|追加，打开并向文件末尾进行写操作，如果文件不存在，则创建新文件
a+|读 / 追加，通过向文件末尾写内容，来保持文件内容
x|只写，创建新文件，如果文件已存在，则返回 FALSE 和一个错误
x+|读 / 写，创建新文件，如果文件已存在，则返回 FALSE 和一个错误

> #### 注意：
> 如果 `fopen()` 函数无法打开指定文件，则返回 0 ( `false` )

如果 `fopen()` 函数不能打开指定的文件，下面的实例会生成一段消息：

```php
<html>
<body>

<?php
$file=fopen("welcome.txt","r") or exit("Unable to open file!");
?>

</body>
</html>
```

#### `fclose()` 关闭文件

`fclose()` 函数用于关闭打开的文件：

```php
<?php
$file = fopen("test.txt","r");

//执行一些代码

fclose($file);
?>
```

#### `feof()` 检测文件末尾 `EOF`

`feof()` 函数检测是否已到达文件末尾 `EOF`

- 在循环遍历未知长度的数据时，`feof()` 函数很有用

```php
if (feof($file)) echo "文件结尾";
```

> #### 注意：
> 在 `w` 、`a` 和 `x` 模式下，我们无法读取打开的文件！

#### 逐行读取文件

`fgets()` 函数用于从文件中逐行读取文件

- 在调用该函数之后，文件指针会移动到下一行

- 下面的实例逐行读取文件，直到文件末尾为止：

```php
<?php
$file = fopen("welcome.txt", "r") or exit("无法打开文件!");

// 读取文件每一行，直到文件结尾
while(!feof($file))
{
  echo fgets($file). "<br>";
}
fclose($file);
?>
```

#### `fgetc()` 逐字符读取文件

`fgetc()` 函数用于从文件中逐字符地读取文件

- 在调用该函数之后，文件指针会移动到下一个字符

- 下面的实例逐字符地读取文件，直到文件末尾为止：

```php
<?php
$file=fopen("welcome.txt","r") or exit("无法打开文件!");
while (!feof($file))
{
  echo fgetc($file);
}
fclose($file);
?>
```

> PHP 文件系统函数的完整参考手册[【请访问 PHP Filesystem 参考手册】](https://www.runoob.com/php/php-ref-filesystem.html)

### 文件上传

通过 PHP ，可以把文件上传到服务器

- 本章节实例在 test 项目下完成，目录结构为：

```
test
|-----upload             # 文件上传的目录
|-----form.html          # 表单文件
|-----upload_file.php    # php 上传代码
```

[【源码下载】](http://www.runoob.com/wp-content/uploads/2013/08/runoob-file-uplaod-demo.zip)

#### 创建一个文件上传表单

允许用户从表单上传文件是非常有用的

- 请看下面这个供上传文件的 HTML 表单：

```php
<html>
  <head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  </head>
<body>

<form action="upload_file.php" method="post" enctype="multipart/form-data">
  <label for="file">文件名：</label>
  <input type="file" name="file" id="file"><br>
  <input type="submit" name="submit" value="提交">
</form>

</body>
</html>
```

- 将以上代码保存到 `form.html 文件` 中

- 有关上面的 HTML 表单的一些注意项列举如下：

  - `<form>` 标签的 `enctype 属性` 规定了在提交表单时要使用哪种内容类型

    在表单需要二进制数据时，比如文件内容，请使用 `"multipart/form-data"`

  - `<input>` 标签的 `type="file"` 属性规定了应该把输入作为文件来处理

    举例来说，当在浏览器中预览时，会看到输入框旁边有一个浏览按钮

> #### 注意：
> 允许用户上传文件是一个巨大的安全风险，请仅仅允许可信的用户执行文件上传操作

#### 创建上传脚本

`upload_file.php 文件` 含有供上传文件的代码：

```php
<?php
if ($_FILES["file"]["error"] > 0)
{
  echo "错误：" . $_FILES["file"]["error"] . "<br>";
}
else
{
  echo "上传文件名: " . $_FILES["file"]["name"] . "<br>";
  echo "文件类型: " . $_FILES["file"]["type"] . "<br>";
  echo "文件大小: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
  echo "文件临时存储的位置: " . $_FILES["file"]["tmp_name"];
}
?>
```

通过使用 PHP 的全局数组 `$_FILES` ，你可以从客户计算机向远程服务器上传文件

- 第一个参数是表单的 input 的 `name`

- 第二个下标可以是 `name` 、`type` 、`size` 、`tmp_name` 或 `error` ，如下所示：

  - `$_FILES["file"]["name"]`

    上传文件的名称

  - `$_FILES["file"]["type"]`

    上传文件的类型

  - `$_FILES["file"]["size"]`

    上传文件的大小，以字节计

  - `$_FILES["file"]["tmp_name"]`

    存储在服务器的文件的临时副本的名称

  - `$_FILES["file"]["error"]`

    由文件上传导致的错误代码

- 这是一种非常简单文件上传方式

  基于安全方面的考虑，我们应当增加有关允许哪些用户上传文件的限制

#### 上传限制

在这个脚本中，我们增加了对文件上传的限制

- 用户只能上传 `.gif` 、`.jpeg` 、`.jpg` 、`.png` 文件，文件大小必须小于 `200 kB` ：

```php
<?php
// 允许上传的图片后缀
$allowedExts = array("gif", "jpeg", "jpg", "png");

$temp = explode(".", $_FILES["file"]["name"]);
$extension = end($temp);
// 获取文件后缀名

if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg")
|| ($_FILES["file"]["type"] == "image/pjpeg")
|| ($_FILES["file"]["type"] == "image/x-png")
|| ($_FILES["file"]["type"] == "image/png"))
&& ($_FILES["file"]["size"] < 204800)    // 小于 200 kb
&& in_array($extension, $allowedExts))
{
  if ($_FILES["file"]["error"] > 0)
  {
    echo "错误：: " . $_FILES["file"]["error"] . "<br>";
  }
  else
  {
    echo "上传文件名: " . $_FILES["file"]["name"] . "<br>";
    echo "文件类型: " . $_FILES["file"]["type"] . "<br>";
    echo "文件大小: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
    echo "文件临时存储的位置: " . $_FILES["file"]["tmp_name"];
  }
}
else
{
  echo "非法的文件格式";
}
?>
```

### 保存被上传的文件

上面的实例在服务器的 PHP 临时文件夹中创建了一个被上传文件的临时副本

- 这个临时的副本文件会在脚本结束时消失

- 要保存被上传的文件，我们需要把它拷贝到另外的位置

```php
<?php
// 允许上传的图片后缀
$allowedExts = array("gif", "jpeg", "jpg", "png");

$temp = explode(".", $_FILES["file"]["name"]);
$extension = end($temp);
// 获取文件后缀名

echo $_FILES["file"]["size"];

if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg")
|| ($_FILES["file"]["type"] == "image/pjpeg")
|| ($_FILES["file"]["type"] == "image/x-png")
|| ($_FILES["file"]["type"] == "image/png"))
&& ($_FILES["file"]["size"] < 204800)   // 小于 200 kb
&& in_array($extension, $allowedExts))
{
  if ($_FILES["file"]["error"] > 0)
  {
    echo "错误：: " . $_FILES["file"]["error"] . "<br>";
  }
  else
  {
    echo "上传文件名: " . $_FILES["file"]["name"] . "<br>";
    echo "文件类型: " . $_FILES["file"]["type"] . "<br>";
    echo "文件大小: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
    echo "文件临时存储的位置: " . $_FILES["file"]["tmp_name"] . "<br>";

    // 判断当期目录下的 upload 目录是否存在该文件
    // 如果没有 upload 目录，你需要创建它，upload 目录权限为 777
    if (file_exists("upload/" . $_FILES["file"]["name"]))
    {
      echo $_FILES["file"]["name"] . " 文件已经存在。 ";
    }
    else
    {
      // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
      move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
      echo "文件存储在: " . "upload/" . $_FILES["file"]["name"];
    }
  }
}
else
{
  echo "非法的文件格式";
}
?>
```

- 上面的脚本检测了文件是否已存在，如果不存在，则把文件拷贝到名为 `upload` 的目录下

文件上传演示操作如下所示：

![文件上传](https://www.runoob.com/wp-content/uploads/2013/08/upload-form.gif)

### cookie

`cookie` 常用于识别用户

- cookie 是一种服务器留在用户计算机上的小文件

- 每当同一台计算机通过浏览器请求页面时，这台计算机将会发送 cookie

- 通过 PHP，我们能够创建并取回 cookie 的值

#### 创建 cookie

`setcookie()` 函数用于设置 cookie

- 语法：

```
setcookie(name, value, expire, path, domain);
```

> #### 注意：
> `setcookie()` 函数必须位于 `<html>` 标签之前

在下面的例子中，我们将创建名为 `"user"` 的 cookie ，并为它赋值 `"runoob"`

- 我们也规定了此 cookie 在一小时后过期

```php
<?php
setcookie("user", "runoob", time()+3600);
?>

<html>
// .....
</html>
```

> #### 注意：
> 在发送 cookie 时，cookie 的值会自动进行 URL 编码，在取回时进行自动解码
>> 为防止 URL 编码，请使用 `setrawcookie()` 取而代之

我们还可以通过另一种方式设置 `cookie` 的过期时间

- 这也许比使用秒表示的方式简单

```php
<?php
$expire=time()+60*60*24*30;
setcookie("user", "runoob", $expire);
?>

<html>
// .....
</html>
```

- 在上面的实例中，过期时间被设置为一个月( `60 秒 * 60 分 * 24 小时 * 30 天` )

#### 取回 cookie 的值

PHP 的 `$_COOKIE` 变量用于取回 `cookie` 的值

- 在下面的实例中，我们取回了名为 `user` 的 `cookie` 的值，并把它显示在了页面上：

```php
<?php
// 输出 cookie 值
echo $_COOKIE["user"];

// 查看所有 cookie
print_r($_COOKIE);
?>
```

- 在下面的实例中，我们使用 `isset()` 函数来确认是否已设置了 `cookie` ：

```php
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<?php
if (isset($_COOKIE["user"]))
  echo "欢迎 " . $_COOKIE["user"] . "!<br>";
else
  echo "普通访客!<br>";
?>

</body>
</html>
```

#### 如何删除 cookie

当删除 cookie 时，我们应当使过期日期变更为过去的时间点

- 删除的实例：

```php
<?php
// 设置 cookie 过期时间为过去 1 小时
setcookie("user", "", time()-3600);
?>
```

#### 如果浏览器不支持 cookie 该怎么办

> 如果我们的应用程序需要与不支持 cookie 的浏览器打交道，那么我们不得不使用其他的办法在我们的应用程序中的页面之间传递信息

一种方式是通过表单传递数据

- 下面的表单在用户单点击 `Submit` 按钮时，向 `welcome.php` 提交了用户输入：

```html
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<form action="welcome.php" method="post">
名字: <input type="text" name="name">
年龄: <input type="text" name="age">
<input type="submit">
</form>

</body>
</html>
```

- 取回 `welcome.php` 文件中的值，如下所示：

```php
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

欢迎 <?php echo $_POST["name"]; ?>.<br>
你 <?php echo $_POST["age"]; ?> 岁了。

</body>
</html>
```

### `session` 变量

session 变量用于存储关于 `用户会话(session)` 的信息，或者更改 `用户会话(session)` 的设置

- session 变量存储单一用户的信息，并且对于应用程序中的所有页面都是可用的

我们在计算机上操作某个应用程序时，我们打开它，做些更改，然后关闭它

- 这很像一次 `对话(session)`

- 计算机知道我们是谁

- 它清楚我们在何时打开和关闭应用程序

- 然而，在因特网上问题出现了：由于 HTTP 地址无法保持状态，Web 服务器并不知道我们是谁以及我们做了什么

session 解决了这个问题，它通过在服务器上存储用户信息以便随后使用(比如用户名称、购买商品等)

- 然而，会话信息是临时的，在用户离开网站后将被删除

- 如果需要永久存储信息，可以把数据存储在数据库中

> #### session 的工作机制：
> - 为每个访客创建一个唯一的 id，又叫 `UID` ，并基于这个 UID 来存储变量
> - UID 存储在 cookie 中，或者通过 URL 进行传导

#### 启动 session

在把用户信息存储到 session 中之前，首先必须启动 `会话(session)`

> `session_start()` 函数必须位于 `<html>` 标签之前

```php
<?php session_start(); ?>

<html>
<body>

</body>
</html>
```

- 上面的代码会向服务器注册用户的会话，以便我们可以开始保存用户信息，同时会为用户会话分配一个 UID

#### 存储 Session 变量

存储和取回 session 变量的正确方法是使用 `$_SESSION` 变量：

```php
<?php
session_start();
// 存储 session 数据
$_SESSION['views']=1;
?>

<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<?php
// 检索 session 数据
echo "浏览量：". $_SESSION['views'];
?>

</body>
</html>
```

输出结果：

```
浏览量：1
```

在下面的实例中，我们创建了一个简单的 `page-view` 计数器

- `isset()` 函数检测是否已设置 `views` 变量

- 如果已设置 `views` 变量，我们累加计数器

- 如果 `views` 不存在，则创建 `views` 变量，并把它设置为 1

```php
<?php
session_start();

if(isset($_SESSION['views']))
{
  $_SESSION['views']=$_SESSION['views']+1;
}
else
{
  $_SESSION['views']=1;
}
echo "浏览量：". $_SESSION['views'];
?>
```

#### 销毁 session

如果我们希望删除某些 session 数据，可以使用 `unset()` 或 `session_destroy()` 函数

- `unset()` 函数用于释放指定的 session 变量：

```php
<?php
session_start();
if(isset($_SESSION['views']))
{
  unset($_SESSION['views']);
}
?>
```

- 也可以通过调用 `session_destroy()` 函数彻底销毁 session 变量：

```php
<?php
session_destroy();
?>
```

> 注意：`session_destroy()` 将重置 session ，将会失去所有已存储的 session 数据

### 发送电子邮件

PHP 允许我们从脚本直接发送电子邮件，可以用 `mail()` 函数用于从脚本中发送电子邮件

- 语法

```
mail(to,subject,message,headers,parameters)
```

参数|描述
-|-
to|必需，规定 email 接收者
subject|必需，规定 email 的主题，注释：该参数不能包含任何新行字符
message|必需，定义要发送的消息，应使用 LF (\n) 来分隔各行，每行应该限制在 70 个字符内
headers|可选，规定附加的标题，比如 `From` 、`Cc` 和 `Bcc` ，应当使用 `CRLF (\r\n)` 分隔附加的标题
parameters|可选，对邮件发送程序规定额外的参数

> #### 注释：
> - PHP 运行邮件函数需要一个已安装且正在运行的邮件系统(如：`sendmail` 、`postfix` 、`qmail` 等)
> - 所用的程序通过在 `php.ini` 文件中的配置设置进行定义
> - 请在我们的[【 PHP Mail 参考手册】](https://www.runoob.com/php/php-ref-mail.html)阅读更多内容

#### 简易 `E-Mail`

> 通过 PHP 发送电子邮件的最简单的方式是发送一封文本 email

在下面的实例中，我们首先声明变量 `$to` 、`$subject` 、`$message` 、`$from` 、`$headers` ，然后我们在 `mail()` 函数中使用这些变量来发送了一封 `E-mail` ：

```php
<?php
// 邮件接收者
$to = "someone@example.com";

// 邮件标题
$subject = "参数邮件";

// 邮件正文
$message = "Hello! 这是邮件的内容。";

// 邮件发送者
$from = "someonelse@example.com";
// 头部信息设置
$headers = "From:" . $from;

mail($to,$subject,$message,$headers);
echo "邮件已发送";
?>
```

#### Mail 表单

通过 PHP ，我们能够在自己的站点制作一个反馈表单

- 下面的实例向指定的 `e-mail` 地址发送了一条文本消息：

```php
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
<?php
if (isset($_REQUEST['email'])) { // 如果接收到邮箱参数则发送邮件
  // 发送邮件
  $email = $_REQUEST['email'] ;
  $subject = $_REQUEST['subject'] ;
  $message = $_REQUEST['message'] ;
  mail("someone@example.com", $subject,
  $message, "From:" . $email);
  echo "邮件发送成功";
} else { // 如果没有邮箱参数则显示表单
  echo "<form method='post' action='mailform.php'>
  Email: <input name='email' type='text'><br>
  Subject: <input name='subject' type='text'><br>
  Message:<br>
  <textarea name='message' rows='15' cols='40'>
  </textarea><br>
  <input type='submit'>
  </form>";
}
?>
</body>
</html>
```

实例解释：

- 首先，检查是否填写了邮件输入框

  - 如果未填写(比如在页面被首次访问时)，输出 HTML 表单

  - 如果已填写(在表单被填写后)，从表单发送电子邮件

- 当填写完表单点击提交按钮后，页面重新载入，可以看到邮件输入被重置，同时显示邮件发送成功的消息

> 提醒：这个简易发送 `e-mail` 并不安全，下面我们将讲解如何验证用户输入使它更安全

#### [【 PHP Mail 参考手册】](https://www.runoob.com/php/php-ref-mail.html)

### 安全 E-mail

以下是前面的 e-mail 脚本代码，它存在着一个漏洞：

```php
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<?php
if (isset($_REQUEST['email'])) {
  //// 如果接收到邮箱参数则发送邮件
  // 发送邮件
  $email = $_REQUEST['email'] ;
  $subject = $_REQUEST['subject'] ;
  $message = $_REQUEST['message'] ;
  mail("someone@example.com", $subject,
  $message, "From:" . $email);
  echo "邮件发送成功";
} else {
  // 如果没有邮箱参数则显示表单
  echo "<form method='post' action='mailform.php'>
  Email: <input name='email' type='text'><br>
  Subject: <input name='subject' type='text'><br>
  Message:<br>
  <textarea name='message' rows='15' cols='40'>
  </textarea><br>
  <input type='submit'>
  </form>";
}
?>

</body>
</html>
```

- 以上代码存在的问题是，未经授权的用户可通过输入表单在邮件头部插入数据

- 假如用户在表单中的输入框内加入如下文本到电子邮件中，会出现什么情况呢？

```
someone@example.com%0ACc:person2@example.com
%0ABcc:person3@example.com,person3@example.com,
anotherperson4@example.com,person5@example.com
%0ABTo:person6@example.com
```

- 与往常一样，`mail()` 函数把上面的文本放入邮件头部，那么现在头部有了额外的 `Cc:` 、`Bcc:` 和 `To:` 字段

  - 当用户点击提交按钮时，这封 `e-mail` 会被发送到上面所有的地址！

#### 防止 `E-mail` 注入

防止 `e-mail` 注入的最好方法是对输入进行验证

- 下面的代码与上一章中的类似，不过这里我们已经增加了检测表单中 email 字段的输入验证程序：

```php
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
<?php
function spamcheck($field)
{
  // filter_var() 过滤 e-mail
  // 使用 FILTER_SANITIZE_EMAIL
  $field=filter_var($field, FILTER_SANITIZE_EMAIL);

  // filter_var() 过滤 e-mail
  // 使用 FILTER_VALIDATE_EMAIL
  if(filter_var($field, FILTER_VALIDATE_EMAIL))
  {
    return TRUE;
  }
  else
  {
    return FALSE;
  }
}

if (isset($_REQUEST['email']))
{
  //// 如果接收到邮箱参数则发送邮件
  // 判断邮箱是否合法
  $mailcheck = spamcheck($_REQUEST['email']);
  if ($mailcheck==FALSE)
  {
    echo "非法输入";
  }
  else
  {
    // 发送邮件
    $email = $_REQUEST['email'] ;
    $subject = $_REQUEST['subject'] ;
    $message = $_REQUEST['message'] ;
    mail("someone@example.com", "Subject: $subject",
    $message, "From: $email" );
    echo "Thank you for using our mail form";
  }
}
else
{
  // 如果没有邮箱参数则显示表单
  echo "<form method='post' action='mailform.php'>
  Email: <input name='email' type='text'><br>
  Subject: <input name='subject' type='text'><br>
  Message:<br>
  <textarea name='message' rows='15' cols='40'>
  </textarea><br>
  <input type='submit'>
  </form>";
}
?>

</body>
</html>
```

在上面的代码中，我们使用了 PHP 过滤器来对输入进行验证：

- FILTER_SANITIZE_EMAIL

  过滤器从字符串中删除电子邮件的非法字符

- FILTER_VALIDATE_EMAIL

  过滤器验证电子邮件地址的值

> 我们可以在[【 PHP Filter 】](https://www.runoob.com/php/php-filter.html)中阅读更多关于过滤器的知识

### 错误处理

> 在 PHP 中，默认的错误处理很简单：一条错误消息会被发送到浏览器，这条消息带有文件名、行号以及描述错误的消息

在创建脚本和 Web 应用程序时，错误处理是一个重要的部分

- 如果我们的代码缺少错误检测编码，那么程序看上去很不专业，也为安全风险敞开了大门

- 我们将讲解不同的错误处理方法：

  - 简单的 `die()` 语句
  - 自定义错误和错误触发器
  - 错误报告

#### 基本的错误处理：使用 `die()` 函数

第一个实例展示了一个打开文本文件的简单脚本：

```php
<?php
$file=fopen("welcome.txt","r");
?>
```

如果文件不存在，我们会得到类似这样的错误：

```
Warning: fopen(welcome.txt) [function.fopen]: failed to open stream:
No such file or directory in /www/runoob/test/test.php on line 2
```

为了避免用户得到类似上面的错误消息，我们在访问文件之前检测该文件是否存在：

```php
<?php
if(!file_exists("welcome.txt"))
{
  die("文件不存在");
}
else
{
  $file=fopen("welcome.txt","r");
}
?>
```

现在，如果文件不存在，我们会得到类似这样的错误消息：

```
文件不存在
```

- 相比之前的代码，上面的代码更有效，这是由于它采用了一个简单的错误处理机制在错误之后终止了脚本

- 然而，简单地终止脚本并不总是恰当的方式

#### 创建自定义错误处理器

创建一个自定义的错误处理器非常简单

- 我们很简单地创建了一个专用函数，可以在 PHP 中发生错误时调用该函数

- 该函数可以接受最多五个参数，且前两个参数是必须的：

  - error level
  - error message
  - file
  - line-number
  - error context

- 语法

```
error_function(error_level,error_message,
error_file,error_line,error_context)
```

参数|描述
-|-
error_level|必需，为用户定义的错误规定错误报告级别；必须是一个数字，参见此内容后面的表格《错误报告级别》
error_message|必需，为用户定义的错误规定错误消息
error_file|可选，规定错误发生的文件名
error_line|可选，规定错误发生的行号
error_context|可选，规定一个数组，包含了当错误发生时在用的每个变量以及它们的值

#### 错误报告级别

这些错误报告级别是用户自定义的错误处理程序处理的不同类型的错误：

值|常量|描述
-|-|-
2|E_WARNING|非致命的 `run-time` 错误，不暂停脚本执行
8|E_NOTICE|`run-time` 通知，在脚本发现可能有错误时发生，但也可能在脚本正常运行时发生
256|E_USER_ERROR|致命的用户生成的错误，这类似于程序员使用 PHP 函数 `trigger_error()` 设置的 `E_ERROR`
512|E_USER_WARNING|非致命的用户生成的警告，这类似于程序员使用 PHP 函数 `trigger_error()` 设置的 `E_WARNING`
1024|E_USER_NOTICE|用户生成的通知，这类似于程序员使用 PHP 函数 `trigger_error()` 设置的 `E_NOTICE`
4096|E_RECOVERABLE_ERROR|可捕获的致命错误，类似 `E_ERROR` ，但可被用户定义的处理程序捕获，参见 `set_error_handler()`
8191|E_ALL|所有错误和警告，在 `PHP 5.4` 中，`E_STRICT` 成为 `E_ALL` 的一部分

现在，让我们创建一个处理错误的函数：

```php
function customError($errno, $errstr)
{
  echo "<b>Error:</b> [$errno] $errstr<br>";
  echo "脚本结束";
  die();
}
```

- 上面的代码是一个简单的错误处理函数

  - 当它被触发时，它会取得错误级别和错误消息

  - 然后它会输出错误级别和消息，并终止脚本

#### 设置错误处理程序

> 我们已经创建了一个错误处理函数，我们需要确定在何时触发该函数

PHP 的默认错误处理程序是内建的错误处理程序(我们打算把上面的函数改造为脚本运行期间的默认错误处理程序)

- 可以修改错误处理程序，使其仅应用到某些错误，这样脚本就能以不同的方式来处理不同的错误

- 然而，在本例中，我们打算针对所有错误来使用我们自定义的错误处理程序：

```
set_error_handler("customError");
```

- 由于我们希望我们的自定义函数能处理所有错误，`set_error_handler()` 仅需要一个参数，可以添加第二个参数来规定错误级别

- 通过尝试输出不存在的变量，来测试这个错误处理程序：

```php
<?php
// 错误处理函数
function customError($errno, $errstr)
{
  echo "<b>Error:</b> [$errno] $errstr";
}

// 设置错误处理函数
set_error_handler("customError");

// 触发错误
echo($test);
?>
```

以上代码的输出如下所示：

```
Error: [8] Undefined variable: test
```

#### 触发错误

在脚本中用户输入数据的位置，当用户的输入无效时触发错误是很有用的

- 在 PHP 中，这个任务由 `trigger_error()` 函数完成

- 在本例中，如果 `test` 变量大于 `1` ，就会发生错误：

```php
<?php
$test=2;
if ($test>1)
{
  trigger_error("变量值必须小于等于 1");
}
?>
```

- 以上代码的输出如下所示：

```
Notice: 变量值必须小于等于 1
in /www/test/runoob.php on line 5
```

我们可以在脚本中任何位置触发错误，通过添加的第二个参数，我们能够规定所触发的错误类型，可能的错误类型：

- E_USER_ERROR

  致命的用户生成的 `run-time` 错误

  错误无法恢复

  脚本执行被中断

- E_USER_WARNING

  非致命的用户生成的 `run-time` 警告

  脚本执行不被中断

- E_USER_NOTICE

  默认，用户生成的 run-time 通知

  在脚本发现可能有错误时发生，但也可能在脚本正常运行时发生

在本例中，如果 `test` 变量大于 `1` ，则发生 `E_USER_WARNING` 错误：

- 如果发生了 `E_USER_WARNING` ，我们将使用我们自定义的错误处理程序并结束脚本

```php
<?php
// 错误处理函数
function customError($errno, $errstr)
{
  echo "<b>Error:</b> [$errno] $errstr<br>";
  echo "脚本结束";
  die();
}

// 设置错误处理函数
set_error_handler("customError",E_USER_WARNING);

// 触发错误
$test=2;
if ($test>1)
{
  trigger_error("变量值必须小于等于 1",E_USER_WARNING);
}
?>
```

- 以上代码的输出如下所示：

```
Error: [512] 变量值必须小于等于 1
脚本结束
```

#### 错误记录

> 我们已经学习了如何创建自己的 `error` ，以及如何触发它们，接下来我们研究一下错误记录

在默认的情况下，根据在 `php.ini` 中的 `error_log` 配置，PHP 向服务器的记录系统或文件发送错误记录

- 通过使用 `error_log()` 函数，可以向指定的文件或远程目的地发送错误记录

- 通过电子邮件向我们自己发送错误消息，是一种获得指定错误的通知的好办法

实例：通过 `E-Mail` 发送错误消息

- 在下面的例子中，如果特定的错误发生，我们将发送带有错误消息的电子邮件，并结束脚本

```php
<?php
// 错误处理函数
function customError($errno, $errstr)
{
  echo "<b>Error:</b> [$errno] $errstr<br>";
  echo "已通知网站管理员";
  error_log("Error: [$errno] $errstr",1,
  "someone@example.com","From: webmaster@example.com");
}

// 设置错误处理函数
set_error_handler("customError",E_USER_WARNING);

// 触发错误
$test=2;
if ($test>1)
{
  trigger_error("变量值必须小于等于 1",E_USER_WARNING);
}
?>
```

- 以上代码的输出如下所示：

```
Error: [512] 变量值必须小于等于 1
已通知网站管理员
```

- 接收自以上代码的邮件如下所示：

```
Error: [512] 变量值必须小于等于 1
```

> 注意：这个方法不适合所有的错误，常规错误应当通过使用默认的 PHP 记录系统在服务器上进行记录

### 异常处理

`PHP 5` 提供了一种新的面向对象的错误处理方法

- 异常处理用于在指定的错误(异常)情况发生时改变脚本的正常流程，这种情况称为异常

- 当异常被触发时，通常会发生：

  - 当前代码状态被保存

  - 代码执行被切换到预定义(自定义)的异常处理器函数

  - 根据情况，处理器也许会从保存的代码状态重新开始执行代码，终止脚本执行，或从代码中另外的位置继续执行脚本

- 我们将展示不同的错误处理方法：

  - 异常的基本使用

  - 创建自定义的异常处理器

  - 多个异常

  - 重新抛出异常

  - 设置顶层异常处理器

> 注意：异常应该仅仅在错误情况下使用，而不应该用于在一个指定的点跳转到代码的另一个位置

#### 异常的基本使用

当异常被抛出时，其后的代码不会继续执行，PHP 会尝试查找匹配的 `catch` 代码块

- 如果异常没有被捕获，而且又没用使用 `set_exception_handler()` 作相应的处理的话

- 那么将发生一个严重的错误(致命错误)，并且输出 `Uncaught Exception` (未捕获异常)的错误消息

让我们尝试抛出一个异常，同时不去捕获它：

```php
<?php
// 创建一个有异常处理的函数
function checkNum($number)
{
  if($number>1)
  {
    throw new Exception("Value must be 1 or below");
  }
  return true;
}

// 触发异常
checkNum(2);
?>
```

上面的代码会得到类似这样的一个错误：

```
Fatal error: Uncaught exception 'Exception' with message 'Value must be 1 or below' in /www/runoob/test/test.php:7 Stack trace: #0 /www/runoob/test/test.php(13): checkNum(2) #1 {main} thrown in /www/runoob/test/test.php on line 7
```

#### `Try` 、`throw` 和 `catch`

要避免上面实例中出现的错误，我们需要创建适当的代码来处理异常，适当的处理异常代码应该包括：

- `try`

  使用异常的函数应该位于 `try` 代码块内

  如果没有触发异常，则代码将照常继续执行

  但是如果异常被触发，会抛出一个异常

- `throw`

  里规定如何触发异常

  每一个 `throw` 必须对应至少一个 `catch`

- `catch`

  `catch` 代码块会捕获异常，并创建一个包含异常信息的对象

让我们触发一个异常：

```php
<?php
// 创建一个有异常处理的函数
function checkNum($number)
{
  if($number>1)
  {
    throw new Exception("变量值必须小于等于 1");
  }
    return true;
}

// 在 try 块 触发异常
try
{
  checkNum(2);
  // 如果抛出异常，以下文本不会输出
  echo '如果输出该内容，说明 $number 变量';
}

// 捕获异常
catch(Exception $e)
{
  echo 'Message: ' .$e->getMessage();
}
?>
```

上面代码将得到类似这样一个错误：

```
Message: 变量值必须小于等于 1
```

上面的代码抛出了一个异常，并捕获了它：

- 创建 `checkNum()` 函数

  它检测数字是否大于 `1`

  如果是，则抛出一个异常

- 在 `try` 代码块中调用 `checkNum()` 函数

- `checkNum()` 函数中的异常被抛出

- `catch` 代码块接收到该异常，并创建一个包含异常信息的对象 `$e`

- 通过从这个 `exception` 对象调用 `$e->getMessage()` ，输出来自该异常的错误消息

#### 创建一个自定义的 `Exception` 类

为了遵循 `每个 throw 必须对应一个 catch` 的原则，我们可以设置一个顶层的异常处理器来处理漏掉的错误

- 创建自定义的异常处理程序非常简单

  我们简单地创建了一个专门的类，当 PHP 中发生异常时，可调用其函数

  该类必须是 exception 类的一个扩展

- 下面实例中，我们自定义的 `customException` 类继承了 PHP 的 `exception` 类的所有属性，我们可向其添加自定义的函数：

```php
<?php
class customException extends Exception
{
  public function errorMessage()
  {
    // 错误信息
    $errorMsg = '错误行号 ' . $this->getLine() . ' in ' . $this->getFile() . '：<b>' . $this->getMessage() . '</b>不是一个合法的 E-Mail 地址';
    return $errorMsg;
  }
}

$email = "someone@example...com";

try
{
  // 检测邮箱
  if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE)
  {
    // 如果是个不合法的邮箱地址，抛出异常
    throw new customException($email);
  }
}
catch(customException $e)
{
// display custom message
echo $e->errorMessage();
}
?>
```

- 上面的代码抛出了一个异常，并通过一个自定义的 `exception` 类来捕获它：

  - `customException()` 类是作为旧的 `exception` 类的一个扩展来创建的

    这样它就继承了旧的 `exception` 类的所有属性和方法

  - 创建 `errorMessage()` 函数

    如果 `e-mail` 地址不合法，则该函数返回一条错误消息

  - 把 `$email` 变量设置为不合法的 `e-mail` 地址字符串

  - 执行 `try` 代码块，由于 `e-mail` 地址不合法，因此抛出一个异常

  - `catch` 代码块捕获异常，并显示错误消息


> 这个新的类 `customException` 是旧的 `exception` 类的副本，外加 `errorMessage()` 函数
> - 正因为它是旧类的副本，因此它从旧类继承了属性和方法，我们可以使用 `exception` 类的方法，比如 `getLine()` 、`getFile()` 和 `getMessage()`

#### 多个异常

> 可以为一段脚本使用多个异常，来检测多种情况

可以使用多个 `if..else` 代码块，或一个 `switch` 代码块，或者嵌套多个异常：

- 这些异常能够使用不同的 exception 类，并返回不同的错误消息

```php
<?php
class customException extends Exception
{
  public function errorMessage()
  {
    // 错误信息
    $errorMsg = '错误行号 ' . $this->getLine() . ' in ' . $this->getFile() . ': <b>' . $this->getMessage() . '</b>不是一个合法的 E-Mail 地址';
    return $errorMsg;
  }
}

$email = "someone@example.com";

try
{
  // 检测邮箱
  if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE)
  {
    // 如果是个不合法的邮箱地址，抛出异常
    throw new customException($email);
  }
  // 检测 "example" 是否在邮箱地址中
  if(strpos($email, "example") !== FALSE)
  {
    throw new Exception("$email 是 example 邮箱");
  }
}
catch(customException $e)
{
  echo $e->errorMessage();
}
catch(Exception $e)
{
  echo $e->getMessage();
}
?>
```

上面的代码测试了两种条件，如果其中任何一个条件不成立，则抛出一个异常：

- `customException()` 类是作为旧的 exception 类的一个扩展来创建的

  这样它就继承了旧的 exception 类的所有属性和方法

- 创建 `errorMessage()` 函数

  如果 e-mail 地址不合法，则该函数返回一个错误消息

- 把 `$email` 变量设置为一个字符串，该字符串是一个有效的 `e-mail` 地址，但包含字符串 `example`

- 执行 `try` 代码块，在第一个条件下，不会抛出异常

- 由于 `e-mail` 含有字符串 `example` ，第二个条件会触发异常

- `catch` 代码块会捕获异常，并显示恰当的错误消息

> #### 注意：
> 以上实例中，如果 `customException` 类抛出了异常，但没有捕获 `customException` ，仅仅捕获了 `base exception` ，则在那里处理异常

#### 重新抛出异常

有时，当异常被抛出时，我们也许希望以不同于标准的方式对它进行处理

- 可以在一个 `catch` 代码块中再次抛出异常

- 脚本应该对用户隐藏系统错误

  - 对程序员来说，系统错误也许很重要，但是用户对它们并不感兴趣

  - 为了让用户更容易使用，我们可以再次抛出带有对用户比较友好的消息的异常

```php
<?php
class customException extends Exception
{
  public function errorMessage()
  {
    // 错误信息
    $errorMsg = $this->getMessage().' 不是一个合法的 E-Mail 地址。';
    return $errorMsg;
  }
}

$email = "someone@example.com";

try
{
  try
  {
    // 检测 "example" 是否在邮箱地址中
    if(strpos($email, "example") !== FALSE)
    {
      // 如果是个不合法的邮箱地址，抛出异常
      throw new Exception($email);
    }
  }
  catch(Exception $e)
  {
    // 重新抛出异常
    throw new customException($email);
  }
}
catch (customException $e)
{
  // 显示自定义信息
  echo $e->errorMessage();
}
?>
```

上面的代码检测在邮件地址中是否含有字符串 `example` ，如果有，则再次抛出异常：

- `customException()` 类是作为旧的 exception 类的一个扩展来创建的

  这样它就继承了旧的 exception 类的所有属性和方法

- 创建 `errorMessage()` 函数

  如果 `e-mail` 地址不合法，则该函数返回一个错误消息

- 把 `$email` 变量设置为一个字符串，该字符串是一个有效的 `e-mail` 地址，但包含字符串 `example`

- `try` 代码块包含另一个 `try` 代码块，这样就可以再次抛出异常

- 由于 `e-mail` 包含字符串 `example` ，因此触发异常

- `catch` 代码块捕获到该异常，并重新抛出 `customException`

- 捕获到 `customException` ，并显示一条错误消息

> 如果在当前的 `try` 代码块中异常没有被捕获，则它将在更高层级上查找 `catch` 代码块

#### 设置顶层异常处理器

`set_exception_handler()` 函数可设置处理所有未捕获异常的用户定义函数：

```php
<?php
function myException($exception)
{
  echo "<b>Exception:</b> " , $exception->getMessage();
}

// 设置顶层异常处理器
set_exception_handler('myException');

throw new Exception('Uncaught Exception occurred');
?>
```

以上代码的输出如下所示：

```
Exception: Uncaught Exception occurred
```

- 在上面的代码中，不存在 `catch` 代码块，而是触发顶层的异常处理程序，应该使用此函数来捕获所有未被捕获的异常

#### 异常的规则

- 需要进行异常处理的代码应该放入 `try` 代码块内，以便捕获潜在的异常

- 每个 `try` 或 `throw` 代码块必须至少拥有一个对应的 `catch` 代码块

- 使用多个 `catch` 代码块可以捕获不同种类的异常

- 可以在 `try` 代码块内的 `catch` 代码块中抛出(再次抛出)异常

> 简而言之：如果抛出了异常，就必须捕获它

### 过滤器

过滤器用于验证和过滤来自非安全来源的数据，比如用户的输入

- 测试、验证和过滤用户输入或自定义数据是任何 Web 应用程序的重要组成部分

- PHP 的过滤器扩展的设计目的是使数据过滤更轻松快捷

#### 为什么使用过滤器

几乎所有的 Web 应用程序都依赖外部的输入

- 这些数据通常来自用户或其他应用程序(比如 web 服务)

- 通过使用过滤器，您能够确保应用程序获得正确的输入类型

> 应该始终对外部数据进行过滤！
>> 输入过滤是最重要的应用程序安全课题之一

什么是外部数据？

- 来自表单的输入数据
- `Cookies`
- `Web services data`
- 服务器变量
- 数据库查询结果

#### 函数和过滤器

如需过滤变量，请使用下面的过滤器函数之一：

- `filter_var()`

  通过一个指定的过滤器来过滤单一的变量

- `filter_var_array()`

  通过相同的或不同的过滤器来过滤多个变量

- `filter_input`

  获取一个输入变量，并对它进行过滤

- `filter_input_array`

  获取多个输入变量，并通过相同的或不同的过滤器对它们进行过滤

在下面的实例中，我们用 `filter_var()` 函数验证了一个整数：

```php
<?php
$int = 123;

if(!filter_var($int, FILTER_VALIDATE_INT))
{
  echo("不是一个合法的整数");
}
else
{
  echo("是个合法的整数");
}
?>
```

上面的代码使用了 `FILTER_VALIDATE_INT` 过滤器来过滤变量

- 由于这个整数是合法的，因此上面的代码将输出：

![图片](https://www.runoob.com/wp-content/uploads/2013/08/804F6274-14CB-4110-81C0-B1F3FF360C55.jpg)

- 如果我们尝试使用一个非整数的变量(比如 `"123abc"` )，则将输出：`Integer is not valid`

> 如需查看完整的函数和过滤器列表[【请访问我们的 PHP Filter 参考手册】](https://www.runoob.com/php/php-ref-filter.html)

#### `Validating` 和 `Sanitizing`

> 这是两种过滤器

`Validating` 过滤器：

- 用于验证用户输入
- 严格的格式规则(比如 `URL` 或 `E-Mail` 验证)
- 如果成功则返回预期的类型，如果失败则返回 `FALSE`

`Sanitizing` 过滤器：

- 用于允许或禁止字符串中指定的字符
- 无数据格式规则
- 始终返回字符串

#### 选项和标志

选项和标志用于向指定的过滤器添加额外的过滤选项

- 不同的过滤器有不同的选项和标志

- 在下面的实例中，我们用 `filter_var()` 和 `"min_range"` 以及 `"max_range"` 选项验证了一个整数：

```php
<?php
$var=300;

$int_options = array(
  "options"=>array
  (
    "min_range"=>0,
    "max_range"=>256
  )
);

if(!filter_var($var, FILTER_VALIDATE_INT, $int_options))
{
  echo("不是一个合法的整数");
}
else
{
  echo("是个合法的整数");
}
?>
```

- 就像上面的代码一样，选项必须放入一个名为 `"options"` 的相关数组中

  - 如果使用标志，则不需在数组内

- 由于整数是 `300` ，它不在指定的范围内，以上代码的输出将是：

```
不是一个合法的整数
```

> 如需查看完整的函数和过滤器列表[【请访问我们的 PHP Filter 参考手册，可以看到每个过滤器的可用选项和标志】](https://www.runoob.com/php/php-ref-filter.html)

#### 验证输入

让我们试着验证来自表单的输入

- 我们需要做的第一件事情是确认是否存在我们正在查找的输入数据

- 然后我们用 `filter_input()` 函数过滤输入的数据

- 在下面的实例中，输入变量 `"email"` 被传到 PHP 页面

```php
<?php
if(!filter_has_var(INPUT_GET, "email"))
{
  echo("没有 email 参数");
}
else
{
  if (!filter_input(INPUT_GET, "email", FILTER_VALIDATE_EMAIL))
  {
    echo "不是一个合法的 E-Mail";
  }
  else
  {
    echo "是一个合法的 E-Mail";
  }
}
?>
```

以上实例测试结果如下：

![图片](https://www.runoob.com/wp-content/uploads/2013/08/22F99ABA-ADDE-4C37-8C70-D312C8208E00.jpg)

上面的实例有一个通过 `"GET"` 方法传送的输入变量 `email` ：

- 检测是否存在 `"GET"` 类型的 `"email"` 输入变量

- 如果存在输入变量，检测它是否是有效的 `e-mail` 地址

#### 净化输入

让我们试着清理一下从表单传来的 URL

- 首先，我们要确认是否存在我们正在查找的输入数据

- 然后，我们用 `filter_input()` 函数来净化输入数据

在下面的实例中，输入变量 `"url"` 被传到 PHP 页面：

```php
<?php
if(!filter_has_var(INPUT_GET, "url"))
{
  echo("没有 url 参数");
}
else
{
  $url = filter_input(INPUT_GET, "url", FILTER_SANITIZE_URL);
  echo $url;
}
?>
```

上面的实例有一个通过 `"GET"` 方法传送的输入变量 `url` ：

- 检测是否存在 `"GET"` 类型的 `"url"` 输入变量

- 如果存在此输入变量，对其进行净化(删除非法字符)，并将其存储在 `$url` 变量中

假如输入变量是一个类似这样的字符串：`"http://www.ruåånoøøob.com/"` ，则净化后的 `$url` 变量如下所示：

![图片](https://www.runoob.com/wp-content/uploads/2013/08/1BDAF0B6-492D-455C-B8DE-EAB62929C4CA.jpg)

#### 过滤多个输入

> 表单通常由多个输入字段组成，为了避免对 `filter_var` 或 `filter_input` 函数重复调用，我们可以使用 `filter_var_array` 或 `filter_input_array` 函数

在本例中，我们使用 `filter_input_array()` 函数来过滤三个 `GET` 变量

- 接收到的 `GET` 变量是 `一个名字` 、`一个年龄` 以及 `一个 e-mail 地址` ：

```php
<?php
$filters = array
(
  "name" => array
  (
    "filter"=>FILTER_SANITIZE_STRING
  ),
  "age" => array
  (
    "filter"=>FILTER_VALIDATE_INT,
    "options"=>array
    (
      "min_range"=>1,
      "max_range"=>120
    )
  ),
  "email"=> FILTER_VALIDATE_EMAIL
);

$result = filter_input_array(INPUT_GET, $filters);

if (!$result["age"])
{
  echo("年龄必须在 1 到 120 之间。<br>");
}
elseif(!$result["email"])
{
  echo("E-Mail 不合法<br>");
}
else
{
  echo("输入正确");
}
?>
```

上面的实例有三个通过 `"GET"` 方法传送的输入变量 ( `name` 、`age` 和 `email` )：

- 设置一个数组，其中包含了输入变量的名称和用于指定的输入变量的过滤器

- 调用 `filter_input_array()` 函数，参数包括 `GET` 输入变量及刚才设置的数组

- 检测 `$result` 变量中的 `"age"` 和 `"email"` 变量是否有非法的输入

  - 如果存在非法输入，在使用 `filter_input_array()` 函数之后，输入变量为 `FALSE`

> `filter_input_array()` 函数的第二个参数可以是数组或单一过滤器的 `ID`
> - 如果该参数是单一过滤器的 `ID` ，那么这个指定的过滤器会过滤输入数组中所有的值
> - 如果该参数是一个数组，那么此数组必须遵循下面的规则：
>> - 必须是一个关联数组，其中包含的输入变量是数组的键(比如 `"age"` 输入变量)
>> - 此数组的值必须是过滤器的 `ID` ，或者是规定了过滤器、标志和选项的数组

#### 使用 `Filter Callback`

通过使用 `FILTER_CALLBACK` 过滤器，可以调用自定义的函数，把它作为一个过滤器来使用

- 这样，我们就拥有了数据过滤的完全控制权

- 我们可以创建自己的自定义函数，也可以使用已存在的 PHP 函数

- 将我们准备用到的过滤器的函数，按指定选项的规定方法进行规定

  - 在关联数组中，带有名称 `"options"`

在下面的实例中，我们使用了一个自定义的函数把所有 `"_"` 转换为 `"."` ：

```php
<?php
function convertSpace($string)
{
  return str_replace("_", ".", $string);
}

$string = "www_runoob_com!";

echo filter_var($string, FILTER_CALLBACK, array("options"=>"convertSpace"));
?>
```

上面代码的结果如下所示：

```
www.runoob.com!
```

上面的实例把所有 `"_"` 转换成 `"."` ：

- 创建一个把 `"_"` 替换为 `"."` 的函数

- 调用 `filter_var()` 函数，它的参数是 `FILTER_CALLBACK` 过滤器以及包含我们的函数的数组

### 高级过滤器

#### 检测一个数字是否在一个范围内

以下实例使用了 `filter_var()` 函数来检测一个 `INT` 型的变量是否在 `1` 到 `200` 内：

```php
<?php
$int = 122;
$min = 1;
$max = 200;

if (filter_var($int, FILTER_VALIDATE_INT, array("options" => array("min_range"=>$min, "max_range"=>$max))) === false) {
  echo("变量值不在合法范围内");
} else {
  echo("变量值在合法范围内");
}
?>
```

输出结果为：

```
变量值在合法范围内
```

#### 检测 `IPv6` 地址

以下实例使用了 `filter_var()` 函数来检测一个 `$ip` 变量是否是 `IPv6` 地址：

```php
<?php
$ip = "2001:0db8:85a3:08d3:1319:8a2e:0370:7334";

if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6) === false) {
  echo("$ip 是一个 IPv6 地址");
} else {
  echo("$ip 不是一个 IPv6 地址");
}
?>
```

输出结果为：

```
2001:0db8:85a3:08d3:1319:8a2e:0370:7334 是一个 IPv6 地址
```

#### 检测 `URL` - 必须包含 `QUERY_STRING` (查询字符串)

以下实例使用了 `filter_var()` 函数来检测 `$url` 是否包含查询字符串：

```php
<?php
$url = "http://www.runoob.com";

if (!filter_var($url, FILTER_VALIDATE_URL, FILTER_FLAG_QUERY_REQUIRED) === false) {
  echo("$url 是一个合法的 URL");
} else {
  echo("$url 不是一个合法的 URL");
}
?>
```

输出结果为：

```
http://www.runoob.com 不是一个合法的 URL
```

#### 移除 `ASCII` 值大于 `127` 的字符

以下实例使用了 `filter_var()` 函数来移除字符串中 `ASCII` 值大于 `127` 的字符，同样它也能移除 `HTML` 标签：

```php
<?php
$str = "<h1>Hello WorldÆØÅ!</h1>";

$newstr = filter_var($str, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
echo $newstr;
?>
```

输出结果为：

```
Hello World!
```

#### [【PHP 过滤器参考手册】](https://www.runoob.com/php/php-ref-filter.html)

### JSON

如何使用 PHP 语言来编码和解码 JSON 对象？

#### 环境配置

在 `php 5.2.0` 及以上版本已经内置 JSON 扩展

#### JSON 函数

函数|描述
-|-
json_encode|对变量进行 JSON 编码
json_decode|对 JSON 格式的字符串进行解码，转换为 PHP 变量
json_last_error|返回最后发生的错误

#### `json_encode`

`json_encode()` 用于对变量进行 JSON 编码，该函数如果执行成功返回 `JSON 数据` ，否则返回 `FALSE`

- 语法

```
string json_encode ( $value [, $options = 0 ] )
```

- 参数

- `value`

  要编码的值

  该函数只对 `UTF-8` 编码的数据有效

- `options`

  由以下常量组成的二进制掩码：

  - `JSON_HEX_QUOT`
  - `JSON_HEX_TAG`
  - `JSON_HEX_AMP`
  - `JSON_HEX_APOS`
  - `JSON_NUMERIC_CHECK`
  - `JSON_PRETTY_PRINT`
  - `JSON_UNESCAPED_SLASHES`
  - `JSON_FORCE_OBJECT`

以下实例演示了如何将 PHP 数组转换为 JSON 格式数据：

```php
<?php
  $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
  echo json_encode($arr);
?>
```

以上代码执行结果为：

```
{"a":1,"b":2,"c":3,"d":4,"e":5}
```

以下实例演示了如何将 PHP 对象转换为 JSON 格式数据：

```php
<?php
  class Emp {
    public $name = "";
    public $hobbies  = "";
    public $birthdate = "";
  }
  $e = new Emp();
  $e->name = "sachin";
  $e->hobbies  = "sports";
  $e->birthdate = date('m/d/Y h:i:s a', "8/5/1974 12:20:03 p");
  $e->birthdate = date('m/d/Y h:i:s a', strtotime("8/5/1974 12:20:03"));

  echo json_encode($e);
?>
```

以上代码执行结果为：

```
{"name":"sachin","hobbies":"sports","birthdate":"08\/05\/1974 12:20:03 pm"}
```

#### `json_decode`

`json_decode()` 函数用于对 JSON 格式的字符串进行解码，并转换为 PHP 变量

- 语法

```
mixed json_decode ($json_string [,$assoc = false [, $depth = 512 [, $options = 0 ]]])
```

- 参数

  - json_string

    待解码的 JSON 字符串，必须是 UTF-8 编码数据

  - assoc

    当该参数为 TRUE 时，将返回数组，FALSE 时返回对象。

  - depth

    整数类型的参数，它指定递归深度

  - options

    二进制掩码，目前只支持 JSON_BIGINT_AS_STRING

以下实例演示了如何解码 JSON 数据：

```php
<?php
  $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

  var_dump(json_decode($json));
  var_dump(json_decode($json, true));
?>
```

以上代码执行结果为：

```
object(stdClass)#1 (5) {
    ["a"] => int(1)
    ["b"] => int(2)
    ["c"] => int(3)
    ["d"] => int(4)
    ["e"] => int(5)
}

array(5) {
    ["a"] => int(1)
    ["b"] => int(2)
    ["c"] => int(3)
    ["d"] => int(4)
    ["e"] => int(5)
}
```


## `PHP 7` 新特性

> `PHP 7+` 版本极大地改进了性能，在一些 `WordPress` 基准测试当中，性能可以达到 `PHP 5.6` 的 `3` 倍

`PHP 7+` 版本新加特性如下表所示[【点击查看详细：菜鸟教程 `PHP 7` 新特性】](https://www.runoob.com/php/php7-new-features.html)：

序号|内容
-|-
1|PHP 标量类型与返回值类型声明
2|PHP NULL 合并运算符
3|PHP 太空船运算符(组合比较符)
4|PHP 常量数组
5|PHP 匿名类
6|PHP Closure::call()
7|PHP 过滤 unserialize()
8|PHP IntlChar()
9|PHP CSPRNG
10|PHP 7 异常
11|PHP 7 use 语句
12|PHP 7 错误处理
13|PHP intdiv() 函数
14|PHP 7 Session 选项
15|PHP 7 废弃特性
16|PHP 7 移除的扩展
17|PHP 7 移除的 SAPI


## PHP XML

### XML Expat 解析器

内建的 Expat 解析器使在 PHP 中处理 XML 文档成为可能

#### XML 是什么？

- XML 用于描述数据，其焦点是数据是什么

  - XML 文件描述了数据的结构

- 在 XML 中，没有预定义的标签

  - 我们必须定义自己的标签

> 如需学习更多关于 XML 的知识[【请访问：菜鸟教程 XML 教程】](https://www.runoob.com/xml/xml-tutorial.html)

#### Expat 是什么？

> 如需 `读取和更新` 、`创建和处理` 一个 XML 文档，您需要 XML 解析器

有两种基本的 XML 解析器类型：

- 基于树的解析器：

  这种解析器把 XML 文档转换为树型结构

  它分析整篇文档，并提供了对树中元素的访问，例如文档对象模型(DOM)

- 基于事件的解析器：

  将 XML 文档视为一系列的事件

  当某个具体的事件发生时，解析器会调用函数来处理

Expat 解析器是基于事件的解析器：

- 基于事件的解析器集中在 XML 文档的内容，而不是它们的结构

- 正因为如此，基于事件的解析器能够比基于树的解析器更快地访问数据

请看下面的 XML 片段：

```xml
<from>Jani</from>
```

基于事件的解析器把上面的 XML 报告为一连串的三个事件：

- 开始元素：from

- 开始 CDATA 部分，值：Jani

- 关闭元素：from

上面的 XML 实例包含了形式良好的 XML

- 不过这个实例是无效的 XML，因为没有与它关联的文档类型声明(DTD)。

- 然而，在使用 Expat 解析器时，这没有区别

  Expat 是不检查有效性的解析器，忽略任何 DTD

- 作为一款基于事件、非验证的 XML 解析器，Expat 快速且轻巧，十分适合 PHP 的 Web 应用程序

> 注意：XML 文档必须形式良好，否则 Expat 会生成错误

#### 安装

XML Expat 解析器函数是 PHP 核心的组成部分，无需安装就可以使用这些函数

#### XML 文件

下面的 XML 文件将应用在我们的实例中：

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>
```

#### 初始化 XML 解析器

我们要在 PHP 中初始化 XML 解析器，为不同的 XML 事件定义处理器，然后解析这个 XML 文件

```php
<?php
// Initialize the XML parser
$parser=xml_parser_create();

// Function to use at the start of an element
function start($parser,$element_name,$element_attrs)
{
  switch($element_name)
  {
  case "NOTE":
    echo "-- Note --<br>";
    break;
  case "TO":
    echo "To: ";
    break;
  case "FROM":
    echo "From: ";
    break;
  case "HEADING":
    echo "Heading: ";
    break;
  case "BODY":
    echo "Message: ";
  }
}

// Function to use at the end of an element
function stop($parser,$element_name)
{
  echo "<br>";
}

// Function to use when finding character data
function char($parser,$data)
{
  echo $data;
}

// Specify element handler
xml_set_element_handler($parser,"start","stop");

// Specify data handler
xml_set_character_data_handler($parser,"char");

// Open XML file
$fp=fopen("test.xml","r");

// Read data
while ($data=fread($fp,4096))
{
  xml_parse($parser,$data,feof($fp)) or die (sprintf("XML Error: %s at line %d",xml_error_string(xml_get_error_code($parser)),xml_get_current_line_number($parser)));
}

// Free the XML parser
xml_parser_free($parser);
?>
```

以上代码将输出：

```
-- Note --
To: Tove
From: Jani
Heading: Reminder
Message: Don't forget me this weekend!
```

工作原理：

- 通过 `xml_parser_create()` 函数初始化 XML 解析器

- 创建配合不同事件处理程序的的函数

- 添加 `xml_set_element_handler()` 函数来定义，当解析器遇到开始和结束标签时执行哪个函数

- 添加 `xml_set_character_data_handler()` 函数来定义，当解析器遇到字符数据时执行哪个函数

- 通过 `xml_parse()` 函数来解析文件 `"test.xml"`

- 万一有错误的话，添加 `xml_error_string()` 函数把 XML 错误转换为文本说明

- 调用 `xml_parser_free()` 函数来释放分配给 `xml_parser_create()` 函数的内存

#### [【更多 PHP Expat 解析器的信息】](https://www.runoob.com/php/php-ref-xml.html)

### XML DOM

内建的 DOM 解析器使在 PHP 中处理 XML 文档成为可能

#### DOM 是什么？

> `W3C DOM` 提供了针对 HTML 和 XML 文档的标准对象集，以及用于访问和操作这些文档的标准接口

`W3C DOM` 被分为不同的部分( `Core` 、`XML` 和 `HTML` )和不同的级别( `DOM Level 1/2/3` )：

- Core DOM

  为任何结构化文档定义标准的对象集

- XML DOM

  为 XML 文档定义标准的对象集

- HTML DOM

  为 HTML 文档定义标准的对象集

> 如需学习更多关于 `XML DOM` 的知识[【请访问我们的 XML DOM 教程】](https://www.runoob.com/xml/xml-dom.html)

#### 加载和输出 XML

我们需要初始化 XML 解析器，加载 XML ，并把它输出：

```php
<?php
$xmlDoc = new DOMDocument();
$xmlDoc->load("note.xml");

print $xmlDoc->saveXML();
?>
```

以上代码将输出：

```
ToveJaniReminder Don't forget me this weekend!
```

如果我们在浏览器窗口中查看源代码，会看到下面的 HTML：

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>
```

上面的实例创建了一个 `DOMDocument-Object` ，并把 `"note.xml"` 中的 XML 载入这个文档对象中

- `saveXML()` 函数把内部 XML 文档放入一个字符串，这样我们就可以输出它

#### 遍历 XML

我们要初始化 XML 解析器，加载 XML，并遍历 `<note>` 元素的所有元素：

```php
<?php
$xmlDoc = new DOMDocument();
$xmlDoc->load("note.xml");

$x = $xmlDoc->documentElement;
foreach ($x->childNodes AS $item)
{
  print $item->nodeName . " = " . $item->nodeValue . "<br>";
}
?>
```

以上代码将输出：

```
#text =
to = Tove
#text =
from = Jani
#text =
heading = Reminder
#text =
body = Don't forget me this weekend!
#text =
```

在上面的实例中，我们看到了每个元素之间存在空的文本节点

- 当 XML 生成时，它通常会在节点之间包含空白

- XML DOM 解析器把它们当作普通的元素，如果我们不注意它们，有时会产生问题

> 如需学习更多关于 `XML DOM` 的知识[【请访问我们的 XML DOM 教程】](https://www.runoob.com/xml/xml-dom.html)

### `SimpleXML`

`SimpleXML` 处理最普通的 XML 任务，其余的任务则交由其它扩展处理

- SimpleXML 是 `PHP 5` 中的新特性

- SimpleXML 扩展提供了一种获取 XML 元素的名称和文本的简单方式

- 与 DOM 或 Expat 解析器相比，SimpleXML 仅仅用几行代码就可以从 XML 元素中读取文本数据

SimpleXML 可把 XML 文档(或 XML 字符串)转换为对象，比如：

- 元素被转换为 `SimpleXMLElement` 对象的单一属性

  当同一级别上存在多个元素时，它们会被置于数组中

- 属性通过使用关联数组进行访问，其中的索引对应属性名称

- 元素内部的文本被转换为字符串

  如果一个元素拥有多个文本节点，则按照它们被找到的顺序进行排列

当执行类似下列的基础任务时，SimpleXML 使用起来非常快捷：

- 读取/提取 XML 文件/字符串的数据

- 编辑文本节点或属性

> 然而，在处理高级 XML 时，比如命名空间，最好使用 Expat 解析器或 XML DOM

#### 安装

从 `PHP 5` 开始，SimpleXML 函数是 PHP 核心的组成部分

- 无需安装就可以使用这些函数

#### SimpleXML 实例一

假设我们有如下的 XML 文件 `"note.xml"` ：

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<note>
<to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```

现在我们想要输出上面的 XML 文件的不同信息：

- 输出 `$xml` 变量(是 `SimpleXMLElement` 对象)的键和元素

```php
<?php
$xml=simplexml_load_file("note.xml");
print_r($xml);
?>
```

以上代码将输出：

```
SimpleXMLElement Object ( [to] => Tove [from] => Jani [heading] => Reminder [body] => Don't forget me this weekend! )
```

#### SimpleXML 实例二

输出 XML 文件中每个元素的数据：

```php
<?php
$xml=simplexml_load_file("note.xml");
echo $xml->to . "<br>";
echo $xml->from . "<br>";
echo $xml->heading . "<br>";
echo $xml->body;
?>
```

以上代码将输出：

```
Tove
Jani
Reminder
Don't forget me this weekend!
```

#### SimpleXML 实例三

输出每个子节点的元素名称和数据：

```php
<?php
$xml=simplexml_load_file("note.xml");
echo $xml->getName() . "<br>";

foreach($xml->children() as $child)
{
  echo $child->getName() . ": " . $child . "<br>";
}
?>
```

以上代码将输出：

```
note
to: Tove
from: Jani
heading: Reminder
body: Don't forget me this weekend!
```

#### [【更多 PHP SimpleXML 的信息】](https://www.runoob.com/php/php-ref-simplexml.html)


## PHP 与 AJAX

### AJAX 简介

AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术

#### AJAX 是什么？

> AJAX = Asynchronous JavaScript and XML

AJAX 是一种用于创建快速动态网页的技术

- AJAX 通过在后台与服务器进行少量数据交换，使网页实现异步更新

  这意味着可以在不重载整个页面的情况下，对网页的某些部分进行更新

- 传统的网页(不使用 AJAX)如果需要更新内容，必须重载整个页面

> 有很多使用 AJAX 的应用程序案例：`Google Maps` 、`Gmail` 、`Youtube` 和 `Facebook`

#### AJAX 如何工作


![图片](https://www.runoob.com/wp-content/uploads/2013/08/ajax.gif)

#### AJAX 基于因特网标准

AJAX 基于因特网标准，并使用以下技术组合：

- XMLHttpRequest 对象

  与服务器异步交互数据

- JavaScript/DOM

  显示/取回信息

- CSS

  设置数据的样式

- XML

  常用作数据传输的格式

> lamp AJAX 应用程序与浏览器和平台无关的！

#### 谷歌搜索建议(Google Suggest)

随着谷歌搜索建议功能在 2005 的发布，AJAX 开始流行起来

> 谷歌搜索建议( `Google Suggest` )使用 AJAX 创造出动态性极强的 web 界面：
>> 当我们在谷歌的搜索框中键入内容时，JavaScript 会把字符发送到服务器，服务器则会返回建议列表

#### [【更多关于 AJAX 的知识】](https://www.runoob.com/ajax/)

### AJAX PHP 实例

> AJAX 被用于创建交互性更强的应用程序

下面的实例将演示当用户在输入框中键入字符时，网页如何与 Web 服务器进行通信：

- 当用户在上面的输入框中键入字符时，会执行 `showHint()` 函数，该函数由 `onkeyup` 事件触发

```php
<html>
<head>
<script>
function showHint(str)
{
  if (str.length==0)
  {
    document.getElementById("txtHint").innerHTML="";
    return;
  }
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行的代码
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行的代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","gethint.php?q="+str,true);
  xmlhttp.send();
}
</script>
</head>
<body>

<p><b>在输入框中输入一个姓名:</b></p>
<form>
姓名: <input type="text" onkeyup="showHint(this.value)">
</form>
<p>返回值: <span id="txtHint"></span></p>

</body>
</html>
```

上述实例中：

- 如果输入框是空的 `str.length==0` ，该函数会清空 `txtHint` 占位符的内容，并退出该函数

- 如果输入框不是空的，那么 `showHint()` 会执行以下步骤：

  - 创建 `XMLHttpRequest` 对象
  - 创建在服务器响应就绪时执行的函数
  - 向服务器上的文件发送请求
  - 请注意添加到 URL 末端的参数 `q` ，包含输入框的内容

#### PHP 文件

上面这段通过 JavaScript 调用的服务器页面是名为 `gethint.php` 的 PHP 文件，其源代码会检查姓名数组，然后向浏览器返回对应的姓名：

```php
<?php
// 将姓名填充到数组中
$a[]="Anna";
$a[]="Brittany";
$a[]="Cinderella";
$a[]="Diana";
$a[]="Eva";
$a[]="Fiona";
$a[]="Gunda";
$a[]="Hege";
$a[]="Inga";
$a[]="Johanna";
$a[]="Kitty";
$a[]="Linda";
$a[]="Nina";
$a[]="Ophelia";
$a[]="Petunia";
$a[]="Amanda";
$a[]="Raquel";
$a[]="Cindy";
$a[]="Doris";
$a[]="Eve";
$a[]="Evita";
$a[]="Sunniva";
$a[]="Tove";
$a[]="Unni";
$a[]="Violet";
$a[]="Liza";
$a[]="Elizabeth";
$a[]="Ellen";
$a[]="Wenche";
$a[]="Vicky";

//从请求URL地址中获取 q 参数
$q=$_GET["q"];

//查找是否由匹配值， 如果 q>0
if (strlen($q) > 0)
{
  $hint="";
  for($i=0; $i<count($a); $i++)
  {
    if (strtolower($q)==strtolower(substr($a[$i],0,strlen($q))))
    {
      if ($hint=="")
      {
        $hint=$a[$i];
      }
      else
      {
        $hint=$hint." , ".$a[$i];
      }
    }
  }
}

// 如果没有匹配值设置输出为 "no suggestion"
if ($hint == "")
{
  $response="no suggestion";
}
else
{
  $response=$hint;
}

//输出返回值
echo $response;
?>
```

上述实例中，如果 JavaScript 发送了任何文本(即 `strlen($q) > 0` )，则会发生：

- 查找匹配 JavaScript 发送的字符的姓名

- 如果未找到匹配，则将响应字符串设置为 `"no suggestion"`

- 如果找到一个或多个匹配姓名，则用所有姓名设置响应字符串

- 把响应发送到 `"txtHint"` 占位符

#### [【 PHP Ajax 跨域问题解决方案】](https://www.runoob.com/w3cnote/php-ajax-cross-border.html)

### AJAX 与 MySQL

AJAX 可用来与数据库进行交互式通信

#### AJAX 数据库实例

本例将使用到 Websites 表 SQL 文件[【 `websites.sql` 】](http://static.runoob.com/download/websites.sql)

- 将要使用的数据库表如下所示：

  ```
  mysql> select * from websites;
  +----+--------------+---------------------------+-------+---------+
  | id | name         | url                       | alexa | country |
  +----+--------------+---------------------------+-------+---------+
  | 1  | Google       | https://www.google.cm/    | 1     | USA     |
  | 2  | 淘宝       | https://www.taobao.com/   | 13    | CN      |
  | 3  | 菜鸟教程 | http://www.runoob.com/    | 4689  | CN      |
  | 4  | 微博       | http://weibo.com/         | 20    | CN      |
  | 5  | Facebook     | https://www.facebook.com/ | 3     | USA     |
  +----+--------------+---------------------------+-------+---------+
  5 rows in set (0.01 sec)
  ```

- HTML 页面 test.html 文件

  当用户在上面的下拉列表中选择某位用户时，会执行名为 `showSite()` 的函数

  该函数由 `onchange` 事件触发

  ```html
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  <script>
  function showSite(str)
  {
    if (str=="")
    {
      document.getElementById("txtHint").innerHTML="";
      return;
    }
    if (window.XMLHttpRequest)
    {
      // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp=new XMLHttpRequest();
    }
    else
    {
      // IE6, IE5 浏览器执行代码
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET","getsite_mysql.php?q="+str,true);
    xmlhttp.send();
  }
  </script>
  </head>
  <body>

  <form>
  <select name="users" onchange="showSite(this.value)">
  <option value="">选择一个网站:</option>
  <option value="1">Google</option>
  <option value="2">淘宝</option>
  <option value="3">菜鸟教程</option>
  <option value="4">微博</option>
  <option value="5">Facebook</option>
  </select>
  </form>
  <br>
  <div id="txtHint"><b>网站信息显示在这里……</b></div>

  </body>
  </html>
  ```

  上述实例中，`showSite()` 函数会执行以下步骤：

  - 检查是否有网站被选择
  - 创建 `XMLHttpRequest` 对象
  - 创建在服务器响应就绪时执行的函数
  - 向服务器上的文件发送请求
  - 请注意添加到 URL 末端的参数 `q` ，包含输入框的内容

- PHP 后台文件 `getsite_mysql.php`

  其源代码会运行一次针对 MySQL 数据库的查询，然后在 HTML 表格中返回结果

  ```php
  <?php
  $q = isset($_GET["q"]) ? intval($_GET["q"]) : '';

  if(empty($q)) {
    echo '请选择一个网站';
    exit;
  }

  $con = mysqli_connect('localhost','root','123456');
  if (!$con)
  {
    die('Could not connect: ' . mysqli_error($con));
  }
  // 选择数据库
  mysqli_select_db($con,"test");
  // 设置编码，防止中文乱码
  mysqli_set_charset($con, "utf8");

  $sql="SELECT * FROM Websites WHERE id = '".$q."'";

  $result = mysqli_query($con,$sql);

  echo "<table border='1'>
  <tr>
  <th>ID</th>
  <th>网站名</th>
  <th>网站 URL</th>
  <th>Alexa 排名</th>
  <th>国家</th>
  </tr>";

  while($row = mysqli_fetch_array($result))
  {
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['url'] . "</td>";
    echo "<td>" . $row['alexa'] . "</td>";
    echo "<td>" . $row['country'] . "</td>";
    echo "</tr>";
  }
  echo "</table>";

  mysqli_close($con);
  ?>
  ```

  上述实例中，当查询从 JavaScript 发送到 PHP 文件时，将发生：

  - PHP 打开一个到 MySQL 数据库的连接
  - 找到选中的用户
  - 创建 HTML 表格，填充数据，并发送回 `txtHint` 占位符

### AJAX 与 XML

AJAX 可用来与 XML 文件进行交互式通信

#### AJAX XML 实例

下面的实例将演示网页如何通过 AJAX 从 XML 文件读取信息

- HTML 页面

  当用户在上面的下拉列表中选择某张 `CD` 时，会执行名为 `showCD()` 的函数

  该函数由 `onchange` 事件触发

  ```html
  <html>
  <head>
  <script>
  function showCD(str)
  {
    if (str=="")
    {
      document.getElementById("txtHint").innerHTML="";
      return;
    }
    if (window.XMLHttpRequest)
    {
      // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行
      xmlhttp=new XMLHttpRequest();
    }
    else
    {
      // IE6, IE5 浏览器执行
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET","getcd.php?q="+str,true);
    xmlhttp.send();
  }
  </script>
  </head>
  <body>

  <form>
  Select a CD:
  <select name="cds" onchange="showCD(this.value)">
  <option value="">Select a CD:</option>
  <option value="Bob Dylan">Bob Dylan</option>
  <option value="Bonnie Tyler">Bonnie Tyler</option>
  <option value="Dolly Parton">Dolly Parton</option>
  </select>
  </form>
  <div id="txtHint"><b>CD info will be listed here...</b></div>

  </body>
  </html>
  ```

  上述实例中，showCD() 函数会执行以下步骤：

  - 检查是否有 `CD` 被选择
  - 创建 `XMLHttpRequest` 对象
  - 创建在服务器响应就绪时执行的函数
  - 向服务器上的文件发送请求
  - 请注意添加到 URL 末端的参数 `q` ，包含输入框的内容

- PHP 后台文件 `getcd.php`

  PHP 脚本加载[【 XML 文档 `cd_catalog.xml` 】](https://www.runoob.com/try/demo_source/cd_catalog.xml)，运行针对 XML 文件的查询，并以 HTML 返回结果

  ```php
  <?php
  $q=$_GET["q"];

  $xmlDoc = new DOMDocument();
  $xmlDoc->load("cd_catalog.xml");

  $x=$xmlDoc->getElementsByTagName('ARTIST');

  for ($i=0; $i<=$x->length-1; $i++)
  {
    // 处理元素节点
    if ($x->item($i)->nodeType==1)
    {
      if ($x->item($i)->childNodes->item(0)->nodeValue == $q)
      {
        $y=($x->item($i)->parentNode);
      }
    }
  }

  $cd=($y->childNodes);

  for ($i=0;$i<$cd->length;$i++)
  {
    // 处理元素节点
    if ($cd->item($i)->nodeType==1)
    {
      echo("<b>" . $cd->item($i)->nodeName . ":</b> ");
      echo($cd->item($i)->childNodes->item(0)->nodeValue);
      echo("<br>");
    }
  }
  ?>
  ```

  当 CD 查询从 JavaScript 发送到 PHP 页面时，将发生：

  - PHP 创建 XML DOM 对象
  - 查找所有 `<artist>` 元素中与 JavaScript 所传数据相匹配的名字
  - 输出 `album` 的信息，并发送回 `txtHint` 占位符

### AJAX 实时搜索

AJAX 可为用户提供更友好、交互性更强的搜索体验

#### AJAX Live Search 实例

实时的搜索与传统的搜索相比，具有很多优势：

- 当键入数据时，就会显示出匹配的结果

- 当继续键入数据时，对结果进行过滤

- 如果结果太少，删除字符就可以获得更宽的范围

在下面的实例中，我们将演示一个实时的搜索，在您键入数据的同时即可得到搜索结果

- HTML 页面

  当用户在上面的输入框中键入字符时，会执行 `showResult()` 函数

  该函数由 `onkeyup` 事件触发

  ```html
  <html>
  <head>
  <script>
  function showResult(str)
  {
    if (str.length==0)
    {
      document.getElementById("livesearch").innerHTML="";
      document.getElementById("livesearch").style.border="0px";
      return;
    }
    if (window.XMLHttpRequest)
    {
      // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行
      xmlhttp=new XMLHttpRequest();
    }
    else
    {
      // IE6, IE5 浏览器执行
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        document.getElementById("livesearch").innerHTML=xmlhttp.responseText;
        document.getElementById("livesearch").style.border="1px solid #A5ACB2";
      }
    }
    xmlhttp.open("GET","livesearch.php?q="+str,true);
    xmlhttp.send();
  }
  </script>
  </head>
  <body>

  <form>
  <input type="text" size="30" onkeyup="showResult(this.value)">
  <div id="livesearch"></div>
  </form>

  </body>
  </html>
  ```

  上述实例中，如果输入框是空的 `str.length==0` ，该函数会清空 `livesearch` 占位符的内容，并退出该函数

  如果输入框不是空的，那么 `showResult()` 会执行以下步骤：

  - 创建 `XMLHttpRequest` 对象
  - 创建在服务器响应就绪时执行的函数
  - 向服务器上的文件发送请求
  - 请注意添加到 URL 末端的参数 `q` ，包含输入框的内容

- PHP 文件 `livesearch.php`

  其源代码会搜索 XML 文件中匹配搜索字符串的标题，并返回结果

  ```php
  <?php
  $xmlDoc=new DOMDocument();
  $xmlDoc->load("links.xml");

  $x=$xmlDoc->getElementsByTagName('link');

  // 从 URL 中获取参数 q 的值
  $q=$_GET["q"];

  // 如果 q 参数存在则从 xml 文件中查找数据
  if (strlen($q)>0)
  {
    $hint="";
    for($i=0; $i<($x->length); $i++)
    {
      $y=$x->item($i)->getElementsByTagName('title');
      $z=$x->item($i)->getElementsByTagName('url');
      if ($y->item(0)->nodeType==1)
      {
        // 找到匹配搜索的链接
        if (stristr($y->item(0)->childNodes->item(0)->nodeValue,$q))
        {
          if ($hint=="")
          {
            $hint="<a href='" . $z->item(0)->childNodes->item(0)->nodeValue . "' target='_blank'>" . $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
          }
          else
          {
            $hint=$hint . "<br /><a href='" . $z->item(0)->childNodes->item(0)->nodeValue . "' target='_blank'>" . $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
          }
        }
      }
    }
  }

  // 如果没找到则返回 "no suggestion"
  if ($hint=="")
  {
      $response="no suggestion";
  }
  else
  {
      $response=$hint;
  }

  // 输出结果
  echo $response;
  ?>
  ```

  上述实例中，如果 JavaScript 发送了任何文本(即 `strlen($q) > 0` )，则会发生：

  - 加载 XML 文件到新的 XML DOM 对象
  - 遍历所有的 `<title>` 元素，以便找到匹配 JavaScript 所传文本
  - 在 `$response` 变量中设置正确的 URL 和标题。如果找到多于一个匹配，所有的匹配都会添加到变量
  - 如果没有找到匹配，则把 `$response` 变量设置为 `"no suggestion"`

### AJAX RSS 阅读器

RSS 阅读器用于阅读 RSS Feed

#### AJAX RSS 阅读器实例

在下面的实例中，我们将演示一个 RSS 阅读器，通过它，来自 RSS 的内容在网页不进行刷新的情况下被载入：

- HTML 页面

  当用户在上面的下拉列表中选择某个 `RSS-feed` 时，会执行名为 `showRSS()` 的函数

  该函数由 `onchange` 事件触发

  ```html
  <html>
  <head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  <script>
  function showRSS(str)
  {
    if (str.length==0)
    {
      document.getElementById("rssOutput").innerHTML="";
      return;
      }
    if (window.XMLHttpRequest)
    {
      // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp=new XMLHttpRequest();
    }
    else
    {
      // IE6, IE5 浏览器执行代码
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        document.getElementById("rssOutput").innerHTML=xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET","getrss.php?q="+str,true);
    xmlhttp.send();
  }
  </script>
  </head>
  <body>

  <form>
  <select onchange="showRSS(this.value)">
  <option value="">选择一个 RSS-feed:</option>
  <option value="rss">读取 RSS 数据</option>
  </select>
  </form>
  <br>
  <div id="rssOutput">RSS-feed 数据列表...</div>
  </body>
  </html>
  ```

  上述实例中，showRSS() 函数会执行以下步骤：

  - 检查是否有 `RSS-feed` 被选择
  - 创建 `XMLHttpRequest` 对象
  - 创建在服务器响应就绪时执行的函数
  - 向服务器上的文件发送请求
  - 请注意添加到 URL 末端的参数 `q` ，包含输入框的内容

- xml 文件 `rss_demo.xml`

  ```xml
  <rss version="2.0">
  <channel>
  <title>菜鸟教程</title>
  <link>http://www.runoob.com</link>
  <description>学的不仅技术，更是梦想！！！</description>
  <item>
  <title>RSS 教程</title>
  <link>http://www.runoob.com/rss/rss-tutorial.html</link>
  <description>通过使用 RSS，您可以有选择地浏览您感兴趣的以及与您的工作相关的新闻。</description>
  </item>
  <item>
  <title>XML 教程</title>
  <link>http://www.runoob.com/xml/xml-tutorial.html</link>
  <description>XML 指可扩展标记语言（eXtensible Markup Language）。</description>
  </item>
  </channel>
  </rss>
  ```

- PHP 文件 `getrss.php`

  ```php
  <?php
  // rss 文件
  $xml="rss_demo.xml";

  $xmlDoc = new DOMDocument();
  $xmlDoc->load($xml);

  // 从 "<channel>" 中读取元素
  $channel=$xmlDoc->getElementsByTagName('channel')->item(0);
  $channel_title = $channel->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
  $channel_link = $channel->getElementsByTagName('link')->item(0)->childNodes->item(0)->nodeValue;
  $channel_desc = $channel->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue;

  // 输出 "<channel>" 中的元素
  echo("<p><a href='" . $channel_link
    . "'>" . $channel_title . "</a>");
  echo("<br>");
  echo($channel_desc . "</p>");

  // 输出 "<item>" 中的元素
  $x=$xmlDoc->getElementsByTagName('item');
  for ($i=0; $i<=1; $i++) {
      $item_title=$x->item($i)->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
      $item_link=$x->item($i)->getElementsByTagName('link')->item(0)->childNodes->item(0)->nodeValue;
      $item_desc=$x->item($i)->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue;
      echo ("<p><a href='" . $item_link . "'>" . $item_title . "</a>");
      echo ("<br>");
      echo ($item_desc . "</p>");
  }
  ?>
  ```

  当 `RSS feed` 的请求从 JavaScript 发送到 PHP 文件时，将发生：

  - 检查哪个 `RSS feed` 被选中
  - 创建一个新的 XML DOM 对象
  - 在 xml 变量中加载 RSS 文档
  - 从 `channel` 元素中提取并输出元素
  - 从 `item` 元素中提取并输出元素

### AJAX 投票实例

在下面的实例中，我们将演示一个投票程序，通过它，投票结果在网页不进行刷新的情况下被显示

- HTML 页面文件 `poll.html`

  当用户选择上面的某个选项时，会执行名为 `getVote()` 的函数

  该函数由 `onclick` 事件触发

  ```html
  <html>
  <head>
  <meta charset="utf-8">
  <title>菜鸟教程(runoob.com)</title>
  <script>
  function getVote(int) {
    if (window.XMLHttpRequest) {
      // IE7+, Firefox, Chrome, Opera, Safari 执行代码
      xmlhttp=new XMLHttpRequest();
    } else {
      // IE6, IE5 执行代码
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        document.getElementById("poll").innerHTML=xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET","poll_vote.php?vote="+int,true);
    xmlhttp.send();
  }
  </script>
  </head>
  <body>

  <div id="poll">
  <h3>你喜欢 PHP 和 AJAX 吗?</h3>
  <form>
  是:
  <input type="radio" name="vote" value="0" onclick="getVote(this.value)">
  <br>
  否:
  <input type="radio" name="vote" value="1" onclick="getVote(this.value)">
  </form>
  </div>

  </body>
  </html>
  ```

  上述实例中，`getVote()` 函数会执行以下步骤：

  - 创建 `XMLHttpRequest` 对象
  - 创建在服务器响应就绪时执行的函数
  - 向服务器上的文件发送请求
  - 请注意添加到 URL 末端的参数 `q` ，包含下拉列表的内容

- 文本文件 `poll_result.txt`

  ```
  3||4
  ```

  第一个数字表示 `"Yes"` 的投票数，第二个数字表示 `"No"` 的投票数

  > 请记得只允许您的 Web 服务器来编辑该文本文件
  >> 不要让其他人获得访问权，除了 Web 服务器( PHP )

- PHP 文件 `poll_vote.php`

  ```php
  <?php
  $vote = htmlspecialchars($_REQUEST['vote']);

  // 获取文件中存储的数据
  $filename = "poll_result.txt";
  $content = file($filename);

  // 将数据分割到数组中
  $array = explode("||", $content[0]);
  $yes = $array[0];
  $no = $array[1];

  if ($vote == 0)
  {
    $yes = $yes + 1;
  }

  if ($vote == 1)
  {
    $no = $no + 1;
  }

  // 插入投票数据
  $insertvote = $yes."||".$no;
  $fp = fopen($filename,"w");
  fputs($fp,$insertvote);
  fclose($fp);
  ?>

  <h2>结果:</h2>
  <table>
    <tr>
    <td>是:</td>
    <td>
    <span style="display: inline-block; background-color:green;width:<?php echo(100*round($yes/($no+$yes),2)); ?>px;height:20px;"></span>
    <?php echo(100*round($yes/($no+$yes),2)); ?>%
    </td>
    </tr>
    <tr>
    <td>否:</td>
    <td>
    <span style="display: inline-block; background-color:red;width:<?php echo(100*round($no/($no+$yes),2)); ?>px;height:20px;"></span>
    <?php echo(100*round($no/($no+$yes),2)); ?>%
    </td>
    </tr>
  </table>
  ```

  上述实例中，当所选的值从 JavaScript 发送到 PHP 文件时，将发生：

  - 获取 `poll_result.txt` 文件的内容
  - 把文件内容放入变量，并向被选变量累加 `1`
  - 把结果写入 `poll_result.txt` 文件
  - 输出图形化的投票结果

#### 参考资料

上述实例中的做法很不安全，攻击者能用简短的代码攻破！

```js
//无限循环脚本
var Vote = 0;//你的票。
setInterval(function(){
  getVote(Vote);
},2000);
```

那么，怎样更安全？

- 可以用 Cookies 记录下投票，这样攻击者还需清理 Cookies

```js
if(empty($_COOKIE["voted"])) {
  setcookie("voted","yes!",ime()+60*60*24*365);
} else {
  die("您已经投过票！");
}
```
