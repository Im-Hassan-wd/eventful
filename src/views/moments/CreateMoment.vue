<template>
  <form @submit.prevent="handleSubmit" class="max-w-md mt-8 mb-24 min-[100px]:px-4 md:px-16">
    <div class="mb-4">
      <label class="text-sm block">Date in the future</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="futureDate" placeholder="MM-DD-YYYY" required>
      <Error v-if="error" :error="error" />
    </div>
    <div class="mb-4">
      <label class="text-sm block">Title</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="title" required>
    </div>
    <div class="mb-4">
      <label class="text-sm block">Details</label>
      <textarea class="border w-full sm:w-96 rounded-md p-1" name="" id="" cols="30" rows="8" v-model="details" required></textarea>
    </div>

    <div class="text-center mt-8">
      <button class="btn bg-secondary">Save</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import Error from '../../components/Error'

export default {
  name: 'CreateEvent',
  components: { Error },
  data() {
    return {
      title: '',
      details: '',
      futureDate: '',
      error: null,
    }
  },
  methods: {
    async handleSubmit() {

      try{
        const response = await axios.post('moment', {
          title: this.title,
          details: this.details,
          futureDate: this.futureDate
        })

        if(!response.status === '200') {
          throw new Error(response.statusText)
        } else {
          this.$router.push('/')
        }

      } catch(err) {
        this.error = 'Must be a valid date'
      }

    }
  }
}
</script>