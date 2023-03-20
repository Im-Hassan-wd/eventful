<template>
  <div class="font-body text-base flex flex-col relative min-h-screen">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
export default {
  name: "App",
  components: { Footer, Navbar },
}
</script>
<style>
  input, textarea {
    outline-color: #e5e7eb;
    font-size: 13px !important;
  }
</style>