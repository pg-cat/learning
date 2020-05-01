```
页面的目录结构：

add - 页面文件夹

  components - 页面子组件文件夹

  icons - 页面图片文件夹

  pages - 页面跳转到独立的子页面文件夹

  …… - 其他文件夹可自行定义

  index.js - 当前页面的主页
```


【 `2019` 年 `3` 月 `26` 日】整理自 [【 `React Native` 中文网 `0.59` 】](https://reactnative.cn/docs/getting-started.html)

---


# 入门基础

![图片](https://media.giphy.com/media/13WZniThXy0hSE/giphy.gif)

## 搭建开发环境

> 本文只讲述 `windows 10` 的环境搭建，要了解其他系统下的环境搭建，请移步[【官方文档：搭建开发环境】](https://reactnative.cn/docs/getting-started/)

> 如果阅读完本文档后还碰到很多环境搭建的问题，我们建议你还可以再看看由本站提供的环境搭建视频教程：

* [【`macOS iOS`】](https://ke.qq.com/webcourse/index.html#course_id=197101&term_id=100233637&taid=1220865928921581&vid=a1417i5op7k)

* [【`macOS Android`】](https://ke.qq.com/webcourse/index.html#course_id=197101&term_id=100233637&taid=1220870223888877&vid=z1417kmxask)

* [【`windows Android`】](https://ke.qq.com/webcourse/index.html#course_id=197101&term_id=100233637&taid=1220874518856173&vid=d1417tgg1ez)

* [【`windows` 环境搭建文字教程】](http://bbs.reactnative.cn/topic/10)

* 以及[【常见问题】](http://bbs.reactnative.cn/topic/130)

> 注意：视频教程或者其他网络上的博客和文章可能和本文档有所出入，请以最新版本的本文档所述为准！

### 安装依赖

必须安装的依赖有：

* `Node.js`

  `Node.js` 的版本必须高于 `8.3` ，推荐 `8.5` 的稳定版本

  安装完 `Node` 后建议设置 `npm` 镜像以加速后面的过程（或使用科学上网工具）

  > 注意：不要使用 `cnpm` ，`cnpm` 安装的模块路径比较奇怪，`packager` 不能正常识别！

  ```
  npm config set registry https://registry.npm.taobao.org --global

  npm config set disturl https://npm.taobao.org/dist --global
  ```

* `React Native` 命令行工具

* `Python2`

  `Python` 的版本必须为 `2.x`（不支持 `3.x` ），推荐 `2.7` 的版本

* `JDK`

  `JDK` 的版本必须是 `1.8`（目前不支持 `1.9` 及更高版本），并且[【配置好环境变量：win10】](https://jingyan.baidu.com/article/db55b609fa946e4ba20a2f56.html)

  > 注意，这里不是要最新版本，一定要[【 `1.8` 版本的】](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

* `Android Studio`

  注意：虽然你可以使用任何编辑器来开发应用（编写 `JavaScript` 代码），但你仍然必须安装 `Android Studio` 来获得编译 `Android` 应用所需的工具和环境

### `React Native` 命令行工具

> [【 `Yarn` 】](https://yarnpkg.com/zh-Hant/) 是 `Facebook` 提供的替代 `npm` 的工具，可以加速 `node` 模块的下载

`React Native` 命令行工具 用于执行创建、初始化、更新项目、运行打包服务（ `packager` ）等任务

```
npm install -g yarn react-native-cli
```

安装完 `yarn` 后同理也要设置镜像源：

```
yarn config set registry https://registry.npm.taobao.org --global

yarn config set disturl https://npm.taobao.org/dist --global
```

> 安装完 `yarn` 之后就可以用 `yarn` 代替 `npm` 了，例如用 `yarn` 代替 `npm install` 命令，用 `yarn add` 某第三方库名代替 `npm install` 某第三方库名

### `Android` 开发环境

> 请注意！！！国内用户必须必须必须有稳定的翻墙工具，否则在下载、安装、配置过程中会不断遭遇链接超时或断开，无法进行开发工作

#### 安装 `Android Studio`

* 首先[【下载 `Android Studio` 】](https://developer.android.com/studio/index.html)并打开，国内用户可能无法打开官方链接，请 **`自行使用搜索引擎搜索`** 可用的下载链接

* 进入安装界面后选择 `Custom` 选项，确保选中了以下几项：

  * `Android SDK`
  * `Android SDK Platform`
  * `Performance (Intel ® HAXM)` [【 `AMD` 处理器看这里】](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)
  * `Android Virtual Device`

* 然后点击 `Next` 来安装选中的组件

  * 如果选择框是灰的，你也可以先跳过，稍后再来安装这些组件

安装完成后，看到欢迎界面时，就可以进行下面的操作了

#### 安装 `Android SDK`

> `Android Studio` 默认会安装最新版本的 `Android SDK`

目前编译 `React Native` 应用需要的是 `Android 9 (Pie)` 版本的 `SDK`

* 注意 `SDK` 版本不等于终端系统版本，`React Native` 目前支持 `Android 4.1` 以上设备

* 你可以在 `Android Studio` 的 `SDK Manager` 中选择安装各版本的 `SDK`

  * 你可以在 `Android Studio` 的欢迎界面中找到 `SDK Manager`

  * 点击 `Configure` ，然后就能看到 `SDK Manager`

![图片](https://reactnative.cn/docs/assets/GettingStartedAndroidStudioWelcomeWindows.png)

  * `SDK Manager` 还可以在 `Android Studio` 的 `Preferences` 菜单中找到

    * 具体路径是 `Appearance & Behavior` → `System Settings` → `Android SDK`

* 在 `SDK Manager` 中选择 `SDK Platforms` 选项卡，然后在右下角勾选 `Show Package Details`

  * 展开 `Android 9 (Pie) `选项，确保勾选了下面这些组件（重申你必须使用稳定的翻墙工具，否则可能都看不到这个界面）：

    * `Android SDK Platform 28`

    * `Intel x86 Atom_64 System Image`

      官方模拟器镜像文件，使用非官方模拟器不需要安装此组件

* 然后点击 `SDK Tools` 选项卡，同样勾中右下角的 `Show Package Details`

  * 展开 `Android SDK Build-Tools` 选项，确保选中了 `React Native` 所必须的 `28.0.3` 版本

  * 你可以同时安装多个其他版本

* 最后点击 `Apply` 来下载和安装这些组件

#### 配置 `ANDROID_HOME` 环境变量

> `React Native` 需要通过环境变量来了解你的 `Android SDK` 装在什么路径，从而正常进行编译

打开 `控制面板` -> `系统和安全` -> `系统` -> `高级系统设置` -> `高级` -> `环境变量` -> `新建` ，创建一个名为 `ANDROID_HOME` 的环境变量（系统或用户变量均可），指向你的 `Android SDK` 所在的目录（具体的路径可能和下图不一致，请自行确认）：

![图片](https://reactnative.cn/docs/assets/GettingStartedAndroidEnvironmentVariableANDROID_HOME.png)

`SDK` 默认是安装在下面的目录：

```
c:\Users\你的用户名\AppData\Local\Android\Sdk
```

> 你可以在 `Android Studio` 的 `Preferences` 菜单中查看 `SDK` 的真实路径，具体是 `Appearance & Behavior` → `System Settings` → `Android SDK`

> 你需要关闭现有的命令符提示窗口然后重新打开，这样新的环境变量才能生效

#### 添加目录到环境变量 `Path` 中

打开 `控制面板` -> `系统和安全` -> `系统` -> `高级系统设置` -> `高级` -> `环境变量` ，选中 `Path` 变量，然后点击 `编辑`

* 点击 `新建` 然后把 `platform-tools` 目录路径添加进去

* 此目录的默认路径为：

```
c:\Users\你的用户名\AppData\Local\Android\Sdk\platform-tools
```

### 创建新项目

使用 `React Native` 命令行工具来创建一个名为 `AwesomeProject` 的新项目：

```
react-native init AwesomeProject
```

* 你可以使用 `--version` 参数（注意是两个杠）创建指定版本的项目

  * 例如 `react-native init MyApp --version 0.44.3`

  * 注意版本号必须精确到两个小数点

> `Windows` 用户请注意，请不要在某些权限敏感的目录例如 `System32` 目录中 `init` 项目；会有各种权限限制导致不能运行！

如果你是想把 React Native 集成到现有的原生项目中，则步骤完全不同，[请参考集成到现有原生应用](https://reactnative.cn/docs/integration-with-existing-apps)

### 准备 `Android` 设备

你需要准备一台 `Android` 设备来运行 `React Native Android` 应用

**`重要提示!!!`** 请尽量使用真机测试，使用 `USB` 连接电脑，并在设置里打开 `USB调试` 选项，及 `USB安装` 选项，如果你有的话，但小米手机请一定要打开 `USB安装` 选项

* 这里所指的设备既可以是真机，也可以是模拟器

  > 后面我们所有的文档除非特别说明，并不区分真机或者模拟器

* `Android` 官方提供了名为 `Android Virtual Device`（简称 `AVD` ）的模拟器

  * 此外还有很多第三方提供的模拟器如 `Genymotion` 、`BlueStack` 等

    * 一般来说官方模拟器免费、功能完整，但性能较差

    * 第三方模拟器性能较好，但可能需要付费，或带有广告

#### 使用 `Android` 真机

你也可以使用 `Android` 真机来代替模拟器进行开发，只需用 usb 数据线连接到电脑，然后遵照[【在设备上运行】](https://reactnative.cn/docs/running-on-device)这篇文档的说明操作即可

#### 使用 `Android` 模拟器

你可以使用 `Android Studio` 打开项目下的 `Android` 目录，然后可以使用 `AVD Manager` 来查看可用的虚拟设备，它的图标看起来像下面这样：

![图片](https://reactnative.cn/docs/assets/GettingStartedAndroidStudioAVD.png)

* 如果你刚刚才安装 `Android Studio` ，那么可能需要先创建一个虚拟设备

* 点击 `Create Virtual Device...` ，然后选择所需的设备类型并点击 `Next` ，然后选择 `Pie API Level 28 image`

  * 请不要轻易点击 `Android Studio` 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行

  * 如果你还没有安装 `HAXM`（ `Intel` 虚拟硬件加速驱动），则先点击 `Install HAXM` 或是按[【这篇文档说明】](https://software.intel.com/en-us/android/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-windows)来进行安装

* 然后点击 `Next` 和 `Finish` 来完成虚拟设备的创建

现在你应该可以点击虚拟设备旁的绿色三角按钮来启动它了，启动完后我们可以尝试运行应用

#### 编译并运行 `React Native` 应用

确保你先运行了模拟器或者连接了真机，然后在你的项目目录中运行 `react-native run-android` ：

```
cd AwesomeProject
react-native run-android
```

如果配置没有问题，你应该可以看到应用自动安装到设备上并开始运行

> 注意：第一次运行时需要下载大量编译依赖，耗时可能数十分钟

> 此过程严重依赖稳定的翻墙工具，否则将频繁遭遇链接超时和断开，导致无法运行

如果你的设备的 `Android` 版本低于 `5.0` ，则可能在运行时看到红屏，请阅读[【在设备上运行】](https://reactnative.cn/docs/running-on-device)这篇文档来按照步骤解决

![图片](https://reactnative.cn/docs/assets/GettingStartedAndroidSuccessWindows.png)

* `react-native run-android` 只是运行应用的方式之一

* 你也可以在 `Android Studio` 或是 `Nuclide` 中直接运行应用

> 建议在 `run-android` 成功后再尝试使用 `Android Studio` 启动

* 两次提醒：请不要轻易点击 `Android Studio` 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行

* 如果你无法正常运行，遇到奇奇怪怪的红屏错误，先回头仔细对照文档检查，然后可以看看论坛的[【求助专区】](http://bbs.reactnative.cn/category/4)

  * 不同时期不同版本可能会碰到不同的问题，我们会在论坛中及时解答更新

* 请注意：千万不要执行 `bundle` 命令，那样会导致代码完全无法刷新

#### 修改项目

现在你已经成功运行了项目，我们可以开始尝试动手改一改了：

* 使用你喜欢的文本编辑器打开 `App.js` 并随便改上几行

* 按两下 `R` 键，或是在开发者菜单中选择 `Reload JS` ，就可以看到你的最新修改

#### 完成了！

恭喜！你已经成功运行并修改了你的第一个 React Native 应用

![图片](https://reactnative.cn/docs/assets/GettingStartedCongratulations.png)

### 接下来？

* 试着在开发者菜单中打开 `Live Reload` ，现在你只要一保存代码应用就会自动完整刷新

* 如果你想把 `React Native` 集成到现有的原生项目中，则请参考[【集成到现有原生应用】](https://reactnative.cn/docs/integration-with-existing-apps)

如果你想从头开始学习 `React Native` 开发，往下翻阅从下一节开始就可以了

## 示例教程：`Hello World`

> `React Native` 看起来很像 `React` ，只不过其基础组件是原生组件而非 `web` 组件

要理解 `React Native` 应用的基本结构，首先需要了解一些基本的 `React` 的概念，比如 `JSX` 语法、组件、`state` 状态以及 `props` 属性

### `Hello World`

根据历史悠久的 `传统` ，我们也来写一个 `Hello, world!` ：

```jsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    )
  }
}
```

* 你可以新建一个项目，然后用上面的代码覆盖你的 `App.js` 文件，然后运行看看

  ```
  Hello, world!
  ```

* 那这段代码是什么意思呢？

  初看这段代码，可能觉得并不像 `JavaScript` ；没错，这就是 `未来` 的 `JavaScript`

  * 首先你需要了解 `ES2015` （也叫作 `ES6` ）——这是一套对 `JavaScript` 的语法改进的官方标准

  * `React Native` 内置了对 `ES2015` 标准的支持，你可以放心使用而无需担心兼容性问题

  * 如果你不熟悉 `ES2015` 的话，可以看看[阮一峰老师的书](http://es6.ruanyifeng.com/)，还有论坛的这篇[总结](http://bbs.reactnative.cn/topic/15)

* 示例中的这一行 `<View><Text>Hello world!</Text></View>` 恐怕很多人看起来也觉得陌生

  * 这叫做 `JSX` ，是一种在 `JavaScript` 中嵌入 `XML` 结构的语法

  * 很多传统的应用框架会设计自有的模板语法，让你在结构标记中嵌入代码

  * `React` 反其道而行之，设计的 `JSX` 语法却是让你在代码中嵌入结构标记

  * 初看起来，这种写法很像 `web` 上的 `HTML` ，只不过使用的并不是 `web` 上常见的标签如 `<div>` 或是 `<span>` 等，这里我们使用的是 `React Native` 的组件

* 上面的示例代码中，使用的是内置的 `<Text>` 组件，它专门用来显示文本，而 `<View>` 就类似 `html` 中的 `div` 或是 `span` 这样的容器

### 组件

> 上节的代码定义了一个名为 `HelloWorldApp` 的新的组件（ `Component` ）

* 一个 `App` 的最终界面，其实也就是各式各样的组件的组合

* 组件本身结构可以非常简单

  * 唯一必须的就是在 `render` 方法中返回一些用于渲染结构的 `JSX` 语句

### 小结

可以看看一个稍微复杂些的[【`电影列表`】](https://reactnative.cn/docs/sample-application-movies)例子

## `Props` 属性

> 大多数组件在创建时就可以使用各种参数来进行定制；用于定制的这些参数就称为 `props` 属性

以常见的基础组件 `Image` 为例，在创建一个图片时，可以传入一个名为 `source` 的 `prop` 来指定要显示的图片的地址，以及使用名为 `style` 的 `prop` 来控制其尺寸

```jsx
import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}
```

> 注意：在 `iOS` 上使用 `http` 链接的图片地址可能不会显示，参见这篇[说明修改](https://segmentfault.com/a/1190000002933776)

请注意 `{pic}` 外围有一层括号，我们需要用括号来把 `pic` 这个变量嵌入到 `JSX` 语句中

* 括号的意思是括号内部为一个 `JavaScript` 变量或表达式，需要执行后取值

* 我们可以把任意合法的 `JavaScript` 表达式通过括号嵌入到 `JSX` 语句中

自定义的组件也可以使用 `props` ：

* 通过在不同的场景使用不同的属性定制，可以尽量提高自定义组件的复用范畴

* 只需在 `render` 函数中引用 `this.props` ，然后按需处理即可

```jsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}
```

* 我们在 `Greeting` 组件中将 `name` 作为一个属性来定制，这样可以复用这一组件来制作各种不同的 `问候语`

  * 上面的例子把 `Greeting` 组件写在 `JSX` 语句中，用法和内置组件并无二致

* 上面的例子出现了一样新的名为 `View` 的组件

  * `View` 常用作其他组件的容器，来帮助控制布局和样式

仅仅使用 `props` 和基础的 `Text` 、`Image` 以及 `View` 组件，你就已经足以编写各式各样的 `UI` 组件了

## `State` 状态

我们使用两种数据来控制一个组件：

* `props`

  * 它在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变

* `state`

  * 对于需要改变的数据，我们需要使用 `state`

  * 一般来说，你需要在 `constructor` 中初始化 `state` ，然后在需要修改时调用 `setState` 方法

    * 这是 `ES6` 的写法，早期的很多 `ES5` 的例子使用的是 `getInitialState` 方法来初始化 `state` ，这一做法会逐渐被淘汰

假如我们需要制作一段不停闪烁的文字

* 文字内容本身在组件创建时就已经指定好了，所以文字内容应该是一个 `prop`

* 而文字的显示或隐藏的状态（快速的显隐切换就产生了闪烁的效果）则是随着时间变化的，因此这一状态应该写到 `state` 中

```jsx
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState( previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
```

实际开发中，我们一般不会在定时器函数（ `setInterval` 、`setTimeout` 等）中来操作 `state`

* 典型的场景是在接收到服务器返回的新数据，或者在用户输入数据之后

* 你也可以使用一些 `状态容器` 比如[【 `Redux` 】](http://redux.js.org/index.html)来统一管理数据流

每次调用 `setState` 时，`BlinkApp` 都会重新执行 `render` 方法重新渲染

* 这里我们使用定时器来不停调用 `setState` ，于是组件就会随着时间变化不停地重新渲染

> `State` 的工作原理和 `React.js` 完全一致，所以对于处理 `state` 的一些更深入的细节，你可以参阅 [【 `React.Component API` 】](https://reactjs.org/docs/react-component.html#setstate)

这里提示一些初学者应该牢记的要点：

* 一切界面变化都是 `状态 state 变化`

* `state` 的修改必须通过 `setState()` 方法

  * `this.state.likes = 100`

    这样的直接赋值修改是无效的！

  * `setState` 是一个 `merge` 合并操作，只修改指定属性，不影响其他属性

  * `setState` 是异步操作，修改不会马上生效

## 样式

在 `React Native` 中，你并不需要学习什么特殊的语法来定义样式

* 我们仍然是使用 `JavaScript` 来写样式

* 所有的核心组件都接受名为 `style` 的属性

* 这些样式名基本上是遵循了 `web` 上的 `CSS` 的命名

  * 只是按照 `JavaScript` 的语法要求使用了 `驼峰命名法`

  * 例如将 `background-color` 改为 `backgroundColor`

`style` 属性可以是一个普通的 `JavaScript` 对象

* 这是最简单的用法，因而在示例代码中很常见

* 你还可以传入一个数组

  * 在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承

* 实际开发中组件的样式会越来越复杂，我们建议使用 `StyleSheet.create` 来集中定义组件的样式

```jsx
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
```

* 常见的做法是按顺序声明和使用 `style` 属性，以借鉴 `CSS` 中的 `层叠` 做法

  * 即后声明的属性会覆盖先声明的同名属性

* 文本的样式定义请参阅[【 `Text` 组件的文档】](https://reactnative.cn/docs/text)

## 设定组件的尺寸

> 组件的高度和宽度决定了其在屏幕上显示的尺寸

### 指定宽高

最简单的给组件设定尺寸的方式就是在样式中指定固定的 `width` 和 `height`

> `React Native` 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点

```jsx
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
```

* 这样给组件设置尺寸也是一种常见的模式，比如要求在不同尺寸的屏幕上都显示成一样的大小

### 弹性（ `Flex` ）宽高

> 在组件样式中使用 `flex` 可以使其在可利用的空间中动态地扩张或收缩

一般而言我们会使用 `flex:1` 来指定某个组件扩张以撑满所有剩余的空间

* 如果有多个并列的子组件使用了 `flex:1` ，则这些子组件会平分父容器中剩余的空间

* 如果这些并列的子组件的 `flex` 值不一样，则谁的值更大，谁占据剩余空间的比例就更大

  * 即占据剩余空间的比等于并列组件间 `flex` 值的比

> `注意`：组件能够撑满剩余空间的前提是其父容器的尺寸不为零

如果父容器既没有固定的 `width` 和 `height` ，也没有设定 `flex` ，则父容器的尺寸为 `零`

* 其子组件如果使用了 `flex` ，也是无法显示的

```jsx
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`
      // 则父View不再具有尺寸，因此子组件也无法再撑开
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
```

## 使用 `Flexbox` 布局

> 我们在 `React Native` 中使用 `flexbox` 规则来指定某个组件的子元素的布局；`Flexbox` 可以在不同屏幕尺寸上提供一致的布局结构

一般来说，使用 `flexDirection` 、`alignItems` 和 `justifyContent` 三个样式属性就已经能满足大多数布局需求

* 这里有一份[【简易布局图解】](http://weibo.com/1712131295/CoRnElNkZ?ref=collection&type=comment)，可以给你一个大概的印象

* `React Native` 中的 `Flexbox` 的工作原理和 `web` 上的 `CSS` 基本一致，当然也存在少许差异

  * 首先是默认值不同：

    * `flexDirection` 的默认值是 `column` 而不是 `row`

  * `flex` 只能指定一个数字值

### `Flex Direction`

> 在组件的 `style` 中指定 `flexDirection` 可以决定布局的主轴

子元素是应该沿着水平轴( `row` )方向排列，还是沿着竖直轴( `column` )方向排列呢？

* 默认值是竖直轴( `column` )方向

```jsx
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
```

### `Justify Content`

> 在组件的 `style` 中指定 `justifyContent` 可以决定其子元素沿着主轴的排列方式

子元素是应该靠近主轴的起始端还是末尾段分布呢？

亦或应该均匀分布？

对应的这些可选项有：

* `flex-start`
* `center`
* `flex-end`
* `space-around`
* `space-between`
* `space-evenly` 【慎用，兼容性较差】

### `Align Items`

> 在组件的 `style` 中指定 `alignItems` 可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为 `row` ，则次轴方向为 `column` ）的排列方式

子元素是应该靠近次轴的起始端还是末尾段分布呢？

亦或应该均匀分布？

对应的这些可选项有：

* `flex-start`
* `center`
* `flex-end`
* `stretch`

> 注意：要使 `stretch` 选项生效的话，子元素在次轴方向上不能有固定的尺寸

以下面的代码为例：只有将子元素样式中的 `width: 50` 去掉之后，`alignItems: 'stretch'` 才能生效

```jsx
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'stretch',
      }}>
        <View style={{width:50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width:20, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
```

对于布局有影响的完整样式列表记录在[【这篇文档中】](https://reactnative.cn/docs/layout-props)

## 处理文本输入

`TextInput` 是一个允许用户输入文本的基础组件，它有两个属性：

* `onChangeText` 属性

  此属性接受一个函数，而此函数会在文本变化时被调用

* `onSubmitEditing` 属性

  会在文本被提交后（用户按下软键盘上的提交键）调用

假如我们要实现当用户输入时，实时将其以单词为单位翻译为另一种文字

* 我们假设这另一种文字来自某个吃货星球，只有一个单词：🍕

* 所以 `Hello there Bob` 将会被翻译为 🍕🍕🍕

```jsx
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="请输入些文字"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
```

* 在上面的例子里，我们把 `text` 保存到 `state` 中，因为它会随着时间变化

文本输入方面还有很多其他的东西要处理：

* 比如你可能想要在用户输入的时候进行验证，在 `React` 中的受限组件一节中有一些详细的示例

  * 注意 `react` 中的 `onChange` 对应的是 `React Native` 中的 `onChangeText`

* 此外你还需要看看[【 `TextInput` 的文档】](https://reactnative.cn/docs/textinput)

`TextInput` 可能是天然具有 `动态状态` 的最简单的组件了

## 处理触摸事件

> 移动应用上的用户交互基本靠 `摸`

这个 `摸` 也是有各种姿势的：

* 在一个按钮上点击
* 在一个列表上滑动
* 或是在一个地图上缩放

`React Native` 提供了可以处理常见触摸手势（例如点击或滑动）的组件， 以及可用于识别更复杂的手势的完整的[手势响应系统](https://reactnative.cn/docs/handling-touches/gesturerespondersystem.md)

### 显示一个简单的按钮

`Button` 是一个简单的跨平台的按钮组件，下面是一个最简示例：

```jsx
<Button
  onPress={() => {
    Alert.alert("你点击了按钮！");
  }}
  title="点我！"
/>
```

* 上面这段代码会在 `iOS` 上渲染一个蓝色的标签状按钮，在 `Android` 上则会渲染一个蓝色圆角矩形带白字的按钮

* 点击这个按钮会调用 `onPress` 函数，具体作用就是显示一个 `alert` 弹出框

* 你还可以指定 `color` 属性来修改按钮的颜色

![图片](https://reactnative.cn/docs/assets/Button.png)

试试下面这个使用Button的例子：

```jsx
import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
```

### `Touchable` 系列组件

> 这个组件的样式是固定的

如果它的外观并不怎么搭配你的设计，那就需要使用 `TouchableOpacity` 或是 `TouchableNativeFeedback` 组件来定制自己所需要的按钮

* 视频教程[【如何制作一个按钮】](http://v.youku.com/v_show/id_XMTQ5OTE3MjkzNg==.html?f=26822355&from=y1.7-1.3)讲述了完整的过程

* 或者你也可以在 `github.com` 网站上搜索 `react native button` 来看看社区其他人的作品

具体使用哪种组件，取决于你希望给用户什么样的视觉反馈：

* 一般来说，你可以使用[【 `TouchableHighlight` 】](https://reactnative.cn/docs/touchablehighlight)来制作按钮或者链接

  * 注意此组件的背景会在用户手指按下时变暗

* 在 `Android` 上还可以使用[【 `TouchableNativeFeedback` 】](https://reactnative.cn/docs/touchablenativefeedback)，它会在用户手指按下时形成类似墨水涟漪的视觉效果

* [【 `TouchableOpacity` 】](https://reactnative.cn/docs/touchableopacity)会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色

* 如果你想在处理点击事件的同时不显示任何视觉反馈，则需要使用[【 `TouchableWithoutFeedback` 】](https://reactnative.cn/docs/touchablewithoutfeedback)

* 某些场景中你可能需要检测用户是否进行了长按操作

  * 可以在上面列出的任意组件中使用 `onLongPress` 属性来实现

我们来看一下示例：

```jsx
import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})
```

## 使用滚动视图

> `ScrollView` 是一个通用的可滚动的容器，你可以在其中放入多个组件和视图，而且这些组件并不需要是同类型的

`ScrollView` 不仅可以垂直滚动，还能水平滚动（通过 `horizontal` 属性来设置）

* 下面的示例代码创建了一个垂直滚动的 `ScrollView` ，其中还混杂了图片和文字组件

```jsx
import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}
```

* 可以将滚动视图配置为允许使用滑动，通过 `pagingabled` 属性在视图中进行分页

  * 在视图之间水平滑动也可以使用 `viewpagerandroid` 组件在 `Android` 上实现

* 带有单个项目的滚动视图可用于允许用户缩放内容

  * 设置 `MaximumZoomScale` 和 `MinimumZoomScale` 道具，您的用户将能够使用收缩和展开手势来放大和缩小

`ScrollView` 适合用来显示数量不多的滚动元素

* 放置在 `ScrollView` 中的所有组件都会被渲染，哪怕有些组件因为内容太长被挤出了屏幕外

* 如果你需要显示较长的滚动列表，那么应该使用功能差不多但性能更好的 `FlatList` 组件

## 使用长列表

`React Native` 提供了几个适用于展示长列表数据的组件，一般而言我们会选用：

* `FlatList`

* `SectionList`

### `FlatList` 组件

用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同

* `FlatList` 更适于长列表数据，且元素个数可以增删

  * 和 `ScrollView` 不同的是，`FlatList` 并不立即渲染所有元素，而是优先渲染屏幕上可见的元素

* `FlatList` 组件必须的两个属性是：

  * `data`

    `data` 是列表的数据源

  * `renderItem`

    `renderItem` 从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染

下面的例子创建了一个简单的 `FlatList` ，并预设了一些模拟数据：

* 首先是初始化 `FlatList` 所需的 `data` ，其中的每一项（行）数据之后都在 `renderItem` 中被渲染成了 `Text` 组件，最后构成整个 `FlatList`

```jsx
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})
```

如果要渲染的是一组需要分组的数据，也许还带有分组标签的，那么 `SectionList` 将是个不错的选择：

```jsx
import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
```

## 网络

> 很多移动应用都需要从远程地址中获取数据或资源

你可能需要给某个 `REST API` 发起 `POST` 请求以提交用户数据，又或者可能仅仅需要从某个服务器上获取一些静态内容，新手可以对照这个[【简短的视频教程】](http://v.youku.com/v_show/id_XMTUyNTEwMTA5Ng==.html)加深理解

### 使用 `Fetch`

> `React Native` 提供了和 `web` 标准一致的 `Fetch API` ，用于满足开发者访问网络的需求

如果你之前使用过 `XMLHttpRequest` (即俗称的 `ajax` )或是其他的网络 `API` ，那么 `Fetch` 用起来将会相当容易上手

* 这篇文档只会列出 `Fetch` 的基本用法，并不会讲述太多细节

* 你可以使用你喜欢的搜索引擎去搜索 `fetch api` 关键字以了解更多信息

#### 发起请求

要从任意地址获取内容的话，只需简单地将网址作为参数传递给 `fetch` 方法即可（ `fetch` 这个词本身也就是获取的意思）：

```jsx
fetch('https://mywebsite.com/mydata.json');
```

* `Fetch` 还有可选的第二个参数，可以用来定制 `HTTP` 请求一些参数：

  * 你可以指定 `header` 参数

  * 或是指定使用 `POST` 方法

  * 又或是提交数据等等

```jsx
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});
```

* 提交数据的格式关键取决于 `headers` 中的 `Content-Type`

  * `Content-Type` 有很多种，对应 `body` 的格式也有区别

  * 到底应该采用什么样的 `Content-Type` 取决于服务器端，所以请和服务器端的开发人员沟通确定清楚

* 常用的 `Content-Type` 除了上面的 `application/json` ，还有传统的网页表单形式，示例如下：

```jsx
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'key1=value1&key2=value2',
});
```

* 可以参考[【 `Fetch` 请求文档】](https://developer.mozilla.org/en-US/docs/Web/API/Request)来查看所有可用的参数

> 注意：使用 Chrome 调试目前无法观测到 React Native 中的网络请求，你可以使用第三方的[【 `react-native-debugger` 】](https://github.com/jhen0409/react-native-debugger)来进行观测

#### 处理服务器的响应数据

> 前面的例子演示了如何发起请求；但很多情况下，你还需要处理服务器回复的数据

网络请求天然是一种异步操作（同样的还有 `asyncstorage` ）：

* 无论在语法层面怎么折腾，它们的异步本质是无法变更的

* 异步的意思是你应该趁这个时间去做点别的事情，比如显示 `loading` ，而不是让界面卡住傻等

`Fetch` 方法会返回一个 `Promise` ，这种模式可以简化异步风格的代码（译注：如果你不了解 `promise` ，建议使用搜索引擎补课）：

```jsx
function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}
```

你也可以在 `React Native` 应用中使用 `ES2017` 标准中的`async/await` 语法：

```jsx
// 注意这个方法前面有async关键字
async function getMoviesFromApi() {
  try {
    // 注意这里的await语句，其所在的函数必须有async关键字声明
    let response = await fetch(
      'https://facebook.github.io/react-native/movies.json',
    );
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}
```

别忘了 `catch` 住 `fetch` 可能抛出的异常，否则出错时你可能看不到任何提示：

```jsx
import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}
```

> 默认情况下，`iOS` 会阻止所有非 `https` 的请求：如果你请求的接口是 `http` 协议，那么首先需要添加一个 `App Transport Security` 的例外，详细可参考[【这篇帖子】](https://segmentfault.com/a/1190000002933776)

#### 使用其他的网络库

`React Native` 中已经内置了 `XMLHttpRequest API` (也就是俗称的 `ajax` )

* 一些基于 `XMLHttpRequest` 封装的第三方库也可以使用，例如 `frisbee` 或是 `axios` 等

* 但注意不能使用 `jQuery` ，因为 `jQuery` 中还使用了很多浏览器中才有而 `React Native` 中没有的东西

  * 所以也不是所有 `web` 中的 `ajax` 库都可以直接使用

```jsx
var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
  } else {
    console.warn('error');
  }
};

request.open('GET', 'https://mywebsite.com/endpoint/');
request.send();
```

> 需要注意的是，安全机制与网页环境有所不同：在应用中你可以访问任何网站，没有跨域的限制

### `WebSocket` 支持

`React Native` 还支持 `WebSocket` ，这种协议可以在单个 `TCP` 连接上提供全双工的通信信道

```jsx
var ws = new WebSocket('ws://host.com/path');

ws.onopen = () => {
  // connection opened
  ws.send('something'); // send a message
};

ws.onmessage = (e) => {
  // a message was received
  console.log(e.data);
};

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
};
```

### 获取和基于 `cookie` 的身份验证的已知问题

> 以下选项当前不使用 `fetch` ：

* `redirect:manual`
* `credentials:omit`

> 在 `Android` 上使用相同名称的头文件只会导致出现最新的头文件

* [【这里】](https://github.com/facebook/react-native/issues/18837#issuecomment-398779994)可以找到一个临时的解决方案

> 基于 `cookie` 的身份验证当前不稳定

* 您可以查看[【这里】](https://github.com/facebook/react-native/issues/23185)提出的一些问题

> 至少在 `iOS` 上，当通过 `302` 重定向时，如果存在 `set cookie` 头，则 `cookie` 设置不正确

* 由于无法手动处理重定向，因此如果重定向是过期会话的结果，则可能导致出现无限请求的情况

## 示例教程：电影列表

### 简介

在本示例教程中，我们将编写一个简单的应用，可以从电影数据库中取得最近正在上映的 `25` 部电影，并在一个 `FlatList` 中展示出来

### 准备工作

`React Native` 需要一些基础的配置工作，你可以参考[【开始使用 `React Native` 】](https://reactnative.cn/docs/getting-started)来进行

* 在所有依赖的软件都已经安装完毕后，请创建一个 `React Native` 工程和我们一起开始这次示例：

  ```
  react-native init SampleAppMovies
  ```

  * 这个命令会初始化一个工程

  * 下载 React Native 的所有源代码和依赖包

  * 最后在 `SampleAppMovies/iOS/SampleAppMovies.xcodeproj` 和 `SampleAppMovies/android/app` 下分别创建一个新的 `XCode` 工程( `iOS` )和一个 `gradle` 工程( `Android` )

### 开发

#### 想开发 `iOS` 版本

你现在可以在 `XCode` 中打开刚刚创建的工程( `SampleAppMovies/iOS/SampleAppMovies.xcodeproj` )，然后只要按下 `⌘+R` 就可以构建并运行

* 这个操作会同时打开一个用于实现动态代码加载的 `Node` 服务（ `React Packager` ）

* 所以每当你修改代码，你只需要在模拟器中按下 `⌘+R` ，而无需重新在 `XCode` 中编译

#### 想开发 `Android` 版本

先连接你的设备或启动模拟器，然后在 `SampleAppMovies` 目录下运行 `react-native run-android` ，就会构建工程

* 注意：在第一次构建中会联网下载很多依赖，耗时较长；在国内的话务必使用稳定的 `XX` 工具，否则会一直失败

* 这一步会自动安装到你的模拟器或者设备，同时启动用于实现动态代码加载的 `Node` 服务

* 当你修改代码之后，你需要打开摇一摇菜单

  * 摇一下设备，或者按下设备的 `Menu` 键，或者在模拟器上按下 `F2` 或 `Page Up` ，`Genymotion` 按下 `⌘+M`

* 然后在菜单中点击 `Reload JS`

### `Hello World`

`react-native init` 命令会创建一个指定名字的应用，我们刚才输入的命令就创建了一个名为 `SampleAppMovies` 的应用

* 这是一个简单的 `Hello World` 应用

* 你可以编辑 `App.js` 来做一些改动，然后在模拟器中按 `⌘+R` 来看到修改的结果

### 模拟数据

> 译注：本文的示例代码使用了 `ES6` 语法，可能和其他文档写法不一致

`React Native` 从 `0.18` 之后，新建项目默认已经采用了 `ES6` 语法，故我们推荐不熟悉 `ES6` 与 `ES5` 区别的朋友先读读[【这篇文章】](http://bbs.reactnative.cn/topic/15)，另外还可以看看[【阮一峰老师的书】](http://es6.ruanyifeng.com/)

> 在我们真正从 `Rotten Tomatoes` (译注：一个国外的电影社区)抓取数据之前，我们先制造一些模拟数据来练一练手

在 `Facebook` 我们通常在 `JavaScript` 文件的开头，紧跟着 `import` 语句之后声明一个常量，不过这不重要，你可以把它放在 `App.js` 的任意位置：

```jsx
var MOCKED_MOVIES_DATA = [
  {
    title: "标题",
    year: "2015",
    posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
  }
];
```

* 译注：在 `iOS` 上使用 `http` 链接的图片地址可能不会显示，参见[【这篇说明修改】](https://segmentfault.com/a/1190000002933776)

* 从 `Android9` 开始，也会默认阻止 `http` 请求，请参考[【相关配置】](https://blog.csdn.net/qq_40347548/article/details/86766932)

#### 展现一个电影

我们接下来要展现一个电影，绘制它的标题、年份、以及缩略图（译注：这个过程我们通常会叫做 **渲染 / `render`** ，后面我们都会用 **`渲染`** 这个词）

* 渲染缩略图需要用到 `Image` 组件，所以把 `Image` 添加到对 `React` 的 `import` 列表中：

  ```jsx
  import React, { Component } from "react";
  import { Image, StyleSheet, Text, View } from "react-native";
  ```

* 然后修改一下 `render` 函数，这样我们可以把上面创建的模拟数据渲染出来

  ```jsx
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image source={{uri: movie.posters.thumbnail}} />
      </View>
    );
  }
  ```

* 按下 `⌘+R` 或者 `Reload JS` ，现在你应该能看到文字 `Title` 和 `2015` ，但现在 `Image` 组件没渲染任何东西，这是因为我们还没有为图片指定我们想要渲染的宽和高

  * 这通过样式来实现

  * 当我们修改样式的时候，我们也应该清理掉我们不再使用的样式

  ```jsx
  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    thumbnail: {
      width: 53,
      height: 81
    }
  });
  ```

* 然后把它应用到 `Image` 组件上

  ```jsx
  <Image source={{ uri: movie.posters.thumbnail }} style={styles.thumbnail} />
  ```

* 按下 `⌘+R` 或者 `Reload JS` ，现在图片应该可以被渲染出来了

![图片](https://reactnative.cn/img/TutorialMock.png)

![图片](https://reactnative.cn/img/TutorialMock2.png)

#### 添加样式

现在我们已经成功的把我们的数据渲染出来了，下面让我们把它弄的更好看一些

* 我想把文字放在图片的右边，然后把标题弄的大一些，并且水平居中：

  ```
  +---------------------------------+
  |+-------++----------------------+|
  ||       ||        标题          ||
  || 图片  ||                      ||
  ||       ||        年份          ||
  |+-------++----------------------+|
  +---------------------------------+
  ```

* 所以我们需要增加一个 `container` 来实现一个水平布局内嵌套一个垂直布局

  ```jsx
  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.posters.thumbnail }} style={styles.thumbnail} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
      </View>
    </View>
  );
  ```

  * 和之前相比并没有太多变化，我们增加了一个 `container` 来包装文字，然后把它移到了 `Image` 的后面（因为他们最终在图片的右边）

* 然后我们来看看样式要怎么改：

  ```jsx
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ```

  * 在上面的代码片段中，我们用了一句 `flexDirection: 'row'` 来让我们的主容器的成员从左到右横向布局，而非默认的从上到下纵向布局

* 现在我们往 `style` 对象里增加另一个样式：

  ```jsx
  rightContainer: {
    flex: 1,
  },
  ```

  * 这句话的作用是让 `rightContainer` 在父容器中占据 `Image` 之外剩下的全部空间

  * 如果你还不是很理解的话，你可以往 `rightContainer` 里增加一个 `backgroundColor` 看一看，然后再去掉 `flex:1` 对比一下

  * 你会发现去掉这一句后，容器会变成能容纳它孩子的最小大小

* 给文字添加样式就简单的多了：

  ```jsx
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  ```

* 再按一次 `⌘+R` 或者 `Reload JS` 来看看最新的结果

![图片](https://reactnative.cn/img/TutorialStyledMock.png)

![图片](https://reactnative.cn/img/TutorialStyledMock2.png)

> 我们用的是 `Flexbox` 来布局，如果你想了解更多，可以读读[【这篇文章】](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### 拉取真正的数据

> 从 `Rotten Tomatoes` 的 `API` 拉取数据和学习 `React Native` 并没有什么直接关系，所以你也可以直接跳过本节

把下面的常量放到文件的最开头（通常在 `import` 下面）来创建我们请求数据所需的地址常量 `REQUEST_URL`

```jsx
/**
 * 为了避免骚扰，我们用了一个样例数据来替代 Rotten Tomatoes 的 API 请求，这个样例数据放在 React Native 的 Github 库中
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难
 */
var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
```

* 首先在应用中创建一个初始的 `null` 状态，这样可以通过 `this.state.movies == null` 来判断我们的数据是不是已经被抓取到了

* 我们在服务器响应返回的时候执行 `this.setState({movies: moviesData})` 来改变这个状态

* 把下面这段代码放到我们的 `React` 类的 `render` 函数之前（下面注释中的 `绑定操作` 你可以看看这个[【短视频教程】](http://v.youku.com/v_show/id_XMTgyNzM0NjQzMg==.html)）：

  ```jsx
  constructor(props) {
    super(props);   // 这一句不能省略，照抄即可
    this.state = {
      movies: null,  // 这里放你自己定义的 state 变量及初始值
    };
    // 在 ES6 中，如果在自定义的函数里使用了 this 关键字，则需要对其进行“绑定”操作，否则 this 的指向不对
    // 像下面这行代码一样，在 constructor 中使用 bind 是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }
  ```

* 组件加载完毕之后，就可以向服务器请求数据

  * `componentDidMount` 是 `React` 组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不会再被调用

  * `React` 中的各种生命周期方法请[【参阅此文档】](http://facebook.github.io/react/docs/component-specs.html)

  ```jsx
  componentDidMount() {
    this.fetchData();
  }
  ```

* 现在我们来为组件添加 `fetchData` 函数

  * 你所需要做的就是在 `Promise` 调用链结束后执行 `this.setState({movies:data})`

  * 在 `React` 的工作机制下，`setState` 实际上会触发一次重新渲染的流程，此时 `render` 函数被触发，发现 `this.state.movies` 不再是 `null`

  ```jsx
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          movies: responseData.movies,
        });
      });
  }
  ```

* 现在我们来修改 `render` 函数

  * 在电影数据加载完毕之前，先渲染一个 `加载中` 的视图；而如果电影数据已经加载完毕了，则渲染第一个电影数据

    ```jsx
    render() {
      if (!this.state.movies) {
        return this.renderLoadingView();
      }

      var movie = this.state.movies[0];
      return this.renderMovie(movie);
    }

    renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            正在加载电影数据……
          </Text>
        </View>
      );
    }

    renderMovie(movie) {
      return (
        <View style={styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
    }
    ```

* 现在再按一次 `⌘+R` 或者 `Reload JS` ，你会首先看到 `正在加载电影数据……` ，然后在响应数据到达之后，看到第一个电影的信息

![图片](https://reactnative.cn/img/TutorialSingleFetched.png)

![图片](https://reactnative.cn/img/TutorialSingleFetched2.png)

### `FlatList`

> 现在我们来让我们的应用能够渲染所有的数据而不是仅仅第一部电影；我们要用到的就是 `FlatList` 组件

为什么建议把内容放到 `FlatList` 里？

比起直接渲染出所有的元素，或是放到一个 `ScrollView` 里有什么优势？

* 这是因为尽管 `React` 很高效，渲染一个可能很大的元素列表还是会很慢

* `FlatList` 会安排视图的渲染，只显示当前在屏幕上的那些元素

* 而那些已经渲染好了但移动到了屏幕之外的元素，则会从原生视图结构中移除（以提高性能）

首先要做的事情：在文件最开头引入 `FlatList`

```jsx
import React, { Component } from "react";
import { Image, FlatList, StyleSheet, Text, View } from "react-native";
```

现在来修改 `render` 函数，当我们已经有了数据之后，渲染一个包含多个电影信息的 `FlatList` ，而不仅仅是单个的电影

```jsx
render() {
  if (!this.state.loaded) {
    return this.renderLoadingView();
  }

  return (
    <FlatList
      data={this.state.data}
      renderItem={this.renderMovie}
      style={styles.list}
      keyExtractor={item => item.id}
    />
  );
}
```

* `keyExtractor` 此函数用于为给定的item生成一个不重复的 `key`

  * `Key` 的作用是使 `React` 能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销

  * 若不指定此函数，则默认抽取 `item.key` 作为 `key` 值

  * 若 `item.key` 也不存在，则使用数组下标

你会注意到我们现在用到了 `this.state` 中的 `data`

* 下一步就是在 `constructor` 生成的初始状态中添加一个空白的 `data`

  * 另外，我们现在要把数据存储在 `data` 中了，所以不再另外用 `this.state.movies` 来保存数据

  * 我们可以在 `state` 里用一个布尔型的属性( `this.state.loaded` )来判断数据加载是否已经完成了

```jsx
constructor(props) {
  super(props);
  this.state = {
    data: [],
    loaded: false,
  };
  // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
  // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
  this.fetchData = this.fetchData.bind(this);
}
  ```

同时我们也要修改 `fetchData` 方法来把数据添加到 `data` 里

* 注意这里使用了数组的 `concat` 方法生成新数组，不能直接在原数组上 `push`

```jsx
fetchData() {
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
      this.setState({
        data: this.state.data.concat(responseData.movies),
        loaded: true,
      });
    });
}
```

`renderMovie` 方法的构型也有变化

* 注意如果你要在这个方法中使用 `this` 关键字的话，需要怎么改？

```jsx
renderMovie({ item }) {
  // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
  // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.posters.thumbnail}}
        style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.year}>{item.year}</Text>
      </View>
    </View>
  );
}
```

最后，我们再在 `styles` 对象里给 `FlatList` 添加一些样式

```jsx
list: {
  paddingTop: 20,
  backgroundColor: '#F5FCFF',
}
```

现在可以体现最终的结果了：

![图片](https://reactnative.cn/img/TutorialFinal.png)

![图片](https://reactnative.cn/img/TutorialFinal2.png)

为了实现一个完整功能的应用，接下来其实还有一些工作要做，譬如：

* 添加导航器

* 搜索

* 加载更多

* ……等等

### 最终的代码( `App.js` )

```jsx
import React, { Component } from "react";

import { Image, FlatList, StyleSheet, Text, View } from "react-native";

var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class SampleAppMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item => item.id}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  renderMovie({ item }) {
    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  list: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
})
```

## 其他参考资源

 `React Native` 并不全是某一家公司的作品 —— 它汇聚了成千上万开源社区开发者的智慧结晶

### 常用的第三方库

开发实践中的一个常见问题就是如何管理应用的 **状态（ `state` ）**

* 这方面目前最流行的库非 `Redux` 莫属了

  * 不要被 `Redux` 中经常出现的类似 `reducer` 这样的概念术语给吓住了

  * 它其实是个很简单的库，网上也有很多优秀的[【视频教程（英文）】](https://egghead.io/courses/getting-started-with-redux)

* 如果你在寻找具有某个特定功能的第三方库，那么可以看看别人[【精心整理的资源列表】](https://github.com/jondot/awesome-react-native)

  * 这里还有个类似的[【中文资源列表】](https://github.com/reactnativecn/react-native-guide)

* 更重要的技能是学会在 `github` 上搜索

  * 比如你需要搜索视频相关的库，那么可以在 `github` 中搜索 `react native video`

### 开发工具

[【 `Nuclide` 】](https://nuclide.io/)是 `Facebook` 内部所使用的 `React Native` 开发工具：

* 它最大的特点是自带调试功能，并且非常好地支持 `flow` 语法规则

* [【 `VS Code` 】](https://code.visualstudio.com/)也是目前非常受 JS 开发者欢迎的 IDE 工具

[【 `Ignite` 】](https://github.com/infinitered/ignite)是一套整合了 Redux 以及一些常见 UI 组件的脚手架：

* 它带有一个命令行可以生成 `app` 、组件或是容器

* 如果你喜欢它的选择搭配，那么不妨一试

[【 `App Center` 】](https://appcenter.ms/)是由微软提供的热更新服务：

* 热更新可以使你绕过 `AppStore` 的审核机制，直接修改已经上架的应用

* 对于国内用户，我们也推荐由本网站提供的 `Pushy` 热更新服务

  * 相比 `CodePush` 来说，提供了全中文的文档和技术支持，服务器部署在国内速度更快，还提供了全自动的差量更新方式，大幅节约更新流量，欢迎朋友们试用和反馈意见！

[【 `Expo` 】](https://docs.expo.io/)是一套沙盒开发环境，还带有一个已上架的空应用容器

* 这样你可以在没有原生开发平台（ `Xcode` 或是 `Android Studio` ）的情况下直接编写 `React Native` 应用

* 注意：这样你只能写 `JavaScript` 部分代码而没法写原生代码

[【 `Yoga` 】](https://yogalayout.com/)是一个独立的布局引擎

* 它超越了 `React Native` ，允许产品工程师通过一个高度优化的开源布局引擎快速为多个平台构建布局

* 该引擎的设计考虑到了速度、大小和易用性

`Bugsnag` 、`Microsoft App Center` 和 `Sentry` 都为 `React` 和 `React Native` 提供出色的崩溃和错误监控服务

* 这些服务允许您主动实时监控应用程序上发生的崩溃和问题，以便快速修复它们并改善用户体验

### `React Native` 的交流社区

以下这些都是英文的交流区，我也就不翻译了……

The [React Native Community](https://www.facebook.com/groups/react.native.community) Facebook group has thousands of developers, and it's pretty active. Come there to show off your project, or ask how other people solved similar problems.

[Reactiflux](https://discord.gg/0ZcbPKXt5bZjGY5n) is a Discord chat where a lot of React-related discussion happens, including React Native. Discord is just like Slack except it works better for open source projects with a zillion contributors. Check out the #react-native channel.

The [React Twitter account](https://twitter.com/reactjs) covers both React and React Native. Follow the React Native Twitter account and blog to find out what's happening in the world of React Native.

There are a lot of [React Native Meetups](http://www.meetup.com/topics/react-native/) that happen around the world. Often there is React Native content in React meetups as well.

Sometimes we have React conferences. We posted the [videos from React.js Conf 2017](https://www.youtube.com/playlist?list=PLb0IAmt7-GS3fZ46IGFirdqKTIxlws7e0) and [React.js Conf 2016](https://www.youtube.com/playlist?list=PLb0IAmt7-GS0M8Q95RIc2lOM6nc77q1IY), and we'll probably have more conferences in the future, too. Stay tuned. You can also find a list of dedicated React Native conferences [here](http://www.awesome-react-native.com/#conferences).

欢迎朋友们在[【论坛分享区】](http://bbs.reactnative.cn/category/5/)分享中文教程和资源


# 进阶指南

## 组件和 `API`

> `React Native` 提供了一些内置的组件，你可以在网站的左侧看到组件的完整列表

如果你不知道从哪看起，那么可以先看一下下面这个简单的分类：

* [【基础组件】](https://reactnative.cn/docs/components-and-apis#基础组件)
* [【交互控件】](https://reactnative.cn/docs/components-and-apis#交互控件)
* [【列表视图】](https://reactnative.cn/docs/components-and-apis#列表视图)
* [【 `iOS` 独有组件】](https://reactnative.cn/docs/components-and-apis#iOS独有的组件和API)
* [【 `Android` 独有组件】](https://reactnative.cn/docs/components-and-apis#Android独有的组件和API)
* [【其他】](https://reactnative.cn/docs/components-and-apis#其他)

> 需要说明的是，你不用被局限在这些内置组件上

`React Native` 是大开源社区的作品，所以你还可以在 `github` 或是 `npm` 上搜索到带有 `react native` 关键字的大量的第三方组件

### 基础组件

大多数应用都会用到这里的基础组件，如果你是新手的话，那更应该先好好熟悉一下这些组件：

* `View`

  搭建用户界面的最基础组件

* `Text`

  显示文本内容的组件

* `Image`

  显示图片内容的组件

* `TextInput`

  文本输入框

* `ScrollView`

  可滚动的容器视图

* `StyleSheet`

  提供类似CSS样式表的样式抽象层

### 交互控件

提供一些常见的跨平台的交互控件：

* `Button`

  一个简单的跨平台的按钮控件

* `Picker`

  在 `iOS` 和 `Android` 上调用各自原生的选择器控件

* `Slider`

  滑动数值选择器

* `Switch`

  开关控件

### 列表视图

和一般化用途的 `ScrollView` 不同，下面的列表组件只会渲染当前屏幕可见的元素，这样有利于显示大量的数据：

* `FlatList`

  高性能的滚动列表组件

* `SectionList`

  类似 `FlatList` ，但是多了分组显示

### `iOS` 独有的组件和 `API`

下面很多组件都是对常用的 `UIKit` 类的封装：

* `ActionSheetIOS`

  从设备底部弹出一个显示一个ActionSheet弹出框选项菜单或分享菜单

* `AlertIOS`

  弹出一个提示对话框，还可以带有输入框

* `DatePickerIOS`

  显示一个日期/时间选择器

* `ImagePickerIOS`

  插入图片

* `NavigatorIOS`

  `UINavigationController` 的封装，用于实现页面的导航跳转

* `ProgressViewIOS`

  渲染一个 `UIProgressView` 进度条

* `PushNotificationIOS`

  管理推送通知，包括权限处理和应用角标数字

* `SegmentedControlIOS`

  渲染一个UISegmentedControl顶部选项卡布局

* `TabBarIOS`

  渲染一个 `UITabViewController` 底部选项卡布局

  需要和 `TabBarIOS.Item` 搭配使用

### `Android` 独有的组件和 `API`

下面很多组件提供了对 Andriod 常用类的封装：

* `BackHandler`

  监听并处理设备上的返回按钮

* `DatePickerAndroid`

  打开日期选择器

* `DrawerLayoutAndroid`

  渲染一个 `DrawerLayout` 抽屉布局

* `PermissionsAndroid`

  对 `Android 6.0` 引入的权限模型的封装

* `ProgressBarAndroid`

  渲染一个 `ProgressBar` 进度条

* `TimePickerAndroid`

  打开时间选择器

* `ToastAndroid`

  弹出一个 `Toast` 提示框

* `ToolbarAndroid`

  在顶部渲染一个 `Toolbar` 工具栏

* `ViewPagerAndroid`

  可左右翻页滑动的视图容器

### 其他

下面的组件可能适用于一些特定场景：

* `ActivityIndicator`

  显示一个圆形的正在加载的符号

* `Alert`

  弹出一个提示框，显示指定的标题和信息

* `Animated`

  易于使用和维护的动画库，可生成流畅而强大的动画

* `CameraRoll`

  访问本地相册

* `Clipboard`

  读写剪贴板内容

* `Dimensions`

  获取设备尺寸

* `KeyboardAvoidingView`

  一种视图容器，可以随键盘升起而自动移动

* `Linking`

  提供了一个通用的接口来调起其他应用或被其他应用调起

* `Modal`

  一种简单的覆盖全屏的模态视图

* `PixelRatio`

  可以获取设备的像素密度

* `RefreshControl`

  此组件用在 `ScrollView` 及其衍生组件的内部，用于添加下拉刷新的功能

* `StatusBar`

  用于控制应用顶部状态栏样式的组件

* `WebView`

  在原生视图中显示 `Web` 内容的组件

## 特定平台代码

> 在编写跨平台的应用时，我们肯定希望尽可能多地复用代码；但是总有些时候我们会碰到针对不同平台编写不同代码的需求

`React Native` 提供了两种方法来区分平台：

* 使用 `Platform` 模块

* 使用特定平台扩展名

> 另外，有些内置组件的某些属性可能只在特定平台上有效

### `Platform` 模块

> `React Native` 提供了一个检测当前运行平台的模块

如果组件只有一小部分代码需要依据平台定制，那么这个模块就可以派上用场：

```jsx
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  height: Platform.OS === "ios" ? 200 : 100
});
```

* `Platform.OS` 在 `iOS` 上会返回 `iOS`

* 而在 `Android` 设备或模拟器上则会返回 `Android`

还有个实用的方法是 `Platform.select()`

* 它可以以 `Platform.OS` 为 `key` ，从传入的对象中返回对应平台的值，见下面的示例：

```jsx
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "red"
      },
      android: {
        backgroundColor: "blue"
      }
    })
  }
})
```

* 上面的代码会根据平台的不同返回不同的 `container` 样式

  * `iOS` 上背景色为 `红色` ，而 `Android` 为 `蓝色`

`Platform.select()` 方法可以接受任何合法类型的参数

* 你可以直接用它针对不同平台返回不同的组件，像下面这样：

```jsx
const Component = Platform.select({
  ios: () => require("ComponentIOS"),
  android: () => require("ComponentAndroid")
})();

<Component />;
```

#### 检测 `Android` 版本

在 `Android` 上，`Version` 属性是一个数字，表示 `Android` 的 `api level` ：

```jsx
import { Platform } from "react-native";

if (Platform.Version === 25) {
  console.log("Running on Nougat!");
}
```

#### 检测 `iOS` 版本

在 `iOS` 上，`Version` 属性是 `-[UIDevice systemVersion]` 的返回值：

* 具体形式为一个表示当前系统版本的字符串

* 比如可能是 `10.3`

```jsx
import { Platform } from "react-native";

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log("Work around a change in behavior");
}
```

### 特定平台扩展名

> 当不同平台的代码逻辑较为复杂时，最好是放到不同的文件里，这时候我们可以使用特定平台扩展名

`React Native` 会检测某个文件是否具有 `.ios.` 或是 `.android.` 的扩展名，然后根据当前运行的平台自动加载正确对应的文件

* 比如你可以在项目中创建下面这样的组件：

  ```
  BigButton.ios.js
  BigButton.android.js
  ```

* 然后去掉平台扩展名直接引用：

  ```jsx
  import BigButton from './BigButton';
  ```

* `React Native` 会根据运行平台的不同自动引入正确对应的组件

如果你还希望在 `web` 端复用 `React Native` 的代码，那么还可以使用 `.native.js` 的扩展名

* 此时 `iOS` 和 `Android` 会使用 `BigButton.native.js` 文件

* 而 `web` 端会使用 `BigButton.js`

> 注意：目前官方并没有直接提供 `web` 端的支持，请在社区搜索第三方方案

例如，假设项目中有以下文件：

```
Container.js # 由 Webpack、Rollup 或任何其他 Web bundler 获取

Container.native.js # 由 React Native Bundler 为 Android 和 iOS（Metro）挑选
```

您仍然可以在不使用 `.native` 扩展名的情况下使用它，如下所示：

```jsx
import Container from './Container';
```

> 提示：将 `Web bundler` 配置为忽略 `.native.js` 扩展，以避免在生产包中使用未使用的代码，从而减少最终的包大小

## 使用导航器跳转页面

> 移动应用基本不会只由一个页面组成；管理多个页面的呈现、跳转的组件就是我们通常所说的导航器（ `navigator` ）

本文档总结对比了 `React Native` 中现有的几个导航组件

* 如果你刚开始接触，那么直接选择 `React Navigation` 就好

* `React Navigation` 提供了简单易用的跨平台导航方案，在 `iOS` 和 `Android` 上都可以进行翻页式、`tab` 选项卡式和抽屉式的导航布局

如果你想同时在 `iOS` 和 `Android` 上达到看起来像原生

* 或者你想把 `React Native` 整合到一个已经有原生导航管理的 `APP` 里

* 这个库提供了在两个平台都适用的原生导航：`react-native-navigation`

### `React Navigation`

> 社区今后主推的方案是一个单独的导航库 `react-navigation` ，它的使用十分简单

`React Navigation` 中的视图是原生组件，同时用到了运行在原生线程上的 `Animated` 动画库，因而性能表现十分流畅

* 此外其动画形式和手势都非常便于定制

* 要想详细了解 `React Navigation` 的具体用法，请访问其[【官方网站】](https://reactnavigation.org/)

  * 网站右上角有中文翻译，但内容可能会有所滞后

## 图片

### 静态图片资源

> `React Native` 提供了一个统一的方式来管理 `iOS` 和 `Android` 应用中的图片

要往 `App` 中添加一个静态图片，只需把图片文件放在代码文件夹中某处，然后像下面这样去引用它：

```jsx
<Image source={require('./my-icon.png')} />
```

> 注意，一些老文章和教程提到的 `require('image!xxx')` 的写法已经从 `0.40` 版本开始不再支持！

图片文件的查找会和 `JavaScript` 模块的查找方式一样

* 在前面的例子里，是哪个组件引用了这个图片，`Packager` 就会去这个组件所在的文件夹下查找 `my-icon.png`

* 如果你有 `my-icon.ios.png` 和 `my-icon.android.png` ，`Packager` 就会根据平台而选择不同的文件

  * 你还可以使用 `@2x` ，`@3x` 这样的文件名后缀，来为不同的屏幕精度提供图片

  * 比如下面这样的代码结构：

  ```
  .
  ├── button.js
  └── img
      ├── check.png
      ├── check@2x.png
      └── check@3x.png
  ```

  * 并且 `button.js` 里有这样的代码：

    ```jsx
    <Image source={require('./img/check.png')} />
    ```

`Packager` 会打包所有的图片并且依据屏幕精度提供对应的资源

* 譬如说，`iPhone 7` 会使用 `check@2x.png`

* 而 `iPhone 7 plus` 或是 `Nexus 5` 上则会使用 `check@3x.png`

* 如果没有图片恰好满足屏幕分辨率，则会自动选中最接近的一个图片

> 注意：如果你添加图片的时候 `packager` 正在运行，可能需要重启 `packager` 以便能正确引入新添加的图片

这样会带来如下的一些好处：

* `iOS` 和 `Android` 一致的文件系统

* 图片和 `JavaScript` 代码处在相同的文件夹，这样组件就可以包含自己所用的图片而不用单独去设置

* 不需要全局命名，你不用再担心图片名字的冲突问题了

* 只有实际被用到（即被 `require` ）的图片才会被打包到你的 `app`

* 现在在开发期间，增加和修改图片不需要重新编译了，只要和修改 `JavaScript` 代码一样刷新你的模拟器就可以了

* 与访问网络图片相比，`Packager` 可以得知图片大小了，不需要在代码里再声明一遍尺寸

* 现在通过 `npm` 来分发组件或库可以包含图片了

> 注意：为了使新的图片资源机制正常工作，`require` 中的图片名字必须是一个静态字符串

`require` 中的图片名字不能使用变量！因为 `require` 是在编译时期执行，而非运行时期执行！

```jsx
// 正确
<Image source={require('./my-icon.png')} />;

// 错误
var icon = this.props.active ? 'my-icon-active' : 'my-icon-inactive';
<Image source={require('./' + icon + '.png')} />;

// 正确
var icon = this.props.active
  ? require('./my-icon-active.png')
  : require('./my-icon-inactive.png');
<Image source={icon} />;
```

> 请注意：通过这种方式引用的图片资源包含图片的尺寸（宽度，高度）信息，如果你需要动态缩放图片（例如，通过 flex），你可能必须手动在 `style` 属性设置 `{ width: null, height: null }`

### 静态的非图片资源

> 上面描述的 `require` 语法也可以用来静态地加载你项目中的声音、视频或者文档文件

大多数常见文件类型都支持，包括：

* `.mp3`
* `.wav`
* `.mp4`
* `.mov`
* `.htm`
* `.pdf`
* ……等

> 完整列表请看[【 `packager defaults` 】](https://github.com/facebook/metro/blob/master/packages/metro-config/src/defaults/defaults.js#L14-L44)


你也可以创建自己的配置文件来支持其他类型的文件

* 具体的配置可以参考[【 `packager config file` 】](https://github.com/facebook/react-native/blob/0.57-stable/local-cli/util/Config.js#L65)

> 需要注意的是视频必须指定尺寸而不能使用 `flex` 样式，因为我们目前还不能从非图片资源中获取到尺寸信息

对于直接链接到 `Xcode` 或者 `Android` 资源文件夹的视频，则不会有这个限制

### 使用混合 `App` 的图片资源

如果你在编写一个混合 `App`

* 一部分 `UI` 使用 `React Native` ，而另一部分使用平台原生代码

* 可以使用已经打包到 `App` 中的图片资源

  * 以拖拽的方式放置在 `Xcode` 的 `asset` 类目中

  * 或是放置在 `Android` 的 `drawable` 目录里

注意此时只使用文件名，不带路径也不带后缀：

```jsx
<Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} />
```

对于放置在 `Android` 的 `assets` 目录中的图片，还可以使用 `asset:/` 前缀来引用：

```jsx
<Image source={{uri: 'asset:/app_icon.png'}} style={{width: 40, height: 40}} />
```

* 注意：这些做法并没有任何安全检查

* 你需要自己确保图片在应用中确实存在，而且还需要指定尺寸

### 网络图片

> 很多要在 `App` 中显示的图片并不能在编译的时候获得，又或者有时候需要动态载入来减少打包后的二进制文件的大小

这些时候，与静态资源不同的是：

* 你需要 `手动指定图片的尺寸`

* 同时我们强烈建议你使用 `https` 以满足 `iOS App Transport Security` 的要求

```jsx
// 正确
<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />

// 错误
<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />
```

#### 网络图片的请求参数

你可以在 `Image` 组件的 `source` 属性中指定一些请求参数，如下面的示例：

```jsx
<Image
  source={{
    uri: 'https://facebook.github.io/react/logo-og.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  }}
  style={{width: 400, height: 400}}
/>
```

### `Uri` 数据图片

有时候你可能拿到的是图片的 `base64` 数据，此时可以使用'data:'格式来显示图片

* 请注意：你需要手动指定图片的尺寸

* 建议仅对非常小的图片使用 `base64` 数据，比如一些小图标

```jsx
// 请记得指定宽高！
<Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
  }}
/>
```

### 本地文件系统中的图片

参考[【相册（ `CameraRoll` )】](https://reactnative.cn/docs/cameraroll)这个例子来看如何使用在Images.xcassets以外的本地资源

#### 最合适的相册图片

`iOS` 会为同一张图片在相册中保存多个不同尺寸的副本

* 为了性能考虑，从这些副本中挑出最合适的尺寸显得尤为重要

* 对于一处 `200x200` 大小的缩略图，显然不应该选择最高质量的 `3264x2448` 大小的图片

  * 如果恰好有匹配的尺寸，那么 `React Native` 会自动为你选好

  * 如果没有，则会选择最接近的尺寸进行缩放

    * 但也至少缩放到比所需尺寸大出 `50%` ，以使图片看起来仍然足够清晰

* 这一切过程都是自动完成的，所以你不用操心自己去完成这些繁琐且易错的代码

### 为什么不在所有情况下都自动指定尺寸呢?

在浏览器中，如果你不给图片指定尺寸，那么浏览器会首先渲染一个 `0x0` 大小的元素占位，然后下载图片，在下载完成后再基于正确的尺寸来渲染图片

* 这样做的最大问题是 `UI` 会在图片加载的过程中上下跳动，使得用户体验非常糟糕

在 `React Native` 中我们有意避免以上一行为

* 如此一来开发者就需要做更多工作来提前知晓远程图片的尺寸（或宽高比）

  * 我们相信这样可以带来更好的用户体验

* 然而，读取本地静态图片（使用 `require('./my-icon.png')` 语法）则无需指定尺寸

  * 因为它们的尺寸在加载时就可以立刻知道

比如这样一个引用 `require('./my-icon.png')` 的实际输出结果可能是：

```jsx
{"__packager_asset":true,"uri":"my-icon.png","width":591,"height":573}
```

### 资源属性是一个对象（ `object` ）

在 `React Native` 中，另一个值得一提的变动是我们把 `src` 属性改为了 `source` 属性，而且并不接受字符串，正确的值是一个带有 `uri` 属性的对象：

```jsx
<Image source={{uri: 'something.jpg'}} />
```

深层次的考虑是，这样可以使我们在对象中添加一些元数据( `metadata` )

* 假设你在使用 `require('./my-icon.png')` ，那么我们就会在其中添加真实文件路径以及尺寸等信息

  * 这只是举个例子，未来的版本中 `require` 的具体行为可能会变化

* 此外这也是考虑了未来的扩展性，比如我们可能会加入精灵图（ `sprites` ）的支持：

  * 在输出 `{uri: ...}` 的基础上，我们可以进一步输出裁切信息 `{uri: ..., crop: {left: 10, top: 50, width: 20, height: 40}}`

  * 这样理论上就可以在现有的代码中无缝支持精灵图的切分

对于开发者来说，则可以在其中标注一些有用的属性，例如图片的尺寸，这样可以使图片自己去计算将要显示的尺寸（而不必在样式中写死）

* 请在这一数据结构中自由发挥，存储你可能需要的任何图片相关的信息

### 缓存控制（仅 `iOS` ）

> 在某些情况下你可能仅仅想展示一张已经在本地缓存的图片，例如一个低分辨率的占位符，直到高分辨率的图片可用

> 或者你无所谓图片是否过时，而且也不在乎显示过时的图片，节省带宽相对更重要

缓存资源属性提供给了你控制网络层与缓存交互的方式：

* `default`

  使用原生平台默认策略

* `reload`

  `URL` 的数据将从原始地址加载

  不使用现有的缓存数据

* `force-cache`

  现有的缓存数据将用于满足请求，忽略其期限或到期日

  如果缓存中没有对应请求的数据，则从原始地址加载

* `only-if-cached`

  现有的缓存数据将用于满足请求，忽略其期限或到期日

  如果缓存中没有对应请求的数据，则不尝试从原始地址加载，并且认为请求是失败的

```jsx
<Image
  source={{
    uri: 'https://facebook.github.io/react/logo-og.png',
    cache: 'only-if-cached',
  }}
  style={{width: 400, height: 400}}
/>
```

### 背景图片与嵌套写法

开发者们常面对的一种需求就是类似 `web` 中的背景图（ `background-image` ）

* 要实现这一用例，只需使用 `<ImageBackground>` 组件（其 `props` 与 `<Image>` 完全相同）

* 然后把需要背景图的子组件嵌入其中即可

也可能你并不需要使用 `<ImageBackground>` ，因为它的实现其实非常简单，实质就是对图片使用了绝对定位

* 你可以阅读其[【文档】](https://reactnative.cn/docs/imagebackground)然后思考你是否有更好更简单的布局方案

```jsx
return (
  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
);
```

> 注意你必须指定宽高样式

### `iOS` 边框圆角的注意事项

请注意下列边框圆角样式目前在 `iOS` 的图片组件上还不支持：

* `borderTopLeftRadius`
* `borderTopRightRadius`
* `borderBottomLeftRadius`
* `borderBottomRightRadius`

### 在主线程外解码图片

> 图片解码有可能会需要超过一帧的时间

> 在 `web` 上这是页面掉帧的一大因素，因为解码是在主线程中完成的

在 `React Native` 中，图片解码则是在另一线程中完成的

* 在实际开发中，一般对图片还没下载完成时的场景都做了处理（添加 `loading` 等）

* 而图片解码时显示的占位符只占用几帧时间，并不需要你改动代码去额外处理

## 动画

> 流畅、有意义的动画对于移动应用用户体验来说是非常重要的

> 现实生活中的物体在开始移动和停下来的时候都具有一定的惯性，我们在界面中也可以使用动画来实现契合物理规律的交互

React Native 提供了两个互补的动画系统：

* 用于创建精细的交互控制的动画[【 `Animated` 】](https://reactnative.cn/docs/animated)

* 用于全局的布局动画[【 `LayoutAnimation` 】](https://reactnative.cn/docs/animations#layoutanimation-api)

### `Animated` 【此处为版本 `0.44` 的介绍，最新可[前往官方文档查看](https://reactnative.cn/docs/animated/)】

> `Animated` 使得开发者可以非常容易地实现各种各样的动画和交互方式，并且具备极高的性能

`Animated` 旨在以声明的形式来定义动画的输入与输出

* 在其中建立一个可配置的变化函数

* 然后使用简单的 `start/stop` 方法来控制动画按顺序执行

`Animated` 仅封装了四个可以动画化的组件：

* `View`
* `Text`
* `Image`
* `ScrollView`

> 不过你也可以使用[【 `Animated.createAnimatedComponent()` 】](https://reactnative.cn/docs/animated/#createanimatedcomponent)来封装你自己的组件

下面是一个在加载时带有淡入动画效果的视图：

```jsx
import React from 'react';
import { Animated, Text, View } from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
  }

  componentDidMount() {
    Animated.timing(                  // 随时间变化而执行动画
      this.state.fadeAnim,            // 动画中的变量值
      {
        toValue: 1,                   // 透明度最终变为1，即完全不透明
        duration: 10000,              // 让动画持续一段时间
      }
    ).start();                        // 开始执行动画
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // 使用专门的可动画化的View组件
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // 将透明度指定为动画变量值
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// 然后你就可以在组件中像使用`View`那样去使用`FadeInView`了
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
      </View>
    )
  }
}
```

我们来分解一下这个过程：

* 在 `FadeInView` 的构造函数里，我们创建了一个名为 `fadeAnim` 的 `Animated.Value`

  * 并将其放在 `state` 中

  * 而 `View` 的透明度是和这个值绑定的

  * 组件加载时，透明度首先设为 `0`

* 然后一个 `easing` 动画开始改变 `fadeAnim` 值

  * 同时会导致所有与其相关联的值（本例中是透明度）也逐帧更新

  * 最终和 `fadeAnim` 一样变为 `1`

> 这一过程经过特别优化，执行效率会远高于反复调用 `setState` 和多次重渲染

因为这一过程是纯声明式的，因此还有进一步优化的空间

* 比如我们可以把这些声明的配置序列化后发送到一个高优先级的线程上运行

### 配置动画

动画拥有非常灵活的配置项，自定义的或预定义的：

* `easing` 函数
* 延迟
* 持续时间
* 衰减系数
* 弹性常数
* ……等都可以在对应类型的动画中进行配置

`Animated` 提供了多种动画类型，其中最常用的要属[【 `Animated.timing()` 】](https://reactnative.cn/docs/animated#timing)

* 它支持随时间设置值的动画

  * 使用各种预定义的宽松功能

  * 你也可以使用你自己的函数

* 在动画中，缓和函数通常用于传递物体的逐渐加速和减速

  * 默认情况下，计时将使用缓和曲线，该曲线将逐渐加速到全速，并逐渐减速到停止结束

  * 可以通过传递一个参数来指定不同的函数

例如，如果我们要创建一个对象的 `2` 秒长动画，该对象在移动到其最终位置之前会稍微后退一点：

```jsx
Animated.timing(this.state.xPosition, {
  toValue: 100,
  easing: Easing.back(),
  duration: 2000
}).start();
```

> 查看 `Animated API` 的[【配置动画】](https://reactnative.cn/docs/animated#配置动画)部分，了解有关内置动画支持的所有配置参数的更多信息

### 组合动画

多个动画可以通过以下方法来组合使用：

* `parallel`（同时执行）
* `sequence`（顺序执行）
* `stagger`
* `delay`

> 它们中的每一个都接受一个要执行的动画数组，并且自动在适当的时候调用 `start/stop`

例如，以下动画将滑行到一个停止点，然后在平行旋转时弹回：

```jsx
Animated.sequence([
  // decay, then spring to start and twirl
  Animated.decay(position, {
    // coast to a stop
    velocity: { x: gestureState.vx, y: gestureState.vy }, // velocity from gesture release
    deceleration: 0.997
  }),
  Animated.parallel([
    // after decay, in parallel:
    Animated.spring(position, {
      toValue: { x: 0, y: 0 } // return to start
    }),
    Animated.timing(twirl, {
      // and twirl
      toValue: 360
    })
  ])
]).start(); // start the sequence group
```

默认情况下，如果任何一个动画被停止或中断了，组内所有其它的动画也会被停止

* `Parallel` 有一个 `stopTogether` 属性，如果设置为 `false` ，可以禁用自动停止

> 在 `Animated` 文档的[【组合动画】](https://reactnative.cn/docs/animated/#组合动画)一节中列出了所有的组合方法

### 合成动画值

> 你可以使用加减乘除以及取余等运算来[【把两个动画值合成为一个新的动画值】](https://reactnative.cn/docs/animated/#合成动画值)

有些情况下，动画值需要反转另一个动画值进行计算

* 例如反转比例（2x->0.5x）：

```jsx
const a = new Animated.Value(1);
const b = Animated.divide(1, a);

Animated.spring(a, {
  toValue: 2
}).start();
```

### 插值

> 每个属性都可以首先通过插值运行

插值将输入范围映射到输出范围，通常使用线性插值，但也支持放宽功能

* 默认情况下，它会将曲线外推到给定范围之外，但您也可以让它钳制输出值

将 `0-1` 范围转换为 `0-100` 范围的简单映射是：

```jsx
value.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 100]
});
```

例如，您可能希望考虑将 `Animated.Value` 从 `0` 变为 `1`

* 但是动画的位置从 `150px` 到 `0px` ，不透明度从 `0` 到 `1`

* 通过像这样修改上面示例中的样式，可以很容易地做到这一点：

```jsx
style={{
  opacity: this.state.fadeAnim, // Binds directly
  transform: [{
    translateY: this.state.fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
    }),
  }],
}}
```

> [【 `interpolate()` 】](https://reactnative.cn/docs/animated#interpolate)还支持定义多个区间段落，常用来定义静止区间等

举个例子：

* 要让输入在接近 `-300` 时取相反值

* 然后在输入接近 `-100` 时到达 `0`

* 然后在输入接近 `0` 时又回到 `1`

* 接着一直到输入到 `100` 的过程中逐步回到 `0`

* 最后形成一个始终为 `0` 的静止区间

* 对于任何大于 `100` 的输入都返回 `0`

具体写法如下：

```jsx
value.interpolate({
  inputRange: [-300, -100, 0, 100, 101],
  outputRange: [300, 0, 1, 0, 0]
});
```

它的最终映射结果如下：

| 输入 | 输出 |
| ---- | ---- |
| -400 | 450  |
| -300 | 300  |
| -200 | 150  |
| -100 | 0    |
| -50  | 0.5  |
| 0    | 1    |
| 50   | 0.5  |
| 100  | 0    |
| 101  | 0    |
| 200  | 0    |

> `interpolate()` 还支持到字符串的映射，从而可以实现颜色以及带有单位的值的动画变换

例如你可以像下面这样实现一个旋转动画：

```jsx
value.interpolate({
  inputRange: [0, 360],
  outputRange: ["0deg", "360deg"]
});
```

> `interpolate()` 还支持任意的渐变函数

其中有很多已经在 `Easing` 类中定义了，包括：

* 二次
* 指数
* 贝塞尔等曲线
* 以及 `step` 、`bounce` 等方法

> `interpolation`还支持限制输出区间 `outputRange`

你可以通过设置以下属性来限制输出区间：

* `extrapolate`
* `extrapolateLeft`
* `extrapolateRight`

默认值是 `extend`（允许超出），不过你可以使用 `clamp` 选项来阻止输出值超过 `outputRange`

### 跟踪动态值

动画中所设的值还可以通过跟踪别的值得到

* 你只要把 `toValue` 设置成另一个动态值而不是一个普通数字就行了

* 比如我们可以用弹跳动画来实现聊天头像的闪动

* 又比如通过 `timing` 设置 `duration:0` 来实现快速的跟随

他们还可以使用插值来进行组合：

```jsx
Animated.spring(follower, { toValue: leader }).start();
Animated.timing(opacity, {
  toValue: pan.x.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0]
  })
}).start();
```

`leader` 和 `follower` 动画将使用 `Animated.ValueXY()` 实现：

* 它是一个方便的处理 `2D` 交互的方法，譬如处理旋转或拖拽

* 它是一个简单的包含了两个 `Animated.Value` 实例的包装

* 然后提供了一系列辅助函数，使得 `ValueXY` 在许多时候可以替代 `Value` 来使用

> 比如在上面的代码片段中，`leader` 和 `follower` 可以同时为 `valueXY` 类型，这样 `x` 和 `y` 的值都会被跟踪

### 跟踪手势

[【 `Animated.event` 】](https://reactnative.cn/docs/animated#event)是 `Animated` 中与输入有关的部分，允许手势或其它事件直接绑定到动态值上

* 它通过一个结构化的映射语法来完成，使得复杂事件对象中的值可以被正确的解开

* 第一层是一个数组，允许同时映射多个值，然后数组的每一个元素是一个嵌套的对象

在下面的例子里，你可以发现 `scrollX` 被映射到了 `event.nativeEvent.contentOffset.x`

* `event` 通常是回调函数的第一个参数

* `pan.x` 和 `pan.y` 分别映射到 `gestureState.dx` 和 `gestureState.dy`

* `gestureState` 是传递给 `PanResponder` 回调函数的第二个参数

例如，使用水平滚动手势时，要将`event.nativeevent.contentoffset.x` 映射到`scrollx`（ `animated.value` ），请执行以下操作：

```jsx
onScroll={Animated.event(
  // scrollX = e.nativeEvent.contentOffset.x
  [{ nativeEvent: {
      contentOffset: {
        x: scrollX
      }
    }
  }]
)}
```

使用 `PanResponder` 时，可以使用以下代码从 `gesturestate.dx` 和 `gesturestate.dy` 中提取 `x` 和 `y` 位置

* 我们在数组的第一个位置使用了一个空值

* 因为我们只对传递给 `panresponder` 处理程序的第二个参数感兴趣，它是 `gesturestate`

```jsx
onPanResponderMove={Animated.event(
  [null,
  // ignore the native event
  // extract dx and dy from gestureState
  // like 'pan.x = gestureState.dx, pan.y = gestureState.dy'

  {dx: pan.x, dy: pan.y}
  ]
)}
```

### 响应当前的动画值

> 你可能会注意到这里没有一个明显的方法来在动画的过程中读取当前的值

> 这是出于优化的角度考虑，有些值只有在原生代码运行阶段中才知道

如果你需要在 `JavaScript` 中响应当前的值，有两种可能的办法：

* `spring.stopAnimation(callback)`

  会停止动画并且把最终的值作为参数传递给回调函数 `callback`

  * 这在处理手势动画的时候非常有用

* `spring.addListener(callback)`

  会在动画的执行过程中持续异步调用callback回调函数，提供一个最近的值作为参数

  * 这在用于触发状态切换的时候非常有用，譬如当用户拖拽一个东西靠近的时候弹出一个新的气泡选项

  * 不过这个状态切换可能并不会十分灵敏，因为它不像许多连续手势操作（如旋转）那样在 `60fps` 下运行

动画的设计是完全可序列化的，这样动画就可以以高性能的方式运行，而不依赖于普通的 `JavaScript` 事件循环：

* 这确实会影响API

  * 因此请记住，与完全同步的系统相比，做一些事情似乎有点棘手

* `Animated.Value.addListener` 可以作为解决这些限制的一种方法

  * 但要谨慎使用它，因为它将来可能会影响性能

### 启用原生动画驱动

> `Animated` 的 `API` 是可序列化的（即可转化为字符串表达以便通信或存储）

通过启用[【原生驱动】](http://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html)，我们在启动动画前就把其所有配置信息都发送到原生端，利用原生代码在 UI 线程执行动画，而不用每一帧都在两端间来回沟通

* 如此一来，动画一开始就完全脱离了 `JavaScript` 线程，因此此时即便 `JavaScript` 线程被卡住，也不会影响到动画了

* 在动画中启用原生驱动非常简单

  * 只需在开始动画之前，在动画配置中加入一行 `useNativeDriver: true` ，如下所示：

```jsx
Animated.timing(this.state.animatedValue, {
  toValue: 1,
  duration: 500,
  useNativeDriver: true // <-- 加上这一行
}).start();
```

动画值在不同的驱动方式之间是不能兼容的：

* 因此如果你在某个动画中启用了原生驱动

* 那么所有和此动画依赖相同动画值的其他动画也必须启用原生驱动

原生驱动还可以在 `Animated.event` 中使用

* 这对于跟随滚动位置的动画特别有用，因为没有本机驱动程序

* 由于 `react native` 的异步特性，动画将始终在手势后面运行帧

  ```jsx
  <Animated.ScrollView
  // <-- 使用可动画化的ScrollView组件

    scrollEventThrottle={1}
    // <-- 设为1以确保滚动事件的触发频率足够密集

    onScroll={Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: { y: this.state.animatedValue }
          }
        }
      ],
      { useNativeDriver: true }
      // <-- 加上这一行

    )}
  >
    {content}
  </Animated.ScrollView>
  ```

  * 通过运行[【 `RNTester app` 】](https://github.com/facebook/react-native/blob/master/RNTester/)，然后加载本机动画示例，可以看到本机驱动程序正在运行

  * 您还可以查看源代码，了解这些示例是如何生成的

#### 注意事项

本机驱动程序目前并不支持您可以对动画进行的所有操作：

* 主要限制是，只能对非布局属性设置动画：

  * 像 `transform` 和 `opacity` 之类的东西会起作用

  * 但是 `flexbox` 和 `position` 属性不会起作用

* 当使用 `animated.event` 时

  * 它只适用于直接事件

  * 而不适用于冒泡事件

* 这意味着它不适用于 `panresponder`

  * 但适用于 `ScrollView OnScroll` 等功能

当动画运行时，它可以阻止 `VirtualizedList` 组件渲染更多行：

* 如果需要在用户滚动列表时运行长动画或循环动画

  * 可以在动画的配置中使用 `isInteraction:false` 来防止此问题

#### 重点注意!!!

使用诸如 `rotateY` 、`rotateX` 等变换样式时：

* 需要确保变换样式 `perspective` 已就位

* 没有它，一些动画可能无法在 `Android` 上呈现

```jsx
<Animated.View
  style={{
    transform: [
      { scale: this.state.scale },
      { rotateY: this.state.rotateY },
      { perspective: 1000 }
      // without this line this Animation will not render on Android while working fine on iOS
    ]
  }}
/>
```

#### 其他示例

`RNTester app` 有多种动画示例：

* [【 `AnimatedGratuitousApp` 】](https://github.com/facebook/react-native/tree/master/RNTester/js/AnimatedGratuitousApp)
* [【 `NativeAnimationsExample` 】](https://github.com/facebook/react-native/blob/master/RNTester/js/NativeAnimationsExample.js)

### `LayoutAnimation API`

> `LayoutAnimation` 允许你在全局范围内创建和更新动画，这些动画会在下一次渲染或布局周期运行

它常用来更新 `flexbox` 布局，因为它可以无需测量或者计算特定属性就能直接产生动画

* 尤其是当布局变化可能影响到父节点时

  * 譬如 `查看更多` 展开动画既增加父节点的尺寸又会将位于本行之下的所有行向下推动

  * 如果不使用 `LayoutAnimation` ，可能就需要显式声明组件的坐标，才能使得所有受影响的组件能够同步运行动画

> 注意尽管 `LayoutAnimation` 非常强大且有用，但它对动画本身的控制没有 `Animated` 或者其它动画库那样方便，所以如果你使用 `LayoutAnimation` 无法实现一个效果，那可能还是要考虑其他的方案

另外，如果要在 `Android` 上使用 `LayoutAnimation` ，那么目前还需要在 `UIManager` 中启用：

```
// 在执行任何动画代码之前，比如在入口文件App.js中执行
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
```

```jsx
import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    w: 100,
    h: 100,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
```

* 此示例使用预设值，可以根据需要自定义动画，有关详细信息，请参见[【 `layoutAnimation.js` 】](https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js)

### 其他要注意的地方

#### `requestAnimationFrame`

是一个对浏览器标准 `API` 的兼容实现，你可能已经熟悉它了

* 它接受一个函数作为唯一的参数，并且在下一次重绘之前调用此函数

* 一些基于 `JavaScript` 的动画库高度依赖于这一 `API`

* 通常你不必直接调用它，那些动画库会替你管理好帧的更新

#### `setNativeProps`

正如直接操作文档所说，`setNativeProps` 方法可以使我们直接修改基于原生视图的组件的属性，而不需要使用 `setState` 来重新渲染整个组件树

* 如果我们要更新的组件有一个非常深的内嵌结构，并且没有使用 `shouldComponentUpdate` 来优化，那么使用 `setNativeProps` 就将大有裨益

* 如果你发现你的动画丢帧（低于 `60` 帧每秒），可以尝试使用 `setNativeProps` 或者 `shouldComponentUpdate` 来优化它们

  * 或者您可以在 `UI` 线程上运行动画，而不是在[【带有 `useNativeDriver` 选项】](http://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html)的 `javascript` 线程上运行动画

* 你还可以考虑将部分计算工作放在动画完成之后进行，这时可以使用[【 `InteractionManager` 】](https://reactnative.cn/docs/interactionmanager)

* 你还可以使用应用内的开发者菜单中的 `FPS Monitor` 工具来监控应用的帧率

## 无障碍功能

> 译注：`accessibility` 一词常见多种译法：可访问性、无障碍性、辅助功能等等，其中文意思都不太能准确表达其功能的本质，即为残障人士提供便利

本文主要采用 `无障碍功能` 和 `辅助技术/服务` 的说法

* 如果你或你的公司暂时没有资源和精力去服务这些用户，那么你可以跳过本文

* 译者个人希望借本文档，呼吁有能力有资源的商业公司/组织/个人，重视残障人士使用智能手机的权利

`iOS` 和 `Android` 都提供了便于残障人士无障碍使用 `App` 的 `API`

* 此外，两个平台都提供了整套的辅助技术，比如都有针对视力受损人士的读屏软件（ `iOS` 的 `VoiceOver` 和 `Android` 的 `TalkBack` ）

* 同样地，在 `React Native` 中我们也封装了对应的 `API` ，使开发者能够在 `App` 中集成无障碍功能

> 注意：`iOS` 与 `Android` 在具体方法上会有所区别，因此 `React Native` 的实现也会因平台而异

除了本文，你还可以阅读这篇[【英文博客】](https://code.facebook.com/posts/435862739941212/making-react-native-apps-accessible/)了解更多信息

### 使 `App` 能够无障碍使用

#### 无障碍功能属性 `accessible (iOS, Android)`

设置为 `true` 时表示当前视图是一个 `无障碍元素` （ `accessibility element` ）

* 无障碍元素会将其所有子组件视为一整个可以选中的组件

* 默认情况下，所有可点击的组件（ `Touchable` 系列组件）都是无障碍元素

在 `Android` 上，`React Native` 视图的 `accessible={true}` 属性会被转译为原生视图对应的 `focusable={true}` 属性：

```jsx
<View accessible={true}>
  <Text>text one</Text>
  <Text>text two</Text>
</View>
```

* 在上面这个例子中，当父视图开启无障碍属性后，我们就无法单独选中 `text one` 和 `text two` ，而只能选中整个父视图

#### 无障碍标签 `accessibilityLabel (iOS, Android)`

当一个视图启用无障碍属性后，最好再加上一个 `accessibilityLabel`（无障碍标签），这样可以让使用 `VoiceOver` 的人们清楚地知道自己选中了什么

* `VoiceOver` 会读出选中元素的无障碍标签

设定 `accessibilityLabel` 属性并赋予一个字符串内容即可在 `View` 、`Text` 或是 `Touchable` 中启用无障碍标签：

```jsx
<TouchableOpacity
  accessible={true}
  accessibilityLabel="Tap me!"
  onPress={this._onPress}>
  <View style={styles.button}>
    <Text style={styles.buttonText}>Press me!</Text>
  </View>
</TouchableOpacity>
```

* 在上面这段示例代码中，如果不在 `TouchableOpacity` 上设置无障碍标签，那么其默认值就会是 `Press me!` （即 `Text` 子组件的文本值）

* 此时无障碍标签是通过自动取所有 `Text` 子节点的值，然后用空格连起来生成

#### 无障碍提示 `accessibilityHint (iOS, Android)`

无障碍提示用于帮助用户理解操作可能导致什么后果，尤其是当这些后果并不能从无障碍标签中清楚地了解时

* 要启用无障碍提示只需在需要设置的元素上设置 `accessibilityHint` 属性，并赋予用于解释的文本：

  ```jsx
  <TouchableOpacity
    accessible={true}
    accessibilityLabel="返回"
    accessibilityHint="返回到上一个页面"
    onPress={this._onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Back</Text>
    </View>
  </TouchableOpacity>
  ```

  * 在上面这个例子里，如果用户在设备的 `Voiceover` 设置中启用了提示，`iOS` 的 `Voiceover` 将在标签后读取提示

    * 阅读[【 `iOS` 开发者文档】](https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint)中有关访问指南的更多信息

  * 在上面这个例子里，`Android` 的 `Talkback` 将在标签后读取提示

[【更多官方文档资料可参考此链接】](https://reactnative.cn/docs/accessibility/)

## 改进用户体验

### 配置文本输入

> 在触摸电话上输入文本是一项挑战：小屏幕、软件键盘

但是，根据您需要的数据类型，您可以通过正确配置文本输入来简化工作：

* 自动对焦第一个字段

* 使用占位符文本作为预期数据格式的示例

* 启用或禁用自动资本化和自动更正

* 选择键盘类型（例如电子邮件、数字）

* 确保返回按钮聚焦下一个字段或提交表单

有关更多配置选项，请参考[【 `TextInput` 文档】](https://reactnative.cn/docs/textinput)

[【尝试一下？】](https://snack.expo.io/H1iGt2vSW)

### 当键盘可见时管理布局

* 软件键盘几乎占据了屏幕的一半

* 如果你有可以被键盘覆盖的交互元素

* 使用[【 `KeyboardAvoidingView` 组件】](https://reactnative.cn/docs/keyboardavoidingview)确保它们仍然可以访问

[【尝试一下？】](https://snack.expo.io/ryxRkwnrW)

### 使可敲击区域变大

在手机上，按下按钮时很难非常精确

* 应该确保所有交互元素均为 `44x44` 或更大

* 这样做的一种方法是为元素留出足够的空间，`padding` 、`minwidth` 和 `minheight` 样式值可以用于此目的

* 或者，可以使用[【 `hitslop prop` 】](https://reactnative.cn/docs/touchablewithoutfeedback#hitslop)增加交互区域，而不影响布局

[【尝试一下？】](https://snack.expo.io/rJPwCt4HZ)

### 使用 `Android Ripple`

`Android api 21+` 使用材料设计波纹，当用户触摸到屏幕上可交互的区域时，为用户提供反馈

* `react native` 通过[【 `TouchableNativeFeedback` 】](https://reactnative.cn/docs/touchablenativefeedback)组件公开此信息

* 使用这种可触摸的效果，而不是不透明或突出显示，通常会让你的应用程序感觉更适合平台

* 也就是说，使用时要小心，因为它在 `iOS` 或 `Android API` 上不起作用

* 因此，您需要退回到使用 `iOS` 上的其他可触摸组件之一

> 您可以使用类似于[【 `react-native-platform-touchable` 】](https://github.com/react-community/react-native-platform-touchable)来触摸，从而为您处理平台差异

[【尝试一下？】](https://snack.expo.io/SJywqe3rZ)

### 屏幕方向锁定

默认情况下，多个屏幕方向应该可以正常工作，除非您使用的是 `DimensionsAPI` 并且不处理方向更改

* 如果不想支持多个屏幕方向，您可以将屏幕方向锁定为纵向或横向

* 在 `iOS` 上，在 `xcode` 的 `常规` 选项卡和 `部署信息` 部分中

  * 启用要支持的设备方向

  * 确保在进行更改时从 `设备` 菜单中选择了 `iPhone`

* 对于 `Android` ，打开 `androidmanifest.xml` 文件

  * 在 `activity` 元素中添加 `android:screenorientation='portrait'` 以锁定到 `portrait`

  * 或添加 `android:screenorientation='landscape'` 以锁定到 `landscape`

### 学习更多

[【 `Material Design` 】](https://material.io/)和[【 `Human Interface Guidelines` 】](https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/)是学习更多移动平台设计的重要资源

## 定时器

> 定时器是一个应用中非常重要的部分

`React Native` 实现了和浏览器一致的[【定时器 `Timer` 】](https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers)

* `setTimeout, clearTimeout`
* `setInterval, clearInterval`
* `setImmediate, clearImmediate`
* `requestAnimationFrame, cancelAnimationFrame`

它们之间的不同：

* `requestAnimationFrame(fn)` 会在每帧刷新之后执行一次

* `setTimeout(fn, 0)` 会尽可能快的执行（在 `iPhone5S` 上有可能每秒 `1000` 次以上）

* `setImmediate` 则会在当前 `JavaScript` 执行块结束的时候执行，就在将要发送批量响应数据到原生之前

> 注意：如果你在 `setImmediate` 的回调函数中又执行了 `setImmediate` ，它会紧接着立刻执行，而不会在调用之前等待原生代码

`Promise` 的实现就使用了 `setImmediate` 来执行异步调用

### `InteractionManager`

> 原生应用感觉如此流畅的一个重要原因就是在互动和动画的过程中避免繁重的操作

在 `React Native` 里，我们目前受到限制，因为我们只有一个 `JavaScript` 执行线程

* 不过你可以用 `InteractionManager` 来确保在执行繁重工作之前所有的交互和动画都已经处理完毕

* 应用可以通过以下代码来安排一个任务，使其在交互结束之后执行：

```jsx
InteractionManager.runAfterInteractions(() => {
  // ...需要长时间同步执行的任务...
});
```

我们来把它和之前的几个任务安排方法对比一下：

* `requestAnimationFrame()`

  用来执行在一段时间内控制视图动画的代码

* `setImmediate / setTimeout / setInterval()`

  在稍后执行代码

  > 注意这有可能会延迟当前正在进行的动画

* `runAfterInteractions()`

  在稍后执行代码，不会延迟当前进行的动画

触摸处理系统会把一个或多个进行中的触摸操作认定为 **`交互`**

* 并且会将 `runAfterInteractions()` 的回调函数延迟执行

* 直到所有的触摸操作都结束或取消了

`InteractionManager` 还允许应用注册动画，在动画开始时创建一个交互 **`句柄`** ，然后在结束的时候清除它：

```jsx
var handle = InteractionManager.createInteractionHandle();
// 执行动画... (`runAfterInteractions`中的任务现在开始排队等候)
// 在动画完成之后
InteractionManager.clearInteractionHandle(handle);
// 在所有句柄都清除之后，现在开始依序执行队列中的任务
```

### 务必在卸载组件前清除定时器！

> 我们发现很多 `React Native` 应用发生致命错误（闪退）是与计时器有关

具体来说，是在某个组件被卸载（ `unmount` ）之后，计时器却仍然在运行

* 要解决这个问题，只需铭记在 `unmount` 组件时清除（ `clearTimeout / clearInterval` ）所有用到的定时器即可：

```jsx
import React, { Component } from "react";

export default class Hello extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      console.log("把一个定时器的引用挂在this上");
    }, 500);
  }
  componentWillUnmount() {
    // 请注意Un"m"ount的m是小写

    // 如果存在this.timer，则使用clearTimeout清空
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }
}
```

## 调试

### 开启调试的快捷键

> `React Native` 在 `iOS` 模拟器上支持一些快捷键操作，具体会在下文中描述

要使用快捷键请务必确保模拟器的 `Hardware` 菜单中， `Keyboard` 选项下的 `Connect Hardware Keyboard` 处于开启状态，否则按键是没有响应的

### 访问 `App` 内的开发菜单

你可以通过摇晃设备来打开开发菜单：

* 或是选择 `iOS` 模拟器的 `Hardware` 菜单中的 `Shake Gesture` 选项

* 如果是在 `iOS` 模拟器中运行，还可以按下 `Command⌘ + D` 快捷键

* `Android` 模拟器对应的则是 `Command⌘ + M`（ `windows` 上可能是 `F1` 或者 `F2` ）

* 或是直接在命令行中运行 `adb shell input keyevent 82` 来发送菜单键命令

![图片](https://reactnative.cn/docs/assets/DeveloperMenu.png)

> 注意：在发布（ `production` ）版本中开发者菜单将无法使用

### 刷新 `JavaScript`

传统的原生应用开发中，每一次修改都需要重新编译，但在 `React Native` 中你只需要刷新一下 `JavaScript` 代码，就能立刻看到变化

* 具体的操作就是在开发菜单中点击 `Reload` 选项

* 也可以在 `iOS` 模拟器中按下 `Command⌘ + R`

* `Android` 模拟器上对应的则是按两下 `R`

### 自动刷新

择开发菜单中的 `Enable Live Reload` 可以开启自动刷新，这样可以节省你开发中的时间

* 更神奇的是，你还可以保持应用的当前运行状态，修改后的 `JavaScript` 文件会自动注入进来（就好比行驶中的汽车不用停下就能更换新的轮胎）

* 要实现这一特性只需开启开发菜单中的 `Hot Reloading` 选项

  * 某些情况下 `hot reload` 并不能顺利实施

  * 如果碰到任何界面刷新上的问题，请尝试手动完全刷新

但有些时候你必须要重新编译应用才能使修改生效：

* 增加了新的资源

  * 比如给 `iOS` 的 `Images.xcassets` 文件夹添加了图片

  * 或是 `Andorid` 的 `res/drawable` 文件夹添加了图片

* 更改了任何的原生代码（ `objective-c / swift / java` ）

### 应用内的错误与警告提示（红屏和黄屏）

> 红屏或黄屏提示都只会在开发版本中显示，正式的离线包中是不会显示的

* 红屏错误

  应用内的报错会以全屏红色显示在应用中（调试模式下），我们称为红屏（red box）报错

  * 你可以使用 `console.error()` 来手动触发红屏错误

* 黄屏警告

  应用内的警告会以全屏黄色显示在应用中（调试模式下），我们称为黄屏（yellow box）报错

  * 点击警告可以查看详情或是忽略掉

  * 和红屏报警类似，你可以使用 `console.warn()` 来手动触发黄屏警告

  * 在默认情况下，开发模式中启用了黄屏警告，可以通过以下代码关闭：

  ```jsx
  console.disableYellowBox = true;
  console.warn('YellowBox is disabled.');
  ```

你也可以通过代码屏蔽指定的警告

* 像下面这样调用 `ignoreWarnings` 方法，参数为一个数组：

```jsx
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);
```

> 在 `CI / Xcode` 中，黄屏警告还可以通过设置 `IS_TESTING` 环境变量来控制启用与否

> 红屏错误和黄屏警告在发布版（ `release / production` ）中都是自动禁用的

了解[【 `Chrome` 开发者工具】](https://reactnative.cn/docs/debugging/#chrome-开发者工具)可以更好的调试代码

## 性能

> 使用 `React Native` 替代基于 `WebView` 的框架来开发 `App` 的一个强有力的理由，就是为了使 `App` 可以达到每秒 `60` 帧（足够流畅），并且能有类似原生 `App` 的外观和手感

因此我们也尽可能地优化 `React Native` 去实现这一目标，使开发者能集中精力处理 `App` 的业务逻辑，而不用费心考虑性能

* 但是，总还是有一些地方有所欠缺，以及在某些场合 `React Native` 还不能够替你决定如何进行优化（用原生代码写也无法避免），因此人工的干预依然是必要的

### 关于 `帧` 你所需要知道的

> 老一辈人常常把电影称为 `移动的画` ，是因为视频中逼真的动态效果其实是一种幻觉，这种幻觉是由一组静态的图片以一个稳定的速度快速变化所产生的

我们把这组图片中的每一张图片叫做一帧

* 而每秒钟显示的帧数直接的影响了视频（或者说用户界面）的流畅度和真实感

* `iOS` 设备提供了每秒 `60` 的帧率，这就留给了开发者和 `UI` 系统大约 `16.67ms` 来完成生成一张静态图片（帧）所需要的所有工作

* 如果在这分派的 `16.67ms` 之内没有能够完成这些工作，就会引发 `丢帧` 的后果，使界面表现的不够流畅

下面要讲的事情可能更为复杂：

* 请先调出你应用的开发菜单

* 打开 `Show FPS Monitor`

* 你会注意到有两个不同的帧率

![图片](https://reactnative.cn/docs/assets/PerfUtil.png)

#### `JavaScript` 帧率( `JavaScript` 线程)

> 对大多数 `React Native` 应用来说，业务逻辑是运行在 `JavaScript` 线程上的

这是 `React` 应用所在的线程，也是发生 `API` 调用，以及处理触摸事件等操作的线程

* 更新数据到原生支持的视图是批量进行的

* 并且在事件循环每进行一次的时候被发送到原生端

* 这一步通常会在一帧时间结束之前处理完（如果一切顺利的话）

* 如果 `JavaScript` 线程有一帧没有及时响应，就被认为发生了一次丢帧

例如：你在一个复杂应用的根组件上调用了 `this.setState` ：

* 从而导致一次开销很大的子组件树的重绘

* 可想而知，这可能会花费 `200ms` 也就是整整 `12` 帧的丢失

* 此时，任何由 `JavaScript` 控制的动画都会卡住

* 只要卡顿超过 `100ms` ，用户就会明显的感觉到

* 这种情况经常发生在老的 `Navigator` 导航器的切换过程中：

  * 当你 `push` 一个新的路由时，`JavaScript` 需要绘制新场景所需的所有组件，以发送正确的命令给原生端去创建视图

  * 由于切换是由 `JavaScript` 线程所控制，因此经常会占用若干帧的时间，引起一些卡顿

  * 有的时候，组件会在 `componentDidMount` 函数中做一些额外的事情，这甚至可能会导致页面切换过程中多达一秒的卡顿

另一个例子是老的触摸事件的响应：

* 如果你正在 `JavaScript` 线程处理一个跨越多个帧的工作

  * 你可能会注意到 `TouchableOpacity` 的响应被延迟了

* 这是因为 `JavaScript` 线程太忙了

  * 不能够处理主线程发送过来的原始触摸事件

  * 结果 `TouchableOpacity` 就不能及时响应这些事件并命令主线程的页面去调整透明度了

#### `UI` 帧率(主线程)

> 很多人会注意到，`NavigatorIOS` 的性能要比老的纯 `JavaScript` 实现的 `Navigator` 好的多

原因就是它的切换动画是完全在主线程上执行的，因此不会被 `JavaScript` 线程上的掉帧所影响

* 同样，当 `JavaScript` 线程卡住的时候

* 你仍然可以欢快的上下滚动 `ScrollView`

  * 因为 `ScrollView` 运行在主线程之上

### 性能问题的常见原因

#### 开发模式 ( `dev=true` )

> `JavaScript` 线程的性能在开发模式下是很糟糕的

这是不可避免的，因为有许多工作需要在运行的时候去做：

* 譬如使你获得良好的警告和错误信息

* 又比如验证属性类型（ `propTypes` ）以及产生各种其他的警告

* 请务必注意在[【 `release` 模式】](https://reactnative.cn/docs/running-on-device#发布应用)下去测试性能

#### `console.log` 语句

> 在运行打好了离线包的应用时，控制台打印语句可能会极大地拖累 `JavaScript` 线程

注意有些第三方调试库也可能包含控制台打印语句，比如 `redux-logger` ，所以在发布应用前请务必仔细检查，确保全部移除

> 这里有个小技巧可以在发布时屏蔽掉所有的 `console.*` 调用

`React Native` 中有一个全局变量 `__DEV__` 用于指示当前运行环境是否是开发环境

* 我们可以据此在正式环境中替换掉系统原先的 `console` 实现

```jsx
if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {}
  };
}
```

* 这样在打包发布时，所有的控制台语句就会被自动替换为空函数，而在调试时它们仍然会被正常调用

还有个 `babel` 插件可以帮你移除所有的 `console.*` 调用：

* 首先需要使用 `yarn add --dev babel-plugin-transform-remove-console` 来安装

* 然后在项目根目录下编辑（或者是新建）一个名为 `.babelrc` 的文件

  * 在文件中加入：

```jsx
{
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  }
}
```

* 这样在打包发布时，所有的控制台语句就会被自动移除，而在调试时它们仍然会被正常调用

#### `ListView`

> 在首次渲染时缓慢或者由于列表很大时导致滑动很慢

可用新的[【 `FlatList` 】](https://reactnative.cn/docs/flatlist)或者[【 `SectionList` 】](https://reactnative.cn/docs/sectionlist)组件替代：

* 除了简化了 `API` ，这些新的列表组件在性能方面都有了极大的提升

  * 其中最主要的一个是无论列表有多少行，它的内存使用都是常数级的

* 如果你的 `FlatList` 渲染得很慢

  * 请确保你使用了 `getItemLayout`

  * 它通过跳过对 `items` 的处理来优化你的渲染速度

#### 重绘页面

> 在重绘一个几乎没有什么变化的页面时，`JavaScript` 帧率严重降低

你可以实现 `shouldComponentUpdate` 函数来指明在什么样的确切条件下，你希望这个组件得到重绘

* 如果你编写的是纯粹的组件（界面完全由 `props` 和 `state` 所决定），你可以利用 `PureComponent` 来为你做这个工作

* 再强调一次，不可变的数据结构（ `immutable` ，即对于引用类型数据，不修改原值，而是复制后修改并返回新值）在提速方面非常有用

  * 当你不得不对一个长列表对象做一个深度的比较，它会使重绘你的整个组件更加快速，而且代码量更少

#### 移动视图

> 在屏幕上移动视图（滚动，切换，旋转）时，`UI` 线程掉帧

当具有透明背景的文本位于一张图片上时，或者在每帧重绘视图时需要用到透明合成的任何其他情况下，这种现象尤为明显

* 设置 `shouldRasterizeIOS` 或者 `renderToHardwareTextureAndroid` 属性可以显著改善这一现象

* 注意：不要过度使用该特性，否则你的内存使用量将会飞涨

* 在使用时，要评估你的性能和内存使用情况

  * 如果你没有需要移动这个视图的需求，请关闭这一属性

#### 动画改变图片

> 使用动画改变图片的尺寸时，`UI` 线程掉帧

在 `iOS` 上，每次调整 `Image` 组件的宽度或者高度，都需要重新裁剪和缩放原始图片

* 这个操作开销会非常大，尤其是大的图片

* 比起直接修改尺寸，更好的方案是使用 `transform: [{scale}]` 这样缩放的样式属性来改变尺寸

  * 比如当你点击一个图片，要将它放大到全屏的时候，就可以使用这个属性

#### `Touchable` 系列组件

> `Touchable` 系列组件不能很好的响应

有些时候，如果我们有一项操作与点击事件所带来的透明度改变或者高亮效果发生在同一帧中，那么有可能在 `onPress` 函数结束之前我们都看不到这些效果

* 比如在 `onPress` 执行了一个 `setState` 的操作，这个操作需要大量计算工作并且导致了掉帧

* 对此的一个解决方案是将 `onPress` 处理函数中的操作封装到 `requestAnimationFrame` 中：

```jsx
handleOnPress() {
  // 谨记在使用requestAnimationFrame、setTimeout以及setInterval时
  // 要使用TimerMixin（其作用是在组件unmount时，清除所有定时器）
  this.requestAnimationFrame(() => {
    this.doExpensiveAction();
  });
}
```

### 分析

你可以利用内置的分析器来同时获取 `JavaScript` 线程和主线程中代码执行情况的详细信息

* 对于 `iOS` 来说，`Instruments` 是一个宝贵的工具库

* 对于 `Android` 的话，可以使用 `systrace`

  * 具体可以参考下面的使用 `systrace` 调试 `Android UI` 性能：

    * 首先，确保开发模式关闭！

    * 你应该能在应用程序日志中看到 `__DEV__ === false, development-level warning are OFF, performance optimizations are ON`

另一种分析 `javascript` 的方法是在调试时使用chrome profiler

* 这不会给您准确的结果，因为代码是在 `chrome` 中运行的，但会让您大致了解瓶颈可能在哪里

* 在 `Chrome` 的 **`性能`** 选项卡下运行探查器

* 用户计时下会出现火焰图

* 要以表格格式查看更多详细信息，请单击下面的自下而上选项卡，然后在左上角菜单中选择 `DedicatedWorker` 线程

[【使用 `systrace` 调试 `Android` UI 性能】](https://reactnative.cn/docs/performance/#使用-systrace-调试-android-ui-性能)

![图片](https://reactnative.cn/docs/assets/SystraceExample.png)

### 拆包( `RAM bundles` )和内联引用

> 如果你有一个较为庞大的应用程序，你可能要考虑使用 `RAM` ( `Random Access Modules` ，随机存取模块）格式的 `bundle` 和内联引用

这对于具有大量页面的应用程序是非常有用的，这些页面在应用程序的典型使用过程中可能不会被打开

* 通常对于启动后一段时间内不需要大量代码的应用程序来说是非常有用的

* 例如，应用程序包含复杂的配置文件屏幕或较少使用的功能，但大多数会话只涉及访问应用程序的主屏幕更新

* 我们可以通过使用 `RAM` 格式来优化 `bundle` 的加载，并且内联引用这些功能和页面（当它们被实际使用时）

#### 加载 `JavaScript`

> 在 `react-native` 执行 `JavaScript` 代码之前，必须将代码加载到内存中并进行解析

如果你加载了一个 `50MB` 的 `bundle` ，那么所有的 `50mb` 都必须被加载和解析才能被执行

* RAM 格式的 bundle 则对此进行了优化，即：

  * 启动时只加载 50MB 中实际需要的部分

  * 之后再逐渐按需加载更多的包

#### 内联引用

> 内联引用( `require` 代替 `import` )可以延迟模块或文件的加载，直到实际需要该文件

一个基本的例子看起来像这样：

* 优化前

  ```jsx
  import React, { Component } from 'react';
  import { Text } from 'react-native';
  // ... import some very expensive modules

  // You may want to log at the file level to verify when this is happening - 您可能希望在文件级别进行日志记录，以便在发生这种情况时进行验证
  console.log('VeryExpensive component loaded');

  export default class VeryExpensive extends Component {
    // lots and lots of code - 很多很多代码
    render() {
      return <Text>Very Expensive Component</Text>;
    }
  }
  ```

* 优化后

  ```jsx
  import React, { Component } from 'react';
  import { TouchableOpacity, View, Text } from 'react-native';

  let VeryExpensive = null;

  export default class Optimized extends Component {
    state = { needsExpensive: false };

    didPress = () => {
      if (VeryExpensive == null) {
        VeryExpensive = require('./VeryExpensive').default;
      }

      this.setState(() => ({
        needsExpensive: true,
      }));
    };

    render() {
      return (
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={this.didPress}>
            <Text>Load</Text>
          </TouchableOpacity>
          {this.state.needsExpensive ? <VeryExpensive /> : null}
        </View>
      );
    }
  }
  ```

* 即便不使用 `RAM` 格式，内联引用也会使启动时间减少

* 因为优化后的代码只有在第一次 `require` 时才会执行

#### 启用 `RAM` 格式

* 在 `iOS` 上使用 `RAM` 格式将创建一个简单的索引文件，`React Native` 将根据此文件一次加载一个模块

  * 在 `Xcode` 中启用 `RAM` 格式，需要编辑 `build phase` 里的 `Bundle React Native code and images`

    * 在 `../node_modules/react-native/scripts/react-native-xcode.sh.sh` 中添加 `export BUNDLE_COMMAND="ram-bundle"` :

      ```jsx
      export BUNDLE_COMMAND="ram-bundle"
      export NODE_BINARY=node
      ../node_modules/react-native/scripts/react-native-xcode.sh.sh
      ```

* 在 `Android` 上，默认情况下它会为每个模块创建一组文件

  * 你可以像 `iOS` 一样，强制 `Android` 只创建一个文件

  * 但使用多个文件可以提高性能，并降低内存占用

  * 在 `Android` 上启用 `RAM` 格式，需要编辑 `android/app/build.gradle` 文件

    * 在 `apply from: "../../node_modules/react-native/react.gradle"` 之前修改或添加 `project.ext.react` ：

      ```jsx
      project.ext.react = [
        bundleCommand: "ram-bundle",
      ]
      ```

  * 如果在 `Android` 上，你想使用单个索引文件（如前所述），请在 `Android` 上使用以下行：

  ```jsx
  project.ext.react = [
    bundleCommand: "ram-bundle",
    extraPackagerArgs: ["--indexed-ram-bundle"]
  ]
  ```

#### 配置预加载及内联引用

现在我们已经启用了 `RAM` 格式，然而调用 `require` 会造成额外的开销

* 因为当遇到尚未加载的模块时，`require` 需要通过 `bridge` 来发送消息

  * 这主要会影响到启动速度，因为在应用程序加载初始模块时可能触发相当大量的请求调用

* 幸运的是，我们可以配置一部分模块进行预加载

  * 为了做到这一点，你将需要实现某种形式的内联引用

#### 添加 `packager` 配置文件

> 在项目中创建一个名为 `packager` 的文件夹，并创建一个名为 `config.js` 的文件

添加以下内容：

```jsx
const config = {
  transformer: {
    getTransformOptions: () => {
      return {
        transform: { inlineRequires: true },
      };
    },
  },
};

module.exports = config;
```

* 在 `Xcode` 的 `Build phase` 中添加 `export BUNDLE_CONFIG="packager/config.js"`

```jsx
export BUNDLE_COMMAND="ram-bundle"
export BUNDLE_CONFIG="packager/config.js"
export NODE_BINARY=node
../node_modules/react-native/scripts/react-native-xcode.sh.sh
```

* 编辑 `android/app/build.gradle` 文件，添加 `bundleConfig: "packager/config.js"`

```jsx
project.ext.react = [
  bundleCommand: "ram-bundle",
  bundleConfig: "packager/config.js"
]
```

* 最后，在 `package.json` 的 `scripts` 下修改 `start` 命令来启用配置文件：

```jsx
"start": "node node_modules/react-native/local-cli/cli.js start --config ../../../../packager/config.js"
```

* 此时用 `npm start` 启动你的 `packager` 服务即会加载配置文件

> 请注意：如果你仍然通过 `xcode` 或是 `react-native run-android` 等方式自动启动 `packager` 服务，则由于没有使用上面的参数，不会加载配置文件

#### 调试预加载的模块

在您的根文件 `index.(ios|android).js` 中，您可以在初始导入 `initial imports` 之后添加以下内容：

```jsx
const modules = require.getModules();
const moduleIds = Object.keys(modules);
const loadedModuleNames = moduleIds
  .filter(moduleId => modules[moduleId].isInitialized)
  .map(moduleId => modules[moduleId].verboseName);
const waitingModuleNames = moduleIds
  .filter(moduleId => !modules[moduleId].isInitialized)
  .map(moduleId => modules[moduleId].verboseName);

// make sure that the modules you expect to be waiting are actually waiting
console.log(
  'loaded:',
  loadedModuleNames.length,
  'waiting:',
  waitingModuleNames.length
);

// grab this text blob, and put it in a file named packager/modulePaths.js
console.log(`module.exports = ${JSON.stringify(loadedModuleNames.sort())};`);
```

* 当你运行你的应用程序时，你可以查看 `console` 控制台，有多少模块已经加载，有多少模块在等待

* 你可能想查看 `moduleNames` ，看看是否有任何意外

> 注意：在首次 `import` 时调用的内联引用

* 你可能需要检查和重构，以确保只有你想要的模块在启动时加载

您可以根据需要修改 `Systrace` 对象，以帮助调试有问题的引用：

```jsx
require.Systrace.beginEvent = (message) => {
  if(message.includes(problematicModule)) {
    throw new Error();
  }
}
```

* 虽然每个 `App` 各有不同，但只加载第一个页面所需的模块是有普适意义的

* 当你满意时，把 `loadedModuleNames` 的输出放到 `packager/modulePaths.js` 文件中

#### 更新配置文件

返回 `packager/config.js` ，我们应该更新它以使用新生成的 `modulePaths.js` 文件

```jsx
const modulePaths = require('./modulePaths');
const resolve = require('path').resolve;
const fs = require('fs');

// Update the following line if the root folder of your app is somewhere else.
const ROOT_FOLDER = resolve(__dirname, '..');

const config = {
  transformer: {
    getTransformOptions: () => {
      const moduleMap = {};
      modulePaths.forEach(path => {
        if (fs.existsSync(path)) {
          moduleMap[resolve(path)] = true;
        }
      });
      return {
        preloadedModules: moduleMap,
        transform: { inlineRequires: { blacklist: moduleMap } },
      };
    },
  },
  projectRoot: ROOT_FOLDER,
};

module.exports = config;
```

* 在启用 `RAM` 格式之后，配置文件中的 `preloadedModules` 条目指示哪些模块需要预加载

* 当 `bundle` 被加载时，这些模块立即被加载，甚至在任何 `requires` 执行之前

* `blacklist` 表明这些模块不应该被要求内联引用，因为它们是预加载的，所以使用内联没有性能优势

  * 实际上每次解析内联引用 `JavaScript` 都会花费额外的时间

#### 测试和衡量改进

> 您现在应该准备好使用 `RAM` 格式和内联引用来构建您的应用了

保存启动前后的时间，来测试下有多少改进吧！

## 手势响应系统

> 移动设备上的手势识别要比在 web 上复杂得多

用户的一次触摸操作的真实意图是什么，`App` 要经过好几个阶段才能判断

* 比如 `App` 需要判断用户的触摸到底是在滚动页面，还是滑动一个 `widget` ，或者只是一个单纯的点击

* 甚至随着持续时间的不同，这些操作还会转化

* 此外，还有多点同时触控的情况

手势响应系统可以使组件在不关心父组件或子组件的前提下自行处理触摸交互

### 最佳实践

> 用户之所以会觉得 `web app` 和原生 `app` 在体验上有巨大的差异，触摸响应是一大关键因素

用户的每一个操作都应该具有下列属性：

* `反馈/高亮`

  让用户看到他们到底按到了什么东西，以及松开手后会发生什么

* `取消功能`

  当用户正在触摸操作时，应该是可以通过把手指移开来终止操作

> 这些特性使得用户在使用 `App` 时体验更好，因为它们可以让用户大胆试用，而不必担心点错了什么

### `TouchableHighlight` 与 `Touchable` 系列组件

> 响应系统用起来可能比较复杂

我们提供了一个抽象的 `Touchable` 实现，用来做 `可触控` 的组件

* 这一实现利用了响应系统，使得你可以简单地以声明的方式来配置触控处理

* 如果要做一个按钮或者网页链接，那么使用 `TouchableHighlight` 就可以

### 响应者的生命周期

一个 `View` 只要实现了正确的协商方法，就可以成为触摸事件的响应者

* 我们通过两个方法去 `询问` 一个 `View` 是否愿意成为响应者：

  * `View.props.onStartShouldSetResponder: (evt) => true`

    * 在用户开始触摸的时候（手指刚刚接触屏幕的瞬间），是否愿意成为响应者？

  * `View.props.onMoveShouldSetResponder: (evt) => true`

    如果 `View` 不是响应者

    * 那么在每一个触摸点开始移动（没有停下也没有离开屏幕）时再询问一次：是否愿意响应触摸交互呢？

* 如果 `View` 返回 `true` ，并开始尝试成为响应者，那么会触发下列事件之一：

  * `View.props.onResponderGrant: (evt) => {}`

    * `View` 现在要开始响应触摸事件了

    * 这也是需要做高亮的时候，使用户知道他到底点到了哪里

  * `View.props.onResponderReject: (evt) => {}`

    * 响应者现在 `另有其人` 而且暂时不会 `放权`

    * 请另作安排

* 如果 `View` 已经开始响应触摸事件了，那么下列这些处理函数会被一一调用：

  * `View.props.onResponderMove: (evt) => {}`

    * 用户正在屏幕上移动手指时（没有停下也没有离开屏幕）

  * `View.props.onResponderRelease: (evt) => {}`

    * 触摸操作结束时触发

    * 比如 `touchUp` （手指抬起离开屏幕）

  * `View.props.onResponderTerminationRequest: (evt) => true`

    * 有其他组件请求接替响应者

    * 当前的 `View` 是否 `放权` ？

    * 返回 `true` 的话则释放响应者权力

  * `View.props.onResponderTerminate: (evt) => {}`

    * 响应者权力已经交出

    * 这可能是由于其他 `View` 通过 `onResponderTerminationRequest` 请求的

    * 可能是由操作系统强制夺权（比如 `iOS` 上的控制中心或是通知中心）

#### `evt` 是一个合成事件

它包含一个 `nativeEvent` 对象及其他对象，`nativeEvent` 对象由以下结构组成：

* `changedTouches`

  在上一次事件之后，所有发生变化的触摸事件的数组集合

  即上一次事件后，所有移动过的触摸点

* `identifier`

  触摸点的 `ID`

* `locationX`

  触摸点相对于当前元素的横坐标

* `locationY`

  触摸点相对于当前元素的纵坐标

* `pageX`

  触摸点相对于根元素的横坐标

* `pageY`

  触摸点相对于根元素的纵坐标

* `target`

  触摸点所在的元素 `ID`

* `timestamp`

  触摸事件的时间戳，可用于移动速度的计算

* `touches`

  当前屏幕上的所有触摸点的集合

### 捕获 `ShouldSet` 事件处理

这两个方法是以冒泡的形式调用的，即嵌套最深的节点最先调用：

* `onStartShouldSetResponder`

* `onMoveShouldSetResponder`

这意味着当多个 `View` 同时在 `*ShouldSetResponder` 中返回 `true` 时，最底层的 `View` 将优先 `夺权`

* 在多数情况下这并没有什么问题，因为这样可以确保所有控件和按钮是可用的

* 但是有些时候，某个父 `View` 会希望能先成为响应者

  * 我们可以利用 `捕获期` 来解决这一需求

  * 响应系统在从最底层的组件开始冒泡之前，会首先执行一个 `捕获期` ，在此期间会触发 `on*ShouldSetResponderCapture` 系列事件

* 因此，如果某个父 `View` 想要在触摸操作开始时阻止子组件成为响应者，那就应该处理 `onStartShouldSetResponderCapture` 事件并返回 `true` 值

  * `View.props.onStartShouldSetResponderCapture: (evt) => true`

  * `View.props.onMoveShouldSetResponderCapture: (evt) => true`

### `PanResponder` 类

要使用更高级的手势功能，请参看[【 `PanResponder` 】](https://reactnative.cn/docs/panresponder/)

## `JavaScript` 环境

### `JavaScript` 运行时的环境

在使用 `React Native` 时，你的 `JavaScript` 代码将会运行在两个不同的环境上：

* 大多数情况下，`React Native` 使用的是 `JavaScriptCore` ，也就是 `Safari` 所使用的 `JavaScript` 引擎

  * 但是在 `iOS` 上[【 `JavaScriptCore` 】](http://trac.webkit.org/wiki/JavaScriptCore)并没有使用即时编译技术（ `JIT` ）

  * 因为在 `iOS` 中应用无权拥有可写可执行的内存页（因此无法动态生成代码）

* 在使用 `Chrome` 调试时，所有的 `JavaScript` 代码都运行在 `Chrome` 中，并且通过 `WebSocket` 与原生代码通信

  * 此时的运行环境是[【 `V8` 引擎】](https://code.google.com/p/v8/)

* 虽然两个环境非常类似，但开发者还是可能碰到一些不一致的地方

  * 未来我们很可能会尝试一些其他的 `JavaScript` 引擎，所以请尽量避免使用依赖于特定运行环境的代码

* 常见的不一致比如有：

  * `iOS` 上有部分日期构造函数未实现

  * `Android` 上重复定义的 `props` 可能会导致报错

### `JavaScript` 语法转换器

> 语法转换器可以使编写代码的过程更加享受，因为开发者可以借助转换器直接使用新的 `JavaScirpt` 语法标准，而无需等待 `JavaScirpt` 解释器的支持

`React Native` 内置了[【 `Babel` 转换器】](https://babeljs.io/)

* 你可以查看[【 `Babel` 的文档】](https://babeljs.io/docs/plugins/#transform-plugins)来了解有关它可以转换的语法的详情

* 在[【 `metro-react-native-babel-preset` 】](https://github.com/facebook/metro/tree/master/packages/metro-react-native-babel-preset)中可以看到目前 `React Native` 默认开启的语法转换特性

  > 注：若想学习相关语法，译者推荐阮一峰老师的[ 《ECMAScript 6 入门》 ](http://es6.ruanyifeng.com/)以及论坛的[【讨论帖】](http://bbs.reactnative.cn/topic/15)

* `ES5`

  * 保留关键字: `promise.catch(function() { })`;

* `ES6`

  * [【了解更多可点击前往官方文档】](https://reactnative.cn/docs/javascript-environment/#javascript-语法转换器)

### 接口兼容 `Polyfills`

许多标准功能也都在支持的 `JavaScript` 运行环境上做了兼容支持

* 浏览器

  * `console.{log, warn, error, info, trace, table, group, groupEnd}`
  * `CommonJS require`
  * `XMLHttpRequest, fetch`
  * `{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame`
  * `navigator.geolocation`

* `ES6`

  * `Object.assign`
  * `String.prototype.{startsWith, endsWith, repeat, includes}`
  * `Array.from`
  * `Array.prototype.{find, findIndex}`

* `ES7`

  * `Array.prototype.{includes}`

* `ES8`

  * `Object.{entries, values}`

* 其他特性

  * `__DEV__` 用于判断当前是否开发环境的全局变量

## 直接操作

有时候我们需要直接改动组件并触发局部的刷新，但不使用 `state` 或是 `props`

* 譬如在浏览器中使用 `React` 库，有时候会需要直接修改一个 `DOM` 节点，而在手机 `App` 中操作 `View` 时也会碰到同样的情况

* 在 `React Native` 中，`setNativeProps` 就是等价于直接操作 `DOM` 节点的方法

Q：什么时候使用 `setNativeProps` 呢？

A：在（不得不）频繁刷新而又遇到了性能瓶颈的时候

直接操作组件并不是应该经常使用的工具

* 一般来说只是用来创建连续的动画，同时避免渲染组件结构和同步太多视图变化所带来的大量开销

* `setNativeProps` 是一个 `简单粗暴` 的方法，它直接在底层（ `DOM` 、`UIView` 等）而不是 `React` 组件中记录 `state` ，这样会使代码逻辑难以理清

  * 所以在使用这个方法之前，请尽量先尝试用 `setState` 和[【 `shouldComponentUpdate` 】](http://facebook.github.io/react/docs/advanced-performance.html#shouldcomponentupdate-in-action)方法来解决问题

### `setNativeProps` 与 `TouchableOpacity`

[【 `TouchableOpacity` 】](https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js)这个组件就在内部使用了 `setNativeProps` 方法来更新其子组件的透明度：

```jsx
setOpacityTo(value) {
  // Redacted: animation related code
  this.refs[CHILD_REF].setNativeProps({
    opacity: value
  });
},
```

* 由此我们可以写出下面这样的代码：

  * 子组件可以响应点击事件，更改自己的透明度

  * 而子组件自身并不需要处理这件事情，也不需要在实现中做任何修改

  ```jsx
  <TouchableOpacity onPress={this._handlePress}>
  <View style={styles.button}>
    <Text>Press me!</Text>
  </View>
  </TouchableOpacity>
  ```

* 如果不使用 `setNativeProps` 来实现这一需求，那么一种可能的办法是把透明值保存到 `state` 中，然后在 `onPress` 事件触发时更新这个值：

```jsx
constructor(props) {
  super(props);
  this.state = { myButtonOpacity: 1, };
}

render() {
  return (
    <TouchableOpacity onPress={() => this.setState({myButtonOpacity: 0.5})}
                      onPressOut={() => this.setState({myButtonOpacity: 1})}>
      <View style={[styles.button, {opacity: this.state.myButtonOpacity}]}>
        <Text>Press me!</Text>
      </View>
    </TouchableOpacity>
  )
}
```

* 比起之前的例子，这一做法会消耗大量的计算：

  * 每一次透明值变更的时候 `React` 都要重新渲染组件结构

  * 即便视图的其他属性和子组件并没有变化

* 一般来说这一开销也不足为虑，但当执行连续的动画以及响应用户手势的时候，只有正确地优化组件才能提高动画的流畅度

如果你看过[【 `NativeMethodsMixin` 】](https://github.com/facebook/react-native/blob/master/Libraries/Renderer/oss/ReactNativeRenderer-prod.js)中的 `setNativeProps` 方法的实现，你就会发现它实际是对 `RCTUIManager.updateView` 的封装

* 而这正是重渲染所触发的函数调用，具体可以参看[【 `ReactNativeBaseComponent.js` 中的 `receiveComponent` 】](https://github.com/facebook/react/blob/master/src/renderers/native/ReactNativeBaseComponent.js)

### 复合组件与 `setNativeProps`

> 复合组件并不是单纯的由一个原生视图构成，所以你不能对其直接使用 `setNativeProps`

比如下面这个例子：

```jsx
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class MyButton extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.label}</Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <MyButton label="Press me!" />
      </TouchableOpacity>
    )
  }
}
```

* 跑这个例子会马上看到一行报错：

  * `Touchable child must either be native or forward setNativeProps to a native component`

* 这是因为 `MyButton` 并非直接由原生视图构成，而我们只能给原生视图设置透明值

* 你可以尝试这样去理解：

  * 如果你通过 `React.createClass` 方法自定义了一个组件

  * 直接给它设置样式 prop 是不会生效的

  * 你得把样式 `props` 层层向下传递给子组件

  * 直到子组件是一个能够直接定义样式的原生组件

* 同理，我们也需要把 `setNativeProps` 传递给由原生组件封装的子组件

#### 将 `setNativeProps` 传递给子组件

具体要做的就是在我们的自定义组件中再封装一个 `setNativeProps` 方法

* 其内容为对合适的子组件调用真正的 `setNativeProps` 方法

* 并传递要设置的参数

```jsx
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class MyButton extends React.Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View ref={component => this._root = component} {...this.props}>
        <Text>{this.props.label}</Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <MyButton label="Press me!" />
      </TouchableOpacity>
    )
  }
}
```

* 现在你可以用 `MyButton` 来代替 `TouchableOpacity` 了

* 有一点需要特别说明：

  * 这里我们使用了[【 `ref` 回调语法】](https://doc.react-china.org/docs/refs-and-the-dom.html)，而不是传统的字符串型 `ref` 引用

* 可能还会注意到我们在向下传递 `props` 时使用了 `{...this.props}` 语法

  * 这一用法的说明请参考[【对象的扩展运算符】](http://es6.ruanyifeng.com/#docs/object)

* 这是因为 `TouchableOpacity` 本身其实也是个复合组件

  * 它除了要求在子组件上执行 `setNativeProps` 以外

  * 还要求子组件对触摸事件进行处理

* 因此，它会传递多个 `props` ，其中包含了[【 `onmoveshouldsetresponder` 函数】](https://reactnative.cn/docs/direct-manipulation/view.html#onmoveshouldsetresponder)

  * 这个函数需要回调给 `TouchableOpacity` 组件，以完成触摸事件的处理

* 与之相对的是 `TouchableHighlight` 组件，它本身是由原生视图构成，因而只需要我们实现 `setNativeProps`

### `setNativeProps` 清除 `TextInput` 的值

> `setNativeProps` 的另一个非常常见的用例是清除 `TextInput` 的值

当缓冲延迟很低并且用户输入很快时，受控制的文本输入属性有时会删除字符

* 有些开发人员喜欢完全跳过这个属性，而在必要时使用 `setNativeProps` 直接操作 `textInput` 值

* 例如，下面的代码演示了在点击按钮时清除输入：

```jsx
import React from 'react';
import { TextInput, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  clearText = () => {
    this._textInput.setNativeProps({text: ''});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          ref={component => this._textInput = component}
          style={{height: 50, flex: 1, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc'}}
        />
        <TouchableOpacity onPress={this.clearText}>
          <Text>Clear text</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
```

### 避免和 `render` 方法的冲突

如果要更新一个由 `render` 方法来维护的属性，则可能会碰到一些出人意料的 `bug`

* 因为每一次组件重新渲染都可能引起属性变化

* 这样一来，之前通过 `setNativeProps` 所设定的值就被完全忽略和覆盖掉了

### `setNativeProps` 与 `shouldComponentUpdate`

通过巧妙运用 `shouldComponentUpdate` 方法：

* 可以避免重新渲染那些实际没有变化的子组件所带来的额外开销

* 此时使用 `setState` 的性能已经可以与 `setNativeProps` 相媲美了

### 其他 native methods

这里描述的方法可用于 `react native` 提供的大多数默认组件

* 但是，请注意：

  * 它们在没有直接由本机视图支持的复合组件上不可用

  * 这通常包括您在自己的应用程序中定义的大多数组件

#### `measure(callback)`

> 确定给定视图在屏幕上的位置、宽度和高度，并通过异步回调返回值

如果成功，将使用以下参数调用回调：

* `x`
* `y`
* `width`
* `height`
* `pageX`
* `pageY`

> 请注意，直到在本机中完成渲染后，这些度量才可用

如果您需要尽快测量，请考虑改用[【 `OnLayout` 属性】](https://reactnative.cn/docs/view#onlayout)

#### `measureInWindow(callback)`

> 确定给定视图在窗口中的位置，并通过异步回调返回值

* 如果 `React` 根视图嵌入到另一个本机视图中，这将为您提供绝对坐标

如果成功，将使用以下参数调用回调：

* `x`
* `y`
* `width`
* `height`

#### `measureLayout(relativeToNativeNode, onSuccess, onFail)`

> 与 `measure()` 类似，但测量视图的相对祖先，指定为 `relativeNativeNode`

* 这意味着返回的 `x` ，`y` 相对于祖先视图的原点 `x` ，`y`

* 和往常一样，要获取组件的本机节点句柄，可以使用 `findNodeHandle(component)`

```jsx
import {findNodeHandle} from 'react-native';
```

#### `focus()`

> 为给定的输入或视图请求焦点

触发的确切行为将取决于平台和视图类型

#### `blur()`

> 从输入或视图中移除焦点

这与 `focus()` 相反

## 颜色

* `react native` 中的组件使用[【 `javascript` 设计样式】](https://reactnative.cn/docs/style)

* 颜色属性通常与[【 `CSS` 在 `Web` 上的工作方式】](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)相匹配

### 红-绿-蓝

`React Native ` 支持 `rgb()` 和 rgba() 两种十六进制与函数方法：

* `'#f0f' (#rgb)`

* `'#ff00ff' (#rrggbb)`

* `'rgb(255, 0, 255)'`

* `'rgba(255, 255, 255, 1.0)'`

*   `'#f0ff' (#rgba)`

*  `'#ff00ff00' (#rrggbbaa)`

### 色调-饱和度-亮度

支持 `hsl()` 和 `hsla()` 函数方法：

* `hsl(360, 100%, 100%)`
* `hsla(360, 100%, 100%, 1.0)`

#### 透明度

`rgba(0,0,0,0)` 的快捷方式是：

* `transparent`

### 称谓颜色

你还可以使用颜色名称来作为颜色值 `React Native` 遵循[【 `CSS3` 规范】](http://www.w3.org/TR/css3-color/#svg-color)：

* `aliceblue (#f0f8ff)`
* `antiquewhite (#faebd7)`
* `aqua (#00ffff)`
* `aquamarine (#7fffd4)`
* `azure (#f0ffff)`
* `beige (#f5f5dc)`
* `bisque (#ffe4c4)`
* `black (#000000)`
* `blanchedalmond (#ffebcd)`
* `blue (#0000ff)`
* [【更多可点击查看】](https://reactnative.cn/docs/colors/#称谓颜色)

## 集成到现有原生应用

> 只需简单几步，你就可以给原有应用加上新的基于 `React Native` 的特性、画面和视图等

具体的步骤根据你所开发的目标平台不同而不同：

* `iOS (Objective-C)`
* `iOS (Swift)`
* `Android (Java)`

> [【详细可点击查看】](https://reactnative.cn/docs/integration-with-existing-apps/#集成到现有原生应用)，以下仅以 `Android (Java)` 为例

### 核心概念

把 `React Native` 组件集成到 `Android` 应用中有如下几个主要步骤：

* 配置好 `React Native` 依赖和项目结构

* 创建 `JavaScript` 文件，编写 `React Native` 组件的 `JavaScript` 代码

* 在应用中添加一个 `RCTRootView`

  * 这个 `RCTRootView` 正是用来承载你的 `React Native` 组件的容器

* 启动 `React Native` 的 `Packager` 服务，运行应用

* 验证这部分组件是否正常工作

### 开发环境准备

首先按照[【开发环境搭建教程】](https://reactnative.cn/docs/getting-started)来安装 `React Native` 在 `Android` 平台上所需的一切依赖软件

#### 配置项目目录结构

首先创建一个空目录用于存放 `React Native` 项目，然后在其中创建一个 `/android` 子目录，把你现有的 `Android` 项目拷贝到 `/android` 子目录中

#### 安装 `JavaScript` 依赖包

在项目根目录下创建一个名为 `package.json` 的空文本文件，然后填入以下内容：

```json
{
  "name": "MyReactNativeApp",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start"
  }
}
```

* 示例中的 `version` 字段没有太大意义

  * 除非你要把你的项目发布到 `npm` 仓库

  * `scripts` 中是用于启动 `packager` 服务的命令

接下来我们使用 `yarn` 或 `npm` （两者都是 `node` 的包管理器）来安装 `React` 和 `React Native` 模块

* 请打开一个终端/命令提示行，进入到项目目录中（即包含有 `package.json` 文件的目录），然后运行下列命令来安装：

```
$ yarn add react-native
```

这样默认会安装最新版本的 `React Native` ，同时会打印出类似下面的警告信息（你可能需要滚动屏幕才能注意到）：

```
warning "react-native@0.52.2" has unmet peer dependency "react@16.2.0".
```

这是正常现象，意味着我们还需要安装指定版本的 `React` ：

```
$ yarn add react@16.2.0
```

> 注意: 必须严格匹配警告信息中所列出的版本，高了或者低了都不可以

> 如果你使用多个第三方依赖，可能这些第三方各自要求的 `react` 版本有所冲突，此时应优先满足 `react-native` 所需要的 `react` 版本
>> 其他第三方能用则用，不能用则只能考虑选择其他库

所有 `JavaScript` 依赖模块都会被安装到项目根目录下的 `node_modules/` 目录中

* 这个目录我们原则上不复制、不移动、不修改、不上传，随用随装

把 `node_modules/` 目录记录到 `.gitignore` 文件中

* 不用上传到版本控制系统，只保留在本地

### 把 `React Native` 添加到你的应用中

#### 配置 `maven`

在你的 `app` 中 `build.gradle` 文件中添加 `React Native` 依赖：

```jsx
dependencies {
    implementation 'com.android.support:appcompat-v7:27.1.1'
    ...
    implementation "com.facebook.react:react-native:+"
    // From node_modules
}
```

* 如果想要指定特定的 `React Native` 版本，可以用具体的版本号替换 `+`

  * 当然前提是你从 `npm` 里下载的是这个版本

在项目的 `build.gradle` 文件中为 `React Native` 添加一个 `maven` 依赖的入口，必须写在 `allprojects` 代码块中：

```jsx
allprojects {
    repositories {
        maven {
            // All of React Native (JS, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
        ...
    }
    ...
}
```

> 确保依赖路径的正确！
>> 以免在 Android Studio 运行 Gradle 同步构建时抛出 “Failed to resolve: com.facebook.react:react-native:0.x.x" 异常

#### 配置权限

接着，在 `AndroidManifest.xml` 清单文件中声明网络权限：

```
<uses-permission android:name="android.permission.INTERNET" />
```

如果需要访问 `DevSettingsActivity` 界面（即开发者菜单）

* 则还需要在 `AndroidManifest.xml` 中声明

```
<activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
```

开发者菜单一般仅用于在开发时从 `Packager` 服务器刷新 `JavaScript` 代码

* 在正式发布时你可以去掉这一权限

#### 网络安全配置 `(API level 28+)`

从 `Android 9 (API level 28+)` 开始，默认情况下禁用明文通信

* 这会阻止应用程序连接到 `React Native` 打包程序

* 下文这些更改添加了专门允许到 `Packager IP` 的明文通信的域规则

创建以下资源文件

```
app/src/debug/res/xml/network_security_config.xml:
```

```jsx
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <!-- allow cleartext traffic for React Native packager ips in debug -->
  <domain-config cleartextTrafficPermitted="true">
    <domain includeSubdomains="false">localhost</domain>
    <domain includeSubdomains="false">10.0.2.2</domain>
    <domain includeSubdomains="false">10.0.3.2</domain>
  </domain-config>
</network-security-config>
```

```
app/src/release/res/xml/network_security_config.xml:
```

```jsx
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <!-- deny cleartext traffic for React Native packager ips in release -->
  <domain-config cleartextTrafficPermitted="false">
    <domain includeSubdomains="false">localhost</domain>
    <domain includeSubdomains="false">10.0.2.2</domain>
    <domain includeSubdomains="false">10.0.3.2</domain>
  </domain-config>
</network-security-config>
```

将配置应用于 `AndroidManifest.xml`

```jsx
<!-- ... -->
<application
  android:networkSecurityConfig="@xml/network_security_config">
  <!-- ... -->
</application>
<!-- ... -->
```

要了解有关网络安全配置和明文通信策略的更多信息[【请参阅此链接】](https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted)

#### 代码集成

现在，我们将实际修改本机 `Android` 应用程序以集成 `React Native`

* `React Native` 组件

  > 我们首先要写的是 `High Score` （得分排行榜）的 `JavaScript` 端的代码

  * 创建一个 `index.js` 文件

    * 首先在项目根目录中创建一个空的 `index.js` 文件

      > 注意：在 `0.49` 版本之前是 `index.android.js` 文件

    * `index.js` 是 `React Native` 应用在 `Android` 上的入口文件

      > 注意：它是不可或缺的！
      >> 它可以是个很简单的文件，简单到可以只包含一行 `require/import` 导入语句
      >>> 教程中为了简单示范，把全部的代码都写到了 `index.js` 里；当然实际开发中我们并不推荐这样做

  * 添加你自己的 `React Native` 代码

    * 这里我们只是简单的添加一个 `<Text>` 组件，然后用一个带有样式的 `<View>` 组件把它包起来

      ```jsx
      import React from 'react';
      import {AppRegistry, StyleSheet, Text, View} from 'react-native';

      class HelloWorld extends React.Component {
        render() {
          return (
            <View style={styles.container}>
              <Text style={styles.hello}>Hello, World</Text>
            </View>
          );
        }
      }
      var styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
        },
        hello: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
        },
      });

      AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);
      ```

  * 配置权限以便开发中的红屏错误能正确显示

    * 如果你的应用会运行在 `Android 6.0（API level 23）` 或更高版本，请确保你在开发版本中有打开悬浮窗( `overlay` )权限

    * 你可以在代码中使用 `Settings.canDrawOverlays(this)` 来检查

      > 之所以需要这一权限，是因为我们会把开发中的报错显示在悬浮窗中（仅在开发阶段需要）
      >> 在 `Android 6.0（API level 23）` 中用户需要手动同意授权
      >>> 具体请求授权的做法是在 `onCreate()` 中添加如下代码
      >>>> 其中 `OVERLAY_PERMISSION_REQ_CODE` 是用于回传授权结果的字段

    ```jsx
    private final int OVERLAY_PERMISSION_REQ_CODE = 1;  // 任写一个值

    ...

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        if (!Settings.canDrawOverlays(this)) {
            Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                                      Uri.parse("package:" + getPackageName()));
            startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
        }
    }
    ```

    * 最后，必须重写 `onActivityResult()` 方法（如下面的代码所示），以处理一致 `UX` 接受或拒绝的权限情况

    * 此外，对于集成使用 `startActivityForResult` 的本机模块，我们需要将结果传递给我们的 `ReactInstanceManager` 实例的 `onActivityResult` 方法

    ```jsx
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(this)) {
                    // SYSTEM_ALERT_WINDOW permission not granted
                }
            }
        }
        mReactInstanceManager.onActivityResult( this, requestCode, resultCode, data );
    }
    ```

#### 掌握核心科技：`ReactRootView`

我们还需要添加一些原生代码来启动 `React Native` 的运行时环境并让它开始渲染

* 首先需要在一个 `Activity` 中创建一个 `ReactRootView` 对象

* 然后在这个对象之中启动 `React Native` 应用，并将它设为界面的主视图

  > 如果你想在安卓 `5.0` 以下的系统上运行，请用 `com.android.support:appcompat` 包中的 `AppCompatActivity` 代替 `Activity`

```jsx
public class MyReactActivity extends Activity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setCurrentActivity(this)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModulePath("index")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        // 注意这里的MyReactNativeApp必须对应“index.js”中的
        // “AppRegistry.registerComponent()”的第一个参数
        mReactRootView.startReactApplication(mReactInstanceManager, "MyReactNativeApp", null);

        setContentView(mReactRootView);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
}
```

* 如果您使用的是 `React Native` 的入门工具包

* 将 `HelloWorld` 字符串替换为 `index.js` 文件中的字符串

  * 这是 `appRegistry.registerComponent()` 方法的第一个参数

如果你使用的是 `Android Studio` , 可以使用 `Alt + Enter` 快捷键来自动为 `MyReactActivity` 类补上缺失的 `import` 语句

* 注意 `BuildConfig` 应该是在你自己的包中自动生成，无需额外引入

  > 千万不要从 `com.facebook...` 的包中引入！

我们需要把 `MyReactActivity` 的主题设定为 `Theme.AppCompat.Light.NoActionBar` ，因为里面有许多组件都使用了这一主题：

```jsx
<activity
  android:name=".MyReactActivity"
  android:label="@string/app_name"
  android:theme="@style/Theme.AppCompat.Light.NoActionBar">
</activity>
```

> 一个 `ReactInstanceManager` 可以在多个 `activities` 或 `fragments` 间共享
>> 您将需要创建自己的 `ReactFragment` 或 `ReactActivity` ，并拥有一个持有 `ReactInstanceManager` 的单例持有人
>>> 当您需要 `ReactInstanceManager` 时，使用单件提供的那个
>>>> 例如，将 `ReactInstanceManager` 连接到这些活动或片段的生命周期

下一步我们需要把一些 `activity` 的生命周期回调传递给 `ReactInstanceManager` ：

```jsx
@Override
protected void onPause() {
    super.onPause();

    if (mReactInstanceManager != null) {
        mReactInstanceManager.onHostPause(this);
    }
}

@Override
protected void onResume() {
    super.onResume();

    if (mReactInstanceManager != null) {
        mReactInstanceManager.onHostResume(this, this);
    }
}

@Override
protected void onDestroy() {
    super.onDestroy();

    if (mReactInstanceManager != null) {
        mReactInstanceManager.onHostDestroy(this);
    }
    if (mReactRootView != null) {
        mReactRootView.unmountReactApplication();
    }
}
```

我们还需要把后退按钮事件传递给 `React Native` ：

```jsx
@Override
 public void onBackPressed() {
    if (mReactInstanceManager != null) {
        mReactInstanceManager.onBackPressed();
    } else {
        super.onBackPressed();
    }
}
```

* 这允许 `JavaScript ` 控制当用户按下硬件后退按钮时发生的情况

  * 例如实现导航

* 当 `JavaScript ` 不处理后退按钮时，按下

  * 将调用 `invokeDefaultOnBackPressed` 方法

* 默认情况下，这只会完成您的 `Activity`

最后，我们需要连接dev菜单

* 默认情况下，这是通过摇动设备来激活的

  * 但这在模拟器中并不是很有用

* 所以当你按下硬件菜单按钮时，我们会让它显示出来

  * 如果使用 `Android Studio` 模拟器 ，请使用 `Ctrl + M`

```jsx
@Override
public boolean onKeyUp(int keyCode, KeyEvent event) {
    if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
        mReactInstanceManager.showDevOptionsDialog();
        return true;
    }
    return super.onKeyUp(keyCode, event);
}
```

现在 activity 已就绪，可以运行一些 JavaScript 代码了

### 测试集成结果

> 您已经完成了将 `react native` 与当前应用程序集成的所有基本步骤

现在，我们将启动 `React Native` 打包程序来构建 `index.bundle` ，并在 `localhost` 上运行服务器来为其提供服务

* 运行 `Packager`

  * 运行应用首先需要启动开发服务器（ `Packager` ）

  * 你只需在项目根目录中执行以下命令即可：

  ```
  $ yarn start
  ```

* 运行你的应用

  * 保持 `packager` 的窗口运行不要关闭，然后像往常一样编译运行你的 `Android` 应用

  * 在命令行中执行 `./gradlew installDebug` 或是在 `Android Studio` 中编译运行

  * 编译执行一切顺利进行之后，在进入到 `MyReactActivity` 时应该就能立刻从 `packager` 中读取 `JavaScript` 代码并执行和显示：

![图片](https://reactnative.cn/docs/assets/EmbeddedAppAndroid.png)

### 在 `Android Studio` 中打包

你也可以使用 `Android Studio` 来打 `release` 包！

* 其步骤基本和原生应用一样

* 只是在每次编译打包之前需要先执行 `JavaScript` 文件的打包

  * 即生成离线的 `jsbundle` 文件

* 具体的 `JavaScript` 打包命令如下：

```
$ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/com/your-company-name/app-package-name/src/main/assets/index.android.bundle --assets-dest android/com/your-company-name/app-package-name/src/main/res/
```

* 注意把上述命令中的路径替换为你实际项目的路径

  * 如果 `assets` 目录不存在，则需要提前自己创建一个

* 然后在` Android Studio` 中正常生成 release 版本即可！

## 为电视和机顶盒制作应用

目前的 `React Native` 应用只需在 `JavaScript` 端简单修改甚至无需修改，在电视和机顶盒设备上就基本可用了

* `iOS`
* `Android`

[【了解更多可点击查看 `iOS` 及 `Android` 版本的详细情况】](https://reactnative.cn/docs/building-for-apple-tv/#为电视和机顶盒制作应用)

### 编译修改

* 原生端：

  * 在 `Android TV` 上运行 `React Native` 项目请先在 `AndroidManifest.xml` 中加入下列配置：

```jsx
 <!-- 加入自定义的banner图作为TV设备上的图标 -->
 <application
  ...
  android:banner="@drawable/tv_banner"
  >
    ...
    <intent-filter>
      ...
      <!-- Needed to properly create a launch intent when running on Android TV -->
      <category android:name="android.intent.category.LEANBACK_LAUNCHER"/>
    </intent-filter>
    ...
  </application>
  ```

* `JavaScript` 端：

  * 对于电视设备的检测代码已经加入到了 `Platform` 模块中

  * 你可以使用下面的代码来检测当前运行设备是否是电视设备：

```jsx
import {Platform} from 'react-native';
const running_on_tv = Platform.isTV;
```

### 代码修改

* 访问可点击的控件：

  * 在 `Android` 电视上运行时，`Android` 框架将根据视图中可聚焦元素的相对位置自动应用定向导航方案

  * `Touchable mixin` 添加了用于检测焦点变化的代码，并使用现有方法正确设置组件样式，并在使用电视遥控器选择视图时启动正确的操作

  * 所以可以用外反馈，可触摸的突出显示，`TouchableOpacity` 和 `TouchableNativeFeedback` 将 `只起作用` ：

    * `onFocus`

      将在可触摸视图进入焦点时执行

    * `onBlur`

      将在可触摸视图失去焦点时执行

    * `onPress`

      当通过按电视遥控器上的 `选择` 按钮实际选择可触摸视图时，将执行

* 电视遥控器输入：

  * 一个新的本地类，反应物导向阀观察助手，为电视远程事件设置关键事件处理程序

    * 当电视遥控事件发生时，此类触发 `JavaScript` 事件

  * `TVEventHandler JavaScript` 对象的实例将捕获此事件

    * 需要实现电视远程事件自定义处理的应用程序代码可以创建 `TveEventHandler` 实例并侦听这些事件，如以下代码所示：

      ```jsx
      var TVEventHandler = require('TVEventHandler');

      class Game2048 extends React.Component {
        _tvEventHandler: any;

        _enableTVEventHandler() {
          this._tvEventHandler = new TVEventHandler();
          this._tvEventHandler.enable(this, function(cmp, evt) {
            if (evt && evt.eventType === 'right') {
              cmp.setState({board: cmp.state.board.move(2)});
            } else if(evt && evt.eventType === 'up') {
              cmp.setState({board: cmp.state.board.move(1)});
            } else if(evt && evt.eventType === 'left') {
              cmp.setState({board: cmp.state.board.move(0)});
            } else if(evt && evt.eventType === 'down') {
              cmp.setState({board: cmp.state.board.move(3)});
            } else if(evt && evt.eventType === 'playPause') {
              cmp.restartGame();
            }
          });
        }

        _disableTVEventHandler() {
          if (this._tvEventHandler) {
            this._tvEventHandler.disable();
            delete this._tvEventHandler;
          }
        }

        componentDidMount() {
          this._enableTVEventHandler();
        }

        componentWillUnmount() {
          this._disableTVEventHandler();
        }
      ```

* 开发菜单支持：

  * 在模拟器上，`Cmd-M` 会弹出开发者菜单，就像安卓一样

  * 要在真正的 `Android` 电视设备上显示它，长按遥控器上的 `播放/暂停` 按钮

    * 请不要摇晃 `Android` 电视设备，那不起作用

> 已知问题：
>> `TextInput` 组件暂时不工作
>>> 也就是说，他们无法获得焦点

## 在设备上运行

在真机上测试 `app` 后再将其发布给用户总是好的

* 本文档将指导你通过必须的步骤在设备上运行 `React Native app` ，为生产做准备

* 如果使用 `Create React Native App` 来建立工程，可以通过 `Expo App` 扫描 `QR` 代码在设备上预览 `app`

* 为了在设备上编译和运行 `app` ，需要逐出并从搭建开发环境安装原生代码依赖

  * `iOS`
  * `Android`

[【点击可查看 `iOS` 及 `Android` 版本的详细情况】](https://reactnative.cn/docs/running-on-device/#在设备上运行)

### 在 `Android` 设备上运行应用

> 下文所指的设备包括 `Android` 手机和模拟器【[其他开发平台可点击查看详细情况】](https://reactnative.cn/docs/running-on-device/#在-android-设备上运行应用)

#### 开启 `USB` 调试

在默认情况下 `Android` 设备只能从应用市场来安装应用

* 你需要开启 `USB` 调试才能自由安装开发版本的 `APP`

* 首先，确定[【你已经打开设备的 `USB` 调试开关】](https://www.baidu.com/s?wd=%E6%89%93%E5%BC%80usb%E8%B0%83%E8%AF%95)

#### 通过 `USB` 数据线连接设备

现在让我们设置一个 `Android` 设备来运行我们的 `React` 本地项目

* 通过USB将设备插入开发机器

* 下面检查你的设备是否能正确连接到 `ADB（Android Debug Bridge）`，使用 `adb devices` 命令：

```
$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device
```

* 在右边那列看到 `device` 说明你的设备已经被正确连接了

  * 注意，你每次只应当连接一个设备

> 译注：如果你连接了多个设备（包含模拟器在内），后续的一些操作可能会失败
>> 拔掉不需要的设备，或者关掉模拟器，确保 `adb devices` 的输出只有一个是连接状态

#### 运行应用

现在你可以运行 `react-native run-android` 来在设备上安装并启动应用了

> 如果出现 `bridge configuration isn't available` 错误，请参阅[【使用 `ADB REVERSE` 】](https://reactnative.cn/docs/running-on-device#method-1-using-adb-reverse-recommended)

> 提示：你还可以运行 `react-native run-android --variant=release` 来安装 `release` 版的应用
>> 当然你需要[【先配置好签名】](https://reactnative.cn/docs/running-on-device/signed-apk-android.html)，且此时无法再开启开发者菜单
>>> 注意在 `debug` 和 `release` 版本间来回切换安装时可能会报错签名不匹配，此时需要先卸载前一个版本再尝试安装

### 从设备上访问开发服务器

> 在启用开发服务器（官方名称 `metro` ，但我们更常称之为 `Packager` ）的情况下，你可以快速的迭代修改应用，然后在设备上立即查看结果

> 译注：默认情况下模拟器可以自动探测宿主机 `ip` 并连接，只有 `Android 5.0` 以下版本的手机需要按下文说明来手动操作
>> 但某些情形下可能也无法正常连接，请注意去[【论坛的求助专区】](http://bbs.reactnative.cn/category/4/)查看是否有人遭遇同类型的问题（不同时期不同版本可能是不同的问题）
>>> 有些文章会提到 `react-native bundle` 命令，这个命令会把 `JavaScript` 文件打包内置到应用中，从而不需要连接 `Packager` ，但这并没有解决问题
>>>> 我们在开发中必须使用到 `Packager` ，否则无法刷新代码

按照下面描述的任意一种方法来使你的设备可以访问到运行在电脑上的开发服务器：

#### `Android 5.0` 及以上

使用 `adb reverse` 命令

> 注意：这个选项只能在 `5.0` 以上版本( `API 21+` )的安卓设备上使用

首先把你的设备通过 `USB` 数据线连接到电脑上，并开启 `USB` 调试（关于如何开启 `USB` 调试，参见上面的章节）：

* 运行 `adb reverse tcp:8081 tcp:8081`

* 不需要更多配置，你就可以使用 `Reload JS` 和其它的开发选项了

#### `Android 5.0` 以下

通过 `Wi-Fi` 连接你的本地开发服务器

* 可以通过 `Wi-Fi` 连接到开发服务器

  * 你首先需要使用 `USB` 线在你的设备上安装应用程序

  * 但一旦完成了这些操作，您就可以按照这些说明进行无线调试

  * 在继续之前，您需要开发机器的当前 `IP` 地址

* 您可以在系统 `首选项` → `网络` 中找到 `IP` 地址

  * 首先确保你的电脑和手机设备在同一个 `Wi-Fi` 环境下

  * 在设备上运行你的 `React Native` 应用；和打开其它 `App` 一样操作

  * 你应该会看到一个 `红屏` 错误提示：这是正常的，下面的步骤会解决这个报错

  * 摇晃设备，或者运行 `adb shell input keyevent 82` ，可以打开 `开发者菜单`

  * 点击 `Dev Settings` -> `Debug server host for device`

  * 输入你电脑的 `IP` 地址和端口号（譬如 `10.0.1.1:8081` ）

    * 在 `Mac` 上，你可以在 `系统设置 - 网络` 里找查询你的 `IP` 地址

    * 在 `Windows` 上，打开命令提示符并输入 `ipconfig` 来查询你的 `IP` 地址

    * 在 `Linux` 上你可以在终端中输入 `ifconfig` 来查询你的 `IP` 地址

  * 回到 `开发者菜单` 然后选择 `Reload JS`

现在可以从[【`开发人员菜单`】](https://reactnative.cn/docs/debugging#accessing-the-in-app-developer-menu)启用实时重新加载，每当您的 `javascript` 代码更改时，您的应用程序将重新加载

### 为生产构建应用程序

> 你已经用 `React native` 构建了一个很棒的应用程序，你现在很想把它放在游戏商店里

这一过程与其他任何本地Android应用程序相同，还要考虑一些额外的因素[【按照生成已签名 `APK` 的指南了解更多信息】](https://reactnative.cn/docs/signed-apk-android)

## 更新

时刻将 `React Native` 更新到最新的版本，可以获得更多 `API` 、视图、开发者工具以及其他一些好东西

> 译注：官方开发任务繁重，人手紧缺，几乎不会对旧版本提供维护支持，所以即便更新可能带来一些兼容上的变更，但建议开发者还是尽一切可能第一时间更新

由于一个完整的 `React Native` 项目是由 `Android` 项目、`iOS` 项目和 `JavaScript` 项目组成的，且都打包在一个 `npm` 包中，所以升级可能会有一些麻烦

* 你可以在项目目录下使用 `react-native info` 命令查看当前的版本

* 以下是目前所需的升级步骤：

  * [【英文更新日志点这里查看】](https://github.com/facebook/react-native/releases)

  * [【中文更新日志点这里查看】](http://bbs.reactnative.cn/category/1)

### 如果你当前的版本大于等于 `0.59`

> 基于 `Git` 升级

[【 `react native cli` 】](https://github.com/react-native-community/react-native-cli)附带了 `升级` 命令，该命令提供了一步操作，以最少的冲突升级源文件，感谢[【 `rn-diff-purge` 】](https://github.com/react-native-community/rn-diff-purge)项目

* 确保您的项目使用 `Git`

  * 此步骤仅适用于还未使用 `Git` 的项目

  * 如果你用的话就跳过它

  * 如果您的项目还未使用 `Git` ，初始化它并提交：

    ```
    git init
    git add .
    git commit -m "upgrade RN"
    ```

  * 升级完成并解决冲突后，可以删除 `.git` 目录

* 运行升级命令

  * 运行以下命令启动升级到最新版本的过程：

    ```
    react-native upgrade
    ```

  * 您可以通过传递一个参数来指定一个 `React Native` 版本，例如，要升级到 `0.59.0-rc.0` ，请运行：

    ```
    react-native upgrade 0.59.0-rc.0
    ```

  * 该项目使用 `git apply` 进行升级，并进行三向合并

    * 这就是可能发生的原因，你需要解决一些冲突

* 解决冲突

  * 突文件包括分隔符，这些分隔符可以很清楚地说明更改的来源，例如：

    ```
    13B07F951A680F5B00A75B9A /* Release */ = {
      isa = XCBuildConfiguration;
      buildSettings = {
        ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
    <<<<<<< ours
        CODE_SIGN_IDENTITY = "iPhone Developer";
        FRAMEWORK_SEARCH_PATHS = (
          "$(inherited)",
          "$(PROJECT_DIR)/HockeySDK.embeddedframework",
          "$(PROJECT_DIR)/HockeySDK-iOS/HockeySDK.embeddedframework",
        );
    =======
        CURRENT_PROJECT_VERSION = 1;
    >>>>>>> theirs
        HEADER_SEARCH_PATHS = (
          "$(inherited)",
          /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include,
          "$(SRCROOT)/../node_modules/react-native/React/**",
          "$(SRCROOT)/../node_modules/react-native-code-push/ios/CodePush/**",
        );
    ```

    * 您可以将 `ours` 视为 `您的团队` ，将 `theirs` 视为 `React Native 开发团队`

### 其他版本

如果你当前的版本低于 `0.59` ， 或者想降级到 `0.59` 以下， 或上述升级方法对你无效：

#### 更新 `react-native` 的 `node` 依赖包

请使用 `npm info react-native` 命令查看其当前最新版本

* 打开项目目录下的 `package.json` 文件

* 然后在 `dependencies` 模块下找到 `react-native`

* 将当前版本号改到你所需要的已经发布的版本

* 然后在命令行中运行：

```
$ npm install
```

> 注意：`react-native` 依赖于特定版本的，高于或低于某个范围都不可以
>> 本文无法在这里列出所有 `react native` 和对应的 `react` 模块版本要求
>>> 只能提醒读者先尝试执行 `npm install` ，然后注意观察安装过程中的报错信息，例如 `require react@某.某.某版本, but none was installed`
>>>> 然后根据这样的提示，执行 `npm install react@某.某.某版本`

#### 升级项目模板文件

新版本的 `npm` 包通常还会包含一些动态生成的文件，这些文件是在运行 `react-native init` 创建新项目时生成的，比如 `iOS` 和 `Android` 的项目文件

* 为了使老项目的项目文件也能得到更新（不重新 `init` ），你需要在命令行中运行：

```
$ react-native upgrade
```

> 译注：如果你有修改原生代码，那么在使用 `upgrade` 升级前，`先备份，再覆盖`
>> 覆盖完成后，使用比对工具找出差异，将你之前修改的代码逐步搬运到新文件中

这一命令会检查最新的项目模板，然后进行如下操作：

* 如果是新添加的文件，则直接创建

* 如果文件和当前版本的文件相同，则跳过

* 如果文件和当前版本的文件不同，则会提示你一些选项：

  * 查看两者的不同，选择保留你的版本或是用新的模板覆盖

  * 你可以按下 `h` 键来查看所有可以使用的命令

### 手动升级

> 升级过程往往会碰到很多问题，尤其涉及到众多第三方时，处理起来尤为费时费力

此时建议可以尝试直接 `init` 一个新的项目，然后把现有项目的 `JavaScript` 代码进行手动迁移

## 原生模块配置

> 本机模块通常作为 `npm` 包分发，除了通常的 `javascript` 之外，每个平台还将包含一些本机代码
>> 要了解有关 `npm` 包的更多信息，您可能会发现[【本指南】](https://docs.npmjs.com/getting-started/publishing-npm-packages)很有用

要使用本机模块的基本项目结构进行设置，我们将使用第三方工具 `react native create library`

* 你可以继续深入研究它的运作方式

* 对于我们的需求，我们只需要：

  ```
  $ npm install -g react-native-create-library
  $ react-native-create-library MyLibrary
  ```

  * 其中 `mylibrary` 是新模块的名称

  * 完成此操作后，您将导航到 `mylibrary` 文件夹

  * 并通过执行以下操作安装 `npm` 包，使其在本地可供您的计算机使用：

    ```
    $ npm install
    ```

* 完成后，您可以转到您的主 `React` 应用程序文件夹

  * 通过执行 `react native init myapp` 创建

* 将新创建的模块作为依赖项添加到 `package.json` 中

* 运行 `npm` 安装，将其从本地 `npm` 存储库中带来

之后，您将能够继续使用本机模块 `iOS` 或本机模块 `Android` 来添加一些代码

> 可以阅读 `mylibrary` 目录中的 `README.md` 文件，以获取有关如何包含项目的平台特定说明

## 多平台支持

`React Native` 不仅适用于 `Android` 和 `iOS` ，还提供社区支持的项目，可将其应用于其他平台，如：

* [【 `React Native Windows` 】](https://github.com/Microsoft/react-native-windows)

  对微软的通用 `Windows` 平台（ `UWP` ）和 `Windows` 演示基金会（ `WPF` ）作出本地支持

* [【 `React Native DOM` 】](https://github.com/vincentriemer/react-native-dom)

  一个实验性的、全面的响应网络本地端口

  不要与具有不同目标的[【 `React Native Web` 】](https://github.com/necolas/react-native-web)混淆

* [【 `React Native Desktop` 】](https://github.com/status-im/react-native-desktop)

  一个旨在通过 `Qt's QML` 将本地反应引入桌面的项目

  不再维护的[【 `React Native Ubuntu` 】](https://github.com/CanonicalLtd/react-native/)分支

* [【 `React Native macOS` 】](https://github.com/ptmt/react-native-macos)

  针对 `macOS` 和 `Cocoa` 的 `React Native` 实验性分支

### 创建自己的 `React Native` 平台

> 现在，从头开始创建一个 `React Native` 平台的过程并没有很好地记录下来

即将到来的重新架构[【 `fabric` 】](https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018)的目标之一是使维护平台更容易

#### `Building`

> 从 `React Native 0.57` 开始，您现在可以使用 `React Native` 的 `javascript` 打包工具[【 `metro` 】](https://facebook.github.io/metro/)注册您的 `React Native` 平台
>> 这意味着您可以通过 `--platform` 来进行 `react-native` 打包，它将查找后缀为 `.example.js` 的 `javascript` 文件

要在 `RNPM` 中注册平台，模块的名称必须与以下模式之一匹配：

* `react-native-example`

  它将搜索从 `react native-` 开始的所有顶级模块

* `@org/react-native-example`

  它将搜索以 `react native-` 开头的模块

  在任何范围内

* `@react-native-example/module`

  它将在作用域下的所有模块中搜索以 `@react native-` 开头的名称

您的 `package.json` 中也必须有这样的条目：

```jsx
{
  "rnpm": {
    "haste": {
      "providesModuleNodeModules": ["react-native-example"],
      "platforms": ["example"]
    }
  }
}
```

* `providesmodulenodemodules`

  是将添加到快速模块搜索路径的模块数组

* `platforms`

  是将添加为有效平台的平台后缀数组

## 从源代码编译 `React Native`

如果你想提前合并官方的修复补丁，尝试还没发布的最新特性，或者添加一些你自己的原生代码，那么就需要自己从源代码编译 `React Native`

### `Android`

#### 预备条件

在 `Android Studio` 的 `SDK Manager` 中安装以下组件：

* `Android SDK version 28`

  编译 `SDK` 版本号在 `build.gradle` 中可以找到

* `SDK build tools version 28.0.3`

  编译工具版本号在 `build.gradle` 中可以找到

* `Android Support Repository >= 28`

* `Android NDK`

  下载及安装指南请看后文

#### 将 `Gradle` 指向你的安卓 `SDK`

第一步：在命令行配置文件中设置环境变量

> 注意：对于不同的 `shell` 命令行，配置文件有所不同，请根据具体情况选择，例如：

> `bash`
>> `.bash_profile` 或 `.bashrc`

> `zsh`
>> `.zprofile` 或 `.zshrc`

> `ksh`
>> `.profile` 或 `$ENV`

* 在配置文件中加入：

  * 请填写自己的实际路径

```jsx
export ANDROID_SDK=/Users/your_unix_name/android-sdk-macosx
export ANDROID_NDK=/Users/your_unix_name/android-ndk/android-ndk-r17c
```

第二步：在项目目录的 `android` 目录下创建 `local.properties` 文件

* 添加以下内容：

  * 注意：`windows` 下路径需要使用反双斜杠

```
ndk.dir=指向android ndk目录的绝对路径
```

`Android NDK` 的下载链接

> `0.57` 之前使用 `r10e` 版本

* [【 `Mac OS (64-bit)` 】](http://dl.google.com/android/repository/android-ndk-r17c-darwin-x86_64.zip)

* [【 `Linux (64-bit)` 】](http://dl.google.com/android/repository/android-ndk-r17c-linux-x86_64.zip)

* [【 `Windows (64-bit)` 】](http://dl.google.com/android/repository/android-ndk-r17c-windows-x86_64.zip)

* [【 `Windows (32-bit)` 】](http://dl.google.com/android/repository/android-ndk-r17c-windows-x86.zip)

安装说明请参考[【官方文档】](https://developer.android.com/ndk/index.html)

### 编译源代码

#### 下载 `react-native` 源代码

* 首先，在你的分支代码中安装 `react-native`

  * 例如从官方地址安装主干版本：

  ```
  npm install --save github:facebook/react-native#master
  ```

* 或者，你也可以把仓库克隆到你的 `node_modules` 目录

  * 然后运行 `npm install` 进行安装

#### 添加 `gradle` 依赖

在 `android/build.gradle` 中添加 `gradle-download-task` 依赖

```
...
  dependencies {
    classpath 'com.android.tools.build:gradle:3.2.1'
    classpath 'de.undercouch:gradle-download-task:3.4.3'

    // 注意：不要把你的应用的依赖放在这里；
    // 它们应该放在各自模块的build.gradle文件中
  }
...
```

#### 添加：`ReactAndroid` 项目

* 在 `android/settings.gradle` 中添加：`ReactAndroid` 项目

```
...
include ':ReactAndroid'

project(':ReactAndroid').projectDir = new File(
  rootProject.projectDir, '../node_modules/react-native/ReactAndroid')
...
```

* 修改你的 `android/app/build.gradle` 文件，使用：`ReactAndroid` 替换预编译库

  * 例如用 `implementation project(':ReactAndroid')` 替换 `implementation 'com.facebook.react:react-native:+'`

```
...
dependencies {
  implementation fileTree(dir: 'libs', include: ['*.jar'])
  implementation 'com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}'

  implementation project(':ReactAndroid')

  ...
}
...
```

#### 让第三方模块使用你的分支

> 如果你使用第三方的 `React Native` 模块，你需要重写它们的依赖以避免它们仍然打包官方的预编译库
>> 否则当你编译时会报错 - `Error: more than one library with package name 'com.facebook.react'`
>>> 错误：有几个重名的 `com.facebook.react` 的包

修改你的 `android/app/build.gradle` 文件，添加如下内容：

```
configurations.all {
  exclude group: 'com.facebook.react', module: 'react-native'
}
```

#### 在 Android Studio 中编译

在 `Android Studio` 欢迎页中选择 `Import project` ，随后选择您应用所在的文件夹

* 您还需要使用 `Run` 按钮来在设备上运行您的 `app`

  > 译注：`Android Studio` 中绿色的运行按钮

* 此外 `Android Studio` 不会自动开启服务

  > 你还需要通过 `npm start` 来启动开发服务

#### 其他注意事项

> 从源码进行编译将会花费很长时间，尤其是第一次编译，需要下载接近 `200M` 的文件然后编译原生代码
>> 每次你在自己的仓库更新 `react-native` 版本时，构建的目录可能会被删除，所有的文件都需要重新下载

为了避免构建目录被删，你需要编辑 `~/.gradle/init.gradle` 文件来修改构建目录路径

```
gradle.projectsLoaded {
    rootProject.allprojects {
        buildDir = "/path/to/build/directory/${rootProject.name}/${project.name}"
    }
}
```

#### 故障排除

Q：`ndk build` 中的 `Gradle build` 失败

A：请参见上面有关 `local.properties` 文件的部分

### 测试您的更改

如果您对 `React Native` 进行了更改并提交了拉请求，则所有测试都将根据拉请求自动运行

> 要在本地运行测试，请参阅[【运行测试】](https://reactnative.cn/docs/testing)

### 使更改可用

请参阅[【发布您自己版本的 `react native` 】](https://reactnative.cn/docs/publishing-forks)，以获取使您的更改可用于您和其他应用程序项目的几个选项

## 发布自己定制的 `React Native` 包

### `TL;DR`

有一个 `Docker` 映像可以帮助您构建所需的Android源代码，而无需安装任何其他工具

> 除了[【 `Docker` 】](https://docs.docker.com/install/)之外，它可以作为一个完全功能的 `React Native` 分支发行版提交给 `Git` 分支

从 `React Native` 的[【 `repo` 】](https://github.com/facebook/react-native)分支运行此函数

```
git checkout -d release/my-react-native-release
docker run --rm --name rn-build -v $PWD:/pwd -w /pwd reactnativecommunity/react-native-android /bin/sh -c "./gradlew installArchives"
git add android --force
git commit -a -m 'my react native forked release'
git push
```

在 `app` 项目的 `package.json` 中安装

```
"dependencies": {
  ...
  "react-native": "myName/react-native#release/my-react-native-release"
}
```

### 理论基础

使用 `React Native` 的建议方法是始终更新到最新版本

* 在旧版本上不提供支持

  * 如果遇到问题，贡献者会始终要求您在查看特定问题之前升级到最新版本

* 但是，有时您会暂时停留在旧的 `React Native` 版本上

  * 但是您迫切需要从较新版本（错误修复）中进行一些更改，而无需立即进行完全升级

  * 根据定义，这种情况应该是短暂的，一旦有时间，真正的解决方案就是升级到最新版本

考虑到 `React Native` 的短暂分支的目标，您可以发布自己的 `React Native` 版本

* `Facebook/React Native` 存储库包含直接用作 `Git` 依赖项所需的所有依赖项，但 `Android React Native` 库二进制文件（ `.aar` ）除外

## 其他内容可自行前往官方文档查看

* [【 `Building` 】](https://reactnative.cn/docs/publishing-forks/#building)

* [【测试您的更改】](https://reactnative.cn/docs/testing/#Testing%20your%20Changes)

* [【使用指南( `iOS` )】](https://reactnative.cn/docs/native-modules-ios/#原生模块)

* [【使用指南( `Android` )】](https://reactnative.cn/docs/native-modules-android/#原生模块)


# 组件

## `ActivityIndicator`

[【 查看官方 `ActivityIndicator` 文档 】](https://reactnative.cn/docs/activityindicator/)

显示一个圆形的 `loading` 提示符号

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `animating`

  是否要显示指示器动画，默认为 `true` `表示显示，false` 则隐藏

* `color`

  滚轮的前景颜色（默认为灰色）

* `size`

  指示器的大小，默认为 `small`

  可选值范围：

  * `small`
  * `large`
  * 具体的 `number` 数值

  > 目前只能在 `Android` 上设定具体的数值

* `hidesWhenStopped`

  在 `animating` 为 `false` 的时候，是否要隐藏指示器（默认为 `true` ）

  > 如果 `animating` 和 `hidesWhenStopped` 都为 `false` ，则显示一个静止的指示器

## `Button`

[【 查看官方 `Button` 文档 】](https://reactnative.cn/docs/button/)

一个简单的跨平台的按钮组件，也可以进行一些简单的定制

![图片](https://reactnative.cn/docs/assets/buttonExample.png)

* 这个组件的样式是固定的

* 所以如果它的外观并不怎么搭配你的设计

* 那你需要使用以下组件之一来定制自己所需要的按钮：

  * `TouchableOpacity` 组件

  * 或是 `TouchableNativeFeedback` 组件

* 视频教程[【如何制作一个按钮】](http://v.youku.com/v_show/id_XMTQ5OTE3MjkzNg==.html?f=26822355&from=y1.7-1.3)讲述了完整的过程

  * 或者你也可以在 `github.com` 网站上搜索 `react native button` 来看看社区其他人的作品

示例：

```jsx
import { Button } from 'react-native';
...

<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
```

### 查看属性 `Props`

* `onPress`

  用户点击此按钮时所调用的处理函数

* `title`

  按钮内显示的文本

* `accessibilityLabel`

  用于给残障人士显示的文本（比如读屏应用可能会读取这一内容）

* `color`

  文本的颜色( `iOS` )

  或是按钮的背景色( `Android` )

* `disabled`

  设置为 `true` 时此按钮将不可点击，默认为 `false`

* `testID`

  用来在端到端测试中定位此视图

* `hasTVPreferredFocus`

  （仅限 `Apple TV` ）`TV` 首选焦点（有关视图组件，请参阅文档）

  > 仅限 `iOS` 平台

## `DatePickerIOS`

[【 查看官方 `DatePickerIOS` 文档 】](https://reactnative.cn/docs/datepickerios/)

> 使用 `DatePickerIOS` 来在 `iOS` 平台上渲染一个 **`日期/时间选择器`**

这是一个受约束的( `Controlled` )组件：

* 所以你必须监听 `onDateChange` 回调函数并且及时更新 `date` 属性来使得组件更新

* 否则用户的修改会立刻被撤销来确保当前显示值和 `props.date` 一致

示例：

```jsx
import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})
```

![图片](https://reactnative.cn/docs/assets/DatePickerIOS/example.gif)

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `date`

  当前被选中的日期

* `onDateChange`

  日期/时间变化的监听函数

  当用户修改日期或时间时调用此回调函数

  唯一的参数是一个日期对象，表示新的日期和时间

* `maximumDate`

  可选的最大日期

  限制可选的日期/时间范围

  最大日期设置为 `2017年12月31日` 的示例：

![图片](https://reactnative.cn/docs/assets/DatePickerIOS/maximumDate.gif)

* `minimumDate`

  可选的最小日期

  限制可选的日期/时间范围

* `minuteInterval`

  可选的最小的分钟单位

  可选值范围：`1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30`

  `MinuteInterval` 设置为 `10` 的示例：

![图片](https://reactnative.cn/docs/assets/DatePickerIOS/minuteInterval.png)

* `mode`

  选择器模式

  可选值范围：

  * `date`
  * `time`
  * `datetime`

  模式设置为 **`日期`** 、**`时间`** 和 **`日期时间`** 的示例：

![图片](https://reactnative.cn/docs/assets/DatePickerIOS/mode.png)

* `locale`

  日期选取器的区域设置

  值必须是区域设置 `ID`

* `timeZoneOffsetInMinutes`

  时区差，单位是分钟

  > 默认情况下，选择器会选择设备的默认时区
  >> 通过此参数，可以指定一个时区
  >>> 举个例子，要使用北京时间（东八区），可以传递 `8 * 60`

## `DrawerLayoutAndroid`

[【 查看官方 `DrawerLayoutAndroid` 文档 】](https://reactnative.cn/docs/drawerlayoutandroid/)

> 封装了 `Android` 平台 `DrawerLayout` 的 `React` 组件

抽屉（通常用于导航切换）是通过 `renderNavigationView` 方法渲染的

* 并且 `DrawerLayoutAndroid` 的直接子视图会成为主视图（用于放置内容）

导航视图一开始在屏幕上并不可见

* 不过可以从 `drawerPosition` 指定的窗口侧面拖拽出来

* 并且抽屉的宽度可以使用 `drawerWidth` 属性来指定

> 译注：此组件仅能在 `Android` 上使用
>> 我们推荐使用跨平台的 `react-navigation` 中的 `DrawerNavigation` 来代替此组件

示例：

```jsx
render: function() {
  var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      </View>
    </DrawerLayoutAndroid>
  );
},
```

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `renderNavigationView`

  被拉入的导航视图的内容

* `onDrawerClose`

  导航视图被关闭后的回调函数

* `drawerPosition`

  设置导航视图从屏幕的哪一边拉入

  可选值范围：

  * `DrawerConsts.DrawerPosition.Left`
  * `DrawerConsts.DrawerPosition.Right`

* `drawerWidth`

  设置导航视图从窗口边缘拉入的视图的宽度

* `keyboardDismissMode`

  设置拖动过程中是否隐藏软键盘

  可选值范围：

  * `none`

    (默认)拖动时不隐藏软键盘

  * `on-drag`

    拖动时隐藏软键盘

* `drawerLockMode`

  设置导航视图的锁定模式

  可选值范围：

  * `unlocked`

    (默认)不锁定，导航视图可以响应打开和关闭操作

  * `locked-closed`

    导航视图保持关闭，不能用手势打开

  * `locked-open`

    导航视图保持打开，不能用手势关闭，但仍然可以通过程序打开或关闭

    `openDrawer` / `closeDrawer`

* `onDrawerOpen`

  导航视图被打开后的回调函数

* `onDrawerSlide`

  导航视图发生交互时的回调函数

* `onDrawerStateChanged`

  导航视图的状态发生变化时的回调函数

  可选值范围：

  * `idle`

  导航视图没有发生任何交互

  * `dragging`

  导航视图正在发生交互

  * `settling`

  导航视图正在发生交互，并且导航视图正在完成其关闭或打开的动画

* `drawerBackgroundColor`

  设置导航视图的背景颜色

  > 默认值为白色

  如果你想设置导航视图的不透明度，请使用 `rgba` ，例如：

  ```
  return (
  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)">
  </DrawerLayoutAndroid>
  );
  ```

* `statusBarBackgroundColor`

  使抽屉占满整个屏幕，并设置状态栏颜色(支持 `API21+` / 安卓系统 `5.0` 以上)使导航视图占满整个屏幕，并设置状态栏背景，允许他在状态栏上打开

### 查看方法

* `openDrawer()`

  打开导航视图

* `closeDrawer()`

  关闭导航视图

## `FlatList`

[【 查看官方 `FlatList` 文档 】](https://reactnative.cn/docs/flatlist/)

高性能的简单列表组件，支持下面这些常用的功能：

* 完全跨平台
* 支持水平布局模式
* 行组件显示或隐藏时可配置回调事件
* 支持单独的头部组件
* 支持单独的尾部组件
* 支持自定义行间分隔线
* 支持下拉刷新
* 支持上拉加载
* 支持跳转到指定行（ `ScrollToIndex` ）

如果需要分组/类/区（ `section` ），请使用[【 `<SectionList>` 】](https://reactnative.cn/docs/sectionlist/)

一个最简单的例子：

```jsx
<FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>
```

下面是一个较复杂的例子：

* 其中演示了如何利用 `PureComponent` 来进一步优化性能和减少 `bug` 产生的可能

* 以下内容需要你深刻理解：

  * `shouldComponentUpdate` 的机制

  * `Component` 和 `PureComponent` 的不同

```jsx
class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class MultiSelectList extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
```

* 对于 `MyListItem` 组件来说

  * 其 `onPressItem` 属性使用箭头函数而非 `bind` 的方式进行绑定

  * 使其不会在每次列表重新 `render` 时生成一个新的函数

  * 从而保证了 `props` 的不变性

    * 当然前提是 `id` `selected` 和 `title` 也没变

  * 不会触发自身无谓的重新 `render`

  * 换句话说，如果你是用 `bind` 来绑定 `onPressItem`

    * 每次都会生成一个新的函数

    * 导致 `props` 在 `===` 比较时返回 `false`

    * 从而触发自身的一次不必要的重新 `render`

* 给 `FlatList` 指定 `extraData={this.state}` 属性

  * 是为了保证 `state.selected` 变化时，能够正确触发 `FlatList` 的更新

  * 如果不指定此属性，则 `FlatList` 不会触发更新

  * 因为它是一个 `PureComponent` ，其 `props` 在 `===` 比较中没有变化则不会触发更新

* `keyExtractor` 属性指定使用 `id` 作为列表每一项的 `key`

本组件实质是基于 `<VirtualizedList>` 组件的封装，继承了其所有 `props`

* 也包括所有 `<ScrollView>` 的 `props`，但在本文档中没有列出

此外还有下面这些需要注意的事项：

* 当某行滑出渲染区域之外后，其内部状态将不会保留

  * 请确保你在行组件以外的地方保留了数据

* 本组件继承自 `PureComponent` 而非通常的 `Component`

  * 这意味着如果其 `props` 在浅比较中是相等的，则不会重新渲染

  * 所以请先检查你的 `renderItem` 函数所依赖的 `props` 数据

    * 包括 `data` 属性以及可能用到的父组件的 `state`

  * 如果是一个引用类型

    * `Object` 或者数组都是引用类型

  * 则需要先修改其引用地址

    * 比如先复制到一个新的 `Object` 或者数组中

  * 然后再修改其值，否则界面很可能不会刷新

  > 译注：这一段不了解的朋友建议先学习下[【 `js` 中的基本类型和引用类型】](https://segmentfault.com/a/1190000002789651)

* 为了优化内存占用同时保持滑动的流畅，列表内容会在屏幕外异步绘制

  * 这意味着如果用户滑动的速度超过渲染的速度，则会先看到空白的内容

  * 这是为了优化不得不作出的妥协，你可以根据自己的需求调整相应的参数，而我们也在设法持续改进

* 默认情况下每行都需要提供一个不重复的 `key` 属性

  * 你也可以提供一个 `keyExtractor` 函数来生成 `key`

本组件如果嵌套在其他同滚动方向的 `FlatList` 中，则不会继承[【 `ScrollView` 的 `Props` 】](https://reactnative.cn/docs/scrollview#props)

### 查看属性 `Props`

* [【 `ScrollView props` 】](https://reactnative.cn/docs/scrollview#props)

  `ScrollView` 的属性

* [【 `VirtualizedList props` 】](https://reactnative.cn/docs/virtualizedlist#props)

  `VirtualizedList` 的属性

* `renderItem`

  从data中挨个取出数据并渲染到列表中

  ```jsx
  renderItem({ item: Object, index: number, separators: { highlight: Function, unhighlight: Function, updateProps: Function(select: string, newProps: Object) } }) => ?React.Element
  ```

  > 如果需要，提供其他元数据（如 **`索引`** ），以及更通用的 `separaters.updateprops` 函数
  >> 该函数允许您设置希望更改前导分隔符或尾随分隔符呈现的任何属性
  >>> 以防更常见的 **`突出显示`** 和 **`取消突出显示`** （设置突出显示：布尔属性）不足以满足您的使用需求

  示例：

  ```jsx
  <FlatList
    ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
      <View style={[style.separator, highlighted && {marginLeft: 0}]} />
    )}
    data={[{title: 'Title Text', key: 'item1'}]}
    renderItem={({item, separators}) => (
      <TouchableHighlight
        onPress={() => this._onPress(item)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>
        <View style={{backgroundColor: 'white'}}>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    )}
  />
  ```

* `data`

  为了简化起见，`data` 属性目前只支持普通数组

  如果需要使用其他特殊数据结构，例如 `immutable` 数组，请直接使用更底层的 `VirtualizedList` 组件

* `ItemSeparatorComponent`

  行与行之间的分隔线组件

  不会出现在第一行之前和最后一行之后

  > 默认情况下，提供 `highlighted` 和 `LeadingItem` 属性

  * `renderItem` 提供 `separators.highligh` / `unhighlight` ，它将更新 `highlighted` 的属性

  * 但也可以使用 `separaters.updateprops` 添加自定义属性

* `ListEmptyComponent`

  列表为空时渲染该组件

  可以是 `React Component` , 也可以是一个 `render` 函数，或者渲染好的 `element`

* `ListFooterComponent`

  尾部组件

  可以是 `React Component` , 也可以是一个 `render` 函数，或者渲染好的 `element`

* `ListHeaderComponent`

  头部组件

  可以是 `React Component` , 也可以是一个 `render` 函数，或者渲染好的 `element`

* `columnWrapperStyle`

  如果设置了多列布局

  即将 `numColumns` 值设为大于 `1` 的整数

  则可以额外指定此样式作用在每行容器上

* `extraData`

  如果有除 `data` 以外的数据用在列表中（不论是用在renderItem还是头部或者尾部组件中），请在此属性中指定

  同时此数据在修改时也需要先修改其引用地址（比如先复制到一个新的 Object 或者数组中），然后再修改其值，否则界面很可能不会刷新

* `getItemLayout`

  ```jsx
  (data, index) => {length: number, offset: number, index: number}
  ```

  `getItemLayout` 是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度

  如果你的行高是固定的，`getItemLayout` 用起来就既高效又简单，类似下面这样：

  ```jsx
  getItemLayout={(data, index) => (
    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  )}
  ```

  对于元素较多的列表（几百行）来说，添加 `getItemLayout` 可以极大地提高性能

  > 注意：如果你指定了 `ItemSeparatorComponent` ，请把分隔线的尺寸也考虑到 `offset` 的计算之中

* `horizontal`

  设置为 `true` 则变为水平布局模式

* `initialNumToRender`

  指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容

  > 注意：这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素

* `initialScrollIndex`

  开始时屏幕顶端的元素是列表中的第 `initialScrollIndex` 个元素, 而不是第一个元素

  如果设置了这个属性，则第一批 `initialNumToRender` 范围内的元素不会再保留在内存里，而是直接立刻渲染位于 `initialScrollIndex` 位置的元素

  需要先设置 `getItemLayout` 属性

* `inverted`

  翻转滚动方向

  实质是将 `scale` 变换设置为 `-1`

* `keyExtractor`

  ```jsx
  (item: object, index: number) => string;
  ```

  此函数用于为给定的 `item` 生成一个不重复的 `key`

  `Key` 的作用是使 `React` 能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销

  > 若不指定此函数，则默认抽取 `item.key` 作为 `key` 值
  >> 若 `item.key` 也不存在，则使用数组下标


* `numColumns`

  多列布局只能在非水平模式下使用，即必须是 `horizontal={false}`

  此时组件内元素会从左到右从上到下按 `Z` 字形排列，类似启用了 `flexWrap` 的布局

  > 组件内元素必须是等高的
  >> 暂时还无法支持瀑布流布局

* `onEndReached`

  ```
  (info: {distanceFromEnd: number}) => void
  ```

  当列表被滚动到距离内容最底部不足 `onEndReachedThreshold` 的距离时调用

* `onEndReachedThreshold`

  决定当距离内容最底部还有多远时触发 `onEndReached` 回调

  > 注意：此参数是一个比值而非像素单位
  >> 比如，`0.5` 表示距离内容最底部的距离为当前列表可见长度的一半时触发

* `onRefresh`

  ```jsx
  () => void
  ```

  如果设置了此选项，则会在列表头部添加一个标准的 `RefreshControl` 控件，以便实现 **`下拉刷新`** 的功能

  同时你需要正确设置 `refreshing` 属性

* `onViewableItemsChanged`

  ```jsx
  (info: {
      viewableItems: array,
      changed: array,
    }) => void
  ```

  在可见行元素变化时调用

  可见范围和变化频率等参数的配置请设置 `viewabilityConfig` 属性

* `progressViewOffset`

  当需要在指定的偏移处显示加载指示器的时候，就可以设置这个值

* `legacyImplementation`

  可能没有完整的功能奇偶校验，用于调试和性能比较

* `refreshing`

  在等待加载新数据时将此属性设为 `true` ，列表就会显示出一个正在加载的符号

* `removeClippedSubviews`

  对于大列表启用本属性可能可以提高性能

  > 注意：有些情况下会有 `bug`
  >> 比如内容无法显示
  >>> 请谨慎使用

* `viewabilityConfig`

  请参考 `ViewabilityHelper.js` 的源码来了解具体的配置

  `viewabilityConfig` 采用 `viewabilityConfig` 类型，为具有以下属性的对象配置 `viewabilityConfig`

  属性|必填|类型
  -|-|-
  minimumViewTime|否|数值
  viewAreaCoveragePercentThreshold|否|数值
  itemVisiblePercentThreshold|否|数值
  waitForInteraction|否|布尔

  至少需要一个 `ViewAreaCoveragePercentThreshold` 或 `ItemVisiblePercentThreshold`

  这需要在构造函数中完成，以避免以下错误（[【 `ref` 】](https://github.com/facebook/react-native/issues/17408)）：

  ```jsx
  Error: Changing viewabilityConfig on the fly is not supported`
  ```

  ```jsx
  constructor (props) {
    super(props)

    this.viewabilityConfig = {
        waitForInteraction: true,
        viewAreaCoveragePercentThreshold: 95
    }
  }
  ```

  ```jsx
  <FlatList
    viewabilityConfig={this.viewabilityConfig}
  ...
  ```

  * `minimumViewTime`

  在激活可视性回调之前，必须对项进行物理可视的最短时间（毫秒）

  高数字意味着不停止滚动内容不会将内容标记为可查看

  * `viewAreaCoveragePercentThreshold`

  部分被遮挡项目必须覆盖的视区百分比，计为 **`可视`** ，`0-100`

  完全可见的项目总是被认为是可视的

  值为 `0` 表示视区中的单个像素使项目可见，值为 `100` 意味着一个项目必须是完全可见的，或者覆盖整个视区才能算是可见的

  * `itemVisiblePercentThreshold`

  类似于 `viewAreaPercentThreshold` ，但考虑的是可见项的百分比，而不是它所覆盖的可视区域的分数

  * `waitForInteraction`

  在用户滚动或在呈现后调用 `recordInteraction` 之前，不认为任何内容是可查看的

* `viewabilityConfigCallbackPairs`

  **`可查看性配置`** / **`可查看项已更改`** 对的列表

  当满足相应的 `ViewabilityConfig` 条件时，将调用特定的 `onViewableItemsChanged`

  请参考[【 `ViewabilityHelper.js` 】](https://github.com/facebook/react-native/blob/master/Libraries/Lists/ViewabilityHelper.js)的源码来了解具体的配置

### 查看方法

* `scrollToEnd()`

  ```jsx
  scrollToEnd([params]);
  ```

  滚动到底部

  如果不设置 `getItemLayout` 属性的话，可能会比较卡

  `params` 可选的属性及值：

  * `animated`

    值为 `boolean` 类型

    滚动时列表是否应进行动画，默认为 `true`

* `scrollToIndex()`

  ```jsx
  scrollToIndex(params);
  ```

  将位于指定位置的元素滚动到可视区的指定位置：

  * 当 `viewPosition` 为 `0` 时将它滚动到屏幕顶部

  * 为 `1` 时将它滚动到屏幕底部

  * 为 `0.5` 时将它滚动到屏幕中央

  > 注意：如果不设置 `getItemLayout` 属性的话，无法跳转到当前渲染区域以外的位置

  `params` 可选的参数：

  * `animated`

    值为 `boolean` 类型

    滚动时列表是否应进行动画，默认为 `true`

  * `index`

    值为 `number` 类型

    要滚动到的索引，必填项

  * `viewOffset`

    值为 `number` 类型

    用于偏移最终目标位置的固定像素数，必填项

  * `viewPosition`

    值为 `number` 类型

    值 `0` 将索引指定的项放在顶部，`1` 放在底部，`0.5` 放在中间

* `scrollToItem()`

  ```jsx
  scrollToItem(params);
  ```

  这个方法会顺序遍历元素

  > 尽可能使用 `scrollToIndex` 代替
  >> 注意：如果不设置 `getItemLayout` 属性的话，无法跳转到当前渲染区域以外的位置

  `params` 可选的参数：

  * `animated`

    值为 `boolean` 类型

    滚动时列表是否应进行动画，默认为 `true`

  * `item`

    值为 `object` 类型

    要滚动到的项目，必填项

  * `viewPosition`

    值为 `number` 类型

    值 `0` 将索引指定的项放在顶部，`1` 放在底部，`0.5` 放在中间

* `scrollToOffset()`

  ```jsx
  scrollToOffset(params);
  ```

  滚动列表到指定的偏移（以像素为单位），等同于 `ScrollView` 的 `scrollTo` 方法

  `params` 可选的参数：

  * `offset`

    值为 `number` 类型

    滚动到的偏移量

    * 如果 `horizontal` 为真，则偏移量为 `x-value`

    * 在任何其他情况下，偏移量为 `y-value` ，必填项

  * `animated`

    值为 `boolean` 类型

    滚动时列表是否应进行动画，默认为 `true`

* `recordInteraction()`

  ```jsx
  recordInteraction();
  ```

  主动通知列表发生了一个事件，以使列表重新计算可视区域

  * 比如说当 `waitForInteractions` 为 `true` 并且用户没有滚动列表时

  * 一般在用户点击了列表项或发生了导航动作时调用

* `flashScrollIndicators`

  ```jsx
  flashScrollIndicators();
  ```

  短暂地显示滚动指示器

## `Image`

[【 查看官方 `Image` 文档 】](https://reactnative.cn/docs/image/)

> 用于显示多种不同类型图片的 `React` 组件，包括网络图片、静态资源、临时的本地图片、以及本地磁盘上的图片（如相册）等

下面的例子分别演示了如何显示从本地缓存、网络甚至是以 `data:` 的 `base64 uri` 形式提供的图片：

> 请注意：对于网络和 `base64` 数据的图片需要手动指定尺寸！

```jsx
import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

export default class DisplayAnImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('/react-native/img/favicon.png')}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
      </View>
    );
  }
}
```

你可以给图片添加 `style` 属性：

```jsx
import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200
  }
});

export default class DisplayAnImageWithStyle extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.stretch}
          source={require('/react-native/img/favicon.png')}
        />
      </View>
    );
  }
}
```

### 在 `Android` 上支持 `GIF` 和 `WebP` 格式图片

> 默认情况下 `Android` 是不支持 `GIF` 和 `WebP` 格式的

你需要在 `android/app/build.gradle` 文件中根据需要手动添加以下模块：

```jsx
dependencies {
  // 如果你需要支持Android4.0(API level 14)之前的版本
  compile 'com.facebook.fresco:animated-base-support:1.10.0'

  // 如果你需要支持GIF动图
  compile 'com.facebook.fresco:animated-gif:1.10.0'

  // 如果你需要支持WebP格式，包括WebP动图
  compile 'com.facebook.fresco:animated-webp:1.10.0'
  compile 'com.facebook.fresco:webpsupport:1.10.0'

  // 如果只需要支持WebP格式而不需要动图
  compile 'com.facebook.fresco:webpsupport:1.10.0'
}
```

### 查看属性 `Props`

* `style`

  * [【布局属性】](https://reactnative.cn/docs/layout-props#props)

    页面布局时的属性

  * [【阴影属性】](https://reactnative.cn/docs/shadow-props#props)

    页面布局时的阴影样式属性

  * [【动画变换 `Transforms` 】](https://reactnative.cn/docs/transforms#props)

    `Transforms` 的属性

  * `borderTopRightRadius: number`

  * `backfaceVisibility: enum('visible', 'hidden')`

  * `borderBottomLeftRadius: number`

  * `borderBottomRightRadius: number`

  * `borderColor`: [【 `color` 】](https://reactnative.cn/docs/colors)

  * `borderRadius: number`

  * `borderTopLeftRadius: number`

  * `backgroundColor: color`

  * `borderWidth: number`

  * `opacity: number`

  * `overflow: enum('visible', 'hidden')`

  * `resizeMode: Object.keys(ImageResizeMode)`

  * `tintColor`: [【 `color` 】](https://reactnative.cn/docs/colors)

    为所有非透明的像素指定一个颜色

  * `overlayColor: string (Android)`

    当图片有圆角的时候，指定一个颜色用于填充圆角处的空白

    虽然一般情况下圆角处是透明的，但在某些情况下，Android 并不支持圆角透明，比如：

    * 某些 `resize` 模式比如 `contain`
    * `GIF` 动画

    常见的用法就是在不能圆角透明时，设置 `overlayColor` 和背景色一致

    [【详细说明可点击前往进行参考】](http://frescolib.org/rounded-corners-and-circles.md)

* `blurRadius`

  模糊半径：为图片添加一个指定半径的模糊滤镜

* `onLayout`

  当元素加载或者布局改变的时候调用

  参数为 `{nativeEvent: {layout: {x, y, width, height}}}`

* `onLoad`

  加载成功完成时调用此回调函数

* `onLoadEnd`

  加载结束后，不论成功还是失败，调用此回调函数

* `onLoadStart`

  加载开始时调用

  示例：`onLoadStart={(e) => this.setState({loading: true})}`

* `resizeMode`

  决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小：

  * `cover`

    在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸

    * 如果容器有 `padding` 内衬的话，则相应减去

    > 译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白
    >> 但图片很可能只展示了部分内容

  * `contain`

    在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸

    * 如果容器有 `padding` 内衬的话，则相应减去

    > 译注：这样图片完全被包裹在容器中，容器中可能留有空白

  * `stretch`

    拉伸图片且不维持宽高比，直到宽高都刚好填满容器

  * `repeat`

    重复平铺图片直到填满容器

    > 图片会维持原始尺寸，但是当尺寸超过容器时会在保持宽高比的前提下缩放到能被容器包裹

  * `center`

    居中不拉伸

* `source`

  图片源数据（远程 URL 地址或本地数据）

  * 此属性还可以包含多个远程 `URL` ，与它们的宽度和高度一起指定，并且可能与 `scale/other uri` 参数一起指定

  * 然后，`React Native` 将根据图像容器的测量大小选择要显示的最佳 `uri`

  * 可以添加一个缓存属性来控制网络请求与本地缓存的交互方式

  目前原生支持的图片格式有：

  * `png`
  * `jpg`
  * `jpeg`
  * `bmp`
  * `gif`
  * `webp` (仅 `Android` )
  * `psd` (仅 `iOS` )

* `loadingIndicatorSource`

  类似于 `source` ，表示在真正图片在加载过程中所显示的图片，在加载网络图片的场景下特别有用

  > 可以接受由 `require('./image.jpg')` 返回的数字

* `onError`

  当加载错误的时候调用此回调函数

  参数为 `{nativeEvent: {error}}`

* `testID`

  一个唯一的资源标识符，用来在自动测试脚本中标识这个元素

* `resizeMethod`

  当图片实际尺寸和容器样式尺寸不一致时，决定以怎样的策略来调整图片的尺寸

  > 默认为 `auto`

  * `auto`

    使用启发式算法来在 `resize` 和 `scale` 中自动决定

  * `resize`

    在图片解码之前，使用软件算法对其在内存中的数据进行修改

    当图片尺寸比容器尺寸大得多时，应该优先使用此选项

  * `scale`

    对图片进行缩放

    和 `resize` 相比，`scale` 速度更快（一般有硬件加速），而且图片质量更优

    在图片尺寸比容器尺寸小或者只是稍大一点时，应该优先使用此选项

  [【关于 `resize` 和 `scale` 的详细说明】](http://frescolib.org/docs/resizing.html)

* `accessibilityLabel`

  设置一段文字

  当用户与图片交互时，读屏器（无障碍功能）会朗读你所设置的这段文字

* `accessible`

  当此属性为 `true` 时，表示此图片是一个启用了无障碍功能的元素

* `capInsets`

  当图片被缩放的时候，`capInsets` 指定的角上的尺寸会被固定而不进行缩放，而中间和边上其他的部分则会被拉伸

  这在制作一些可变大小的圆角按钮、阴影、以及其它资源的时候非常有用

  > 译注：这就是常说的九宫格或者 `.9` 图
  >> 了解更多信息，可以参见[【苹果官方文档】](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/index.html#//apple_ref/occ/instm/UIImage/resizableImageWithCapInsets)

* `defaultSource`

  在读取图片时默认显示的图片

  如果传递的是对象，一般的结构会是这样 `{uri: string, width: number, height: number, scale: number}`

  * `uri`

    是一个表示图片的资源标识的字符串，它可以是：

    * 一个本地文件路径

    * 或是一个静态资源引用

      使用 `require(相对路径)` 来引用

  * `width, height`

    如果你知道图片的尺寸，那么可以在这里指定

    这一尺寸会被用作 `<Image/>` 组件的默认尺寸

  * `scale`

    图片的缩放系数

    > 默认是 `1.0` ，意味着每一个图片像素都对应一个设备独立像素（ `DIP` ）

  * `number`

    静态图片引用语法 `require('./image.jpg')` 所返回的资源 `id`

  > 注意： 在 `Android` 的 `debug` 版本上本属性不会生效（但在 `release` 版本中会生效）

* `onPartialLoad`

  如果图片本身支持逐步加载，则逐步加载的过程中会调用此方法

  > `逐步加载` 的具体定义与具体的标准和实现有关

* `onProgress`

  在加载过程中不断调用

  参数为 `{nativeEvent: {loaded, total}}`

* `fadeDuration`

  > 仅 `Android` 可用

  发声持续时间

  > 默认为300毫秒

* `progressiveRenderingEnabled`

  渐进式渲染

  如果为真，则启用渐进式 `jpeg` 流

  > 仅 `Android` 可用

### 查看方法

* `getSize()`

  ```jsx
  Image.getSize(uri, success, [failure]);
  ```

  在显示图片前获取图片的宽高(以像素为单位)

  > 如果图片地址不正确或下载失败,此方法也会失败

  * 要获取图片的尺寸,首先需要加载或下载图片(同时会被缓存起来)

  * 这意味着理论上你可以用这个方法来预加载图片

  * 虽然此方法并没有针对这一用法进行优化，而且将来可能会换一些实现方案使得并不需要完整下载图片即可获取尺寸

  * 所以更好的预加载方案是使用下面那个专门的预加载方法

  > 此方法不能用于静态图片资源

  参数：

  名称|类型|必填|说明
  -|-|-|-
  uri|string|是|图片地址
  success|function|是|成功的回调函数，返回图片宽高数据
  failure|function|否|失败的回调函数

* `getSizeWithHeaders()`

  ```jsx
  Image.getSizeWithHeaders(uri, headers, success, [failure]);
  ```

  在显示图像之前检索图像的宽度和高度（以像素为单位），以便为请求提供标题

  > 如果找不到图像或无法下载，此方法可能会失败

  为了检索图像维度，可能首先需要加载或下载图像，然后将其缓存

  * 这意味着，原则上，您可以使用此方法来预加载图像

  * 但它并没有为此目的进行优化，将来可能会以 **`不完全加载 / 下载`** 图像数据的方式实现

  > 一个适当的，支持的预加载图像的方法将作为一个单独的 `API` 提供
  >> 此方法不适用于静态图像资源

  参数：

  名称|类型|必填|说明
  -|-|-|-
  uri|string|是|图片地址
  headers|object|是|请求的头部
  success|function|是|成功的回调函数，返回图片宽高数据
  failure|function|否|失败的回调函数

* `prefetch()`

  ```jsx
  Image.prefetch(url);
  ```

  预加载一个远程图片(将其下载到本地磁盘缓存)

  参数：

  名称|类型|必填|说明
  -|-|-|-
  uri|string|是|图片地址

* `abortPrefetch()`

  > 仅 `Android` 可用

  ```jsx
  Image.abortPrefetch(requestId);
  ```

  中断预加载操作

  参数：

  名称|类型|必填|说明
  -|-|-|-
  requestId|number|是|图片地址 prefetch() 返回的 id

* `queryCache()`

  ```jsx
  Image.queryCache(urls);
  ```

  查询图片缓存状态

  根据图片 `URL` 地址返回缓存状态：

  * 比如 `disk` （缓存在磁盘文件中）

  * 或是 `memory` （缓存在内存中）

  参数：

  名称|类型|必填|说明
  -|-|-|-
  urls|array|是|要查询缓存状态的图片 URL 数组

* `resolveAssetSource()`

  ```jsx
  Image.resolveAssetSource(source);
  ```

  将资源引用解析为具有属性 `uri` `width` 和 `height`

  参数：

  名称|类型|必填|说明
  -|-|-|-
  source|number, object|是|静态图片引用语法 require('./image.jpg') 所返回的资源 id 或是一个 ImageSource

  > `ImageSource` 是一个对象，其结构为 `{ uri: '<http location || file path>' }`

## `ImageBackground`

[【 查看官方 `ImageBackground` 文档 】](https://reactnative.cn/docs/imagebackground/)

> 熟悉 `Web` 的开发人员的一个常见功能请求是`background-image`

要处理此用例，您可以使用与 `<image>` 具有相同属性的 `<imagebackground>` 组件，并向其添加要在其上分层的任何子级

* 在某些情况下，您可能不想使用 `<imagebackground>` ，因为实现非常简单

* 有关详细信息，请参阅[【 `<imagebackground>` 的源代码】](https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js)，并在需要时创建自己的自定义组件

* 请注意，必须指定一些宽度和高度样式属性

示例：

```jsx
return (
  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
);
```

### 查看属性 `Props`

* [【 `Image props` 】](https://reactnative.cn/docs/image#props)

  `Image` 的属性

* `style`

  [【视图样式】](https://reactnative.cn/docs/view-style-props)

* `imageStyle`

  [【图片样式】](https://reactnative.cn/docs/image-style-props)

* `imageRef`

  允许设置对内部 `Image` 组件的引用

  [【参考资料：`Refs and the DOM` 】](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#___gatsby)

## `KeyboardAvoidingView`

[【 查看官方 `KeyboardAvoidingView` 文档 】](https://reactnative.cn/docs/keyboardavoidingview/)

> 本组件用于解决一个常见的尴尬问题：手机上弹出的键盘常常会挡住当前的视图

本组件可以自动根据键盘的位置，调整自身的 `position` 或底部的 `padding` ，以避免被遮挡，用法：

```jsx
import { KeyboardAvoidingView } from 'react-native';

<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
  ... 在这里放置需要根据键盘调整位置的组件 ...
</KeyboardAvoidingView>
```

![图片](https://reactnative.cn/docs/assets/KeyboardAvoidingView/example.gif)

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `keyboardVerticalOffset`

  有时候应用离屏幕顶部还有一些距离（比如状态栏等等），利用此属性来补偿修正这段距离

* `behavior`

  > 注意：`Android` 和 `iOS` 在此属性上表现并不一致
  >> `Android` 可能不指定此属性更好，而 `iOS` 可能相反

* `contentContainerStyle`

  如果设定 `behavior` 值为 `position` ，则会生成一个 `View` 作为内容容器

  此属性用于指定此内容容器的样式

* `enabled`

  是否启用 `KeyboardAvoidingView`

  > 默认为 `true`

## `MaskedViewIOS`

[【 查看官方 `MaskedViewIOS` 文档 】](https://reactnative.cn/docs/maskedviewios/)

渲染一个带蒙版的视图，蒙版元素在 `maskElement` 这个 `prop` 中指定

```jsx
import React from 'react';
import { MaskedViewIOS, Text, View } from 'react-native';

class MyMaskedView extends React.Component {
  render() {
    return (
      // 决定蒙版的形状
      <MaskedViewIOS
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View style={{
            // 蒙版的效果与其本身透明度相反。先设置整个背景透明，表示完全盖住蒙版底下的元素，不显示出来。
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 60,
              // 文字不透明，表示文字部分盖住的元素会显示出来。
              color: 'black',
              fontWeight: 'bold',
            }}>
              Basic Mask
            </Text>
          </View>
        }
      >
        { /* 被盖在蒙版之下的元素。可以放置任意元素，例如图片等。 */ }
        <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
      </MaskedViewIOS>
    );
  }
}
```

下面的截图分别演示了把以下组件放在蒙版下的效果

* `<View>`
* `<Text>`
* `<Image>`

> 基本上你可以把任何组件放在蒙版下

![图片](https://reactnative.cn/docs/assets/MaskedViewIOS/example.png)

由 `maskElement` 所指定的视图的 `alpha` 通道值（透明度）决定了被盖住的视图可以透出的程度

* 完全不透明或部分透明的像素会使得蒙版下的内容显示出来

* 而完全透明的像素则会盖住蒙版下的内容

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `maskElement`

  掩蔽元素

## `Modal`

[【 查看官方 `Modal` 文档 】](https://reactnative.cn/docs/modal/)

`Modal` 组件是一种简单的覆盖在其他视图之上显示内容的方式

```jsx
import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View } from "react-native";

class ModalExample extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
```

### 查看属性 `Props`

* `visible`

  决定 `modal` 是否显示

* `supportedOrientations`

  用于指定在设备切换横竖屏方向时，`modal` 会在哪些屏幕朝向下跟随旋转

  * 在 `iOS` 上，除了本属性外，还会受到应用的 `Info.plist` 文件中 `UISupportedInterfaceOrientations` 的限制

  * 如果还设置了 `presentationStyle` 属性为 `pageSheet` 或 `formSheet` ，则在 `iOS` 上本属性将被忽略

* `onRequestClose`

  回调函数，会在用户按下 `Android` 设备上的后退按键或是 `Apple TV` 上的菜单键时触发

  > 请务必注意本属性在 `Android` 平台上为必填
  >> 且会在 `modal` 处于开启状态时阻止 `BackHandler` 事件

* `onShow`

  回调函数，会在 `modal` 显示时调用

* `transparent`

  是指背景是否透明

  > 默认为白色
  >> 将这个属性设为 `true` 的时候弹出一个透明背景层的 `modal`

* `animationType`

  指定了 `modal` 的动画类型：

  * `slide`

    从底部滑入滑出

  * `fade`

    淡入淡出

  * `none`

    没有动画，直接蹦出来

  > 默认值为 `none`

* `hardwareAccelerated`

  > 仅 `Android` 可用

  决定是否强制启用硬件加速来绘制弹出层

* `onDismiss`

  > 仅 `iOS` 可用

  回调函数，会在 `modal` 被关闭时调用

* `onOrientationChange`

  > 仅 `iOS` 可用

  回调函数，模态窗显示的时候，当设备方向发生更改时调用

  > 提供的设备方向仅为 **`竖屏`** 或 **`横屏`**
  >> 无论当前方向如何，也会在初始渲染时调用此回调方法

* `presentationStyle`

  > 仅 `iOS` 可用

  决定 `modal`（在较大屏幕的设备比如 `iPad` 或是 `Plus` 机型）如何展现

  * `fullScreen`

    完全盖满屏幕

  * `pageSheet`

    竖直方向几乎盖满，水平居中，左右留出一定空白（仅用于大屏设备）

  * `formSheet`

    竖直和水平都居中，四周都留出一定空白（仅用于大屏设备）

  * `overFullScreen`

    完全盖满屏幕，同时允许透明

  > 默认会根据 `transparent` 属性而设置为：
  > * `overFullScreen`
  > * 或是 `fullScreen`

  [【更多细节请参阅】](https://developer.apple.com/reference/uikit/uimodalpresentationstyle)

* `animated`

  > 官方文档中并未进行说明，请自行了解

## `Picker`

[【 查看官方 `Picker` 文档 】](https://reactnative.cn/docs/picker/)

> 本组件可以在 `iOS` 和 `Android` 上渲染原生的选择器

用例：

```jsx
<Picker
  selectedValue={this.state.language}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
```

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `onValueChange`

  某一项被选中时执行此回调

  调用时带有如下参数：

  * `itemValue`

    被选中项的 `value` 属性

  * `itemPosition`

    被选中项在 `picker` 中的索引位置

* `selectedValue`

  默认选中的值，可以是字符串或整数

* `style`

  样式属性

* `testID`

  用于在端对端测试中定位此视图

* `enabled`

  > 仅 `Android` 可用

  如果设为 `false` ，则会禁用此选择器

* `mode`

  > 仅 `Android` 可用

  在 `Android` 上，可以指定在用户点击选择器时，以怎样的形式呈现选项：

  * `dialog`

    显示一个模态对话框

    > 默认选项

  * `dropdown`

    以选择器所在位置为锚点展开一个下拉框

* `prompt`

  > 仅 `Android` 可用

  设置选择器的提示字符串

  在 `Android` 的对话框模式中用作对话框的标题

* `itemStyle`

  > 仅 `iOS` 可用

  指定应用在每项标签上的样式

## `PickerIOS`

[【 查看官方 `PickerIOS` 文档 】](https://reactnative.cn/docs/pickerios/)

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `itemStyle`

  `Text` 样式属性

* `onValueChange`

* `selectedValue`

## `ProgressBarAndroid`

[【 查看官方 `ProgressBarAndroid` 文档 】](https://reactnative.cn/docs/progressbarandroid/)

封装了 `Android` 平台上的 `ProgressBar` 的 `React` 组件

* 这个组件可以用来表示应用正在加载或者有些事情正在进行中

例子：

```jsx
import React, { Component } from "react";
import {
  ProgressBarAndroid,
  AppRegistry,
  StyleSheet,
  View
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10
  }
});
```

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `animating`

  是否显示进度条

  > 默认为 `true` 显示

* `color`

  进度条的颜色

* `indeterminate`

  决定进度条是否要显示一个不确定的进度

  > 注意这个在 `styleAttr` 是 `Horizontal` 的时候必须是 `false`

* `progress`

  当前的进度值（在 `0` 到 `1` 之间）

* `styleAttr`

  进度条的样式，可取值有：

  * `Horizontal`
  * `Normal`
  * `Small`
  * `Large`
  * `Inverse`
  * `SmallInverse`
  * `LargeInverse`

  > 默认值为 `Normal`

* `testID`

  用来在端到端测试中定位这个视图

## `ProgressViewIOS`

[【 查看官方 `ProgressViewIOS` 文档 】](https://reactnative.cn/docs/progressviewios/)

使用 `ProgressViewIOS` 来在 `iOS` 上渲染一个 `UIProgressView`

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `progress`

  当前的进度值（ `0` 到 `1` 之间）

* `progressImage`

  一个可以拉伸的图片，用于显示进度条

* `progressTintColor`

  进度条本身染上的颜色

* `progressViewStyle`

  进度条的样式

* `trackImage`

  一个可拉伸的图片，用于显示进度条后面的轨道

* `trackTintColor`

  进度条轨道染上的颜色

## `RefreshControl`

[【 查看官方 `RefreshControl` 文档 】](https://reactnative.cn/docs/refreshcontrol/)

这一组件可以用在 `ScrollView` 或 `FlatList` 内部，为其添加下拉刷新的功能

* 当 `ScrollView` 处于竖直方向的起点位置（ `scrollY: 0` ），此时下拉会触发一个 `onRefresh` 事件

```jsx
class RefreshableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        ...
      />
    );
  }
  ...
}
```

> 注意：`refreshing` 是一个受控属性
>> 所以必须在 `onRefresh` 函数中设置为 `true` ，否则 `loading` 指示器会立即停止

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `refreshing`

  视图是否应该在刷新时显示指示器

* `onRefresh`

  在视图开始刷新时调用

* `colors`

  > 仅 `Android` 可用

  指定至少一种颜色用来绘制刷新指示器

* `enabled`

  > 仅 `Android` 可用

  指定是否要启用刷新指示器

* `progressBackgroundColor`

  > 仅 `Android` 可用

  指定刷新指示器的背景色

* `progressViewOffset`

  > 仅 `Android` 可用

  指定刷新指示器的垂直起始位置( `top offset` )

* `size`

  > 仅 `Android` 可用

  指定刷新指示器的大小，具体数值可参阅 `RefreshControl.SIZE`

* `tintColor`

  > 仅 `iOS` 可用

  指定刷新指示器的颜色

* `title`

  > 仅 `iOS` 可用

  指定刷新指示器下显示的文字

* `titleColor`

  > 仅 `iOS` 可用

  指定刷新指示器下显示的文字的颜色

## `SafeAreaView`

[【 查看官方 `SafeAreaView` 文档 】](https://reactnative.cn/docs/safeareaview/)

> 本组件目前仅支持 `iOS` 设备以及 `iOS 11` 或更高版本

`SafeAreaView` 的目的是在一个 **`安全`** 的可视区域内渲染内容

* 具体来说就是因为目前有 `iPhone X` 这样的带有 **`刘海`** 的全面屏设备，所以需要避免内容渲染到不可见的“刘海”范围内

* `SafeAreaView` 会自动根据系统的各种导航栏、工具栏等预留出空间来渲染内部内容

* 只需简单地把你原有的视图用 `SafeAreaView` 包起来，同时设置一个 `flex:1` 的样式

  * 当然可能还需要一些和你的设计相匹配的背景色

```jsx
<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
  <View style={{ flex: 1 }}>
    <Text>Hello World!</Text>
  </View>
</SafeAreaView>
```

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

## `ScrollView`

[【 查看官方 `ScrollView` 文档 】](https://reactnative.cn/docs/scrollview/)

一个封装了平台的 `ScrollView`（滚动视图）的组件，同时还集成了触摸锁定的 **`响应者`** 系统

> 注意：`ScrollView` 必须有一个确定的高度才能正常工作
>> 因为它实际上所做的就是将一系列不确定高度的子组件装进一个确定高度的容器（通过滚动操作）

要给 `ScrollView` 一个确定的高度的话，要么直接给它设置高度（不建议），要么确定所有的父容器都有确定的高度

* 一般来说我们会给 `ScrollView` 设置 `flex:1` 以使其自动填充父容器的空余空间

* 但前提条件是所有的父容器本身也设置了 `flex` 或者指定了高度，否则就会导致无法正常滚动

* 你可以使用元素查看器来查找具体哪一层高度不正确

> `ScrollView` 内部的其他响应者尚无法阻止 `ScrollView` 本身成为响应者

`ScrollView` 和 `FlatList` 应该如何选择？

* `ScrollView` 会简单粗暴地把所有子元素一次性全部渲染出来

  * 其原理浅显易懂，使用上自然也最简单

  * 然而这样简单的渲染逻辑自然带来了性能上的不足

  * 想象一下你有一个特别长的列表需要显示，可能有好几屏的高度

  * 创建和渲染那些屏幕以外的JS组件和原生视图，显然对于渲染性能和内存占用都是一种极大的拖累和浪费

* `FlatList` 会惰性渲染子元素，只在它们将要出现在屏幕中时开始渲染

  * 这种惰性渲染逻辑要复杂很多，因而 `API` 在使用上也更为繁琐

> 除非你要渲染的数据特别少，否则你都应该尽量使用 `FlatList` ，哪怕它们用起来更麻烦
>> 此外FlatList还可以方便地渲染行间分隔线，支持多列布局，无限滚动加载等等

### 查看属性 `Props`

* [【 `View props` 】](https://reactnative.cn/docs/view/#props)

  `View` 的属性

* `alwaysBounceVertical`

  > 仅 `iOS` 可用

  当此属性为 `true` 时，垂直方向即使内容比滚动视图本身还要小，也可以弹性地拉动一截

  > 当 `horizontal={true}` 时默认值为 `false` ，否则为 `true`

* `contentContainerStyle`

  这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内

  ```jsx
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
    </ScrollView>
  );
  ...
  const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 20
    }
  });
  ```

* `disableScrollViewPanResponder`

  如果为 `true` ，则禁用 `ScrollView` 上的默认 `JS` 响应程序，并将对 `ScrollView` 内部触摸的完全控制权留给其子组件

  如果启用了 `SnapToInterval` ，这尤其有用，因为它不遵循典型的触摸模式

  不要在没有 `SnapToInterval` 的常规 `ScrollView` 用例上使用此选项，因为它可能会导致在滚动时发生意外的触摸

  > 默认值为 `false`

* `keyboardDismissMode`

  用户拖拽滚动视图的时候，是否要隐藏软键盘

  * 跨平台可用的值:

    * `none`

      默认值，拖拽时不隐藏软键盘

    * `on-drag`

      当拖拽开始的时候隐藏软键盘

  * 仅 `iOS` 可用的值

    * `interactive`

      软键盘伴随拖拽操作同步地消失，并且如果往上滑动会恢复键盘

    > 安卓设备上不支持这个选项，会表现的和 `none` 一样

* `keyboardShouldPersistTaps`

  如果当前界面有软键盘，那么点击 `scrollview` 后是否收起键盘，取决于本属性的设置

  > 译注：很多人反应 `TextInput` 无法自动失去焦点，或需要点击多次切换到其他组件等等问题
  >> 其关键都是需要将 `TextInput` 放到 `ScrollView` 中再设置本属性

  * `never`

    默认值，点击 `TextInput` 以外的子组件会使当前的软键盘收起

    此时子元素不会收到点击事件

  * `always`

    键盘不会自动收起，`ScrollView` 也不会捕捉点击事件，但子组件可以捕获

  * `handled`

    当点击事件被子组件捕获时，键盘不会自动收起

    这样切换 `TextInput` 时键盘可以保持状态

    多数带有 `TextInput` 的情况下你应该选择此项

  * `false`

    已过期，请使用 `never` 代替

  * `true`

    已过期，请使用 `always` 代替

* `onContentSizeChange`

  此函数会在 `ScrollView` 内部可滚动内容的视图发生变化时调用

  调用参数为内容视图的宽和高:

  * `contentWidth`
  * `contentHeight`

  此方法是通过绑定在内容容器上的 `onLayout` 来实现的

* `onMomentumScrollBegin`

  滚动动画开始时调用此函数

* `onMomentumScrollEnd`

  滚动动画结束时调用此函数

* `onScroll`

  在滚动的过程中，每帧最多调用一次此回调函数

  调用的频率可以用 `scrollEventThrottle` 属性来控制

* `onScrollBeginDrag`

  当用户开始拖动此视图时调用此函数

* `onScrollEndDrag`

  当用户停止拖动此视图时调用此函数

* `pagingEnabled`

  当值为 `true` 时，滚动条会停在滚动视图的尺寸的整数倍位置

  这个可以用在水平分页上

  > 默认值为 `false`
  >> 注意：垂直分页在 `Android` 上不支持

* `refreshControl`

  指定[【 `RefreshControl` 】](https://reactnative.cn/docs/refreshcontrol)组件，用于为 `ScrollView` 提供下拉刷新功能

  > 只能用于垂直视图，即 `horizontal` 不能为 `true`

* `removeClippedSubviews`

  > 实验特性

  当此属性为 `true` 时，屏幕之外的子视图会被移除

  * 子视图的 `overflow` 样式需要设为 `hidden`

  这个可以提升大列表的滚动性能

  > 默认值为 `true`

* `scrollEnabled`

  当值为 `false` 的时候，内容不能滚动，默认值为 `true`

  > 注意：即便禁止用户滚动，你也仍然可以调用 `scrollTo` 来滚动

* `showsHorizontalScrollIndicator`

  当此属性为 `true` 的时候，显示一个水平方向的滚动条

* `showsVerticalScrollIndicator`

  当此属性为 `true` 的时候，显示一个垂直方向的滚动条

* `stickyHeaderIndices`

  一个子视图下标的数组，用于决定哪些成员会在滚动之后固定在屏幕顶端

  举个例子，传递 `stickyHeaderIndices={[0]}` 会让第一个成员固定在滚动视图顶端

  > 这个属性不能和 `horizontal={true}` 一起使用

* `endFillColor`

  有时候滚动视图会占据比实际内容更多的空间

  这种情况下可以使用此属性，指定以某种颜色来填充多余的空间，以避免设置背景和创建不必要的绘制开销

  > 一般情况下并不需要这种高级优化技巧

* `overScrollMode`

  覆盖默认的 `overScroll` 模式

  可选的值有：

  * `auto`

    默认值，允许用户在内容超出视图高度之后可以滚动视图

  * `always`

    无论内容尺寸，用户始终可以滚动视图

  * `never`

    始终不允许用户滚动视图

* `scrollPerfTag`
* `DEPRECATED_sendUpdatedChildFrames`
* `alwaysBounceHorizontal`
* `horizontal`
* `automaticallyAdjustContentInsets`
* `bounces`
* `bouncesZoom`
* `canCancelContentTouches`
* `centerContent`
* `contentInset`
* `contentInsetAdjustmentBehavior`
* `contentOffset`
* `decelerationRate`
* `directionalLockEnabled`
* `indicatorStyle`
* `maximumZoomScale`
* `minimumZoomScale`
* `pinchGestureEnabled`
* `scrollEventThrottle`
* `scrollIndicatorInsets`
* `scrollsToTop`
* `snapToAlignment`
* `snapToInterval`
* `snapToOffsets`
* `snapToStart`
* `snapToEnd`
* `zoomScale`
* `nestedScrollEnabled`

### 查看方法

* `scrollTo`
* `scrollToEnd`
* `scrollWithoutAnimationTo`
* `flashScrollIndicators`















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































