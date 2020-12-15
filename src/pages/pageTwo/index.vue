<template>
<div>
  我是pageTwo页面
  <br />
  <br />
  <el-button @click="onClick" type="primary">Go to pageOne</el-button>
</div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    onClick() {
      this.$router.push({
        name: 'pageOne'
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>