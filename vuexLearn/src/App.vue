<template>
  <div class="appdiv"><VueXTest></VueXTest></div>
</template>


 

<script>
import VueXTest from "./components/VueXTest";

export default {
  components: {
    VueXTest,
  },
  mounted() {
    console.log("App", this);
  },
};
</script>

<style>
</style>