<template>
  <div class="layout-aside">
    <div class="logo">
      <img src="./logo_admin.png" alt="">

    </div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :unique-opened="true" :router="true" @open="handleOpen" @close="handleClose" background-color="rgb(52, 55, 68)" text-color="rgb(173, 175, 181)" active-text-color="#409eff">

      <el-menu-item index="home">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">
          <span>内容管理</span>
        </template>
        <el-menu-item index="publish">
          <span slot="title">发版文章</span></el-menu-item>
        <el-menu-item index="5-2">
          <span slot="title">内容列表</span></el-menu-item>
        <el-menu-item index="5-3">
          <span slot="title">评论列表</span></el-menu-item>
        <el-menu-item index="5-4">
          <span slot="title">素材管理</span></el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <span>粉色关联</span>
        </template>

        <el-menu-item index="6-1">
          <span slot="title">图文数据</span></el-menu-item>
        <el-menu-item index="6-2">
          <span slot="title">粉丝概况</span></el-menu-item>
        <el-menu-item index="6-3">
          <span slot="title">粉丝画像</span></el-menu-item>
        <el-menu-item index="6-4">
          <span slot="title">粉丝列表</span></el-menu-item>
      </el-submenu>
      <el-menu-item index="8">

        <span slot="title">账号信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
      console.log('开启了')
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
      console.log('关闭了')
    }
  }
}
</script>

<style lang="less" scoped>
.layout-aside {
  .logo {
    background-color: #2e2f32;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 120px;
    }
  }
}
</style>
