<template>
<div v-if="authIsReady">
  <div v-if="user" class="min-[100px]:px-4 md:px-16">
    <div class="md:flex justify-between items-center my-12">
      <div class="mb-4">
        <h1 class="text-black text-2xl mb-1 font-semibold">Welcome {{ user.fullname }},</h1>
        <p>Here are items in your eventful moment bucket.</p>
      </div>
      <router-link to="/new-moment">
        <button class="btn bg-secondary">Add Item</button>
      </router-link>
    </div>

    <div v-if="moments.length" class="my-8 grid lg:grid-cols-2 gap-10 mb-24">
      <!-- card -->
      <div v-for="moment in moments" :key="moment.id" class="flex flex-col shadow p-5 rounded hover:bg-active">
          <h4 class="font-bold text-base mb-4">{{ moment.title }}</h4>
          <p class="mb-1 details text-sm leading-7">{{ moment.details }}</p>
          <div class="mt-4 flex items-center justify-between mt-auto">
            <router-link class="grow mt-4" :to="{ name: 'MomentDetails', params: { id: moment._id } }">
              <small class="text-secondary">View Details</small>
            </router-link>
            <small class="text-gray-300 px-5">{{ moment.createdAt.slice(0, 10) }}</small>
            <small flex flex-col>{{ moment.updatedAt.slice(0, 10) }}</small>
          </div>
      </div>
    </div>

    <div v-else class="font-bold text-base mb-4">There is no item in your bucket</div>

    <div v-if="moments.length > 4" class="text-center mb-24">
      <button class="btn bg-secondary">Load More</button>
    </div>
  </div>
</div>
  <h2 v-if="!user" class="text-2xl text-gray-700 m-3">Please loin to view moments</h2>
</template>

<script>
import axios from 'axios'
import { watchEffect } from 'vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      moments: [],
      authIsReady: false
    }
  },
  async created() {
    const response = await axios.get('users/me')
    const data =  response.data.data[0]
    this.moments = data.moments

    if(data) {
      this.$store.dispatch('user', data)
      this.authIsReady = this.$store.state.authIsReady
    } 
    if (!data) {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
}
</script>
<style>
.details {
  display: -webkit-box;
  -webkit-line-clamp: 6; 
  -webkit-box-orient: vertical; 
  overflow: hidden;
}
</style>