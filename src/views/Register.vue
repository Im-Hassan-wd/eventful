<template>
  <form @submit.prevent="handleSignup" class="max-w-md mx-auto mt-16 min-[100px]:px-4 md:px-16">
    <h1 class="text-black text-2xl mb-6 font-semibold">Create an account,</h1>

    <Error v-if="error" :error="error" class="mb-6 bg-red-400 p-2 text-white rounded-sm inline-block" />

    <div class="mb-4">
      <label class="text-sm block">Full name</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="fullname" required />
    </div>
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
          Create
        </button>
    </div>
  </form>
</template>

<script>
import Error from '../components/Error'
import  axios from 'axios'

export default {
  name: 'Register',
  components: { Error },
  data() {
    return {
      fullname: 'Hassan Warwick',
      email: 'warwick@google.com',
      password: 'test123',
      error: ''
    }
  },
  methods: {
    async handleSignup() {

      try{

        const response = await axios.post('/users/signup', {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
        });

        if(!response.data.status_code === 200) {
          throw new Error(response.data.message)
        } else {
          this.$router.push('/login')
        }

      } catch(err) {
        this.error = 'user already exist, please login'
      }

    }
  }
}
</script>