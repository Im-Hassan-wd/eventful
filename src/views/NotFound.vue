<template>
  <div class="text-gray-700 my-5 p-5 ">
    <h1 class="text-8xl font-bold">404</h1>
    <p class="max-w-76 text-3xl">Something went <b>WRONG</b></p>
    <router-link :to="{ name: 'Home' }" class="bg-gray-700 text-white p-2 inline-block mt-3">Back to Homepage</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>