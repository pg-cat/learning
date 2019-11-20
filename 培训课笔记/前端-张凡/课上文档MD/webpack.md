# webpack 打包工具

    用来压缩代码，去掉注释，执行一些简单的架构的工具，一般在前端工作中是必备的

##  安装

    由于更新团队不够专业，文档更新跟不上实际更新的内容，所以在这里需要执行一些不必要的操作，同学们在之后的学习或者工作中视具体情况而定

    第一部分:webpack本体

    npm install -g webpack

    在linux中 sudo npm install -g webpack

    第二部分，webpack的脚手架:webpack-cli

    安装方式和上面相同

    如果在项目文件中需要使用webpack，那么记得执行--save-dev

## 测试/使用

    如果webpack安装成功，那么可以使用简单的例子，进行压缩尝试执行webpack

    如果在没有任何配置文件的情况下，可以进行如下操作

    webpack 要压缩的文件 -o 压缩完毕的文件

## 用webpack 初始化项目

    在空的文件夹中，执行npm init -y

    npm install webpack webpack-cli --save-dev

    --save 用于生产版本

    --save-dev 用于开发者版本

##  export default 和 import

    export default 是向外暴露模块，你想要别的文件使用当前文件的哪个方法或者对象，就将它暴露出去

    import 是引入文件的意思

    import 方法/对象 form 所在文件

    从某个文件引入某个方法

## 模式 mode

    development    开发者模式

    production     生产版本

## webpack的服务

    在控制台执行webpack --watch 监听文件改变之后，重新生成文件

    如果css/less写错了，可以再控制台/命令行直接看到报错信息

    如果，需要用到更先进的服务，那么需要安装webpack-dev-server

    npm install -g webpack-dev-server

    和

    npm install --save-dev webpack-dev-server

    安装完毕之后，直接执行webpack-dev-server会直接开始监听服务

    监听服务之后，发现他监听的是默认的文件夹

    需要书写服务配置文件，并且让项目满足整个服务需求

## 配置服务监听的开启命令

    在package.json文件中，找到script对象，并且向里面添加监听命令

~~~json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"webpack-dev-server"
  }

~~~

    在webpack中，webpack-dev只能用在开发模式下，需要在webpack的配置文件中，添加以下内容:

~~~JavaScript

devserver:{
  contentBase:path.resolve(__dirname,'dist'),
  compress:true,
  port:9000
}

~~~

    当服务运行起来之后，静态文件中的图片不见了

    每个服务运行之后，静态文件夹都需要重新定义位置

<font color="red">GET http://localhost:9000/static/img/5.jpg 404 (Not Found)</font>

    该错误说，在默认文件夹的static/img里面没有图片

    我们将static文件夹放入了dist文件夹内，这样来保证页面不会出现问题
