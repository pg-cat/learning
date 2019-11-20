# JavaScript 第五代和第六代常用语法

## 变量声明的改变

  1.let  和var的作用一样，是用来声明变量的

    变量提升，let声明的变量不存在变量提升，一定要在声明之后进行使用，不然会出现下方的错误，包括你用let声明函数，也会报错

~~~JavaScript
b();

let b = function(){
  console.log('b');
}
~~~
<font color="red">Cannot access 你生声明的变量名称 before initialization</font>

    块级作用域，在函数或者判断中用let声明的变量，不受外部操作影响，并且在外部无法调用，这个特点叫做块级作用域

~~~JavaScript
if(true){

  let temp;  //重新声明temp变量

  temp = '这是新值';

}
console.log(temp);
~~~

    let声明的变量，不能重复声明同名变量，否则会出现如下错误

<font color="red">Identifier 'b' has already been declared</font>

  2.const

    const具有一切let的属性，并且const多一个特性，叫做暂存性死区，一旦声明变量赋值，无法重新进行赋值了

<font color="red">Assignment to constant variable.</font>

## 箭头函数

    这是一种新的函数声明方式，写起来比较简单

~~~JavaScript
let add = (a,b)=>{
  return a + b;
}
~~~

  等价于

~~~JavaScript
let add = (a,b) => a + b
~~~

## 导入导出的方式

    es5导出模块的方式:module.exports = App

    es6导出模块的方式:export default App

    如果页面上只有一个模块，导出方式如下:
    export default calss App extents Component{}

    es5的导入方式:
    var App = require('地址');

    es6的导入方式:
    import App from '地址';

## 遍历数组的七种方式

### for循环遍历数组

    // 第一种
    for( i = 0 ; i < arr.length ; i ++ ){
      console.log(arr[i]);
    }

    以上这种方式是最简单的，性能中上

    // 第二种
    //
    for( j = 0 , len = arr.length ; j < len ; j ++ ){
      console.log(arr[j]);
    }

    以上方式是效率最高的，避免重复获取数组长度

    // 第三种
    //
    for(a = 0 ; arr[a]!=null ; a++ ){
      console.log(arr[a]);
    }

    弱化版for循环，性能低于第一种方式

    // 第四种
    //
    arr.forEach(function(e){
      console.log(e);
    });

    forEach循环遍历，在jquery中是each，使用频率较高，效率比第一种要低，和第三种方式大致一样

    // 第五种
    //
    for( b in arr ){
      console.log(arr[b]);
    }

    forin循环，在众多循环中，他的效率是最低的，所以虽然很多在职人员使用，但是这一点要说明

    // 第六种map
    //
    arr.map(function(f){
      console.log(f);
    });

    map循环，该循环在实际开发中用法比较广泛，效率不如forEach，但是许多人觉得他写起来非常优雅

    // 第七种forof遍历(有的浏览器不支持，2016年新标准中的)
    //
    for(let value of arr){
      console.log(value);
    }

    这是新的方式，我测试效率不如for循环，但是比forin,forEach要高

## 解构对象，对象产出

   创造对象的函数叫做构造函数，会用函数处理好数据，返回值是一个对象，如果我们要把对象拆开，称之为解构对象

     // 写一个构造函数，用来产生一个对象
     const lunch = () => {
       return {
         drink : '🍺',
         fruit : '🍌',
         dessert : '🍫'
       }
     }
     // 将对象拆开，称之为对象的解构
     let {drink : drink , dessert : dessert , fruit : fruit} = lunch();

     console.log(drink);
     console.log(dessert);
     console.log(fruit);

    如果要将解构这一步进行简写：
    let {drink,dessert,fruit} = lunch();

      const lunch = () => {
        return ['🍺','🍌','🍫'];
      }

      // var arr = lunch();
      //
      // dessert = arr[2];
      // fruit = arr[1];
      // drink = arr[0];

      let [drink,fruit,dessert] = lunch();

      console.log(dessert);
      console.log(fruit);
      console.log(drink);

      let wufan = '今天吃的是'+dessert+'作为甜点,喝的是'+drink+'解渴';

      let wanfan = kitchen `今天吃的是${fruit}作为甜点，没喝酒,我想吃${dessert}作为甜点`;

      function kitchen(str,...value){

        console.log(str); // 纯字符串
        console.log(value);  // 变量字符串

      }

## es6字符串的三个方法

    startsWith()  判断一个字符串是否以某个字符串开头

    endsWith()  判断字符串是否以某个字符串结尾

    includes()  判断一个字符串是否包含某一个字符串

## 展开运算符

    function numbers(a,b,c){

        console.log(a,b,c);

    }

    var arr = [1,2,3];

    // 展开运算符
    // numbers.apply(null,arr);

    // 展开运算符
    numbers(...arr);

  合并数组，也可以使用展开运算符

    let arr = ['张顺','宏毅','羽生'];

    let arr2 = ['船哥','超超',...arr];

    console.log(arr2);

## proto  原型

~~~JavaScript
let lunch = {
  getFood() {
    return '今天中午吃便当';
  }
}

let dinner = {
  getFood(){
    return '今天晚上吃面条';
  }
}

let breakfast = {

  __proto__  : dinner

}

console.log(breakfast.getFood());
// 需要获取某个对象的原型是谁
console.log(Object.getPrototypeOf(breakfast) == dinner);

var time = new String();

console.log(time);

~~~

# Class 类  语法糖

  使用class关键词来修饰一个对象

  一般把初始化的东西放在某个方法中，然后进行自定义属性的添加

  在类里面，会有一个constructor的方法，基于这个类去创建实例，并且会自动执行该方法

~~~JavaScript
class Teacher {

  // food是参数，我们需要传入该参数，并且赋值给对象的自定义属性food
  constructor(food){
    this.food = food
  }

  cook(){
    // 对象的自定义属性food输出 出来
    console.log(this.food);
  }
}

let zhangfan = new Teacher('黄瓜');

zhangfan.cook();
~~~

# iterators 迭代器

  迭代就是轮流交换

  手写迭代器，但是在手写之前，需要了解三元运算符

  判断条件?判断条件为真发生什么:判断条件为假发生什么;

## get/set函数

  get是拿取东西的方法
  set存储东西的方法

    get和set一般可以看做是函数的两个部分，给函数直接赋值的时候，执行的是set方法，会把值按照操作，放入对象中。如果直接调用函数，会执行get方法，会直接把需要的数据return出来

### get/set的使用----Map对象

  Map对象，类似于Java中的字典，和js中的对象的最大区别在于，map对象的键，可以使用函数，对象，或者数组

    new Map()  创建一个Map对象

    set()   向Map对象存储内容

    size  查看map对象中的键值对的个数

    get()   通过键获得值

    delete()  删除map对象里面的某一项

    has()    查看map对象中是否有某个东西

    clear()   清除整个map对象内部内容

----

  如何遍历Map对象：

    用for循环，以遍历数组的方式和用for in循环，遍历对象的方式，都无法遍历map对象

    需要使用forEach循环，并且，写法需要特殊处理

~~~JavaScript
dinner.forEach((value,key)=>{

  console.log(key);

  console.log(value);

});
~~~

### get/set的使用----set对象

  和Map对象的区别在于，其中的值不能重复

  如果创建对象时传递多个参数，那么会出现只传递成功第一个参数

    new Set()  创建一个set对象

    add()   往set中存储数据

    size   查看set对象中的项的个数

    has()  查看对象中是否有某一项

    delete()   删除指定的某一项

    clear()   清空set对象
