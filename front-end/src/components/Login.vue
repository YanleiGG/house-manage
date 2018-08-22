<template>
  <div>
    <el-row :gutter="20" style="margin-top:5%">
      <el-col :span="12" :offset="6">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="登录" name="sign-in">
              <el-input v-model="sign_in_username" placeholder="账号" style="margin-bottom: 20px"></el-input>
              <el-input v-model="sign_in_password" type="password" placeholder="密码"  style="margin-bottom: 20px"></el-input>
              <el-col :span="12" :offset="8">
                <el-button >登录</el-button>
                <el-button >取消</el-button>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="注册" name="sign-up">
              <el-input v-model="sign_up_username" placeholder="账号" style="margin-bottom: 20px"></el-input>
              <el-input v-model="sign_up_password" type="password" placeholder="密码"  style="margin-bottom: 20px"></el-input>
              <el-input v-model="sign_up_repeat_password" type="password" placeholder="再输入一次密码"  style="margin-bottom: 20px"></el-input>
              <el-col :span="12" :offset="8">
                <el-button >注册</el-button>
                <el-button >取消</el-button>
              </el-col>              
            </el-tab-pane>
          </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
</style>
