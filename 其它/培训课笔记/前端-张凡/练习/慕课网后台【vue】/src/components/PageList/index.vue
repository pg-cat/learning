<template>
  <div>
    <span v-for="(item,index) in num" :key="index">
      <span @click='getListLen(item)'>{{item}}</span>
    </span>
    <span>总计：{{allNum}} 条</span>
  </div>
</template>

<script>
export default {
  name: "PageList",
  props: {
    num: Number,
    allNum: Number,
    getListLen: Function
  }
};
</script>

<style scoped>
div{
  overflow: hidden;
}
div > span{
  overflow: hidden;
}
div span span {
  margin: 0 5px;
  padding: 7px 13px;
  display: inline-block;
  color: #333;
  border: #333 1px solid;
  cursor: pointer;
}
</style>
