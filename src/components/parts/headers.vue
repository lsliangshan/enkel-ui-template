<template>
  <div class="headers">
    <div class="inner">
      <div class="logo_container">
        <img :src="assets.logo"
             class="logo">
      </div>
    </div>
  </div>
</template>
<style scoped>
.headers {
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 90px;
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.inner {
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.logo_container {
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.logo {
  height: 40px;
}
</style>
<script>
export default {
  name: 'headers',
  data () {
    return {}
  },
  computed: {
    assets () {
      return this.$store.state.assets
    }
  },
  created () {
    console.log('.....', this.$store)
  }
}
</script>
