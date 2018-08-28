<template>
  <el-container>
    <el-header style="padding:0">
      <v-toolbar flat color="blue darken-4" dark>
        <v-toolbar-title style="color: white">
          <v-icon style="margin-bottom:2px">home</v-icon>
          住房管理平台
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat @click="toApply" v-if="isLogin">
            申请
            <router-link to="/apply" id="toApply"></router-link>
          </v-btn>
        </v-toolbar-items> 
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat @click="toManage" v-if="isLogin && this.username === 'admin'">
            信息管理
            <router-link to="/manage" id="toManage"></router-link>
          </v-btn>
        </v-toolbar-items> 
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat v-if="isLogin" @click="logout">注销</v-btn>
        </v-toolbar-items>        
      </v-toolbar>      
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <router-link to="/" id="toLogin"></router-link>
  </el-container>
</template>
<script>
import axios from 'axios'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Main',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      path: state => state.path,
      isLogin: state => state.isLogin,
      userId: state => state.userId,
      username: state => state.username
    })
  },
  methods: {
    ...mapMutations([
      'set_isLogin',
      'set_userId',
      'set_username'
    ]),    
    async logout () {
      let res = await axios({
        method: 'DELETE',
        url: `${this.path}/api/session`,
        withCredentials: true
      })
      if (res.data.err === 0) {
        this.set_isLogin(false)
        this.set_username({ username: '' })
        document.getElementById('toLogin').click()
      }
    },
    toApply () {
      document.getElementById('toApply').click()
    },
    toManage () {
      document.getElementById('toManage').click()
    }
  }
}
</script>
<style scoped>

</style>
