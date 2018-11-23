<template>
  <div class="container">
    <headers></headers>
    <contents></contents>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  name: 'home',
  components: {
    Headers: () => import('./parts/headers.vue'),
    Contents: () => import('./parts/contents.vue')
  },
  data () {
    return {}
  }
}
</script>
