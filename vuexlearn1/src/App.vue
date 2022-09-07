<template>
  <div class="mainContait">
    <div class="leftSide">
      <span>
        <router-link to="Home">goto Home component</router-link>
      </span>
      <span>
        <router-link to="About">goto About component</router-link>
      </span>
    </div>
    <div class="viewComponent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
}
.leftSide {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(131, 97, 56);
  width: 150px;
  height: 800px;
}
span {
  width: 100px;
  height: 50px;
  background-color: antiquewhite;
  margin-top: 10px;
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
</style>