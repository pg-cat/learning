以下整理自[【 TypeScript 官方文档】【v3.1】](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)

<!-- TOC -->

- [== 辅导教程 ==](#-辅导教程-)
- [五分钟上手](#五分钟上手)
  - [安装](#安装)
  - [构建你的第一个 TypeScript 文件](#构建你的第一个-typescript-文件)
  - [编译代码](#编译代码)
  - [类型注解](#类型注解)
  - [接口](#接口)
  - [类](#类)
  - [运行 TypeScript Web 应用](#运行-typescript-web-应用)
- [React & Webpack](#react--webpack)
  - [初始化项目结构](#初始化项目结构)
  - [初始化工程](#初始化工程)
  - [安装依赖](#安装依赖)
  - [添加 TypeScript 配置文件](#添加-typescript-配置文件)
  - [写些代码](#写些代码)
  - [创建一个 webpack 配置文件](#创建一个-webpack-配置文件)
  - [整合在一起](#整合在一起)
- [== 手册指南 ==](#-手册指南-)
- [基础类型](#基础类型)
  - [介绍](#介绍)
  - [布尔值](#布尔值)
  - [数字](#数字)
  - [字符串](#字符串)
  - [数组](#数组)
  - [元组 Tuple](#元组-tuple)
  - [枚举](#枚举)
  - [Any](#any)
  - [Void](#void)
  - [Null 和 Undefined](#null-和-undefined)
  - [Never](#never)
  - [Object](#object)
  - [类型断言](#类型断言)
  - [关于 let](#关于-let)
- [变量声明](#变量声明)
  - [var 声明](#var-声明)
    - [作用域规则](#作用域规则)

<!-- /TOC -->

## == 辅导教程 ==

## 五分钟上手

让我们使用 TypeScript 来创建一个简单的 Web 应用

### 安装

有两种主要的方式来获取TypeScript工具：

- 通过 npm（ Node.js 包管理器）
- 安装 Visual Studio 的 TypeScript 插件

> Visual Studio 2017 和 Visual Studio 2015 Update 3 默认包含了 TypeScript
>> 如果你的 Visual Studio 还没有安装 TypeScript ，你可以[【下载它】](https://www.tslang.cn/#download-links)

针对使用 npm 的用户：

```shell
# 安装 TS
npm install -g typescript
```

### 构建你的第一个 TypeScript 文件

在编辑器，将下面的代码输入到 greeter.ts 文件里：

```ts
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```

### 编译代码

我们使用了 `.ts` 扩展名，但是这段代码仅仅是 JavaScript 而已

- 你可以直接从现有的 JavaScript 应用里 **`复制 / 粘贴`** 这段代码

- 在命令行上，运行 TypeScript 编译器：

```shell
tsc greeter.ts
```

输出结果为一个 `greeter.js` 文件，它包含了和输入文件中相同的 JavsScript 代码

一切准备就绪，我们可以运行这个使用 TypeScript 写的 JavaScript 应用了！

- 接下来让我们看看 TypeScript 工具带来的高级功能

- 给 person 函数的参数添加: `string` 类型注解，如下：

```ts
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```

### 类型注解

TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式

在这个例子里，我们希望 `greeter` 函数接收一个字符串参数

- 然后尝试把 greeter 的调用改成传入一个数组：

```ts
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);
```

重新编译，你会看到产生了一个错误

```shell
greeter.ts(7,26): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

类似地，尝试删除 greeter 调用的所有参数

- TypeScript 会告诉你使用了非期望个数的参数调用了这个函数

- 在这两种情况中，TypeScript 提供了静态的代码分析，它可以分析代码结构和提供的类型注解

> 要注意的是：
>> 尽管有错误，`greeter.js` 文件还是被创建了
> - 就算你的代码里有错误，你仍然可以使用 TypeScript
> - 但在这种情况下，TypeScript 会警告你代码可能不会按预期执行

### 接口

让我们开发这个示例应用：

这里我们使用接口来描述一个拥有 `firstName` 和 `lastName` 字段的对象

- 在 TypeScript 里，只在两个类型内部的结构兼容那么这两个类型就是兼容的

- 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 `implements` 语句

```ts
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
```

### 类

最后，让我们使用类来改写这个例子：

> TypeScript 支持 JavaScript 的新特性，比如支持基于类的面向对象编程

让我们创建一个 Student 类，它带有一个构造函数和一些公共字段

> 注意：类和接口可以一起共作，程序员可以自行决定抽象的级别
>> 还要注意的是：在构造函数的参数上使用 public 等同于创建了同名的成员变量

```ts
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```

重新运行 `tsc greeter.ts` ，你会看到生成的 JavaScript 代码和原先的一样

- TypeScript 里的类只是 JavaScript 里常用的基于原型面向对象编程的简写

### 运行 TypeScript Web 应用

在 `greeter.html` 里输入如下内容：

```html
<!DOCTYPE html>
<html>
    <head><title>TypeScript Greeter</title></head>
    <body>
        <script src="greeter.js"></script>
    </body>
</html>
```

在浏览器里打开 `greeter.html` 运行这个应用！

> 可选地：
>> 在 Visual Studio 里打开 `greeter.ts` 或者把代码复制到 TypeScript playground
> - 将鼠标悬停在标识符上查看它们的类型
> - 注意在某些情况下它们的类型可以被自动地推断出来
> - 重新输入一下最后一行代码，看一下自动补全列表和参数列表，它们会根据 DOM 元素类型而变化
> - 将光标放在 `greeter` 函数上，点击 `F12` 可以跟踪到它的定义
> - 还有一点，你可以右键点击标识，使用重构功能来重命名

这些类型信息以及工具可以很好的和 JavaScript 一起工作

> 更多的 TypeScript 功能演示，请查看本网站的[【起步】](https://www.tslang.cn/samples/index.html)部分

![图片](https://www.tslang.cn/assets/images/docs/greet_person.png)

## React & Webpack

这篇指南将会教你如何将 TypeScript 和[【 React 】](https://reactjs.org/)还有[【 webpack 】](http://webpack.github.io/)结合在一起使用

> 如果你正在做一个全新的工程，可以先阅读这篇[【 React 快速上手指南】](https://www.tslang.cn/samples/index.html)
>> 否则，我们假设已经在使用[【 Node.js 】](https://nodejs.org/)和[【 npm 】](https://www.npmjs.com/)

### 初始化项目结构

让我们新建一个目录，将会命名为 `proj` ，但是你可以改成任何你喜欢的名字

```shell
mkdir proj
cd proj
```

我们会像下面的结构组织我们的工程：

```
proj/
├─ dist/
└─ src/
   └─ components/
```

TypeScript 文件会放在 `src` 文件夹里

- 通过 TypeScript 编译器编译

- 然后经 webpack 处理

- 最后生成一个 `bundle.js` 文件放在 `dist` 目录下

> 我们自定义的组件将会放在 `src/components` 文件夹下

下面来创建基本结构：

```shell
mkdir src
cd src
mkdir components
cd ..
```

Webpack 会帮助我们生成 `dist` 目录

### 初始化工程

现在把这个目录变成 npm 包

```shell
npm init
```

你会看到一些提示，放心地使用默认值就可以了

当然，你也可以随时到生成的 `package.json` 文件里修改

### 安装依赖

首先确保已经全局安装了 Webpack

```shell
npm install -g webpack
```

Webpack 这个工具可以将你的所有代码和可选择地将依赖捆绑成一个单独的 `.js` 文件

现在我们添加 `React` 和 `React-DOM` 以及它们的声明文件到 `package.json` 文件里做为依赖：

```shell
npm install --save react react-dom @types/react @types/react-dom
```

使用 `@types/` 前缀表示我们额外要获取 React 和 React-DOM 的声明文件

- 通常当你导入像 `"react"` 这样的路径，它会查看 react 包

- 然而，并不是所有的包都包含了声明文件，所以 TypeScript 还会查看 `@types/react` 包

  > 你会发现我们以后将不必在意这些

接下来，我们要添加开发时依赖[【 awesome-typescript-loader 】](https://www.npmjs.com/package/awesome-typescript-loader)和[【 source-map-loader 】](https://www.npmjs.com/package/source-map-loader)

```shell
npm install --save-dev typescript awesome-typescript-loader source-map-loader
```

这些依赖会让 TypeScript 和 webpack 在一起良好地工作

- awesome-typescript-loader

  可以让 Webpack 使用 TypeScript 的标准配置文件 `tsconfig.json` 编译 TypeScript 代码

- source-map-loader

  使用 TypeScript 输出的 sourcemap 文件来告诉 webpack 何时生成 **`自己的sourcemaps`**

  这就允许你在调试最终生成的文件时就好像在调试 TypeScript 源码一样

> 注意：我们安装 TypeScript 为一个开发依赖
>> 我们还可以使用 `npm link typescript` 来链接 TypeScript 到一个全局拷贝，但这不是常见用法

### 添加 TypeScript 配置文件

> 我们想将 TypeScript 文件整合到一起（这包括我们写的源码和必要的声明文件）

我们需要创建一个 `tsconfig.json` 文件，它包含了输入文件列表以及编译选项

- 在工程根目录下新建文件 `tsconfig.json` 文件，添加以下内容：

```json
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react"
    },
    "include": [
        "./src/**/*"
    ]
}
```

> [【你可以在这里了解更多关于 `tsconfig.json` 文件的说明】](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

### 写些代码

下面使用 React 写一段 TypeScript 代码

- 首先，在 `src/components` 目录下创建一个名为 `Hello.tsx` 的文件，代码如下：

```ts
import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
```

> 注意：这个例子使用了[【无状态的功能组件】](https://reactjs.org/docs/components-and-props.html#functional-and-class-components)，我们可以让它更像一点类

```ts
import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
```

- 接下来，在 `src` 下创建 `index.tsx` 文件，源码如下：

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
```

我们仅仅将 `Hello` 组件导入 `index.tsx`

> 注意：不同于 `"react"` 或 `"react-dom"` ，我们使用 `Hello.tsx` 的相对路径（这很重要）
>> 如果不这样做，TypeScript 只会尝试在 `node_modules` 文件夹里查找

- 我们还需要一个页面来显示 `Hello` 组件，在根目录 `proj` 创建一个名为 `index.html` 的文件，如下：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Hello React!</title>
    </head>
    <body>
        <div id="example"></div>

        <!-- Dependencies -->
        <script src="./node_modules/react/umd/react.development.js"></script>
        <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

        <!-- Main -->
        <script src="./dist/bundle.js"></script>
    </body>
</html>
```

需要注意一点我们是从 `node_modules` 引入的文件

- React 和 React-DOM 的 npm 包里包含了独立的 `.js` 文件，你可以在页面上引入它们，这里我们为了快捷就直接引用了

- 可以随意地将它们拷贝到其它目录下，或者从 CDN 上引用

  Facebook 在 CND 上提供了一系列可用的 React 版本，你可以在这里查看[【更多内容】](https://reactjs.org/docs/cdn-links.html)

### 创建一个 webpack 配置文件

在工程根目录下创建一个 `webpack.config.js` 文件

```js
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
```

大家可能对 externals 字段有所疑惑

- 我们想要避免把所有的 React 都放到一个文件里

- 因为会增加编译时间并且浏览器还能够缓存没有发生改变的库文件

理想情况下，我们只需要在浏览器里引入 React 模块，但是大部分浏览器还没有支持模块

- 因此大部分代码库会把自己包裹在一个单独的全局变量内，比如：`jQuery` 或 `_`

- 这叫做 **`命名空间`** 模式，webpack 也允许我们继续使用通过这种方式写的代码库

- 通过我们的设置 `"react": "React"` ，webpack 会神奇地将所有对 `"react"` 的导入转换成从 React 全局变量中加载

> [【你可以在这里了解更多如何配置 webpack 】](https://webpack.js.org/concepts)

### 整合在一起

执行：

```shell
webpack
```

在浏览器里打开 `index.html` ，工程应该已经可以用了！

你可以看到页面上显示着 `Hello from TypeScript and React!`

## == 手册指南 ==

## 基础类型

### 介绍

为了让程序有价值，我们需要能够处理最简单的数据单元：

- 布尔值
- 数字
- 字符串
- 结构体
- ...等

TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用

### 布尔值

最基本的数据类型就是简单的 `true / false` 值，在 JavaScript 和 TypeScript 里叫做 `boolean`（其它语言中也一样）

```ts
let isDone: boolean = false;
```

### 数字

和 JavaScript 一样，TypeScript 里的所有数字都是浮点数

- 这些浮点数的类型是 number

- 除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015 中引入的二进制和八进制字面量

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

### 字符串

JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据

- 像其它语言里一样，我们使用 `string` 表示文本数据类型

- 和 JavaScript 一样，可以使用双引号 `"` 或单引号 `'` 表示字符串

```ts
let name: string = "bob";
name = "smith";
```

你还可以使用 **`模版字符串`** ，它可以定义多行文本和内嵌表达式

- 这种字符串是被反引号包围（ ` ），并且以 `${ expr }` 这种形式嵌入表达式

```ts
let name: string = `Gene`;
let age: number = 37;

let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;
```

这与下面定义 `sentence` 的方式效果相同：

```ts
let sentence: string = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
```

### 数组

TypeScript 像 JavaScript 一样可以操作数组元素，有两种方式可以定义数组：

- 第一种，可以在元素类型后面接上 `[]` ，表示由此类型元素组成的一个数组：

```ts
let list: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型 **`Array<元素类型>`** ：

```ts
let list: Array<number> = [1, 2, 3];
```

### 元组 Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

- 比如，你可以定义一对值分别为 `string` 和 `number` 类型的元组

```ts
// Declare a tuple type
let x: [string, number];

// Initialize it
x = ['hello', 10]; // OK

// Initialize it incorrectly
x = [10, 'hello']; // Error
```

当访问一个已知索引的元素，会得到正确的类型：

```ts
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```

当访问一个越界的元素，会使用联合类型替代：

```ts
x[3] = 'world'; // OK, 字符串可以赋值给 (string | number) 类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是 (string | number) 类型
```

> 联合类型是高级主题，我们会在以后的章节里讨论它

### 枚举

`enum` 类型是对 JavaScript 标准数据类型的一个补充

- 像 C# 等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

默认情况下，从 `0` 开始为元素编号

- 你也可以手动的指定成员的数值

- 例如，我们将上面的例子改成从 `1` 开始编号

```ts
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

或者，全部都采用手动赋值：

```ts
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字

- 例如，我们知道数值为 `2` ，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示 'Green' 因为上面代码里它的值是 2
```

### Any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型

- 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库

- 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查

那么我们可以使用 `any` 类型来标记这些变量：

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

在对现有代码进行改写的时候，`any` 类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查

- 你可能认为 `Object` 有相似的作用，就像它在其它语言中那样

- 但是 `Object` 类型的变量只是允许你给它赋任意值（但是却不能够在它上面调用任意的方法，即便它真的有这些方法）

```ts
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

当你只知道一部分数据的类型时，`any` 类型也是有用的

- 比如，你有一个数组，它包含了不同的类型的数据

```ts
let list: any[] = [1, true, "free"];

list[1] = 100;
```

### Void

某种程度上来说，`void` 类型像是与 `any` 类型相反，它表示没有任何类型

- 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`

```ts
function warnUser(): void {
    console.log("This is my warning message");
}
```

声明一个 `void` 类型的变量没有什么大用，因为你只能为它赋予 `undefined` 和 `null` ：

```ts
let unusable: void = undefined;
```

### Null 和 Undefined

TypeScript 里，`undefined` 和 `null` 两者各自有自己的类型分别叫做 `undefined` 和 `null`

- 和 `void` 相似，它们的本身的类型用处不是很大

```ts
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

默认情况下 `null` 和 `undefined` 是所有类型的子类型

- 就是说你可以把 `null` 和 `undefined` 赋值给 `number` 类型的变量

然而，当你指定了 `--strictNullChecks` 标记，`null` 和 `undefined` 只能赋值给 `void` 和它们各自

- 这能避免 **`很多常见的问题`**

- 也许在某处你想传入一个 `string` 或 `null` 或 `undefined` ，你可以使用联合类型 `string | null | undefined`

> 再次说明，稍后我们会介绍联合类型

> 注意：我们鼓励尽可能地使用 `--strictNullChecks` ，但在本手册里我们假设这个标记是关闭的

### Never

`never` 类型表示的是那些永不存在的值的类型

- 例如，`never` 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

- 变量也可能是 `never` 类型，当它们被永不为真的类型保护所约束时

`never` 类型是任何类型的子类型，也可以赋值给任何类型

- 然而，没有类型是 `never` 的子类型或可以赋值给 `never` 类型（除了 `never` 本身之外）

  > 即使 `any` 也不可以赋值给 `never`

下面是一些返回 `never` 类型的函数：

```ts
// 返回 never 的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为 never
function fail() {
    return error("Something failed");
}

// 返回 never 的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

### Object

`object` 表示非原始类型，也就是除以下类型之外的类型：

- `number`
- `string`
- `boolean`
- `symbol`
- `null`
- `undefined`

使用 `object` 类型，就可以更好的表示像 `Object.create` 这样的 API ，例如：

```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

### 类型断言

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息

- 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型

通过 **`类型断言`** 这种方式可以告诉编译器：**`相信我，我知道自己在干什么`**

- 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构

- 它没有运行时的影响，只是在编译阶段起作用

- TypeScript 会假设你（程序员）已经进行了必须的检查

类型断言有两种形式：

- 其一是尖括号 `< >` 语法：

```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

- 另一个为 `as` 语法：

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

两种形式是等价的

- 至于使用哪个大多数情况下是凭个人喜好

- 然而，当你在 TypeScript 里使用 `JSX` 时，只有 `as` 语法断言是被允许的

### 关于 let

你可能已经注意到了，我们使用 `let` 关键字来代替大家所熟悉的 JavaScript 关键字 `var`

- `let` 关键字是 JavaScript 的一个新概念，TypeScript 实现了它

- 我们会在以后详细介绍它，很多常见的问题都可以通过使用 `let` 来解决，所以尽可能地使用 `let` 来代替 `var` 吧

## 变量声明

`let` 和 `const` 是 JavaScript 里相对较新的变量声明方式

- 像我们之前提到过的，`let` 在很多方面与 `var` 是相似的，但是可以帮助大家避免在 JavaScript 里常见一些问题

- `const` 是对 `let` 的一个增强，它能阻止对一个变量再次赋值

因为 TypeScript 是 JavaScript 的超集，所以它本身就支持 `let` 和 `const`

- 下面我们会详细说明这些新的声明方式以及为什么推荐使用它们来代替 `var`

- 如果你之前使用 JavaScript 时没有特别在意，那么这节内容会唤起你的回忆

  如果你已经对 `var` 声明的怪异之处了如指掌，那么你可以轻松地略过这节

### var 声明

一直以来我们都是通过var关键字定义JavaScript变量

```ts
var a = 10;
```

大家都能理解，这里定义了一个名为 `a` 值为 `10` 的变量

我们也可以在函数内部定义变量：

```ts
function f() {
    var message = "Hello, world!";

    return message;
}
```

并且我们也可以在其它函数内部访问相同的变量

```ts
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns 11;
```

上面的例子里，`g` 可以获取到 `f` 函数里定义的 `a` 变量

- 每当 `g` 被调用时，它都可以访问到 `f` 里的 `a` 变量

- 即使当 `g` 在 `f` 已经执行完后才被调用，它仍然可以访问及修改 `a`

```ts
function f() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

f(); // returns 2
```

#### 作用域规则

对于熟悉其它语言的人来说，`var` 声明有些奇怪的作用域规则，看下面的例子：

```ts
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'
```

有些读者可能要多看几遍这个例子：变量 x是定义在 *`if 语句里面`* ，但是我们却可以在语句的外面访问它

- 这是因为 var 声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问，包含它的代码块对此没有什么影响

- 有些人称此为 *`var 作用域或函数作用域`* ，函数参数也使用函数作用域

这些作用域规则可能会引发一些错误，其中之一就是，多次声明同一个变量并不会报错：

```ts
function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
```

这里很容易看出一些问题，里层的 `for` 循环会覆盖变量 `i` ，因为所有 `i` 都引用相同的函数作用域内的变量

- 有经验的开发者们很清楚，这些问题可能在代码审查时漏掉，引发无穷的麻烦

#### 捕获变量怪异之处

快速的猜一下下面的代码会返回什么：

```ts
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}
```

介绍一下，`setTimeout` 会在若干毫秒的延时后执行一个函数（等待其它代码执行完毕）

看一下结果：

```
10
10
10
10
10
10
10
10
10
10
```

很多 JavaScript 程序员对这种行为已经很熟悉了，但如果你很不解，你并不是一个人

- 大多数人期望输出结果是这样：

```
0
1
2
3
4
5
6
7
8
9
```

还记得我们上面提到的捕获变量吗？

> 我们传给 `setTimeout` 的每一个函数表达式实际上都引用了相同作用域里的同一个 `i`

让我们花点时间思考一下这是为什么：

- `setTimeout` 在若干毫秒后执行一个函数，并且是在 `for` 循环结束后

- `for` 循环结束后，`i` 的值为 `10`

- 所以当函数被调用的时候，它会打印出 `10`

一个通常的解决方法是使用立即执行的函数表达式（IIFE）来捕获每次迭代时 `i` 的值：

```ts
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
```

参数 `i` 会覆盖 for 循环里的 `i` ，但是因为我们起了同样的名字，所以我们不用怎么改 for 循环体里的代码

### let 声明

现在你已经知道了 `var` 存在一些问题，这恰好说明了为什么用 `let` 语句来声明变量（除了名字不同外，`let` 与 `var` 的写法一致）

```ts
let hello = "Hello!";
```

主要的区别不在语法上，而是语义，我们接下来会深入研究

#### 块作用域

当用 let 声明一个变量，它使用的是词法作用域或块作用域

- 不同于使用 var 声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或 for 循环之外是不能访问的

```ts
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}
```

这里我们定义了 `2` 个变量 `a` 和 `b` ，`a` 的作用域是 `f` 函数体内，而 `b` 的作用域是 `if` 语句块里

- 在 `catch` 语句里声明的变量也具有同样的作用域规则

```ts
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

// Error: 'e' doesn't exist here
console.log(e);
```

拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写

- 虽然这些变量始终 **`存在`** 于它们的作用域里，但在直到声明它的代码之前的区域都属于 **`暂时性死区`**

- 它只是用来说明我们不能在 `let` 语句之前访问它们，幸运的是 TypeScript 可以告诉我们这些信息

```ts
a++; // illegal to use 'a' before it's declared;
let a;
```

> 注意一点，我们仍然可以在一个拥有块作用域变量被声明前获取它
> - 只是我们不能在变量声明前去调用那个函数
> - 如果生成代码目标为 `ES2015` ，现代的运行时会抛出一个错误；然而，现今 TypeScript 是不会报错的

```ts
function foo() {
    // okay to capture 'a'
    return a;
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();

let a;
```

> 关于 **`暂时性死区`** 的更多信息，查看这里[【 Mozilla Developer Network 】](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)

#### 重定义及屏蔽

我们提过使用 var 声明时，它不在乎你声明多少次：你只会得到 1 个

```ts
function f(x) {
    var x;
    var x;

    if (true) {
        var x;
    }
}
```

在上面的例子里，所有 `x` 的声明实际上都引用一个相同的 `x` ，并且这是完全有效的代码

- 这经常会成为 bug 的来源

- 好的是，`let` 声明就不会这么宽松了

```ts
let x = 10;
let x = 20; // 错误，不能在1个作用域里多次声明 `x`
```

并不是要求两个均是块级作用域的声明 TypeScript 才会给出一个错误的警告

```ts
function f(x) {
    let x = 100; // error: interferes with parameter declaration
}

function g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}
```

并不是说块级作用域变量不能用函数作用域变量来声明

- 而是块级作用域变量需要在明显不同的块里声明

```ts
function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f(false, 0); // returns 0
f(true, 0);  // returns 100
```

在一个嵌套作用域里引入一个新名字的行为称做 **`屏蔽`**

- 它是一把双刃剑，它可能会不小心地引入新问题，同时也可能会解决一些错误

- 例如，假设我们现在用 `let` 重写之前的 `sumMatrix` 函数

```ts
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
```

这个版本的循环能得到正确的结果，因为内层循环的 `i` 可以屏蔽掉外层循环的 `i`

> 通常来讲应该避免使用屏蔽，因为我们需要写出清晰的代码
> - 同时也有些场景适合利用它，你需要好好打算一下

#### 块级作用域变量的获取

在我们最初谈及获取用 var 声明的变量时，我们简略地探究了一下在获取到了变量之后它的行为是怎样的

- 直观地讲，每次进入一个作用域时，它创建了一个变量的 **`环境`**

- 就算作用域内代码已经执行完毕，这个环境与其捕获的变量依然存在

```ts
function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}
```

- 因为我们已经在 `city` 的环境里获取到了 `city` ，所以就算 `if` 语句执行结束后我们仍然可以访问它

回想一下前面 setTimeout 的例子：我们最后需要使用立即执行的函数表达式来获取每次 for 循环迭代里的状态

- 实际上，我们做的是为获取到的变量创建了一个新的变量环境

- 这样做挺痛苦的，但是幸运的是，你不必在 TypeScript 里这样做了

当 let 声明出现在循环体里时拥有完全不同的行为

- 不仅是在循环里引入了一个新的变量环境，而是针对 **`每次迭代`** 都会创建这样一个新作用域

- 这就是我们在使用立即执行的函数表达式时做的事，所以在 `setTimeout` 例子里我们仅使用 let 声明就可以了

```ts
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}
```

会输出与预料一致的结果：

```
0
1
2
3
4
5
6
7
8
9
```

### const 声明

const 声明是声明变量的另一种方式

```ts
const numLivesForCat = 9;
```

它们与 let 声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变

- 换句话说，它们拥有与 let 相同的作用域规则，但是不能对它们重新赋值

- 这很好理解，它们引用的值是 **`不可变的`**

```ts
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
```

除非你使用特殊的方法去避免，实际上 const 变量的内部状态是可修改的

- 幸运的是，TypeScript 允许你将对象的成员设置成只读的

> [【接口】](https://www.tslang.cn/docs/handbook/interfaces.html)一章有详细说明

### let vs. const

现在我们有两种作用域相似的声明方式，我们自然会问到底应该使用哪个

- 与大多数泛泛的问题一样，答案是：依情况而定

使用[【最小特权原则】](https://en.wikipedia.org/wiki/Principle_of_least_privilege)，所有变量除了你计划去修改的都应该使用 `const`

- 基本原则就是如果一个变量不需要对它写入，那么其它使用这些代码的人也不能够写入它们，并且要思考为什么会需要对这些变量重新赋值

- 使用 `const` 也可以让我们更容易的推测数据的流动

> 跟据你的自己判断，如果合适的话，与团队成员商议一下
> - 这个手册大部分地方都使用了 `let` 声明

### 解构
























































































































































































































































































































































































