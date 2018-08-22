<template>
  <el-container>
    <v-toolbar flat color="blue darken-4" dark>
      <v-toolbar-title style="color: white">
        <v-icon style="margin-bottom:2px">home</v-icon>
        住房管理平台
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
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
