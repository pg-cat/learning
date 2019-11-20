整理自[【 Electron 官方文档】【版本号：6.0.2 】](https://electronjs.org/docs)

---


# electron.js

使用 JavaScript, HTML 和 CSS 构建跨平台的桌面应用

> 当前文档版本号【6.0.2】[【点击可跳转到最新文档】](https://electronjs.org/docs)

## 配置开发环境

你可以使用原生的 Node.js 开发环境来开发 Electron 应用，为了打造一个Electron桌面程序的开发环境，你只需要：

- 安装好的 Node.js 、npm 、一个顺手的代码编辑器

- 以及对你的操作系统命令行客户端的基本了解

### macOS 开发环境配置

Electron 支持 `macOS 10.10 (Yosemite)` 及以上版本. 目前 Apple 不允许在非 Apple 电脑上运行 macOS 虚拟机，所以，如果你需要一台 Mac 的话，可以考虑租用 Mac 云服务（比如 [【 MacInCloud 】](https://www.macincloud.com/) 或者 [【 xcloud 】](https://xcloud.me/) ）

- 首先，安装最新版本的 Node.js

  - 我们推荐您安装最新的 `长期支持版本` 或者 `当前发行版本`

  - 访问[【 Node.js 下载页面】](https://nodejs.org/en/download/)选择 `macOS Installer`

  - 下载完成后， 执行安装程序，根据引导完成安装即可

  > 当然，你也可以使用 Homebrew 安装 Node.js
  >> 但我们不推荐你这么做，因为许多工具并不兼容 Homebrew 安装 Node.js 的方式

- 安装完成后，我们需要来确认 Node.js 是不是可以正常工作

  - 在 `/Applications/Utilities` 文件夹中找到 macOS 的 `Terminal` 程序
  
    - 或者直接使用 `Spotlight` 直接搜索关键词 `Terminal`

  - 打开 `Terminal` 或其他你喜欢的命令行客户端后，通过以下命令来确认 `node` 和 `npm` 已经安装成功

  ```cmd
  # 下面这行的命令会打印出Node.js的版本信息
  node -v

  # 下面这行的命令会打印出npm的版本信息
  npm -v
  ```

- 如果上述命令均打印出一个版本号，就说明 Node.js 已经安装好了！

- 然后，你只需要安装一个适合 JavaScript 开发的代码编辑器就可以开始开发工作了

### Windows 开发环境配置

> Electron 支持 `Windows 7` 及以上版本
> - 任何在低版本 Windows 上开发 Electron 的尝试都将是徒劳无功的
> - 您可以使用微软向开发者免费提供的[【 Windows 10 】](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines)虚拟机镜像

- 首先，安装最新版本的 Node.js

  - 我们推荐您安装最新的 `长期支持版本` 或者 `当前发行版本`

  - 访问[【 Node.js 下载页面】](https://nodejs.org/en/download/)选择 `Windows Installer`

  - 下载完成后， 执行安装程序，根据引导完成安装即可

  > 在安装过程中的配置界面, 请勾选这三个选项：
  > - Node.js runtime
  > - npm package manager
  > - Add to PATH

- 安装完成后，我们需要来确认 `Node.js` 是不是可以正常工作

  - 点击 `开始` 按钮，输入 `PowerShell` ，找到 `Windows PowerShell`

  - 打开 `PowerShell` 或其他你喜欢的命令行客户端后，通过以下命令来确认 `node` 和 `npm` 已经安装成功

  ```cmd
  # 下面这行的命令会打印出Node.js的版本信息
  node -v

  # 下面这行的命令会打印出npm的版本信息
  npm -v
  ```

- 如果上述命令均打印出一个版本号，就说明 Node.js 已经安装好了！

- 然后，你只需要安装一个适合 JavaScript 开发的代码编辑器就可以开始开发工作了

### Linux 开发环境配置

一般来说，Electron 支持 `Ubuntu 12.04` 、`Fedora 21` 、`Debian 8` 及其以上版本

- 首先，安装最新版本的 Node.js

  - 对于不同 linux 分支，安装步骤会有所差异

  - 假如你使用系统自带的包管理器，比如：

    - `apt` 或者 `pacman` ，请使用 Node.js 官方 Linux 安装指引

- 作为一个 Linux 用户，关于命令行的使用就无需我赘述了

  - 打开你喜欢的命令行工具，通过以下命令来确认 `node` 和 `npm` 在全局可用：

  ```cmd
  # 下面这行的命令会打印出Node.js的版本信息
  node -v

  # 下面这行的命令会打印出npm的版本信息
  npm -v
  ```

- 如果上述命令均打印出一个版本号，就说明 Node.js 已经安装好了！

- 然后，你只需要安装一个适合 JavaScript 开发的代码编辑器就可以开始开发工作了

### 合适的代码编辑器

我们建议你使用 GitHub 的[【 Atom 】](https://atom.io/)或者微软的[【 Visual Studio Code 】](https://code.visualstudio.com/)，这两款当下热门的编辑器都是使用 Electron 开发的

> 如果您是众多开发人员中的一员，您应知道几乎所有的代码编辑器和 IDE 都是支持 JavaScript 的

## 创建你的第一个应用

- Electron 可以让你使用纯 JavaScript 调用丰富的原生(操作系统) APIs 来创造桌面应用

  - 你可以把它看作一个 Node. js 的变体，它专注于桌面应用而不是 Web 服务器端

- 这不意味着 Electron 是某个图形用户界面 `GUI 库` 的 JavaScript 版本

  -  相反，Electron 使用 web 页面作为它的 GUI ，所以你能把它看作成一个被 JavaScript 控制的，精简版的 Chromium 浏览器

> #### 注意：
> 注意: 获取该示例的代码仓库[【立即下载并运行】](https://electronjs.org/docs/tutorial/first-app#trying-this-example)

从开发的角度来看, Electron application 本质上是一个 Node. js 应用程序

- 与 Node.js 模块相同，应用的入口是 package.json 文件

- 一个最基本的 Electron 应用一般来说会有如下的目录结构：

```cmd
your-app/
├── package.json
├── main.js
└── index.html
```

为你的新 Electron 应用创建一个新的空文件夹

- 打开你的命令行工具，然后从该文件夹运行命令行 `npm init`

- npm 会帮助你创建一个基本的 package.json 文件

  - 其中的 main 字段所表示的脚本为应用的启动脚本，它将会在主进程中执行

  - 如下片段是一个 package.json 的示例：

  ```js
  {
    "name": "your-app",
    "version": "0.1.0",
    "main": "main.js"
  }
  ```

  > #### 注意：
  > 如果 main 字段没有在 package.json 中出现，那么 Electron 将会尝试加载 index.js 文件（就像 Node.js 自身那样）

- 如果你实际开发的是一个简单的 Node 应用，那么你需要添加一个 start 脚本来指引 node 去执行当前的 package：

```js
{
  "name": "your-app",
  "version": "0.1.0",
  "main": "main.js",
  "scripts": {
    "start": "node ."
  }
}
```

- 把这个 Node 应用转换成一个 Electron 应用也是非常简单的，我们只不过是把 node 运行时替换成了 electron 运行时

```js
{
  "name": "your-app",
  "version": "0.1.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  }
}
```

### 安装 Electron

我们推荐的安装方法是把它作为您 app 中的开发依赖项，这使您可以在不同的 app 中使用不同的 Electron 版本

- 在您的 app 所在文件夹中运行下面的命令：

```cmd
npm install --save-dev electron
```

- 除此之外，也有其他安装 Electron 的途径

  - 请咨询[【安装指南】](https://electronjs.org/docs/tutorial/installation)来了解如何用代理、镜像和自定义缓存

### 开发一个简易的 Electron

Electron apps 使用 JavaScript 开发，其工作原理和方法与 Node.js 开发相同

- electron 模块包含了 Electron 提供的所有 API 和功能，引入方法和普通 Node.js 模块一样：

```cmd
const electron = require('electron')
```

- electron 模块所提供的功能都是通过命名空间暴露出来的，比如说：

  - electron.app 负责管理 Electron 应用程序的生命周期
  
  - electron.BrowserWindow 类负责创建窗口

  - 下面是一个简单的 main.js 文件，它将在应用程序准备就绪后打开一个窗口：

  ```js
  const { app, BrowserWindow } = require('electron')

  function createWindow () {   
    // 创建浏览器窗口
    let win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })

    // 加载index.html文件
    win.loadFile('index.html')
  }

  app.on('ready', createWindow)
  ```

- 您应当在 main.js 中创建窗口，并处理程序中可能遇到的所有系统事件

  - 下面我们将完善上述例子，添加以下功能：

    - 打开开发者工具
    
    - 处理窗口关闭事件
    
    - 在 macOS 用户点击 dock 上图标时重建窗口

  - 添加后，main. js 就像下面这样：

```js
const { app, BrowserWindow } = require('electron')

// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let win

function createWindow () {
  // 创建浏览器窗口。
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html文件
  win.loadFile('index.html')

  // 打开开发者工具
  win.webContents.openDevTools()

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
```

- 最后，创建你想展示的 `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using node <script>document.write(process.versions.node)</script>,
    Chrome <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
  </body>
</html>
```

### 启动你的应用

在创建并初始化完成 `main.js` 、`index.html` 和 `package.json` 之后，您就可以在当前工程的根目录执行 `npm start` 命令来启动刚刚编写好的 Electron 程序了

### 尝试此例

复制并运行这个库 `electron/electron-quick-start`

> 注意：本例需要 Git 和 npm 来运行

```cmd
# 克隆这仓库
$ git clone https://github.com/electron/electron-quick-start
# 进入仓库
$ cd electron-quick-start
# 安装依赖库
$ npm install
# 运行应用
$ npm start
```

启动开发过程的有关模板文件和工具列表, 请参阅模板文件和 CLI 文档 

## 模板和命令行界面

Electron 的开发并不那么死板，其开发、编译、打包、与发布 Electron 应用程序的方法中，没有一个是可以称为 `唯一标准` 的方法

- Electron 的编译和运行时相关额外功能通常可以在[【 npm 】](https://www.npmjs.com/search?q=electron)的独立安装包中找到, 这样开发者就可以根据自己的需求同时编译应用和 build pipeline

- 一个模板就像是一张空白的画布，你可以以它为基础来搭建你的应用

  -  通常来说，你可以从一个代码仓库克隆一个模板，然后修改成你心仪的样子

- `命令行工具` 则是在整个开发和分发过程中从另一方面给你提供帮助

  - 他们更有用，但同时也对代码结构和构建项目有着硬性的要求
  
  - 特别是对于初学者来说，命令行工具十分有用

### electron-forge

Electron Forge 是一个用来构建现代化Electron应用的完善的工具

- Electron Forge 将多个现有的（且有稳定维护的）Electron 构建工具整合为一个简单易用的工具包，所有人都可以用它来快速地搭建 Electron 开发环境

- Forge 将一些流行框架整合为[【开箱即用】](https://electronforge.io/templates)的模板，比如：React 、Vue 、Angular 等

  - Forge 的一些核心模块来自于上层的 Electron 社区（比如[【 electron-packager 】](https://github.com/electron/electron-packager)），因而 Electron 主要维护人员（比如说 Slack ）提交的 Electron 更新也会使 Forge 的用户受益

> 关于 Forge 的更多信息，请查阅[【 electronforge.io 】](https://electronforge.io/)

### electron-builder

Electron Builder 是一个完备的 Electron 应用打包和分发解决方案，它致力于软件开发的集成体验

- Electron Builder 出于简化的目的添加了一个依赖项，可以在内部管理所有更多的要求

- Electron Builder 会将 Electron 维护者使用的模块和功能(例如: auto-updater )替换为自定义的

- Electron Builder 打包的应用内组件的集成度会更高，同时与主流的Electron应用共同点也就更少了

> 关于 Electron Builder 的更多信息[【请查阅代码仓库】](https://github.com/electron-userland/electron-builder)

### electron-react-boilerplate

如果你不希望任何工具，而想要简单地从一个模板开始构建，可以使用 CT Lin 的 electron-react-boilerplate

- 它在社区中很受欢迎，并在内部使用了 electron-builder

> 关于 electron-react-boilerplate 的更多信息[【请查阅代码仓库】](https://github.com/chentsulin/electron-react-boilerplate)

### 其它工具和模板

[【 Awesome Electron 列表】](https://github.com/sindresorhus/awesome-electron#boilerplates)涵盖了众多可供选择的工具和模板

> 如果您发现列表的长度令人畏惧，请不要忘记，您也可以在开发过程中逐渐添加工具

## 应用架构

在 Electron 中可能遇到的两种进程类型：

- 主进程

- 渲染器进程

### 主进程

Electron 运行 package.json 的 main 脚本的进程被称为主进程

- 在主进程中运行的脚本通过创建 web 页面来展示用户界面

- 一个 Electron 应用总是有且只有一个主进程

### 渲染器进程

由于 Electron 使用了 Chromium 来展示 web 页面，所以 Chromium 的多进程架构也被使用到

- 每个 Electron 中的 web 页面运行在它自己的渲染进程中

> 在普通的浏览器中，web 页面通常在沙盒环境中运行，并且无法访问操作系统的原生资源
>> 然而 Electron 的用户在 Node.js 的 API 支持下可以在页面中和操作系统进行一些底层交互

### 主进程和渲染进程之间的区别

- 主进程使用 BrowserWindow 实例创建页面

  - 每个 BrowserWindow 实例都在自己的渲染进程里运行页面

  - 当一个 BrowserWindow 实例被销毁后，相应的渲染进程也会被终止

- 主进程管理所有的 web 页面和它们对应的渲染进程

  - 每个渲染进程都是独立的，它只关心它所运行的 web 页面

> 在页面中调用与 GUI 相关的原生 API 是不被允许的，因为在 web 页面里操作原生的 GUI 资源是非常危险的，而且容易造成资源泄露
>> 如果你想在 web 页面里使用 GUI 操作，其对应的渲染进程必须与主进程进行通讯，请求主进程进行相关的 GUI 操作

> #### 题外话：进程间通讯
> Electron 为主进程 `main process` 和渲染器进程 `renderer processes` 通信提供了多种实现方式，如可以使用ipcRenderer 和 ipcMain 模块发送消息，使用 remote 模块进行 RPC 方式通信
>> [【这里也有一个常见问题解答：web 页面间如何共享数据】](https://electronjs.org/docs/faq#how-to-share-data-between-web-pages)

### 使用 Electron 的 API

Electron 在主进程和渲染进程中提供了大量 API 去帮助开发桌面应用程序， 在主进程和渲染进程中，你可以通过 require 的方式将其包含在模块中，以此获取 Electron 的 API

```js
const electron = require('electron')
```

- 所有 Electron 的 API 都被指派给一种进程类型

  - 许多 API 只能被用于主进程或渲染进程中，但其中一些 API 可以同时在上述两种进程中使用

  - 每一个 API 的文档都将声明你可以在哪种进程中使用该 API

- Electron 中的窗口是使用 BrowserWindow 类型创建的一个实例，它只能在主进程中使用

```js
// 这样写在主进程会有用，但是在渲染进程中会提示'未定义'
const { BrowserWindow } = require('electron')

const win = new BrowserWindow()
```

- 因为进程之间的通信是被允许的, 所以渲染进程可以调用主进程来执行任务

  - Electron 通过 `remote 模块` 暴露一些通常只能在主进程中获取到的 API

  - 为了在渲染进程中创建一个 BrowserWindow 的实例，我们通常使用 remote 模块为中间件：

```js
//这样写在渲染进程中时行得通的，但是在主进程中是'未定义'
const { remote } = require('electron')
const { BrowserWindow } = remote

const win = new BrowserWindow()
```

### 使用 Node.js 的 API

Electron 同时在主进程和渲染进程中对 Node.js 暴露了所有的接口

- 所有在 Node.js 可以使用的 API ，在 Electron 中同样可以使用

```js
const fs = require('fs')

const root = fs.readdirSync('/')

// 这会打印出磁盘根级别的所有文件
// 同时包含'/'和'C:\'。
console.log(root)
```

> 正如您可能已经猜到的那样，如果您尝试加载远程内容， 这会带来重要的安全隐患
>> 您可以在我们的 [【安全文档】](https://electronjs.org/docs/tutorial/security) 中找到更多有关加载远程内容的信息和指南

- 你可以在你的应用程序中使用 Node.js 的模块

  - 选择您最喜欢的 npm 模块

  - npm 提供了目前世界上最大的开源代码库，那里包含良好的维护、经过测试的代码，提供给服务器应用程序的特色功能也提供给 Electron

例如，在你的应用程序中要使用官方的 AWS SDK

- 你需要首先安装它的依赖：

```cmd
npm install --save aws-sdk
```

- 然后在你的 Electron 应用中，通过 require 引入并使用该模块，就像构建 Node.js 应用程序那样：

```js
// 准备好被使用的S3 client模块
const S3 = require('aws-sdk/clients/s3')
```

> 有一个非常重要的提示：
> - 原生 Node.js 模块(即指需要编译源码过后才能被使用的模块)需要在编译后才能和 Electron 一起使用
> - 绝大多数的 Node.js 模块都不是原生的， 只有大概 400~650 个模块是原生的
>> 如果你的确需要原生模块，可以在这里[【查询如何重新为 Electron 编译原生模块】](https://electronjs.org/docs/tutorial/using-native-node-modules)，它很简单！

## 为你的应用添加功能

### 通知 ( Windows , Linux , macOS )

这三个操作系统都提供了应用程序向用户发送通知的手段，Electron 允许开发者使用[【 HTML5 Notification API 】](https://notifications.spec.whatwg.org/)发送通知，并使用当前运行的操作系统的 `本地通知 API` 来显示它

> 注意: 由于这是一个 `HTML5 API` ，它只能在渲染器进程中使用。 如果你想在主进程中显示通知，请查看[【 Notification 】](https://electronjs.org/docs/api/notification)模块

```js
let myNotification = new Notification('标题', {
  body: '通知正文内容'
})

myNotification.onclick = () => {
  console.log('通知被点击')
}
```

> 虽然操作系统的代码和用户体验相似，但依然存在微妙的差异

#### Windows

- 在 `Windows 10` , 必须被添加您应用程序【应用程序用户模型 ID 】(https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx)的快捷方式到开始菜单上

- 在 `Windows 8.1` 和 `Windows 8` 上，带有[【应用程序用户模型 ID（Application User Model ID）】](https://msdn.microsoft.com/en-us/library/windows/desktop/dd378459(v=vs.85).aspx)的应用程序快捷方式必须被添加到开始屏幕上

  - 但是请注意，它不需要被固定到开始屏幕

- 在 `Windows 7` 上, 通知通过视觉上类似于较新系统原生的一个自定义的实现来工作

Electron 尝试将 `应用程序用户模型 ID` 的相关工作自动化

-  Electron 在安装和更新框架 Squirrel 协同使用的时候，快捷方式将[【被自动正确的配置好】](https://github.com/electron/windows-installer/blob/master/README.md#handling-squirrel-events)

- 更棒的是，Electron 会自动检测 Squirrel 的存在，并且使用正确的值来自动调用 `app.setAppUserModelId()`

- 在开发过程中，你可能需要自行调用 `app.setAppUsesrModelId()(../api/app.md#appsetappusermodelidid-windows)]`

> 此外，在 `Windows 8` 中，通知正文的最大长度为 `250` 个字符，Windows 团队建议将通知保留为 `200` 个字符
> - 然而，`Windows 10` 中已经删除了这个限制，但是 Windows 团队要求开发人员合理使用
> - 尝试将大量文本(数千个字符)发送到 API 可能会导致不稳定

#### Windows 高级通知

Windows 的更高版本允许高级通知，自定义模板，图像和其他灵活元素

- 要发送这些通知(来自主进程或渲染器进程)，请使用用户区模块[【 electron-windows-notifications 】](https://github.com/felixrieseberg/electron-windows-notifications)来用原生节点附件发送 `ToastNotification` 和 `TileNotification` 对象

- 虽然包含按钮的通知可以使用 `electron-windows-notifications` ，但处理回复则需要使用 `electron-windows-interactive-notifications` ，这有助于注册所需的COM组件，并使用输入的用户数据调用 Electron 应用程序

#### Windows 免打扰模式 / 演示模式

要检测是否允许发送通知，请使用用户区模块[【 electron-notification-state 】](https://github.com/felixrieseberg/electron-notification-state)

> 这样，您可以提前确定 Windows 是否会将通知忽略

#### macOS

MacOS 上的通知是最直接的，但你应该注意[【苹果关于通知的人机接口指南（Apple's Human Interface guidelines regarding notifications）】](https://developer.apple.com/macos/human-interface-guidelines/system-capabilities/notifications/)

> 请注意，通知的大小限制为 256 个字节，如果超过该限制，则会被截断

#### macOS 高级通知

后来的 macOS 版本允许有一个输入字段的通知，允许用户快速回复通知

- 为了通过输入字段发送通知，请使用用户区模块[【 node-mac-notifier 】](https://github.com/CharlieHess/node-mac-notifier)

#### macOS 勿扰 / 会话状态

要检测是否允许发送通知，请使用用户区模块[【 electron-notification-state 】](https://github.com/felixrieseberg/electron-notification-state)

> 这样可以提前检测是否显示通知

#### Linux

通知是通过 libnotify 发送的，libnotify 可以在任何实现了[【桌面通知规范（Desktop Notifications Specification）】](https://developer.gnome.org/notification-spec/)的桌面环境中发送通知，包括

- Cinnamon
- Enlightenment
- Unity
- GNOME
- KDE

## 最近文档 ( Windows & macOS )

Windows 和 macOS 分别通过打开 `跳转列表 JumpList` 和 `dock 菜单` 使应用程序能够快速的访问 `最近打开的文档列表`

- `跳转列表` 图片

![跳转列表](https://cloud.githubusercontent.com/assets/2289/23446924/11a27b98-fdfc-11e6-8485-cc3b1e86b80a.png)

- `应用 dock 菜单` 图片

![应用 dock 菜单](https://cloud.githubusercontent.com/assets/639601/5069610/2aa80758-6e97-11e4-8cfb-c1a414a10774.png)

- 若要增加一个文件到最近文件列表，你可以使用 [【 app.addRecentDocument 】](https://electronjs.org/docs/api/app#appaddrecentdocumentpath-macos-windows) API

```js
const { app } = require('electron')
app.addRecentDocument('/Users/USERNAME/Desktop/work.type')
```

- 你也可以使用[【 app.clearRecentDocuments 】](https://electronjs.org/docs/api/app#appclearrecentdocuments-macos-windows) API 来清空最近文件列表

```js
const { app } = require('electron')
app.clearRecentDocuments()
```

### Windows 注意事项

> 为了在 Windows 上使用这个特性，你的应用需要被注册为这类文件的处理程序
> - 否则，在你注册之前，文件是不会出现在跳转列表里的
>> 你可以在[【 Application Registration 】](https://msdn.microsoft.com/en-us/library/cc144104(VS.85).aspx)里找到所有关于注册事宜的说明

当用户点击 `跳转列表` 上的一个文件时，系统会启动一个新的应用程序的实例，而文件的路径将作为一个命令行参数被传入这个实例

### macOS 注意事项

从 `最近文档` 菜单中请求文件时，将为其发出 app 模块的 `open-file 事件`

## 任务栏的进度条 ( Windows , macOS , Unity )

在 Windows 中的任务栏按钮可以被用于显示一个进度条

- 可以让一个窗口提供进度信息给用户，而不必切自行切换到这个窗口

- 在 macOS，进度条将显示为 dock 图标的一部分

- Unity DE 也具有同样的特性，在运行器上显示进度条

任务栏按钮中的进度栏图片：

![任务栏按钮中的进度栏](https://cloud.githubusercontent.com/assets/639601/5081682/16691fda-6f0e-11e4-9676-49b6418f1264.png)




















## 调试应用

无论何时，您的 Electron 应用程序没有按照您设想的方式运行，一组调试工具也许可以帮助您找到代码的错误，性能瓶颈，或者优化的机会

### 渲染进程

最广泛使用来调试指定渲染进程的工具是 Chromium 的开发者工具集

- 它可以获取到所有的渲染进程，包括 BrowserWindow 的实例，BrowserView 以及 WebView

- 您可以通过编程的方式在 BrowserWindow 的 webContents 中调用 openDevTool() API 来打开它们

```js
const { BrowserWindow } = require('electron')

let win = new BrowserWindow()
win.webContents.openDevTools()
```

> 谷歌为他们的开发者工具提供了[【杰出的文档】](https://developer.chrome.com/devtools)我们建议您熟悉它们，它们对于任何 Electron 开发者来说通常都是工具包中最强大的工具之一

### 主进程

调试主进程有点棘手, 因为您不能简单地打开开发者工具来调试它们

> 多亏了 `谷歌` 和 `Node.js` 的紧密合作，Chromium 开发者工具可以被用来调试 Electron 的主进程，否则你也许会遇到许多怪事就像 require 不能再控制台中显示
>> 如果想获取更多信息，可以看[【调试主进程的文档】](https://electronjs.org/docs/tutorial/debugging-main-process)

## 应用部署

为了使用 Electron 部署你的应用，您需要进行打包和重塑

- 这样做的最简单的方法是使用以下第三方打包工具之一：

  - [【electron-forge】](https://github.com/electron-userland/electron-forge)

  - [【electron-builder】](https://github.com/electron-userland/electron-builder)

  - [【electron-packager】](https://github.com/electron/electron-packager)

- 这些工具将覆盖发布一个 Electron 应用所需采取的所有步骤

  - 例如，打包应用程序，重组可执行程序，设置图标和可配置的创建安装程序

### 手动发布

您也可以选择手动发布你的 app ，但需执行下面的步骤：

- 为了使用 Electron 部署你的应用程序，你需要下载 Electron 的 [【 prebuilt binaries 】](https://github.com/electron/electron/releases)

- 接下来，你存放应用程序的文件夹需要叫做 app 并且需要放在 Electron 的 资源文件夹 Resources 下，如下面的示例所示

  > 请注意，在下面的示例中，Electron 的预制二进制文件的位置用 `electron/` 表示

  - 在 macOS 中：

  ```cmd
  electron/Electron.app/Contents/Resources/app/
  ├── package.json
  ├── main.js
  └── index.html
  ```

  - 在 Windows 和 Linux 中

  ```cmd
  electron/resources/app
  ├── package.json
  ├── main.js
  └── index.html
  ```

- 然后运行 Electron.app ，或者

  - Linux 中的 electron
  
  - Windows 中的 electron.exe

- 接着 Electron 就会以你的应用程序的方式启动

  - electron 文件夹将被部署并可以分发给最终的使用者

### 将你的应用程序打包成一个文件

除了通过拷贝所有的资源文件来分发你的应用程序之外，你可以通过打包你的应用程序为一个 asar 档案文件以避免暴露你的源代码

- 为了使用一个 asar 档案文件代替 app 文件夹，你需要修改这个档案文件的名字为 `app.asar`

- 然后将其放到 Electron 的资源文件夹下

- 然后 Electron 就会试图读取这个档案文件并从中启动

  - 在 macOS 中：

  ```cmd
  electron/Electron.app/Contents/Resources/
  └── app.asar
  ```

  - 在 Windows 和 Linux 中

  ```cmd
  electron/resources/
  └── app.asar
  ```

> 更多的细节参阅[【 Application packaging 】](https://electronjs.org/docs/tutorial/application-packaging)

### 使用下载好的二进制文件进行重新定制

将您的应用程序捆绑到 Electron 后，您可能需要在把应用分发给用户前将 Electron 进行重新定制

#### macOS

你可以将 Electron.app 重命名为任意你喜欢的名字，然后你也需要将一些文件中的 CFBundleDisplayName ， CFBundleIdentifier 以及 CFBundleName 字段一并修改掉

- 这些文件如下：

  - Electron.app/Contents/Info.plist
  - Electron.app/Contents/Frameworks/Electron Helper.app/Contents/Info.plist

- 你也可以重命名帮助程序以避免它在系统活动监视器中显示为 Electron Helper ，但是请确保你已经修改了帮助应用的可执行文件的名字

例：一个重命名后的应用程序的结构可能是这样的

```cmd
MyApp.app/Contents
├── Info.plist
├── MacOS/
│   └── MyApp
└── Frameworks/
    └── MyApp Helper.app
        ├── Info.plist
        └── MacOS/
            └── MyApp Helper
```

#### Windows

你可以将 electron.exe 重命名为任何你喜欢的名字，然后可以使用像 rcedit 那样的工具编辑它的 icon 和其他信息

#### Linux

你可以将 electron 重命名为任意你喜欢的名字

### 通过重编译源代码来进行重新定制

> 你也可以通过改变产品名称后，从源码构建来重塑 Electron 的形象

你只需要在 `args.gn` 文件中将构建参数设置为对应产品的名称 `electron_product_name = "YourProductName"` ，并进行重新构建

#### 创建一个自定义 Electron 分支

如果只是为了构建你的 app ，你不需要创建一个自定义的 Electron 分支， 即使是 `生产级` 的应用程序

- 可以使用工具，如 `electron-packager` 或 `electron-builder` 来 `重新定制` 你的 Electron app

- 如果你有个人定制的 C++ 代码必须打补丁到 Electron ，而这些代码不能提交给上游或者已被官方版本拒绝，你就需要 fork 你自己的 Electron

> 作为 Electron 的维护者，我们非常希望你的使用场景能够工作，所以请尽最大的努力让你的修改进入 Electron 的官方版本，这对你来说会更加方便并且我们衷心感谢你的帮助












