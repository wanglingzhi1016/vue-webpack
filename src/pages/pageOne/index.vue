<template>
<div>
  我是pageOne页面
  <br />
  <br />
  <el-button @click="onClick" type="primary">Go to pageTwo</el-button>
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
        name: 'pageTwo'
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>