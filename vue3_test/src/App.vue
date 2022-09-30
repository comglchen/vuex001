<template>
  x坐标为：{{ point.x }} y坐标为：{{ point.y }}
  <hr />
  <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import usePoint from "./usePoint/getPoint";

export default {
  name: "App",
  components: { HelloWorld, HelloWorld },
  setup() {
    let point = usePoint();
    console.log(point);
    return { point };
  },
};
</script>

<style>
</style>
