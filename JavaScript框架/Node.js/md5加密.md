# md5

## js-md5 插件

目前 vue 最推荐的 md5 加密插件，用法非常简单，而且安全措施比较好

```cmd
npm install --save-dev js-md5
```

- 安装成功之后，一般会在 src 文件夹下，新建一个 plugins 的文件夹

- 在该文件夹下新建 js 文件，引入该插件

  - 暴露该插件的安装方法

  ```js
  import md5 from 'js-md5';
  export default {
    install: function (Vue) {
      Object.defineProperty(Vue.prototype, '$md5' , { value : md5 })
    }
  }
  ```

- 在 main.js 中,引入刚才写的 md5.js 文件，并且 vue.use 执行一次

- 在 vue 文件中使用的时候，需要将其在 mounted 生命周期函数中进行使用

```js
mounted(){
  let data = this.$md5(this.password);
  console.log(data);
}
```

## 注册的流程

发送 ajax 请求，向服务器请求 openID ，该 openID 是服务器隔一段时间换一个的内容

> 发送 ajax 请求的时候，需要将 openID 拼接到密码上面
