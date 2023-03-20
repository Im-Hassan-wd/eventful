<template>
  <nav
    class="flex justify-between items-center column bg-primary h-16 min-[100px]:px-4 md:px-16 text-white"
  >
    <router-link v-if="user" to="/">
      <h1 class="italic font-bold">Eventful Moments.</h1>
    </router-link>
    <h1 v-else class="italic font-bold">Eventful Moments.</h1>

    <ul v-if="user">
      <span class="text-sm pl-3">
        <a @click="handleLogout" href="javascript:void(0)">Logout</a>
      </span>
      <span class="text-sm pl-3">
        <router-link to="/">My Bucket</router-link>
      </span>
    </ul>

    <ul v-if="!user">
      <span class="text-sm pl-3">
        <router-link to="/login">Login</router-link>
      </span>
      <span class="text-sm pl-3">
        <router-link to="/register">Register</router-link>
      </span>
    </ul>

  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbaer',
  methods: {
    handleLogout() {

      localStorage.removeItem('token')
      this.$store.dispatch('user', null)
      this.$router.push("/login")

    }
  },
  computed: {
    ...mapGetters(['user'])
  }
};
</script>
