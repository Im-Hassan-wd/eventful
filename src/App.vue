<template>
  <div class="font-body text-base flex flex-col relative min-h-screen">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>

import Nav from "./components/Nav"
import Footer from "./components/Footer"
export default {
  name: "App",
  components: { Footer, Nav },
}
</script>
<style>
  input, textarea {
    outline-color: #e5e7eb;
    font-size: 13px !important;
  }
</style>