<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  <router-view></router-view>
  <img src="./assets/logo.png" alt="">
</template>

<script>

export default {
  name: "App",
  components: {  }
}
</script>

<style>
#app {
  text-align: center;
  margin: 64px auto;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
a {
  color: #000;
}
.router-link-active, .router-link-exact-active {
  color: crimson;
}
</style>
