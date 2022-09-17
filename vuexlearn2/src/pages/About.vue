<template>
  <div>
    <el-tag
      ><router-link
        to="/about/department"
        class="link-router"
        active-class="active"
      >
        公司部门
      </router-link></el-tag
    ><el-tag
      ><router-link to="/about/staff" class="link-router" active-class="active">
        公司人员
      </router-link></el-tag
    >
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.link-router {
  font-size: 20px;
}
</style>