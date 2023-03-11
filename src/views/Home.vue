<template>
  <Nav :login="login" />

  <div class="xs:px-4 lg:px-12">
    <div class="flex justify-between items-center my-12">
      <div class="">
        <h1 class="text-black text-2xl mb-1 font-semibold">Welcome John Doe,</h1>
        <p>Here are items in your eventful moment bucket.</p>
      </div>
      <button class="bg-secondary text-white py-2 px-3 w-36 rounded-md text-sm">Add Item</button>
    </div>

    <!-- cards -->
    <div class="mt-8 grid lg:grid-cols-2 gap-10">
      <!-- card -->
      <div v-for="para in paras" :key="para.id" class="shadow p-5 rounded ">
        <router-link :to="{ name: 'Event', params: { id: para.id} }">
          <h4 class="font-bold text-base mb-1 leading-5">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</h4>
          <p class="mb-1 text-sm">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
          <div class="mt-4">
            <small class="text-secondary">View Details</small>
            <small class="text-gray-500">10/03/2023</small>
            <small>10/03/2023</small>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'

export default {
  components: {
    Nav
  },
  data() {
    return {
      login: true,
      paras: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ]
    }
  }
}
</script>