<template>
  <div>
    <li v-for="st in staffList" :key="st.id">
      <router-link
        :to="{
          name: 'staffDetail',
          params: {
            id: st.id,
            name: st.name,
            age: st.age,
            addr: st.addr,
          },
        }"
      >
        {{ st.name }}</router-link
      >
    </li>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staffList: [
        { id: "001", name: "张工员", age: 23, addr: "上海" },
        { id: "002", name: "李小明", age: 33, addr: "北京" },
        { id: "003", name: "王一凡", age: 21, addr: "深圳" },
      ],
    };
  },
};
</script>

<style>
</style>