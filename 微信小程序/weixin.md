```
关于语言学习:
1、环境
2、hello world
3、变量
4、数据类型
5、类型转换
6、运算符（算数、字符、赋值、比较、逻辑、位移）
7、流程控制（if else）
8、循环控制
9、函数、数组
10、面向对象
11、包管理工具（composer 丨 npm 丨 pip）
```

> 微信小程序是一种不需要下载安装即可使用的应用

> 附加资料：
>> [微信开放社区](https://developers.weixin.qq.com/community/) 丨
[微信公众平台 API](https://developers.weixin.qq.com/miniprogram/dev/api/) 丨
[微信小程序开发资源汇总](https://github.com/justjavac/awesome-wechat-weapp)

## 目录结构

* pages

  小程序的页面

  * 小程序会默认打开 pages 中第一个页面的内容

  * pages 中配置页面路径后，小程序会自动创建相应的文件及文件夹

* utils

  工具包

* app.js

  逻辑代码区

* app.json

  配置文件

  [window 页面配置项列表](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#页面配置)

* app.wxss

  样式文件

* project.config.json

  项目的配置文件

## 页面目录结构

* .js

  逻辑区、数据、事件

* .json

  配置文件

* .wxml

  页面结构

  [页面布局可用组件列表](https://developers.weixin.qq.com/miniprogram/dev/component/)

  * 使用 `view` 标签布局

  * scroll-view

    可滚动视图区域，做滑动菜单效果

  * swiper

    滑块视图容器，做左右滑动浏览页面效果

    * 和 swiper-item 一起使用，类似 ul 和 li

    * 隐藏滚动条方法，在css样式中随处加上以下代码：

      ```css
      ::-webkit-scrollbar{
          width: 0;
          height: 0;
          color: transparent;
      }
      ```

  * text

  * navigator

  * image

* .wxss

  样式文件

  * 就近原则，谁离 wxml 文件近，优先使用谁

  * 距离单位使用 rpx ，小程序规定整个屏幕的宽度是 750rpx

---

注意事项：

* 测试接口请求失败时

  `设置 -> 项目设置 -> 不校验合法域名`

* 动态数据的解析

  `that.setData({[key]: res.data.data})`