<template>
  <div class="login">
    <div class="login-wrap">
      <div class="login-logo">
        <img src="./../../assets/logo_index.png" alt="">
      </div>
      <el-form ref="ruleForm" :model="form" :rules="rules">
        <!-- 表单组件 -->
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- <div class="myitem">
            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            <el-button class="itembtn">获取验证码</el-button>
          </div> -->
          <el-row>
            <el-col :span="14">
              <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="8" :offset="2">
              <el-button class="itembtn" @click="getCode('ruleForm')" :disabled="!!codeInterval">{{ codeInterval ? `${lastTimes}秒重试`:'获取验证码'}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="read">
          <el-checkbox v-model="form.read">我已阅读并同意<a href="#">用户协议</a> 和<a href="#">隐私条款</a></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button size="medium" type="primary" class="login-btn" @click="submitForm('ruleForm')" :loading="loginLoading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // 管理el-form
  // 管理表单元素的父容器,ref 中dom 操作dom元素 v-model
  data () {
    return {
      codeLoading: false,
      loginLoading: false,
      checked: false,
      codeInterval: null,
      lastTimes: 5,
      form: {
        mobile: '13911111111',
        code: '246810',
        read: false
      },
      rules: {
        mobile: [
          // 失去焦点触发验证
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度11位字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度6位字符', trigger: 'blur' }
        ],
        read: [
          { pattern: /true/, message: '请选中', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    getCode (ruleForm) {
      this.$refs[ruleForm].validateField('mobile', errMsg => {
        console.log('errMsg', errMsg)
        if (errMsg) {
          console.log('验证失败,失败信息为:', errMsg)
          return
        }
        this.codeInterval = setInterval(() => {
          if (this.lastTimes === 0) {
            this.codeLoading = false
            clearInterval(this.codeInterval)
            clearTimeout(this.codeInterval)
            console.log('codeInterval', this.codeInterval)
            this.codeInterval = null
            this.lastTimes = 5
          } else {
            // 展示倒计时,
            this.codeLoading = true
            this.lastTimes--
            console.log('codeInterval', this.codeInterval)
          }
        }, 1000)
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 验证通过啦啦啦啦啦
          console.log('发送请求了')
          this.submitData()
        } else {
          // 验证失败啦啦啦啦啦
          console.log('error submit!!')
          return false
        }
      })
    },
    submitData () {
      this.loginLoading = true
      axios({
        url: 'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
        method: 'POST',
        data: this.form
      }).then(res => {
        // data中又token,需要我们会用上,一个就是token,一个就是refresh token 啦啦啦
        // data.data.token
        console.log(res)
        this.$message.success('登录成功')
        this.loginLoading = false
        this.$router.push('/')
      }).catch(err => {
        console.log('登录失败', err.message)
        this.$message.error('手机号验证码失败')
        this.loginLoading = false
      })
      // 发送post请求
      // this.$axios.post('/authorizations', { mobile: this.mobile, code: this.code })
      //   .then(res => {
      //     console.log(res)
      //   }).catch(err => {
      //     console.log('error', err.message)
      //   })
    },
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
    .myitem {
      display: flex;
      justify-content: space-between;
      .itembtn {
        margin-left: 20px;
      }
    }
  }
}
</style>
