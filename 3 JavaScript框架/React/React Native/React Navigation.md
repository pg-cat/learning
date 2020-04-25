【 `2019` 年 `4` 月 `19` 日】整理自 [【 `React Navigation` 中文网  `3.x` 稳定版本】](https://reactnavigation.org/docs/zh-Hans/getting-started.html)

其它资料:

* [【阅读 `API` 参考】](https://reactnavigation.org/docs/zh-Hans/api-reference.html)

* [【试用 `DEMO` 】](https://github.com/react-navigation/react-navigation/tree/master/examples/NavigationPlayground)

---


# 基本原理

## `React Navigation` 首页

为你的 `React Native` 程序提供路由和导航

* 易于使用

  用内置的导航器快速开始项目, 提供开箱即用的无缝体验

* 兼容 `iOS` 和 `Android`

  平台拥有独特的外观、流畅的动画和手势

* 完全可定制

  如果你知道如何使用 `JavaScript` 编写应用程序, 那么你就可以自定义 `React Navigation` 的任何部分

* 平台可扩展

  `React Navigation` 在每一层都是可扩展的

  你可以编写自己的 `navigators` , 甚至替换面向用户的 `API`

## 入门

`React Navigation` 源于 `React Native` 社区对一个可扩展且易于使用的导航解决方案的需求, 它完全使用 `JavaScript` 编写（因此你可以阅读并理解所有源码）

> 在决定为你的项目使用 `React Navigation` 之前
>> 你可能需要先阅读 [【 **`优点 & 缺点`** 】](https://reactnavigation.org/docs/zh-Hans/pitch.html)这篇文章, 它会帮助你理解我们所做出的权衡, 以及我们认为这个库目前存在缺陷的地方
>>> `React Navigation` 不是你在 `React Native` 中路由和导航的唯一选项
>>> * `react-native-router-flux` : 该库基于 `React Navigation` , 但为你提供了不同的 `API` 与它进行交互
>>> * `react-native-navigation ` : 使用 `iOS` 和 `Android上` 的基础原生 `API` , 这是 `React Navigation` 的流行替代方案, 值得考虑, 如果你重视完全遵守平台约定, 并且不关心定制化
>>> * `react-router-native` : 这个库有点不完整, 但是如果 你已经熟悉 `React` 路由 `API` , 并对你的应用程序只有简单的要求, 这可能适用你

### 期待什么？

> 如果你已经熟悉了 `React Native` , 那么你可以快速上手 `React Navigation` , 如果还没有, 你可能需要先阅读[【 `React Native Express` 】](http://reactnativeexpress.com/)（ `1-4` 章）, 读完后再回来

本文档的 **`基本原理`** 章节中的内容是对 `React Navigation` 最重要的几方面的介绍

* 应该足够让你了解如何构建典型的小型移动应用

* 并为你提供了需要深入了解 `React Navigation` 更高级部分的背景信息

### 安装

在你的 `React Native` 项目中安装 `react-navigation `这个包

```
yarn add react-navigation
# or with npm
# npm install --save react-navigation
```

然后, 安装 `react-native-gesture-handler`

  * 如果你正在使用[【 `Expo managed workflow` 】](https://docs.expo.io/versions/latest/introduction/managed-vs-bare/), 那么你什么都不需要做, `SDK` 中已经包含了这些

```
yarn add react-native-gesture-handler
# or with npm
# npm install --save react-native-gesture-handler
```

`Link` 所有的原生依赖

```
react-native link react-native-gesture-handler
```

> `iOS` 啥都不用做

为了完成 `react-native-gesture-handler` 在 `Android` 上的安装, 请确保在 `MainActivity.java` 上完成如下修改:

```jsx
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

> 注意，此段代码中的倒数第三行标点符号 `;` 一定不可漏掉

### 混合 `iOS` 应用

> 仅针对 `React-Native` 项目请跳过

如果在混合应用中使用 `React Navigation`（一个同时具有 `Swift` / `ObjC` 和 `React Native` 的 `iOS` 应用程序）, 你可能会错过 `Podfile` 中的 `RCTLinkingIOS` 子规范, 新的 `React Navigation` 项目已经默认安装了

* 要添加此项, 请确保 `Podfile` 如下所示:

```jsx
pod 'React', :path => '../node_modules/react-native', :subspecs => [
  . . . // other subspecs
  'RCTLinkingIOS',
  . . .
]
```

准备完毕, 继续阅读 `Hello React Navigation` 开始编码吧

## 支持的 `React Native` 版本

由于 `react-navigation@3.x` 依赖于添加的新 `React.createContext API react@16.3.x`

* 我们将要求 `react-native@^0.54.x`

* 此外, `react-navigation@3.x` 需要[【 `react-native-gesture-handler` 】](https://github.com/kmagiera/react-native-gesture-handler#react-native-support)才能工作

  * 你需要确保 `react-native-gesture-handler` 你使用的版本与当前 `react-native` 版本匹配

> 如果你使用的是 `react-native-screens` , 则还需要了解自己支持的 `react-native` 版本
>> 请注意, 上述推测在某些特定 `react-native` 版本中可能不正确
>>> 如果你发现哪个版本无法正常工作, 请随时在此页面中更新相关内容！

## `React Navigation` 简介

在 `web` 浏览器中, 你可以使用 `<a>` 标签作为锚点, 链接到不同的页面

* 当用户单击某个链接时, 该 `URL` 就会被推送到浏览器历史记录堆栈

* 当用户点击返回按钮时, 浏览器会从历史堆栈顶部删除正在访问的页面, 因此当前页现在就成了以前访问过的页面

> `React Native` 没有像 `Web` 浏览器那样的内置全局历史堆栈的想法
>> 这就是 `React Navigation` 存在的意义

`React Navigation` 的 `stack navigator` 为你的应用提供了一种在页面之间切换并管理导航历史记录的方式

* 如果你的应用程序只使用一个 `stack navigator` , 则它在概念上类似于 `Web` 浏览器处理导航状态的方式

  * 当用户与它进行交互时, 应用程序会从导航堆栈中新增和删除页面, 这会导致用户看到不同的页面

* `Web` 浏览器和 `React Navigation` 工作原理的一个主要区别是:

  `React Navigation` 的 `stack navigator` 提供了在 `Android` 和 `iOS` 设备上, 在堆栈中的路由之间导航时你期望的手势和动画

让我们首先演示最常见的导航器 `createStackNavigator`

### 创建一个 `stack navigator`

`createStackNavigator` 是一个返回 `React` 组件的方法, 它需要:

* `a route configuration object`

  一个路由配置对象

* `an options object`

  一个可选对象

* ……

  目前我们先暂时省略后面的内容

由于 `createStackNavigator` 函数会返回一个 `React` 组件, 因此我们可以直接从 `App.js` 中导出它以用作我们应用程序的根组件

```jsx
// In App.js in a new project
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({ Home: { screen: HomeScreen } });
export default createAppContainer(AppNavigator);
```

* 如果运行此代码, 你将看到一个带有空导航栏和包含主页面组件的白色内容区域的页面

* 你看到的导航栏和内容区域的样式是 `stack navigator` 的默认配置, 稍后我们将学习如何配置它们

> 路由名称的大小写无关紧要
> * 你可以使用小写字母 `home` 或大写字母 `Home` , 这取决于你的喜好
> * 我们更喜欢将路由名称大写
> * 我们更喜欢利用我们的路由名称

> 路由的唯一必需配置项是 `screen`（此项设置一个组件）
>> 你可以阅读更多关于[【 `StackNavigator` 参考】](https://reactnavigation.org/docs/zh-Hans/stack-navigator.html)中可用的其它选项的信息

在 `React Native` 中, 从 `App.js` 导出的组件是应用程序的入口点（或根组件）

* 它处在所有组件的最下层

* 与导出 `stack navigator` 相比，对应用程序根部的组件进行更多的控制通常更有用

  * 所以我们导出一个只渲染了 `stack navigator` 的组件

```jsx
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
```

### 路由配置简写

假设我们对 `Home` 唯一的路由配置是页面组件, 我们不需要使用 `{screen: HomeScreen}` 配置格式, 我们可以直接使用页面组件

```jsx
const AppNavigator = createStackNavigator({
  Home: HomeScreen
});
```

### 添加第二个路由

`<AppContainer />` 组件不接受任何 `props`

* 所有配置都在 `createStackNavigator` 函数的可选参数中指定

* 我们将 `options` 留空, 所以它只使用默认配置

* 为了展示一个使用 `options` 对象的示例, 我们将向 `stack navigator` 添加第二个页面

```jsx
// Other code for HomeScreen here...

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

// Other code for App component here...
```

现在我们的堆栈有两个路由, 一个 `Home` 和一个 `Details`

* `Home` 路由对应 `HomeScreen` 组件, `Details` 路由对应 `DetailsScreen` 组件

* 堆栈的初始路由是 `Home` 路由

> 现在的问题是: 我如何从 `Home` 路由跳转到 `Details` 路由？
>> 下一节将对此进行介绍

### 摘要

* `React Native` 没有像 `Web` 浏览器那样的内置 `API` 用于导航

  * `React Navigation` 为你提供此功能, 以及在 `iOS` 和 `Android` 上进行页面切换手势和动画

* `createStackNavigator` 是一个函数, 它接受一个路由配置对象和一个可选对象并返回一个 `React` 组件

* 路由配置对象中的 `key` 是路由名称, `value` 是该路由的配置

  * 配置中唯一必须的属性是 `screen`（用于路由的组件）

* 如果要指定堆栈中的初始路由, 请在堆栈选项对象上设置 `initialRouteName`

> [【本文用到的所有源码地址（在 `expo` , 请自备梯子）】](https://snack.expo.io/@react-navigation/hello-react-navigation-v3)

## 页面切换

在上一节的学习中, 我们定义了一个具有两个路由（ `Home` 和 `Details` ）的 `stack navigator` , 但我们没有学习如何让用户从 `Home`导航到 `Details`

* 尽管我们已经学习如何更改 `initial` 路由

* 但是迫使我们的用户克隆我们的存储库并在我们的代码中更改路由, 以便看到另一个页面

* 这可能是人们可以想象的最糟糕的用户体验之一

如果这是一个 `web` 浏览器, 我们可以这么写一些东西:

```jsx
<a href="details.html">Go to Details</a>
```

另一种写法:

```jsx
<a onClick={() => { document.location.href = "details.html"; }}>Go to Details</a>
```

我们将执行与后者类似的操作, 但我们将使用向下传递到页面组件的 **`导航`** 属性, 而不是使用 **`文档`** 全局设置

### 跳转到新的页面

```jsx
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

// ... other code from the previous section
```

我们来分解一下:

* `this.props.navigation`

  `navigation prop` 传递给每个在 `stack navigator` 中定义的 **`页面组件`**

  更多内容稍后在 `API` 的[【 `Navigation prop reference` 】](https://reactnavigation.org/docs/zh-Hans/navigation-prop.html)中讲解

* `navigate（'Details'）`

  我们使用用户将要跳转的路由的名称来调用 `navigate` 方法

> 如果我们使用未在 `stack navigator` 中定义的路由名称调用 `this.props.navigation.navigate` 方法, 则不会发生任何事情, 换句话说:
> * 我们只能导航到已经在我们的 `stack navigator` 上定义的路由
> * 不能随便导航到任意组件

现在我们有一个包含了 `2` 个路由的堆栈:

* `Home` 路由
* `Details` 路由

如果我们从 `Detail` 页面再次跳转到 `Detail` 路由将会发生什么？

### 多次导航到同一路由

```jsx
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
```

* 如果你运行这个代码, 你会注意到, 当你点击 `Go to Details... again` 时, 它什么也不做！

* 这是因为我们已经在 Details 路由上了

  * 导航功能粗略地判断需求 **`去这个页面`** , 如果你已经在那个页面上, 那么意味着它不会做任何事情。

假设我们实际上 **`想要`** 添加另一个 `Details` 页面

* 这在你将一些独特的数据传递给每个路由的情况下是非常常见的（稍后我们将详细讨论参数！）

* 为此, 我们可以将导航更改 `navigate` 为 `push`

* 这允许我们表达添加另一条路线的意图, 而不管现有的导航历史如何

```jsx
<Button
  title="Go to Details... again"
  onPress={() => this.props.navigation.push('Details')}
/>
```

* 每次调用 `push` 时, 我们会向导航堆栈中添加新路由

* 当你调用 ` navigate ` 时, 它首先尝试查找具有该名称的现有路由, 并且只有在堆栈上没有一个新路由时才会推送该路由

### 返回

如果当前页面可以执行返回操作, 则 `stack navigator` 会自动提供一个包含返回按钮的标题栏

* 如果导航堆栈中只有一个页面, 则没有任何可返回的内容, 因此也不存在返回键

* 有时候你希望能够以编程的方式触发此行为, 可以使用 `this.props.navigation.goBack()`

```jsx
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
```

> 在 `Android` 上, `React Navigation` 挂钩到硬件的返回按钮, 并在用户按下返回按钮时触发 `goBack()` 方法, 因此它的行为与用户期望的相同

另一个常见需求是能够跨越 **`多个`** 页面返回

* 例如, 如果你处在堆栈深处, 上面有多个页面, 此时你想要将上面所有的页面都销毁, 并返回第一个页面

* 在这种情况下, 我们知道我们要回到 `Home` , 所以我们可以使用 `navigate('Home')`

  * 而不是`push` , 尝试一下, 看看有什么不同

* 另一个选择是 `navigation.popToTop()` , 它可以返回到堆栈中的第一个页面

### 摘要

* `this.props.navigation.navigate('RouteName')` 将新路由推送到堆栈导航器, 如果它尚未在堆栈中, 则跳转到该页面

* 我们可以多次调用 `this.props.navigation.push('RouteName')`, 并且它会继续推送路由

* 标题栏会自动显示返回按钮, 但你可以通过调用 `this.props.navigation.goBack()`以编程方式返回

  * 在 `Android` 上, 硬件返回按钮会按预期工作

* 可以使用 `this.props.navigation.navigate('RouteName')` 返回堆栈中的现有页面

  * 你可以使用 `this.props.navigation.popToTop()` 返回堆栈中的第一个页面

* `navigation prop` 适用于所有页面组件

  * 组件定义为路由配置中的页面, 并且被 `React Navigation` 渲染为路由

> [【本文用到的所有源码地址（在 `expo` , 请自备梯子）】](https://snack.expo.io/@react-navigation/going-back-v3)

## `Navigation` 生命周期

> 在上一节, 我们写了一个包含两个页面 `Home` 和 `Details` 的 `StackNavigator` , 学会了如何使用 `this.props.navigation.navigate('RouteName')` 在路由间切换

本文中一个重要的问题是:

* 当我们从 `Home` 页面离开时, 页面发生了什么？

* 我们返回时又发生了什么？

* 路由是如何发现用户将要离开或将要回来的？

以上问题, 可参考 `React Web ` :

* 假设用户从 `A` 路由跳转到 `B` 路由, `A` 将被卸载

  * `componentWillUnmount` 方法将被调用

* 当用户回来时, `A` 路由将再次被加载

* 在 `react-navigation` 中这些 `React` 生命周期方法仍然有效且可用

  * 只是用法与 `Web` 不同, 这是因为手机导航的需求更加复杂

### 示例

一个包含页面 `A` 和 `B` 的 `StackNavigator`:

* 当跳转到 `A` 时, `componentDidMount` 方法会被调用

* 当跳转到 `B` 时, `componentDidMount` 方法也会被调用, 但是 `A` 依然在堆栈中保持 **`被加载状态`** , 它的 `componentWillUnMount` 也不会被调用

* 当从 `B` 跳转到 `A` , `B` 的 `componentWillUnmount` 方法会被调用, 但是 `A` 的 `componentDidMount` 方法不会被调用, 应为此时 `A` 依然是 **`被加载状态`**

其它的 `navigator` 也会产生类似的结果:

* 比如, 带有两个选项卡的 `TabNavigator` , 其中每个选项卡都是一个 `StackNavigator`

```jsx
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Profile: ProfileScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
});
```

* 我们从 `HomeScreen` 跳转到 `DetailsScreen`

* 然后我们使用 `tab bar` 切换到 `SettingsScreen` , 并跳转到 `ProfileScreen`

* 完成这些操作之后, `4` 个页面全部被加载了

* 如果你使用 `tab bar` 切换回 `HomeStack` , 你将会看见 `DetailsScreen - HomeStack` 的导航状态被覆盖在下层

### `React Navigation` 生命周期事件

> 现在我们理解了 `React` 生命周期方法是如何在 `React Navigation` 中使用的

我们来回答一下前面的问题: 我们是如何发现用户离开和回来的？

* `React Navigation` 将事件发送到订阅了它们的页面组件

* 有4个不同的事件可供订阅:

  * `willFocus`
  * `willBlur`
  * `didFocus`
  * `didBlur`

> 可以在[【 `API` 参考】](https://reactnavigation.org/docs/zh-Hans/navigation-prop.html#addlistener-subscribe-to-updates-to-navigation-lifecycle)中查看更多信息

许多用法可能已经被 `withNavigationFocus HOC` 或 `<NavigationEvents />` 组件包含, 它们的使用也比较方便

### 摘要

* 虽然 `React` 的生命周期方法依然有效

  * 但是 `React Navigation` 依然添加了更多可以通过 `navigation` 订阅的方法

* 你可以使用 `withNavigationFocus HOC` 或 `<NavigationEvents />` 组件来改变 `React` 的生命周期方法

## 传递参数给路由

> 现在我们已经知道如何使用路由创建[【 `stack navigator` 】](https://reactnavigation.org/docs/zh-Hans/hello-react-navigation.html)和[【**`路由之间跳转的方法`**】](https://reactnavigation.org/docs/zh-Hans/navigating.html), 现在让我们看看如何在导航到路由时将数据传递过去

两个知识点, 了解一下:

* 需要将参数包装成一个对象, 作为 `navigation.navigate` 方法的第二个参数传递给路由

  * 如 `this.props.navigation.navigate('RouteName', { /* params go here */ })`

* 读取页面组件中的参数的方法 `this.props.navigation.state.params`

> 我们推荐传递的参数是 `JSON` 序列化的
> * 这样, 你就可以使用[【 `state` 持久化】](https://reactnavigation.org/docs/zh-Hans/state-persistence.html)
> * 并且你的页面组件将拥有实现[【深层链接】](https://reactnavigation.org/docs/zh-Hans/%E2%80%9Cdeep-linking.html%E2%80%9D)的正确规范

```jsx
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
```

* 你也可以直接使用 `this.props.navigation.state.params` 访问 `params` 对象

  * 如果没有提供参数, 这可能是 `null` , 所以使用 `getParam` 通常更容易, 所以你不必处理这种情况

* 如果你想通过 `prop` 直接访问 `params`（例如: `this.props.itemId` ）而不是 `this.props.navigation.getParam`

  * 你可以使用社区开发的[【 `react-navigation-props-mapper` 软件包】](https://github.com/vonovak/react-navigation-props-mapper)

### 摘要

* `navigate` 接受可选的第二个参数, 以便将参数传递给要导航到的路由

  * 例如 `this.props.navigation.navigate('RouteName', {paramName: 'value'})`

* 我们可以使用 `this.props.navigation.getParam` 读取参数

* 你也可以使用 `this.props.navigation.state.params` 作为 `getParam` 的替代方案, 如果未指定参数, 它的值是 null

> [【本节涉及的所有代码（ `expo` , 请备好梯子）】](https://snack.expo.io/@react-navigation/navigate-with-params-v3)

## 配置标题栏

现在, 你可能已经厌倦了在页面上看到一个空白的灰色条: 你已经准备好了一些风骚的操作👀

### 设置标题栏显示的标题

每个页面组件可以有一个名为 `navigationOptions` 的静态属性, 它是一个对象或一个返回包含各种配置选项的对象的函数

* 我们用于设置标题栏的标题的是 `title` 这个属性

```jsx
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  /* render function, etc */
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  /* render function, etc */
}
```

> `createStackNavigator` 默认情况下按照平台惯例设置, 所以在 `iOS` 上标题居中, 在 `Android` 上左对齐

### 在标题中使用参数

为了在标题中使用参数, 我们需要使 `navigationOptions` 成为一个返回配置对象的函数

* 尝试在 `navigationOptions` 中使用 `this.props` 可能很诱人

  * 但因为它是组件的静态属性, 所以 `this` 不会指向一个组件的实例, 因此没有 `props` 可用

* 相反, 如果我们将 `navigationOptions` 作为一个函数

  * 那么 `React Navigation` 将会用包含 `{ navigation, navigationOptions, screenProps }` 的对象调用它

  * 在这种情况下, 我们只用关心 `navigation` , 它是与传递给页面的 `this.props.navigation` 相同的对象

  * 我们可以通过 `navigation.getParam` 或 `navigation.state.params` 从 `navigation` 中获取参数, 因此我们执行下面的操作以提取 `param` 并将其用作标题

```jsx
class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

  /* render function, etc */
}
```

传递给 `navigationOptions` 函数的参数是具有以下属性的对象:

* `navigation`

  页面的 **`导航属性`** , 在页面中的路由为 `navigation.state`

* `screenProps`

  从导航器组件上层传递的 `props`

* `navigationOptions`

  如果未提供新值, 将使用的默认或上一个选项

> 在上面的示例中, 我们只需要 `navigation` 属性, 但在某些情况下, 你可能需要使用 `screenProps` 或 `navigationOptions`

### 使用 `setParams` 更新 `navigationOptions`

通常有必要从已加载的页面组件本身更新当前页面的 `navigationOptions` 配置

* 我们可以使用 `this.props.navigation.setParams` 来做到这一点

```jsx
/* Inside of render() */
<Button
  title="Update the title"
  onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
/>
```

### 调整标题样式

定制标题样式时有三个关键属性:

* `headerStyle`

  一个应用于 `header` 的最外层 `View` 的样式对象, 如果你设置 `backgroundColor` , 它就是 `header` 的颜色

* `headerTintColor`

  返回按钮和标题都使用这个属性作为它们的颜色

  在下面的例子中, 我们将 `tint color` 设置为 **`白色`**（ `#fff` ）, 所以返回按钮和标题栏标题将变为 **`白色`**

* `headerTitleStyle`

  如果我们想为标题定制 `fontFamily` 、`fontWeight` 和其它 `Text` 样式属性, 我们可以用它来完成

```jsx
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  /* render function, etc */
}
```

有几件事情需要注意:

* 在 `iOS` 上, 状态栏文本和图标是黑色的, 而且在深色背景下看起来不太好

  * 我们不会在这里详细讨论它, 但你应该确保配置的状态栏适合页面的颜色[【如状态栏指南中所述】](https://reactnavigation.org/docs/zh-Hans/status-bar.html)

* 我们设置的配置仅适用于 `Home` 页面

  * 当我们导航到 `Details` 页面时, 会继续使用默认样式

我们来看看如何在页面之间共享 `navigationOptions`

### 跨页面共享通用的 `navigationOptions`

> 通常我们希望可以在多个页面上以类似的方式配置标题栏

例如, 你公司的品牌颜色可能为红色, 因此你希望标题栏背景颜色为红色, 色调为白色

* 方便的是, 这些只是我们正在使用的运行示例的颜色, 并且你会注意到, 当你导航到 `DetailsScreen` 时, 颜色会恢复默认值

* 如果在我们应用中每个页面上, 都必须像将 `navigationOptions` 的标题栏样式属性从 `HomeScreen` 复制到 `DetailsScreen` 一样, 那是不是非常的糟糕？

* 我们可以将配置移到属性 `defaultnavigationoptions` 下的 `stack navigator` 中

```jsx
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    /* No more header config here! */
  };

  /* render function, etc */
}

/* other code... */

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
```

现在, 任何属于 `Rootstack` 的页面都将拥有我们美妙的品牌风格

* 不过, 如果需要, 有方法可以覆写这些设置项

* 属性 `navigationOptions` 可用于配置导航器本身

```jsx
const Home = createStackNavigator(
  {
    Feed: ExampleScreen,
    Profile: ExampleScreen,
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  }
);

const Tabs = createBottomTabNavigator({ Home });
```

> 注意:
> * 在 `v2` 及其以下版本, 你要用于执行此操作的属性是 `navigationOptions`
> * 在 `v3` 中, 我们将其重命名为 `defaultNavigationOptions`

### 覆盖共享的 `navigationOptions`

> 你的页面组件上指定的 `navigationOptions` 与其父级 `stack navigator` 中的 `navigationOptions` 一起合并时, 页面组件上的选项优先

让我们使用这些知识点在 `Details` 页面上反转背景和色彩

```jsx
class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  /* render function, etc */
}
```

### 使用自定义组件替换标题

> 有时候, 你可能需要更多的控制权, 而不仅仅是改变标题的文本和样式

例如, 你可能想在标题所在的位置放置一张图片, 或者将标题变为按钮

* 在这些情况下, 你可以完全覆盖用于标题的组件并提供你自己的组件

```jsx
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./spiro.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
  };

  /* render function, etc */
}
```

> 你需要知道的:
>> 为什么 `headerTitle` 能够支持我们设置一个组件, 而不是像以前一样设置一个 `title` ？
>>> 原因是 `headerTitle` 是一个特定于 `stack navigator` 的属性, `headerTitle` 默认为一个 `Text` 组件, 它显示 `title` 这个字符串

### 其他配置

你可以阅读[【 `createStackNavigator` 参考】](https://reactnavigation.org/docs/zh-Hans/stack-navigator.html#navigationoptions-used-by-stacknavigator)一文中 `stack navigator` 内页面可用的 `navigationOptions` 的完整列表

### 摘要

* 你可以在页面组件的 `navigationOptions` 静态属性内自定义标题

  * 阅读[【 `API` 参考】](https://reactnavigation.org/docs/zh-Hans/stack-navigator.html#navigationoptions-used-by-stacknavigator)中的完整选项列表

* `navigationOptions` 静态属性可以是对象或函数

  * 当它是一个函数时, 会为其提供一个带有 `navigation prop` 、`screenProps` 和 `navigationOptions` 的对象

* 在初始化时, 还可以在 `stack navigator` 的配置中指定共享的 `navigationOptions` 静态属性优先于该配置

> [【本文涉及的所有源码（ `expo` , 请备好梯子）】](https://snack.expo.io/@react-navigation/custom-header-title-component-v3)

## 标题栏按钮

> 参考资料: 有一个社区开发包, 用于渲染标题栏中的按钮, 并提供正确的样式[【 `react-navigation-header-buttons` 】](https://github.com/vonovak/react-navigation-header-buttons)

### 向标题栏中添加一个按钮

> 与标题栏交互最常见的方式是点击标题左侧或右侧的按钮

让我们在标题的右侧添加一个按钮

* 根据手指和手机的大小, 整个屏幕上触摸最难的地方之一, 但也是放置按钮的常用位置

```jsx
class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
}
```

* 在 `navigationOptions` 中 `this` 绑定的不是 `HomeScreen` 实例, 所以你不能调用 `setState` 方法和其上的任何实例方法

* 这一点非常重要, 因为标题栏中的按钮与标题栏所属的页面进行交互是非常常见的

### 标题栏和其所属的页面之间的交互

> 最常用的模式是在组件实例上提供按钮访问函数 `params`

我们将用一个经典的 **`计数器`** 例子, 来进行演示:

```jsx
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#fff"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  /* later in the render function we display the count */
}
```

> `React Navigation` 不保证你的屏幕组件将被安装在标题之前
> * 由于 `increaseCount` 参数在componentDidMount中设置, 因此我们可能无法在navigationOptions中使用它
> * 这通常不会成为问题, 因为如果回调为空, `Button` `和Touchable` 组件的 `onPress` 事件将不会执行任何操作
> * 如果你在此处有自己的自定义组件, 则应确保它通过 `prop` 传递过去的点击事件处理行为与 `null` 一样
>> 作为 `setParams` 的替代方法, 你可以使用状态管理库（例如 `Redux` 或 `MobX` ）, 进行标题栏和页面之间的通信, 就像两个不同组件之间的通信一样

### 自定义返回按钮

`createStackNavigator` 为返回按钮提供了平台特定的默认值

* 在 `iOS` 上, 该按钮旁边有一个标签, 当前一页面的标题适合可用空间时, 显示前一页面的标题, 否则显示 **`返回`**

* 你可以使用 `headerBackTitle` 和 `headerTruncatedBackTitle`[【阅读更多】](https://reactnavigation.org/docs/zh-Hans/stack-navigator.html#headerbacktitle)更改返回按钮旁边显示的文本

* 要自定义返回按钮图片, 你可以使用[【 `headerBackImage` 】](https://reactnavigation.org/docs/zh-Hans/stack-navigator.html#headerbackimage)

### 覆盖返回按钮

只要用户可以从当前页面返回, 返回按钮将自动呈现在 `stack navigator` 中

* 换句话说, 只要堆栈中有多个页面, `stack navigator` 按钮就会被渲染出来

在某些情况下, 你希望通过上述选项自定义后退按钮

* 在这种情况下, 你可以将 `headerLeft` 选项设置为将呈现的 `React` 元素, 就像我们对 `headerRight` 所做的一样

* 或者, `headerLeft` 选项也接受一个 `React Component`

  * 例如, 它可用于覆盖后退按钮的 `onPress` 行为

  * 请阅读[【 `api` 参考资料】](https://reactnavigation.org/docs/zh-Hans/stack-navigator.html#headerleft)了解更多信息

### 摘要

* 你可以通过 `navigationOptions` 中的 `headerLeft` 和 `headerRight` 属性在标题栏中设置按钮

* 后退按钮可以通过 `headerLeft` 完全自定义

  * 但是如果你只想更改标题或图片, 那么还有其他 `navigationOptions`

    * `headerBackTitle`
    * `headerTruncatedBackTitle`
    * `headerBackImage`

> [【本节涉及的所有代码（ `expo` , 请备好梯子）】](https://snack.expo.io/@react-navigation/header-interacting-with-component-instance-v3)

## `App` 容器

> `App` 容器负责管理应用的 `state` , 并将顶层的 `navigator` 链接到整个应用环境

在 `Android` 上, `App` 容器使用链接 `API` 来处理返回键

* 还可以配置容器, 用于导航状态的持久化

* 在 `web` 上, 你将使用与 `React Native` 不同的容器

> 注意: 在 `v2` 和更早版本中, `React Navigation` 中的容器由 `create*Navigator` 函数自动提供, 从 `v3` 开始, 需要直接使用容器
>> 在第 `3` 节中, 我们还将 `createNavigationContainer` 重命名为 `createAppContainer`

关于 `createAppContainer` 的一个简单示例:

```jsx
import { createAppContainer, createStackNavigator } from 'react-navigation';
// you can also import from @react-navigation/native

const AppNavigator = createStackNavigator(...);

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;
```

### `createAppContainer prop`

> `React Native` 中的 `createAppContainer prop`

```jsx
<AppContainer
  onNavigationStateChange={handleNavigationChange}
  uriPrefix="/app"
/>
```

* `onNavigationStateChange(prevState, newState, action)`

  每当导航器管理的 `navigation state` 发生变化时, 都会调用该函数

  它接收:

  * 之前的 `state`
  * `navigation` 的新 `state`
  * 以及发布状态更改的 `action`

  默认情况下, 它将 `state` 的更改打印到控制台

* `uri` 前缀

  应用可能会处理的 `URI` 前缀, 在处理一用于提取传递给 `route` 的一个 深度链接时将会用到

### 在 `App` 容器中调用 `Dispatch` 和 `Navigate`

如果你想在 `App` 容器中使用 `dispatch` , 你可以使用 `ref` 来调用 `dispatch` 方法:

```jsx
const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({ routeName: someRouteName })
      );
  }
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
```

### 在 `Web` 上使用 `App` 容器

在 `web` 上, 你可以使用 `createBrowserApp` 和 `handleServerRequest` 来管理你的顶层 `navigator` 的 `state`

## 打开全屏模式

`Dictionary.com` 没有提供令人满意的模式定义, 因为它与用户界面相关, 但语义用户界面将其描述如下:

```
A modal displays content that temporarily blocks interactions with the main view

- (翻译: 模式显示临时阻止与主视图交互的内容)
```

这听起来好像是那么回事儿, 一个 `modal` 就像一个弹出窗口

* 它不是主要导航流程的一部分

* 它通常有一个不同的转换, 一个不同的关闭方式, 并且打算专注于一个特定的内容或交互

将此解释为 `React Navigation` 基础的一部分的目的不仅仅是因为这是一个常见用例

* 而且还因为实现它, 需要了解 **`嵌套导航器`** 的知识, **`嵌套导航器`** 是 `React Navigation` 的一个重要组成部分

### 创建一个 `modal` 堆栈

```jsx
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
      /* the rest of this config is unchanged */
    };
  };

  /* render function, etc */
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    /* Same configuration as before */
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
```

这儿有一些重要的事情需要注意:

* 正如我们所知, `stack navigator` 函数返回一个 `React` 组件

  * 记得我们在 `App` 组件中渲染了 `<RootStack />`

  * 这个相同的组件可以用作屏幕组件！

  * 通过这样做, 我们将一个 `stack navigator` 嵌套到另一个 `stack navigator` 中

  * 在这种情况下, 这对我们很有用, 因为我们希望为 `modal` 使用不同的转换样式, 并且我们希望在禁用整个堆栈的标题栏

    * 因为 `tab navigation` , 这一点将会变得很重要

    * 比如, `tab navigation` 的每个 `tab` 可能都会有自己的堆栈！

  * 直观地说, 这就是你所期望的:

    从 `tab A` 切换到 `tab B` 后, 当你浏览 `tab B` 时, 你希望 `tab A` 保持其 `navigation state`

  * 看看[【这个图】](https://reactnavigation.org/docs/assets/modal/tree.png)来想象一下本例中的导航结构

* `stack navigator` 的 `mode` 配置可以是 `card`（默认）或 `modal`

  * 在 `iOS` 上, `modal` 表现为从屏幕底部划入, 并允许用户从页面顶部向下缩小以关闭它

  * `modal` 配置对 `Android` 没有影响, 因为全屏模式在该平台上没有任何不同的转换行为

* 当我们调用 `navigate` 方法时, 我们不需要指定除我们想要导航的路由之外的任何东西

  * 没有必要限定它属于哪个堆栈（任意命名的 `root` 或 `main` 堆栈）

    `React Navigation` 尝试在最近的导航器上查找路线, 然后在那里执行操作

  * 为了可视化, 请再次查看[【此图】](https://reactnavigation.org/docs/assets/modal/tree.png), 并想象 `navigate` 如何将页面从 `HomeScreen` 切换到 `MainStack`

  * 我们知道 `MainStack` 无法处理路由 `MyModal` , 因此它会将其传递到可以处理该路由的 `RootStack` , 从而实现页面的跳转

### 摘要

* 更改 `stack navigator` 上的转换类型, 可以使用 `mode` 配置项

  * 当设置为 `modal` 时, 所有屏幕加载方式为从下到上滑入, 而不是从右到左

  * 这适用于整个 `stack navigator` , 因此要在其他屏幕上使用从右到左的转换, 我们将使用默认配置添加另一个导航堆栈

* `this.props.navigation.navigate` 遍历导航树以查找可以处理 `navigate` 操作的导航器

> [【本节涉及的所有代码（ `expo` , 请备好梯子）】](https://snack.expo.io/@react-navigation/full-screen-modal-v3)

## 下一步的准备

> 你现在已经熟悉如何创建 `stack navigator` , 在屏幕上进行配置, 在路由之间跳转以及显示全屏模式

`stack navigator` 及其相关 `API` 将成为你的 `React Navigation` 工具栏中最常用的工具, 但存在一些问题, 是它们无法解决的

* 例如, 无法使用 `stack navigator` 构建基于选项卡的导航

  * 为此, 你需要使用[【 `TabNavigator` 】](https://reactnavigation.org/docs/zh-Hans/tab-based-navigation.html)

> 如果你好奇并希望详细了解 `React Navigation` 的工作原理, 建议你按照[【构建自己的导航器】](https://reactnavigation.org/docs/zh-Hans/custom-navigator-overview.html)这一章节进行操作

最后, 你可以将[【 `API` 参考】](https://reactnavigation.org/docs/zh-Hans/api-reference.html)页面添加到书签, 以供将来随时参考

## 专业术语

> 这是文档的新部分, 它缺少很多术语！
>> 如果你有需要在此解释的术语, 请尽管提[【 `pr` 和 `issue` 】](https://github.com/react-navigation/website)

### `Header` 标题栏

也称为导航标题栏, 导航栏, 可能还有很多其他的东西

* 这是屏幕顶部的矩形, 其中包含后退返回按钮和页面标题

* 整个矩形通常称为 `React Navigation` 中的标题栏

### `screen component` 页面组件

页面组件就是我们在路由配置中使用的组件

```jsx
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
```

组件名称中的后缀 `Screen` 完全是可选的, 但这是常用的惯例

* 我们可以将它称为 `CasaPantalla` , 这两种写法的效果是一样的

我们前面看到, 我们的页面组件是通过 `navigator` 这个 `prop` 提供的

> 需要注意的是, 只有通过 `React Navigation` 渲染为路由的页面才会如此
>> 例如, 响应 `this.props.navigation.navigate`

如下, 如果我们将 `DetailsScreen` 渲染为 `HomeScreen` 的子项

* 那么 `DetailsScreen` 将不会拥有 `navigation` 这个 `prop`

* 并且当你在 `HomeScreen` 上按下 `Go to Details... again` 按钮时

* 该应用程序将抛出一个典型的 `JavaScript` 异常:

  `undefined is not an object`

```jsx
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <DetailsScreen />
      </View>
    );
  }
}
```

> [【`Navigation prop` 参考】](https://reactnavigation.org/docs/zh-Hans/navigation-prop.html)部分详细介绍了这一点, 描述了解决方法, 并提供了有关 `this.props.navigation` 上可用的其他属性的更多信息

### `Navigation Prop`

这个 `prop` 将被传递到所有页面上, 并且可以用于以下内容:

* `dispatch`

  会向路由发送 action

* `state`

  是页面的当前路由

* `getParam`

  是访问可能在路由上的参数的助手

* `navigate` 、`goBack` 等方法

  是触发事件的便捷方法

导航器也可以接受 `navigation prop` , 如果他们可以从父导航器得到的话

> 有关更多详细信息, 请参阅[【 `Navigation prop` 参考】](https://reactnavigation.org/docs/zh-Hans/navigation-prop.html)

### `Navigation State`

导航器的状态通常如下所示:

```jsx
{
  key: 'StackRouterRoot',
  index: 1,
  routes: [
    { key: 'A', routeName: 'Home' },
    { key: 'B', routeName: 'Profile' },
  ]
}
```

* 对于此 `navigation state` , 有两个路由（可能是 `tab` 或堆栈中的 `card` ）, 索引指向当前路由 `B`

### `Route`（路由）

每个路由都是一个 `navigation state` :

* 其中包含一个标识它的关键字

* 以及一个用于指定路线类型的 `routeName`

* 它也可以包含任意参数

```jsx
{
  key: 'B',
  routeName: 'Profile',
  params: { id: '123' }
}
```

### `Child Navigation State`

在组合导航器时, 路由可能是导航状态, 如下所示:

```jsx
{
  key: 'B',
  routeName: 'Profile',
  params: { id: '123' },
  index: 1,
  routes: [ {...}, {...} ]
}
```

## 常见错误

> 本部分试图概述用户在使用 `React Navigation` 时经常遇到的问题, 并在某些情况下用作错误消息的参考

### 显式渲染多个 `navigator`

大多数应用程序只能在 `React` 组件中渲染一个导航器, 并且这通常位于应用程序的根组件附近

* 虽然这有点反直觉, 但对 `React Navigation` 的体系结构非常重要

* 以下是你可能在代码中写入的内容

  > 请注意, 此示例不正确

```jsx
export default class App extends React.Component {
  render() {
    /* In the root component we are rendering the app navigator */
    return <AppContainer />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
});

const AuthenticationContainer = createAppContainer(AuthenticationNavigator);

class AuthenticationScreen extends React.Component {
  render() {
    /*
     * In a screen inside of the navigator we are rendering another navigator
     * You should avoid this! It will have its own navigation state and be unable
     * To interact with any parent navigator, eg: it would not know the route "Home" exists
     */
    return (
      <AuthenticationContainer />
    );
  }
}

const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationScreen, // This screen renders a navigator!
  Home: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator)
```

* 正确写法如下:

```jsx
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
});

const AppNavigator = createSwitchNavigator({
  /*
   * Rather than being rendered by a screen component, the
   * AuthenticationNavigator is a screen component
   */
  Auth: AuthenticationNavigator,
  Home: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);
```

* 或者, 以下内容也可以工作, 因为它通过 `navigation prop` 在 `AuthenticationScreen` 上静态显示了 `router` :

```jsx
export default class App extends React.Component {
  render() {
    /* In the root component we are rendering the app navigator */
    return <AppContainer />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
});

class AuthenticationScreen extends React.Component {
  static router = AuthenticationNavigator.router;

  render() {
    return (
      <AuthenticationNavigator navigation={this.props.navigation} />
    );
  }
}

const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationScreen, // This screen renders a navigator!
  Home: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);
```

### 将 `navigationOptions` 分配给错误的组件

在以前版本的 `React Navigation` 中, 该库用于挖掘组件树以查找 `navigationOptions`

* 现在的情况不再是这样了, 只有特定导航器的屏幕组件上的 `navigationOptions` 才会应用于该导航器

* 你可以在[【导航选项解析指南】](https://reactnavigation.org/docs/zh-Hans/navigation-options-resolution.html)中阅读有关此内容的详细信息

### 不使用 `flex`

如果将 `AppContainer` 包装在 `View` 中, 请确保该 `View` 使用了 `flex`

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
 class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}
 class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
 const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});
 const AppContainer = createAppContainer(TabNavigator)
 // without the style you will see a blank screen
export default ()=><View style={{flex: 1}}><AppContainer/></View>;
```

## 优化内存使用和性能

在 `react navigation@2.14.0` 之前

* 每个平台中的所有页面基本上都是常规的 `native View`

* 这将增加内存使用量

* 并使渲染树深入到厚重的堆叠应用程序中

随着 `react-native-screens` 的出现, `native` 页面优化可以通过引入 `react-navigatio` 组件来响应导航:

* `iOS` 的 `UIViewController`
* `Android` 的 `FragmentActivity`

通过使用 `react-native-screens` , 每个 `native` 平台都可以优化视图堆栈下的页面的内存使用, 并简化节点层次结构

* 你可以看看这里的比较, 看看性能的提高

### 使用 `Expo` 时的设置

默认情况下, `expo` 已经包含了 `react-native-screens` , 你所需要做的就是在呈现导航堆栈之前粘贴以下代码段

* 通常在 `index.js` 或 `app.js` 文件中

```jsx
// Before rendering any navigation stack
import { useScreens } from 'react-native-screens';
useScreens();
```

### 在普通 `react-native` 应用程序中设置

* 你首先需要遵循来自[【 `react-native-screens` 】](https://github.com/kmagiera/react-native-screens)的安装说明

* 之后, 你可以像上面提到的那样导入库并享受优化

## 限制

> 作为用户, 了解你能做什么和不能做什么很重要

有了这些知识, 你可以选择采用[【不同的库】](https://reactnavigation.org/docs/zh-Hans/alternatives.html)

* 我们在[【优点 `&` 缺点】](https://reactnavigation.org/docs/zh-Hans/pitch.html)这一章节讨论了高级设计决策

* 在这里我们将介绍一些不支持或难以实现的用例, 这些用例可能是无法实现的

果你的应用有以下任何限制, 则 `React Navigation` 可能不适合你:

### 动态路由

这需要对 `React Navigation` 有一点了解才能充分发挥

* `React Navigation` 要求你静态地定义你的路由

```jsx
const FriendsNavigator = createDrawerNavigator({
  Feed: FeedScreen,
  FriendList: FriendListScreen,
});

const AuthNavigator = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
});

const AppNavigator = createSwitchNavigator({
  App: FriendsNavigator,
  Auth: AuthNavigator,
});

const AppContainer = createAppContainer(AppNavigator);

export default class MyApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}
```

* 比方说, 当用户登录应用程序时, 你需要获取用户的好友列表, 并在 `FriendsNavigator` 中为每个好友页面添加路由

  * 这将使得每个好友在 `drawer` 中有一个带有好友名称的按钮

* `React Navigation` 目前不提供简单的方法来执行此操作

* 目前情况下, 当你的路由可以静态定义时, `React Navigation` 使用效果最好

* 请记住, 这并不意味着你不能传递任何数据给路由

  * 可以使用[【 `params` 】](https://reactnavigation.org/docs/zh-Hans/params.html)进行此操作

> 如果你一定要使用动态路由, 也有解决方案, 但可能会有一些额外的复杂度

### 带有大文本的 `iOS 11` 样式标题栏

这是实施的路线图, 但目前在 `React Navigation` 中不可用

> 这里有几个构建了自己的版本的[【 `fork` 】](https://github.com/react-navigation/react-navigation/issues/2749#issuecomment-367516290), 但你的里程可能会有所不同

### `Right-to-left (RTL)` 布局支持

> 使用 `React Navigation` 时, 你可能会遇到 `RTL` 布局问题

从事 `React Navigation` 工作的团队相当小, 目前我们没有带宽或流程来测试针对 `RTL` 布局的所有更改

* 如果您喜欢 `React Navigation` 提供的内容, 但由于此限制而被关闭, 我们鼓励你参与并获得 `RTL` 布局支持的所有权

### 性能限制

我们可以使用 `React Native` 的[【原生动画驱动程序】](https://reactnavigation.org/docs/zh-Hans/%E2%80%9Chttps://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html%E2%80%9D)将动画分流到另一个线程, 但我们目前仍然需要回到 `JavaScript` 中进行手势操作

* `React Navigation` 完全由 `React` 组件组成, 并且 `state` 在 `JavaScript` 中以与应用程序的其余部分相同的线程进行管理

* 这使得 `React Navigation` 在很多方面都很出色, 但这也意味着你的应用程序逻辑通过 `React Navigation` 争取 `CPU` 时间

  * 每帧只有很多 `JavaScript` 执行时间可用

### 微妙的平台特定行为

> 某些特定于平台的行为要么无法实现, 要么尚未在响应导航中实现

`2.14.0` 之前的版本不支持[【 `iOS` 上的 **`可访问性功能`** 】](https://www.cnet.com/how-to/how-to-use-reachability-on-iphone-6-6-plus/)

* 当你切换此功能时, 应用程序会向下移动到屏幕底部, 这样你就可以轻松地到达 `UI` 顶部附近的导航栏和其他功能

* 当你使用内置 `iOS` 导航 `API` 导航到另一个页面时, `UI` 将跳转到屏幕顶部

> `React-navigation 2.14.0` 及其之后的版本通过集成 `react-native-screens` , 支持这一功能

> `React-navigation` 在 `3D` 触控设备上不支持 `peek & pop` 功能


# 指南

## 选项卡导航 `Tab navigation`

在手机 `App` 中最常用的导航可能就是基于 `Tab` 的导航, 这可以是页面底部或标题下方顶部的标签（甚至不要标题）

* 本指南涵盖 `createBottomTabNavigator`

* 您还可以使用:

  * `createMaterialBottomTabNavigator`
  * `createMaterialTopTabNavigator`

  将 `Tab` 添加到您的应用程序

### 基于 `Tab navigation` 的最小示例

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
```

### 自定义外观

这与如何自定义 `stack navigator` 类似

* 有些属性可以在初始化 `tab navigator` 时设置, 有些可以在每个页面的 `navigationOptions` 中自定义

```jsx
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
```

我们来剖析一下:

* `tabBarIcon` 是 `navigationOptions` 上的一个属性, 所以我们知道我们可以在我们的页面上使用它

  * 但在这种情况下, 选择将它放在 `createBottomTabNavigator` 的配置中, 是为了方便集中配置图标

* `tabBarIcon` 是一个给定以下参数的函数:

  * `focused state`
  * `tintColor`
  * `horizontal` 等

  如果你在配置中进一步查看, 您将看到:

  * `tabBarOptions`
  * `activeTintColor`
  * `inactiveTintColor`

  > 这些默认为 `iOS` 平台的默认值, 但您可以在这里更改它们

  传递给 `tabBarIcon` 的 `tintColor` 取决于 `focused` 这个 `state`

  * 判断该 `Tab` 是否获得了焦点

  * 可以是活动, 也可以是非活动状态

  > 当设备处于横屏时
  > * `horizontal` 是 `true`
  > * 否则就是 `false`

有关 `createBottomTabNavigator` 配置选项的更多信息, 请阅读[【完整 `API` 参考】](https://reactnavigation.org/docs/zh-Hans/bottom-tab-navigator.html)

### 将徽章添加到图标

> 有时我们想在一些图标上添加徽章

一种常见的方法是使用一个额外的视图容器, 并使用绝对位置设置徽章元素的样式

```jsx
export default class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        { badgeCount > 0 && (
          <View style={{
            // If you're using react-native < 0.57 overflow outside of the parent
            // will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
          </View>
        )}
      </View>
    );
  }
}
```

从 `UI` 的角度来看, 这个组件已经准备好使用了, 但是您仍然需要找到一些方法来从其他地方正确地传递徽章计数, 比如使用

* [【 `react-context` 】](https://reactjs.org/docs/context.html)
* [【 `redux` 】](https://redux.js.org/)
* [【 `mobx` 】](https://mobx.js.org/)
* 或[【事件发射器】](https://github.com/facebook/react-native/blob/master/Libraries/vendor/emitter/EventEmitter.js)

```jsx
const HomeIconWithBadge = (props) => {
  // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}
export default HomeIconWithBadge
```

### 在 `Tab` 之间切换

从一个 `Tab` 切换到另一个 `Tab` 有一个我们熟悉的 `API`

* `this.props.navigation.navigate`

```jsx
import { Button, Text, View } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
```

### 每个 `Tab` 的 `stack navigator`

> 通常, `tabs` 不仅仅显示一个页面

例如, 在你的 `Twitter` 上, 您可以点击一条 `tweet` , 它将会把你带到某个 `Tab` 的一个新页面, 该页面包含关于这条 `tweet` 的所有回复

* 你可以将此视为在每个选项卡中存在单独的导航堆栈

* 这正是我们在 `React Navigation` 中对其进行建模的方式

```jsx
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    /* Other configuration remains unchanged */
  }
));
```

### 为什么我们需要 `TabNavigator`

> 而不是 `TabBarIOS` 或其他组件

使用独立的 `tab bar` 组件, 而不将其集成到你在应用中使用的导航库中是很常见的

* 在某些情况下, 这没有任何问题！

* 但是, 你应该警告自己, 在这样做时可能会遇到一些令人沮丧的意外问题

例如, `React Navigation` 的 `TabNavigator` 可以负责为您处理 `Android` 返回按钮, 而独立组件通常不会

* 此外, 如果你执行 **跳转到此 `Tab` , 然后转到此页面** 这种需要调用两个不同 `API` 的操作, 将会更加困难

* 最后, 手机用户界面有许多小的设计细节, 需要某些组件知道其他组件的布局或存在

  * 例如, 如果您有一个半透明的 `tab bar`

    * 内容应该滚动到其下方, 并且滚动视图的底部应该有一个等于 `tab bar` 高度的插图, 以便您可以看到所有内容

    * 双击 `tab bar` 应使活动导航堆栈弹出到堆栈顶部, 再次双击时应将该堆栈中的当前滚动视图滚动到顶部

  * 尽管并非所有这些行为都是通过 `React Navigation` 来实现的, 但如果你使用独立的 `tab` 视图组件, 则也许不能进行这些操作

### 隐藏特定页面上的 `tabbar`

`Tab navigator` 包含 `stack navigator` , 你希望隐藏特定页面上的 `tabbar`

[【点我看文档】](https://reactnavigation.org/docs/zh-Hans/navigation-options-resolution.html#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens)

## 抽屉导航 `Drawer navigation`

```jsx
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);
```

要打开和关闭抽屉, 请使用以下帮助程序:

```jsx
this.props.navigation.openDrawer();
this.props.navigation.closeDrawer();
```

如果要切换抽屉, 请调用以下命令:

```jsx
this.props.navigation.toggleDrawer();
```

这些功能中的每一个在幕后都只是调度操作:

```jsx
this.props.navigation.dispatch(DrawerActions.openDrawer());
this.props.navigation.dispatch(DrawerActions.closeDrawer());
this.props.navigation.dispatch(DrawerActions.toggleDrawer());
```

如果您想确定抽屉是打开还是关闭, 可以执行以下操作:

```jsx
const parent = this.props.navigation.dangerouslyGetParent();
const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
```

## 身份验证流程 `Authentication flows`

> 大多数应用程序都要求用户通过某种方式进行身份验证才能访问与用户或其他私人内容相关的数据

通常情况下, 流程如下所示:

* 用户打开应用

* 该应用程序从持久存储中加载某个身份验证状态, 例如 `AsyncStorage`

* 当状态被加载时, 根据是否加载有效的认证状态, 向用户呈现认证页面或主页面

* 当用户注销时, 我们清除认证状态并跳转到认证页面集合

> 注意:
>> 我们说 **`认证页面集合`** , 因为通常会有多个:
>> * 您可能有一个页面, 其中包含用户名和密码表单
>> * 另一个用于 **`忘记密码`** , 另一个用于 **`注册`**

### 设置导航

















# 创建自己的导航器

## 概述

`Navigators` 支持自定义应用的导航架构, 也提供了类似 header、tab bar 这些常用元素, 可以根据需要, 自己配置

* 事实上, 导航器只是普通的 `React` 组件

### 内置导航器

`react-navigation` 包含一些常用的导航器, 例如:

* [【 `createStackNavigator` 】](https://reactnavigation.org/docs/zh-Hans/stack-navigator.html)

  一次渲染一个页面, 并支持页面切换, 当我们打开一个新的页面时, 该页面会被置于堆栈的顶层

* [【 `createBottomTabNavigator` 】](https://reactnavigation.org/docs/bottom-tab-navigation.html)

  渲染一个 `tab bar` , 让用户可以在多个页面之间切换

* [【 `createSwitchNavigator` 】](https://reactnavigation.org/docs/zh-Hans/switch-navigator.html)

  在一个页面和另一个页面之间进行切换, 在屏幕上没有 `UI` , 在页面变为非活动状态时卸载页面

* [【 `createDrawerNavigator` 】](https://reactnavigation.org/docs/zh-Hans/drawer-navigator.html)

  提供从左侧滑入的抽屉

### 使用导航器渲染页面

> 导航器只能渲染 `React` 组件构成的页面

若要了解如何创建页面, 请阅读:

* 页面的[【 `navigation` 这个 `prop` 】](https://reactnavigation.org/docs/zh-Hans/navigation-prop.html), 可用于触发导航操作, 如打开别的页面

* 页面的 `navigationOptions` 可用于自定义页面的显示, 如:

  * [【 `header title` 】](https://reactnavigation.org/docs/zh-Hans/stack-navigator.html#navigationoptions-used-by-stacknavigator)
  * `tab label`
  * ……等

## 路由

路由定义组件的 `navigation state` , 并允许开发人员定义可处理的 `path` 和 `action`

### 内置的路由

`react-navigation` 附带一些标准路由:

* [【 `StackRouter` 】](https://github.com/react-navigation/react-navigation-core/blob/master/src/routers/StackRouter.js)
* [【 `TabRouter` 】](https://github.com/react-navigation/react-navigation-core/blob/master/src/routers/TabRouter.js)

### 使用路由

要手动创建导航器, 请在组件上放置一个静态 `router`

```jsx
class MyNavigator extends React.Component {
  static router = StackRouter(routes, config);
  ...
}
```

现在, 您可以在另一个导航器中将此组件用作页面, 并且 `MyNavigator` 的导航逻辑将由 `StackRouter` 定义

### 自定义路由

> 请参阅[【自定义路由器 `API` 规范】](https://reactnavigation.org/docs/zh-Hans/custom-routers.html)以了解 `StackRouter` 和 `TabRouter` 的 `API`

您也可以根据需要覆盖路由器功能:

* 自定义导航操作

  为了覆盖导航行为, 你可以覆盖 `getStateForAction` 中的 `navigation state` 逻辑, 并手动操作 `routes` 和 `index`

  ```jsx
  const MyApp = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
  }, {
    initialRouteName: 'Home',
  })

  const defaultGetStateForAction = MyApp.router.getStateForAction;

  MyApp.router.getStateForAction = (action, state) => {
    if (state && action.type === 'PushTwoProfiles') {
      const routes = [
        ...state.routes,
        {key: 'A', routeName: 'Profile', params: { name: action.name1 }},
        {key: 'B', routeName: 'Profile', params: { name: action.name2 }},
      ];
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return defaultGetStateForAction(action, state);
  };
  ```

* 阻止导航操作

  有时你可能想要阻止某些导航活动, 具体取决于您的路由

  ```jsx
  import { NavigationActions } from 'react-navigation'

  const MyStackRouter = StackRouter({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
  }, {
    initialRouteName: 'Home',
  })

  const defaultGetStateForAction = MyStackRouter.router.getStateForAction;

  MyStackRouter.router.getStateForAction = (action, state) => {
    if (
      state &&
      action.type === NavigationActions.BACK &&
      state.routes[state.index].params.isEditing
    ) {
      // Returning null from getStateForAction means that the action
      // has been handled/blocked, but there is not a new state
      return null;
    }

    return defaultGetStateForAction(action, state);
  };
  ```

* 处理自定义 `URI`

  也许你的应用程序有一个内置路由器无法处理的独特的 `URI`

  你可以扩展路由 `getActionForPathAndParams`

  ```jsx
  import { NavigationActions } from 'react-navigation'

  const MyApp = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
  }, {
    initialRouteName: 'Home',
  })
  const previousGetActionForPathAndParams = MyApp.router.getActionForPathAndParams;

  Object.assign(MyApp.router, {
    getActionForPathAndParams(path, params) {
      if (
        path === 'my/custom/path' &&
        params.magic === 'yes'
      ) {
        // returns a profile navigate action for /my/custom/path?magic=yes
        return NavigationActions.navigate({
          routeName: 'Profile',
          action: NavigationActions.navigate({
            // This child action will get passed to the child router
            // ProfileScreen.router.getStateForAction to get the child
            // navigation state.
            routeName: 'Friends',
          }),
        });
      }
      return previousGetActionForPathAndParams(path, params);
    },
  });
  ```

## 自定义 `navigator`

任何具有[【 `router` 】](https://github.com/react-navigation/react-navigation/blob/master/src/routers/StackRouter.js)的 `React` 组件都是一个导航器 , 其中 `router` 用来定义导航行为

* 每个导航器都有一个 `navigation prop` , 它允许父级导航器控制 `navigation state`

### 扩展导航器

可以采用现有的导航器并使用以下方法扩展其行为:

```jsx
const MyStack = createStackNavigator({ ... });

class CustomNavigator extends React.Component {
  static router = MyStack.router;
  render() {
    const { navigation } = this.props;

    return <MyStack navigation={navigation} />;
  }
}
```

现在可以渲染其他东西, 观察 `navigation prop` , 并覆盖路由的行为:

```jsx
const MyStack = createStackNavigator({ ... });

class CustomNavigator extends React.Component {
  static router = {
    ...MyStack.router,
    getStateForAction: (action, lastState) => {
      // check for custom actions and return a different navigation state.
      return MyStack.router.getStateForAction(action, lastState);
    },
  };
  componentDidUpdate(lastProps) {
    // Navigation state has changed from lastProps.navigation.state to this.props.navigation.state
  }
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <MyStack navigation={navigation} />
        {...}
      </View>
    );
  }
}
```

### 导航器的 `Navigation Prop`

传递给导航器的 `navigation prop` 只包含:

* `state`
* `dispatch`
* `addListener`

> 这是导航器的当前状态, 以及发送操作请求的事件通道

所有导航器都是受控组件:

* 它们总是显示通过 `props.navigation.state` 进入的内容

* 它们改变 `state` 的唯一方法就是将操作发送到 `props.navigation.dispatch`

导航器可以通过[【自定义路由器】](https://reactnavigation.org/docs/zh-Hans/custom-routers.html)向父导航器指定自定义行为

* 例如, 导航器可以通过从 `router.getStateForAction` 返回 `null` 来指定何时应该阻止操作

* 或者, 导航器可以通过覆盖 `router.getActionForPathAndParams` 来输出相关导航操作

  * 并在 `router.getStateForAction` 中处理该操作, 从而指定自定义 `URI` 处理

#### `Navigation State`

传递给导航器的 `props.navigation.state` 的 `navigation state` 具有以下结构:

```jsx
{
  index: 1, // identifies which route in the routes array is active
  routes: [
    {
      // Each route needs a name, which routers will use to associate each route
      // with a react component
      routeName: 'MyRouteName',

      // A unique id for this route, used to keep order in the routes array:
      key: 'myroute-123',

      // Routes can have any additional data. The included routers have `params`
      ...customRouteData,
    },
    ...moreRoutes,
  ]
}
```

#### `Navigation Dispatchers`

导航器可以调度导航操作, 例如

* `Go to a URI`
* `Go back`

如果操作成功处理

* 调度程序将返回 `true`
* 否则返回 `false`

### 用于构建自定义导航器的 `API`

为帮助开发人员实现自定义导航器, `React Navigation` 提供了以下公共方法:

* `createNavigator`

> 需要注意的是:
> * 在 `v2` 中 `createNavigator` 的 `API` 发生了变化
> * [【 `V1` 的文档在这儿】](https://v1.reactnavigation.org/docs/custom-navigators.html)

该公共方法以标准方式将[【路由】](https://reactnavigation.org/docs/zh-Hans/routers.html)和[【导航视图】](https://reactnavigation.org/docs/zh-Hans/navigation-views.html)组合在一起

```jsx
import { createNavigator } from "react-navigation";

const AppNavigator = createNavigator(NavigationView, router, navigationConfig);
```

新的 `AppNavigator` 可以这样渲染:

```jsx
<AppNavigator
  navigation={{ state, dispatch, addListener }}
  screenProps={...}
/>
```

然后视图将以下列方式渲染:

```jsx
<NavigationView
  screenProps={screenProps}
  navigation={navigation}
  navigationConfig={navigationConfig}
  descriptors={descriptors}
/>
```

`navigation prop` 与传递给导航器的 `navigation prop` 是相同的

* 正如上面所定义的, `navigationConfig` 和 `screenProps` 都是简单的传递

* 关于子页面的大部分信息都来自 `descriptors` 这个 `prop`

  * `descriptors` 是路由 `key` 对映页面 `descriptors` 的 `Map` 对象

  * 每个子路由都有一个 `descriptors`

### 场景描述符

场景描述符具有以下属性:

* `getComponent`

  一个返回页面组件的函数

* `options`

  路由的展平的 `navigationOptions`

* `navigation`

  子 `navigation prop` , 包括 `action` 和路由 `state`

* `route`

  子页面的 `navigation state`

  `navigation.state` 的快捷键

* `key`

  路由的关键字

  `navigation.state.key` 的快捷键

## 定制路由器

您可以通过构建具有以下功能的对象来创建自己的路由:

```jsx
const MyRouter = {
  getStateForAction: (action, state) => ({}),
  getActionForPathAndParams: (path, params) => null,
  getPathAndParamsForState: (state) => null,
  getComponentForState: (state) => MyScreen,
  getComponentForRouteName: (routeName) => MyScreen,
};

// Now, you can make a navigator by putting the router on it:
class MyNavigator extends React.Component {
  static router = MyRouter;
  render() {
    ...
  }
}
```

![图片](https://reactnavigation.org/docs/assets/routers/routers-concept-map.png)

### `getStateForAction(action, state)`

定义 `navigation state` 以响应给定的操作

* 当一个动作被传递到 `props.navigation.dispatch` 时

* 或者当调用任何 `helper` 函数时，如 `navigation.navigate`

通常这应该返回一个具有以下形式 `navigation state` ：

```jsx
{
  index: 1, // identifies which route in the routes array is active
  routes: [
    {
      // Each route needs a name to identify the type.
      routeName: 'MyRouteName',

      // A unique identifier for this route in the routes array:
      key: 'myroute-123',
      // (used to specify the re-ordering of routes)

      // Routes can have any data, as long as key and routeName are correct
      ...randomRouteData,
    },
    ...moreRoutes,
  ]
}
```

如果路由在外部处理 `action` ，或者想要在不改变 `navigation state` 的情况下执行 `action` ，则此函数将返回 `null`

### `getComponentForRouteName(routeName)`

返回给定路由名称的子组件或导航器

* `getStateForAction` 输出一个像这样的 `state` ：

```jsx
{
  index: 1,
  routes: [
    { key: 'A', routeName: 'Foo' },
    { key: 'B', routeName: 'Bar' },
  ],
}
```

* 根据 `state` 中的 `routeNames` ，路由负责在调用以下之一时返回有效的组件

  * `router.getComponentForRouteName（'Foo'）`
  * `router.getComponentForRouteName（'Bar'）`

### `getComponentForState(state)`

为深度 `navigation state` 返回当前的组件

### `getActionForPathAndParams(path, params)`

返回用户导航到此路径时应使用的可选导航操作，并提供可选的查询参数

### `getPathAndParamsForState(state)`

返回可放入 `URL` 的 `path` 和 `param` ，以将用户链接回应用程序中的同一位置

* 从此输出的 `path` / `params` 应该在传递回路由的 `getActionForPathAndParams` 时形成一个操作

* 一旦通过 `getStateForAction` 传递，该操作返回类似的 `state`

### `getScreenOptions(navigation, screenProps)`

用于检索页面的导航选项

> 必须提供页面当前的 `navigation prop` 和其他可用到的可选导航选项

* `navigation`

  这是页面将使用的 `navigation prop` ，其中 `state` 指的是页面的 `route` / `state`

  调度将触发该页面上下文中的 `action`

* `screenProps`

  导航选项可能会用到的其他 `prop`

* `navigationOptions`

  以前的一组选项，这些选项是默认的或由前一个配置提供的

在示例视图中，可能需要获取配置的标题：

```jsx
// First, prepare a navigation prop for your child, or re-use one if already available.
const screenNavigation = addNavigationHelpers({
  // In this case we use navigation.state.index because we want the title for the active route.
  state: navigation.state.routes[navigation.state.index],
  dispatch: navigation.dispatch,
});
const options = this.props.router.getScreenOptions(screenNavigation, {});
const title = options.title;
```

## 导航视图

> 导航视图是采用[【 `router` 】](https://reactnavigation.org/docs/en/routers.html)和[【 `navigation prop` 】](https://reactnavigation.org/docs/en/navigation-prop.html)的表示组件，并且可以显示多个页面，如 `navigation.state` 指定的那样

导航视图是可显示当前 `navigation.state` 的受控反应组件

* 他们管理页面、动画和手势的切换

* 它们还提供持久的导航视图，如选项卡栏和标题

### 内置视图

* [【 `Stackview` 】](https://github.com/react-navigation/react-navigation-stack/blob/master/src/views/StackView/StackView.js)

  显示一个适合任何平台的堆栈

  * [【 `Stackviewcard` 】](https://github.com/react-navigation/react-navigation-stack/blob/master/src/views/StackView/StackViewCard.js)

    从卡片堆中显示一张卡片，带有手势

  * [【 `Header` 】](https://github.com/react-navigation/react-navigation-stack/blob/master/src/views/Header/Header.js)

    卡堆栈的头部视图

* [【 `Switchview` 】](https://github.com/react-navigation/react-navigation-core/blob/master/src/views/SwitchView/SwitchView.js)

  一次只显示一个页面的导航器，对身份验证流很有用

* [【 `Tabs` 】](https://github.com/react-navigation/react-navigation-tabs)

  一个可配置的标签开关 / 寻呼机

* [【 `Drawer` 】](https://github.com/react-navigation/react-navigation-drawer)

  从左边滑动的抽屉视图

## 过渡器 `Transitioner`

`Transitioner` 是一个反应组件，帮助管理复杂动画组件的转换

* 它管理动画的时间安排，并在不同的屏幕进出时跟踪它们，但它不知道任何东西是什么样子的，因为渲染完全是由开发人员延迟的

* 在封面下，`Transitioner` 用于实现 `cardstack` ，从而实现堆栈导航器

* 传递者所做的最有用的事情是获取当前导航状态的属性

  * 当路由从该导航状态移除时，传递者将协调从这些路由的转换，即使它们已从该导航状态移除，也将它们保留在屏幕上

```jsx
class MyNavView extends Component {
  ...
  render() {
    return (
      <Transitioner
        configureTransition={this._configureTransition}
        navigation={this.props.navigation}
        render={this._render}
        onTransitionStart={this.onTransitionStart}
        onTransitionEnd={this.onTransitionEnd}
      />
    );
}
```

有关小而完整的工作示例，请参见[【 `NavigationPlayground` 】](https://github.com/react-navigation/react-navigation/tree/master/examples/NavigationPlayground)中的[【 `CustomTransitioner` 】](https://github.com/react-navigation/react-navigation/blob/master/examples/NavigationPlayground/js/CustomTransitioner.js)示例

### 查看属性 `Props`

* `configureTransition`

  `transitioner.componentwillreceiveProps` 上调用，此函数允许自定义动画参数，如 `duration` （持续时间）

  > 默认情况下，此函数返回的值将作为其配置输入计时函数 `animated.timing()`

  ```jsx
  _configureTransition(transitionProps, prevTransitionProps) {
    return {
      // duration in milliseconds, default: 250
      duration: 500,
      // An easing function from `Easing`, default: Easing.inOut(Easing.ease)
      easing: Easing.bounce,
    }
  }
  ```

  > 注：`duration` 和 `easing` 仅适用于时间功能已设置动画的情况

  * 我们还可以使用不同的定时函数及其相应的配置参数，如：

    ```jsx
    _configureTransition(transitionProps, prevTransitionProps) {
      return {
        // A timing function, default: Animated.timing.
        timing: Animated.spring,
        // Some parameters relevant to Animated.spring
        friction: 1,
        tension: 0.5,
      }
    }
    ```

  * 流程定义

    ```jsx
    configureTransition: (
      transitionProps: NavigationTransitionProps,
      prevTransitionProps: ?NavigationTransitionProps,
    ) => NavigationTransitionSpec,
    ```

  * 参数

    * `transitionProps`

      从当前导航状态和属性创建的当前[【 `NavigationTransitionProps`（导航转换属性）】](https://github.com/react-navigation/react-navigation/blob/master/flow/react-navigation.js)

    * `prevTransitionProps`

      以前的导航状态和属性创建的上一个[【 `NavigationTransitionProps`（导航转换属性）】](https://github.com/react-navigation/react-navigation/blob/master/flow/react-navigation.js)

  * 返回值

    类型为 `NavigationTransitionSpec` 的对象，将作为其配置输入动画计时函数

* `navigation`

  一个具有表示导航状态、路由和活动路由索引的状态的对象

  还包括调度和请求操作的其他方法

  ```jsx
  {
    // Index refers to the active child route in the routes array.
    index: 1,
    routes: [
      { key: 'DF2FGWGAS-12', routeName: 'ContactHome' },
      { key: 'DF2FGWGAS-13', routeName: 'ContactDetail', params: { personId: 123 } }
    ]
  }
  ```

  * 流程定义

    ```jsx
    export type NavigationState = {
      index: number,
      routes: Array<NavigationRoute>,
    };
    ```

  > [【有关 `NavigationRoute` 类型的详细信息，请查看其流程定义】](https://github.com/react-navigation/react-navigation/blob/master/flow/react-navigation.js)

* `render`

  从 `Transitioner.render()` 调用

  此函数执行从 `Transitioner` 委托的实际呈现

  在这个函数中，我们可以使用 `TransitionProps` 和 `PreviTransitionProps` 参数中包含的信息来渲染场景、创建动画和处理手势

  `TransitionProps` 和 `PreviTransitionProps` 参数的一些重要属性对上述任务有用：

  * `scenes:array<navigationscene>`

    所有可用场景的列表

  * `position: NavigationAnimatedValue`

    传递者导航状态的渐进索引

  * `progress: NavigationAnimatedValue`

    表示导航状态从一个切换到另一个时转换进度的值

    其数值范围为 `0` 到 `1`

  > [【有关 `NavigationTransitionProps` 的完整属性列表，请查看其流程定义】](https://github.com/react-navigation/react-navigation/blob/master/flow/react-navigation.js)

  * `transitionProps.scenes` 是所有可用场景的列表

    * 由实施者决定如何在屏幕上显示它们

    * 例如，我们可以将场景渲染为一堆卡片，如下所示：

      ```jsx
      _render(transitionProps, prevTransitionProps) {
        const scenes = transitionProps.scenes.map(scene => this._renderScene(transitionProps, scene));
        return (
          <View style={styles.stack}>
            {scenes}
          </View>
        );
      }
      ```

    * 然后我们可以使用一个 **`动画视图`** 来动画化转换

    * 要创建必要的动画样式属性（如 **`不透明度`** ），我们可以插入 `TransitionProps` 附带的位置和进度值：

      ```jsx
      _renderScene(transitionProps, scene) {
        const { position } = transitionProps;
        const { index } = scene;
        const opacity = position.interpolate({
          inputRange: [index-1, index, index+1],
          outputRange: [0, 1, 0],
        });
        // The prop `router` is populated when we call `createNavigator`.
        const Scene = this.props.router.getComponent(scene.route.routeName);
        return (
          <Animated.View style={{ opacity }}>
            { Scene }
          </Animated.View>
        )
      }
      ```

    * 上面的代码在转换期间创建交叉淡入淡出动画

    > 有关如何创建自定义过渡的综合教程，请参阅[【此博客文章】](http://www.reactnativediary.com/2016/12/20/navigation-experimental-custom-transition-1.html)

  * 流程定义

    ```jsx
    render: (transitionProps: NavigationTransitionProps, prevTransitionProps: ?NavigationTransitionProps) => React.Node,
    ```

  * 参数

    * `transitionProps`

      从当前状态和属性创建的当前[【 `NavigationTransitionProps`（导航转换属性）】](https://github.com/react-navigation/react-navigation/blob/master/flow/react-navigation.js)

    * `prevTransitionProps`

      从先前状态和属性创建的上一个[【 `NavigationTransitionProps`（导航转换属性）】](https://github.com/react-navigation/react-navigation/blob/master/flow/react-navigation.js)

  * 返回值

    将用于呈现 `Transitioner` 组件的 `ReactElement`

* `onTransitionStart`

  当转换动画即将开始时调用

  如果您从 `OnTransitionStart` 返回一个承诺，则在该承诺得到解决后，转换动画将开始

  * 流程定义

    ```jsx
    onTransitionStart: (transitionProps: NavigationTransitionProps, prevTransitionProps: ?NavigationTransitionProps) => (Promise | void),
    ```

  * 参数

    * `transitionProps`

      从当前状态和属性创建的当前[【 `NavigationTransitionProps`（导航转换属性）】](https://github.com/react-navigation/react-navigation/blob/master/flow/react-navigation.js)

    * `prevTransitionProps`

      从先前状态和属性创建的上一个[【 `NavigationTransitionProps`（导航转换属性）】](https://github.com/react-navigation/react-navigation/blob/master/flow/react-navigation.js)

  * 返回值

    承诺延迟过渡动画的开始，或不立即开始过渡动画

* `onTransitionEnd`

  在转换动画完成后调用

  如果您从 `OnTransitionEnd` 返回一个承诺，则在该承诺解决后，任何排队的转换动画都将开始

  * 流程定义

    ```jsx
    onTransitionEnd: () => void
    ```

  * 参数

    * 无

  * 返回值

    * 无

# 相关资源

[【更多官方文档信息请点击此处了解】](https://reactnavigation.org/docs/en/community-libraries-and-navigators.html)























































