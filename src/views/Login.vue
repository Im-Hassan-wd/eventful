<template>
  <Nav :login="login" />

  <form @submit.prevent="handleSubmit" class="max-w-md mx-auto mt-16 min-[100px]:px-4 md:px-16">
    <h1 class="text-black text-2xl font-semibold">Welcome back,</h1>
    <p class="my-4">Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water but I store awesome moments you will like to have in coming years.</p>

    <div class="mb-4">
      <label class="text-sm block">Email</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="email" required v-model="email" />
    </div>
    <div class="mb-4">
      <label class="text-sm block">Password</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="password" required v-model="password" />
    </div>

    <div class="text-center mt-8">
      <button class="bg-secondary text-white py-2 px-3 w-36 rounded-md text-sm">
        Login
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import Nav from '../components/Nav'

export default {
  components: {
    Nav
  },
  data() {
    return {
      login: false,
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit () {
      const res = await axios.post('login', {
        email: this.email,
        password: this.password
      })

      localStorage.setItem('token', res.data.token)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>