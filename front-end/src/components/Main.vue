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
      userId: state => state.userId
    })
  },
  methods: {
    ...mapMutations([
      'set_isLogin',
      'set_userId'
    ]),    
    async logout () {
      let res = await axios({
        method: 'DELETE',
        url: `${this.path}/api/session`,
        withCredentials: true
      })
      if (res.data.err === 0) {
        this.set_isLogin(false)
        document.getElementById('toLogin').click()
      }
    }
  }
}
</script>
<style scoped>

</style>
