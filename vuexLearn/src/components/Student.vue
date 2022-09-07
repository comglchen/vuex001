<template>
  <div>
    <h1>这是Student组件</h1>
    <h2>VueXTest组件中的sum为{{ sum }}</h2>
    <input v-model="name" type="text" />
    <button @click="addStudent">添加</button>
    <button @click="addStudentChen">添加一个姓陈的学生</button>
    <button @click="addStudentServe">添加一个网上下载的姓名</button>
    <li v-for="s in $store.state.b.studentList" :key="s.id">
      {{ s.name }}
    </li>
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
      this.$store.commit("b/ADDStudent", studentObj);
      this.name = "";
    },
    addStudentChen() {
      const studentObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("b/addStudentChen", studentObj);
    },
    addStudentServe() {
      this.$store.dispatch("b/addStudentServe");
    },
  },
  computed: {
    sum() {
      return this.$store.state.a.sum;
    },
  },
  mounted() {},
};
</script>

<style>
</style>