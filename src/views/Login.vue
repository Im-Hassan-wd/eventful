<template>
  <Nav :login="login" />
  <h1>Login</h1>
</template>

<script>
import Nav from '../components/Nav'

export default {
  components: {
    Nav
  },
  data() {
    return {
      login: false
    }
  }
}
</script>

<style>

</style>