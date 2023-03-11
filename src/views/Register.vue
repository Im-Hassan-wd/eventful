<template>
  <Nav :login="login" />
  
  <form class="max-w-md mx-auto mt-16 px-16">
    <h1 class="text-black text-2xl mb-6 font-semibold">Create an account,</h1>

    <div class="mb-4">
      <label class="text-sm block">Full name</label>
      <input class="border w-96 rounded-md p-1" type="text">
    </div>
    <div class="mb-4">
      <label class="text-sm block">Email</label>
      <input class="border w-96 rounded-md p-1" type="email">
    </div>
    <div class="mb-4">
      <label class="text-sm block">Password</label>
      <input class="border w-96 rounded-md p-1" type="password">
    </div>

    <div class="text-center mt-8">
      <button class="bg-secondary text-white py-2 px-3 w-36 rounded-md text-sm">Create</button>
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