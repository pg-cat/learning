#函数

##函数的声明方式

###声明函数

~~~Javascript

function shengming(){

  console.log('这是一个声明函数');

}

~~~

###匿名函数

~~~Javascript

var niming = function(){

  console.log('这是匿名函数');

}

~~~~

##函数的调用

  函数声明之后，必须要调用才会执行

###一般情况下调用并且执行函数

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

###回调函数

  将函数当参数进行使用

  要注意区别于调用函数，调用函数是将函数本身进行执行了，回调函数是将整个函数填入，当做参数进行使用


## 计时器函数

  setInterval(回调函数/匿名函数/自执行函数,计时器多久执行一次的毫秒数)    计时器函数

  clearInterval

  如果要停止计时器，首先需要在调用计时器的时候给与一个计时变量

~~~Javascript

//此处的timer是计时标量

clearInterval(timer);

timer = null;

~~~


##return 函数的返回值

  如果要拿到函数执行的结果，需要用到return;

  需要强制停止执行函数的时候，可以使用return

##结合DOM和BOM来进行练习

  获取页面中可视区域的总体宽度：document.documentElement.clientWidth

  获取页面中可视区域的总体高度：document.documentElement.clientHeight

  获取元素距离页面最左侧的距离：元素.offsetLeft

  获取元素距离页面最顶部的距离：元素.offsetTop

##递归函数

  函数本身调用自己的函数，叫做递归函数

  
