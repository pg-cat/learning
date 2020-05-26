整理自[【 React 官方文档】【版本 v16.13.1 】](https://react.docschina.org/docs/getting-started.html)

---

![图片](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015033101.png)

<!-- TOC -->

- [安装](#安装)
- [在网站中添加 React](#在网站中添加-react)
  - [一分钟用上 React](#一分钟用上-react)
    - [步骤 1 ：添加一个 DOM 容器到 HTML](#步骤-1-添加一个-dom-容器到-html)
    - [步骤 2 ：添加 Script 标签](#步骤-2-添加-script-标签)
    - [步骤 3 ：创建一个 React 组件](#步骤-3-创建一个-react-组件)
  - [提示：重用一个组件](#提示重用一个组件)
  - [提示：为生产环境压缩 JavaScript 代码](#提示为生产环境压缩-javascript-代码)
  - [可选：使用 React 和 JSX](#可选使用-react-和-jsx)
    - [快速尝试 JSX](#快速尝试-jsx)
    - [将 JSX 添加到项目](#将-jsx-添加到项目)
    - [运行 JSX 预处理器](#运行-jsx-预处理器)
- [创建新的 React 应用](#创建新的-react-应用)
  - [你可能不需要工具链](#你可能不需要工具链)
  - [推荐的工具链](#推荐的工具链)
    - [Create React App](#create-react-app)
    - [Next.js](#nextjs)
    - [Gatsby](#gatsby)
    - [更灵活的工具链](#更灵活的工具链)
  - [从头开始打造工具链](#从头开始打造工具链)
- [CDN 链接](#cdn-链接)
  - [为什么要使用 crossorigin 属性？](#为什么要使用-crossorigin-属性)
- [发布渠道](#发布渠道)
  - [最新版渠道](#最新版渠道)
  - [Next 渠道](#next-渠道)
    - [使用 Next 渠道进行集成测试](#使用-next-渠道进行集成测试)
  - [实验版渠道](#实验版渠道)
    - [实验阶段发布包含哪些内容？](#实验阶段发布包含哪些内容)
    - [如何了解有关实验功能的更多信息？](#如何了解有关实验功能的更多信息)
- [核心概念](#核心概念)
- [Hello World](#hello-world)
  - [如何阅读本指南](#如何阅读本指南)
  - [预备知识](#预备知识)
- [JSX 简介](#jsx-简介)
  - [为什么使用 JSX ？](#为什么使用-jsx-)
  - [在 JSX 中嵌入表达式](#在-jsx-中嵌入表达式)

<!-- /TOC -->

## 安装

React 是一个用于构建用户界面的 JavaScript 库

## 在网站中添加 React

> 根据需要选择性地使用 React

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

> 使用集成的工具链，以实现最佳的用户和开发人员体验

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

[【 Gatsby 】](https://www.gatsbyjs.org/)是用 React 创建 **`静态网站`** 的最佳方式

* 它让你能使用 React 组件，但输出预渲染的 HTML 和 CSS 以保证最快的加载速度

* 从 Gatsby 的[【官方指南】](https://www.gatsbyjs.org/docs/)和[【入门示例集】](https://www.gatsbyjs.org/docs/gatsby-starters/)了解更多

#### 更灵活的工具链

以下工具链为 React 提供更多更具灵活性的方案

推荐给更有经验的使用者：

* [【 Neutrino 】](https://neutrinojs.org/)把[【 webpack 】](https://webpack.js.org/)的强大功能和简单预设结合在一起

  并且包括了[【 React 应用】](https://neutrinojs.org/packages/react/)和[【 React 组件】](https://neutrinojs.org/packages/react-components/)的预设

* [【 Parcel 】](https://parceljs.org/)是一个快速的、零配置的网页应用打包器，并且可以[【搭配 React 一起工作】](https://parceljs.org/recipes.html#react)

* [【 Razzle 】](https://github.com/jaredpalmer/razzle)是一个无需配置的服务端渲染框架，但它提供了比 Next.js 更多的灵活性

### 从头开始打造工具链

一组 JavaScript 构建工具链通常由这些组成：

* 一个 package 管理器，比如[【 Yarn 】](https://yarnpkg.com/)或[【 npm 】](https://www.npmjs.com/)

  它能让你充分利用庞大的第三方 package 的生态系统，并且轻松地安装或更新它们。

* 一个打包器，比如[【 webpack 】](https://webpack.js.org/)或[【 Parcel 】](https://parceljs.org/)

  它能让你编写模块化代码，并将它们组合在一起成为小的 package ，以优化加载时间。

* 一个编译器，例如[【 Babel 】](https://babeljs.io/)

  它能让你编写的新版本 JavaScript 代码，在旧版浏览器中依然能够工作

如果你倾向于从头开始打造你自己的 JavaScript 工具链，可以[【查看这个指南】](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)，它重新创建了一些 Create React App 的功能

别忘了确保你自定义的工具链[【针对生产环境进行了正确配置】](https://react.docschina.org/docs/optimizing-performance.html#use-the-production-build)

## CDN 链接

> 可以通过 CDN 获得 React 和 ReactDOM 的 UMD 版本

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

上述版本仅用于开发环境，不适合用于生产环境

压缩优化后可用于生产的 React 版本可通过如下方式引用：

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

如果需要加载指定版本的 react 和 react-dom，可以把 16 替换成所需加载的版本号

### 为什么要使用 crossorigin 属性？

如果你通过 CDN 的方式引入 React ，我们建议你设置[【 crossorigin 】](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes)属性：

```html
<script crossorigin src="..."></script>
```

我们同时建议你验证使用的 CDN 是否设置了 `Access-Control-Allow-Origin: *` HTTP 请求头：

![图片](https://react.docschina.org/static/89baed0a6540f29e954065ce04661048/13ae7/cdn-cors-header.png)

这样能在 React 16 及以上的版本中有更好的[【错误处理体验】](https://react.docschina.org/blog/2017/07/26/error-handling-in-react-16.html)

## 发布渠道

> React 依靠强大的开源社区收集 bug 报告，发起 pull request 和[【提交 RFC 】](https://github.com/reactjs/rfcs)
>> 为了鼓励大家反馈，我们打算共享一些特殊的 React 版本，其中包括未发布的功能

React 的每个发布渠道都是针对不同的用例进行设计的：

* [【最新版本】](https://react.docschina.org/docs/release-channels.html#latest-channel)用于稳定的 semver React 版本

  此版本可通过 npm 安装获取

  此渠道为目前大家已经在用的方式

  其主要用于所有面向用户的 React 应用程序

* [【 Next 版本】](https://react.docschina.org/docs/release-channels.html#next-channel)主要用于追踪 React 源码仓库的 master 分支

  我们会将其视为下一个次要版本发布的候选版本

  使用它可以进行 React 与第三方项目间的集成测试

* [【实验阶段版本】](https://react.docschina.org/docs/release-channels.html#experimental-channel)包含稳定版本中不提供的实验阶段的 API 与功能

  同时它也追踪了 master 分支，但启用了附加新功能的标志

  使用此渠道可以尝试即将发布的功能

所有版本都将发布到 npm ，但只有最新版本遵循[【语义版本控制】](https://react.docschina.org/docs/faq-versioning.html)

* 预发布版本（应用于 Next 和实验渠道的版本）会根据其内容的哈希值生成版本

* 例如，Next 的版本为 `0.0.0-1022ee0ec` ，实验版为 `0.0.0-experimental-1022ee0ec`

> 最新版是面向用户应用程序的唯一官方支持发布渠道
>> 提供 Next 和实验版本的目的是用于测试，我们并不保证功能在这两个版本中不发生变化
>> * 因为它们并不遵循用于最新版发布的 semver 协议

将预发布版本发布到与稳定版本相同的注册表，我们可以利用许多支持 npm 工作流的工具，比如：

* [【 unpkg 】](https://unpkg.com/)
* [【 CodeSandbox 】](https://codesandbox.io/)

### 最新版渠道

最新版是用于稳定 React 版本的渠道

* 它对应是 npm 中 latest 标签

* 此版本是所有交付给真实用户的 React 应用程序的推荐版本

> 如果你不确定应该使用哪个版本，那就用最新版
>> 如果你是 React 开发人员，那么这就是你正确的选择

你可以认为最新版的更新是非常稳定的

* 版本遵循语义版本控制方案

* 在[【版本政策】](https://react.docschina.org/docs/faq-versioning.html)中了解更多关于我们对稳定性和增量迁移的承诺

### Next 渠道

Next 属于预发布渠道，用于追踪 React 仓库的 master 分支

* 我们使用在 Next 渠道的预发布版本作为最新版发布渠道的候选版本

* 你可以将 Next 视为最新版的超集，它的更新频率更高

最近的 Next 版本和最近的最新版本之间的变化程度，与两个次要的 semver 版本之间的变化程度大致相同

* 但是，Next 渠道不遵循语义版本控制

* 在 Next 渠道中，你应该预期到后续的版本中偶尔会有不兼容的改动

> 不要在面向用户的应用程序中使用预发布版本

Next 渠道中的预发布版本在 npm 中携带 `next` 标签发布

* 版本号是根据其构建内容的哈希值生成的

  例如：`0.0.0-1022ee0ec`

#### 使用 Next 渠道进行集成测试

Next 渠道用于支持 React 与其他项目之间的集成测试

* React 的所有更改在发布之前都要经过大量的内部测试

* 然而，React 的整个生态系统使用了无数的环境和配置，我们不可能针对每一项进行测试

如果你是 React 第三方框架、库、开发者工具或类似基础设施项目的作者，则可以通过定期针对最新版本运行的测试用例，帮助我们一起维持 React 稳定，为你的用户和整个 React 社区保驾护航

如果你对此有兴趣，请按照下列步骤进行操作：

* 在你喜欢的持续集成平台上设置 cron job

  [【 CircleCI 】](https://circleci.com/docs/2.0/triggers/#scheduled-builds)和[【 Travis CI 】](https://docs.travis-ci.com/user/cron-jobs/)均支持 cron job

* 在 cron job 中，使用 npm 的 `next` 标签将 React 版本更新至 Next 渠道中的最新版本

  * 使用 npm cli ：

  ```sh
  npm update react@next react-dom@next
  ```

  * 或者 yarn ：

  ```sh
  yarn upgrade react@next react-dom@next
  ```

* 针对更新的 packages 运行你的测试用例

* 如果均通过，那么恭喜你！

  你的项目可以与下个小版本的 React 一起使用

* 如果发生意外中断，请通过[【提交 issus 】](https://github.com/facebook/react/issues)告知我们

Next.js 项目使用了这个工作流

* 你可以参考他们的[【 CircleCI 配置】](https://github.com/zeit/next.js/blob/c0a1c0f93966fe33edd93fb53e5fafb0dcd80a9e/.circleci/config.yml)作为示例

### 实验版渠道

与 Next 相似，实验版渠道是一个预发布渠道，用于追踪 React 仓库 master 分支

* 但不同于 Next 的是，实验版包含尚未准备好广泛推广的功能及 API

* 通常，对 Next 更新时也会对实验版本进行更新

  它们基于相同的源，但是构建时会使用不同的功能标记

* 实验阶段发布的版本可能与 Next 和最新版本的发布均不相同

  不要在面向用户的应用程序中使用实验版

  你应该能够想象到实验渠道中发布的版本会频繁进行破坏性的更新

> 实验版本会在 npm 上会以 `experimental` 标签的形式发布
>> 版本会根据构建内容的哈希值生成，例如 `0.0.0-experimental-1022ee0ec`

#### 实验阶段发布包含哪些内容？

实验阶段的功能并未打算公开发布，在最终确定之前可能会发生重大变化

* 有些实验功能可能永远不会完成

  我们进行实验的目的是为了测试变更提案的可行性

* 例如，如果我们在宣布发布 Hook 时，其已经在实验渠道中存在，我们会在最新版本发布 Hook 的前几周，将其发布到实验渠道中

* 你可能会发现在实验阶段进行集成测试是很有必要的

  但是，请注意，实验阶段版本的稳定性不如 Next 版本

  **`我们并不保证实验版本之间的稳定性`**

#### 如何了解有关实验功能的更多信息？

实验性的功能可能会有文档，也可能不会有文档

* 通常，在实验渠道的内容发布到 Next 或 Stable 中之前，才会编写文档

* 如果找不到文档，则可能会附有[【 RFC 】](https://github.com/reactjs/rfcs)说明

* 当我们准备发布新的实验内容时，我们会发布到[【 React 博客】](https://react.docschina.org/blog)中，但这并不意味着我们将公开发布每个实验的内容

> 你可以参考 Github 公开仓库的[【历史记录】](https://github.com/facebook/react/commits/master)以查看完整的变更列表

## 核心概念

## Hello World

最简易的 React 示例如下：

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

它将在页面上展示一个 `Hello, world!` 的标题

### 如何阅读本指南

在本指南中，我们将研究 React 应用程序的组成部分：元素和组件

* 一旦你掌握了它们，便可以使用这些可复用的小片段组成复杂的应用

> 提示
>> 本指南专为喜欢逐步学习概念的人士设计
> * 如果你想边学边做，请查阅我们的[【实用教程】](https://react.docschina.org/tutorial/tutorial.html)
> * 你会发现该指南与教程是相互补充的

本文是 React 核心概念分步指南的第一章

* 你可以在侧边导航栏中找到所有章节的列表

* 如果你是通过移动设备阅读此内容，你可以通过点击屏幕右下角的按钮来查看导航栏

### 预备知识

React 是一个 JavaScript 库，所以我们假设你对 JavaScript 语言已有基本的了解

* 如果你对自己的基础不自信，我们推荐[【通过 JavaScript 教程】](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)检查你的基础知识储备水平，使得你能够无压力的阅读本指南

* 这可能会花费你 30 分钟到 1 个小时的时间，但这样做的好处是你不会觉得同时在学习 React 和 JavaScript

> 注意
>> 本指南的示例中偶尔会使用一些 JavaScript 新语法
> * 如果你在过去几年中并没有使用过 JavaScript ，大多数情况下[【这三点】](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c)应该能帮到你

## JSX 简介

考虑如下变量声明：

```js
const element = <h1>Hello, world!</h1>;
```

这个有趣的标签语法既不是字符串也不是 HTML

它被称为 JSX，是一个 JavaScript 的语法扩展

* 我们建议在 React 中配合使用 JSX ，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式

* JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能

* JSX 可以生成 React **`元素`**

### 为什么使用 JSX ？

React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据

* React 并没有采用将 **`标记与逻辑进行分离到不同文件`** 这种人为地分离方式，而是通过将二者共同存放在称之为 **`组件`** 的松散耦合单元之中，来实现[【关注点分离】](https://en.wikipedia.org/wiki/Separation_of_concerns)

  如果你还没有适应在 JS 中使用标记语言，这个[【会议讨论】](https://www.youtube.com/watch?v=x7cQ3mrcKaY)应该可以说服你

React [【不强制要求】](https://react.docschina.org/docs/react-without-jsx.html)使用 JSX ，但是大多数人发现，在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用

* 它还可以使 React 显示更多有用的错误和警告消息

### 在 JSX 中嵌入表达式

在下面的例子中，我们声明了一个名为 name 的变量，然后在 JSX 中使用它，并将它包裹在大括号中：





































































































































































































































