<template>
  <div class="hello">x坐标为：{{ point.x }},y坐标为：{{ point.y }}</div>
</template>

<script>
import usePoint from "../usePoint/getPoint";
export default {
  setup() {
    let point = usePoint();
    return { point };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
