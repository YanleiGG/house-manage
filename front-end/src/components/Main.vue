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
          <v-btn flat>注销</v-btn>
        </v-toolbar-items>        
      </v-toolbar>      
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  }
}
</script>
<style scoped>

</style>
