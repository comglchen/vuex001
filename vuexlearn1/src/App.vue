<template>
  <!DOCTYPE html>
  <html lang="">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    </head>
    <div class="mainContait">
      <div class="leftSide">
        <div class="linkA">
          <router-link class="routerLink" to="Home" active-class="active"
            >返回首页</router-link
          >
        </div>
        <div class="linkA">
          <router-link class="routerLink" to="About" active-class="active"
            >关于我们</router-link
          >
        </div>
      </div>
      <div class="viewComponent">
        <router-view></router-view>
      </div>
    </div>
  </html>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
}

.leftSide {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(131, 97, 56);
  width: 260px;
  height: 1000px;
}

.mainContait {
  display: flex;
  flex-direction: row;
}
.viewComponent {
  width: 100%;
  background-color: aquamarine;
  margin-left: 10px;
}
.active {
  background-color: rgb(11, 141, 56);
}
/* .router-link-exact-active {
  background-color: orange;
  color: #fff;
} */

/* .router-link-exact-active {
  border-bottom: 4px solid red;
} */

.routerLink {
  font-size: 20px;
  color: rgb(244, 246, 249);
  line-height: 38px;
  text-align: center;
  width: 150px;
  height: 38px;
}
.linkA {
  text-align: center;
  margin-top: 5px;
  width: 150px;
  height: 38px;

  border-radius: 5px;
  background-color: rgba(240, 248, 255, 0.505);
}
.linkA:visited {
  background-color: green;
}
</style>