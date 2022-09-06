<template>
  <div>
    <h1>这是Student组件</h1>
    <h2>VueXTest组件中的sum为{{ sum }}</h2>
    <input v-model="name" type="text" /><button @click="addStudent">
      添加
    </button>
    <li v-for="s in $store.state.studentList" :key="s.id">{{ s.name }}</li>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addStudent() {
      const studentObj = { id: nanoid(), name: this.name };
      // this.$store.state.studentList.unshift(studentObj);
      this.$store.commit("ADDStudent", studentObj);
      this.name = "";
    },
  },
  computed: {
    sum() {
      return this.$store.state.sum;
    },
  },
};
</script>

<style>
</style>