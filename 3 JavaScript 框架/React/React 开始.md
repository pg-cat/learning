整理自[【 React 官方文档】【版本 v16.13.1 】](http://www.ruanyifeng.com/blog/2015/03/react.html)

---


![图片](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015033101.png)

# React 开始

React 是一个用于构建用户界面的 JavaScript 库

## 安装

### 在网站中添加 React

React 从一开始就被设计为逐步采用，并且你可以 **`根据需要选择性地使用 React`**

* 可能你只想在现有页面中 **`局部地添加交互性`**

* 使用 React 组件是一种不错的方式

大多数网站不是、也不需要是单页应用程序

* 通过仅仅几行代码并且无需使用构建工具，试试在你的网站的一小部分中使用 React

* 然后，你可以逐步扩展它的存在，或只将其涵盖在少数动态部件中

#### 一分钟用上 React

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

> [【下载完整示例（2KB zipped）】](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)























































































































































































































































































































































































































































































