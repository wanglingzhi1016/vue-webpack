<template>
<div>
  <input v-model="value" />
  <button @click="onAdd">添加</button>
  <ul>
    <li v-for="(item, index) in arr" :key="index">{{item}}</li>
  </ul>
  <componentA />
</div>
</template>

<script>
// import img from './assets/images/bg.jpg'
// import './assets/images/small.png'
import './assets/styles/index.less';
import componentA from './components/componentA.vue';

export default {
  name: 'App',
  components: {
    componentA
  },
  data() {
    return {
      arr: [1, 2, 3],
      value: ''
    }
  },
  methods: {
    onAdd() {
      // console.log(as)
      const a = '11'
      const b = '23'
      console.log(`${a}ad`)
      if (!this.value) return
      this.arr.push(this.value)
    }
  }
}
</script>

<style lang="less" scoped>
</style>