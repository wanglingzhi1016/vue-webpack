<template>
<div class="wlz-app">
  <PageIndex />
  <div class="wlz-container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import PageIndex from '@/pages/index/index.vue';

export default {
  name: 'App',
  components: {
    PageIndex
  }
}
</script>

<style lang="less">
@import '@/assets/styles/index.less';
.wlz-app {
  display: flex;
  .wlz-container {
    padding: 20px;
  }
}
</style>