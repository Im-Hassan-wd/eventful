<template>
  <div class="text-red-500 bg-red-100 p-1 mt-3 w-full text-center">
    {{ error }}
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['error']
}
</script>