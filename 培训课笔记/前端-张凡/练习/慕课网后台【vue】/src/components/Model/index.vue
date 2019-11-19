<template>
  <div class="model" :style="topModel">
    <table border="0" cellspping="0" cellspacing="0">
      <tr>
        <!-- <td width="200px">
          <input type="number" placeholder="请输入ID" v-model="upData.id" />
        </td> -->
        <td width="250px">
          <input type="text" placeholder="请输入图片链接" v-model="upData.imgurl" />
        </td>
        <td width="300px">
          <input type="text" placeholder="请输入图片标题" v-model="upData.title" />
        </td>
        <td width="300px">
          <input type="text" placeholder="请输入点击图片的跳转链接" v-model="upData.ahref" />
        </td>
        <td>
          <button @click="toDataFalse">取消</button>
          <button class="su" @click="toData">确定</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Model",
  data() {
    return {
      upData: {
        // id: null,
        imgurl: null,
        title: null,
        ahref: null
      }
    };
  },
  props: {
    topModel: String
  },
  methods: {
    toDataFalse:function(){
      this.$emit("emitModelShowFalse", false);
    },
    toData: function() {
      // 发送数据到父组件
      let upDataOne = {
        id: Number(this.upData.id),
        imgurl: this.upData.imgurl,
        title: this.upData.title,
        ahref: this.upData.ahref
      };
      this.$emit("emitModelupData", upDataOne);

      // 清空 input 内的数据
      this.upData = {
        // id: null,
        imgurl: null,
        title: null,
        ahref: null
      };
    }
  }
};
</script>

<style scoped>
.model {
  overflow: hidden;
  background: white;
  position: absolute;
  left: 400px;
}
tr {
  overflow: hidden;
}
td {
  height: 35px;
  overflow: hidden;
  padding: 5px;
  line-height: 35px;
}
td:last-child{
  padding-left: 118px;
}
input {
  width: 100%;
  height: 33px;
  overflow: hidden;
  padding: 0 3px;
  line-height: 35px;
  outline: none;
  border-color: #ccc;
  box-sizing: border-box;
}
button {
  padding: 7px 14px;
  color: white;
  background: pink;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
}
button.su{
  background: skyblue;
}
</style>
