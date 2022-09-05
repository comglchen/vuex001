<template>
  <div>
    <h1>当前计算结果为：{{ $store.state.sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">和为奇数时加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIA", this.n);
    },
    // increment() {
    //   this.$store.dispatch("jia", this.n);
    // },
    // decrement() {
    //   this.$store.dispatch("jian", this.n);
    // },
    incrementOdd() {
      {
        this.$store.dispatch("jiaOdd", this.n);
      }
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>
<style>
button {
  margin-left: 5px;
}
</style>