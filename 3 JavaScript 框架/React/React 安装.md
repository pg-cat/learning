整理自[【 React 官方文档】【版本 v16.13.1 】](https://react.docschina.org/docs/getting-started.html)

---


![图片](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015033101.png)

# React 安装

React 是一个用于构建用户界面的 JavaScript 库

## 在网站中添加 React

React 从一开始就被设计为逐步采用，并且你可以 **`根据需要选择性地使用 React`**

* 可能你只想在现有页面中 **`局部地添加交互性`**

* 使用 React 组件是一种不错的方式

大多数网站不是、也不需要是单页应用程序

* 通过仅仅几行代码并且无需使用构建工具，试试在你的网站的一小部分中使用 React

* 然后，你可以逐步扩展它的存在，或只将其涵盖在少数动态部件中

### 一分钟用上 React

这一节的内容，不会涉及复杂的工具或安装需求

* 你只需要连接到网络，以及一分钟的时间

> 可选：[【下载完整示例（2KB zipped）】](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)

#### 步骤 1 ：添加一个 DOM 容器到 HTML

首先，打开你想要编辑的 HTML 页面

* 添加一个空的 `<div>` 标签作为标记你想要用 React 显示内容的位置

```html
<!-- ... 其它 HTML ... -->

<div id="like_button_container"></div>

<!-- ... 其它 HTML ... -->
```

* 我们给这个 `<div>` 加上唯一的 `id` HTML 属性

  这将允许我们稍后用 JavaScript 代码找到它，并在其中显示一个 React 组件

> 提示：你可以像这样在 `<body>` 标签内的 **`任意位置`** 放置一个 **`容器`** `<div>`
> * 根据需要，你可以在一个页面上放置多个独立的 DOM 容器
> * 它们通常是空标签（React 会替换 DOM 容器内的任何已有内容）

#### 步骤 2 ：添加 Script 标签

接下来，在 `</body>` 结束标签之前，向 HTML 页面中添加三个 `<script>` 标签：

* 前两个标签加载 React

* 第三个将加载你的组件代码

```html
  <!-- ... 其它 HTML ... -->

  <!-- 加载 React。-->
  <!-- 注意: 部署时，将 "development.js" 替换为 "production.min.js"。-->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

  <!-- 加载我们的 React 组件。-->
  <script src="like_button.js"></script>

</body>
```

#### 步骤 3 ：创建一个 React 组件

在 HTML 页面文件的同级目录下创建一个名为 `like_button.js` 的文件

* 查看[【这段入门代码】](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)并把它粘贴到你创建的文件中

> 提示：这段代码定义了一个名为 `LikeButton` 的 `React` 组件
> * 如果你还不明白这段代码的意思，不用担心
> * 我们将在后续的入门教程和核心概念中介绍 React 的构建块
>> 目前，我们先只做到显示！

* 在 `like_button.js` 的底部，在入门代码之后，加入以下两行代码：

```js
// ... 你粘贴的入门代码 ...

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
```

* 这两行代码会找到我们在 **`步骤 1`** 中添加到 HTML 里的 `<div>` ，然后在它内部显示我们的 React 组件 `Like` 按钮

就是这么简单！

没有第四步了

你刚刚已经将第一个 React 组件添加到你的网站中

> [【查看完整的示例源码】](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605)
>> [【下载完整示例（2KB zipped）】](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)

### 提示：重用一个组件

通常，你可能希望在 HTML 页面的多个位置展示 React 组件

下面是一个示例，它显示了三次 `Like` 按钮，并向各自传入了一些数据：

> [【查看完整的示例源码】](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda)
>> [【下载完整示例（2KB zipped）】](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda/archive/9d0dd0ee941fea05fd1357502e5aa348abb84c12.zip)

> 注意：当页面中以 React 驱动的不同部分是相互独立的时候，这种策略通常非常有用>> 在 React 代码中，使用[【组件组合（component composition）】](https://react.docschina.org/docs/components-and-props.html#composing-components)来实现会更容易

### 提示：为生产环境压缩 JavaScript 代码

在将你的网站部署到生产环境之前，要注意未经压缩的 JavaScript 可能会显著降低用户的访问速度

如果你已经压缩了应用代码，如果你确保已部署的 HTML 加载了以 `production.min.js` 结尾的 React 版本，那么你的网站是 **`生产就绪（production-ready）`** 的：

```html
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
```

如果你没有一个代码压缩的步骤[【这有一个配置它的方式】](https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3)

### 可选：使用 React 和 JSX

在上面的示例中，我们只依赖了浏览器原生支持的特性

这就是为什么我们使用了 JavaScript 函数调用来告诉 React 要显示什么：

```js
const e = React.createElement;

// 显示一个 "Like" <button>
return e(
  'button',
  { onClick: () => this.setState({ liked: true }) },
  'Like'
);
```

但是，React 还提供了一种用[【 JSX 】](https://react.docschina.org/docs/introducing-jsx.html)来代替实现的选择：

```js
// 显示一个 "Like" <button>
return (
  <button onClick={() => this.setState({ liked: true })}>
    Like
  </button>
);
```

这两段代码是等价的

* 虽然[【 JSX 完全是可选的】](https://react.docschina.org/docs/react-without-jsx.html)，但是多数人觉得这样编写 UI 代码更方便

* 无论是使用 React 还是其它库

> 你可以使用[【在线编译器】](https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.3)尝试 JSX

#### 快速尝试 JSX

在项目中尝试 JSX 最快的方法是在页面中添加这个 `<script>` 标签：

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

现在，你可以在任何 `<script>` 标签内使用 JSX ，方法是在为其添加 `type="text/babel"` 属性

* 这是[【一个使用了 JSX 的 HTML 文件的例子】](https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html)，你可以下载并尝试使用

> 这种方式适合于学习和创建简单的示例
> * 然而，它会使你的网站变慢，并且**` 不适用于生产环境`**

当你准备好更进一步时，删除你添加的这个新的 `<script>` 标签以及 `type="text/babel"` 属性

取而代之的，在下一小节中，你将设置一个 JSX 预处理器来自动转换所有 `<script>` 标签的内容

#### 将 JSX 添加到项目

将 JSX 添加到项目中并不需要诸如打包工具或开发服务器那样复杂的工具

* 本质上，添加 JSX 就像添加 CSS 预处理器一样

* 唯一的要求是你在计算机上安装了[【 Node.js 】](https://nodejs.org/)

在终端上跳转到你的项目文件夹，然后粘贴这两个命令：

* 步骤 1 ，执行

```sh
npm init -y
```

> [【如果失败，这是修复办法】](https://gist.github.com/gaearon/246f6380610e262f8a648e3e51cad40d)

* 步骤 2 ，执行

```sh
npm install babel-cli@6 babel-preset-react-app@3
```

> 提示：我们在这里使用 npm 只是用来安装 JSX 预处理器，之后你不再需要它
>> React 和应用程序代码都可以继续使用 `<script>` 标签而不做任何更改

恭喜！你刚刚为你的项目加入了一个 **`生产就绪（production-ready）的 JSX 配置环境`**

#### 运行 JSX 预处理器

创建一个名为 src 的文件夹并执行这个终端命令：

```sh
npx babel --watch src --out-dir . --presets react-app/prod
```

> 注意：npx 不是拼写错误
>> 它是[【 `npm 5.2+` 附带的 package 运行工具】](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
> * 如果你看到一个错误消息显示为：`“You have mistakenly installed the babel package”` ，你可能错过了[【上一步】](https://react.docschina.org/docs/add-react-to-a-website.html#add-jsx-to-a-project)
> * 在同一个文件夹中执行它，然后重试

> 不要等待它运行结束
>> 这个命令启动了一个对 JSX 的自动监听器

如果此时你用这段[【 JSX 入门代码】](https://gist.github.com/gaearon/c8e112dc74ac44aac4f673f2c39d19d1/raw/09b951c86c1bf1116af741fa4664511f2f179f0a/like_button.js)创建一个 `src/like_button.js` 文件

* 监听器会创建一个预处理过的 `like_button.js` 文件，它包含了适用于浏览器的普通 JavaScript 代码

* 当你编辑带有 JSX 的源文件时，转换过程将自动重新执行

这样，在旧浏览器上也能够使用现代 JavaScript 的语法特性，比如 `class`

> 我们刚才使用的工具叫 `Babel` ，你可以从[【它的文档】](https://babeljs.io/docs/en/babel-cli/)中了解更多

如果你认为你已经习惯了构建工具，并希望它们能为你做更多事，[【下一章节】](https://react.docschina.org/docs/create-a-new-react-app.html)描述了一些最流行和易上手的工具链

如果不使用构建工具：直接以 scripts 标签的方式也可以很好地完成工作！

## 创建新的 React 应用

本页将介绍一些流行的 React 工具链，它们有助于完成如下任务：

* 扩展文件和组件的规模

* 使用来自 npm 的第三方库

* 尽早发现常见错误

* 在开发中实时编辑 CSS 和 JS

* 优化生产输出

本页推荐的工具链无需配置即可开始使用

### 你可能不需要工具链

如果你没有碰到上述的问题，或者还不习惯使用 JavaScript 工具，可以考虑[【把 React 作为普通的 `<script>` 标记添加到 HTML 页面上】](https://react.docschina.org/docs/add-react-to-a-website.html)，以及[【使用可选的 JSX 】](https://react.docschina.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx)

这也是将 React 集成到现有网站最简单的方式

如果你认为更大的工具链有所帮助，可以随时添加！

### 推荐的工具链

React 团队主要推荐这些解决方案：

* 如果你是在学习 React 或创建一个新的[【单页】](https://react.docschina.org/docs/glossary.html#single-page-application)应用，请使用[【 Create React App 】](https://react.docschina.org/docs/create-a-new-react-app.html#create-react-app)

* 如果你是在用 Node.js 构建服务端渲染的网站，试试[【 Next.js 】](https://react.docschina.org/docs/create-a-new-react-app.html#nextjs)

* 如果你是在构建面向内容的静态网站，试试[【 Gatsby 】](https://react.docschina.org/docs/create-a-new-react-app.html#gatsby)

* 如果你是在打造组件库或将 React 集成到现有代码仓库，尝试[【更灵活的工具链】](https://react.docschina.org/docs/create-a-new-react-app.html#more-flexible-toolchains)

#### Create React App

[【 Create React App 】](https://github.com/facebookincubator/create-react-app)是一个用于学习 React 的舒适环境，也是用 React 创建新的[【单页】](https://react.docschina.org/docs/glossary.html#single-page-application)应用的最佳方式

* 它会配置你的开发环境，以便使你能够使用最新的 JavaScript 特性，提供良好的开发体验，并为生产环境优化你的应用程序

* 你需要在你的机器上安装[【 Node >= 8.10 和 npm >= 5.6 】](https://nodejs.org/en/)

要创建项目，请执行：

```sh
npx create-react-app my-app
cd my-app
npm start
```

> 注意：第一行的 npx 不是拼写错误
>> 它是[【 `npm 5.2+` 附带的 package 运行工具】](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

Create React App 不会处理后端逻辑或操纵数据库

* 它只是创建一个前端构建流水线（build pipeline），所以你可以使用它来配合任何你想使用的后端

* 它在内部使用[【 Babel 】](https://babeljs.io/)和[【 webpack 】](https://webpack.js.org/)，但你无需了解它们的任何细节

当你准备好部署到生产环境时，执行 `npm run build` 会在 `build` 文件夹内生成你应用的优化版本

* 你能从[【它的 README 】](https://github.com/facebookincubator/create-react-app#create-react-app--)和[【用户指南】](https://facebook.github.io/create-react-app/)了解 Create React App 的更多信息

#### Next.js

[【 Next.js 】](https://nextjs.org/)是一个流行的、轻量级的框架，用于配合 React 打造 **`静态化和服务端渲染应用`**

* 它包括开箱即用的 **`样式和路由方案`** ，并且假定你使用[【 Node.js 】](https://nodejs.org/)作为服务器环境。

* 从[【 Next.js 的官方指南】](https://nextjs.org/learn/)了解更多

#### Gatsby









































































































































































































































































































































































