<template>
  <form @submit.prevent="handleLogin" class="max-w-md mx-auto mt-16 min-[100px]:px-4 md:px-16">
    <h1 class="text-black text-2xl font-semibold">Welcome back,</h1>
    <p class="my-4">Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water but I store awesome moments you will like to have in coming years.</p>

    <Error v-if="error" :error="error" class="mb-6 bg-red-400 p-2 text-white rounded-sm inline-block" />

    <div class="mb-4">
      <label class="text-sm block">Email</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="email" v-model="email" required />
    </div>
    <div class="mb-4">
      <label class="text-sm block">Password</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="password" v-model="password" required />
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
import Error from '../components/Error'

export default {
  name: 'Login',
  components: { Error },
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async handleLogin() {
      try{

        const response = await axios.post('users/login', {
          email: this.email,
          password: this.password
        });  
  
        localStorage.setItem('token', response.data.token)
        this.$store.dispatch('user', response.data.user)
  
        this.$router.push('/')

      } catch(err) {
        this.error = 'incorrect email or password'
      }

    }
  }
}
</script>