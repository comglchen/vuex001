<template>
  <div>
    <h1>这是App首页</h1>

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu>
            <el-menu-item>
              <router-link to="/home" class="link-router" active-class="active">
                返回首页
              </router-link>
            </el-menu-item>

            <el-menu-item>
              <router-link
                to="/about"
                class="link-router"
                active-class="active"
              >
                关于我们
              </router-link></el-menu-item
            >
          </el-menu>
        </el-aside>
        <el-container>
          <el-main><router-view class="v-router"></router-view> </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style >
li {
  line-height: 40px;
  font-size: 30px;
}
.link-router {
  font-size: 20px;
}
.v-router {
  font-size: 48px;
}
.active {
  color: red;
}
a {
  text-decoration: none;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>