<template>
  <div class="min-[100px]:px-4 md:px-16">
    <h1 class="font-bold mb-1 font-normal mt-10 text-2xl mb-1">{{ moment.title }}</h1>
    <small class="text-gray-500">{{ moment.futureDate.slice(0, 10) }}</small>
    <p class="my-12 text-sm leading-5">
     {{ moment.details }}
    </p>
    <div class="text-center my-16 mb-24 flex">
      <router-link :to="'/event/'+ moment._id + '/edit'">
        <button class="btn bg-info mr-4">Edit</button>
      </router-link>
      
      <button @click="handleDelete" class="btn bg-danger">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Event',
  props: ['id'],
  data() {
    return {
      moment: ''
    }
  },
  async created() {

    try{
      const response = await axios.get('moment/'+ this.id)
      this.moment =  response.data.data
      
    } catch(err) {
      console.log('An error occurred!')
    }
  },
  methods:{
    async handleDelete() {
      await axios.delete('moment/'+ this.id)

      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
}
</script>