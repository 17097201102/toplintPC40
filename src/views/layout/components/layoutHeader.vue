<template>
  <div class="layout-header">
    <el-row>
      <el-col :span="14">
        江苏传智播客教育科技股份有限公司
      </el-col>
      <el-col :span="10">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link user-info">
            <img :src="userInfo.photo" alt="">
            <span>{{userInfo.name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
    console.log(this.userInfo)
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  .user-info {
    & > img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      vertical-align: middle;
    }
    & > span {
      color: #606266;
      font-size: 14px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>
