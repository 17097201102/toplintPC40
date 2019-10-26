<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <layoutAside></layoutAside>
      </el-aside>
      <el-container>
        <el-header>
          <layoutHeader></layoutHeader>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from '@/views/layout/components/layoutAside'
import layoutHeader from '@/views/layout/components/layoutHeader'
export default {
  components: {
    layoutAside,
    layoutHeader
  }
}
</script>
<style lang="less" scoped>
.layout {
  height: 100%;
  // 去掉选择器后的空格
  // 子代选择器
  & > .el-container {
    height: 100%;
  }
}
.el-header {
  height: 50px;
  line-height: 50px;
  font-family: Microsoft YaHei;
  color: #2c3e50;
}

.el-aside {
  background-color: #323745;
  height: 100%;
  color: #2c3e50;
  color: white;
}

.el-main {
  background-color: #f2f3f5;
  color: #2c3e50;
  height: 100%;
  padding: 10px;
  overflow: hidden;
  position: relative;
}
</style>
