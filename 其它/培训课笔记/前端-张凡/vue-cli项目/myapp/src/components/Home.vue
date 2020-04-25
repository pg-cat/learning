<template>
  <div>

    <h1>这是home页面</h1>
    <button type="button" class="btn" @click="getData" name="button">获取数据</button>
    <ul v-for="item in contentarr">
      <Item :item-content="item.content"></Item>
    </ul>

  </div>
</template>
<script>
// vue中常用的插件axios
// 用来发送ajax请求的，并且更新速度非常快
import axios from 'axios'

let url = 'https://cnodejs.org/api/v1/topics'

// 引入子组件
import Item from './Item'

// 讲home模块暴露出去
export default{
  name:'Home',
  data(){
    return {
      contentarr:[]
    }
  },
  methods:{
    getData:function(){

      // 传递this
      let that = this;

      // console.log(this.contentarr);
      console.log(that.contentarr);

      // 直接可以使用axios
      axios.get(url).then(function(res){
        console.log(res.data.data);
        // 一旦使用了axios，那么此处的this指向不是app
        // console.log('this.contentarr=' + that.contentarr);
        that.contentarr = res.data.data
        // console.log();
      })

    }
  },
  // 注册组件
  components:{
    Item
  }
}

</script>
<style media="screen">
  .btn{
    width:100px;
    height:100px;
    background:pink;
  }
</style>
