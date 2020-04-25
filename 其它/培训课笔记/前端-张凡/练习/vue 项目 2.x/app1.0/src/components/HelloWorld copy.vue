<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msgNew }}</h2>
    <h3>{{ msgNum }}</h3>
    <h4>{{add}}</h4>
    <button @click="changeMsg">改变第一行的文字</button>
    <button @click="changeMsgActions">改变第二行的文字</button>
    <button @click="fun">改变第三行的文字</button>
    <button @click="changeMsgNum">再次改变了 str 的值</button>

    <Hello :level="1">Hello World</Hello>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Hello from "@/components/Hello";

export default {
  name: "HelloWorld",
  data() {
    return {
      // 获取 store 中的值
      msg: this.$store.state.str,
      // 获取 store 中 getters 里的方法的返回值
      msgNew: this.$store.getters.addStr,
      msgNum: this.$store.getters.addNum
    };
  },
  // 监控变量是否有变化，并进行更新
  computed:{
    // 此处把 add 这个变量与 store 中 state 下的 str 进行绑定
    ...mapState({
      add: state => state.str
      // 形同下三行写法
      // add(state){
      //   return state.str
      // }
    })
  },
  methods: {
    // 获取 store 的 mutations 中的方法
    changeMsg() {
      // 此处改变了 store 中 str 的值
      this.$store.commit("changeStr");

      this.msg = this.$store.state.str;
    },
    changeMsgNum:function(){
      this.$store.commit("changeNum");
      this.msg = this.$store.state.str;
    },
    // 获取 store 的 actions 中的方法
    changeMsgActions() {
      // 此处改变了 store 中 str 的值
      this.$store.dispatch("changeStr");

      this.msgNew = this.$store.state.str;
    },
    ...mapActions({
      fun: "changeStr"
    })
  },
  components: {
    Hello
  }
};
</script>

<style scoped>
</style>
