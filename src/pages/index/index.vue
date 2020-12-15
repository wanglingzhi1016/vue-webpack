<template>
<div class="menu">
  <el-menu
    router
    unique-opened
    :default-active="activeIndex"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu
        v-for="(item, index) in menuData"
        :key="index"
        :index="index+''">
        <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
        </template>
        <el-menu-item
            v-for="(i, j) in item.children"
            :key="j"
            :index="i.path"
        >
            {{i.title}}
        </el-menu-item>
    </el-submenu>
  </el-menu>
</div>
</template>

<script>
import menuData from '@/utils/menu.js';

export default {
  data() {
    return {
        menuData: [],
        activeIndex: null
    }
  },
  created() {
      this.menuData = menuData;
      this.activeIndex = this.$route.path;
  },
  watch: {
    '$route'(val) {
      this.activeIndex = val.path
    }
  }
}
</script>

<style lang="less" scoped>
@menu-width: 200px;
.menu {
    width: @menu-width;
    height: 100vh;
    background: #545c64;
    overflow-x: hidden;
    overflow-y: auto;
    /deep/ .el-submenu {
        width: @menu-width;
    }
    
}
/* 设置滚动条的样式 */
::-webkit-scrollbar{
    width: 2px;
    background: gray;
}
</style>