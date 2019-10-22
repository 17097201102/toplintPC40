<template>
  <div class="login">
    <div class="login-wrap">
      <div class="login-logo">
        <img src="./../../assets/logo_index.png" alt="">
      </div>
      <el-form ref="form" :model="form">
        <!-- 表单组件 -->
        <el-form-item>
          <el-input v-model="form.telephone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="14">
              <el-input v-model="form.number" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="2">
              <span> </span>
            </el-col>
            <el-col :span="8">
              <el-button>获取验证码</el-button>
            </el-col>
          </el-row>

        </el-form-item>
        <el-form-item>
          <el-button size="medium" type="primary" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // 管理el-form
  // 管理表单元素的父容器,ref 中dom 操作dom元素 v-model
  data () {
    return {
      form: {
        telephone: '',

        number: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("./../../assets/login_bg.jpg");
  background-color: #ccc;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-wrap {
    background-color: #fff;
    padding: 50px;
    min-width: 300px;
    .login-btn {
      width: 100%;
    }
    .login-logo {
      text-align: center;
      img {
        width: 150px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
