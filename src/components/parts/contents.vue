<template>
  <div class="contents">
    <div class="inner"></div>
  </div>
</template>
<style scoped>
.contents {
  width: 100%;
  height: calc(100% - 90px);
  overflow-y: auto;
  padding-top: 15px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
}
.inner {
  width: 100%;
  height: 3000px;
  background-color: #ffffff;
}
</style>
<script>
export default {
  name: 'contents',
  data () {
    return {}
  }
}
</script>
