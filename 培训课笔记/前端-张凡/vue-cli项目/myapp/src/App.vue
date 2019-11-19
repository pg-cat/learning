<template>
  <div id="app">

    <!-- 根据不同的路由，显示不同的组件 -->
    <router-view />


    <!-- 路由可以进行手动输入,也可以使用router-link进行页面跳转 -->
    <div class="tabbar">
      <div class="item">
        <router-link to="/">
          <img src="../static/img/icon.jpg" alt="">
          <p>主页</p>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/help">
          <img src="../static/img/icon.jpg" alt="">
          <p>帮助</p>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/list">
          <img src="../static/img/icon.jpg" alt="">
          <p>列表</p>
        </router-link>
      </div>


    </div>


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
  list-style: none;
}
img{
  width:50px;
  height:50px;
}
a{
  text-decoration:none;
  color:gray;
}
.item{
  text-align:center;
  width:100%;
  border:1px solid black;
}
.tabbar{
  display:flex;
  width:100%;
  position:fixed;
  left:0px;
  bottom:0px;
  background:white
}
</style>
