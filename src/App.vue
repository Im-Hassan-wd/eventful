<template>
  <div class="font-body text-base">
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav"


export default {
  name: "App",
  components: { Nav, },
}
</script>
