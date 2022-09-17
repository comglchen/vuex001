<template>
  <div>
    姓名：{{ $route.params.name }} 年龄：{{ $route.params.age }}住址：{{
      $route.params.addr
    }}
  </div>
</template>

<script>
export default {
  //props: ["a", "b"],//接受route中的传值
};
</script>

<style>
</style>