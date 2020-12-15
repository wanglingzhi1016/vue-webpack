<template>
<div>
  <div>我是首页</div>
  <br/>
  <el-button @click="onClick(1)" :disabled="isDisabled" type="primary">Go to pageOne</el-button>
  <br/>
  <br/>
  <el-button @click="onClick(2)" :disabled="!isDisabled" type="primary">Go to pageTwo</el-button>
  <br/>
  <br/>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isDisabled: false
    }
  },
  methods: {
    onClick(type) {
      this.isDisabled = !this.isDisabled;
      this.$router.push({
        name: type === 1 ? 'pageOne' : 'pageTwo'
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>