<template>
  <div v-html="itemContent"></div>
</template>
<script>

// 讲home模块暴露出去
export default{
  name:'Item',
  props:{
    itemContent:String
  }
}

</script>
