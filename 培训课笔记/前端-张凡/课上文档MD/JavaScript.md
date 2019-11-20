# 个人文件目录

    在进入终端的当前目录，建立文件夹，名字叫做workspace

    mkdir  workspace

# 从明天起，笔记，以及相关的代码，都没天提交到线上git版本库

# ubantu操作系统的基本说明

    sudo   以管理员身份进行运行，一般情况下，如果在线上的服务器上，那么你的默认用户是root，有最高的用户管理权限的

# 必备软件:

## teamviewer

    直接从官网进行下载，如果点击图标无法运行，那么执行以下指令

    sudo apt-get install -f   更新本地数据库，下载所有需要的相关依赖，如果第一次执行，会更新apt

    sudo apt-get update    更新linux的配置文件

    sudo apt-get upgrade   下载已经更新过得配置文件

    所有客户端的应用，都可以通过控制台进行运行

# ubantu中，自带了部分的旧版本环境

    python:2.7.12

    nodejs:4.2.6

## 升级node

    如果要安装npm，需要有aptitude和n

    sudo apt-get install aptitude   安装aptitude

    sudo aptitude install npm     安装npm

    sudo npm install -g n    安装n

    sudo n stable   更新所有相关环境

---


# JavaScript

## 编译语言和翻译语言

    翻译语言就是需要安装环境，通过配置的环境经过翻译之后，成为电脑能够认识的语言

    比如:java,c,c++,python

    编译语言就是电脑能够直接读写的语言，计算机是直接认识的

    比如:javascript,html,css

## javascript的三种输出方式

    alert( )    弹窗警告

    document.write()    在页面输出

    console.log()      在控制台输出

## JavaScript的引入方式

    script 标签，利用src属性，进行引入js代码

    script里面直接书写js代码，位置不限

    如果一对script标签用来引入了js文件，那么就不能在该标签内，书写代码

## 基本数据类型

    typeof   运算符，类似于+用来输出,js的基本数据类型

### undefined  未定义类型

    如果变量不赋值或者直接赋值为undefined  那么他是undefined类型

### Number   数字类型

    数字类型，就是平时用的数字，或者小数，负数，科学技术法等等

    JS不详细区分，整形浮点型

### String   字符串类型

    string类型就是字符串类型，字符串类型在js中就是一串没有任何意义的字符

    字符串需要用单引号或者双引号进行区分

### function  函数类型

    该数据类型，代表一个函数

    function 是声明函数额关键字

### object  对象类型

    对象类型，JS是基于对象的语言，对象属性非常强大

### null   空类型

    空类型是比较特殊的类型，他的基本数据类型仍然是对象

### Boolean 布尔类型

    true

    false

## 运算

    加法运算符

    减法运算符

    乘法运算符

    除法运算符

    ++自增运算

        a++   本身没有先进行+1操作，执行完毕之后，a本身+1

        ++a   先进行+1操作，并且a的值也+1

    --自减运算

    =赋值

    ==等于，为了补足之后的纯数字和字符串两者之间的比较添加了下面的全等于

    ===全等于

    typeof    显示变量的数据类型

    位运算

## 流程控制

### 判断
#### if判断

    if(判断条件)

    只控制下面的第一行代码

    if(判断条件){

    }

      控制大括号内所有的内容，如果判断条件成立，括号内所有内容都会执行，避免调用函数出现死循环

    if(判断条件){

    }else{

    }

      二选一判断，如果{}否则{}

    if(判断条件){

    }else if(判断条件){

    }
    ....
### 循环

#### for 循环

    for(初始化变量;变量判断条件;变量自增/自减){
      循环体
    }

#### while循环

    do{

    }while(条件)

## 获取页面元素

    document.getElementById   通过ID获取页面元素

    document.getElementsByTagName    通过标签名称获取页面元素的数组

    document.getElementsByClassName   通过class值来获取页面元素的数组

# 函数

## 函数的声明方式

### 声明函数

  ~~~Javascript

  function shengming(){

    console.log('这是一个声明函数');

  }

  ~~~

### 匿名函数

  ~~~Javascript

  var niming = function(){

    console.log('这是匿名函数');

  }

  ~~~~

## 函数的调用

    函数声明之后，必须要调用才会执行

### 一般情况下调用并且执行函数

  ~~~Javascript

  // 写一个函数，用来取值0-255的随机数
  function suijishu(){

    //取一个0-1的小数，乘以一个大数，向下取整
    var Num = Math.floor(Math.random()*100000) % 256;

    return Num;

  }

  // 用一个变量接收函数执行的结果
  //var result = suijishu();

  //通过另一个函数，给页面上的div背景颜色
  function bgcolor(){

    ball.style.background = 'rgba('+suijishu()+','+suijishu()+','+suijishu()+',1)';

  }

  ~~~

### 回调函数

    将函数当参数进行使用

    要注意区别于调用函数，调用函数是将函数本身进行执行了，回调函数是将整个函数填入，当做参数进行使用


## 计时器函数

    setInterval(回调函数/匿名函数/自执行函数,计时器多久执行一次的毫秒数)    计时器函数

    clearInterval

    如果要停止计时器，首先需要在调用计时器的时候给与一个计时变量

    setTimeout(回调函数,事件)

    clearTimeout()

  ~~~Javascript

  //此处的timer是计时标量

  clearInterval(timer);

  timer = null;

  ~~~


## return 函数的返回值

    如果要拿到函数执行的结果，需要用到return;

    需要强制停止执行函数的时候，可以使用return

## 结合DOM和BOM来进行练习

    获取页面中可视区域的总体宽度：document.documentElement.clientWidth

    获取页面中可视区域的总体高度：document.documentElement.clientHeight

    获取元素距离页面最左侧的距离：元素.offsetLeft

    获取元素距离页面最顶部的距离：元素.offsetTop

## 递归函数

    函数本身调用自己的函数，叫做递归函数

~~~JavaScript

  function shuchu(n){
    console.log(n);
    if(n>0){
        shuchu(n-1);
    }else{
      console.log('-----------------------');
      return;
    }
    console.log(n);
  }
~~~

# 对象

## 实例化一个对象

~~~JavaScript
//实例化一个对象
var obj = {}

//通过构造函数实例化对象
var obj2 = new Object();
~~~

## 给对象添加方法和属性

~~~JavaScript
var zhangfan = {

  name:'张凡',

  age:'27',

  sex:'男',

  eat:function(){

    console.log('比较能吃');

  }

}

console.log(zhangfan.age);

zhangfan.eat();

~~~

## Date对象

    需要进行实例化操作

    获取当前的时间：var 变量名称 = Date()

    获取指定时间：var 变量名称 = Date(年，月，日，小时，分钟，秒，毫秒)

  |方法|描述|
  ---|---
  getDate()|返回具体的天数
  getDay()|返回具体是星期几，周天返回0
  getMonth()|返回今天是几月，1月是0，所以获取到的数字需要+1
  getTime()|1970年1月1日到现在一共有多少毫秒，时间戳，这个方法非常重要

# HttpRequest(AJAX)

## 实例化对象

  在不同的浏览器中，该对象的名称/叫法不同，所以要解决兼容性问题

~~~JavaScript

  // 声明所需变量
  var xmlhttp = null;

  if( window.XMLHttpRequest ){

    xmlhttp = new XMLHttpRequest();

  }else{

    // 有的版本的chrome，以及linux下的浏览器也是该对象
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }
~~~

## 发送请求

### get请求

    请求的参数，需要携带在url地址中

~~~JavaScript

  //如果是get
  xmlhttp.open(method,urls,true);
  xmlhttp.send();

  //如果服务器给你了反馈，那么会直接出发该事件
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){

      console.log(xmlhttp.responseText);

    }
  }
~~~

### post请求

    请求的参数，需要额外卸载send函数内

~~~JavaScript

  //如果是post
  xmlhttp.open(method,urls,true);
  xmlhttp.send(参数);

  //如果服务器给你了反馈，那么会直接出发该事件
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){

      console.log(xmlhttp.responseText);

    }
  }

~~~

# 数组

## 声明数组的方式

    var 数组变量 = [数组的内容,数组的内容]

    var 数组变量 = new Array(数组内容,数组内容);

    如果用第二种方法声明数组，括号内的参数为一个数字的时候，这时候，这个数字代表数组长度

## 数组的属性和方法

    length    数组的长度

    concat()    链接两个数组或者多个数组，不会改变原来的数组的长度，新的数组需要用变量去接收

    join()    用一个字符链接各个数组元素，需要用一个变量进行接收返回值

    pop()    去掉数组中的最后一个元素，返回值是去掉的那个元素，并且原来的数组会发生改变

    push()   向数组的末尾添加一个元素，会改变原来数组的长度

    slice (开始位置,结束位置)   截取数组中的某一部分，生成的是一个新的数组

    splice (开始位置,删除个数,添加的元素,添加的元素.....)   数组操作函数，数组切割函数，数组万能函数

# 字符串函数

## 内置的属性和方法

  length   代表字符串的长度

  charAt()   返回指定位置的字符

  indexOf()  返回字符串中首次出现某个字符的位置

  includes()  查找字符串中是否含有指定的内容

  slice(开始位置，结束位置)   截取字符串

  substr(开始位置，截取长度)  截取字符串

  split()   把字符串分隔成数组

# 数学对象

## 数学对象的方法

  toFixed()   保留小数点后几位，四舍五入的取值方法

  abs()       返回一个数字的绝对值

  ceil()      向上取整，只保留整数位

  floor()     向下取整。只保留整数位

  max()       计算数字中最大的一个，不能使用数组

  min()       计算数字中最小的一个，不能使用数组

  round()     四舍五入，取整数

### isNaN()  判断一个数字是不是NaN

  NaN:Not a Number

  计算错误导致的变量出现问题，会打印出来NaN

  NaN和任何的数值，变量，接触之后，都会把他们变成NaN

  NaN不等于NaN

  var 变量 = isNaN(填入你要检测的内容)

# 事件

  事件属于DOM，不属于JS，但是没有事件无法处理页面内容

  onblur    失去焦点事件

  onchange  当输入框里面的内容发生改变的时候并且失去焦点的时候，触发该事件

  onfocus   元素获得焦点

  onkeydown   按下键盘上面的某个键

  onmouseover/onmouseenter    鼠标移入

  onmouseout/onmouseleave     鼠标移出

  onmousemove   鼠标移动

      clinetX/clientY    鼠标距离鼠标移动事件的元素左侧的距离/上方的距离

      screenX/screenY    鼠标距离屏幕左侧和屏幕顶部的距离

~~~JavaScript

window.onmousemove = function(e){

  console.log('鼠标移动了');

  console.log(e);

  block.style.left = (e.clientX - block.offsetWidth/2) + 'px';

  block.style.top = (e.clientY -block.offsetHeight/2 ) + 'px';

}

~~~

## document专有事件

  window.close()    关闭窗口，该属性是window里面的写法，但是实际上他是document的方法

## 变量的作用域

  如果一个变量的作用域是在函数内，那么无法全局调用

  一般称最外层声明的变量为全局变量

  函数内部声明的变量为局部变量

# DOM  document的相关操作

  页面上的标签，用js代码获取到之后，我们一般称之为节点(node)

## 节点部分

  相对于页面上的所有节点（标签）进行处理的函数操作，在日常工作中，用的非常多

  createElement('标签名称')   生成一个空的标签

  b.appendChild(a节点)    添加a节点作为b节点的最后一个子元素

  b.insertBefore(a节点)   添加a节点作为b节点的第一个子元素

  b.parentNode    查找b节点的父节点

  b.removeChild()   删除b节点的子节点

  c.className      给c节点设置或者查看c节点的class名称
## 事件部分

  如何绑定事件

  * 以按钮为对象，主动获取，并且添加属性

~~~JavaScript

  // 给button添加点击事件
  var btn = document.getElementsByTagName('button')[0];

  btn.onclick = function(){

    alert('按钮已经被点击了');

  }

~~~
  * 通过HTML属性绑定的方式，进行添加点击事件

~~~JavaScript

// 另一个函数，在括号中添加点击事件
//
function ling(m){

  alert('这是方法2');

  console.log(m);

}

~~~

  * addEventListener() 通过添加事件监听的方式进行事件绑定

  三个参数分别是：

  1. 事件名称
  2. 回调函数，就是触发事件使用的函数
  3. 冒泡还是捕获

----
# HTML5新加标签

## video 视频标签

    <video src="视频地址">
        该浏览器不支持此标签，请换电脑
    </video>

    <video>
        <source src=".avi" type="video/avi">
        <source src=".mp4" type="video/mp4">
        <source src=".ogg" type="video/ogg">
        该浏览器不支持此标签，请换电脑
    </video>

    controls   控制面板属性，如果不写该属性，视频会不显示控制面板

    autoplay   自动播放属性
      true  自动播放
    上面属性，没有效果

    loop   循环次数，如果添加该属性，那么可以设置视频标签的循环次数

    postr  设置视频的预览图片

## 内置方法

    play()  开始播放视频

    pause()  暂停播放视频

    currentSrc  显示视频的url地址，只能获取，不能修改地址

    currentTime  获取当前视频的播放到第几秒

    muted  获取/设置当前视频是否静音

    ended   返回视频是否已经播放结束

    playbackRate  返回视频的播放速度，最大值是16，但是一般情况下都是自己写该功能

# 正则表达式

    \d  表示一个数字
    \D  表示非数字
    \s  匹配的空白字符
    \S  匹配的非空白字符
    \w  匹配数字，字母，下划线
    \W  匹配非数字，字母，下划线
    [a-z] 匹配的是a-z的任何一个英文字母
    [0-9] 匹配的是0-9的任何一个数字

    ^ 以某个东西为开头
    $ 以某个东西为结尾
