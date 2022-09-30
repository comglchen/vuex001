<template>
  {{ person.name }}
  {{ person.sex }}
  {{ person.hobby }}
  {{ person.job.type }}
  <button @click="changeName">改变姓名</button>
  <button @click="changeName1">改变姓名1</button>
  <button @click="changeJob">改变工作</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { reactive, watchEffect } from "vue";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    changeName1() {
      console.log(this.person);
      this.person.hobby[1] = "看书";
    },
  },
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "工程师",
        salary: "30k",
      },
      hobby: ["打牌", "喝酒", "开车"],
    });
    function changeName() {
      person.name = "李四";
      console.log(person.name);
    }
    function changeJob() {
      person.job.type = "教师";
    }
    watchEffect(() => {
      console.log("工作被改变了。。。" + person.job.type);
    });
    return { person, changeName, changeJob };
  },
};
</script>

<style>
</style>
