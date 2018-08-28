<template>
  <div>
    <el-row :gutter="20" style="margin-top:5%">
      <el-col :span="12" :offset="6">
          <el-tabs v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane label="登录" name="sign-in">
              <el-input v-model="sign_in_username" placeholder="账号" style="margin-bottom: 20px"></el-input>
              <el-input v-model="sign_in_password" type="password" placeholder="密码"  style="margin-bottom: 20px"></el-input>
              <el-col style="color:white; text-align:center;padding:0">
                <v-btn color="blue darken-3" depressed @click="signin">登录</v-btn> 
                <v-btn color="grey lighten-1" depressed @click="signin_cancel">取消</v-btn>
              </el-col> 
            </el-tab-pane>
            <el-tab-pane label="注册" name="sign-up">
              <el-input v-model="sign_up_username" placeholder="账号" style="margin-bottom: 20px"></el-input>
              <el-input v-model="sign_up_password" type="password" placeholder="密码"  style="margin-bottom: 20px"></el-input>
              <el-input v-model="sign_up_repeat_password" type="password" placeholder="再输入一次密码"  style="margin-bottom: 20px"></el-input>
              <el-col style="color:white; text-align:center;padding:0">
                <v-btn color="blue darken-3" depressed @click="signup">注册</v-btn> 
                <v-btn color="grey lighten-1" depressed @click="signup_cancel">取消</v-btn>
              </el-col>    
            </el-tab-pane>
          </el-tabs>
      </el-col>
    </el-row>
    <router-link to="/apply" id="toApplyLink"></router-link>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'loginPage',
  data () {
    return {
      sign_in_username: '',
      sign_in_password: '',
      sign_up_username: '',
      sign_up_password: '',
      sign_up_repeat_password: '',
      activeName: "sign-in"
    }
  },
  methods: {
    ...mapMutations([
      'set_isLogin',
      'set_userId'
    ]),
    async signin () {
      if (this.sign_in_username == '' || this.sign_in_password == '') {
        this.$message({
          showClose: true,
          message: '账号和密码不能为空!',
          type: 'info'
        });
        return
      }
      let res = await axios({
        method: 'POST',
        url: `${this.path}/api/session`,
        data: { 
          username: this.sign_in_username, 
          password: this.sign_in_password 
        },
        withCredentials: true
      })

      if (res.data.data) {
        this.set_isLogin({ isLogin: true })
        document.getElementById('toApplyLink').click()
      } else {
        this.$message({
          showClose: true,
          message: '登录失败，账号或密码错误!',
          type: 'error'
        });
        return
      }
      res = await axios({
        method: 'GET',
        url: `${this.path}/api/session`,
        withCredentials: true
      })
      this.set_userId({ userId: res.data.data.id })
    },
    async signup () {
      if (this.sign_up_username.length < 6 || this.sign_up_password.length < 6) {
        this.$message({
          showClose: true,
          message: '账号和密码长度至少为6位!',
          type: 'info'
        });
        return 
      } else if (this.sign_up_password != this.sign_up_repeat_password) {
        this.$message({
          showClose: true,
          message: '两次输入密码不一致!',
          type: 'info'
        });
        return    
      }

      let res = await axios.post(`${this.path}/api/user`, { username: this.sign_up_username, password: this.sign_up_password })
      if (res.err === 10103) {
        this.$message({
          showClose: true,
          message: '用户名已存在!',
          type: 'info'
        });        
      } else if (res.data.data) {
        this.$message({
          showClose: true,
          message: '注册成功!',
          type: 'success'
        });
        this.signup_cancel()
        this.activeName = 'sign-in'
      }
    },
    handleTabClick () {},
    signin_cancel () {
      this.sign_in_username = ''
      this.sign_in_password = ''
    },
    signup_cancel () {
      this.sign_up_username = ''
      this.sign_up_password = ''
      this.sign_up_repeat_password = ''
    }
  },
  computed: {
    ...mapState({
      path: state => state.path,
      isLogin: state => state.isLogin,
      userId: state => state.userId
    })
  }
}
</script>

<style scoped>
</style>
