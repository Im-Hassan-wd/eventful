<template>
<Nav :login="login" />
</template>

<script>
import Nav from '../components/Nav'

export default {
  components: {
    Nav
  },
  data() {
    return {
      login: true
    }
  }
}
</script>

<style>

</style>