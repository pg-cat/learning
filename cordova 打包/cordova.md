# cordova

本地打包工具，他可以和 vue 完美结合

本节课仅仅是为了测试同学们的环境，避免出现打包问题

## 新建 cordova 项目

`cordova create 项目名称`

## 添加安卓平台依赖

`cordova platform add android`

## 用 dist 里面内容，替换 cordova 里面的内容

dist 里面的内容替换掉 cordova 项目中的 www 目录下的所有内容

## cordova 打包制作 APP

- 先配置 JDK 环境变量

  配置成功后可在命令行输入 `javac` 验证

- 再配置 SDK 环境变量

  配置成功后可在命令行输入 `android` 验证

- 前两步成功后，安装最新版的 gradle ，它会自动向下兼容版本

- 进入当前项目文件侠，命令行输入 `cordova run android` 进行打包制作 APP 即可
