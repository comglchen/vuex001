<template>
  <div>
    <li v-for="(st, index) in staffList" :key="index">{{ st }}</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staffList: ["张工员", "李小明", "邓友华"],
    };
  },
};
</script>

<style>
</style>