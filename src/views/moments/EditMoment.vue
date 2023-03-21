<template>
  <form @submit.prevent="handleEdit" class="max-w-md mt-8 min-[100px]:px-4 md:px-16 mb-24" >
    <div class="mb-4">
      <label class="text-sm block">Date in the future</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="futureDate" required placeholder="MM-DD-YYY" />
      <Error v-if="error" :error="error" />
    </div>
    <div class="mb-4">
      <label class="text-sm block">Title</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="title" required />
    </div>
    <div class="mb-4">
      <label class="text-sm block">Details</label>
      <textarea class="border w-full sm:w-96 rounded-md p-1" name="" id="" cols="30" rows="8" v-model="details" required></textarea>
    </div>

    <div class="text-center mt-8">
      <button class="btn bg-secondary">Update</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import Error from '../../components/Error'

export default {
  name: 'EditEvent',
  components: { Error },
  data() {
    return {
      futureDate: '',
      title: '',
      details: '',
      id: '',
      error: null
    }
  },
  async created() {
    this.id = this.$router.currentRoute._rawValue.params.id
    try{
        const response = await axios.get(`moment/${this.id}`)
        this.title = response.data.data.title
        this.details = response.data.data.details
      } catch(err) {
      console.log('An error occurred!')
      }
  },
  methods: {
    async handleEdit() {

      try{
        const response = await axios.patch(`moment/${this.id}`, {
        title: this.title,
        details: this.details,
        futureDate: this.futureDate
      })
        this.$router.push(`/moment/${this.id}`)
      } catch(err) {
        this.error = 'must be a valid date'
        console.log(this.error)
      }


    }
  }

}
</script>