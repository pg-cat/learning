<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <H2 :str-ing='abc' />
  </div>
</template>

<script>
import H2 from "./H2";

export default {
  name: "HelloWorld",
  data(){
    return {
      abc:'str 的值'
    }
  },
  components: {
    H2
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
