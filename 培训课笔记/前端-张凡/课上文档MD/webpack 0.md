# webpack
---

webpack是模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理,它能有Grunt或Gulp所有基本功能。webpack的官网是 https://webpack.github.io/ ，文档地址是https://webpack.github.io/docs，官网对webpack的定义是MODULE BUNDLER，他的目的就是把有依赖关系的各种文件打包成一系列的静态资源。

## webpack安装

  使用webpack，需要安装两个内容：

  首先是webpack本体

    npm install -g webpack

  其次是webpack-cli，也就是webpack的脚手架

    npm install -g webpack-cli

*在mac/linux中，如果电脑自带了nodejs，之后直接安装新版node以及npm，可能会使webpack全局无效，所以建议每次在项目文件夹都将这两个工具安装到项目依赖中：*

    npm install --save-dev webpack webpack-cli

## 使用webpack创建项目

  在空文件夹内，使用npm init命令创建新的项目，会在文件夹内生成一个package.json文件，这是该项目的配置文件。

### package.json

~~~json
{
  "name": "WebpackApp",// 项目名称
  "version": "1.0.0",// 项目版本
  "description": "",// 项目描述
  "main": "index.js",// 项目入口文件
  "scripts": {// 项目命令行配置
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

~~~

  如果要使用webpack，那么在项目目录一般需要手动建立一个webpack.config.js的配置文件。

### wepback.config.js

~~~JavaScript

const path = require('path');

module.exports = {
  mode:'development',
  entry:'./main.js', // 此处声明webpack的入口文件地址
  output:{
    path:path.resolve(__dirname,'dist'),   // 打包后的输出文件所在地址
    filename:'bundle.js'   // 输出文件的名称 bundle.js
  }
}

~~~

  简单来说，该文件规定main.js是webpack打包资源的入口/主文件，并且最终会将打包后的文件输出到dist文件夹内。

  那么此处我们遵循以上内容，并且补充部分必要文件，完成以下目录结构：

    ├── dist
    ├── main.js
    ├── package.json
    ├── src
    │   ├── javascript
    │   │   ├── jquery.js
    │   │   └── swiper.js
    │   └── less
    │       └── main.less
    └── webpack.config.js

  swiper.js是我们自己写的js文件，他要和main.less进行打包整合，最终引入项目，这里main.js作为入口文件，需要将这两个文件引入。

### main.js

~~~JavaScript
// 引入轮播图的JS文件
import swiper from './src/javascript/swiper.js';

// 引入页面主要样式main.less
import './src/less/main.less';

swiper.ppt(); // 调用swiper中的函数
~~~

  之后直接在终端执行webpack，发现出现错误，less不能够直接被解析，这个问题在grunt中讲过，这里需要安装webpack的支持less的loader

    npm install --save-dev style-loader css-loader less-loader

  这三个webpack的依赖是解析css和less使用的，安装完毕之后，需要在webpack的配置文件中添加loader的相关配置代码。其中，需要注意less在webpack中的解析顺序是less-loader=>css-loader=>style-loader。所以在书写配置文件的时候，需要按照从下向上的顺序书写，否则会出现解析错误

~~~javascript
module:{
  rules:[
    {
      test:/\.css$/,    // 解析css style的插件，以.css未结尾的文件都会被解析并且压缩
      use:[
        'style-loader',
        'css-loader',
      ]
    },
    {
      test:/\.less$/,
      use:[
        'style-loader',
        'css-loader',
        'less-loader',
      ]
    }
  ]
}
~~~
