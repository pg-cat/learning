# Ant Design 介绍

这门课程主要教的是 `Ant Design` 组件库

* `Ant Design` 就是基于 `React` 实现的一套组件库

## `React` 介绍

`Ant Design` 是基于 `React` 开发的；要使用 `Ant Design`，必须学会 `React`

## `umi` 介绍

`React` 组件使用的是 `JSX` 语法和很多新的 `ES6` 语法，浏览器不支持

* 因此，我们开发了一个工具 `umi`，封装了编译步骤，包括了很多开发时的有用工具

* 只要你写好 `React` 代码，接下来 `umi` 就会把它处理为生产代码

## 本课程采用 `umi` 和 `Ant Design` 配套使用


# 前端开发的演变

本文介绍前端开发的历史和趋势，帮助大家了解 `React` 要解决什么问题

## 静态页面阶段

> 互联网发展的早期，网站的前后端开发是一体的，即前端代码是后端代码的一部分:

1. 后端收到浏览器的请求
2. 生成静态页面
3. 发送到浏览器

> 那时的网站开发，采用的是后端 `MVC` 模式：

* `Model`（模型层）：提供/保存数据
* `Controller`（控制层）：数据处理，实现业务逻辑
* `View`（视图层）：展示数据，提供用户界面

> 前端只是后端 `MVC` 的 `V`

## `AJAX` 阶段

> `2004` 年，`AJAX` 技术诞生，改变了前端开发

> `AJAX` 技术指的是脚本独立向服务器请求数据，拿到数据以后，进行处理并更新网页

> 整个过程中，后端只是负责提供数据，其他事情都由前端处理。前端不再是后端的模板，而是实现了从 获取数据 `=>` 处理数据 `=>` 展示数据 的完整业务逻辑

## 前端 `MVC` 阶段

> 前端代码有了读写数据、处理数据、生成视图等功能，因此迫切需要辅助工具，方便开发者组织代码 —— 这导致了前端 MVC 框架的诞生

* `2010` 年，第一个前端 `MVC` 框架 `Backbone.js` 诞生

* 后来，更多的前端 `MVC` 框架出现。另一些框架提出 `MVVM` 模式，用 `View Model` 代替 `Controller`

  * MVVM 模式也将前端应用分成三个部分:

    * `Model`：读写数据
    * `View`：展示数据
    * `View-Model`：数据处理

  * 这个模型的特点是 `View` 绑定 `View Model`

    * 如果 `View Model` 的数据变了，`View`（视图层）也跟着变了；反之亦然，如果用户在视图层修改了数据，也立刻反映在 `View Model`

## `SPA` 阶段

> 前端可以做到读写数据、切换视图、用户交互，这意味着，网页其实是一个应用程序，而不是信息的纯展示

* 所谓 SPA，就是指在一张网页（`single page`）上，通过良好的体验，模拟出多页面应用程序（`application`）

* 用户的浏览器只需要将网页载入一次，然后所有操作都可以在这张页面上完成，带有迅速的响应和虚拟的页面切换

* 目前，最流行的前端框架 `Vue`、`Angular`、`React` 等等，都属于 `SPA` 开发框架

## `React` 的定位

我们这个 `antd` 教程基于 `React` 框架，所以要介绍一下 `React` 在前端技术里面的定位

* `React` 本身的定位很单纯，它是一个网页组件的解决方案

  * 它只解决怎么把复杂的页面拆分成一个个组件，然后一个个独立的组件又怎么拼装成可以互相协同的网页

  * 组件是中性的，任何一种应用架构都可以采用

  * `React` 可以用于 `MVC` 架构，也可以用于 `MVVM` 架构，或者别的架构

本教程就采用 `Redux` 架构，只是我们把它封装了，让大家可以最简单地开发出一个 `React` 应用，因为 `Redux` 架构涉及的概念较多，需要手写的代码量也比较大，还是较复杂的


# 初始化项目

> 这一节将教会大家如何初始化一个项目，开发出一个可以展示 `hello world` 的项目

* [【这堂课程中的相关代码】](https://github.com/ant-design/react-tutorial)

## 为什么需要脚手架

本课程，我们将会大量编写 `React` 组件（实际上 `antd` 就是 `Ant Design` 的 `React` 组件的实现），这些组件需要通过编译为最终的 `js` 和 `css` ，然后引入到 `HTML` 网页中才能够被浏览器正确地执行

> 由于存在一个编译过程，这就需要基于编译工具搭建一个项目的脚手架，使得我们可以通过工具实现代码的编译

> 通过编译后的代码才是浏览器能够执行的代码，这样我们才能进行项目的开发和最终的部署

## 编译工具

本课程选择使用 `umi` 作为编译工具

* `umi` 有各种类型的脚手架，方便你快速启动项目

## 初始化

### 目录结构

在初始化完成后你将会得到如下的一个目录结构：

```
- antd-course
  - config
    - config.js
  - src
    - page
      - HelloWorld.js
  - package.json
  - .gitignore
  - node_modules
```

* 该目录结构只是作为你后面的一个参考，你不必着急创建，只需要按照下面的步骤一步一步操作就可以创建出这最终的结构

### 开发环境

* 首先，请安装 `NodeJS`

  * 安装完成后，执行下面的命令确认是否安装成功:

    ```
    node -v
    npm -v
    ```

  * 在 `umi` 中我们采用了一些 `NodeJS` 的新特性，请确保你的 `NodeJS` 版本大于等于 `8.5.0`

* 在国内，你可以安装 `cnpm` 获得更快速、更安全的包管理体验，使用如下命令安装：

  * `npm install -g cnpm --registry=https://registry.npm.taobao.org`

  * 然后你可以通过如下的命令确认是否成功：

  ```
  cnpm -v
  ```

### 安装 `umi` 依赖

* 首先，新建一个空的文件夹，用来存放本课程后续所有的代码:

  ```
  mkdir antd-course
  cd antd-course
  ```

* 调用 `cnpm init` 来初始化 `package.json` ，它是 `NodeJS` 约定的用来存放项目的信息和配置等信息的文件:

  ```
  cnpm init -y
  ```

  * 上面命令中，参数 `-y` 表示对 `npm` 要求提供的信息，都自动按下回车键，表示接受默认值

* 接着，安装 `umi` 的依赖:

  ```
  cnpm install umi --save-dev
  ```

  * 安装完成之后你会发现 `package.json` 中多出了一项 `devDependencies` 的配置

    * 这是由于在上面命令中，参数 `--save` 可以让依赖信息保存到 `package.json` 中，这样其它开发者下载代码后就只需要执行 `cnpm install` 后就会自动安装项目依赖的包

  * 另外项目中还多出了一个 `node_modules` 的文件夹，它包含了大量的内容

    * 里面存放的是项目依赖的包，`umi` 的代码也是被下载并安装到其中的

### 第一个页面

在创建第一个页面之前，我们需要先初始化 `umi` 的配置:

> 在 `umi` 中，大量的使用了配置和约定来帮助你快速开发代码

* 首先，我们先来创建配置文件，配置文件被约定为 `config/config.js`

  * 在 `umi` 中，你也可以简单的使用 `.umirc.js` 来作为配置文件

  * 当然它和 `config/config.js` 是二选一的

  * `config/config.js` 中初始化的内容如下：

    ```js
    export default {};
    ```

    * 一开始它只是 `export` 了一个默认的空的对象 `{}` ，并没有什么作用，但是在后面我们会用到

* 其次，我们新建一个 `src` 目录，它用来存放项目的除了配置以及单测以外的主要代码

  * 在 `umi` 中，约定的存放页面代码的文件夹是 `pages` ，是复数，不过如果你喜欢单数的话你配置项中你可以添加 `singular` 为 `true` 来让 `page` 变为约定的文件夹

  * 在本课程中我们使用单数来作为约定目录，所以你需要修改配置文件为：

    ```js
    export default {
    singular: true,
    }
    ```

* 接下来让我们创建第一个页面组件，新建 `src/page/HelloWorld.js` 文件，代码如下：

  ```js
  export default () => {
  return <div>hello world</div>;
  }
  ```

  * 这样第一个页面就创建完成了

* 接下来你就可以通过 `umi` 来启动你的代码了

  * 首先你需要在 `package.json` 中的 `scripts` 里面添加两个命令：

  ```js
  {
    "scripts": {
      "dev": "umi dev",
      "build": "umi build"
    }
  }
  ```

  * 修改 `package.json` 的时候要注意它是一个标准的 `JSON` 格式的文件，如果失败请检查是不是逗号或者引号的问题

  * `scripts` 中定义的命令，可以在项目根目录中通过 `cnpm run [scriptname]` 来运行

  * 接下来请执行：

    ```
    cnpm run dev
    ```

* 复制日志(`Local`)中的地址，比如 `http://localhost:8000/`

  * 在 `umi` 中，你可以使用约定式的路由，在 `page` 下面的 `js` 文件都会按照文件名映射到一个路由，比如上面这个例子，访问 `/helloworld` 会对应到 `HelloWorld.js`

在本课程中为了让开发者更好的理解路由组件嵌套，我们会使用配置式的路由:

* 要使用配置式的路由，你需要在配置文件 `config/config.js` 中添加如下配置：

  ```js
  export default {
    routes: [{
      path: '/',
      component: './HelloWorld'
    }],
  }
  ```

  * 其中 `component` 是一个字符串，它是相对于 `page` 目录的相对路径

  * 在上面的配置中我们将路由的路径配置成为了 `/`，这样你访问 `http://localhost:8000/` 首页就能看到 `hello world` 了

### 添加 umi-plugin-react 插件

> `umi` 是一个可插拔的企业级 `react` 应用框架，它的很多功能都是通过插件实现

* 尤其是 `umi` 官方的 `umi-plugin-react` 这个插件集成了常用的一些进阶的功能，为了后面的课程需要，我们需要添加该插件集到项目中

  * 通过 `cnpm install umi-plugin-react --save-dev` 来安装该插件集

* 然后在配置文件 `config/config.js` 中引入该插件：

  ```js
  export default {
    plugins: [
      ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
      }],
    ],
    routes: [{
      path: '/',
      component: './HelloWorld'
    }],
  }
  ```

### `.gitignore` 忽略文件

文件内容须包括以下：

```
node_modules
dist
.umi
```

## 构建和部署

> 你可以通过 `cnpm run build` 来构建出最终的产物，执行该命令后会生成最终的 `HTML`、`css` 和 `js` 到 `dist` 目录下

* 它们是浏览器可以直接识别并运行的代码，这样你就可以将它们部署到你想要的服务器上了

> 需要注意的是，如果你直接用浏览器打开 `HTML` 那是无法正确展示的，因为直接打开无法识别出 `HTML` 引入的 `js` 和 `css` 的路径

* 你需要确保的的 HTML 在一个 HTTP 的 web 容器中，并保证对应的页面的访问路径正确。比如使用 serve：

  ```
  cnpm install serve -g
  serve ./dist
  ```

## 第一个组件

> 本节就来解释什么是组件，以及怎样写组件；这是 `React` 和 `Ant Design` 的使用基础，只有学会了这些内容，才能理解后面的知识

### 组件是什么

> 按照功能划分，一张网页可以由多个互相独立的功能单位组成，这种功能单位就叫做 组件（`component`）

* 比如，典型的网页分成页头、内容、页尾三个部分，就可以写成三个组件：`Header`、`Content`、`Footer`。这些组件拼装在一起，就构成了一张页面

* 组件内部还可以包含下一级的组件。比如， 文章 组件内部可以包含 表单 组件， 表单 组件内部又可以包含 按钮 组件

* 组件的好处有很多，下面是其中几点:

  * 有利于细化 UI 逻辑，不同的组件负责不同的功能点
  * 有利于代码复用，多个页面可以使用同样的组件
  * 有利于人员分工，不同的工程师负责不同的组件

* `React` 的核心概念就是组件：这个框架的主要功能，就是定义了一套编写和使用组件的规范

### `JSX` 语法

> `JSX` 可以被 `Babel` 转码器转为正常的 `JavaScript` 语法

```js
export default () => {
  return <div>hello world</div>;
}
```

上面的 JSX 语法转码后的结果如下：

```js
exports.default = function () {
  return React.createElement(
    "div",
    null,
    "hello world"
  );
};
```

* 两种写法一比较，就会发现对于复杂的 `UI` 组件来说，`JSX` 更易写也更易读

* `JSX` 语法的特点就是，凡是使用 `JavaScript` 的值的地方，都可以插入这种类似 `HTML` 的语法，但也有注意事项：

  * 所有 `HTML` 标签必须是闭合的，如果写成 `<h1>Hello` 就会报错

    * 如果是那种没有闭合语法的标签，必须在标签尾部加上斜杠，比如`<img src="" />`

  * 任何 `JSX` 表达式，顶层只能有一个标签，也就是说只能有一个根元素，下面的写法会报错:

    ```js
    // 报错
    const element = <h1>hello</h1><h1>world</h1>;

    // 不报错
    const element = <div><h1>hello</h1><h1>world</h1></div>;
    ```

    * 上面代码中，第一种写法会报错，因为根元素的位置有两个并列的 `<h1>` 标签，解决方法是：在它们外面再包一层，就不会报错了

* 一般来说，`HTML` 原生标签都使用小写，开发者自定义的组件标签首字母大写，比如 `<MyComponent/>`

* `JSX` 语法允许 `HTML` 与 `js` 代码混写:

  ```js
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  ```

  * 上面代码中，`<h1>` 标签的文字内容部分嵌入了 `js` 代码

  * 每次生成的文本，取决于函数 `formatName(user)` 执行的结果

* `JSX` 语法的值的部分，只要使用了大括号 `{}` ，就表示进入 `js` 的上下文，可以写入 `js` 代码

### `React` 组件语法

> 虽然输出 `JSX` 代码的函数就是一个 `React` 组件，但是这种写法只适合那些最简单的组件；更正式、更通用的组件写法，要使用 `ES6` 类（`class`）的语法

```js
import React from 'React';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
```

* 上面代码定义了一个 `ShoppingList` 组件

  * 自定义的组件必须继承 `React.Component` 这个基类，然后必须有一个 `render` 方法，给出组件的输出

* 使用 `React` 组件也很简单，引入这个组件以后，就可以直接使用

  * 假定上面的组件脚本叫做 `shoppinglist.js` ，那么使用它的代码如下:

  ```js
  import React from 'React';
  import ShoppingList from './shoppinglist.js';

  class Content extends React.Component {
    render() {
      return (
      <ShoppingList name="张三" />
      );
    }
  }

  export default Content;
  ```

  * 上面代码中，我们新建了一个 `Content` 组件，里面使用了 `ShoppingList` 组件

  * 注意，由于这个组件除了 `name` 参数，没有其他内容，所以可以写成 `<ShoppingList name="张三"/>` 这种直接闭合的形式

  * 否则，可以写成下面的形式:

    ```js
    class Content extends React.Component {
      render() {
        return (
        <ShoppingList name="张三">
          {/* 插入的其他内容 */}
        </ShoppingList>
        );
      }
    }
    ```

### 组件的参数

> 上一节的 `<ShoppingList name="张三"/>` 这行代码， `ShoppingList` 是组件名， `name="张三"` 表示这个组件的有一个 `name` 参数，值为 `张三`

* 组件内部，所有参数都放在 `this.props` 属性上面，通过 `this.props.name` 就可以拿到传入的值 `张三`

  ```js
  <h1>Shopping List for {this.props.name}</h1>
  ```

  * 通过这种参数机制，`React` 组件可以接受外部消息

* `this.props` 对象有一个非常特殊的参数 `this.props.children` ，表示当前组件“包裹”的所有内容

  * 比如，上面代码里面的 `Shopping List for {this.props.name}` ，就是 `<h1>` 元素的 `this.props.children`

  * 这个属性在 `React` 里面有很大的作用，它意味着组件内部可以拿到，用户在组件里面放置的内容

> 下面是一个组件，内部使用 `props.children` ，获取用户传入的内容:

```js
const Picture = (props) => {
  return (
    <div>
      <img src={props.src} />
      {props.children}
    </div>
  )
}
```

* 下面就是使用时，怎么向 `props.children` 传入内容:

```js
render () {
  const picture = {
    src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
  };
  return (
    <div className='container'>
      <Picture src={picture.src}>
        // 这里放置的内容就是 props.children
      </Picture>
    </div>
  )
}
```

### 组件的状态

> 除了接受外部参数，组件内部也有不同的状态

> `React` 规定，组件的内部状态记录在 `this.state` 这个对象上面

```js
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({value: 'X'})}
            >
                {this.state.value}
            </button>
        );
    }
}
```

* 上面代码中，组件 `Square` 的构造方法 `constructor` 里面定义了当前状态 `this.state` 对象

* `Square` 组件的这个对象只有一个 `value` 属性，一开始的值是 `null`

* 用户点击按钮以后， `onClick` 监听函数执行 `this.setState()` 方法

  * `React` 使用这个方法，更新 `this.state` 对象

  * 这个方法有一个特点，就是每次执行以后，它会自动调用 `render` 方法，导致 `UI` 更新

  * `UI` 里面使用 `this.state.value` ，输出状态值，随着用户点击按钮，页面就会显示 `X`

### 生命周期方法

> 组件的运行过程中，存在不同的阶段，`React` 为这些阶段提供了钩子方法，允许开发者自定义每个阶段自动执行的函数，这些方法统称为生命周期方法 `lifecycle methods`

```js
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
```

> 上面代码中就是三个最常用的生命周期方法:

* `componentDidMount()`

  * 会在组件挂载后自动调用

* `componentWillUnmount()`

  * 会在组件卸载前自动调用

* `componentDidUpdate()`

  * 在 `UI` 每次更新后调用（即组件挂载成功以后，每次调用 `render` 方法，都会触发这个方法）

> 还有三个生命周期方法，不是经常使用:

* `shouldComponentUpdate(nextProps, nextState)`

  * 每当 `this.props` 或 `this.state` 有变化，在 `render` 方法执行之前，就会调用这个方法

  * 该方法返回一个布尔值，表示是否应该继续执行 `render` 方法，即如果返回 `false` ，`UI` 就不会更新，默认返回 `true`

  * 组件挂载时，`render` 方法的第一次执行，不会调用这个方法

* `static getDerivedStateFromProps(props, state)`

  * 该方法在 `render` 方法执行之前调用，包括组件的第一次记载

  * 它应该返回一个新的 `state` 对象，通常用在组件状态依赖外部输入的参数的情况

* `getSnapshotBeforeUpdate()`

  * 该方法在每次 `DOM` 更新之前调用，用来收集 `DOM` 信息

  * 它返回的值，将作为参数传入 `componentDidUpdate()` 方法

## 使用 `Ant Design` 组件

这一节，我们就来教大家如何使用 `Ant Design` 组件库，完成一个卡片组件 `card`

### 引入 antd

> `Ant Design` 是一个服务于企业级产品的设计体系，组件库是它的 `React` 实现，`antd` 被发布为一个 `npm` 包方便开发者安装并使用

* 在 `umi` 中，你可以通过在插件集 `umi-plugin-react` 中配置 `antd` 打开 `antd` 插件，`antd` 插件会帮你引入 `antd` 并实现按需编译:

  ```js
  export default {
    plugins: [
      ['umi-plugin-react', {
        antd: true
      }],
    ],
    // ...
  }
  ```

* 如果使用我们的脚手架，`Ant Design` 已经自带了，否则你需要自己安装

  ```js
  # 脚手架所在的目录
  $ cnpm install --save antd
  ```

### 使用 `antd`

* 开始为主页面引入 Ant Design 组件:

  ```js
  import { Card } from 'antd';
  ```

* 修改主页面：

  ```js
  export default () => {
    const style = {
      width: '400px',
      margin: '30px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      border: '1px solid #e8e8e8',
    };

    return (
      <Card style={style} actions={[
        <a>操作一</a>,
        <a>操作二</a>]}>
      </Card>
    );
  }
  ```

  * 上面代码中，我们引入了 `Card` 组件，并且定制了它的样式和下面的两个按钮

* 下一步，在 `<Card>` 组件内部写入一个子组件 `<Card.Meta>`

  ```js
  import { Card } from 'antd';

  export default () => {
    const style = {
      width: '400px',
      margin: '30px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      border: '1px solid #e8e8e8',
    };

    return (
      <Card style={style} actions={[
        <a>操作一</a>,
        <a>操作二</a>
      ]}>
        <Card.Meta
          avatar={<img
            alt=""
            style={{ width: '64px', height: '64px', borderRadius: '32px' }}
            src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
          />}
          title="Alipay"
          description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
        />
      </Card>
    );
  }
  ```

  * 这是由 `antd` 提供的，具体的 `API` 可以查看 [官方文档](https://ant.design/components/card/)

* 它在页面上就会呈现出下面图片的效果:

  ![图片](https://cdn.yuque.com/lark/0/2018/png/46271/1527835217091-31d87a82-248b-4878-8896-b6bb1303ec2c.png)

## 受控组件与非受控组件

### 非受控组件

* 首先看一个简单的例子，现在有一个输入组件:

  ```js
  const MyInput = ({ onChange }) => (
    <input onChange={onChange} />
  );
  ```

  * 上面这个组件会显示一个输入框，每次有用户输入，就会调用传入的参数 `onChange`

* 然后，将这个组件放入另一个组件:

  ```js
  class Demo extends React.Component {
    onTextChange = (event) => {
      console.log(event.target.value);
    }

    render() {
      return (
        <MyInput onChange={this.onTextChange} />
      );
    }
  }
  ```

  * 上面代码中，我们将 `MyInput` 组件与一个监听函数 `onTextChange` 封装在一起

* 现在，需要一个重置按钮，点击后可以清空 `MyInput` 的内容，那么可以像下面这样调整

  ```js
  <div>
    <MyInput onChange={this.onChange} />
    <button onClick={this.onTextReset}>Reset</button>
  </div>
  ```

  ```js
  onTextReset = () => {
    // 我该怎么做？
    // 拿到 MyInput 内部的 input 元素然后设置 value 为 ''？
  }
  ```

  * 看起来，修改 `MyInput` 中的值不太容易

* 对于这种不能直接控制状态的组件，我们称之为 `非受控组件`

### 受控组件

* 接着，我们做一些调整，将其改造成受控组件:

  ```js
  const MyInput = ({ value = '', onChange }) => (
    <input value={value} onChange={onChange} />
  );
  ```

  * 这时，`MyInput` 的输入完全由 `value` 属性来决定

  * 你会发现，新的代码你无法在输入框输入任何东西（因为 `value` 总是 `''`）

* 我们改造一下 Demo，让它可以重新工作：

  ```js
  class Demo extends React.Component {
    state = {
      text: '',
    }

    onTextChange = (event) => {
      this.setState({ text: event.target.value });
    }

    render() {
      return (
        <MyInput value={this.state.text} onChange={this.onTextChange} />
      );
    }
  }
  ```

* 好了，重置变得轻而易举：

  ```js
  onTextReset = () => {
    this.setState({ text: '' });
  }
  ```
* 最终的 `MyInputs` `onTextChange` 这两个组件的内容：

  ```js
  const MyInputs = ({ style, value='', onChange }) => (
    <input style={style} value={value} onChange={onChange} />
  )

  export { MyInputs };
  ```

  ```js
  import React from 'react';

  import { MyInputs } from './zujianx/MyInput.js';

  class Demo extends React.Component {
    constructor(props){
      super(props);
      this.state={
        text: null
      }
    }

    onTextChange = (event) => {
      this.setState({ text: event.target.value });
    }

    onTextReset = () => {
      this.setState({ text: '' });
    }

    render() {
      const style1={
        marginRight:'10px',
        color: 'red'
      }
      const style2={
        marginLeft:'10px'
      }
      return (
        <div>
          <MyInputs
            style={style1}
            value={this.state.text}
            onChange={this.onTextChange}
          ></MyInputs>
          <button
            onClick={this.onTextReset}
            style={style2}
          >
            Reset
          </button>
        </div>
      )
    }
  }

  export default Demo;
  ```

* `受控` 与 `非受控` 两个概念，区别在于这个组件的状态是否可以被外部修改

> 一个设计得当的组件应该同时支持 `受控` 与 `非受控` 两种形式，即当开发者不控制组件属性时，组件自己管理状态，而当开发者控制组件属性时，组件该由属性控制

* 而开发一个复杂组件更需要注意这点，以避免只有部分属性受控，使其变成一个半受控组件

### `tabs` 组件

> 一个典型的组件例子，可以参考 `antd` 中的 `tabs` 组件：

```js
<Tabs>
  <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
  <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
</Tabs>
```

* 大部分情况下，开发者都不用考虑如何控制 `tabs` 停留在哪个标签页，用户在需要时自行点击即可；这种情况下，`tabs` 会作为 `非受控组件` 来运行

> 而当传递 `activeKey` 属性时，`tabs` 组件会转变为 `受控组件` ；标签切换需要通过代码来进行控制：

```js
<Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
  <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
  <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
</Tabs>
```

```js
state = {
  activeKey: '1',
}

onTabChange = (activeKey) => {
  this.setState({ activeKey });
}
```

### `tree` 组件

> 通过控制组件的状态，我们可以实现一些原本组件设计并没有实现的功能

* 在 `tree` 组件中。我们通过点击节点左边的小三角进行展开/关闭，点击文字部分是选中该节点：

```js
<Tree>
  <TreeNode title="parent 1" key="0-0">
    <TreeNode title="leaf" key="0-0-0" />
    <TreeNode title="leaf" key="0-0-1" />
  </TreeNode>
</Tree>
```

> 如果我们现在想要改成点击文字部分，同样是展开/关闭节点，应该怎么做呢？

* 首先，我们查询一下[【文档】](https://ant.design/components/tree-cn/#API)，找出与此次需求相关的属性有哪些:

  * `expandedKeys`: 设置展开的节点
  * `selectedKeys`: 设置被选中的节点
  * `onExpand`: 节点被展开/关闭时触发
  * `onSelect`: 节点被选中时触发

* 这很容易就联想到如何进行调整：节点被选中时，将原本修改 `selectedKeys` 改成更新 `expandedKeys` ；转换成对应的代码：

```js
<Tree
  expandedKeys={this.state.expandedKeys}
  selectedKeys={[]}
  onExpand={this.onExpand}
  onSelect={this.onSelect}
>
  <TreeNode title="parent 1" key="0-0">
    <TreeNode title="leaf" key="0-0-0" />
    <TreeNode title="leaf" key="0-0-1" />
  </TreeNode>
</Tree>
```

```js
state = {
  expandedKeys: [],
}

// 接收原本的展开事件，在 state 中记录 expandedKeys
onExpand = (expandedKeys) => {
  this.setState({ expandedKeys });
}

// 接收选中事件，修改 expandedKeys
onSelect = (selectedKeys) => {
  const { expandedKeys } = this.state;
  const key = selectedKeys[0];

  if (expandedKeys.includes(key)) {
    // 移除 key
    this.setState({
      expandedKeys: expandedKeys.filter(k => k !== key),
    });
  } else {
    // 添加 key
    this.setState({ expandedKeys: [...expandedKeys, key] });
  }
}
```


# 基本布局

> 本章节源码和主教程代码库是分开的，感兴趣的同学可以通过[【下载本章节源码进行参考】](https://www.yuque.com/attachments/yuque/0/2018/zip/85418/1537088480770-088c8ed7-dd70-4b09-9f6b-14f0fbb1135a.zip)

## 什么是布局?

> 如下图就是常见的一些网页布局方式:

![图片](https://cdn.yuque.com/lark/0/2018/png/5482/1529460619093-61787789-c923-420c-b8e2-158f7d1c79d9.png)

## `Props.children` 和容器类组件

> 本节参考 `React.js` 小书 [【 `Props.children` 和容器类组件】](http://huziketang.mangojuice.top/books/react/lesson22) 部分

> 要知道怎么用 `React` 实现布局首先要了解容器类组件和 `{props.children}` 的用法

> 有一类组件，充当了容器的作用，它定义了外层的结构形式，然后可以往里面放任意的内容，这是一种很常见的结构，比如一个 `Card` 组件，组件本身是个不带任何内容的方形容器，我们可以在用这个组件的时候给它传入任意内容

* 我们很容易可以实现这种容器组件:

  ```js
  class Card extends Component {
    render () {
      return (
        <div className='card'>
          <div className='card-content'>
            {this.props.content}
          </div>
        </div>
      )
    }
  }

  // 比如渲染包含 “Ant Design 实战教程” 字样的div
  ReactDOM.render(
    <Card content={
      <div>
        Ant Design 实战教程
      </div>
    } />,
    document.getElementById('root')
  )
  ```

  * 我们通过给 `Card` 组件传入 `content` 属性，这个属性可以传入任意的 `jsx` 结构，然后在 `Card` 内部会通过 `{this.props.content}` 把内容渲染到页面上

  * 但这样用并不优雅，如果 `Card` 还有其他属性的话，这些 `jsx` 就会和其他属性混起来，很不好维护

  * 如果组件标签也能像普通的 HTML 标签那样编写内嵌的结构，那么就方便很多了，比如:

    ```js
    ReactDOM.render(
      <Card>
        <div>
          Ant Design 实战教程
        </div>
      </Card>,
      document.getElementById('root')
    )
    ```

* 所有嵌套在组件中的 `jsx` 结构都可以在组件内部通过 `props.children` 获取到

  ```js
  class Card extends Component {
    render () {
      return (
        <div className='card'>
          <div className='card-content'>
            {this.props.children}
          </div>
        </div>
      )
    }
  }
  ```

  * `React.js` 就是把我们嵌套的 `jsx` 元素一个个都放到数组当中，然后通过 `{props.children}` 传给了 `Card` ，然后 `jsx` 会把数组中的 `jsx` 一个个进行展示

* 可以在组件内部把数组中的 `jsx` 元素安置在不同的地方：

  ```js
  class Layout extends Component {
    render () {
      return (
        <div className='two-cols-layout'>
          <div className='sidebar'>
            {this.props.children[0]}
          </div>
          <div className='main'>
            {this.props.children[1]}
          </div>
        </div>
      )
    }
  }
  ```

  * 这是一个两列布局组件，嵌套的 `JSX` 的第一个结构会成为侧边栏，第二个结构会成为内容栏，其余的结构都会被忽略

### 使用 `Ant Design` 实现基本布局

> `Ant Design` 提供了多种布局方式，比如一种典型布局方式，它可以分为三个信息块：

* 顶部导航 `Header`
* 侧边栏 `Sider`
* 内容区 `Content`

![图片](https://cdn.yuque.com/lark/0/2018/png/5482/1528960660672-51b82032-c4b3-49f0-bf7e-c479dd9b7115.png)

#### 第一步：添加基本布局

在 `src` 目录下创建 `layout` 文件目录，然后创建 `index.js` 文件，在 `index.js` 中我们写入:

```js
import { Component } from 'react';
import { Layout } from 'antd';

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
```

* 上面代码中，我们创建了一个三部分的基本布局：`Header` 、`Content` 、`Footer`

* 我们将 `Content` 替换成 `{ this.props.children }` ，这样之后我们设置的路由会通过替换 `children` 变量实现内容的切换:

  ```js
  <Content>{ this.props.children }</Content>
  ```

#### 第二步：添加样式

上面我们定义了导航的结构，下面我们添加一些样式，让这个布局看上去更美观一些:

```js
import { Component } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default class BasicLayout extends Component {
  render() {
    return (
        <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
          Sider
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
```

#### 第三步：配置路由

定义好容器组件之后，我们就可以通过路由配置的方式把路由对应的组件渲染到容器组件中去了

这里我们直接在 config.js 添加路由配置:

```js
routes: [{
  path: '/',
  component: '../layout',
  routes: [{
    path: 'helloworld',
    component: './HelloWorld'
  }]
}],
```

这样访问 `localhost:xxxx` (注意替换成你命令行中的端口)的展示效果如下：

![图片](https://cdn.nlark.com/yuque/0/2018/png/85418/1537083465383-97378853-597a-41b4-99e2-45ab5ceb8c05.png)

## 什么是导航

> 导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转

> 一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构

### 如何实现侧边导航

> 导航是由多个组件，如 `Sider` 侧边栏组件，`Logo` 网站标志组件，`SubMenu` 子菜单，`MenuItem` 菜单选项等组合而成

![图片](https://cdn.yuque.com/lark/0/2018/png/5482/1528962997476-7fb7802a-1df9-4df8-8ae7-ee29269d94df.png)

* 在 `Sider` 组件中添加 Menu 菜单项，一个普通的导航菜单完整代码如下：

```js
// 注意这里我们除了从antd中引入了Layout布局组件，还引入了Menu菜单组件，Icon图标组件

import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Helloworld</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
               <Menu.Item key="2">分析页</Menu.Item>
               <Menu.Item key="3">监控页</Menu.Item>
               <Menu.Item key="4">工作台</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
```

* 上面代码中:

  * `Menu` 是 `Sider` 的子组件
  * `SubMenu` 是 `Menu` 的子组件
  * `Menu.Item` 是最小的导航选项

* 效果图如下：

![图片](https://cdn.nlark.com/yuque/0/2018/png/85418/1537084408320-30a1ea5f-4149-464c-83ce-2490f8e49159.png)

## 路由配置

### 什么是路由

> 在点击导航选项的时候，让对应内容填充的到页面，实现这种效果的方式就是路由 —— 简单来说，路由就是用来跟后端服务器进行交互的一种方式，通过不同的路径来请求不同的资源

* 在 `umi` 中，应用都是单页应用，页面地址的跳转都是在浏览器端实现的，不会去重新请求服务端获取 `html`

* `html` 只是在应用初始化的时候加载一次

* 所有的页面都是由不同的组件构成，页面的切换其实就是不同组件的切换，你只需要在配置中把不同的路由路径和对应的组件关联上即可

* 单页应用的功能示意图如下:

![图片](https://cdn.yuque.com/lark/0/2018/png/5482/1525691154758-08922bea-f29c-4d34-bade-e47fc0cce089.png)

### 路由配置方法

在 `umi` 应用中，路由的配置是在 `/config/config.js` 中 `exports.routes` 中配置

#### 基本

`exports.routes` 需要是一个数组，数组中的每一个对象是一个路由信息，比如：

```js
exports.routes = [
  {
    path: '/',
    component: 'App'
  },
  {
    path: '/user',
    component: 'User'
  }
];
```

* 其中:

  * `path` 表示页面访问路径

  * `component` 表示 `page` 下的文件名，比如 `App` , `User` 分别表示 `page/App` ，`page/User`

    * 这样，访问 `http://localhost:7001/` 和 `http://localhost:7001/user` 则会有展示 `App` , `User` 中的内容

#### `routes`

当需要有一个 `layout` 作为展示，可以设置 `routes` ：

```js
exports.routes = [
  {
    path: '/',
    component: 'App',
    routes: [{
      path: 'list',
      component: 'List'
    },
    {
      path: 'admin',
      component: 'Admin'
    }]
  },
  {
    path: '/user',
    component: 'User'
  }
];
```

在 `page/App` 中：

```js
export default (props) => <div style={{padding: 20}}>
    {this.props.children}
</div>
```

这样访问 `/list` 跟 `/admin` 将会都有这个 `layout`

### 实战配置

* 第一步：创建页面组件

  * 根据侧边导航样式，我们在 `Dashboard` 这个目录层级下有三个页面组件需要创建

  * 在 `src/page` 文件夹下创建 `Dashboard` 文件夹，同时在该文件夹中新建 `Analysis.js` , `Monitor.js` , `Workplace.js` 三个文件，目录结构如下:

  ```
  .
  ├── Dashboard
  │   ├── Analysis.js
  │   ├── Monitor.js
  │   └── Workplace.js
  ...// 省略其他章节中的目录
  ```

  * 三个文件中，我们分别添加简单的函数组件:

  ```js
  // Analysis.js
  export default () => {
    return <h1>Analysis Page</h1>
  };
  ```

  ```js
  // Monitor.js
  export default () => {
    return <h1>Monitor Page</h1>
  };
  ```

  ```js
  // Workplace.js
  export default () => {
    return <h1>Workplace Page</h1>
  };
  ```

* 第二步：配置应用路由

  * 在 `config.js` 中我们添加本章的三个路由:

  ```js
  export default {
    routes: [{
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: 'Helloworld'
        },
        {
          path: '/helloworld',
          component: 'Helloworld'
        },
        {
          path: '/dashboard',
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
          ]
        }
      ]
    }]
  }
  ```

  * 这段配置的意思是指:

    * 访问 / 下面的路由的时，使用 page 文件夹下的 `../layout` 布局文件渲染页面，默认展示 `Helloworld` 组件

    * 访问 `/dashboard/analysis` 时，使用 `page` 文件夹下的 `Dashboard/Analysis` 组件渲染到 `layout` 文件中 `children` 部分

    * 访问 `/dashboard/monitor` 时，使用 `page` 文件夹下的 `Dashboard/Monitor` 组件渲染到 `layout` 文件中 `children` 部分

    * 访问 `/dashboard/workplace` 时，使用 `page` 文件夹下的 `Dashboard/Workplace` 组件渲染到 `layout` 文件中 `children` 部分

* 第三步：配置侧边栏导航

> 路由已经和相应的页面组件关联起来了，现在我们只需要配置导航，使得能在点击导航时，触发 URL 刷新，路由根据配置返回和当前 `URL` 匹配的内容

我们用 `Link` 组件（相当于 `<a>` ) 实现路由的跳转:

```js
import Link from 'umi/link';

...

<Sider width={256} style={{ minHeight: '100vh' }}>
  <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    <Menu.Item key="1">
      <Link to="/helloworld">
        <Icon type="pie-chart" />
        <span>Helloworld</span>
      </Link>
    </Menu.Item>
    <SubMenu
      key="sub1"
      title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
    >
        <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
    </SubMenu>
  </Menu>
</Sider>
```

> 实际上还有很多的细节没有实现，比如当页面的 `url` 改变后导航要能够根据 `url` 路径的不同展开对应的导航菜单等，为了避免大家陷入到细节中，这里不做具体探讨，感兴趣的同学可以参考 [【`Ant Design Pro`】](https://github.com/ant-design/ant-design-pro/) 的代码进行深入阅读


# 卡片列表页 的构想

[【完整的 demo 代码请点击访问】](https://github.com/ant-design/react-tutorial)

预览图：

![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533218381481-8ff07ef9-4fc7-4a15-a51a-5264e6f83764.png)

## 使用 `model`

### 软件分层

我们需要简单了解一下软件架构的「分层」理念:

> 一个完整的软件，往往会被拆分成多个不同的层次，每一个层次聚焦于完成特定的功能

![图片](https://gw.alipayobjects.com/zos/rmsportal/trbRYJugHYeODogmIgwi.png)

* 上图中，左侧是服务端代码的层次结构，由 `Controller` 、`Service` 、`Data Access` 三层组成服务端系统：

  * `Controller` 层负责与用户直接打交道，渲染页面、提供接口等，侧重于 `展示型逻辑`

  * `Service` 层负责处理业务逻辑，供 `Controller` 层调用

  * `Data Access` 层顾名思义，负责与数据源对接，进行纯粹的数据读写，供 `Service` 层调用

* 上图的右侧是前端代码的结构，同样需要进行必要的分层：

  * `Page` 负责与用户直接打交道：渲染页面、接受用户的操作输入，侧重于 `展示型交互性逻辑`

  * `Model` 负责处理业务逻辑，为 `Page` 做数据、状态的读写、变换、暂存等

  * `Service` 负责与 `HTTP` 接口对接，进行纯粹的数据读写

### 引入 `DVA`

在 `umi` 中，你可以通过在插件集 `umi-plugin-react` 中配置 `dva` 打开 `dva` 插件

```js
export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true
    }],
  ],
  // ...
}
```

* `Model` 是前端分层中的腰部力量，承上启下，负责管理数据（状态）

* 业界主流的状态管理类库有 `redux` 、`mobx` 等

  * 在我们的教程中，则使用 `DVA` 框架承担这一角色

  * `DVA` 是基于 `redux` 、`redux-saga` 和 `react-router` 的轻量级前端框架及最佳实践沉淀

    * `model` 是 `DVA` 中最重要的概念，一个简单的 `model` 示例如下：

    ```js
    app.model({

      namespace: 'todoList',

      state: [],

      effects: {
        *query({ _ }, { put, call }) {
          const rsp = yield call(queryTodoListFromServer);
          const todoList = rsp.data;
          yield put({ type: 'save', payload: todoList });
        },
      },

      reducers: {
        save(state, { payload: todoList }) {
          return [...state, todoList];
        },
      },

    });
    ```

> `DVA` 的 `model` 对象有几个基本的属性，需要大家了解:

* `namespace`：指 `model` 的命名空间，只能用字符串

  * 一个大型应用可能包含多个 `model` ，通过 `namespace` 区分

* `state` ：当前 `model` 状态的初始值，表示当前状态

* `reducers` ：用于处理同步操作，可以修改 `state` ，由 `action` 触发

  * `reducer` 是一个纯函数，它接受当前的 `state` 及一个 `action` 对象

  * `action` 对象里面可以包含数据体（ `payload` ）作为入参，需要返回一个新的 `state`

* `effects` ：用于处理异步操作（例如：与服务端交互）和业务逻辑，也是由 `action` 触发

  * 它不可以修改 `state` ，要通过触发 `action` 调用 `reducer` 实现对 `state` 的间接操作

* `action` ：是 `reducers` 及 `effects` 的触发器，一般是一个对象，形如 `{ type: 'add', payload: todo }` ，通过 `type` 属性可以匹配到具体某个 `reducer` 或者 `effect` ，`payload` 属性则是数据体，用于传送给 `reducer` 或 `effect`

`DVA` 的文档非常优秀，建议大家直接学习，参考链接：

* [【`Dva` 概念】](https://dvajs.com/guide/concepts.html)

* [【`Dva` 图解】](https://dvajs.com/guide/fig-show.html)

## 搭建基于 `model` 的卡片列表页面

本章节中我们的目标是：创建一个卡片列表页，同时包含一个按钮可以添加新卡片[【完整的 demo 代码】](https://github.com/ant-design/react-tutorial)

### 最简单的卡片列表页

> 我们先显示一个最简单的卡片列表页，只有卡片，不做添加操作

`src/page` 目录下建立页面文件 `puzzlecards.js` ，并把它加入到路由:

* 首先，建立页面文件

  ```js
  import React, { Component } from 'react';
  import { Card } from 'antd';

  export default class PuzzleCardsPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        cardList: [
          {
            id: 1,
            setup: 'Did you hear about the two silk worms in a race?',
            punchline: 'It ended in a tie',
          },
          {
            id: 2,
            setup: 'What happens to a frog\'s car when it breaks down?',
            punchline: 'It gets toad away',
          }
        ]
      }
    }
    render() {
      return (
        <div>
          {
            this.state.cardList.map(card => {
              return (
                <Card key={card.id}>
                  <div>Q: {card.setup}</div>
                  <div>
                    <strong>A: {card.punchline}</strong>
                  </div>
                </Card>
              );
            })
          }
        </div>
      )
    }
  }
  ```

* 其次，配置文件 `config/config.js` 内增加一条路由规则

  ```js
  export default {


    routes: [
      {
        path: '/',
        component: '../layout',
        routes: [
          {
            path: 'puzzlecards',
            component: './puzzlecards'
          }
        ]
      }
    ]


  };
  ```

* 启动应用，看到如下页面：

![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533188095619-1cc50bcd-f19f-4464-b068-2d5d970b8164.png)

### `添加卡片` 按钮

我们添加一个按钮，并在上面绑定一个处理点击事件的回调函数

* 思路是在回调函数中向 `cardList` 中添加一个新卡片数据

* 最终我们的页面文件变成如下样子：

  ```js
  import React, { Component } from 'react';
  import { Card, Button } from 'antd';

  export default class PuzzleCardsPage extends Component {
    constructor(props) {
      super(props);
      this.counter = 100;
      this.state = {
        cardList: [
          {
            id: 1,
            setup: 'Did you hear about the two silk worms in a race?',
            punchline: 'It ended in a tie',
          },
          {
            id: 2,
            setup: 'What happens to a frog\'s car when it breaks down?',
            punchline: 'It gets toad away',
          }
        ]
      }
    }

    addNewCard = () => {
      this.setState(prevState => {
        const prevCardList = prevState.cardList;
        this.counter += 1;
        const card = {
          id: this.counter,
          setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        };
        return {
          cardList: prevCardList.concat(card),
        };
      });
    }

    render() {
      return (
        <div>
          {
            this.state.cardList.map(card => {
              return (
                <Card key={card.id}>
                  <div>Q: {card.setup}</div>
                  <div>
                    <strong>A: {card.punchline}</strong>
                  </div>
                </Card>
              );
            })
          }
          <div>
            <Button onClick={this.addNewCard}> 添加卡片 </Button>
          </div>
        </div>
      );
    }
  }
  ```

  * 虽然每次添加的卡片内容都相同，但是不要紧，这里只是演示用法，但是注意唯独 `id` 不能相同

  * 为了产生唯一的 `id` ，我们在组件中新加了一个 `counter` 成员，它只是为了产生唯一 `id` ，并不是真的为了计数，所以初始值不重要（我们这里给了 `100` ）

* 新的页面如下：

![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533190234525-789d67b9-296f-4682-bfa1-4be9e1058a49.png)

> 到这里我们其实已经完成了想要的页面，也并没有用 `dva` ，那 `dva` 到底有什么用？

这里陈述几个需求：

* 在实际的前端开发中，像 `cardList` 中包含的那些数据，一般都是通过发起异步 `http` 请求从后端服务中获得

* 我们希望把数据逻辑（ `cardList` 相关逻辑）和视图逻辑（ `PuzzleCardsPage` ）分开管理在不同的模块中，`「关注分离」` 使得代码更加健壮，同时易于调试

* 我们希望这些数据在需要的时候，可以提供给不同的组件使用：也即数据共享

而 `dva` 就是用来满足这些需求的：

* 通过把状态上提到 `dva model` 中，我们把数据逻辑从页面中抽离出来

* 通过 `effect` 优雅地处理数据生成过程中的副作用，副作用中最常见的就是异步逻辑

* `dva model` 中的数据可以注入给任意组件

* 另外，`dva` 允许把数据逻辑再拆分（「页面」常常就是分隔的标志），以 `namespace` 区分

  * 当你觉得有必要时，不同的 `namespace` 之间的 `state` 是可以互相访问的

> 如果你熟悉 `React` 中最基本的两个概念 `props` 和 `state` ，一定知道 `props` 和 `state` 对于一个组件来讲都是数据的来源，而 `state` 又可以通过 `props` 传递给子组件，这像是一个鸡生蛋蛋生鸡的问题：到底谁是数据的源头？

* 答案是 `state` ，而且是广义的 `state` ：

  * 它可以是 `react` 组件树中各级组件的 `state`

  * 也可以是 `react` 组件树外部由其他 `js` 数据结构表示的 `state`

  * 而 `dva` 管理的就是 `react` 组件树之外的 `state: Redux`

* 归根结底，`props` 是用来传导数据的，而 `state` 是数据改变的源泉

### 基于 `dva` 的简单卡片列表页

> 使用 `connect` 对接静态的 `dva model`

如果你已经对 React 开发比较熟悉，就会知道子组件的 `state` 可以上提 ( `state hoisting` )，由父组件来管理：

* 子组件间接回调到父组件的 `setState` 的方法来改变父组件的 `state`

* 新的 `state` 通过 `props` 的形式将再次被子组件获悉

而 `dva` 可以帮助我们把 `state` 上提到 所有 `React` 组件之上，过程是相似的：

* 页面通过调用 `dispatch` 函数来驱动 `dva model state` 的改变

* 改变后的 `dva model state` 通过 `connect` 方法注入页面

  * 所谓 `「注入」` 从本质上是 `控制反转` 的一种实现，这种思想在许多的语言框架中都有体现，最著名的莫过于基于 `Java` 语言的 `Spring`

  * 组件不再负责管理数据，组件只是通过 `connect` 向 `dva` 声明所需数据

> 本节中我们只做状态上提，我们只需要定义一个基本的 `dva model` 和使用 `connect`

* 首先，我们在 `src/model` 目录下创建一个 `dva model` 文件：`puzzlecards.js`

  ```js
  export default {
    namespace: 'puzzlecards',
    state: [
      { id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: 'It gets toad away',
      },
    ],
  };
  ```

* 其次，修改之前的页面文件：

  ```js
  import React, { Component } from 'react';
  import { Card /* ,Button */ } from 'antd';
  import { connect } from 'dva';

  const namespace = 'puzzlecards';

  const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return {
      cardList,
    };
  };

  @connect(mapStateToProps)
  export default class PuzzleCardsPage extends Component {
    render() {
      return (
        <div>
          {
            this.props.cardList.map(card => {
              return (
                <Card key={card.id}>
                  <div>Q: {card.setup}</div>
                  <div>
                    <strong>A: {card.punchline}</strong>
                  </div>
                </Card>
              );
            })
          }
          {/* <div>
            <Button onClick={this.addNewCard}> 添加卡片 </Button>
          </div> */}
        </div>
      );
    }
  }
  ```

  * 首先，注意 `dva model` 的定义

  * 一个基本的 `dva model` 最少具备两个成员： `namespace` 和 `state`

  * `namespace` 作为一个 `model` 的唯一标识， `state` 中就是该 `model` 管理的数据

其次，看页面文件的变化：

* 我们删除了组件本身的 `state` ，同时添加了 `@connect(mapStateToProps)`

* `connect` 是连接 `dva` 和 `React` 两个平行世界的关键，一定要理解:

  * `connect` 让组件获取到两样东西：

    * `model` 中的数据

    * 驱动 `model` 改变的方法

  * `connect` 本质上只是一个 `javascript` 函数，通过 `@` 装饰器语法使用，放置在组件定义的上方

  * `connect` 既然是函数，就可以接受入参，第一个入参是最常用的，它需要是一个函数，我们习惯给它命名叫做 `mapStateToProps` ，顾名思义就是把 `dva model` 中的 `state` 通过组件的 `props` 注入给组件

    * 通过实现这个函数，我们就能实现把 `dva model` 的 `state` 注入给组件

> `mapStateToProps` 这个函数的入参 `state` 其实是 `dva` 中所有 `state` 的总合

* `dva` 框架会适时调用 `mapStateToProps` ，并传入 `dva model state` 作为入参

  * 传入的 `state` 是个 "完全体"，包含了 所有 `namespace` 下的 `state` ！

* 我们自己定义的 `dva model state` 就是以 `namespace` 为 `key` 的 `state` 成员

  * 所以 `const namespace = 'puzzlecards'` 中的 `puzzlecards` 必须和 `model` 中的定义完全一致

* `dva` 期待 `mapStateToProps` 函数返回一个 对象，这个对象会被 `dva` 并入到 `props` 中，在上面的例子中我们取到数据后，把它改名为 `cardList` 并返回

  * 注意返回的不是 `cardList` 本身，而是一个包含了 `cardList` 的对象！

  * `cardList` 就可以在子组件中通过 `props` 被访问到了

> 注意 `render` 函数中通过 `this.props.cardList` 取到了数据，数据已经不再由组件自己管理，我们得到了第一步中的页面样子：

![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533202164449-350a18b6-e7b7-435a-9518-11daf8ff1e9c.png)

这里我们同时利用 `Redux DevTools` 展示了 `Dva` 中 `state` 的内容，证明了我们定义的 `model` 确实生效了

* 如果想时刻洞察 `model` 中的内容，强烈建议安装 `Redux DevTools`

![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533202294228-fe24ef41-b8fc-4bf3-9ea8-3179f54ea4e8.png)

### `添加卡片` 按钮

> 使用 `dispatch` 和 `reducer` 改变 `dva model`

我们上面的例子中只是移植了 state，但是没有移植按钮和按钮上的行为

```
React 有一个基本的哲学：数据映射到视图
```

* 无论什么途径，我们点击按钮后，本质上都是去触发 `state` 的改变，`state` 的改变再映射回视图

* 所以我们这里的目标就是使得每次点击按钮，触发 `dva model` 的中卡片数据再添加一条

* 在 `dva` 的语境中，是统一通过 `dispatch` 函数来做这件事情

修改 `model` 文件，加入 `reducers` 部分：

```js
export default {
  namespace: 'puzzlecards',
  state: {
    data: [
      {
        id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: 'It gets toad away',
      },
    ],
    counter: 100,
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};
```

修改页面文件，注入新的方法：

```js
import React, { Component } from 'react';
import { Card ,Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button onClick={() => this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          })}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}
```

于是得到新的页面：

![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533218381481-8ff07ef9-4fc7-4a15-a51a-5264e6f83764.png)

接下来，我们解释一下都干了什么事情：

* 使用 `mapDispatchToProps` 和 `dispatch`

  * 通过使用这两者，我们可以给组件注入方法，组件使用这些方法能给 `dva model` 发 `「消息」`

  ```js
  () => this.props.onClickAdd({
    setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    punchline: 'here we use dva',
  })
  ```

  * 错误示例：

    ```js
    this.props.onClickAdd({
      setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      punchline: 'here we use dva',
    })
    ```

    * 区别是上面定义了一个 `click` 事件的回调函数，而下面是直接调用函数

    * 回调函数在点击时被调用，又立刻调用 `onClickAdd`

    * 如果直接写成 `this.props.onClickAdd({})` ，就变成 `render` 函数执行到此处时直接调用 `onClickAdd` 函数了

onClickAdd 是怎么被注入的呢？

* 答案就在于我们给 `connect` 传入了第二个函数： `mapDispatchToProps`

* 我们习惯用这个名字是因为它精炼地说明了这个函数的作用：以 `dispatch` 为入参，返回一个挂着函数的对象，这个对象上的函数会被 `dva` 并入 `props` ，注入给组件使用

* 我们在 `onClickAdd` 函数中调用 `dispatch` 派发了一个 `action` ，`action` 包含 `onClickAdd` 传递过来的内容 { `setup`, `punchline` } 作为 `payload` ，`action` 的 `type` 是 `puzzlecards/addNewCard`

* `addNewCard` 在这个例子中是 `reducer` 的名字，这个我们下面会讲到

`dispatch` 函数就是和 `dva model` 打交道的唯一途径:

* `dispatch` 函数接受一个 对象 作为入参，在概念上我们称它为 `action` ，唯一强制要包含的是 `type` 字段， `string` 类型，用来告诉 `dva` 我们想要干什么

  * 我们可以选择给 `action` 附着其他字段，这里约定用 `payload` 字段表示额外信息

> 我们把想做的事情通过 `action` 描述出来，并通过 `dispatch` 告诉 `dva model` ，而对这个消息的处理就是 `dva` 的事情:

> `dva` 和 `React` 哲学一脉相承，`React` 也是遵循这个原理工作的，在组件中总要写一个 `render` 函数，这个函数就是向 `React` 描述你想要渲染出的内容，作为开发者你并不会去直接操作 `DOM` ，而 `React` 负责把 `render` 函数的返回值转化成 `DOM` 元素，并由 `React` 最终决定渲染 DOM 的时机和流程（`React` 渲染引擎的执行是个异步的过程）

派发出的 `action` 怎样被 `dva` 识别并执行 `添加卡片` 的逻辑呢？

### 定义 `reducer`

> `dva model` 中可以定义一个叫做 `reducers` 的成员用来响应 `action` 并修改 `state`

* 每一个 `reducer` 都是一个 `function` ，`action` 派发后，通过 `action.type` 被唯一地匹配到，随后执行函数体逻辑，返回值被 `dva` 使用作为新的 `state`

* `state` 的改变随后会被 `connect` 注入到组件中，触发视图改变

`reducer` 的样子大概是：

```js
someReducer(state /* old state */, { payload }) {
  // ... do calculation
  return {
    // ... build a new object as next state and return it
  };
}
```

* `reducer` 应该是一个 `纯函数` ，它的返回值作为新的 `state`

* `dva` 会注入旧的 `state` 和 `action` 中的 `payload` ，是否使用完全根据需要决定

* 返回值必须是一个新构造对象，绝不能把旧 `state` 的引用返回！

> `reducer` 干的事情和 `React` 中 `setState(prevState => { ... })` 很像，都要返回一个新构造的对象，但区别是：

* `reducer` 的返回值会整个取代 `(Replace)` 老的 `state` ，而 `setState` 中回调函数的返回值是会 融合 `(Merge)` 到老的 `state` 中去

下图标示了由 `dva` 驱动的整个过程:

![图片](https://gw.alipayobjects.com/zos/rmsportal/uhUMfTcXxfskqbreAXth.png)

## 在 model 中请求服务端数据

如果说 `model` ，`namespace` ，`connect` ，`dispatch` ，`action` ，`reducer` 这些是 `dva` 的基石，那 `dva` 的精髓就体现在于 `effect`

### `Effect` 和 `Generator function`

> 在实际的开发中，计算新 `state` 时常常需要异步操作配合，比如说强制延时、异步网络请求数据（比如 `ajax` ）等等

* 但是 `reducer` 需要是个纯函数，我们不能在 `reducer` 中写这些逻辑，破坏了这个机制后 `dva` 将无法工作

* 在 `dva` 框架下，`effect` 就是专门处理这些具有 `副作用` 的操作的执行单元

那么 `effect` 到底是什么呢？

> `effect` 是一个 `dva` 语境中的名词，和 `reducers` 类似，我们也可以在 `dva model` 中定义一个 `effects` 成员

```js
export default {
  namespace: 'some_namespace',
  state: {},
  effects: { // 定义 effects 成员
    'someEffect': function*() {},
    'someOtherEffect': function*() {},
    // ...
  },
  reducers: {
    // ...
  },
}
```

* 局部上看 `effect` 就是一个一个的 `generator function`

* 宏观上看，`effect` 是一层中间件

#### `effect` 和 `middleware`

> 中间件是一种程序架构和分布式系统架构上的思想

* 目前来讲还没有个标准定义，笔者认为起码在程序架构领域下面一句话还是比较准确精炼的：

  * 中间件是一些代码，可以放在接收请求的框架和生成响应的框架之间

> 在上一章中 `action` 被 `dispatch` 之后就能够 `直接` 到达 `reducer`

* 为了保证 `reducer` 的纯粹性，但同时又能够处理副作用，就需要打破 `「直接」` 这个特性

* `effect` 充当了这么一个中间层，当 `action` 被 `dispatch` 之后，会先到达 `effect` 处理副作用，然后该 `effect` 最终会促使新的 `action` 发送出去

  * 这个新的 `action` 可能被其他的 `effect` 再捕获继续处理

  * 也可能被 `reducer` 捕获并结束

  * 无论怎样，最终处理逻辑的终点都将是 `reducer`

> 在上一章节中，我们知道 `action.type` 的构造是 `namespace` 名称 `+ / + reducer` 名称；事实上 `action.type` 也可以是 `namespace` 名称 `+ / + effect` 名称

* 对于视图层来讲，其实并不会感知 `effect` 和 `reducer` 的区别

* 视图层只是通过 `action` 描述想做什么，至于这个 `action` 之后是直接被 `reducer` 处理还是通过 `effect` 再到 `reducer` ，视图层并不感知，也不应该关心

* 这样我们就做到了数据逻辑和视图逻辑的分离处理

#### `Generator function`

为什么 `generator function` 可以用来处理异步逻辑？

* 其实 `generator function` 处理异步逻辑并不是 `dva` 的专利，在许多 `js` 框架中都用到了，最著名的就是 `co`

* 使用 `generator function` 处理异步也不是对语言特性的乱用，而是说 `generator function` 天然地就具备处理异步的特质

* `dva` 中一个典型的 `effect` 的写法是：

  ```js
  getData: function* ({ payload }, { call, put }) {
    const data = yield call(SomeService.getEndpointData, payload, 'maybeSomeOtherParams');
    yield put({ type: 'getData_success', payload: data });
  }
  ```

先说结论：

* 当这个 `generator function` 被执行时，执行的流程 `看上去` 会是同步的！

* 入参有两个对象:

  * 第一个对象就是匹配这个 `effect` 的 `action` 对象，因此可以取到约定的 `payload` 这个字段

  * 第二个对象是 `effect` 原语集，其中 `call` , `put` 最为常用

* `generator function` 入参中的两个对象都是在运行时由 `dva` 注入到 `generator function` 中的

> `call` 其实是一个函数，和 `yield` 关键字配合使用处理异步逻辑，`call` 第一个参数是一个函数，要求函数返回 `Promise` ，之后的参数是该函数调用时的入参

* `yield call` 调用后就阻塞了，`Promise` 被解析后，得到异步调用的结果，存储到 `data` 中，然后程序才能继续进行

* 看到下面一行又执行了 `put`

  * `put` 也是一个函数，`put` 和 `yield` 配合使用，用来派发一个 `action` ，和 `dispatch` 的功能 一模一样！

    * 只不过是在 `effect` 函数中使用而已

  * 注意：`yield put` 派发的 `action` 如果是为了触发 同 `model` 中的其他 `effect/reducer` 执行，不需要指定 `namespace` 名称

> 再聊聊 `generator function` 是如何优雅地把异步变得像`「同步」`一样

* 我们都知道在古老的 js 开发中，都是使用层层回调来处理异步逻辑的

但结果是：

![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533266631038-14a1996b-02d4-47d6-ae6d-f7cbe97d9cf5.png)

* 这就是所谓的 `callback hell` !

  * 程序变得很难以理解和维护

  * 异步的实质是事件发生促使程序的执行点来回跳转

  * 我们使用 `callback` 本质上是描述跳转的一种手段

* `generator function` 并没有改变异步的本质，只是改变了描述的方式，使得程序看起来像是同步一样

> 一个 `generator function` 在执行时有 两方：

* 一方是 `generator function` 本身

* 另一方是 `generator function` 的句柄持有者，而这一般都是框架所持有

  * 我们姑且称这个句柄为 `genStub`

> 当框架调用 `genStub.next()` 时，`generator function` 会执行到下一个 `yield` 然后暂停，并把 `yield` 后面表达式的计算值返还给框架，同时把程序执行权交给框架

* 框架拿到值后做处理，比如就是异步处理，处理结束拿到结果，再次调用 `genStub.next()` ，返还值给 `generator function` 同时驱动它恢复执行

* 当恢复执行时，你可以认为返回的处理结果会整体替换 `yield <expression>` ，然后程序继续执行到下一个 `yield`

`yield` 这个单词用在这里特别形象：`yield` 本身有`「让步」`的意思，也有`「产出」`的意思

> 需要注意的是：「`generator function yield` 到外部的值」和「外部返还给 `generator function` 的值」不是一回事！！！

* `generator function` 定义了流程，并在每次 `yield` 节点上报想做的事情

* 异步的真正执行逻辑由 `generator function` 句柄的持有者代为执行

  * 对应到 `dva` 上也是一样的

* 拿 `call` 做例子，`call` 其实是一个特别简单的函数

  * `call` 的返回值只是一个 `plain javascript object` :

```js
{
  CALL: {
    fn: SomeService.getEndpointData,
    args: [payload, 'maybeSomeOtherParams']
  }
}
```

* 我们通过 `call` 向 `dva` 描述了想做的事情：

  * 请帮我执行这个函数，`Promise` 解析后通知我继续执行，并把 `Promise` 的解析值返回给我

#### 一个 `活` 的 `dva model`

> 使用 `Effect` 获取真实数据源数据

接下来我们要改造我们的代码，我们将从真实的服务端数据源获取卡片数据:

* 首先是页面文件代码：

  ```js
  import React, { Component } from 'react';
  import { Card /* ,Button */ } from 'antd';
  import { connect } from 'dva';

  const namespace = 'puzzlecards';

  const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return {
      cardList,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      onDidMount: () => {
        dispatch({
          type: `${namespace}/queryInitCards`,
        })
      }
    }
  }

  @connect(mapStateToProps, mapDispatchToProps)
  export default class PuzzleCardsPage extends Component {
    componentDidMount() {
      this.props.onDidMount();
    }
    render() {
      return (
        <div>
          {
            this.props.cardList.map(card => {
              return (
                <Card key={card.id}>
                  <div>Q: {card.setup}</div>
                  <div>
                    <strong>A: {card.punchline}</strong>
                  </div>
                </Card>
              )
            })
          }
        </div>
      )
    }
  }
  ```

* 然后是 model 的代码：

  ```js
  import request from '../util/request';
  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise

  const delay = (millisecond) => {
    return new Promise((resolve) => {
      setTimeout(resolve, millisecond);
    });
  };

  export default {
    namespace: 'puzzlecards',
    state: {
      data: [],
      counter: 0
    },
    effects: {
      *queryInitCards(_, sagaEffects) {
        const { call, put } = sagaEffects;
        const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';

        const puzzle = yield call(request, endPointURI);
        yield put({ type: 'addNewCard', payload: puzzle });

        yield call(delay, 3000);

        const puzzle2 = yield call(request, endPointURI);
        yield put({ type: 'addNewCard', payload: puzzle2 });
      }
    },
    reducers: {
      addNewCard(state, { payload: newCard }) {
        const nextCounter = state.counter + 1;
        const newCardWithId = { ...newCard, id: nextCounter };
        const nextData = state.data.concat(newCardWithId);
        return {
          data: nextData,
          counter: nextCounter,
        }
      }
    }
  }
  ```

* 下面同时展示了 `../util/request` 的代码，同样的代码您也可以在 `demo` 代码仓库中找到：

  ```js
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  /**
  * Requests a URL, returning a promise.
  *
  * @param  {string} url       The URL we want to request
  * @param  {object} [options] The options we want to pass to "fetch"
  * @return {object}           An object containing either "data" or "err"
  */
  export default async function request(url, options) {
    const response = await fetch(url, options);
    checkStatus(response);
    return await response.json();
  }
  ```

* 得到新的页面：

  ![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533270590907-6c5bb27e-51da-4f30-809f-f1d8ce212be4.png)

  * 我们看到卡片数据不再是写死的，而真的是从服务端获取的，我们故意打开了 `Chrome DevTool` 中的 `Network` 面板用来印证

* 说明：

  * `fetch` 是一个 `W3C` 标准下的基于 `Promise` 的做 `ajax` 请求的函数，但是并不那么好用

    * 我们这里的 `request` 是对它的一层封装。总而言之，你在 `demo` 项目中可以使用 `request` 做 `ajax` 请求，该函数返回 `Promise`

  * `request` 函数不指定 `http verb` 时默认是 `GET` 请求

    * 这里仅仅演示了 `HTTP GET` 请求

    * 但其他类型的异步请求也是同理可以处理

> 我们来分析一下都做了哪些改变，先从 `model` 说起：

* 我们看到首先添加了一个 `effect queryInitCards` ，根据我们上面的分析，如果派发了一个 `type` 为 `puzzlecards/queryInitCards action` ，那么接下来会先到达 `queryInitCards` 这个 `effect` 来处理

* 接下来的流程是：

  * `const puzzle = yield call(request, endPointURI)` 获取服务端数据

  * `yield put({type: 'addNewCard', payload: puzzle })` 添加一个卡片数据

    * 这个会触发 `reducer` 的执行

    * 于是会看到视图上添加了一个新卡片

  * `yield call(delay, 3000)` 暂停 `3` 秒

  * `const puzzle2 = yield call(request, endPointURI)` 第二次获取服务端数据

  * `yield put({type: 'addNewCard', payload: puzzle })` 再添加一个卡片数据

    * 这个又会触发 `reducer` 的执行

    * 于是看到第二个卡片添加到视图上去

* 再看看页面的改变：

  * 我们通过 `mapDispatchToProps` 给页面注入方法 `onDidMount`

  * 页面在 `mount` 完毕后调用该方法

  * 它发送一个 `puzzlecards/queryInitCards` 的 `action` ，这个请求被 `puzzlecards` 中的 `queryInitCards` 这个 `effects` 所处理

  * 这样子数据的流转就完整了

> 在 `React 16` 中，页面初始化时的异步请求必须只能在 `componentDidMount` 中做，不能在 `constructor` , `UNSAFE_componentWillMount` , `UNSAFE_componentWillReceiveProps` , `getDerivedStateFromProps` 中做

* 整体的数据流向见下图：

![图片](https://gw.alipayobjects.com/zos/rmsportal/ZSCxeNAFqHgKXsyjtpxt.png)

### 代理请求

> 这里有一个问题被回避了：跨域问题

重新审视我们的请求：

```js
const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
```

* 这里我们直接调用了一个`「非本地」`地址

  * 这里能够成功，是因为被调用的 `API` 做了额外的人为设置，允许一个`「非同域」`的 `ajax` 请求

> 跨域资源共享 `CORS` 涉及的知识点比较多:

* 我们在浏览器中看到的页面是从一个本地开发服务器所伺服的

  * 这个本地开发服务器的地址就是 `http://localhost:8000/`

* 当我们调用 `getRandomPuzzle` 时，此时发送 `ajax` 请求页面的域就是 `http://localhost:8000` ，但是请求的数据在另外一台服务器 `https://08ad1pao69.execute-api.us-east-1.amazonaws.com`

* 一个是 `http` 一个是 `https` ，路径也不同，端口也不同（ `https` 是 `443` ）

> 任意这三个东西有一个不同，就认为是资源请求`「跨域」`了

* `http` 的 `默认` 安全规则是不允许`「跨域」`请求

> 值得注意的是，发送 `ajax` 请求的是你的浏览器，所谓 `User Agent` ，而`「跨域」`的限制 `仅仅在浏览器和服务器之间`

* 我们不能强制远程服务器都像例子中那样允许`「跨域」`请求，所以我们能做的就是不要使用浏览器发送请求

* 所以在前端开发中，一种常见的规避跨域的方法就是：

  * 把 `ajax` 请求发送到你的本地开发服务器，然后本地开发服务器再把 `ajax` 请求转发到远端去，从网络拓扑上看本地开发服务器起着`「反向代理」`的作用

  * 本地服务器和远端服务器是`「服务器和服务器间的通信」`，就不存在跨域问题了

* 配置代理也很简单，只需要您在配置文件 `config/config.js` 中与 `routes` 同级处增加 `proxy` 字段，代码如下:

  ```js
  routes: [
    // ...
    ],

    proxy: {
      '/dev': {
        target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
      },
    },
  ```

* 配置的含义是：

  * 去往本地服务器 `localhost:8000` 的 `ajax` 调用中，如果是以 `/dev` 开头的，那么就转发到远端的 `https://08ad1pao69.execute-api.us-east-1.amazonaws.com` 服务器当中，`/dev` 也会保留在转发地址中

  * 比如：`/dev/random_joke` 就会被转发到 `https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke`

  * `end point URI` 也需更改为：

    ```js
    const endPointURI = '/dev/random_joke';
    ```

重启 `dev server` ，页面功能没有任何变化，但是发送的 `http request` 变化了:

![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533620989960-e9dd2c6c-0e6e-4222-be67-0b06e045dd83.png)

> 下图展示了配置代理和不配置代理时请求的路径

![图片](https://gw.alipayobjects.com/zos/rmsportal/YiBKIHevTMjvpIAodsOq.png)

## 模拟服务端数据【问题】

> 在实际的开发中，后端的服务不一定马上可用，这就需要本地服务器另外一个能力：模拟数据（`mock`），设置代理是 `mock` 的前提

* 一个 `ajax` 请求发送到本地开发服务器后，我们可以设置：

  * 如果请求满足某个规则，则不转发这个请求，而是直接返回一个`「假」`结果给浏览器

  * 在实际的开发中，我们常常先和服务端的同学商定 `http` 请求的接口接受什么参数，返回什么结果，然后先用 `mock` 数据来模拟，自己和自己`「联调」`

### 模拟正常返回数据

> 设置模拟数据时需要在工程根目录下的 `mock` 子目录中的建立文件

* 首先在工程中增加 mock 目录，并在其中创建文件 `puzzlecards.js`（取其他名字也可以，名字这里不需要）

* 如果想 `mock` 掉我们在上一个章节中的向 `/dev/random_joke` 的 `ajax` 调用，需要写入以下内容到文件:

  ```js
  const random_jokes = [
    {
      setup: 'What is the object oriented way to get wealthy ?',
        punchline: 'Inheritance',
    },
    {
      setup: 'To understand what recursion is...',
      punchline: "You must first understand what recursion is",
    },
    {
      setup: 'What do you call a factory that sells passable products?',
      punchline: 'A satisfactory',
    },
  ];

  let random_joke_call_count = 0;

  export default {
    'get /dev/random_joke': function (req, res) {
      const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
      random_joke_call_count += 1;
      setTimeout(() => {
        res.json(responseObj);
      }, 3000);
    },
  };
  ```

* 如果你不断地刷新页面，会发现每次拿到的数据是不同的

  * 并且由于 `setTimeout` 的存在使得卡片的更新变慢了

![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533281128902-083962d8-ced4-498c-8cbb-2f9fcfe01303.png)

我们通过这个例子解释一下怎么写 `mock` 数据:

* 首先，整个文件需要 `export` 出一个 `js` 对象:

  * 对象的 `key` 是由 `<Http_verb> <Resource_uri>` 构成的

  * 值是 `function` ，当一个 `ajax` 调用匹配了 `key` 后，与之对应的 `function` 就会被执行

* 函数中我们调用 `res.json` 就可以给浏览器返回结果

* 函数中可以使用 `setTimeout` 来模拟异步调用服务时的时延

### 模拟出错

> 利用 `res.status` 也可以模拟 `http` 请求出错

* 我们把文件中的 export default 块替换成下面的内容：

  ```js
  export default {
    'get /dev/random_joke': function (req, res) {
      res.status(500);
      res.json({});
    },
  };
  ```

* 在 `dva model `中我们加入简单的错误捕获:

```js
import { message } from 'antd';

// ... 原有逻辑不修改

  try { // 加入 try catch 捕获抛错
    const puzzle = yield call(request, endPointURI);
    yield put({ type: 'addNewCard', payload: puzzle });

    yield call(delay, 3000);

    const puzzle2 = yield call(request, endPointURI);
    yield put({ type: 'addNewCard', payload: puzzle2 });
  } catch (e) {
    message.error('数据获取失败'); // 打印错误信息
  }
```

* 于是可以看到出错状况下的页面：

  ![图片](https://cdn.nlark.com/lark/0/2018/png/58329/1533282626015-6abd2a20-4263-4c68-a983-63f9820b1049.png)

  * 在每一个调用点做打印错误信息很麻烦，这里只是为了展示 `mock` 出错场景

  * 在实际的开发中，一般会统一处理 `http` 请求错误时的信息提示

### 简单数据模拟

刚才的模拟中，`mock` 具备动态改变、延时返回等能力，如果你不需要这个能力，也可以简单地使用对象：

```js
export default {
  'get /dev/random_joke': {
    setup: 'What is the object oriented way to get wealthy ?',
    punchline: 'Inheritance',
  },
};
```


# 复杂页面

## 准备工作

* 添加页面组件

  * 我们创建一个 `src/page/list/index.js` 作为新的页面组件

  ```js
  import React from 'react';

  class List extends React.Component {
    render() {
      return (
        <div>
          hello world
        </div>
      )
    }
  }

  export default List;
  ```

* 添加路由

  * 我们在 `config/config.js` 中添加新的路由

  ```js
  { path: 'list', component: '../page/list' }
  ```

这个时候，在页面打开 http://localhost:8000/list 便可以看到你新建的页面了

## 表格

> 本小节，我们需要实现异步载入数据并通过表格展现出来，该表格需要支持排序以及过滤功能

### 引入相关依赖

* 首先，编辑我们刚刚创建的 `src/page/list/index.js` 文件，将需要用到的依赖加入：

```js
import { Table } from 'antd';
import { connect } from 'dva';
```

### 连接 `dva`

* 我们对 `export` 进行调整，将 `dva` 中的数据传入：

```js
function mapStateToProps(state) {
  return {
    cardsList: state.cards.cardsList,
    cardsLoading: state.loading.effects['cards/queryList']
  }
}

export default connect(mapStateToProps)(List);
```

> 其中当用户 `dispatch` 对应 `effect` 时，`dva` 会自动注入对应 `effect` 的 `loading` 状态

> 因而我们可以很方便的将 `state.loading.effects` 中的状态传入

### 获取数据

* 添加 `componentDidMount` 事件，使得我们可以在组件加载时触发异步请求：

```js
componentDidMount() {
  this.props.dispatch({
    type: 'cards/queryList',
  })
}
```

> 当我们调用 `connect` 后，`props` 会传入 `dispatch` 方法供用户触发 `Action`

### 展示表格

* 接着，我们定义表格所需要的列：

```js
class List extends React.Component {
  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
    }
  ]

  // ...
}
```

* 修改 `render` 方法展示出 `Table`

```js
render() {
  const { cardsList, cardsLoading } = this.props;

  return (
    <div>
      <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
    </div>
  )
}
```

> 这时，刷新页面就可以看到效果了

### 添加链接

> 我们在表格中最后一列显示的是一个超链接文本，这并不太方便；对其做些修改，使得用户可以直接点击超链接打开页面

* 对 `columns` 中 `url` 列进行修改添加 `render` 方法：

```js
{
  title: '链接',
  dataIndex: 'url',
  render: value => <a href={value}>{value}</a>
}
```

![图片](https://cdn.nlark.com/lark/0/2018/png/96882/1535964419926-186d9a9e-42ca-4bb3-870a-12633148d413.png)

一个简单的表格便完成了，下一节我们将添加一个表单用于创建新的数据到表格中

## 表单

> 网站开发中，仅仅是简单展示一下数据还远远不够，我们还会需要对数据进行更新的操作

本小节中，我们会在页面中添加一个按钮，点击后弹出对话框，允许用户输入一条新的数据并进行更新

### 引入相关依赖

* 我们将本次需要的组件引入进来:

```js
import { Table, Modal, Button, Form, Input } from 'antd';

const FormItem = Form.Item;
```

### 对话框

* 我们在页面中插入新建按钮和对话框组件:

```js
<div>
  <Table ... />

  <Button>新建</Button>
  <Modal title="新建记录">
    ...
  </Modal>
</div>
```

* 其中，对于 `Modal` 组件，我们可以通过 `visible` 属性来控制是否显示，我们需要将其在 state 中进行管理：

```js
class List extends React.Component {
  state = {
    visible: false,
  }

  // ...
}
```
### 按钮事件

* 让我们为按钮添加相应事件，使其可以改变 `state` 中 `visible` 的值

```js
class List extends React.Component {
  showModal = () => {
    this.setState({ visible: true });
  }

  // ...
}
```

```js
<Button onClick={this.showModal}>新建</Button>
```

设置好后，我们页面中点击按钮便会弹出对话框了

### 表单组件

> `antd` 提供了一套非常强大的表单组件，大部分情况下只需要简单的几步配置便可以实现验证功能

* 首先，我们需要将页面与表单进行关联：

  ```js
  export default connect(mapStateToProps)(Form.create()(List));
  ```

  * 其中，最主要的代码是：

    ```js
    Form.create()(List)
    ```

  * 这段代码的作用是创建一个高阶组件，为页面组件 `List` 提供表单所需要的内容( `this.props.form` )

* 现在，我们来让对话框关联 `visible` 并且添加上表单支持：

  ```js
  render() {
      const { visible } = this.state;
      const { form: { getFieldDecorator } } = this.props;

      // ...

      return (
        <div>
          {/* ... */}

          <Modal
            title="新建记录"
            visible={visible}
          >
            <Form>
              <FormItem label="名称">
                {getFieldDecorator('name', {
                  rules: [{ required: true }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem label="描述">
                {getFieldDecorator('desc')(
                  <Input />
                )}
              </FormItem>
              <FormItem label="链接">
                {getFieldDecorator('url', {
                  rules: [{ type: 'url' }],
                })(
                  <Input />
                )}
              </FormItem>
            </Form>
          </Modal>
        </div>
      )
    }
  }
  ```

  * 我们可以看到表单组件是通过 `Form` 与 `Form.Item` (我们之前定义了 `FormItem = Form.Item` ) 配合使用，其中每一个 `Form.Item` 都是一个表单域

  * 而 `getFieldDecorator` 是用于将包裹的组件与表单进行双向绑定使用

  * 此外，我们还可以设置改表单域是否是必填项( `required: true`)或者是否需要类型检查( `type: url` )

  * [【更多的配置可以查询官方文档】](https://ant.design/components/form-cn/)

然后，我们添加表单处理逻辑，添加确认和取消方法

### 撤销操作

* 重置 `visible` 属性为 `false` 以关闭对话框:

  ```js
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  ```

### 确定操作

* 我们通过 `validateFields` 方法验证表单是否完成填写，通过便提交添加操作:

  ```js
  handleOk = () => {
    const { dispatch, form: { validateFields } } = this.props;

    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'cards/addOne',
          payload: values,
        });
        // 重置 `visible` 属性为 false 以关闭对话框
        this.setState({ visible: false });
      }
    })
  }
  ```

  * 其中， `dispatch` 的 `cards/addOne` 请参考我们提供的对应样例中 `src/model/cards` 、 `src/service/cards` 和 `mock/cards` 的代码

* 最后，我们为 `Modal` 添加事件处理：

  ```js
  <Modal
    title="新建记录"
    visible={visible}
    onOk={this.handleOk}
    onCancel={this.handleCancel}
  >
    ...
  </Modal>
  ```

### 自定义控件

> 在 `antd` 中，我们提供了诸如 `Input` , `Select` 之类的用于接收用户输入的组件

> 在上面我们介绍了 `getFieldDecorator` 这个方法，它执行后会返回一个函数，那个函数接收一个参数，那个参数就是一个输入组件

* 比如在上面的例子中它可能是 `<Input />` 也有可能是 `<Select />`

  * 它并没有被局限在 `antd` 支持的组件内，你完全可以传入你自己的一个组件，比如下面的示例：

    ```js
    <FormItem label="自定义输入">
      {getFieldDecorator('custom', {
        rules: [{ required: true }],
      })(
        <YourInput />
      )}
    </FormItem>
    ```

> 其中，只要 `YourInput` 这个组件满足如下三个条件即可：

* 提供受控属性 `value` 或其它与 `valuePropName` 的值同名的属性

* 提供 `onChange` 事件或 `trigger` 的值同名的事件

* 不能是函数式组件

> 你可以在 `Ant Design` [官网推荐的社区精选组件](https://ant.design/docs/react/recommendation-cn)中找到合适你项目的组件

## 图表

> 图表在中后台系统中是一个非常常见的可视化表现形式，也使得数据变得更为的直观

> 这一小节，我们将通过使用图表类库 `G2` 来制作一个图表

* 阿里提供了 `BizCharts` 对 `G2` 进行了封装，在实际开发中可以很方便的进行使用

* 本小节会从基本的 `G2` 应用开始，让你体验一下组件开发需要涉及到哪些细节

### 引入依赖

* `G2` 需要额外引入，让我们先安装一下吧：

  * `cnpm install @antv/g2 --save`

### 创建图表组件

* 接着，我们新建一个图表组件于 `src/components/SampleChart.js`

  ```js
  import React from 'react';
  import G2 from '@antv/g2';

  class SampleChart extends React.Component {
    constructor(props) {
      super(props);
      this.containerRef = React.createRef();
    }

    render() {
      return (
        <div ref={this.containerRef} />
      );
    }
  }

  export default SampleChart;
  ```

  * 此处我们看到了一个新的属性 `ref` ，通过该属性我们可以获取经过 `render` 后的真实节点的引用

  * 如果 `ref` 的节点是一个 `dom` 元素，那么你得到的是文档中真实的 `dom` 节点

  * 如果 `ref` 的节点是一个 `component` ，那么你获得将是该 `component` 渲染后的实例

  * 而在这里，我们获取的是 `div` 的 `dom`

  * 其中 `React.createRef` 是 `React` 提供的一个创建引用的便捷方法

* 在获取了 `dom` 元素后，我们便可以对其进行图表的初始化了

  ```js
  class SampleChart extends React.Component {
    componentDidMount() {
      // G2 初始化图形代码
      this.chart = new G2.Chart({
        // this.containerRef.current 即为引用
        container: this.containerRef.current,
        width: 450,
        height: 300
      });

      // 下文会介绍
      this.refreshChart();
    }

    // ...
  }
  ```

  * `componentDidMount` 是 `React` 组件生命周期方法之一，在组件被添加到真实文档后触发

  * 在这时，`ref` 可以拿到当前真实的 `dom` 元素

> 这不仅仅适用于 `G2` ，同样适用于那些依赖于真实 `dom` 元素的库（例如 `jQuery` ）

* 之后，我们实现数值渲染：

  ```js
  class SampleChart extends React.Component {
    refreshChart = () => {
      // 接收 data 属性作为数据源
      this.chart.source(this.props.data);
      // 此处为硬编码，配置源自 G2 官方示例： https://github.com/antvis/g2
      // 实际开发中需要封装，推荐直接使用 BizCharts
      this.chart.interval().position('genre*sold').color('genre');
      this.chart.render();
    }

    // ...
  }
  ```

一个基本的图表组件完成了，但是还有一些小细节还需要考虑，本小节最后会将其补充完成

### 使用图表

* 同样的，我们需要在 `model` 和 `mock` 中加入对应的数据获取步骤

  * 具体的代码可以详见

    * `src/model/cards.js`

    * `src/service/cards.js`

    * `mock/cards.js`

  * 返回的数据格式如下（这是 `G2` 官方样例数据）：

    ```js
    {
      result: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 1150 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ]
    }
    ```

* 回到我们上一节开发的 `list` 页面，我们更新一下 `state` 添加相关状态：

  ```js
  state = {
    // ...
    statisticVisible: false,
    id: null
  }
  ```

* 然后，我们为表格添加额外的一列用于点击展示图表：

```js
columns = [
  // ...
  {
    title: '',
    dataIndex: '_',
    render: (_, { id }) => {
      return (
        <Button onClick={() => { this.showStatistic(id); }}>图表</Button>
      )
    }
  }
]
```

* 添加展示逻辑：

```js
class List extends React.Component {
  showStatistic = (id) => {
    this.props.dispatch({
      type: 'cards/getStatistic',
      payload: id,
    });
    // 更新 state，弹出包含图表的对话框
    this.setState({ id, statisticVisible: true });
  };

  handleStatisticCancel = () => {
    this.setState({
      statisticVisible: false,
    });
  }

  // ...
}
```

* 增加表格的对话框，将我们做好的组件加进去：

```js
render() {
  const { /* ... */ statisticVisible, id } = this.state;
  const { /* ... */ statistic } = this.props;

  return (
    <div>
      {/* ... */}

      <Modal visible={statisticVisible} footer={null} onCancel={this.handleStatisticCancel}>
        <SampleChart data={statistic[id]} />
      </Modal>
    </div>
  );
}
```

* 现在点击 `图表` 按钮便可以欣赏到你的图表

![图片](https://cdn.nlark.com/lark/0/2018/png/96882/1535964734154-18a1e92e-2041-4b20-a79b-cadb8aa28bab.png)

### 更多思考

> 我们回到之前设计的 `SampleChart` ，想想还缺少些什么

* 首先，我们现在的逻辑只接收初始化时获取的 `data` 画图，如果 `data` 更新图表并不会更新

  * 我们需要监听组件更新事件，更新时重新画图

  ```js
  componentDidUpdate() {
    this.refreshChart();
  }
  ```

* 如果当前的 `data` 没有变化我们图表当然不需要重新绘制，添加一个检查只有 data 更新时才重绘：

  ```js
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.refreshChart();
    }
  }
  ```

* 接着，如果这个组件不再被使用，那么初始化的图表也应该随着组件一并被销毁，我们还需要监听一下卸载事件：

```js
componentWillUnmount() {
  if (this.chart) {
    this.chart.destroy();
  }
}
```

* 这样，图表的生命周期就与组件的生命同步了

> 最后一点：就是该图表的耦合性过高，我们还需要将一些耦合的部分拆分出来，你可以参考 [`BizCharts` 的实现](https://github.com/alibaba/BizCharts)

# 功能扩展

## 自定义样式

添加一些样式定义，使得 `Hello World` 文字 `更粗`、`更大`，变为 `绿色`

* 第一、在 `src/pages` 目录下创建页面 `index.jsx` 和样式文件 `styles.css`

  ```
  .
  └── src
      └── pages
          ├── index.jsx
          └── styles.css
  ```

* 写入以下内容到文件

  ```js
  /* index.jsx */
  export default () => {
    return (
      <div className={myStyles.hello}>Hello World</div>
    )
  }
  ```

  ```css
  /* styles.css */
  .hello {
    font-size: 32px;
    font-weight: bold;
    color: #30b767; /* 绿色 */
  }
  ```

> 注意：

* 对于 `css` 文件，不要在值上使用引号

* .号要紧跟 `hello` ，定义一个 `class` 选择器

  * 下面展示了错误的写法:

    ```css
    /* 错误！1. 引号是无效的；2. hello 前面的点漏掉了 */
    hello {
    font-size: '32px';
    font-weight: 'bold';
    color: "#30b767";
    }
    ```

* 第二、要把样式文件在页面文件中引用，它才能真正生效

  * 首先添加一行 `import` 语句

  * 其次在 `div` 的 `className` 属性中使用 `hello`

  ```js
  import myStyles from './styles.css';
  export default () => {
    return (
      <div className={myStyles.hello}>Hello World</div>
    )
  }
  ```

> 注意：

* 在 `React` 的语境下，我们使用 `className` 保留字来定义一个 `html` 元素的 `class` ，而非 `w3c` 标准中的 `class` 保留字
* 在 `umi` 中我们默认开启了 `CSS modules` 特性，这使得 `class` 名需要通过变量属性去引用

在终端中运行 umi dev 启动我们的应用，看到了期待中 Hello World 渲染出的样子：

![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883069473-eb9391c0-4684-4566-bdcb-840d392bcc2d.png)

> 注意：

* 如果没有预期效果，请检查是否在终端有报错，请打开浏览器的控制台看是否有相关报错

* 如果依然有问题，请检查是否正在使用某些网络工具，或者曾经不慎修改了 `/etc/hosts` 文件

* 因为默认开启了 `CSS modules` 特性，这份样式定义只会对 `index.html` 文件起作用，所以我们不用再担心不同样式文件之间的干扰

### 理解 `CSS modules`

> 让我们打开浏览器的调试工具（这里以 `Chrome DevTool` 为例子），切到 `Elements` 面板，找到 `Hello World`

![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883088174-8d34a289-bd94-4166-9d1b-b248492ae5e7.png)

* 我们看到它实际的 `class` 是 `style__hello__<hash数值>` ，并非在源文件中声明的 `hello`

  * 这就是 `CSS modules` 起了作用

  * 这个 `hash` 值是全局唯一的，比如通过文件路径来获得，这样 `class` 名称就做到了全局唯一

  * 通过全局唯一的 `css` 命名，我们变相地获得了局部作用域的 `css`（ `scoped CSS` ）

  * 如果一个 `css` 文件仅仅是作用在某个局部的话，我们称这样一个 `css` 文件为 `CSS module`

> `CSS modules` 不是一个可以安装的 `npm` 包，也不是 `w3c` 中的某个标准，只是一项流行的社区规范（ `an opinionated proposal` ）

* `webpack browserify` 等打包工具（ `module bundler` ）的能力让工具生成局部 `css` 成为可能，`CSS modules` 规范也应运而生

* `css` 的局部作用域解决了大问题

  * 在 `w3c` 规范中，`css` 始终是`「全局的」`

  * 在传统的 `web` 开发中，最为头痛的莫过于处理 `css` 问题

    * 因为全局性，明明定义了样式，但就是不生效，原因可能是被其他样式定义所强制覆盖

  * 接手老项目更是噩梦，改对了一个地方的样式，却把另外许多地方的样式打乱

    * 这一切的罪魁祸首就是 `css` 的`「全局型」`

  * 为了得到局部作用域，社区曾经流行过叫做 `BEM` 的方案，它约定 `class` 应该写成：

    ```js
    .block-name__element-name--modifier-name {}
    ```

* 但这终究只是一种书写 `class` 的命名规范（ `convention` ），可以因为疏忽被打破，每个团队之间的规范也不一定互通

  * `CSS modules` 是从工具层面给出的一套生成局部 `css` 的规范，本质还是生成全局唯一的 `css` 定义

  * `webpack` 实现了这套规范，`umi` 依赖 `webpack` ，默认开启了 `CSS modules` 特性

> `webpack` 实现 `CSS module` 的原理

* 在现代 `web` 开发中，服务器并不能直接使用我们写的 `js`、`css`、`HMTL` 文件

* 事实上，我们按照规范写出代码，输入给编译工具 ( `transpiler `) ，它最终把代码转换/打包，输出成浏览器可以使用的 `js`、`css`、`HMTL`

* 在多年的社区沉淀后，脱颖而出的是诸如 `webpack` 这样的工具，这类编译工具又称为 `module bundler`

  * `webpack` 允许我们用 `import/export` ( `ES6` ) 或者 `require/module.exports`( `CommonJs` ) 这样的语法来书写我们的 `js` 代码，它甚至允许我们在 `js` 里面 `import` 一个 `css` 文件

  * 注意：如果脱离了 `webpack` 的语境，这么写当然是会引起语法错误的

* 在现代 `web` 开发中，我们的运行时代码强耦合了编译时工具，强耦合换来的是传统 `web` 开发所不可企及的新能力

  * 对于 `webpack` ，当我们每次写了 `import A from B` 的时候，我们其实是声明了一个 `A` 对于 `B` 的依赖

  * 当在 `a.js` 中写入 `import styles from a.css` 后，`webpack` 就可以把这个依赖翻译成：

    * 每当 `a.js` 被使用时，保证生成一个 `style` 标签，里面嵌入 `a.css` 的内容

  * 同时 `webpack` 给予我们另一个能力：

    * 不同类型文件间可以信息传递

  * `webpack` 把 `a.css` 中的类名根据规则编译成为全局唯一的字符串，传递给 `a.js` 使用，于是手工维持的命名规则就可以自动生成

> 注意：很多 `css` 选择器是不会被 `CSS Modules` 处理的，比如 `body`、`div`、`a` 这样的 `HTML` 标签名就不会

> 我们推荐如果要定义局部 `css` 样式/动画， 只使用 `class` 或 `@keyframe`

### `CSS modules` 与 `Less` 语法一起使用

* 虽然被称作 `CSS modules`，但是它完全可以和 `Less` 一起无缝使用，与使用普通 `css` 没有什么区别，只需要使用 `Less` 的语法写样式就可以了

* 鉴于 `antd` 的样式也使用了 `Less` 作为开发语言，所以我们的实战教程强烈推荐 `CSS module` 和 `Less` 文件一起使用

> `Less` 介绍

* `Less` 是一个 `css` 的超集，`Less` 允许我们定义变量，使用嵌套式声明，定义函数等

* 严格说 `Less` 包含两部分：

  * `Less` 的语法

  * `Less` 预处理器（ `Less preprocessor` ）

* 浏览器终究只认识 `css` ，所以 `Less` 文件需要经过 `Less` 预处理器编译成为 `css`

* 在工具的支持下，一个 `Less` 文件：

  * 首先会经过 `CSS modules` 的编译，把类名全局唯一化

  * 然后才被 `Less preprocessor` 编译成为 `css` 文件

  * 正因此，`Less` 文件可以和 `CSS modules` 无缝联合使用

第一、我们建立一个新页面 `css-modules-with-less` ，并且使用 `less` 文件作为样式文件：

```
.
└── src
    └── pages
        ├── css-modules-with-less
        │   ├── index.jsx
        │   └── styles.less
        ├── index.jsx
        └── styles.css
```

第二、我们定义 `less` 文件，故意添加一些非 `css` 语法，比如嵌套、变量定义：

```css
@grey-color: rgba(0, 0, 0, .25);

.hello {
  font-size: 32px;
  font-weight: bold;
  color: #30b767;
  .deleted {
    text-decoration: line-through;
    background-color: @grey-color;
  }
}
```

第三、我们创建页面，并使用这份样式：

```js
import styles from './styles.less';

export default () => {
  return (
    <div className={styles.hello}>
      <span className={styles.deleted}>Hello World</span>
    </div>
  )
}
```

页面效果如下：

![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883542967-53767b93-7213-45f3-8698-a53c7d474b29.png)

* `DevTools` 里可以看到 `less` 文件被正确地编译了，并且也经过 `CSS modules` 处理：

![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883548762-e70af093-ff3e-4e41-bcb4-5b6bb45692af.png)

### 在 `CSS modules` 中覆盖 `antd` 样式

> 全局唯一带来的特性就是样式不会被覆盖，但是我们有时就是想做样式覆盖

* 比如我们引用了 `antd 的 Button` 组件，我们想要覆盖它的一些样式属性定义

* 通过观察，我们知道 `Button` 组件中声明了 `.ant-btn` 类用来做样式定义，我们就从它入手

![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883121847-e1889509-7031-433f-bdd7-819cb7cfda85.png)

> 小技巧：使用 `DevTools` 的元素选择器再配合 `styles` 面板，可以用来了解 `antd` 中使用的样式名称

* 比如我们想要覆盖掉 `.ant-btn` 中声明的 `border-radius` 属性，来绘制圆角按钮

  * 直观的想法是：

  ```css
  <!-- 在 css/less 文件中定义覆盖 -->
  .override-ant-btn .ant-btn {
      border-radius: 16px;
  }

  <!-- 在 html 中使用对应的 class 名称 -->
  <span className={styles['override-ant-btn']}>
    <Button>加入圆角的按钮</Button>
  </span>
  ```

* 但其实是没效果的，由于 `CSS modules` 的使用， `ant-btn` 会被改名

  ![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883141110-31e72cd1-d5f8-479e-8d8c-fd51e309f44b.png)

  * 从而无法引用到 `ant-btn` 原名

* 此时 `CSS modules` 的 `global 语法` 派上了用场

  * 它允许我们声明一个 `class` 名称不可被改写，语法很简单：

  ```js
  :global(.ant-btn) {
    // ...
  }
  ```

  * 于是 `.ant-btn` 就不会被改写了

这里我们举一个实用的例子，来具体展示使用 `global` 覆盖 `antd Button` 组件的样式：

* 第一、我们建立一个新页面 `css-modules-with-antd`

  ```
  .
  └── src
      └── pages
          ├── css-modules-with-antd
          │   ├── index.jsx
          │   └── styles.less
          ├── css-modules-with-less
          │   ├── index.jsx
          │   └── styles.less
          ├── index.jsx
          └── styles.css
  ```

* 第二、我们建立页面文件，包含两个 antd Button，其中一个需要被样式覆盖，一个不需要

  ```js
  import styles from './styles.less';
  import { Button } from 'antd';

  export default () => {
    return (
      <div>
        <p>
          <span className={styles['override-ant-btn']}>
            <Button>圆角样式按妞</Button>
          </span>
        </p>
        <p>
          <Button>antd 原始按钮</Button>
        </p>
      </div>
    )
  }
  ```

* 第三、我们建立样式文件覆盖 `antd` 原生样式，用 `global` 来声明不修改 `class` 名

  ```css
  .override-ant-btn {
    :global(.ant-btn) {
      border-radius: 16px;
    }
  }
  ```

* 于是看到覆盖的效果：

![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883150954-b2429b96-a3da-4439-800d-2d620d921f16.png)

* 最后强调，`global` 不应该被滥用，特别建议：

  * 若想在某个文件中覆盖 `antd` 样式，请加上一个类似 `.override-ant-btn` 的类包裹住 `global` 修饰的名称，以避免全局样式声明分散在项目各处

### 更换 `antd` 主题

> 前面章节我们讲过如何覆盖某个页面中 antd 的样式，有时候我们想要`「批量修改」` `antd` 的样式，这就需要利用 `less` 提供的一个能力：`modifyVars`

* 简单地讲，`antd` 在使用 `less` 定义样式时，使用了大量的变量声明

* 这些变量的定义在编译期是可以被工具识别并修改的

* 如果使用的是 `umi` ，这个过程相当简单，只需要简单地修改配置文件即可

第一、找到 `umi` 的配置文件，如果不存在则创建一个，注意配置文件放置的位置

* 我们这里使用 `.umirc.js` ：

```
├── .gitignore
├── .umirc.js
└── src
    ├── global.less
    └── pages
        ├── .umi
        │   ├── router.js
        │   └── umi.js
        ├── css-modules-with-antd
        │   ├── index.jsx
        │   └── styles.less
        ├── css-modules-with-less
        │   ├── index.jsx
        │   └── styles.less
        ├── index.jsx
        └── styles.css
```

第二、把之前创建的 `css-modules-with-antd` 页面中的 `Button` 加上 `type='primary'` 定义

* 当 `type` 值为 `primary` 时，`Button` 应该显示为蓝色按钮：

```js
<div>

  <p>
    <span className={styles['override-ant-btn']}>
      <Button type="primary">圆角样式按妞</Button>
    </span>
  </p>

  <p>
    <Button type="primary">antd 原始按钮</Button>
  </p>

</div>
```

![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883160791-2a10d1ef-d883-4076-9a9f-d5f69a084d80.png)

第三、配置 `umi` 主题（实质是 `modifyVars` 机制）

* 如果是创建新文件，则写入：

  ```js
  export default {
    theme: {
      "@primary-color": "#30b767",
    }
  }
  ```

* 如果是已存在配置文件，则把 theme 这一段嵌入到 `export default` 内部

  ```js
  export default {
    // 若已有配置
    outputPath: "./build",

    // 加入 theme 定义
    theme: {
      "@primary-color": "#30b767", // 绿色
    }
  }
  ```

  * 在 `antd Button` 定义时，颜色并不是写死的，而是使用了 `Less` 变量

修改变量后，按钮的颜色变为了绿色：

![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883168104-3d65ce25-35df-4a3f-8642-bb70520193ff.png)

> 想要知道 `antd` 都定义了哪些变量[【可以点击参考这里】](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

### 更改全局样式

> 如果使用 `umi` 的话，有一个[【专门的文件 `global.less` 】](https://umijs.org/guide/app-structure.html#%E5%A4%8D%E6%9D%82%E5%BA%94%E7%94%A8)来让我们书写全局样式，这个文件并不会被 `CSS modules` 处理

```
.
└── src
    ├── global.less
    └── pages
        ├── css-modules-with-antd
        │   ├── index.jsx
        │   └── styles.less
        ├── css-modules-with-less
        │   ├── index.jsx
        │   └── styles.less
        ├── index.jsx
        └── styles.css
```

* 一个用途是全局性地定义 `HTML` 标签的样式，比如写入：

  ```css
  p {
    margin: 0;
  }
  ```

  * 如果此时去往 `css-modules-with-antd` 会发现上下两个按钮贴在一起了：

  ![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883177136-ed18f241-d8ff-444f-a743-c0077fc6d483.png)

  * 原因是在大多数浏览器中，默认 `p` 元素是有 `1em` 高度的 `margin-bottom`，而我们的定义覆盖了默认的样式

* 另外一个用途是全局性地覆盖第三方库的样式，比如 `antd` 中的样式

  * 我们全局覆盖 `ant-btn` 的样式，增加下面的定义：

  ```css
  .ant-btn {
    box-shadow: 0 3px 7px rgba(0, 0, 0, .5);
  }
  ```

  * 可以看到我们成功地添加了按钮阴影：

  ![图片](https://cdn.yuque.com/lark/0/2018/png/58329/1531883186174-29290847-8102-4984-ac14-8a2fd58b5926.png)

## 上传与下载

* 实现上传：

  * 使用 `fetch` 上传

  * 使用 `antd` 的 `Upload` 组件进行上传

* 实现下载

  * 使用 `a` 标签实现文件下载

  * 使用 `fetch` 实现文件下载（模拟 `a` 标签的下载过程）

### 使用 `fetch` 上传

利用一个 `input` 标签外加 `fetch` 函数就可以实现最简单的文件上传

```js
var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
```

[【代码参考：点击查看】](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Uploading_a_file)

### 使用 `antd` 的 `Upload` 组件进行上传

比起直接手写上传代码，更加推荐使用 `antd` 的 `Upload` 组件：封装度高，同时具备丰富的交互效果

```js
import { Upload, message, Button, Icon } from 'antd';

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

ReactDOM.render(
  <Upload {...props}>
    <Button>
      <Icon type="upload" /> Click to Upload
    </Button>
  </Upload>,
  mountNode);
```

![图片](https://gw.alipayobjects.com/zos/rmsportal/tenzSUILihvLhWxzDWLL.png)

* `Upload` 组件内置了自己的 `HTTP` 请求类库，你也可以[【使用 `customRequest` 属性】](https://ant.design/components/upload-cn/#customRequest)自定义上传过程

### 使用 `a` 标签实现文件下载

只要一个 a 标签，就可以实现文件下载：

```html
<a href="http://somehost/somefile.zip" download="filename.zip">Download file</a>
```

* href: 下载地址

* download: 文件名

### 使用 `fetch` 实现文件下载

这个过程其实就是使用 `fetch` 去模拟 `a` 标签的下载过程：

```js
fetch('http://somehost/somefile.zip').then(res => res.blob()).then(blob => {
    var a = document.createElement('a');
    var url = window.URL.createObjectURL(blob);
    var filename = 'myfile.zip';
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}))
```

* 第一步，`fetch` 一个接口获取其内容并转成 `blob` 对象

* 第二步，将 `blob` 对象使用 `createObjectURL` 方法转化成 `ObjectURL` ，等同于一个下载地址链接

* 第三步，创建一个 `a` 标签，并赋予 `ObjectURL` 且执行一次 `click`

* 第四步，通过 `revokeObjectURL` 回收 `ObjectURL`

> [【如何用 `JavaScript` 下载文件】](https://scarletsky.github.io/2016/07/03/download-file-using-javascript/)

## 国际化

> 国际化是我们在项目中经常遇到的需求，在 `React` 的项目中实现国际化并不难

### 基本思路

我们在初始化项目时写的 hello world 的例子：

```js
export default () => {
  return <div>hello world</div>;
}
```

要实现这个最简单页面的国际化那么其实只要能够将代码中的 `hello world` 替换为能够按照当前语言环境变化的变量即可：

```js
const lang = window.navigator.language;

export default () => {
  const helloworld = lang === 'en-US' ? 'hello world' : '你好';
  return <div>{helloworld}</div>;
}
```

* 按照上面的代码，当 `lang` 不同时，`{helloworld}` 对应的实际的内容也会变得不一样

  * 在你的课程代码中尝试一下，你会得到中文的 `你好`

> 从这个例子其实可以看到，基于 `React` 开发的项目要实现国际化其实并不困难

* 只要你将你项目中原本写死的所有文案都替换成为能够按照语言环境而变化的变量即可

* 基于 `antd` 开发的项目国际化可以分为两部分：

  * 第一部分是 `antd` 组件的国际化，比如下图所示的 `DatePicker` 组件中的中文部分

    ![图片](https://cdn.nlark.com/lark/0/2018/png/46271/1533020031930-644f2c58-cc42-4c0d-ae74-9f3ac8fd10c8.png)

  * 第二部分是项目中自己开发的业务组件（页面）的国际化

> 接下来我们会对这两部分分别做介绍

### `antd` 的国际化

> 在 `antd` 中，提供了一个 `LocaleProvider` 组件，该组件接受一个属性 locale，该属性为当前语言的文案

* `antd` 会通过 `react` 的 `context` 将这些信息传递给被 `LocaleProvider` 包裹的子组件，从而实现国际化

```js
// 对应课程参考代码中的 src/page/locale.js
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { DatePicker, LocaleProvider } from 'antd';

export default () => {
  return (
    <LocaleProvider locale={zhCN}>
      <DatePicker />
    </LocaleProvider>
  )
}
```

* 如上所示，`antd` 提供了一些列的内置的语言资源，他们的位置在 `antd/lib/locale-provider/*`

  * 我们直接使用它们作为 LocaleProvider 的 locale 属性

> `LocaleProvider` 组件中定义了 `getChildContext` ，它会将相关的国际化语言信息挂载到 `context.antLocale` 中，这样在它的子组件中被包含的 `antd` 组件就能够通过 `context` 获取到对应的国际化数据了

> 注：`antd` 内部使用的 `context` 特性是原有的 `React` 版本的特性，在未来将会迁移到新的 `API` ，不过这对于 `antd` 的使用者来说是不需要关心的

### 业务组件的国际化

> 除了组件的国际化以外，你可能还需要将你自己书写的业务组件进行国际化，推荐使用 `react-intl` 来作为国际化方案

* 首先需要使用下面的命令来安装 `react-intl` ：

  * `cnpm install react-intl --save`

  * `react-intl` 的国际化方案和 `antd` 其实是类似的，它提供了一个 `IntlProvider` 组件，你可以把你的业务代码包装在这个组件中

  * 然后就可以通过它提供的方法，在自己的业务组件里便利地实现国际化

* 我们继续基于上面创建的代码添加相关内容，如下面代码所示：

  ```js
  // 对应课程参考代码中的 src/page/locale.js
  import zhCN from 'antd/lib/locale-provider/zh_CN';
  import { DatePicker, LocaleProvider } from 'antd';
  import {
    FormattedMessage,
    IntlProvider,
    addLocaleData,
  } from 'react-intl';
  import zhData from 'react-intl/locale-data/zh';

  const messages = {
    'helloworld': '你好',
  };

  addLocaleData(zhData);

  export default () => {
    return (
      <IntlProvider locale="zh" messages={messages}>
        <LocaleProvider locale={zhCN}>
          <div>
            <DatePicker />
            <FormattedMessage id="helloworld" />
          </div>
        </LocaleProvider>
      </IntlProvider>
    )
  }
  ```

  * 通过 `FormattedMessage` 组件，`react-intl` 会按照你传给这个组件的 `id` 找到当前对应语言的实际内容

  * 上面的例子中，页面最终会显示 `你好`

  * 你可以通过修改 `IntlProvider` 的属性 `messages` 的内容来切换页面中要显示的语言

> 除此之外还有一个 `locale` 属性，和 `addLocaleData` 方法

* 它们是用于指定 `react-intl` 中的一些非特殊场景的国际化资源的，比如 `react-intl` 提供的 `FormattedTime`

* 关于 `react-intl` 的更多 `API` 你可以[【参考它的文档】](https://github.com/yahoo/react-intl/wiki)

### 在 `umi` 中使用

> 在 `umi` 中，为了方便开发者更方便的使用，对 `react-intl` 和 `antd` 进行了封装

* 初始化配置

  * 在 `umi` 中，你可以通过在插件集 `umi-plugin-react` 中配置 `locale` 打开 `umi-plugin-locale` 插件

  ```js
  export default {
    plugins: [
      ['umi-plugin-react', {
        antd: true,
        dva: true,
        locale: {
          enable: true,
        },
      }],
    ],
    // ...
  }
  ```

  * 之后 `umi` 会帮你在自动的通过 `LocaleProvider` 将 `antd` 的组件国际化

  * 它会按照当前浏览器的语言自动切换语言，当然你也可以通过配置关闭自动选择语言的功能，通过它提供的 `API` 设置语言

  * 另外，它约定了 `locale` 目录作为业务相关资源的存放路径

  * 具体 `locale` 的配置详情和 `API` 参考[【相关文档】](https://github.com/umijs/umi-plugin-locale#usage)

* 业务组件国际化

  * 以 `hello world` 为例子，添加上一步的配置后，我们在 `src` 目录下新建 `locale` 文件夹，并新建 `zh-CN.js` 和 `en-US.js` 两个文件：

    ```js
    // src/locale/zh-CN.js
    export default {
      helloworld: '你好',
    }
    ```

    ```js
    // src/locale/en-US.js
    export default {
      helloworld: 'hello world',
    }
    ```

  * 然后修改 `HelloWorld.js` 为：

    ```js
    import {
      FormattedMessage,
    } from 'umi/locale';
    // src/page/HelloWorld.js
    export default () => {
      return <div><FormattedMessage id="helloworld" /></div>;
    }
    ```

  * 某些情况下你可能需要在 `js` 逻辑中拿到相关文案而不是在 JSX 中通过 `FormattedMessage` 组件使用，那么你可以使用 `formatMessage` ：

    ```js
    import {
      formatMessage,
    } from 'umi/locale';

    console.log(formatMessage(
      {
        id: 'helloworld',
      },
    ));
    ```

* 切换语言

  * 我们通过 `IntlProvider` 和 `LocaleProvider` 的属性（ `locale` 和 `messages` ）可以指定当前应用的语言，同样的通过修改我们传递给它们的属性来实现语言的切换

    * 同时为了更好的用户体验，我们应该保存用户当前选择的语言，以至于用户刷新页面之后不会丢失之前的选择

    * 你可以通过 `localStorage` 来实现

    * 当用户点击语言切换的按钮（或者下拉菜单）后，我们将用户选择的语言保存到 `localStorage` 中，同时切换语言

  * 在教程对应的代码的 `layouts/GlobalHeader.js` 文件中我们添加了一段代码：

    ```js
    <Button
      size="small"
      onClick={() => {
        this.changLang();
      }}
    >
      <FormattedMessage id="lang" />
    </Button>
    ```

  * 通过这段代码我们在应用的顶部导航栏添加了一个按钮，点击这个按钮则会调用 `changLang` 切换语言，`changLang` 的代码如下：

    ```js
    changLang() {
      const locale = getLocale();
      if (!locale || locale === 'zh-CN') {
        setLocale('en-US');
      } else {
        setLocale('zh-CN');
      }
    }
    ```

    * `getLocale` 和 `setLocale` 是 `umi/locale` 中提供的方法

    * 如果你没有用 `umi` 你也可以自己通过 `localStorage` 来实现

      * 在 `setLocale` 中我们把语言信息保存到了 `localStorage` 中，然后刷新页面

      * 刷新页面后应用会重新初始化，页面会重新渲染

      * 然后我们就可以在应用启动时通过 `getLocale` 拿到用户选择的语言并设置到 `IntlProvider` 和 `LocaleProvider` 上面

    * 当然，如果你使用了 `umi` ，你只需要调用 `setLocale` 即可，其它的操作它会帮你完成

  > 如果要追求更好的用户体验 `setLocale` 后不应该刷新页面就可以做到语言的实时切换，这部分内容我们会在后面补充完善

## `React` 的生命周期

你有没有遇到过这样的问题：

* 组件的生命周期有哪些？为什么要有生命周期函数?
* 我应该什么时候去获取后台数据? 为什么很多教程都推荐用 `componentDidMount` ？用 `componentWillMount` 会有什么问题？
* 为什么 `setState` 写在这里造成了重复渲染多次？
* `setState` 在这里写合适吗？

> 本文的生命周期讲的主要是浏览器端渲染，这是后端和全栈的主要使用方式，服务端渲染有些不一样，请注意区分，我们会在文中进行简单说明

> `Update` : 更新为 `React 16` 版本，`React 16` 由于异步渲染等特性会让之前的一些方法如 `componentWillMount` 变得不够安全高效，逐步废弃[【详见 `Legacy Methods`】](https://reactjs.org/docs/react-component.html#legacy-lifecycle-methods)

### 生命周期

> 生命周期函数说白了就是让我们在一个组件的各个阶段都提供一些钩子函数来让开发者在合适的时间点可以介入并进行一些操作

* 比如初始化( `onCreate` )的时候我们应该初始化组件相关的状态和变量，组件要销毁( `onDestrory` )时，我们应该把一些数据结构销毁掉以节约内存，防止后台任务一直运行

  * 在 `java` 类中也存在一个最常见的钩子函数 `contructor` ，你可以在这里调用 `super` 方法初始化父类，也可以在这里初始化各种变量

* 可以看下面的图建立一个 `React` 组件生命周期的直观认识，图为 `React 16` 的生命周期，总的来说 `React` 组件的生命周期分为三个部分:

  ![图片](https://cdn.yuque.com/lark/0/2018/png/5482/1528371738002-2a20482c-f375-45d0-a7e9-3492e2496b0f.png)

  * 装载期间( `Mounting` )

  * 更新期间( `Updating` )

  * 卸载期间( `Unmounting` )

  * 另有 `componentDidCatch()` 错误捕获函数

    * `React 16` 多出来一个 [【 `componentDidCatch()` 函数】](https://reactjs.org/docs/react-component.html#componentdidcatch)用于捕捉错误

> 知道什么时候去使用哪些生命周期函数对于掌握和理解 `React` 是非常重要的，你可以看到这些生命周期函数有一定的规律

* 比如在某件事情发生之前调用的会用 `xxxWillxxx`

* 而在这之后发生的会用 `xxxDidxxx`

接下来我们就这三个阶段分别介绍一下各个生命周期函数，详细的生命周期函数解释可以看[【官方文档 `React.Component`】](https://reactjs.org/docs/react-component.html)

#### `Mounting` 装载期间

组件被实例化并挂载在到 `DOM` 树这一过程称为装载，在装载期调用的生命周期函数依次为：

* constructor()

* getDerivedStateFromProps()

* render()

* componentDidMount()

> `constructor()`

构造函数：用于初始化这个组件的一些状态和操作，如果你是通过继承 `React.Component` 子类来创建 `React` 的组件的，那么你应当首先调用 `super(props)` 初始化父类

* 在 `contructor` 函数中，你可以初始化 `state` ，比如 `this.state = {xxx}` ，不要在构造函数中使用 `setState()` 函数，强行使用的话 `React` 会报错

* 其次你可以在构造函数中进行函数 `bind`

  ```js
  this.handleClick = this.handleClick.bind(this);
  ```

* 一个示例 `contructor` 实现如下:

  ```js
  constructor(props) {
    super(props);
    this.state = {
      color: '#fff'
    };

    this.handleClick = this.handleClick.bind(this);
  }
  ```

* 如果你不需要初始化状态也不需要绑定 `handle` 函数的 `this` ，那么你可以不实现 `constructor` 函数，由默认实现代替

* 关于 `bind` 函数的解释说明：

  > 注意 `js` 的 `this` 指向比较特殊，比如以下的例子作为 `onClick` 回调函数由 `button` 组件去调用的时候不会把组件类的上下文带过去

  ```js
  handleClick() {
    console.log('handleClick', this);
    // undefined
  }
  ...
  <button onClick={this.handleClick}>click</button>
  ```

  * 这种问题推荐三种可能的解决方式(其核心均为将函数的 `this` 强制绑定到组件类上) ：

    * 就是上面说的在 `constructor` 函数中显示调用 `bind`

    * 在 `onClick` 的时候进行 `bind:` ，这种方式的劣势是每次调用的时候都需要进行 `bind` ；优势是方便传参，处理函数需要传参可以参考 `React` 的[【文档 `Passing Arguments to Event Handlers` 】](https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers)

    * 声明函数时使用箭头匿名函数，箭头函数会自动设置 `this` 为当前类(简洁有效，墙裂推荐)

      ```js
      handleClick = () => {
          console.log('handleClick', this); // Component
      }
      ```

> `getDerivedStateFromProps()`

这个函数会在 `render` 函数被调用之前调用，包括第一次的初始化组件以及后续的更新过程中，每次接收新的 `props` 之后都会返回一个对象作为新的 `state` ，返回 `null` 则说明不需要更新 `state`

* 该方法主要用来替代 `componentWillReceiveProps` 方法， `willReceiveProps` 经常被误用，导致了一些问题，因此在新版本中被标记为 `unsafe`

* [来看掘金上的一个例子](https://juejin.im/post/5abf4a09f265da237719899d)( `componentWillReceiveProps` 的常见用法如下，根据传进来的属性值判断是否要 `load` 新的数据)：

  ```js
  class ExampleComponent extends React.Component {
    state = {
      isScrollingDown: false,
    };

    componentWillReceiveProps(nextProps) {
      if (this.props.currentRow !== nextProps.currentRow) {
        // 检测到变化后更新状态、并请求数据
        this.setState({
          isScrollingDown: nextProps.currentRow > this.props.currentRow,
        });
        this.loadAsyncData()
      }
    }

    loadAsyncData() {/* ... */}
  }
  ```

  * 但这个方法的一个问题是外部组件多次频繁更新传入多次不同的 `props` ，而该组件将这些更新 `batch` 后仅仅触发单次自己的更新，这种写法会导致不必要的异步请求

  * 相比下来 `getDerivedStateFromProps` 配合 `componentDidUpdate` 的写法只在更新触发后请求数据，更节省资源：

    ```js
    class ExampleComponent extends React.Component {
      state = {
        isScrollingDown: false,
        lastRow: null,
      };

      static getDerivedStateFromProps(nextProps, prevState) {
        // 不再提供 prevProps 的获取方式
        if (nextProps.currentRow !== prevState.lastRow) {
          return {
            isScrollingDown: nextProps.currentRow > prevState.lastRow,
            lastRow: nextProps.currentRow,
          };
        }

        // 默认不改动 state
        return null;
      }

      componentDidUpdate() {
        // 仅在更新触发后请求数据
        this.loadAsyncData()
      }

      loadAsyncData() {/* ... */}
    }
    ```

* 注意： `getDerivedStateFromProps` 是一个 `static` 方法，意味着拿不到实例的 `this`

> `render()`

该方法在一个 `React` 组件中是必须实现的，你可以看成是一个 `java interface` 的接口

* 这是 `React` 组件的核心方法，用于根据状态 `state` 和属性 `props` 渲染一个 `React` 组件

* 我们应该保持该方法的纯洁性，这会让我们的组件更易于理解：

  * 只要 `state` 和 `props` 不变，每次调用 `render` 返回的结果应当相同

  * 所以请不要在 `render` 方法中改变组件状态，也不要在在这个方法中和浏览器直接交互

* 如果你React如何使用render方法原理不太了解，可以阅读[文章《当React来敲门》](https://lark.alipay.com/afx-es/ffb/react-intro)

> `componentDidMount()`

`componentDidMount` 方法会在 `render` 方法之后立即被调用，该方法在整个 `React` 生命周期中只会被调用一次

* `React` 的组件树是一个树形结构，此时你可以认为这个组件以及他下面的所有子组件都已经渲染完了，所以在这个方法中你可以调用和真实 `DOM` 相关的操作了

* 有些组件的启动工作是依赖 `DOM` 的，例如动画的启动，而 `componentWillMount` 的时候组件还没挂载完成，所以没法进行这些启动工作，这时候就可以把这些操作放在 `componentDidMount` 当中

* 我们推荐可以在这个函数中发送异步请求，在回调函数中调用 `setState()` 设置 `state` ，等数据到达后触发重新渲染

* 注意：尽量不要在这个函数中直接调用 `setState()` 设置状态，这会触发一次额外的重新渲染，可能造成性能问题

* 下面的代码演示了如何在 `componentDidMount` 加载数据并设置状态：

  ```js
  componentDidMount() {
    console.log('componentDidMount');
    fetch("https://api.github.com/search/repositories?q=language:java&sort=stars")
    .then(res => res.json())
    .then((result) => {
      // 触发render
      this.setState({
        items: result.items
      });
    })
    .catch((error) => { console.log(error)});

    // 不要这样做
    // this.setState({color: xxx})
  }
  ```

#### `Updating` 更新期间

当组件的状态或属性变化时会触发更新，更新过程中会依次调用以下方法：

* `getDerivedStateFromProps()` 上文已描述，不赘述

* `componentWillUpdate()`

* `render()`

* `getSnapshotBeforeUpdate()`

* `componentDidUpdate()`

> `shouldComponentUpdate(nextProps, nextState)`

你可以用这个方法来告诉 `React` 是否要进行下一次 `render()` ，默认这个函数放回 `true` ，即每次更新状态和属性的时候都进行组件更新

* 注意这个函数如果返回 `false` 并不会导致子组件也不更新

* 这个钩子函数一般不需要实现

* 如果你的组件性能比较差或者渲染比较耗时，你可以考虑使 `React.PureComponent` 重新实现该组件，`PureComponent` 默认实现了一个版本的 `shouldComponentUpdate` 会进行 `state` 和 `props` 的比较

* 当然如果你有自信，可以自己实现比较 `nextProps` 和 `nextState` 是否发生了改变

  > 该函数通常是优化性能的紧急出口，是个大招，不要轻易用，如果要用可以[【参考 `Immutable` 详解及 `React` 中实践】](https://github.com/camsong/blog/issues/3)

> `getSnapshotBeforeUpdate()`

该方法的触发时间为 `update` 发生的时候，在 `render` 之后 `dom` 渲染之前返回一个值，作为 `componentDidUpdate` 的第三个参数

* 该函数与 `componentDidUpdate` 一起使用可以取代 `componentWillUpdate` 的所有功能，比如以下是官方的例子：

```js
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list? - 我们是否在列表中添加新项目？
    // Capture the scroll position so we can adjust scroll later. - 捕获滚动位置，以便稍后调整滚动
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items. - 如果我们有快照值，我们就添加了新项目
    // Adjust scroll so these new items don't push the old ones out of view. - 调整滚动条，使这些新项目不会将旧项目从视图中推出
    // (snapshot here is the value returned from getSnapshotBeforeUpdate) - snapshot 是从getSnapshotBeforeUpdate 这里返回的值
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```

> `componentDidUpdate(prevProps, prevState, snapshot)`

该方法会在更新完成后被立即调用，你可以在这个方法中进行 `DOM` 操作，或者做一些异步调用

* 这个和首次装载过程后调用 `componentDidMount` 是类似的，不一样的是你可能需要判断下属性是否变化了再发起网络请求：

```js
componentDidUpdate(prevProps) {
  // 来自网络
  if(prevProps.myProps !== this.props.myProp) {
    // this.props.myProp has a different value - this.props.myprop 的值不同
    // we can perform any operations that would - 我们可以执行任何可能
    // need the new value and/or cause side-effects - 需要新的 value 和 side-effects
    // like AJAX calls with the new value (this.props.myProp) - 就像Ajax用新值调用一样 this.props.myProp
  }
}
```

#### `Unmounting` 卸载期间

卸载期间是指组件被从 `DOM` 树中移除时，调用的相关方法为:

* `componentWillUnmount()`

> componentWillUnmount()

该方法会在组件被卸载之前被调用，你可以在这个函数中进行相关清理工作，比如删除定时器：

```js
componentWillUnmount() {
  console.log('componentWillUnmount');

  // 清除timer
  clearInterval(this.timerID1);
  clearTimeout(this.timerID2);

  // 关闭socket
  this.myWebsocket.close();

  // 取消消息订阅...
}
```

#### 错误捕获

React16中新增了一个生命周期函数:

* `componentDidCatch()`

> `componentDidCatch(error, info)`

在 `react` 组件中如果产生的错误没有被被捕获会被抛给上层组件

* 如果上层也不处理的话就会抛到顶层导致浏览器白屏错误

* 在 `React16` 中我们可以实现这个方法来捕获子组件产生的错误

* 然后在父组件中妥善处理，比如搞个弹层通知用户网页崩溃等

* 在这个函数中请只进行错误恢复相关的处理，不要做其他流程控制方面的操作

```js
componentDidCatch(error, info) {
  // 来自 react.org

  // Display fallback UI - 显示回退用户界面
  this.setState({ hasError: true });
  // You can also log the error to an error reporting service - 您还可以将错误记录到错误报告服务

  logErrorToMyService(error, info);
}
```

### React16中的生命周期函数变化

`componentWillMount` 、`componentWillUpdate` 、`componentWillReceiveProps` 等生命周期方法在下个主版本中会被废弃？

* 根据这份[【 RFC 】](https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md)，是的，这些生命周期方法被认为是不安全的

* 在 `React16` 中被重命名为 `UNSAFE_componentWillMount` 、`UNSAFE_componentWillUpdate` 、`UNSAFE_componentWillReceiveProps` ，而在更下个大版本中他们会被废弃

* [详见 React 16.3版本发布公告](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)

### 常用的生命周期函数

总结一下，以上讲的这些生命周期都有自己存在的意义，但在 `React` 使用过程中我们最常用到的生命周期函数是如下几个：

* `constructor` 初始化状态，进行函数绑定

* `componentDidMount` 进行 `DOM` 操作，进行异步调用初始化页面

* `componentWillReceiveProps` 根据 `props` 更新状态

* `componentWillUnmount` 清理组件定时器，网络请求或者相关订阅等

## 权限

> 对于权限控制，首先需要明白一点：`权限的真正控制都必须是在服务端负责的`

### 前端跟后端关系

> 权限控制，本质是控制的用户对于 API 的操作权限

* 举一个例子，如果非管理员没有点击某个按钮执行某个操作的权限，那么如果仅仅是前端把这个按钮隐藏是无法做到真正的权限控制的

  * 因为理论上用户可以直接发送一个接口请求服务端来完成这个操作

  * 真正的权限验证应该放在服务端，这样哪怕用户绕过前端的限制请求了后端的接口也无法真正的完成操作

* 所以对于前端来说，权限控制只是从 `UI` 层面告诉用户他有哪些权限和没有哪些权限

  * 比如说隐藏某个按钮或者展示某些提示性的文字

  * 这里说的权限，更多的是前端的 `UI` 控制

### 请求接口

从前端发出的请求，`cookie` 会带到后端，后端可能会做一个权限判断，比如要是这个请求是没有的权限的，后端可能会返回 `302` ，也可能会返回 `200` ，在返回中带上没有权限的信息

```js
{
  "success": false,
  "code": "NOT_AUTH"
}
```

> 对于 `spa` 应用，很多都是前端通过 `ajax` 请求后端 `http` 接口

* 要是后端返回 `302` 到一个 `text/html` 页面，那前端只能拿到这个页面的 `response` ，另外要是 `302` 到了一个跨域的 `url` ，前端根本拿不到返回值而是报错

* 因为前端请求 `ajax` 不能获得 `302` 这个状态，所以对于 `ajax` 没有权限，后端最好的做法是返回 `200` ，带上错误信息，就像之前的代码

### 权限控制

有不少的方式可表示用户权限，比如，后台返回一个用户的 `权限码数组` ：

```js
{
  "auth": ["1", "2", "18", "20"]
}
```

* 表示用户有 `1` `2` `18` `20` 的权限

* 是一种比较简单方便的做法，后台通过权限中心获得用户的权限，再返回给前端

* 当前端获得了用户权限，那对于 `ui` 控制就简单了

```js
// example 1
if (auth.includes("2") && auth.includes("3")) {
  return <Button>用户要有权限 2 and 3 才能看到按钮</Button>;
}
return null;

// example 2
if (auth.includes("1") || auth.includes("18")) {
  return <Button>用户要有权限 1 or 18 </Button>;
}
return null;
```

> 而对于路由，其实也是相同的方式，对于 `react-router4` ，路由也是一个组件，所以方式跟之前相同，只是 `Button` 换成了 `Route`

## 单元测试

> 单元测试（ `unit testing` ），是指对软件中的最小可测试单元进行检查和验证

* 对于单元测试中单元的含义，一般来说，要根据实际情况去判定其具体含义

### 认识单元测试

在 `web` 前端领域，单元测试通常包括：

* 对某个 `js` 的方法进行测试，对某个组件进行测试

  * 除了单元测试，前端经常会有端到端测试

  * 相对于端到端测试来说，单元测试编写更复杂

  * 但是完整的单元测试的样例能够覆盖更多端到端测试覆盖不到的点，对于前端代码通常比较关键的模块可以通过添加单元测试来规避后续修改或者重构带来的风险

  * 单元测试样例的编写过程也有助于进一步审视模块的功能

* 单元测试适用于功能不会经常改动的工具方法模块和一些基础的公共组件，对于会经常在快速迭代中更新的业务组件和功能模块端到端的测试会更适合，但这并不是说不需要写单元测试

  * 这其实是一个投入和产出比的一个权衡，编写单元测试可能会需要频繁的更新测试样例，对于部分业务尤其是中后台的应用来说成本是偏高的

### 前端怎么做单测

* 在 `React` 诞生之前，前端的单元测试往往只能针对于一些纯粹的 `js` 模块

  * 由于对浏览器环境的依赖，很难去做涉及到 `dom` 操作的模块的单元测试

  * 但是对于前端来说，大部分代码其实都是 `UI` 组件，这就导致长期以来前端的代码甚至一些开源的被应用得很广泛的 `UI` 组件库都缺乏完整的单元测试

* 但是 `React` 的诞生伴随着虚拟 `dom` 被发明，这使得前端组件的测试变得更方便了

  * 虚拟 `dom` 使得一个组件可以脱离真实的浏览器环境模拟 `dom` 的相关操作

  * 我们可以通过测试虚拟 `dom` 的表现是否正常来测试组件的逻辑，让编写组件的测试能够脱离对浏览器 `dom` 环境的依赖

### 使用 `jest`

> 在 `umi` 中，内置了 `jest` 作为单元测试的库，接下来我们会介绍如何使用 `jest` 对 `js` 方法或者组件进行测试

* 执行 `umi test` 会匹配所有 `.test.js` 结尾的文件运行

* 通常我们约定把测试的代码统一放到 `test` 文件夹下，当然你也可以按照你的习惯组织，比如可以和测试对应的模块放到一起

#### 配置 `jest`

* `jest` 是 `Facebook` 推出的一个开源的测试框架，它有它自己的配置

  * 它约定了它的配置可以在 `package.json` 中，也可以在项目根目录的 `jest.config.js` 中

  * 在该课程中我们以 `jest.config.js` 来做示例，它是 `jest` 的默认配置文件，当然你也可以 `jest` 提供的方式指定配置文件，可以参考 `jest` 的配置文档

* 我们在项目的根目录下添加一个 `jest.config.js` ，并填上内容如下：

```js
// 需要注意的是这里不能使用 export default 这样的 ES6 的语法
// 因为它是被 jest 直接读取的，不会被 umi 编译
module.exports = {
  testURL: 'http://localhost:7001',
}
```

  * 其实 `jest` 的配置不是必须的，在下面的示例中的第一个示例 `测试一个方法` 中其实是不需要的

  * 但是在 `测试一个组件` 中因为我们引入了 `enzyme` 来测试组件

    * 最新版的 `enzyme` 依赖浏览器的 `localStorage` 等环境，而 `jest` 中 `testURL` 的默认值是 `about:blank` ，这样会导致运行时报错，设置了 `testURL` 为一个有效的 `URL` 后能够避免这个问题

    * 当然不一定必须是 `http://localhost:7001` ，只要是合法的 `URL` 地址即可

    * 不过这不意味着 `testURL` 是没有意义的，实际上 `testURL` 还有其他作用，你可以[参考它的文档说明查看具体内容](https://jestjs.io/docs/en/22.1/configuration#testurl-string)

#### 测试一个方法

`jest` 在执行测试文件的时候会默认注入一些方法，对于最简单的测试，你只需要了解 `test` 和 `expect` 这两个方法即可

* `test` 方法接收两个参数

  * 第一个是测试描述

  * 第二个是一个函数，它包裹了一个测试样例

* 在这个样例中你可以调用 `expect` 方法检测你的代码

* 比如，我们新建一个 `test/helloworld.test.js` 的文件，然后写上如下的内容：

```js
const sum = function (a, b) {
  return a + b;
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

* 在 `package.json` 中添加 `scripts.test` 为 `umi test` ，然后运行 `cnpm run test`

  * 接下来你就能看到如下的结果：

  ![图片](https://cdn.yuque.com/lark/0/2018/png/46271/1531992781171-2a24740f-d4a0-4241-bd2c-57793c7dcf82.png)

#### 测试一个组件

接下来我们尝试测试一个最简单的组件，首先我们在 `src/component` 下面新建一个 `TestDemo.js` 的组件，组件内容如下：

```js
export default () => {
  return <div>test</div>;
};
```

* 然后我们在 `test/helloworld.test.js` 中添加对它的测试

  * 在这之前你需要先安装 `测试一个组件` 包，它是针对 `React` 的测试工具库，使得我们可以很方便的利用 `React` 虚拟 `dom` 来编写测试样例

  * `cnpm i --save-dev enzyme enzyme-adapter-react-16`

* 然后添加如下的测试样例：

  ```js
  import { mount } from 'enzyme';
  import TestDemo from '../src/component/TestDemo';

  test('TestDemo', () => {
    const wrapper = mount(<TestDemo />);
    expect(wrapper.find('div').text()).toBe('test');
  });
  ```

* 然后运行 `cnpm run test` 就可以看到结果了

* `enzyme` 提供了大量的方法可以让你能够测试组件中的内容，更多信息可以[【参考 `enzyme` 的官网】](http://airbnb.io/enzyme/)

## 使用 `TypeScript`

### 什么是 `TypeScript`

> `TypeScript` 简称 `TS` ，是微软开发的 `javascript` 加强版，顾名思义就是带了 `type` 的 `javascript`

* 它的很多特性可以帮助我们写出更加健壮的代码，弥补 `javascript` 在开发大型项目时的先天不足

* `TypeScript` 允许你以 `接口` 的形式定义复杂的类型

  * 当你要在应用程序中使用复杂的 `对象` 或 `数组`（例如包含其他属性的对象）时，会进行严格的静态类型审查，增加健壮性

### 开始一个 `demo`

在 `umi` 中内置了 `TypeScript` 的 `Loader` ，你可以直接新建 `.tsx` 或者 `.ts` 文件来写 `TypeScript` 代码[【demo 地址】](http://gitlab.alipay-inc.com/bigfish/course-demo-bigfish/blob/master/src/page/tsdemo.tsx)

* 首先我们安装依赖包

  * `cnpm install tslint tslint-config-prettier tslint-react @types/react @types/react-dom --save`

* 然后我们需要新建 `tsconfig.json` 和 `tslint.json` 文件，`tsconfig.json` 来声明这是一个 `TypeScript` 项目，并且进行配置

  * [详细配置可以参考官网](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

  ```js
  {
    "compilerOptions": {
      "outDir": "build/dist",
      "module": "esnext",
      "target": "es2016",
      "lib": ["es6", "dom"],
      "sourceMap": true,
      "jsx": "react",
      "allowSyntheticDefaultImports": true,
      "moduleResolution": "node",
      "rootDir": "src",
      "forceConsistentCasingInFileNames": true,
      "noImplicitReturns": true,
      "suppressImplicitAnyIndexErrors": true,
      "noUnusedLocals": true,
      "experimentalDecorators": true
    },
    "exclude": [
      "node_modules",
      "build",
      "scripts",
      "acceptance-tests",
      "webpack",
      "jest",
      "src/setupTests.ts",
      "tslint:latest",
      "tslint-config-prettier"
    ]
  }
  ```

* `tslint` 类似 `eslint` 是一个代码风格检查器，`tslint.json` 我们可以直接使用如下配置：

  ```js
  {
    "extends": ["tslint:latest", "tslint-react", "tslint-config-prettier"],
    "rules": {
      "no-var-requires": false,
      "no-submodule-imports": false,
      "object-literal-sort-keys": false,
      "jsx-no-lambda": false,
      "no-implicit-dependencies": false
    }
  }
  ```

  * 为了增加使用体验，建议一并安装 `vscode tslint` 插件

> 我们可以先做一个简单的 `demo` 来感受一下 `TypeScript` 的魅力

* 首先在 `src/page` 新建一个 `Demo.tsx.`
在其中定义一个无状态组件 `Hello`

  ```js
  import React from 'react';

  const Hello = ({ name }) => <div>Hello,{name}</div>;
  ```

* 接下来我们使用它

  ```js
  const App = () => <Hello />;

  export default App;
  ```

  * 我们发现他抛出了如下错误：

    * 不能将类型 `{}` 分配给类型 `{ name: any; }`

    * 类型 `{}` 中缺少属性 `name`

  * 因为我们使用了 `name` ，`Typescript` 认为他是必填参数

    * 如果不存在便认为程序错误，并造成编译失败

    * 这可以帮助我们避免很多低级错误

* 我们还可以将 `name` 使用 `SFC` 进一步约束，规定 `name` 为 `string` 类型，来增加健壮性

  ```js
  const Hello: React.SFC<{ name: string }> = ({ name }) => (
    <div>Hello,{name}</div>
  );
  ```

* 我们也可以使用 `Class` 语法来声明组件，代码如下：

  ```js
  class Message extends React.Component<{
    message: string;
  }> {
    public render() {
      return <div>{this.props.message}</div>;
    }
  }
  ```

* 我们可以通过 `<>` 的第一个参数来指定 `props` 的类型，通过第二个参数来指定 `state` 的类型，代码如下：

  ```js
  class Message extends React.Component<
    {
      message: string;
    },
    {
      count: number;
    }
  > {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    public render() {
      return (
        <div>
          {this.props.message}
          {this.state.count}
        </div>
      );
    }
  }
  ```

  * 在这里，我们定义了一个包含 `count` 的 `state` `，count` 的类型为 `number`

  * 然后在类 `constructor` 内部初始化 `state`

  * 其余使用方式与 `javascript` 中相同

* 我们可以自行修改 `count` ：

  ```js
  public increment = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };
  ```

  * 并且将其绑定到 `dom` 上：

    ```js
    public render() {
      return (
        <div onClick = {this.increment}>
          {this.props.message}
          {this.state.count}
        </div>
      );
    }
    ```

* 使用 `Message` 组件：

  ```js
  const App = () => <Message message="点击"/>;

  export default App;
  ```

# `Ant Design` 学习要求

## 你需要了解的 `ES6` 语法

> `ES6` 是下一代 `JavaScript` 语法标准，比起 `ES5` 有很大的变化

* 标准委员会每年发布一次当年度的新标准，目前最新的标准是`《ES2018 标准》`，因此 `ES6` 是一个动态的标准，每年都会发生一些变化

* `React` 大量使用 `ES6` 语法，本文介绍其中一些最重要的语法点

* [完整的 ES6 介绍请参考](http://es6.ruanyifeng.com/)

### `let` 和 `const`

> `let` 和 `const` 命令用于声明变量

* `let` 声明的变量是可变的，`const` 声明的变量是不可变的

  ```js
  let foo = 1;
  foo = 2;

  const bar = 1;
  bar = 2; // 报错
  ```

  * 上面代码中，`let` 声明的变量 `foo` 是可以重新赋值，但是如果对 `bar` 声明的变量重新赋值，就会报错

> 注意，如果 `const` 声明的变量指向一个对象，那么该对象的属性是可变的

```js
const foo = {
  bar: 1
};

foo.bar = 2;
```

* 上面代码中，变量 `foo` 本身是不可变的，即 `foo` 不能指向另一个对象

  * 但是，对象内部的属性是可变的，这是因为这时 `foo` 保存的是一个指针，这个指针本身不可变，但它指向的对象本身是可变的

### 解构赋值

`ES6` 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（ `Destructuring` ）

```js
let [a, b, c] = [1, 2, 3];
```

* 上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值

* 解构赋值不仅可以用于数组，还可以用于对象

  ```js
  let { foo, bar } = { foo: "aaa", bar: "bbb" };
  foo // "aaa"
  bar // "bbb"
  ```

  * 解构赋值时，还可以设置默认值

    ```js
    let [x, y = 'b'] = ['a']; // x='a', y='b'
    ```

    * 上面代码中，变量 `y` 解构赋值时没有取到值，所以默认值就生效了

### 对象的简洁表示法

`ES6` 允许直接写入变量和函数，作为对象的属性和方法，这样的书写更加简洁

```js
const foo = 'bar';
const baz = { foo };
baz // {foo: "bar"}
```

除了属性简写，方法也可以简写

```js
const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
};
```

### 箭头函数

`ES6` 允许使用箭头 `=>` 定义函数

```js
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};
```

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分

```js
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用 `return` 语句返回

```js
var sum = (num1, num2) => { return num1 + num2; }
```

### rest 参数

`ES6` 引入 `rest` 参数（形式为 `...` 变量名），用于获取函数的多余参数，这样就不需要使用 `arguments` 对象了

```js
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3)
// 10
```

* 上面代码的 `add` 函数是一个求和函数，利用 `rest` 参数，可以向该函数传入任意数目的参数

### 扩展运算符

扩展运算符 `spread` 是三个点 `...` ，它好比 `rest` 参数的逆运算，将一个数组转为用逗号分隔的参数序列

```js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
```

对象也可以使用扩展运算符

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
```

### `class` 类

`ES6` 允许新建类 `class`

```js
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  get boneCount() {
    return this.bones.length;
  }
  set matrixType(matrixType) {
    this.idMatrix = SkinnedMesh[matrixType]();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

* 上面是一个类的定义：

* `constructor()` 构造函数，新建实例的时候，自动调用这个方法

* `extends` 第一行的 `extends` 关键字表示继承某个父类

* `super` 子类方法里面的 `super` 指代父类

* `get()` 是取值器，读取该方法定义的属性时，会自动执行指定的代码

* `set()` 是赋值器，赋值该方法定义的属性时，会自动执行指定的代码

* `static` 方法前面加上static关键字，表示该方法是静态方法，定义在类上面，而不是定义在实例对象上面，以上面为例，就是SkinnedMesh.defaultMatrix()这样调用

定义了类以后，就可以新建实例了

```js
const instance = new SkinnedMesh();
```

### `Promise` 对象

> `Promise` 是 `ES6` 引入的封装异步操作的统一接口，它返回一个对象，包含了异步操作的信息

* `Promise` 本身是一个构造函数，提供了两个方法：

  * `resolve` 方法

    * 一旦异步操作成功结束，就调用 `resolve` 方法，将 `Promise` 实例对象的状态改为 `resolved`

  * `reject` 方法

    * 一旦异步操作失败，就调用 `reject` 方法，将 `Promise` 实例的状态改成 `rejected`

```js
function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}
```

上面代码中，`timeout` 函数返回一个 `Promise` 实例，在指定时间以后，将状态改为 `resolved`

```js
var p = timeout(1000).then(() => {
  return timeout(2000);
}).then(() => {
  throw new Error("hmm");
}).catch(err => {
  return Promise.all([timeout(100), timeout(200)]);
})
```

* 一旦 `Promise` 实例的状态改变以后，就可以使用 `then()` 方法指定下面将要执行的函数，`catch()` 方法用来处理 `rejected` 状态的情况

### `module` 模块

> `ES6` 意义最重大的语法变化，就是引入了模块（ `module` ）

一个模块内部，使用 `export` 命令输出对外的接口

```js
// lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;
```

* 上面的模块输出了 `sum` 和 `pi` 两个接口

`import` 命令用于引入该模块

```js
// app.js
import * as math from "lib/math";
alert("2π = " + math.sum(math.pi, math.pi));
```

* 上面代码中，`*` 表示引入所有接口，也可以只引入指定的接口

  ```js
  // otherApp.js
  import {sum, pi} from "lib/math";
  alert("2π = " + sum(pi, pi));
  ```

## 深入理解 `umi`

> 本文介绍 `umi` 框架的一些深入概念，帮助大家理解背后的运行机制

下图是 `umi` 的架构图，我们试着从此图来一步步理解 `umi`

![图片](https://gw.alipayobjects.com/zos/rmsportal/hawpVKfSgndqDucTgjJQ.png)

### 基于路由

举个 `SPA` 的例子：

* 比如我们访问 `/users` ，会由 `./src/pages/users.js` 决定具体渲染什么

* 按我们的理解，这其中 `/users` 是路由，`./src/pages/users.js` 是路由组件，他们俩组成了一个路由配置

* 然后多个路由配置又形成了一个完整的应用

* 不难发现，在这个应用里，路由即入口

比如：

* 开发时按需编译
* 运行时按需加载，做 `code-splitting`
* 智能提取公共代码，加速用户访问，通常是被 路由数/2 引用的模块才被提取到公共代码中
* 服务端渲染
* 基于路由的埋点
* 基于约定，如果 `./src/pages/404.js` 存在则添加为 `fallback` 路由
* `...`

这里有很大的想象空间

### 从源码到上线的生命周期管理

> 市面上的框架基本都是从源码到构建产物，很少会考虑到各种发布流程，而 `umi` 则多走了这一步

下图是 `umi` 从源码到上线的一个流程：

![图片](https://gw.alipayobjects.com/zos/rmsportal/NKsqmTAttwTzYVMJMcnB.png)

* `umi` 首先会加载用户的配置和插件

* 然后基于配置或者目录，生成一份路由配置

* 再基于此路由配置，把 `JS/CSS` 源码和 `HTML` 完整地串联起来

* 用户配置的参数和插件会影响流程里的每个环节

举个例子，比如以下目录：

```
+ src
  + layouts/index.js
  + pages
    - a.js
    - b.js
    - 404.js
```

会生成路由配置如下：

```js
{
  component: 'layouts/index.js',
  routes: [
    { path: '/a', exact: true, component: 'pages/a.js' },
    { path: '/b', exact: true, component: 'pages/b.js' },
    { component: 'pages/404.js' },
  ]
}
```

以及可运行的代码：

```js
const routes = {
  component: require('layouts/index.js'),
  routes: [
    { path: '/a', exact: true, component: require('pages/a.js') },
    { path: '/b', exact: true, component: require('pages/b.js') },
    { component: require('pages/404.js') },
  ]
}

export default () =>
  <Router history={window.g_history}>
    { renderRoutes(routes) }
  </Router>
```

* 另外，`HTML` 也是一个很重要的环节，因为他才是真正的入口，`js` 和 `css` 都是在 `HTML` 里发起的

* `HTML` 在 `umi` 里是一等公民，这意味着我们可以通过插件来调整他的输出，以便和各个后台系统对接，以及打通各种发布流程

举个例子，我们要配置 `webpack externals` 调 `react` 来优化构建产物，通常我们要做两步：

* 配置 `externals: { react: 'window.React' }`

* 在 `html` 里引入文件 `https://unpkg.com/react@16.4.1/cjs/react.production.min.js`

  > 这里的问题是一个功能需要在两个地方维护并且一一对应

* 然后在 `umi` 里，由于 `HTML` 具备插件的能力，所以可以做到你只需要完成第一步

* 然后 `umi` 自动帮你做第二步

* 最后，通过 `umi` 可以把各种部署方式封装成插件，实现同一份源码，装载不同的插件，就可以部署到不同平台

  * 比如 `umi + umi-plugin-deploy-offline` 可以部署为离线包

  * 比如 `umi + umi-plugin-deploy-chair` 可以部署到 `chair` 系统

### 插件机制

关于 `umi` 的插件机制你可以阅读 `umi` 的文档[《插件开发》](https://umijs.org/zh/plugin/develop.html)来了解更多









































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































