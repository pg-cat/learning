<template>
  <div class="hello">
    <h1>state：{{ msg }}</h1>
    <h2>getters：{{ msgNew }}</h2>
    <h3>state：{{ count }}</h3>
    <h4>getters：{{ getMsgNew }}</h4>
    <button @click='addMut(1)'>Mut+</button>
    <button @click='remMut(2)'>Mut-</button>
    <button @click='add'>Mut +</button>
    <button @click='rem'>Mut -</button>
    <button @click='addAct(1)'>Act +</button>
    <button @click='remAct(2)'>Act -</button>

    <Hello :level="1">Hello World</Hello>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import Hello from "@/components/Hello";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: this.$store.state.count,
      msgNew: this.$store.getters.document
    };
  },
  computed: {
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters({
      getMsgNew:'document'
    })
  },
  methods: {
    ...mapMutations({
      addMut:'SET_COUNT_ADD',
      remMut:'SET_COUNT_REM'
    }),
    add(){
      this.addMut(3)
    },
    rem(){
      this.remMut(3)
    },
    ...mapActions({
      addAct:'ADD',
      remAct:'REM'
    })
  },
  components: {
    Hello
  }
};
</script>

<style scoped>
</style>
