<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'
import axios from 'axios'

export default {
  name: 'App',
  store,
  data () {
    return {}
  },
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei'
}
</style>
