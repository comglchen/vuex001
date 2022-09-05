<template>
  <div>
    <h1>当前计算结果为：{{ sum }}</h1>
    <h2>sum放大十倍：{{ $store.getters.bigsum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">和为奇数时加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    //对象写法：
    ...mapState({ sum: "sum" }),
    //数组写法：
    // ...mapState(["sum"]),
  },
  methods: {
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // increment() {
    //   this.$store.dispatch("jia", this.n);
    // },
    // decrement() {
    //   this.$store.dispatch("jian", this.n);
    // },
    // incrementOdd() {
    //   {
    //     this.$store.dispatch("jiaOdd", this.n);
    //   }
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
};
</script>
<style>
button {
  margin-left: 5px;
}
</style>