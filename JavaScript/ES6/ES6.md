> 以下内容整理自菜鸟教程 ES6 教程

---
---


# 解构赋值

> 针对数组或者对象进行模式匹配，然后对其中的变量进行赋值

## 数组模型的解构

### 基本解构

```js
let [a, b, c] = [1, 2, 3]
// a=1, b=2, c=3
```

### 可嵌套解构
```js
let [a, [[b], c]] = [1, [[2], 3]]
// a=1, b=2, c=3
```

### 可忽略解构
```js
let [a, , b] = [1, 2, 3]
// a=1, b=3
```

### 不完全解构
```js
let [a=1, b] = []
// a=1, b=undefined
```

### 剩余运算符
```js
let [a, ...b] = [1, 2, 3]
// a=1, b=[2, 3]
```

###  字符串

```js
let [a, b, c, d, e, f] = 'hello'
// a='h', b='e', c='l', d='l', e='o', f=undefined
```

## 对象模型的解构

```js
// 现有一个对象
const Tom = {
  name: 'Tom Jones',
  age: 25,
  family: {
    mother: 'Norah Jones',
    father: 'Richard Jones',
    brother: 'Howard Jones'
  }
}
```

### 同时提取 `name` 和 `age` 值时可用

```js
const {name, age} = Tom;
console.log(name) // 结果为 Tom Jones
console.log(age) // 结果为 25
// 需要注意的是：此处或提前已声明过同名的变量，需要注意它们的作用域，避免报错
```

### 若前面已声明过同名的变量，需用括号括起来

```js
let name;
({name, age} = Tom);
console.log(name) // 结果为 Tom Jones
console.log(age) // 结果为 25

// 或者转换变量名来声明同名的变量，这里就把 name 转换为了 m

let name;
let {name:m, age} = Tom;
console.log(m) // 结果为 Tom Jones
console.log(age) // 结果为 25
```

###  嵌套结构对象的值的提取

```js
const {father, mother, brother} = Tom.family
```

### 默认值的使用

> 当对象中没有这个变量，或者此变量当前值为 undefined 时才会被使用

```js
const {name, age, abc='no abc'} = Tom;
```

```js
let {a = 10, b = 5} = {a: 3};
// a = 3; b = 5;

let {a: aa = 10, b: bb = 5} = {a: 3};
// aa = 3; bb = 5;
```


# 新增的数据类型 `Symbol`

> 表示独一无二的值，最大的用法是用来定义对象的唯一属性名

```js
// 相同参数 Symbol() 返回的值不相等
let sy = Symbol("kk");
let sy1 = Symbol("kk");
console.log(sy === sy1); // false
```

## `Symbol` 用法

> `Symbol` 函数栈不能用 `new` 命令，因为 `Symbol` 是原始数据类型，不是对象

```js
let sy = Symbol("KK");
console.log(sy); // Symbol(KK)
console.log(typeof(sy)); // symbol
```

## `Symbol` 作为属性名

> 由于每一个 `Symbol` 的值都是不相等的，所以 `Symbol` 作为对象的属性名，可以保证属性不重名

```js
// 现在一个 Symbol 变量
let sy = Symbol("key1");

// 写法 1
let syObject = {};
syObject[sy] = "kk";
console.log(syObject);
// {Symbol(key1): "kk"}

// 写法 2
let syObject = {
  [sy]: "kk"
};
console.log(syObject);  // {Symbol(key1): "kk"}

// 写法 3
let syObject = {};
Object.defineProperty(syObject, sy, {value: "kk"});
console.log(syObject);   // {Symbol(key1): "kk"}
```

> Symbol 作为对象属性名时不能用 `.` 运算符，要用方括号

```js
// 因为 . 运算符后面是字符串，所以取到的是字符串 sy 属性，而不是 Symbol 值 sy 属性
let syObject = {};
syObject[sy] = "kk";

syObject[sy]; // "kk"
syObject.sy; // undefined
```

> 注意点：Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。但是不会出现在 `for...in` 、 `for...of` 的循环中，也不会被 `Object.keys()` 、 `Object.getOwnPropertyNames()` 返回。如果要读取到一个对象的 Symbol 属性，可以通过 `Object.getOwnPropertySymbols()` 和 `Reflect.ownKeys()` 取到

```js
// 现在一个 Symbol 变量
let sy = Symbol("key1");

let syObject = {
  [sy] : "kk"
};
console.log(syObject);
// {Symbol(key1): "kk"}

for (let i in syObject) {
  console.log(i);
  // 无输出
}

console.log(Object.keys(syObject));
// []

console.log(Object.getOwnPropertyNames(syObject));
// []

console.log(Object.getOwnPropertySymbols(syObject));
// [Symbol(key1)]

console.log(Reflect.ownKeys(syObject));
// [Symbol(key1)]
```

## `Symbol.for()` 查找 `Symbol` 变量

> 返回一个同值但非 Symbol 的变量

> 类似单例模式，首先会在全局搜索被登记的 `Symbol` 中是否有该字符串参数作为名称的 `Symbol` 值，如果有即返回该 `Symbol` 值，若没有则新建并返回一个以该字符串参数为名称的 `Symbol` 值，并登记在全局环境中供搜索

```js
// 这里创建了一个 Symbol 变量 yellow
let yellow = Symbol("Yellow");

// 这里创建的是一个普通变量 yellow1
let yellow1 = Symbol.for("Yellow");
console.log(yellow === yellow1);
// false

// 这里创建的是一个普通变量 yellow2
let yellow2 = Symbol.for("Yellow");
console.log(yellow1 === yellow2);
// true
```

## `Symbol.keyFor()` 查找 `Symbol` 类型值的 `key`

> 用来检测该字符串参数作为名称的 Symbol 值是否已被登记

```js
let sy = Symbol('Yellow');
let yellow = Symbol.for("Yellow");
console.log(Symbol.keyFor(yellow));
// Yellow
```


# `Map` 对象

> Map 对象保存键值对，任何值(对象或者原始值) 都可以作为一个键或一个值

## `Map` 中的 `key`

* 可为 字符串、对象、函数、NaN、undefined，且变量和值可互相代替，但 `{}` `function(){}` 除外，例：

  ```js
  var myMap = new Map();
  var a = NaN;

  // 把 a 和 'abc' 进行绑定
  myMap.set(a, 'abc');

  console.log(myMap.get(a));
  // abc

  // 由 Number(c) 得到 NaN 的值
  console.log(myMap.get(Number(c)));
  // abc
  ```

> 虽然 `NaN` 和任何值甚至和自己都不相等 `(NaN !== NaN 返回true)`，`NaN` 作为 `Map` 的键来说是没有区别的


## 遍历 `Map`

> `for...of` 方法和 `forEach` 方法

```js
var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1,'one');

for (var [key, value] of myMap){
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

myMap.forEach(function(value, key){
  console.log(`${key} = ${value}`)
})
// 0 = zero
// 1 = one
```

## `Map` 对象的操作

### `Map` 与 `Array` 的转换

```js
var kvArray = [["key1", "value1"], ["key2", "value2"]];
console.log(kvArray)

// Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
var myMap = new Map(kvArray);
console.log(myMap)

// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
var outArray = Array.from(myMap);
console.log(outArray)
```

### `Map` 的克隆

```js
var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
var myMap2 = new Map(myMap1);

console.log( myMap1 === myMap2 );
// 结果是 false ，因为 Map 对象构造函数生成实例时，迭代出的新的对象是不相等的，仅仅只是值相同
```

### `Map` 的合并

> 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的

```js
var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
var second = new Map([[1, 'uno'], [2, 'dos']]);

// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
var merged = new Map([...first, ...second]);
```


# `Set` 对象

> 允许你存储任何类型的唯一值，无论是原始值或者是对象引用

## `Set` 中的特殊值，不可重复

* +0 === -0
* undefined === undefined
* NaN !=== NaN ,但在 Set 中只能存一个

## Set 对象的类型转换

### Array 与 Set 互相转换

```js
// Array 转 Set
var mySet = new Set(['a','b','c']);
console.log(mySet);
// Set('a','b','c')

//用...操作符，将 Set 转 Array
var arr = [...mySet];
console.log(arr);
// ['a','b','c']
```

### String 到 Set 的转换

```js
var mySet = new Set('hello');
console.log(mySet);
// Set {'h', 'e', 'l', 'l', 'o'}
```

> `Set` 中 `toString` 方法是不能将 `Set` 转换成 `String`

## `Set` 对象的作用

### 数组去重

```js
var mySet = new Set([1, 2, 3, 4, 4]);
var arr = [...mySet];
console.log(arr);
// [1, 2, 3, 4]
```

### 并集

```js
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]);
console.log(union);
// Set{1, 2, 3, 4}
```

### 交集

```js
var a = new Set([4, 3]);
var abc = [1,2,3].filter(
  x => a.has(x)
)
console.log(abc);
// [3] ，此处 a 必须转化为 Set 对象才具有 has() 方法
```

### 差集

> 表示为 A 有，而 B 没有的部分

```js
var a = new Set([1, 3]);
var abc = [1,2,3].filter(
  x => !a.has(x)
)
console.log(abc);
// [2] ，此处 a 必须转化为 Set 对象才具有 has() 方法
```


# `Proxy`

> 一个 `Proxy` 对象由两个部分组成： `target` `handler`

* 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理

* 不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作

* `handler` 部分的有很多方法，这些方法可无操作，但方法的函数名不可变

## `Proxy` 对象的第一个部分 `target`

* 其可以为空对象

```js
let targetEpt = {}
let handler = {
  get: function(target, key) {
    console.log('getting '+key);
    return target[key]; // 不是target.key
  },
  set: function(target, key, value) {
    console.log('setting '+key);
    target[key] = value;
  }
}
let proxyEpt = new Proxy(targetEpt, handler)
// 调用 get 方法，此时目标对象为空，没有 name 属性

proxyEpt.name
// getting name ，触发了 handler.get

// 调用 set 方法，向目标对象中添加了 name 属性
proxyEpt.name = 'Tom'
// setting name ，触发了 handler.set

// 再次访问 name 并触发 handler.get ，此时已经存在 name 属性
proxyEpt.name
// getting name ，触发了 handler.get

// 通过构造函数新建实例时其实是对目标对象进行了浅拷贝，因此目标对象与代理对象会互相影响
console.log(targetEpt);
// {name: "Tom"}
```

## `Proxy` 对象的第二个部分 `handler`

* 其也可以为空对象

```js
let targetEmpty = {}
let proxyEmpty = new Proxy(targetEmpty,{})
proxyEmpty.name = "Tom"
console.log(proxyEmpty);
// {name: "Tom"}
```

### `handler` 部分的 `get` 方法

* `get(target, propKey, receiver)`

  target|propKey|receiver
  -|-|-
  目标对象|目标对象的当前被选参数|实例化后的对象
  必填|必填|可选

* 用于拦截 `target` 对象上的 `propKey` 的访问操作，意为 `target` 被访问时触发

#### `get` 方法的继承

```js
let proxy = new Proxy({}, {
  get(target, propKey) {
  // 实现私有属性读取保护
    if (propKey[0] === '_') {
      throw new Error(`Invalid attempt to get private -> "${propKey}"`);
    }
  console.log('Getting ' + propKey);
  }
});

let obj = Object.create(proxy);
console.log(obj.name);
// Getting name
// undefined ，因为原对象中就没有 name 这个属性，且 obj 是空对象
```

### `handler` 部分的 `set` 方法

* `set(target, propKey, value, receiver)`

  target|propKey|value|receiver
  -|-|-|-
  目标对象|目标对象的当前被选参数|被赋的值|实例化后的对象
  必填|必填|可选|可选

* 用于拦截 `target` 对象上的 `propKey` 的赋值操作，意为 `target` 的属性被赋值时触发

* 如果目标对象自身的某个属性，不可写且不可配置，那么 `set` 方法将不起作用

* 严格模式下，`set` 代理如果没有返回 `true` ，就会报错

* 第四个参数 receiver 表示原始操作行为所在对象，一般是 Proxy 实例本身

  ```js
  const handler = {
    set: function(obj, prop, value, receiver) {
      obj[prop] = receiver;
      // 此时调整了触发 set() 方法的对象的指向
    }
  };
  const proxy = new Proxy({}, handler);
  // 此时 receiver = proxy

  // 此时随意赋值，触发了 set() 即可
  proxy.name = 'Tom';
  console.log(proxy.name === proxy);
  // true
  console.log(proxy.name);
  // Proxy {name: Proxy}
  console.log(proxy);
  // Proxy {name: Proxy}


  const exam = {}
  Object.setPrototypeOf(exam, proxy);
  // 此时 proxy 的原型赋予给 exam ，相当于 receiver = exam

  // 此时随意赋值，触发了 set() 即可
  exam.name = 1;
  // 此时触发了 set() 方法，赞同于 exam.name = receiver

  console.log(exam.name === exam);
  // true ，因为它们此时都是表示构造函数 Proxy 的第四个参数 receiver ，虽然都是 {} ，但指的是同一个 {}
  console.log(exam.name);
  // Proxy{}
  console.log(exam);
  // Proxy{}
  ```

### `handler` 部分的 `apply` 方法

* `apply(target, ctx, args)`

* 拦截函数的调用、`call` 和 `reply` 操作，在参数传递给目标函数前进行一次 `apply` 方法的处理，再决定是否给目标函数

```js
function sub(a, b){
  return a - b;
}
let handler = {
  apply: function(target, ctx, args){
    console.log('handle apply');
    return Reflect.apply(...arguments);
  }
}
let proxy = new Proxy(sub, handler)
proxy(2, 1)
// handle apply
// 1
```

### `handler` 部分的 `has` 方法

* `has(target, propKey)`

* 用于拦截 `HasProperty` 操作，即在判断 `target` 对象是否存在 `propKey` 属性时，会被这个方法拦截，再决定是否给目标函数

* 此方法不判断一个属性是对象自身的属性，还是继承的属性

* 此方法不拦截 `for ... in` 循环

```js
let  handler = {
  has: function(target, propKey){
    console.log("handle has");
    return propKey in target;
  }
};
let exam = {name: "Tom"};
let proxy = new Proxy(exam, handler);

console.log('name' in proxy)
// handle has
// true

console.log(proxy);
// Proxy {name: "Tom"}
```

### `handler` 部分的 `construct` 方法

* `construct(target, args)`

* 用于拦截 `new` 命令，返回值必须为对象

```js
let handler = {
  construct: function(target, args, newTarget){
    console.log("handle construct");
    return Reflect.construct(target, args, newTarget);
  } }
class exam {
  constructor(name){
    this.name = name;
  }
}
let proxy = new Proxy(exam,handler)
console.log(new proxy("Tom"));
// handle construct
// exam {name: "Tom"}
```

### `handler` 部分的 `deleteProperty` 方法

* `defineProperty(target, propKey, propDesc)`

* 用于拦截 `delete` 操作，如果这个方法抛出错误或者返回 `false` `propKey` 属性就无法被 `delete` 命令删除

```js
var handler = {
  defineProperty (target, key, descriptor) {
  return false;
  // 问题：此处返回 true 时也未改变 target 的值
  }
};
var target = {};
var proxy = new Proxy(target, handler);
proxy.foo = 'bar' // 不会生效
```

> 上面这块代码有问题：`defineProperty()` 并未起到就有的效果

### `handler` 部分的 `getOwnPropertyD` 方法

* `getOwnPropertyDescriptor(target, propKey)`

* 用于拦截 `Object.getOwnPropertyD()` 操作，返回值为属性描述对象或者 `undefined`

```js
let handler = {
  getOwnPropertyDescriptor: function(target, propKey){
    return Object.getOwnPropertyDescriptor(target, propKey);
  }
}
let target = {name: "Tom"}
let proxy = new Proxy(target, handler)
console.log(Object.getOwnPropertyDescriptor(proxy, 'name'))
// {value: "Tom", writable: true, enumerable: true, configurable: true}

console.log(Object.getOwnPropertyDescriptor(proxy, 'me'))
// undefined
```

### `handler` 部分的 `getPrototypeOf` 方法

* `getPrototypeOf(target)`

* 主要用于拦截获取对象原型的操作，包括以下操作：

  ```js
  - Object.prototype.__proto__
  - Object.prototype.isPrototypeOf()
  - Object.getPrototypeOf()
  - Reflect.getPrototypeOf()
  - instanceof
  ```

  ```js
  let exam = {}
  let proxy = new Proxy({},{
    getPrototypeOf: function(target){
    console.log('触发了 getPrototypeOf')
    return exam;
    }
  })
  console.log(Object.getPrototypeOf(proxy));
  // {}
  ```

* 返回值必须是对象或者 `null` ，否则报错

  ```js
  let proxy = new Proxy({},{
    getPrototypeOf: function(target){
      return true;
    }
  })
  Object.getPrototypeOf(proxy)
  // 此处报错：TypeError: 'getPrototypeOf' on proxy: trap returned neither object nor null
  ```

* 如果目标对象不可扩展（`non-extensible`），`getPrototypeOf` 方法必须返回目标对象的原型对象

### `handler` 部分的 `isExtensible` 方法

* `isExtensible(target)`

* 用于拦截 Object.isExtensible 操作

* 该方法只能返回布尔值，否则返回值会被自动转为布尔值

* 它的返回值必须与目标对象的isExtensible属性保持一致，否则会抛出错误

### `handler` 部分的 `ownKeys` 方法

* `ownKeys(target)`

* 用于拦截对象自身属性的读取操作，主要包括以下操作：

  ```js
  - Object.getOwnPropertyNames()
  - Object.getOwnPropertySymbols()
  - Object.keys()
  - or...in
  ```

* 方法返回的数组成员，只能是字符串或 Symbol 值，否则会报错

* 若目标对象中含有不可配置的属性，则必须将这些属性在结果中返回，否则就会报错

* 若目标对象不可扩展，则必须全部返回且只能返回目标对象包含的所有属性，不能包含不存在的属性，否则也会报错

### `handler` 部分的 `preventExtensions` 方法

* `preventExtensions(target)`

* 拦截 Object.preventExtensions 操作

* 该方法必须返回一个布尔值，否则会自动转为布尔值

### `handler` 部分的 `setPrototypeOf` 方法

* `setPrototypeOf`

* 主要用来拦截 Object.setPrototypeOf 方法

* 返回值必须为布尔值，否则会被自动转为布尔值

* 若目标对象不可扩展，setPrototypeOf 方法不得改变目标对象的原型

### `handler` 部分的 `Proxy.revocable` 方法

* `Proxy.revocable()`

* 用于返回一个可取消的 Proxy 实例

```js
// 实例化一个可撤消的代理对象 {"proxy": proxy, "revoke": revoke}
let {proxy, revoke} = Proxy.revocable({}, {});

console.log({proxy, revoke})
// {"proxy": proxy, "revoke": revoke}
console.log(proxy)
// Proxy {}

proxy.name = "Tom";
console.log({proxy, revoke})
// {"proxy": proxy, "revoke": revoke}
console.log(proxy)
// Proxy {name: "Tom"}

// 撤消代理对象
revoke();
console.log(proxy)
// Proxy {}
console.log(proxy.name)
// 报错，因为代理对象 proxy 已被撤消
```


# `Reflect`

* 可以用于获取目标对象的行为，它与 `Object` 类似，但是更易读，为操作对象提供了一种更优雅的方式

* `ES6` 中将 `Object` 的一些明显属于语言内部的方法移植到了 Reflect 对象上（当前某些方法会同时存在于 `Object` 和 `Reflect` 对象上），未来的新方法会只部署在 `Reflect` 对象上

* 对某些方法的返回结果进行了修改，使其更合理。

* 使用函数的方式实现了 `Object` 的命令式操作

* 静态方法：`Reflect.get(target, name, receiver)`

  target|name|receiver
  -|-|-
  目标对象|目标对象的所选属性名|当前所选对象
  必填|必填|可选

```js
let exam = {
  name: "Tom",
  age: 24,
  get info(){
    return this.name + this.age;
  }
}
console.log(Reflect.get(exam, 'name'));
// "Tom"

// 当 target 对象中存在 name 属性的 getter 方法， getter 方法的 this 会绑定 receiver
let receiver = {
  name: "Jerry",
  age: 20
}
console.log(Reflect.get(exam, 'info', receiver));
// Jerry20 ，this 绑定当前使用者，所以指向 receiver

// 当 name 为不存在于 target 对象的属性时，返回 undefined
Reflect.get(exam, 'birth'); // undefined

// 当 target 不是对象时，会报错
Reflect.get(1, 'name');
// TypeError
```

* `Reflect.set(target, name, value, receiver)`

  target|name|value|receiver
  -|-|-|-
  目标对象|目标对象的所选属性名|所选属性名的值|当前所选对象
  必填|必填|可选|可选

> 将 `target` 的 `name` 属性设置为 `value` 。返回值为 `boolean` ，`true` 表示修改成功，`false` 表示失败。当 `target` 为不存在的对象时，会报错

```js
let exam = {
  name: "Tom",
  age: 24,
  set info(value){
    return this.age = value;
  }
}
console.log(exam.age);
// 24

// 执行修改 age 属性的值的判断，这里给出了 25 ，表示修改成功
console.log(Reflect.set(exam, 'age', 25));
// true

console.log(exam.age);
// 25

// value 为空时会将 name 属性清除
Reflect.set(exam, 'age', );
// true

console.log(exam.age);
// undefined

// 当 target 对象中存在 name 属性 setter 方法时，setter 方法中的 this 会绑定 receiver , 所以修改的实际上是 receiver 的属性,
let receiver = {
  age: 18
}
console.log(Reflect.set(exam, 'info', 1, receiver));
// true

console.log(receiver.age);
// 1

let receiver1 = {
  name: 'oppps'
}

console.log(Reflect.set(exam, 'info', 1, receiver1));
// true

console.log(receiver1.age);
// 1
```

* `Reflect.has(obj, name)`

  obj|name
  -|-
  被查找对象|查找的属性名
  必填|必填

> 是 `name in obj` 指令的函数化，用于查找 `name` 属性在 `obj` 对象中是否存在。返回值为 `boolean` 。如果 `obj` 不是对象则会报错 `TypeError`

```js
let exam = {
  name: "Tom",
  age: 24
}

console.log(Reflect.has(exam, 'name'));
// true

console.log(Reflect.has(exam, 'ae'));
// false
```

* `Reflect.deleteProperty(obj, property)`

  * `property` 不存在时，也会返回 `true`

  obj|property
  -|-
  目标对象|需要查找的属性名
  必填|必填

> 是 `delete obj[property]` 的函数化，用于删除 `obj` 对象的 `property` 属性，返回值为 `boolean` 。如果 `obj` 不是对象则会报错 `TypeError`

```js
let exam = {
  name: "Tom",
  age: 24
}
console.log(Reflect.deleteProperty(exam , 'name'));
// true

console.log(exam)
// {age: 24}

// property 不存在时，也会返回 true
console.log(Reflect.deleteProperty(exam , 'name')); // true
```

* `Reflect.construct(obj, args)`

> 等同于 `new target(...args)`

```js
function exam(name,a){
  this.name = name;
  this.a = a;
}

console.log(Reflect.construct(exam, [1,'Tom']));
// exam {name: 1, a: "Tom"}
```

* `Reflect.getPrototypeOf(obj)`

  * 在 `obj` 不是对象时不会像 `Object` 一样把 `obj` 转为对象，而是会报错

> 用于读取 obj 的 _proto_ 属性

```js
class Exam {};
let obj = new Exam();
console.log(Reflect.getPrototypeOf(obj) === Exam.prototype);
// true

console.log(obj);
// Exam {}

console.log(Exam);
// class Exam {}
// true
```

* `Reflect.setPrototypeOf(obj, newProto)`

> 用于设置目标对象的 `prototype`

```js
let obj = {};
let arr = [];

console.log(Reflect.setPrototypeOf(obj, Array.prototype));
// true
console.log(obj);
// Array {}

console.log(Reflect.setPrototypeOf(arr, Object.prototype));
// true
console.log(arr);
// Object []
```

* `Reflect.apply(func, thisArg, args)`

  func|thisArg|args
  -|-|-
  目标函数|目标函数绑定的 `this` 对象|目标函数调用时传入的参数列表
  必填|必填|必填

  * `args` 表示目标函数调用时传入的参数列表，可以是数组或类似数组的对象

  * 若目标函数无法调用，会抛出 `TypeError`

> 等同于 `Function.prototype.apply.call(func, thisArg, args)`

```js
console.log(Reflect.apply(Math.max, Math, [1, 3, 5, 3, 1]));
// 5
```

* `Reflect.defineProperty(target, propertyKey, attributes)`

  target|propertyKey|attributes
  -|-|-
  目标对象|目标对象的属性名|与当前属性名对应的值
  必填|必填|必填

  * 如果 `target` 不是对象，会抛出错误

> 用于为目标对象定义属性

```js
let myDate = {}
Reflect.defineProperty(myDate, 'now', {
  value: () => Date.now()
});

console.log(myDate);
// {now: () => Date.now()}
```

* `Reflect.getOwnPropertyDescriptor(target, propertyKey)`

  * 在 `target` 不是对象时，会抛出错误表示参数非法，不会将非对象转换为对象

> 用于得到 `target` 对象的 `propertyKey` 属性的描述对象

```js
var exam = {}
Reflect.defineProperty(exam, 'name', {
  value: true,
  // name 属性的值

  enumerable: false,
  // name 属性是否具有 enumerable (可枚举性)
})
console.log(exam);
// {name: true}

console.log(Reflect.getOwnPropertyDescriptor(exam, 'name'));
// {value: true, writable: false, enumerable: false, configurable: false}

// propertyKey 属性在 target 对象中不存在时，返回 undefined
console.log(Reflect.getOwnPropertyDescriptor(exam, 'age'));
// undefined
```

* `Reflect.isExtensible(target)`

  * 返回值为 `boolean`

  * 如果 `target` 参数不是对象，会抛出错误

> 用于判断 `target` 对象是否可扩展(是否可添加属性)

```js
let exam = {};
console.log(Reflect.isExtensible(exam));
// true
```

* `Reflect.preventExtensions(target)`

  * 如果 `target` 参数不是对象，会抛出错误

> 用于让 `target` 对象变为不可扩展

```js
let exam = {};
console.log(Reflect.isExtensible(exam));
// true

console.log(Reflect.preventExtensions(exam));
// true

console.log(Reflect.isExtensible(exam));
// false
```

* `Reflect.ownKeys(target)`

> 用于返回 `target` 对象的所有属性，等同于 `Object.getOwnPropertyNames` 与`Object.getOwnPropertySymbols` 之和

```js
var exam = {
  name: 1,
  [Symbol.for('age')]: 4
}
console.log(Reflect.ownKeys(exam));
// ["name", Symbol(age)]
```

> 和 `Symbol()` 不同的是，用 `Symbol.for()` 方法创建的的 `symbol` 会被放入一个全局 `symbol` 注册表中。`Symbol.for()` 并不是每次都会创建一个新的 `symbol` ，它会首先检查给定的 `key` 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。

>  为了防止冲突，最好给你要放入 `symbol` 注册表中的 `symbol` 带上键前缀

```js
Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
```

# 新对象的组合使用

* `Reflect` 对象的方法与 `Proxy` 对象的方法是一一对应的

* `Proxy` 对象的方法可以通过调用 `Reflect` 对象的方法获取默认行为，然后进行额外操作

```js
let exam = {
  name: "Tom",
  age: 24
}
let handler = {
  get: function(target, key){
    console.log("getting "+key);
    return Reflect.get(target,key);
  },
  set: function(target, key, value){
    console.log("setting "+key+" to "+value)
    Reflect.set(target, key, value);
  }
}
let proxy = new Proxy(exam, handler)
proxy.name = "Jerry"
// setting name to Jerry

console.log(proxy.name);
// getting name
// Jerry
```

# ES6 字符串

## 子串的识别

> ES6 之前判断字符串是否包含子串，用 `indexOf` 方法，ES6 新增了子串的识别方法：

* `includes()`：返回布尔值，判断是否找到参数字符串

* `startsWith()`：返回布尔值，判断参数字符串是否在原字符串的头部

* `endsWith()`：返回布尔值，判断参数字符串是否在原字符串的尾部

  * 以上三个方法都可以接受两个参数，需要搜索的字符串，和可选的搜索起始位置索引

  * 这三个方法只返回布尔值，如果需要知道子串的位置，还是得用 `indexOf` 和 `lastIndexOf`

  * 这三个方法如果传入了正则表达式而不是字符串，会抛出错误

  * `indexOf` 和 `lastIndexOf` 这两个方法，它们会将正则表达式转换为字符串并搜索它

## 字符串重复方法 `repeat()`

> 返回新的字符串，表示将字符串重复指定次数返回

```js
console.log("Hello,".repeat(2));
// Hello,Hello,
```

* 如果参数是小数，向下取整

* 如果参数是 `0` 至 `-1` 之间的小数，会进行取整运算，`0` 至 `-1` 之间的小数取整得到 `-0` ，等同于 `repeat` 零次

* 如果参数是 `NaN` ，等同于 `repeat` 零次

* 如果参数是负数或者 `Infinity` ，会报错

* 如果传入的参数是字符串，则会先将字符串转化为数字

  ```js
  console.log("Hello,".repeat("hh"));
  // ""

  console.log("Hello,".repeat("2"));
  // "Hello,Hello,"
  ```

## 字符串补全

* `padStart()`：返回新的字符串，表示用参数字符串从头部补全原字符串。

* `padEnd()`：返回新的字符串，表示用参数字符串从头部补全原字符串

  * 以上两个方法接受两个参数，第一个参数是指定生成的字符串的最大长度，第二个参数是用来补全的字符串。如果没有指定第二个参数，默认用空格填充

    ```js
    console.log("h".padStart(5,"o"));
    // "ooooh"

    console.log("h".padEnd(5,"o"));
    // "hoooo"

    console.log("h".padStart(5));
    // "  h"
    ```

  * 如果指定的长度小于或者等于原字符串的长度，则返回原字符串

    ```js
    console.log("hello".padStart(3,"A"));  // "hello"

    console.log("hello".padStart(5,"A"));
    // "hello"
    ```

  * 如果原字符串加上补全字符串长度大于指定长度，则截去超出位数的补全字符串

    ```js
    console.log("hello".padEnd(10,",world!"));
    // "hello,worl"
    ```

  * 常用于补全位数

    ```js
    console.log("123".padStart(10,"0"));
    // "0000000123"
    ```

## 模板字符串

> 加强版的字符串，用反引号 ` 标识

* 普通字符串

  ```js
  let string = `Hello'\n'world`;
  console.log(string);
  // "Hello'
  // 'world"
  ```

* 多行字符串

  ```js
  let string1 =  `Hey,
  can you stop angry now?`;
  console.log(string1);
  // Hey,
  // can you stop angry now?
  ```

* 插入变量和表达式

  * 变量名写在 ${} 中，${} 中可以放入 JavaScript 表达式

  ```js
  let name = "Mike";
  let age = 27;
  let info = `My Name is ${name},I am ${age+1} years old next year.`
  console.log(info);
  // My Name is Mike,I am 28 years old next year.
  ```

* 调用函数

  ```js
  function f(){
    return "have fun!";
  }
  let string2= `Game start,${f()}`;
  console.log(string2);
  // Game start,have fun!
  ```

> 模板字符串中的换行和空格都是会被保留的

## 标签模板

> 是一个函数的调用，其中调用的参数是模板字符串

```js
alert`Hello world!`;
// 等价于
alert('Hello world!');
```

* 当模板字符串中带有变量，会将模板字符串参数处理成多个参数

  ```js
  function f(stringArr,...values){
    let result = "";
    for(let i=0;i<stringArr.length;i++){
      result += stringArr[i];
      if(values[i]){
        result += values[i];
      }
    }
    console.log(result);
    return result;
  }

  let name = 'Mike';
  let age = 27;
  f`My Name is ${name},I am ${age+1} years old next year.`;
  // "My Name is Mike,I am 28 years old next year."

  f`My Name is ${name},I am ${age+1} years old next year.`;
  // 等价于
  f(['My Name is ',',I am ',' years old next year.'],'Mike',28);
  ```

## 字符串过滤

> 过滤 HTML 字符串，防止用户输入恶意内容

```js
function f(stringArr,...values){
  let result = "";
  for(let i=0;i<stringArr.length;i++){
    result += stringArr[i];
    if(values[i]){
      result += String(values[i])
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    }
  }
  document.body.innerHTML = result;
  return result;
}

name = '<Amy&MIke>';

f`<p>Hi, ${name}.I would like send you some message.</p>`;
// <p>Hi, &lt;Amy&amp;MIke&gt;.I would like send you some message.</p>
```

# ES6 数值

## 数值的表示

* 二进制表示法新写法: 前缀 `0b` 或 `0B`

  ```js
  console.log(0b11 === 3);
  // true
  console.log(0B11 === 3);
  // true
  ```

* 八进制表示法新写法: 前缀 `0o` 或 `0O`

  ```js
  console.log(0o11 === 9);
  // true
  console.log(0O11 === 9);
  // true
  ```

## 常量

* `Number.EPSILON`

  ```js
  console.log(Number.EPSILON < 1 && Number.EPSILON > 0)
  // true
  ```

> `Number.EPSILON` 属性表示 `1` 与大于 `1` 的最小浮点数之间的差

## 最大、最小安全整数

> 安全整数表示在 `JavaScript` 中能够精确表示的整数，安全整数的范围在 `2` 的 `-53` 次方到 `2` 的 `53` 次方之间（不包括两个端点），超过这个范围的整数无法精确表示

### 最大安全整数

* `Number.MAX_SAFE_INTEGER`

> 安全整数范围的上限，即 `2` 的 `53` 次方减 `1`

```js
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
// true

console.log(Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER + 1);
// false

console.log(Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER - 2);
// false
```

### 最小安全整数

* `Number.MIN_SAFE_INTEGER`

> 安全整数范围的下限，即 `2` 的 `53` 次方减 `1` 的负数

## 属性特性

```js
writable：false
enumerable：false
configurable：false
```

## `Number` 对象新方法

* `Number.isFinite()`

  * 没有隐式的 `Number()` 类型转换，所有非数值都返回 `false`

> 用于检查一个数值是否为有限的（ `finite` ），即不是 `Infinity`

```js
console.log( Number.isFinite(1));
// true
console.log( Number.isFinite(0.1));
// true

// NaN 不是有限的
console.log( Number.isFinite(NaN));
// false

console.log( Number.isFinite(Infinity));
// false
console.log( Number.isFinite(-Infinity));
// false

// Number.isFinate 没有隐式的 Number() 类型转换，所有非数值都返回 false
console.log( Number.isFinite('foo'));
// false
console.log( Number.isFinite('15'));
// false
console.log( Number.isFinite(true));
// false
```

* `Number.isNaN()`

  * `NaN` 不是有限的

  * 不存在隐式的 `Number()` 类型转换，非 `NaN` 全部返回 `false`

> 用于检查一个值是否为 NaN 。

```js
console.log(Number.isNaN(NaN));
// true
console.log(Number.isNaN('true'/0));
// true

// 在全局的 isNaN() 中，以下皆返回 true，因为在判断前会将非数值向数值转换
// 而 Number.isNaN() 不存在隐式的 Number() 类型转换，非 NaN 全部返回 false
console.log(Number.isNaN("NaN"));
// false
console.log(Number.isNaN(undefined));
// false
console.log(Number.isNaN({}));
// false
console.log(Number.isNaN("true"));
// false
```

## 从全局移植到 `Number` 对象的方法

* `Number.parseInt()`

  * 不指定进制时默认为 `10` 进制

  * 与全局的 `parseInt()` 函数是同一个函数

> 用于将给定字符串转化为指定进制的整数

```js
// 不指定进制时默认为 10 进制
console.log(Number.parseInt('12.34'));
// 12
console.log(Number.parseInt(12.34));
// 12

// 指定进制
console.log(Number.parseInt('0011',2));
// 3

// 与全局的 parseInt() 函数是同一个函数
console.log(Number.parseInt === parseInt);
// true
```

* `Number.parseFloat()`

  * 无法被解析成浮点数，则返回 `NaN`

  * 与全局的 `parseFloat` 方法是同一个方法

> 用于把一个字符串解析成浮点数

```js
console.log(Number.parseFloat('123.45'));
// 123.45
console.log(Number.parseFloat('123.45abc'));
// 123.45

// 无法被解析成浮点数，则返回 NaN
console.log(Number.parseFloat('abc'));
// NaN

// 与全局的 parseFloat() 方法是同一个方法
console.log(Number.parseFloat === parseFloat);
// true
```

* `Number.isInteger()`

  * `JavaScript` 内部，整数和浮点数采用的是同样的储存方法,因此 `1` 与 `1.0` 被视为相同的值

  * `NaN` 和正负 `Infinity` 不是整数

  * 数值的精度超过 `53` 个二进制位时，由于第 `54` 位及后面的位被丢弃，会产生误判

  * 一个数值的绝对值小于 `Number.MIN_VALUE(5E-324)`，即小于 `JavaScript` 能够分辨的最小值，会被自动转为 `0`，也会产生误判

> 用于判断给定的参数是否为整数

```js
console.log(Number.isInteger(0));
// true

// JavaScript 内部，整数和浮点数采用的是同样的储存方法,因此 1 与 1.0 被视为相同的值
console.log(Number.isInteger(1));
// true
console.log(Number.isInteger(1.0));
// true

console.log(Number.isInteger(1.1));
// false
console.log(Number.isInteger(Math.PI));
// false

// NaN 和正负 Infinity 不是整数
console.log(Number.isInteger(NaN));
// false
console.log(Number.isInteger(Infinity));
// false
console.log(Number.isInteger(-Infinity));
// false

console.log(Number.isInteger("10"));
// false
console.log(Number.isInteger(true));
// false
console.log(Number.isInteger(false));
// false
console.log(Number.isInteger([1]));
// false

// 数值的精度超过 53 个二进制位时，由于第 54 位及后面的位被丢弃，会产生误判
console.log(Number.isInteger(1.0000000000000001));
// true

// 一个数值的绝对值小于 Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨
// 的最小值，会被自动转为 0，也会产生误判
console.log(Number.isInteger(5E-324));
// false
console.log(Number.isInteger(5E-325));
// true
```

* `Number.isSafeInteger()`

> 用于判断数值是否在安全范围内

```js
Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1);
// false
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1);
// false
```

## `Math` 对象的扩展

> `ES6` 在 `Math` 对象上新增了 `17` 个数学相关的静态方法，这些方法只能在 `Math` 中调用

* `Math.cbrt`

  * 会对非数值进行转换

  * 非数值且无法转换为数值时返回 `NaN`

> 用于计算一个数的立方根

```js
console.log(Math.cbrt(1));
// 1
console.log(Math.cbrt(0));
// 0
console.log(Math.cbrt(-1));
// -1

// 会对非数值进行转换
console.log(Math.cbrt('1'));
// 1

// 非数值且无法转换为数值时返回 NaN
console.log(Math.cbrt('hhh'));
// NaN
```

* `Math.imul`

  * 大多数情况下，结果与 a * b 相同

> 两个数以 `32` 位带符号整数形式相乘的结果，返回的也是一个 `32` 位的带符号整数

```js
// 大多数情况下，结果与 a * b 相同
console.log(Math.imul(1, 2));
// 2

// 用于正确返回大数乘法结果中的低位数值
console.log(Math.imul(0x7fffffff, 0x7fffffff));
// 1
```

* `Math.hypot`

  * 非数值会先被转换为数值后进行计算

  * 空值会被转换为 `0`

  * 参数为 `Infinity` 或 `-Infinity` 返回 `Infinity`

  * 参数中存在无法转换为数值的参数时返回 `NaN`

> 用于计算所有参数的平方和的平方根

```js
console.log(Math.hypot(3, 4));
// 5

 // 非数值会先被转换为数值后进行计算
 console.log(Math.hypot(1, 2, '3'));
 // 3.741657386773941
 console.log(Math.hypot(true));
 // 1
 console.log(Math.hypot(false));
 // 0

 // 空值会被转换为 0
 console.log(Math.hypot());
 // 0
 console.log(Math.hypot([]));
 // 0

 // 参数为 Infinity 或 -Infinity 返回 Infinity
 console.log(Math.hypot(Infinity));
 // Infinity
 console.log(Math.hypot(-Infinity));
 // Infinity

 // 参数中存在无法转换为数值的参数时返回 NaN
 console.log(Math.hypot(NaN));
 // NaN
 console.log(Math.hypot(3, 4, 'foo'));
 // NaN
 console.log(Math.hypot({}));
 // NaN
 ```

* `Math.clz32`

  * 当参数为小数时，只考虑整数部分

  * 对于空值或非数值，会转化为数值再进行计算

> 用于返回数字的 `32` 位无符号整数形式的前导 `0` 的个数

## 数字处理

* `Math.trunc`

  * 整数部分为 0 时也会判断符号

  * 会将非数值转为数值再进行处理

  * 空值或无法转化为数值时时返回 NaN

> 用于返回数字的整数部分

* `Math.fround`

  * 对于 `2` 的 `24` 次方取负至 `2` 的 `24` 次方之间的整数（不含两个端点），返回结果与参数本身一致

  * 用于将 `64` 位双精度浮点数转为 `32` 位单精度浮点数

  * 当小数的精度超过 `24` 个二进制位，会丢失精度

  * 参数为其他非数值类型时会将参数进行转换

    ```js
    Math.fround('5');  // 5
    Math.fround(true); // 1
    Math.fround(null); // 0
    Math.fround([]);   // 0
    Math.fround({});   // NaN
    ```

  * 参数为 `NaN` 或 `Infinity` 时返回本身

> 用于获取数字的32位单精度浮点数形式

## 判断

* `Math.sign`

  * 参数为 `0` 时，不同符号的返回不同

  * 判断前会对非数值进行转换

  * 参数为非数值（无法转换为数值）时返回 `NaN`

> 判断数字的符号（正、负、0）

## 对数方法

* `Math.expm1()`

  * 会对非数值进行转换

  * 参数不为数值且无法转换为数值时返回 `NaN`

> 用于计算 `e` 的 `x` 次方减 `1` 的结果，即 `Math.exp(x) - 1`

* `Math.log1p(x)`

  * 参数小于 `-1` 时返回 `NaN`

> 用于计算 `1 + x` 的自然对数，即 `Math.log(1 + x)`

* `Math.log10(x)`

  * 计算前对非数值进行转换

  * 参数为 `0` 时返回 `-Infinity`

  * 参数小于 `0` 或参数不为数值（且无法转换为数值）时返回 `NaN`

> 用于计算以 `10` 为底的 `x` 的对数

* `Math.log2()`

  * 计算前对非数值进行转换

  * 参数为 `0` 时返回 `-Infinity`

  * 参数小于 `0` 或参数不为数值（且无法转换为数值）时返回 `NaN`

> 用于计算 `2` 为底的 `x` 的对数

## 双曲函数方法

* `Math.sinh(x)`: 用于计算双曲正弦。

* `Math.cosh(x)`: 用于计算双曲余弦。

* `Math.tanh(x)`: 用于计算双曲正切。

* `Math.asinh(x)`: 用于计算反双曲正弦。

* `Math.acosh(x)`: 用于计算反双曲余弦。

* `Math.atanh(x)`: 用于计算反双曲正切。

## 指数运算符

> 新增了一个指数运算符 `**`

* 右结合，从右至左计算

* `V8` 引擎的指数运算符与 `Math.pow` 的实现不相同，对于特别大的运算结果，两者会有细微的差异

```js
// 1 的 2次方
console.log(1 ** 2);
// 1

// 右结合，从右至左计算
console.log(2 ** 2 ** 3);
// 256

// **=
let exam = 2;
console.log(exam **= 2);
// 4

console.log(Math.pow(99, 99));
// 3.697296376497263e+197

console.log(99 ** 99);
// 3.697296376497268e+197

console.log(99 ** 99 === Math.pow(99, 99));
// false
```


# ES6 对象

## 属性的简洁表示法

> `ES6` 允许对象的属性直接写变量，这时候属性名是变量名，属性值是变量值

```js
const age = 12;
const name = "Amy";

const person = {age, name};
console.log(person);
// {age: 12, name: "Amy"}

// 等同于

const person = {age: age, name: name}
console.log(person);
// {age: 12, name: "Amy"}
```

### 方法名也可以简写

```js
const person = {
  sayHi(){
  console.log("Hi");
  }
}
console.log(person.sayHi());
// "Hi"

// 等同于

const person = {
  sayHi: function(){
    console.log("Hi");
  }
}
console.log(person.sayHi());
// "Hi"
```

* 如果是 `Generator` 函数，则要在前面加一个星号

  ```js
  const obj = {
  * myGenerator() {
    yield 'hello world';
  }
  };

  //等同于

  const obj = {
  myGenerator: function* () {
    yield 'hello world';
  }
  };
  ```

### 属性名表达式

> ES6允许用表达式作为属性名，但是一定要将表达式放在方括号内

```js
const obj = {
 ["he"+"llo"](){
   return "Hi";
  }
}
console.log(obj.hello());
//"Hi"
```

> 属性的简洁表示法和属性名表达式不能同时使用，否则会报错

```js
// 错误：[hello] 处未赋值
const hello = "Hello";
const obj = {
  [hello]
};
console.log(obj);
// SyntaxError: Unexpected token }
```
```js
const hello = "Hello";
const obj = {
 [hello+"2"]:"world"
};
console.log(obj);
//{Hello2: "world"}
```

## 对象的拓展运算符

> 拓展运算符（`...`）用于取出参数对象所有可遍历属性然后拷贝到当前对象

```js
let person = {name: "Amy", age: 15};
let someone = { ...person };
console.log(...person);
// 报错，此处无 ...person 写法
console.log(someone);
// {name: "Amy", age: 15}
```

### 可用于合并两个对象

```js
let age = {age: 15};
let name = {name: "Amy"};
let person = {...age, ...name};
console.log(person);
// {age: 15, name: "Amy"}
```

* 自定义的属性和拓展运算符对象里面属性的相同的时候：自定义的属性在拓展运算符后面，则拓展运算符对象内部同名的属性将被覆盖掉

  ```js
  let person = {name: "Amy", age: 15};
  let someone = { ...person, name: "Mike", age: 17};
  console.log(someone);
  // {name: "Mike", age: 17}
  ```

* 自定义的属性在拓展运算度前面，则变成设置新对象默认属性值

  ```js
  let person = {name: "Amy", age: 15};
  let someone = {name: "Mike", age: 17, ...person};
  console.log(someone);
  // {name: "Amy", age: 15}
  ```

* 拓展运算符后面是空对象，没有任何效果也不会报错

  ```js
  let a = {...{}, a: 1, b: 2};
  console.log(a);
  // {a: 1, b: 2}
  ```

* 拓展运算符后面是 `null` 或者 `undefined` ，没有效果也不会报错

  ```js
  let b = {...null, ...undefined, a: 1, b: 2};
  console.log(b);
  // {a: 1, b: 2}
  ```

## 对象的新方法

* `Object.assign(target, source_1, ···)`

  * 第一个参数是目标对象，后面的参数是源对象

  * 如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性

  * 如果该函数只有一个参数，当参数为对象时，直接返回该对象；当参数不是对象时，会先将参数转为对象然后返回

    ```js
    console.log(Object.assign(3));
    // Number {3}
    console.log(typeof Object.assign(3));
    // "object"
    ```

  * 因为 `null` 和 `undefined` 不能转化为对象，所以会报错

  * 当参数不止一个时，`null` 和 `undefined` 不放第一个，即不为目标对象时，会跳过 `null` 和 `undefined` ，不报错

  * `assign()` 的属性拷贝是浅拷贝

    ```js
    let targetObj = {c: 3};
    let sourceObj = {a: {b: 1}};
    console.log(sourceObj.a);
    // {b: 1}
    Object.assign(targetObj, sourceObj);
    console.log(targetObj);
    // {c: 3, a: {b: 2}}
    console.log(sourceObj);
    // {a: {b: 2}}
    console.log(targetObj.a);
    // {b: 1}
    targetObj.a.b = 2;
    sourceObj.a.b;
    // 2
    ```

  * 同名属性替换

  * 数组的处理

    ```js
    Object.assign([2,3], [5]);
    // [5,3],源对象的 0 号属性覆盖了目标对象的 0
    // 这里在得到结果前，先把数组都拆成对象 {0:2，1:3}、{0:5},然后合并成{0:5,1:3}，最后重新转回数组 [5,3]
    ```



> 用于将源对象的所有可枚举属性复制到目标对象中

```js
let target = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
Object.assign(target,object2,object3);
// 第一个参数是目标对象，后面的参数是源对象
console.log(target);
// {a: 1, b: 2, c: 3}
```

* `Object.is(value1, value2)`

> 用来比较两个值是否严格相等，与（`===`）基本类似

```js
Object.is("q","q");    // true
Object.is(1,1);      // true
Object.is([1],[1]);    // false
Object.is({q:1},{q:1});  // false
```

* 与（===）的区别:

  比较|Object.is|===
  -|-|-
  +0 和 -0|false|true
  NaN 与 NaN|true|false


# ES6 数组

## 数组创建

* `Array.of()`

  * 参数值可为不同类型

  * 参数为空时返回空数组

> 将参数中所有值作为元素形成数组

```js
console.log(Array.of(1, 2, 3, 4));
// [1, 2, 3, 4]

// 参数值可为不同类型
console.log(Array.of(1, '2', true));
// [1, '2', true]

// 参数为空时返回空数组
console.log(Array.of());
// []
```

* `Array.from()`

  * `Array.from(arrayLike[, mapFn[, thisArg]])`

  arrayLike|mapFn|thisArg
  -|-|-
  类数组/对象|`map` 函数|指定 `this` 对象
  必填|可选|可选

  ```js
  let map = {
    do: function(n) {
      return n * 2;
    }
  }
  let arrayLike = [1, 2, 3];
  console.log(Array.from(arrayLike, function (n){
    return this.do(n);
  }, map));
  // [2, 4, 6]
  ```

  * 参数为数组,返回与原数组一样的数组

  * 参数含空位,返回 `undefined`

> 将类数组对象或可迭代对象转化为数组，返回值为转换后的数组

```js
// 参数为数组,返回与原数组一样的数组
console.log(Array.from([1, 2]));
// [1, 2]

// 参数含空位
console.log(Array.from([1, , 3]));
// [1, undefined, 3]
```

## 类数组对象

* 没有 `length` 属性,则返回空数组

* `length` 属性决定返回的数组长度，缺少的属性表示为 `undefined`

* 元素属性名不为数值且无法转换为数值，返回长度为 `length` 元素值为 `undefined` 的数组

> 一个类数组对象必须含有 `length` 属性，且元素属性名必须是数值或者可转换为数值的字符

```js
let arr = Array.from({
  0: '1',
  1: '2',
  2: 3,
  length: 4
});
console.log(arr);
// ["1", "2", 3, undefined]

// 没有 length 属性,则返回空数组
let array = Array.from({
  0: '1',
  1: '2',
  2: 3,
});
console.log(array);
// []

// 元素属性名不为数值且无法转换为数值，返回长度为 length 元素值为 undefined 的数组
let array1 = Array.from({
  a: 1,
  b: 2,
  length: 2
});
console.log(array1);
// [undefined, undefined]
```

## 转换可迭代对象

### 转换 `map`

> 将 `map` 函数转换为多维数组，且每个属性为一个数组

```js
let map = new Map();
map.set('key0', 'value0');
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map);
// Map(3) {"key0" => "value0", "key1" => "value1", "key2" => "value2"}
console.log(Array.from(map));
// [['key0', 'value0'],['key1','value1'],["key2", "value2"]]
```

### 转换 `set`

```js
let arr = [1, 2, 3];
let set = new Set(arr);
console.log(set);
// Set{1, 2, 3}
console.log(Array.from(set));
// [1, 2, 3]
```

### 转换字符串

```js
let str = 'abc';
console.log(Array.from(str));
// ["a", "b", "c"]
```

## 扩展方法

### 查找

* `find()`

  * 数组空位时不做判断，直接处理为 `undefined`

> 查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素

```js
let arr = Array.of(1, 2, 3, 4);
console.log(arr.find(item => item > 2));
// 3

// 数组空位处理为 undefined
console.log([, 1].find(n => true));
// undefined
```

* `findIndex()`

  * 参数01：回调函数

  * 参数02(可选)：指定回调函数中的 `this` 值

  * 数组空位处理为 undefined

> 查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引

```js
let arr = Array.of(1, 2, 1, 3);

// 参数01：回调函数
// 参数02(可选)：指定回调函数中的 this 值
console.log(arr.findIndex(item => item = 1));
// 0

// 数组空位处理为 undefined
console.log([, 1].findIndex(n => true));
//0
```

### 填充

* `fill()`

  * 参数01：用来填充的值，修改后的值

  * 参数02：被填充的起始索引，要修改的数组的起始位置(且开始位置会修改)

  * 参数03(可选)：被填充的结束索引，默认为数组末尾，要修改的数组的结束位置(且结束位置不修改)

> 将一定范围索引的数组元素内容填充为单个指定的值

```js
let arr = Array.of(1, 2, 3, 4);
console.log(arr);
// [1, 2, 3, 4]

// 参数01：用来填充的值
// 参数02：被填充的起始索引
// 参数03(可选)：被填充的结束索引，默认为数组末尾
console.log(arr.fill(0,1,3));
// [1, 0, 0, 4]
```

* `copyWithin()`

  * 参数01：被修改的起始索引，为负数表示倒数

  数组|[1,|2,|3,|4]|[1,|2,|3,|4]
  -|-|-|-|-|-|-|-|-
  位置|-4|-3|-2|-1|0|1|2|3

  ```js
  console.log([1, 2, 3, 4].copyWithin(-2, 0));
  // [1, 2, 1, 2] ，此处 -2 索引位置表示上表中值 3 也就是数组索引 2 的位置，取出的范围是 [1, 2, 3, 4]
  ```

  * 参数02：被用来覆盖的数据的起始索引(且开始位置值会算在范围内)

  * 参数03(可选)：被用来覆盖的数据的结束索引，默认为数组末尾(且结束位置值不算在范围内)

> 将一定范围索引的数组元素修改为此数组另一指定范围索引的元素

```js
console.log([1, 2, 3, 4].copyWithin(0,2,3));
// [3, 2, 3, 4]

console.log([1, 2, ,4].copyWithin(0, 2, 4));
 // [, 4, , 4] ，取出的范围是 [ ,4]
```

### 遍历

* `entries()` 遍历键值对

```js
for(let [key, value] of ['a', 'b'].entries()){
  console.log(`${key} : ${value}`);
}
// 0 : "a"
// 1 : "b"

// 不使用 for... of 循环
let entries = ['a', 'b'].entries();
console.log(entries.next().value);
// [0, "a"]
console.log(entries.next().value);
// [1, "b"]

// 数组含空位
console.log([...[,'a'].entries()]);
// [[0, undefined],[1, "a"]]
```

* `keys()` 遍历键名

```js
for(let key of ['a', 'b'].keys()){
  console.log(`${key}`);
}
// 0
// 1

// 数组含空位
console.log([...[,'a'].keys()]);
// [0, 1]
```

* `values()` 遍历键值

```js
for(let value of ['a', 'b'].values()){
  console.log(value);
}
// "a"
// "b"

// 数组含空位
console.log([...[,'a'].values()]);
// [undefined, "a"]
```

### 包含

* `includes()` 数组是否包含指定值

  * 参数01：包含的指定值

  * 参数02：可选，搜索的起始索引，默认为 `0`

  * 与 `Set` 的 `has` 方法区分: `Set` 的 `has` 方法用于查找值

  * 与 `Map` 的 `has` 方法区分: `Map` 的 `has` 方法用于查找键名

```js
// 参数01：包含的指定值
console.log([1, 2, 3].includes(1));
// true

// 参数02：可选，搜索的起始索引，默认为0
console.log([1, 2, 3].includes(1, 2));
// false

// NaN 的包含判断
console.log([1, NaN, 3].includes(NaN));
// true
```

### 嵌套数组转一维数组

* `flat()`

  * 参数默认为 `2`，多维数组转一维数组需指定嵌套层数 `-1`

  * 参数可使用 `Infinity` ，不管嵌套多少层

  * 参数为 `0` 时，返回原数组

  * 转化结果数组时自动跳过空位

```js
console.log([1 ,[2, 3]].flat());
// [1, 2, 3]

// 指定转换的嵌套层数
console.log([1, [2, [3, [4, 5]]]].flat(2));
// [1, 2, 3, [4, 5]]

// 不管嵌套多少层
console.log([1, [2, [3, [4, 5]]]].flat(Infinity));
// [1, 2, 3, 4, 5]

// 自动跳过空位
console.log([1, [2, , 3]].flat());
// [1, 2, 3]
```

* `flatMap()`

  * 参数01：遍历函数，该遍历函数可接受 `3` 个参数：当前元素、当前元素索引、原数组

  * 参数02：指定遍历函数中 `this` 的指向

> 先对数组中每个元素进行了的处理，再对数组执行 `flat` 方法

```js
console.log([1, 2, 3].flatMap(n => [n * 2]));
// [2, 4, 6]
```

## 数组缓冲区

* 数组缓冲区是内存中的一段地址

* 定型数组的基础

* 实际字节数在创建时确定，之后只可修改其中的数据，不可修改大小

### 创建数组缓冲区

> 通过构造函数创建

```js
// 创建数组缓冲区
let buffer = new ArrayBuffer(10);
console.log(buffer.byteLength);
// 10
```

### 分割已有数组缓冲区

* `slice()`

```js
let buffer = new ArrayBuffer(10);
console.log(buffer);
// ArrayBuffer(10) {}

let buffer1 = buffer.slice(1, 3);
console.log(buffer1);
// ArrayBuffer(2) {}
console.log(buffer1.byteLength);
// 2
```

### 视图

* 视图是用来操作内存的接口

* 视图可以操作数组缓冲区或缓冲区字节的子集,并按照其中一种数值数据类型来读取和写入数据

* `DataView` 类型是一种通用的数组缓冲区视图,其支持所有8种数值型数据类型

#### 创建

* 默认 `DataView` 可操作数组缓冲区全部内容

* 通过设定偏移量(参数2)与长度(参数3)指定 `DataView` 可操作的字节范围

```js
// 默认 DataView 可操作数组缓冲区全部内容
let buffer = new ArrayBuffer(10);
  dataView = new DataView(buffer);
dataView.setInt8(0,1);
console.log(dataView.getInt8(0));
// 1

// 通过设定偏移量(参数2)与长度(参数3)指定 DataView 可操作的字节范围
let buffer1 = new ArrayBuffer(10);
  dataView1 = new DataView(buffer1, 0, 3);
console.log(dataView1.setInt8(5,1));
// RangeError
```

## 定型数组

* 数组缓冲区的特定类型的视图

* 可以强制使用特定的数据类型，而不是使用通用的 DataView 对象来操作数组缓冲区

### 创建

* 通过数组缓冲区生成

  ```js
  let buffer = new ArrayBuffer(10),
    view = new Int8Array(buffer);
  console.log(view.byteLength);
  // 10
  ```

* 通过构造函数

  * 不传参则默认长度为 `0` ,在这种情况下数组缓冲区分配不到空间，创建的定型数组不能用来保存数据

  * 可接受参数包括定型数组、可迭代对象、数组、类数组对象

  ```js
  let view = new Int32Array(10);
  console.log(view.byteLength);
  // 40
  console.log(view.length);
  // 10

  // 不传参则默认长度为0 ,在这种情况下数组缓冲区分配不到空间，创建的定型数组不能用来保存数据
  let view1 = new Int32Array();
  console.log(view1.byteLength);
  // 0
  console.log(view1.length);
  // 0

  // 可接受参数包括定型数组、可迭代对象、数组、类数组对象
  let arr = Array.from({
  0: '1',
  1: '2',
  2: 3,
  length: 3
  });
  let view2 = new Int16Array([1, 2]),
    view3 = new Int32Array(view2),
    view4 = new Int16Array(new Set([1, 2, 3])),
    view5 = new Int16Array([1, 2, 3]),
    view6 = new Int16Array(arr);
  console.log(view2 .buffer === view3.buffer);
  // false
  console.log(view4.byteLength);
  // 6
  console.log(view5.byteLength);
  // 6
  console.log(view6.byteLength);
  // 6
  ```

> `length` 属性不可写，如果尝试修改这个值，在非严格模式下会直接忽略该操作，在严格模式下会抛出错误

```js
let view = new Int16Array([1, 2]);
view.length = 3;
console.log(view.length);
// 2
```

> 定型数组可使用 `entries()`、`keys()`、`values()` 进行迭代

```js
let view = new Int16Array([1, 2]);
for(let [k, v] of view.entries()){
  console.log(`${k}, ${v}`);
}
// 0, 1
// 1, 2
```

> `find()` 等方法也可用于定型数组，但是定型数组中的方法会额外检查数值类型是否安全,也会通过 `Symbol.species` 确认方法的返回值是定型数组而非普通数组

```js
let view = new Int16Array([1, 2]);
console.log(view.find((n) => n > 1));
// 2
```

> `concat` 方法由于两个定型数组合并结果不确定，故不能用于定型数组；另外，由于定型数组的尺寸不可更改,可以改变数组的尺寸的方法，例如 `splice()` ，不适用于定型数组

> 所有定型数组都含有静态 `of` 方法和 `from` 方法,运行效果分别与 `Array.of()` 方法和 `Array.from()` 方法相似,区别是定型数组的方法返回定型数组,而普通数组的方法返回普通数组

```js
let view = Int16Array.of(1, 2);
console.log(view instanceof Int16Array);
// true
```

> 定型数组不是普通数组，不继承自 `Array`

```js
let view = new Int16Array([1, 2]);
console.log(view);
// Int16Array(2) [1, 2]
console.log(Array.isArray(view));
// false
```

> 定型数组中增加了 `set` 与 `subarray` 方法。 `set` 方法用于将其他数组复制到已有定型数组, `subarray` 方法用于提取已有定型数组的一部分形成新的定型数组

```js
// set 方法
// 参数1：一个定型数组或普通数组
// 参数2：可选，偏移量，开始插入数据的位置，默认为0
let view = new Int16Array(4);
view.set([1, 2]);
view.set([3, 4], 2);
console.log(view);
// [1, 2, 3, 4]

// subarray 方法
// 参数1：可选，开始位置
// 参数2：可选，结束位置(不包含结束位置)
let view = new Int16Array([1, 2, 3, 4]),
  subview1 = view.subarray(),
  subview2 = view.subarray(1),
  subview3 = view.subarray(1, 3);
console.log(subview1);
// [1, 2, 3, 4]
console.log(subview2);
// [2, 3, 4]
console.log(subview3);
// [2, 3]
```

## 扩展运算符

### 复制数组

```js
let arr = [1, 2],
  arr1 = [...arr];
console.log(arr1);
// [1, 2]

// 数组含空位
let arr2 = [1, , 3],
  arr3 = [...arr2];
console.log(arr3);
// [1, undefined, 3]
```

### 合并数组

```js
console.log([...[1, 2],...[3, 4]]);
// [1, 2, 3, 4]
```


# ES6 函数

## 函数参数的扩展

* 默认参数的用法

  ```js
  function fn(name,age=17){
  console.log(name+","+age);
  }
  fn("Amy",18);
  // Amy,18
  fn("Amy","");
  // Amy,
  fn("Amy");
  // Amy,17
  ```

* 使用函数默认参数时，不允许有同名参数

  ```js
  // 不报错
  function fn(name,name){
  console.log(name);
  }

  // 报错
  //SyntaxError: Duplicate parameter name not allowed in this context
  function fn(name,name,age=17){
  console.log(name+","+age);
  }
  ```

* 只有在未传递参数，或者参数为 `undefined` 时，才会使用默认参数，`null` 值被认为是有效的值传递

  ```js
  function fn(name,age=17){
    console.log(name+","+age);
  }
  fn("Amy",null);
  // Amy,null
  ```

* 函数参数默认值存在暂时性死区，在函数参数默认值表达式中，还未初始化赋值的参数值无法作为其他参数的默认值

```js
function f(x,y=x){
  console.log(x,y);
}
f(1);
// 1 1

function f(x=y){
  console.log(x);
}
f();
// ReferenceError: y is not defined
```

## 不定参数

> 不定参数用来表示不确定参数个数，形如 `...` 变量名，由 `...` 加上一个具名参数标识符组成，具名参数只能放在参数组的最后，并且有且只有一个不定参数

```js
function f(...values){
  console.log(values.length);
}
f(1,2);
//2
f(1,2,3,4);
//4
```

## 箭头函数

> 箭头函数提供了一种更加简洁的函数书写方式

* `参数 => 函数体`

  ```js
  var f = v => v;

  // 等价于

  var f = function(a){
    return a;
  }
  console.log(f(1));
  // 1
  ```

* 当箭头函数没有参数或者有多个参数，要用 `()` 括起来

```js
var f = (a,b) => a+b;
console.log(f(6,2));
//8
```

* 当箭头函数函数体有多行语句，用 `{}` 包裹起来，表示代码块，当只有一行语句，并且需要返回结果时，可以省略 `{}` , 结果会自动返回

```js
var f = (a,b) => a+b;

// 等同于

var f = (a,b) => {
 let result = a+b;
 return result;
}

console.log(f(6,2));
// 8
```

* 当箭头函数要返回对象的时候，为了区分于代码块，要用 `()` 将对象包裹起来

```js
// 报错
var f = (id,name) => {id: id, name: name};
f(6,2);
// SyntaxError: Unexpected token :

// 不报错
var f = (id,name) => ({id: id, name: name});
console.log(f(6,2));
// {id: 6, name: 2}
```

* 没有 `this` `super` `arguments` 和 `new.target` 绑定

```js
var func = () => {
  // 箭头函数里面没有 this 对象，
  // 此时的 this 是外层的 this 对象，即 Window
  console.log(this)
}
func(55);
// Window

var func = () => {
  console.log(arguments)
}
func(55);
// ReferenceError: arguments is not defined
```

* 箭头函数体中的 `this` 对象，是定义函数时的对象，而不是使用函数时的对象

```js
function fn(){
  setTimeout(()=>{
  // 定义时，this 绑定的是 fn 中的 this 对象
  console.log(this);
  console.log(this.a);
  },0)
}
var a = 20;

// fn 的 this 对象为 {a: 18}
fn.call({a: 18});
// {a: 18}
// 18
```

* 不可以作为构造函数，也就是不能使用 `new` 命令，否则会报错

### 适合使用的场景

> `ES6` `之前，JavaScript` 的 `this` 对象一直很令人头大，回调函数，经常看到 `var self = this` 这样的代码，为了将外部 `this` 传递到回调函数中，那么有了箭头函数，就不需要这样做了，直接使用 `this` 就行

```js
// 回调函数
var Person = {
  'age': 18,
  'sayHello': function () {
    setTimeout( function () {
      console.log(this);
      console.log(this.age);
    });
  }
};
var age = 20;
Person.sayHello();
// window
// 20

var Person1 = {
  'age': 18,
  'sayHello': function () {
    setTimeout(()=>{
    console.log(this);
    console.log(this.age);
    });
  }
};
var age = 20;
Person1.sayHello();
// {age: 18, sayHello: ƒ}
// 18
```

> 当我们需要维护一个 `this` 上下文的时候，就可以使用箭头函数

### 不适合使用的场景

* 定义函数的方法，且该方法中包含 `this`

```js
var Person = {
  'age': 18,
  'sayHello': ()=>{
    console.log(this.age);
    }
};
var age = 20;
Person.sayHello();
// 20 ，此时 this 指向的是全局对象

var Person1 = {
  'age': 18,
  'sayHello': function () {
    console.log(this.age);
  }
};
var age = 20;
Person1.sayHello();
// 18 ，此时的 this 指向 Person1 对象
```

* 需要动态 this 的时候

```js
// 此为一个错误案例
var button = document.getElementById('userClick');
button.addEventListener('click', () => {
   this.classList.toggle('on');
});
```

> `button` 的监听函数是箭头函数，所以监听函数里面的 this 指向的是定义的时候外层的 `this` 对象，即 `Window` ，导致无法操作到被点击的按钮对象

## 函数中 `this` 指向问题总结

> this是面向对象编程中的一个概念，一般指向当前方法调用所在的对象，但在JS中灵活很多:

* `this` 是运行时绑定而非编写时绑定

* `this` 的绑定和函数声明的位置木有任何关系，执行上下文取决于函数调用时方式

* `this` 既不指向函数自身也不指向词法作用域

* 因此，`谁调用这个函数或方法,this关键字就指向谁`这话是并不完全准确的

> `this` 的五种绑定模式及一种特殊绑定模式【ES6的箭头函数】：

* 绑定规则优先级，按顺序依次向下：

  * `new` 绑定

  * 显式绑定(硬绑定)

  * 隐式绑定

  * 默认绑定

* `new` 绑定

  * `new` 谁的对象 `this` 指向谁

  * 【扩展】`new` 一个对象的内部过程一般有三步：

    1. 创建一个空对象，并且 `this` 变量引用该对象，继承了该函数的原型 `prototype`

    2. 属性和方法被加入到 `this` 引用的对象中

    3. 新创建的对象由 `this` 所引用，并且最后隐式的返回 `this`

* 显式绑定(硬绑定,也可称函数方法绑定): `call` ， `apply` ， `bind`

  * 绑定谁(使用方法时小括号内的参数) `this` 即指向谁，且绑定后无法改变

  * 【扩展1】`call` 和 `apply` 的区域在于传参的方式不同，但是作用基本一致

  * 【扩展2】`bind` 的使用方法和 `call` 很类似，都是将使用的参数对象作为上下文的 `this`,但还是有区别的：

    * `bind` 是返回改变上下文 `this` 后的函数(新函数)

    * 使用 `call` 是改变上下文 `this` 并执行函数，返回的值是 `undefined`

    ```js
    var obj = {a:2}
    function test4(){
      console.log(this.a)
    }
    var testv4 = test4.call(obj);
    // 2

    console.log(obj);
    // {a: 2}
    console.log(testv4);
    // undefined


    var testv4 = test4.bind(obj);
    console.log(obj);
    // {a: 2}
    console.log(test4);
    // function test4(){ console.log(this.a) }
    console.log(testv4);
    // function test4(){ console.log(this.a) }
    console.log(test4 === testv4);
    // false
    testv4();
    // 2
    ```

* 隐式绑定

  * 对象的调用时使用的隐式绑定，`this` 指向的该对象

  * 同上的对象调用，但有区别，对象在调用时并未立即执行函数，这时会丢失该对象的 `this` 指向，而变成指向 `window`

    ```js
    function foo() {
      console.log( this.a );
    }
    var a = 2;
    var obj = {
      a: 3,
      foo: foo
    };
    var bar = obj.foo;
    bar();
    // 2
    ```

    * 把上述 `bar()` 换成 `setTimeout( obj.foo, 100 )` 时，打印结果依然是 `2`,同上理

  * 对于多个链式调用的，`this` 的指向取决最后一个对象

* 默认绑定

  * 在非严格模式中，单纯的函数调用的上下文中 `this` 默认是指向window

  * 在严格模式中，`this` 不指向 `window` ，只会绑定到 `undefined`

* 规则例外(箭头函数)

  * 箭头函数的 `this` 绑定是根据词法作用域的，取决于外层作用域来决定

  * 箭头函数绑定 `this` 无法修改, `call` `apply` `bind` 等都无法修改他

  * 特别适合用于计时器这些，避免了 `var self = this` 这种写法

  * 箭头函数中显示绑定不会生效

    ```js
    var foo = () => {
      console.log( this.a );
    }
    var a = 2;
    var obj = {
      a: 3,
      foo: foo
    };
    obj.foo();
    // 2
    foo.call(obj);
    // 2
    ```

  * 箭头函数中回调函数的影响

    ```js
    // 普通函数
    function foo(){
      return function(){
        console.log( this.a );
      }
    }
    var a = 2;
    var obj = {
      a: 3,
      foo: foo
    };
    var bar = obj.foo();
    console.log(bar);
    // function(){ console.log( this.a ) }
    // 此时 bar 未被调用，作用域变为 window
    bar();
    //2

    // 箭头函数
    function fo(){
      return () => {
        console.log( this.aa );
      }
    }
    var aa = 2;
    var ob = {
      aa: 3,
      fo: fo
    };
    var ba = ob.fo();
    console.log(ba);
    // () => { console.log( this.aa ) }
    // 此时 ba 虽然没调用，但作用域依然规定在 fo() 函数内，取值时会找 fo() 的父系函数 bo
    ba();
    //3
    ```


# `ES6` 迭代器

> `Iterator` 是 `ES6` 引入的一种新的遍历机制，迭代器有两个核心概念

* 迭代器是一个统一的接口，它的作用是使各种数据结构可被便捷的访问，它是通过一个键为 `Symbol.iterator` 的方法来实现

* 迭代器是用于遍历数据结构元素的指针（如数据库中的游标）

## 迭代过程

* 通过 `Symbol.iterator` 创建一个迭代器，指向当前数据结构的起始位置

* 随后通过 `next` 方法进行向下迭代指向下一个位置， `next` 方法会返回当前位置的对象，对象包含了 `value` 和 `done` 两个属性， `value` 是当前属性的值， `done` 用于判断是否遍历结束

* 当 `done` 为 `true` 时则遍历结束

```js
const items = ["zero", "one", "two"];
const it = items[Symbol.iterator]();

console.log(it.next());
// {value: "zero", done: false}
console.log(it.next());
// {value: "one", done: false}
console.log(it.next());
// {value: "two", done: false}
console.log(it.next());
// {value: undefined, done: true}
```

> 上面的例子，首先创建一个数组，然后通过 `Symbol.iterator` 方法创建一个迭代器，之后不断的调用 `next` 方法对数组内部项进行访问，当属性 `done` 为 `true` 时访问结束

> 迭代器是协议（使用它们的规则）的一部分，用于迭代，该协议的一个关键特性就是它是顺序的：迭代器一次返回一个值（这意味着如果可迭代数据结构是非线性的（例如树），迭代将会使其线性化）

## 可迭代的数据结构

> 以下是可迭代的值:

* `Array`
* `String`
* `Map`
* `Set`
* `Dom` 元素（正在进行中）

### `Array`

> 数组 ( `Array` ) 和类型数组 ( `TypedArray` ) 他们是可迭代的

```js
for (let item of ["zero", "one", "two"]) {
  console.log(item);
}
// zero
// one
// two
```

### `String`

> 字符串是可迭代的，但他们遍历的是 `Unicode` 码，每个码可能包含一个到两个的 `Javascript` 字符

```js
for (const c of 'z\uD83D\uDC0A') {
  console.log(c);
}
// z
// \uD83D\uDC0A

for (const c of 'abc') {
  console.log(c);
}
// a
// b
// c

for (const c of '这是？') {
  console.log(c);
}
// 这
// 是
// ？
```

### `Map`

*  `WeakMaps` 不可迭代

> `Map` 主要是迭代它们的 `entries` ，每个 `entry` 都会被编码为 `[key, value]` 的项， `entries` 是以确定的形势进行迭代，其顺序是与添加的顺序相同

```js
const map = new Map();
map.set(0, "zero");
map.set(1, "one");

for (let item of map) {
  console.log(item);
}
// [0, "zero"]
// [1, "one"]
```

### `Set`

* `WeakSets` 不可迭代

> `Set` 是对其元素进行迭代，迭代的顺序与其添加的顺序相同

```js
const set = new Set();
set.add("zero");
set.add("one");

for (let item of set) {
  console.log(item);
}
// zero
// one
```

### `arguments`

> `arguments` 目前在 `ES6` 中使用越来越少，但也是可遍历的

```js
function args() {
  for (let item of arguments) {
  console.log(item);
  }
}
args("zero", "one");
// zero
// one
```

### 普通对象不可迭代

> 普通对象是由 object 创建的，不可迭代

```js
// TypeError
for (let item of {}) {
  console.log(item);
}
// Uncaught TypeError: {} is not iterable
```

## `for...of` 循环

> `for...of` 是 `ES6` 新引入的循环，用于替代 `for..in` 和 `forEach()` ，并且支持新的迭代协议

* 它可用于迭代常规的数据类型，如 `Array` 、 `String` 、 `Map` 和 `Set` 等等

* `Array`

  ```js
  const nums = ["zero", "one", "two"];

  for (let num of nums) {
  console.log(num);
  }
  // zero
  // one
  // two
  ```

  * `TypedArray`

    ```js
    const typedArray1 = new Int8Array(6);
    typedArray1[0] = 10;
    typedArray1[1] = 11;

    for (let item of typedArray1) {
    console.log(item);
    }
    // 10
    // 11
    // 0
    // 0
    // 0
    // 0
    ```
  * 类数组结构可借助 `Array.from()` 方法进行转换迭代

    ```js
    const arrayLink = {length: 2, 0: "zero", 1: "one"}

    // 报 TypeError 异常
    for (let item of arrayLink) {
    console.log(item);
    }
    // Uncaught TypeError: arrayLink is not iterable

    for (let item of Array.from(arrayLink)) {
    console.log(item);
    }
    // zero
    // one
    ```

* `String`

  ```js
  const str = "zero";

  for (let item of str) {
  console.log(item);
  }
  // z
  // e
  // r
  // o
  ```

* `Map`

  ```js
  let myMap = new Map();
  myMap.set(0, "zero");
  myMap.set(1, "one");
  myMap.set(2, "two");

  // 遍历 key 和 value
  for (let [key, value] of myMap) {
  console.log(key + " = " + value);
  }
  // 0 = zero
  // 1 = one
  // 2 = two

  for (let [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
  }
  // 0 = zero
  // 1 = one
  // 2 = two

  // 只遍历 key
  for (let key of myMap.keys()) {
  console.log(key);
  }
  // 0
  // 1
  // 2

  // 只遍历 value
  for (let value of myMap.values()) {
  console.log(value);
  }
  // zero
  // one
  // two
  ```

* `Set`

  ```js
  let mySet = new Set();
  mySet.add("zero");
  mySet.add("one");
  mySet.add("two");

  // 遍历整个 set
  for (let item of mySet) {
  console.log(item);
  }
  // zero
  // one
  // two

  // 只遍历 key 值
  for (let key of mySet.keys()) {
  console.log(key);
  }
  // zero
  // one
  // two

  // 只遍历 value
  for (let value of mySet.values()) {
  console.log(value);
  }
  // zero
  // one
  // two

  // 遍历 key 和 value ，两者会相等
  for (let [key, value] of mySet.entries()) {
  console.log(key + " = " + value);
  }
  // zero = zero
  // one = one
  // two = two
  ```

## `let` 、`const` 和 `var` 用于 `for..of`

> 如果使用 `let` 和 `const` ，每次迭代将会创建一个新的存储空间，这可以保证作用域在迭代的内部

```js
const nums = ["zero", "one", "two"];

// 使用 let 或 const 声明变量 num 时效果相同
for (const num of nums) {
  console.log(num);
}
// zero
// one
// two

// 报 ReferenceError
console.log(num);
// Uncaught ReferenceError: num is not defined

// 使用 var 声明变量 num 时全局可用此变量
for (const num of nums) {
  console.log(num);
}
// zero
// one
// two

console.log(num);
// two
```


# `ES6` `Class` 类

> 在 `ES6` 中，`class` (类)作为对象的模板被引入，可以通过 `class` 关键字定义类

* `class` 的本质是 `function`

* 它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法

## 基础用法

### 类定义

> 类表达式可以为匿名或命名

```js
// 匿名类
let Example = class {
  constructor(a) {
    this.a = a;
  }
}
// 命名类
let Example = class Example {
  constructor(a) {
    this.a = a;
  }
}
```

### 类声明

* 类定义不会被提升，这意味着，必须在访问前对类进行定义，否则就会报错

* 类中方法不需要 function 关键字

  ```js
  class Point {
  // ...
  }

  console.log(typeof Point);
  // "function"
  console.log(Point === Point.prototype.constructor)
  // true
  ```

* 方法间不能加分号

```js
class Example {
  constructor(a) {
    this.a = a;
  }
}
```

> 类声明不可重复声明

```js
class Example{}
class Example{}
// Uncaught SyntaxError: Identifier 'Example' has already been declared

let Example1 = class{}
class Example{}
// Uncaught SyntaxError: Identifier 'Example' has already been declared
```

## 类的主体

> 类的属性：`prototype` ，`ES6` 中，`prototype` 仍旧存在，虽然可以直接自类中定义方法，但是其实方法还是定义在 `prototype` 上的

* 覆盖方法 / 初始化时添加方法

```js
Example.prototype = {
  //methods
}
```

* 添加方法

```js
Object.assign(Example.prototype,{
  //methods
})
```

* 静态属性

  * `ES6` 中规定，`Class` 内部只有静态方法，没有静态属性

    ```js
    class Example {
    // 新提案
      static a = 2;
      // 此行报错
    }

    // 目前可行写法
    Example.b = 2;
    ```

  * `class` 本身的属性，即直接定义在类内部的属性（ `Class.propname` ），不需要实例化

* 公共属性

  ```js
  class Example{}
  Example.prototype.a = 2;
  ```

* 实例属性

  * 定义在实例对象（ `this` ）上的属性

  ```js
  class Example {
    constructor () {
      console.log(this.a);
    }
  }
  ```

* `name` 属性

  * 返回跟在 `class` 后的类名(存在时)

  ```js
  let Example = class Exam {
    constructor(a) {
      this.a = a;
    }
  }
  console.log(Example.name);
  // Exam

  let Example=class {
    constructor(a) {
      this.a = a;
    }
  }
  console.log(Example.name);
  // Example
  ```

* `constructor` 方法

  * `constructor` 方法是类的默认方法，创建类的实例化对象时被调用

    ```js
    class Example{
      constructor(){
      console.log('我是 constructor');
      }
    }
    new Example();
    // 我是 constructor
    ```

  * 默认返回实例对象 `this`

    ```js
    class Test {
      constructor(){
        // 默认返回实例对象 this
      }
    }
    console.log(new Test() instanceof Test);
    // true

    class Example {
      constructor(){
        // 指定返回对象
        return new Test();
      }
    }
    console.log(new Example() instanceof Example);
    // false
    ```

* 静态方法

  ```js
  class Example{
    static sum(a, b) {
      console.log(a+b);
    }
  }
  Example.sum(1, 2);
  // 3
  ```

* 原型方法

  ```js
  class Example {
    sum(a, b) {
      console.log(a + b);
    }
  }
  let exam = new Example();
  exam.sum(1, 2);
  // 3
  ```

* 实例方法

  ```js
  class Example {
    constructor() {
      this.sum = (a, b) => {
        console.log(a + b);
      }
    }
  }
  ```

## 类的实例化

* `new`

> `class` 的实例化必须通过 `new` 关键字

```js
class Example {}

let exam1 = Example();
// Class constructor Example cannot be invoked without 'new'
```

* 实例化对象

> 共享原型对象

```js
class Example {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    console.log('Example');
  }
  sum() {
    return this.a + this.b;
  }
}
let exam1 = new Example(2, 1);
// Example
let exam2 = new Example(3, 1);
// Example
console.log(exam1);
// Example {a: 2, b: 1}
console.log(exam2);
// Example {a: 3, b: 1}
console.log(exam1.__proto__ === exam2.__proto__);
// true ,这里是原型的比较,而它们是来自同一个来源,故恒等

exam1.__proto__.sub = function() {
  return this.a - this.b;
}

console.log(exam1.sub());
// 1
console.log(exam2.sub());
// 2
```

## decorator 函数【问题解决:[webpack](https://www.webpackjs.com/concepts/)】

> 用来修改类的行为，在代码编译时产生作用

### 类修饰

* 第一个参数 `target` ，指向类本身

```js
function testable(target) {
  target.isTestable = true;
}
@testable
class Example {}
Example.isTestable;
// true
```

* 多个参数——嵌套实现

```js
function testable(isTestable) {
  return function(target) {
    target.isTestable=isTestable;
  }
}
@testable(true)
class Example {}
Example.isTestable;
// true
```

## 封装

* 取值函数（`getter`）和存值函数（`setter`）

  * `getter` 不可单独出现

  * `getter` `setter` 必须同级出现

    ```js
    class Father {
      constructor(){}
      get a() {
        return this._a;
      }
    }
    class Child extends Father {
      constructor(){
        super();
      }
      set a(a) {
        this._a = a;
      }
    }
    let test = new Child();
    test.a = 2;
    console.log(test.a);
    // undefined
    ```

  * 或者 `getter` `setter` 都放在子类中

    ```js
    class Father1 {
      constructor(){}
      get a() {
        return this._a;
      }
      set a(a) {
        this._a = a;
      }
    }
    class Child1 extends Father1 {
      constructor(){
        super();
      }
    }
    let test1 = new Child1();
    console.log(test1);
    // Child1 {}
    test1.a = 2;
    console.log(test1);
    // Child1 {_a: 2}
    console.log(test1.a);
    // 2
    ```

> 与 `ES5` 一样，在“类”的内部可以使用 `get` 和 `set` 关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为

```js
class Example{
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get a(){
    console.log('getter');
    return this.a;
  }
  set a(a){
    console.log('setter');

    // this.a = a;
    // 已注释此行，否则自身递归调用,导致不断输出 setter ，最终导致 RangeError
  }
}
let exam = new Example(1,2);
// setter
// 实例化时触发 constructor 方法，参数被赋值时调用 set 方法

class Example1{
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get a(){
    console.log('getter');
    return this._a;
  }
  set a(a){
    console.log('setter');
    this._a = a;
  }
}
let exam1 = new Example1(1,2);
// setter
// 触发 set 方法输出 setter , 并赋值 _a = a = 1 ,此处并不会调用 get 方法
console.log(exam1._a);
// 1
console.log(exam1.a);
// getter
// 1
// 访问了 get 中定义的 a 方法，触发 get 方法
```

## 继承

* `extends`

> 通过 `extends` 实现类的继承

```js
class Child extends Father { ... }
```

* `super`

  * 调用父类构造函数,只能出现在子类的构造函数

    ```js
    class Father {
      test(){
        return 0;
      }
      static test1(){
        return 1;
      }
    }
    class Child extends Father {
      constructor(){
        super();
      }
    }
    class Child1 extends Father {
      test2() {
        super();
        // Uncaught SyntaxError: 'super' keyword unexpected here
      }
    }
    ```

  * 调用父类方法, `super` 作为对象

    * 在普通方法中，指向父类的原型对象

    * 在静态方法中，指向父类

    ```js
    class Father {
      test(){
        return 0;
      }
      static test1(){
        return 1;
      }
    }
    class Child2 extends Father {
      constructor(){
        super();
        // 调用父类普通方法
        console.log(super.test());
      }
      static test3(){
        // 调用父类静态方法
        return super.test1()+2;
      }
    }
    console.log(Child2.test3());
    // 3
    let abc = new Child2();
    // 0
    ```

> 子类 `constructor` 方法中必须有 `super` ，且必须出现在 `this` 之前

```js
class Father {
  constructor() {}
}
class Child extends Father {
  constructor() {}
  // or
  // constructor(a) {
    // this.a = a;
    // super();
  // }
}
let test = new Child();
// Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

### 不可继承常规对象

```js
var Father = {
  // ...
}
class Child extends Father {
   // ...
}
// Uncaught TypeError: Class extends value #<Object> is not a constructor or null

// 解决方案
Object.setPrototypeOf(Child.prototype, Father);
```


# `ES6` 模块

> `ES6` 引入了模块化，其设计思想是在编译时就能确定模块的依赖关系，以及输入和输出的变量

> `ES6` 的模块化分为:

* 导出（`export`）模块

  * `export` 命令可以出现在模块的任何位置，但必需处于模块顶层

  * 建议使用大括号指定所要输出的一组变量写在文档尾部，明确导出的接口

  * 函数与类都需要有对应的名称，导出文档尾部也避免了无对应名称

* 导入（`import`）模块

  * `import` 命令会提升到整个模块的头部，首先执行

* ES6 的模块自动开启严格模式，不管你有没有在模块头部加上 `use strict`

* 模块中可以导入和导出各种类型的变量，如函数，对象，字符串，数字，布尔值，类等

* 每个模块都有自己的上下文，每一个模块内声明的变量都是局部变量，不会污染全局作用域

* 每一个模块只加载一次（是单例的），若再去加载同目录下同文件，直接从内存中读取

* 模块导入导出各种类型的变量，如字符串，数值，函数，类:

  * 导出的函数声明与类声明必须要有名称（`export default` 命令另外考虑）

  * 不仅能导出声明还能导出引用（例如函数）

## `export` 与 `import`

```js
/*-----export [test.js]-----*/
let myName = "Tom";
let myAge = 20;
let myfn = function(){
  return "My name is" + myName + "! I'm '" + myAge + "years old."
}
let myClass =  class myClass {
  static a = "yeah!";
}
export { myName, myAge, myfn, myClass }

/*-----import [xxx.js]-----*/
import { myName, myAge, myfn, myClass } from "./test.js";
console.log(myfn());
// My name is Tom! I'm 20 years old.
console.log(myAge);
// 20
console.log(myName);
// Tom
console.log(myClass.a );
// yeah!
```

## `as` 的用法

> 使用 `as` 重新定义导出的接口名称，隐藏模块内部的变量

* `export` 命令导出的接口名称，须和模块内部的变量有一一对应关系

* 导入的变量名，须和导出的接口名称相同，即顺序可以不一致

* 不同模块导出接口名称命名重复， 使用 as 重新定义变量名

```js
/*-----export [test.js]-----*/
let myName = "Tom";
export { myName as exportName }

/*-----import [xxx.js]-----*/
import { exportName } from "./test.js";
console.log(exportName);
// Tom

/*-----export [test1.js]-----*/
let myName = "Tom";
export { myName }
/*-----export [test2.js]-----*/
let myName = "Jerry";
export { myName }
/*-----import [xxx.js]-----*/
import { myName as name1 } from "./test1.js";
import { myName as name2 } from "./test2.js";
console.log(name1);
// Tom
console.log(name2);
// Jerry
```

## `import` 命令的特点

* 只读属性

  * 不允许在加载模块的脚本里面，改写接口的引用指向，即可以改写 `import` 变量类型为对象的属性值，不能改写 `import` 变量类型为基本类型的值

  ```js
  import {a} from "./xxx.js"
  a = {}; // error

  import {a} from "./xxx.js"
  a.foo = "hello"; // a = { foo : 'hello' }
  ```

* 单例模式

  * 多次重复执行同一句 `import` 语句，那么只会执行一次，而不会执行多次

  * `import` 同一模块，声明不同接口引用，会声明对应变量，但只执行一次 `import`

  ```js
  import { a } "./xxx.js";
  import { a } "./xxx.js";
  // 相当于 import { a } "./xxx.js";

  import { a } from "./xxx.js";
  import { b } from "./xxx.js";
  // 相当于 import { a, b } from "./xxx.js";
  ```

* 静态执行特性

  * `import` 是静态执行，所以不能使用表达式和变量

  ```js
  import { "f" + "oo" } from "methods";
  // error
  let module = "methods";
  import { foo } from module;
  // error
  if (true) {
  import { foo } from "method1";
  } else {
  import { foo } from "method2";
  }
  // error
  ```

## `export default` 命令

* 在一个文件或模块中，`export`、`import` 可以有多个，`export default` 仅有一个

* `export default` 中的 `default` 是对应的导出接口变量

* 通过 `export` 方式导出，在导入时要加 `{}`，`export default` 则不需要

* `export default` 向外暴露的成员，可以使用任意变量来接收

```js
var a = "My name is Tom!";
export default a;
// 仅有一个
export default var c = "error";
// error，default 已经是对应的导出变量，不能跟着变量声明语句

import b from "./xxx.js";
// 不需要加{}， 使用任意变量接收
```

## `export` 与 `import` 复合使用

```js
export { foo, bar } from "methods";

// 约等于下面两段语句，不过上面导入导出方式该模块没有导入 foo 与 bar
import { foo, bar } from "methods";
export { foo, bar };
```

* 可以将导出接口改名，包括 `default`

  ```js
  // 普通改名
  export { foo as bar } from "methods";
  // 将 foo 转导成 default
  export { foo as default } from "methods";
  // 将 default 转导成 foo
  export { default as foo } from "methods";
  ```

* 可以导出全部，当前模块导出的接口会覆盖继承导出的

```js
export * from "methods";
```


# `Promise` 对象

`Promise` 对象是异步编程的一种解决方案，从语法上说，`Promise` 是一个对象，它可以获取异步操作的消息

## 状态

`Promise` 异步操作有三种状态：

* `pending`（进行中）
* `fulfilled`（已成功）
* `rejected`（已失败）

> 除了异步操作的结果，任何其他操作都无法改变这个状态

`Promise` 对象只有以下情况时状态改变

* 从 `pending` 变为 `fulfilled` 时
* 从 `pending` 变为 `rejected` 时

> 只要处于 `fulfilled` 和 `rejected` ，状态就不会再变了
> * 即 `resolved`（已定型）

```js
const p1 = new Promise(function(resolve,reject){
resolve('success1');
resolve('success2');
});

const p2 = new Promise(function(resolve,reject){
resolve('success3');
reject('reject');
});

p1.then(function(value){
console.log(value);
// success1
});
p2.then(function(value){
console.log(value);
// success3
});
```

`Promise` 异步操作状态的缺点:

* 无法取消 `Promise` ，一旦新建它就会立即执行，无法中途取消

* 如果不设置回调函数，`Promise` 内部抛出的错误，不会反应到外部

* 当处于 `pending` 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

## `then` 方法

`then` 方法接收两个函数作为参数:

* 第一个参数是 `Promise` 执行成功时的回调

* 第二个参数是 `Promise` 执行失败时的回调

* 两个函数只会有一个被调用

### `then` 方法的特点

在 `JavaScript` 事件队列的当前运行完成之前，回调函数永远不会被调用

```js
const p = new Promise(function(resolve,reject){
  resolve('success');
});

p.then(function(value){
  console.log(value);
});
console.log('first');
// first
// success ，此处是上三行代码的执行结果
```

* 通过 `.then` 形式添加的回调函数，不论什么时候，都会被调用

* 可以添加多个回调函数，它们会按照插入顺序并且独立运行

```js
const p = new Promise(function(resolve,reject){
  resolve(1);
}).then(function(value){
  // 第一个then
  console.log(value);
  // 1
  return value * 2;
}).then(function(value){
  // 第二个then
  console.log(value);
  // 2
}).then(function(value){
  // 第三个then
  console.log(value);
  // undefined ,因为上一个 .then 未返回值
  return Promise.resolve('resolve');
}).then(function(value){
  // 第四个then
  console.log(value);
  // resolve
  return Promise.reject('reject');
}).then(function(value){
  // 第五个then
  console.log('resolve:' + value);
  //reject:reject
}, function(err) {
  console.log('reject:' + err);
});
```

* `then` 方法将返回一个 `resolved` 或 `rejected` 状态的 `Promise` 对象用于链式调用，且 `Promise` 对象的值就是这个返回值

### `then` 方法注意点

* 简便的 `Promise` 链式编程最好保持扁平化，不要嵌套 `Promise`

* 注意:总是要返回或终止 `Promise` 链

```js
const p1 = new Promise(function(resolve,reject){
  resolve(1);
}).then(function(result) {
  p2(result).then(newResult => p3(newResult));
}).then(() => p4());
// 创建新 Promise 但忘记返回它时，对应链条被打破，导致 p4 会与 p2 和 p3 同时进行
```

* 大多数浏览器中不能终止的 `Promise` 链里的 `rejection` ，建议后面都跟上 `.catch(error => console.log(error))`


# `ES6` `Generator` 函数

> `ES6` 新引入了 `Generator` 函数，可以通过 `yield` 关键字，把函数的执行流挂起，为改变执行流程提供了可能，从而为异步编程提供解决方案

## `Generator` 函数组成

* 一是在 `function` 后面，函数名之前有个 `*`

* 二是在函数内部有 `yield` 表达式

> 其中 `*` 用来表示函数为 `Generator` 函数，`yield` 用来定义函数内部的状态

```js
function *func(){
  console.log("one");
  yield '1';
  console.log("two");
  yield '2';
  console.log("three");
  return '3';
}
```

## 执行机制

> 调用 `Generator` 函数和调用普通函数一样，在函数名后面加上 `()` 即可，但是 `Generator` 函数不会像普通函数一样立即执行，而是返回一个指向内部状态对象的指针，所以要调用遍历器对象 `Iterator` 的 `next` 方法，指针就会从函数头部或者上一次停下来的地方开始执行

```js
function* func(){
  console.log("one");
  yield '1';
  console.log("two");
  yield '2';
  console.log("three");
  return '3';
}
let f = func();
console.log(f.next());
// one
// {value: "1", done: false}

console.log(f.next());
// two
// {value: "2", done: false}

console.log(f.next());
// three
// {value: "3", done: true}

console.log(f.next());
// {value: undefined, done: true}
```

## 函数返回的遍历器对象的方法

* `next` 方法

  * 一般情况下，`next` 方法不传入参数的时候，`yield` 表达式的返回值是 `undefined`

  * 当 `next` 传入参数的时候，该参数会作为上一步 `yield` 的返回值

  ```js
  function* sendParameter(){
    console.log("strat");
    var x = yield '2';
    console.log("one:" + x);
    var y = yield '3';
    console.log("two:" + y);
    console.log("total:" + (x + y));
  }
  var sendp1 = sendParameter();

  // next 不传参
  sendp1.next();
  // strat
  // 此时返回 {value: "2", done: false}
  sendp1.next();
  // one:undefined
  // 此时返回 {value: "3", done: false}
  sendp1.next();
  // two:undefined
  // total:NaN
  // 此时返回 {value: undefined, done: true}

  // next 传参
  var sendp2 = sendParameter();
  sendp2.next(10);
  // strat
  // 此时返回 {value: "2", done: false}
  sendp2.next(20);
  // one:20
  // 此时返回 {value: "3", done: false}
  sendp2.next(30);
  // two:30
  // total:50
  // 此时返回 {value: undefined, done: true}
  ```

  * 除了使用 `next` ，还可以使用 `for... of` 循环遍历 `Generator` 函数生产的 `Iterator` 对象

* `return` 方法

  * `return` 方法返回给定值，并结束遍历 `Generator` 函数

  * `return` 方法提供参数时，返回该参数；不提供参数时，返回 `undefined`

  ```js
  function* foo(){
    yield 1;
    yield 2;
    yield 3;
  }
  var f = foo();
  console.log(f.next());
  // {value: 1, done: false}
  console.log(f.return("foo"));
  // {value: "foo", done: true}
  console.log(f.next());
  // {value: undefined, done: true}
  ```

* `throw` 方法

  * `throw` 方法可以再 `Generator` 函数体外面抛出异常，在函数体内部捕获

  ```js
  function* g() {
  try {
    yield;
  } catch (e) {
    console.log('catch inner', e);
  }
  };

  var i = g();
  console.log(i.next());
  // {value: undefined, done: false}

  try {
  i.throw('a');
  i.throw('b');
  } catch (e) {
  console.log('catch outside', e);
  }
  // catch inner a
  // catch outside b
  // 遍历器对象抛出了两个错误，第一个被 Generator 函数内部捕获，第二个因为函数体内部的catch 函数已经执行过了，不会再捕获这个错误，所以这个错误就抛出 Generator 函数体，被函数体外的 catch 捕获
  ```

* `yield*` 表达式

  * `yield*` 表达式表示 `yield` 返回一个遍历器对象，用于在 `Generator` 函数内部，调用另一个 `Generator` 函数

  ```js
  function* foo() {
  yield 'a';
  yield 'b';
  }

  function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
  }

  // 等同于
  function* bar() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
  }

  // 等同于
  function* bar() {
  yield 'x';
  for (let v of foo()) {
    yield v;
  }
  yield 'y';
  }

  for (let v of bar()){
  console.log(v);
  }
  // "x"
  // "a"
  // "b"
  // "y"
  ```

* 实现 `Iterator`

  * 为不具备 `Iterator` 接口的对象提供遍历方法

  ```js
  function* objectEntries(obj) {
    const propKeys = Reflect.ownKeys(obj);
    for (const propKey of propKeys) {
      yield [propKey, obj[propKey]];
    }
  }

  const jane = { first: 'Jane', last: 'Doe' };
  for (const [key,value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
  }
  // first: Jane
  // last: Doe
  ```

  * `Reflect.ownKeys()` 返回对象所有的属性，不管属性是否可枚举，包括 `Symbol`

  * 【问题】`jane` 原生是不具备 `Iterator` 接口无法通过 `for...of` 遍历。这边用了 `Generator` 函数加上了 `Iterator` 接口，所以就可以遍历 `jane` 对象了

# `ES6` `async` 函数

> `async` 是 `ES7` 才有的与异步操作有关的关键字，和 `Promise` ， `Generator` 有很大关联的

## 语法

> `async function name([param[, param[, ... param]]]) { statements }`

* name: 函数名称

* param: 要传递给函数的参数的名称

* statements: 函数体语句

## 返回值

> `async` 函数返回一个 `Promise` 对象，可以使用 `then` 方法添加回调函数

```js
async function helloAsync(){
  return "helloAsync";
  }

console.log(helloAsync());
// Promise {<resolved>: "helloAsync"}

helloAsync().then(v=>{
   console.log(v);
   // helloAsync
})
```

* `async` 函数中可能会有 `await` 表达式，`async` 函数执行时，如果遇到 `await` 就会先暂停执行 ，等到触发的异步操作完成后，恢复 `async` 函数的执行并返回解析值

* `await` 关键字仅在 `async function` 中有效。如果在 `async function` 函数体外使用 `await` ，你只会得到一个语法错误

```js
function testAwait(){
   return new Promise((resolve) => {
     setTimeout(function(){
      console.log("testAwait");
      resolve();
     }, 1000);
   });
}

async function helloAsync(){
   await testAwait();
   console.log("helloAsync");
 }
helloAsync();
// testAwait
// helloAsync
```

## `await`

> `await` 操作符用于等待一个 `Promise` 对象, 它只能在异步函数 `async function` 内部使用

### 语法

> `[return_value] = await expression`

* `expression`: 一个 `Promise` 对象或者任何要等待的值

### 返回值

* 返回 `Promise` 对象的处理结果

* 如果等待的不是 `Promise` 对象，则返回该值本身

* 如果一个 `Promise` 被传递给一个 `await` `操作符，await` 将等待 `Promise` 正常处理完成并返回其处理结果

```js
function testAwait (x) {
  return new Promise(resolve => {
  setTimeout(() => {
    resolve(x);
  }, 2000);
  });
}

async function helloAsync() {
  var x = await testAwait ("hello world");
  console.log(x);
}
helloAsync ();
// hello world
```

* 正常情况下，`await` 命令后面是一个 `Promise` 对象，它也可以跟其他值，如字符串，布尔值，数值以及普通函数

```js
function testAwait(){
   console.log("testAwait");
}
async function helloAsync(){
   await testAwait();
   console.log("helloAsync");
}
helloAsync();
// testAwait
// helloAsync
```

* `await` 针对所跟不同表达式的处理方式：

  * `Promise` 对象：`await` 会暂停执行，等待 `Promise` 对象 `resolve` ，然后恢复 `async` 函数的执行并返回解析值

  * 非 `Promise` 对象：直接返回对应的值



---
---

> 以下内容整理自 视频教程

---
---


# 声明变量

> 了解 `var` `let` `const` 的区别和优势

## `var`

* 可重新赋值
* 可重新定义
* 全局作用域（在函数内时只作用函数全局内）
* 声明变量之前查询变量得到的结果是 `undefined`

## `let`

* 块级作用域。下面的例子中，`i` 为 `var` 声明的 `i=0` 时，第二个 `console.log()` 的 `i` 值都为 `10`.因为 `i` 是作用全局的，`setTimeout()` 函数执行时，`i` 的值已经被赋值为 `10`；而为 `let` 声明时，每次循环时 `i` 的值都只在 `{...}` 内存在
  ```js
  for (let i=0; i<10; i++){
    // 下面结果依次是1到9的数字
    console.log(i);
    setTimeout(function(){
      // 下面结果是1到9的数字
      console.log(`i:${i}`);
    },1000)
  }
  ```
* 可重新赋值
* 同一作用域时不可重复声明同一变量
* 声明变量之前查询变量会报错
* 建议常用 `let`，比 `var` 更易区分变量的作用域，比 `const` 较多变

## `const`

* 块级作用域
* 在声明时必须被赋值
* 同一作用域时不可重复声明同一变量
* 不可重新赋值，声明对象时可改变其属性
* 可用于对象的声明
* 声明变量之前查询变量会报错


# 箭头函数

> 一种简写函数的做法，例：

```js
function(){...}

// 等同于

() => {...}

// 小括号内有 1 个参数时,小括号可要可不要：

(abc) => {...} 或 abc => {...}

// 小括号内有 2 个或以上参数时，小括号须保留：

(abc,abe) => {...}


// 大括号内有执行程序时，可更简化写法：

(abc) => { abc*2 }

// 等同于

(abc) => abc*2
```

## 箭头函数的优势

> 其结构较简洁，需注意的是：其 `this` 值在指向时指向父级作用域

```js
const Jelly = {
  name:'Jelly',
  hobbies: ['Coding', 'Sleeping', 'Reading'],
  printHobbies: function(){
    this.hobbies.map( hobby => {
      console.log(`${this.name} love ${hobby}`);
    }
    )
  }
};
Jelly.printHobbies();
```

## 箭头函数的缺陷

* 不适用于构造函数：构造函数新建时，`this` 值的指向并不会是新生成的函数，而是 `window`

* `this`的指向错误：对于函数中的函数，外层函数使用箭头函数时，`this` 指向是 `window` ，而不是当前函数

* 箭头函数中无 `arguments` 对象


# 函数默认值

> 变量未赋值时使用的默认值

```js
function multiply(a=5;b=3){
  return a * b;
}

// 参数可都不取值
multiply()
// 结果为 15,因为是 5*3=15

// 可只指定 a 的值：
multiply(2)
// 结果为 6，因为是 2*3=6

// 不指定第一个参数的值时，需取值为 undefined ，否则报错
multiply(undefined,1)
// 结果为 5，因为是 5*1=5
```


# 模板引用

> 使用反引号 `` 和 $ 及 {} 进行使用

```js
const abc = `这是${text}`
```

## 标签模板字符串

> 剩余参数的引用：使用 `...values` 代表除第一个以外的剩余参数

```js
// 这里在输入第二个和第三个参数时用 ...values 代替
function highlight(strings, ...values){
  // 当 aaa 后的字符串由变量开始和结束时，strings 数组会以空字符串 '' 为首尾元素
  console.log(strings);

  // values 数组的元素依次是 aaa 后的变量的值
  console.log(values);

  const highlighted = values.map(value => `<span class='highlight'${value}</span>`);

  let str = '';
  strings.forEach((string,i) => str += `${string}${highlighted[i] || ''}`);
  return str;
  // 上面可使用 return strings.reduce((prev,curr,i) => `${prev}${curr}${highlighted[i] || ''}`, '')
}
const user = 'Mary';
const topic = 'Learn to use markdown';
const sentence = highlight`${user} has commented on your topic ${topic}`;

document.body.innerHTML = sentence;
```