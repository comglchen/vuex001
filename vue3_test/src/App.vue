<template></template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { h } from "vue";
export default {
  name: "App",
  setup() {
    return () => h("h1", "你好呀！");
  },
};
</script>

<style>
</style>
