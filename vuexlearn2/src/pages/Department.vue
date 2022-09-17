<template>
  <div class="container">
    <li v-for="d in depList" :key="d.id">
      <router-link :to="`/about/department/departmentdetail?detail=${d.job}`">
        {{ d.dep }}
      </router-link>
    </li>
    <div class="router-v">
      <router-view></router-view>
    </div>
    <input type="text" placeholder="请输入可以缓存的内容" />
    <button @click="pushShow()">退回到staff</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      depList: [
        { id: "001", dep: "人事部", job: "管理人事工作" },
        { id: "002", dep: "财务部", job: "管理财务工作" },
        { id: "003", dep: "法务部", job: "管理法务工作" },
      ],
    };
  },
  methods: {
    pushShow() {
      this.$router.push({
        name: "staff",
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.router-v {
  font-size: 20px;
}
.link-r {
  font-size: 30px;
  margin: 5px;
}

.container {
  height: 900px;
}
</style>