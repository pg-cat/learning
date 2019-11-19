<template>
  <div class="app-container">
    <div class="btnAdd">
      <button @click="modelAddShow">添加</button>
    </div>
    <ModelAdd v-show="showModelAdd" @emitModelAdd="getModelAddShow" @emitModelAddData="addImgOne" />
    <table v-loading="listloading" border="0" cellspping="0" cellspacing="0">
      <Model
        v-show="showModel"
        @emitModel="getModelShow"
        :topModel="topModelStr"
        @emitModelupData="updateImgOne"
        @emitModelShowFalse="ModelShowFalse"
      />
      <tr>
        <td width="200px">排序</td>
        <td width="200px">编号ID</td>
        <td width="250px">图片</td>
        <td width="300px">图片标题</td>
        <td width="300px">跳转链接</td>
        <td>操作</td>
      </tr>
      <tr v-for="(item,index) in list" :key="index">
        <td>{{index+1}}</td>
        <td>{{item.id}}</td>
        <td>
          <img width="100" v-bind:src="item.imgurl" />
        </td>
        <td>{{item.title}}</td>
        <td>{{item.ahref}}</td>
        <td>
          <button class="rm" @click="remImgOne(item.id)">删除</button>
          <button class="up" @click="modelShow(item.id,index+1)">修改</button>
        </td>
      </tr>
    </table>
    <div class="pages">
      <PageList :num="pageAllLen" :allNum="allLen" :getListLen="getImgAllData" />
    </div>
  </div>
</template>

<script>
// 引入请求的方法
import {
  getImgData,
  getImgLen,
  addImg,
  remImg,
  updateImg
} from "@/api/article";

// 引入组件
import ModelAdd from "@/components/ModelAdd";
import Model from "@/components/Model";
import PageList from "@/components/PageList";

export default {
  name: "Ppt",
  data() {
    return {
      // 页面渲染的数据
      list: [],

      // 数据总数
      allLen: 0,
      // 每页数量
      pageLen: 5,
      // 总页数
      pageAllLen: 0,

      // 懒加载状态
      listloading: true,

      // 添加 的弹出层的状态
      showModelAdd: false,

      // 修改 的弹出层的状态
      showModel: false,
      // 修改 的弹出层的 位置
      topModelStr: "top:51px",

      // 当前被点击的是哪一行，用以在 list 中获取 id
      id:null
    };
  },
  created() {
    this.getImgAllData();
  },
  methods: {
    // 添加 的弹出层的 显示
    modelAddShow: function() {
      this.showModelAdd = true;
    },

    // 接收子组件的传值，并隐藏 添加 的弹出层
    getModelAddShow: function(data) {
      this.showModelAdd = data;
    },

    // 修改 的弹出层的 显示，改变 topModelStr 的值
    modelShow: function(id,n) {
      this.id = id;
      this.showModel = true;
      this.topModelStr = "top:" + n * 46 + "px";
    },

    // 接收子组件的传值，用以隐藏子组件
    ModelShowFalse: function(data) {
      this.showModel = data;
    },

    // 接收子组件的传值
    getModelShow: function(data) {
      this.showModel = data;
    },

    // 获取分页数据
    getImgAllData: function(num = 1) {
      const that = this;
      getImgData("http://127.0.0.1:3000/imgGet", num, that.pageLen, function(
        res
      ) {
        that.list = res.data;
        that.listloading = false;
        that.getImgAllLen();
      });
    },

    // 获取所有数据的总长度
    getImgAllLen: function() {
      const that = this;
      getImgLen("http://127.0.0.1:3000/imgLen", function(res) {
        that.allLen = res.data;
        that.pageAllLen = Math.ceil(that.allLen / that.pageLen);
      });
    },

    // 添加一条数据
    addImgOne: function(obj) {
      const that = this;
      addImg("http://127.0.0.1:3000/imgAdd", JSON.stringify(obj), function() {
        console.log("添加成功");
        that.getImgAllData();
        that.showModelAdd = false;
      });
    },

    // 删除一条数据
    remImgOne: function(id) {
      const that = this;
      remImg("http://127.0.0.1:3000/imgRem", id, function(res) {
        console.log("删除成功");
        that.getImgAllData();
      });
    },

    // 更新一条数据
    updateImgOne: function(obj) {
      obj.id = this.id;

      const that = this;
      updateImg(
        "http://127.0.0.1:3000/imgUpdate",
        JSON.stringify(obj),
        function(res) {
          console.log("更新成功");
          console.log(res)
          that.getImgAllData();
          that.showModel = false;
        }
      );
    }
  },
  components: {
    ModelAdd,
    Model,
    PageList
  }
};
</script>

<style scoped>
.btnAdd {
  overflow: hidden;
  margin-bottom: 20px;
}
button {
  padding: 7px 14px;
  color: white;
  background: skyblue;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
}
table {
  width: 100%;
  overflow: hidden;
  border-top: #eee 1px solid;
  position: relative;
}
td {
  height: 35px;
  overflow: hidden;
  padding: 5px;
  text-align: center;
  line-height: 35px;
  border-bottom: #eee 1px solid;
}
.pages {
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
button.rm {
  background: brown;
}
button.up {
  background: orange;
}
</style>
