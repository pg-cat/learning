<template>
  <div class="modelAdd">
    <table>
      <tr>
        <th>信息操作丨Info</th>
      </tr>
      <tr>
        <td width="20%">编号ID</td>
        <td width="80%">
          <input type="number" placeholder="请输入正整数数字" v-model="addData.id" />
        </td>
      </tr>
      <tr>
        <td>图片地址</td>
        <td>
          <input type="text" placeholder="请输入图片链接" v-model="addData.imgurl" />
        </td>
      </tr>
      <tr>
        <td>图片标题</td>
        <td>
          <input type="text" placeholder="请输入图片标题" v-model="addData.title" />
        </td>
      </tr>
      <tr>
        <td>跳转链接</td>
        <td>
          <input type="text" placeholder="请输入点击图片的跳转链接" v-model="addData.ahref" />
        </td>
      </tr>
      <tr>
        <td>
          <button @click="toAddData">确定</button>
        </td>
        <td>
          <button @click="toModelAddShow">取消</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ModelAdd",
  data() {
    return {
      addData: {
        id: null,
        imgurl: null,
        title: null,
        ahref: null
      }
    };
  },
  methods: {
    toModelAddShow: function() {
      this.$emit("emitModelAdd", false);
    },
    toAddData: function() {
      // 发送数据到父组件
      let addDataOne = {
        id: Number(this.addData.id),
        imgurl: this.addData.imgurl,
        title: this.addData.title,
        ahref: this.addData.ahref
      };
      this.$emit("emitModelAddData", addDataOne);

      // 清空 input 内的数据
      this.addData = {
        id: "",
        imgurl: "",
        title: "",
        ahref: ""
      };
    }
  }
};
</script>

<style scoped>
.modelAdd {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 9999999;
}
table {
  width: 777px;
  overflow: hidden;
  margin: 100px auto;
  padding: 20px;
  background: #fff;
}
tr {
  overflow: hidden;
}
th {
  font-size: 20px;
  text-align: left;
}
td {
  height: 70px;
  overflow: hidden;
  padding: 10px 0;
}
td:first-child {
  text-align: right;
  padding-right: 13px;
}
input {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 7px;
}
button {
  width: 100px;
  overflow: hidden;
  color: #fff;
  line-height: 33px;
  background: skyblue;
  border-color: skyblue;
  border-radius: 5px;
  cursor: pointer;
}
td:last-child button {
  background: pink;
  border-color: pink;
}
</style>
