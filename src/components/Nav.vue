<template>
  <nav class="flex justify-between bg-teal-600 p-3 px-6 text-white">
    <h1 class="italic font-bold">Eventful Moments.</h1>

    <ul class="">
      <span class="text-sm">
        <router-link v-if="!login" :to="{ name: 'Login'}">Login</router-link>
      </span>
      <span class="text-sm">
        <router-link v-if="login" to="#">Logout</router-link>
      </span>
      <span class="text-sm">
        <router-link v-if="!login" to="#">Register</router-link>
      </span>
      <span class="text-sm">
        <router-link v-if="login" to="#">My Bucket</router-link>
      </span>
    </ul>
  </nav>
</template>

<script>
export default {
 props: ['login']
}
</script>

<style>

</style>