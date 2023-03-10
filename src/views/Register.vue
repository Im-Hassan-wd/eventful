<template>
  <Nav :login="login" />
  
  <form class="max-w-md mx-auto mt-16 p-8">
    <h1 class="text-black text-xl mb-6">Create an account,</h1>

    <div class="mb-4">
      <label class="text-sm block">Full name</label>
      <input class="border w-72 rounded-md p-1" type="text">
    </div>
    <div class="mb-4">
      <label class="text-sm block">Email</label>
      <input class="border w-72 rounded-md p-1" type="email">
    </div>
    <div class="mb-4">
      <label class="text-sm block">Password</label>
      <input class="border w-72 rounded-md p-1" type="password">
    </div>
  </form>
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