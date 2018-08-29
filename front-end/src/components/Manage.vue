<template>
    <el-row :gutter="20" v-if="isLogin && this.username === 'zhangdong' || this.username === 'admin'">
      <el-col>
        <v-btn color="blue darken-3" depressed @click="exportAsExcel" style="color:white">
          导出
        </v-btn>
        <a :href="downloadPath" id="exportAsExcel"></a>
      </el-col>
      <el-col>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column prop="updatedAt" label="申请时间" width="120"></el-table-column>
          <el-table-column prop="name" label="姓名" width="100"></el-table-column>
          <el-table-column prop="place" label="申请住房地址" width="120"></el-table-column>
          <el-table-column prop="sex" label="性别" width="60  "></el-table-column>
          <el-table-column prop="idCard" label="身份证号" width="160"></el-table-column>
          <el-table-column prop="humanRelation" label="人事关系" width="120"></el-table-column>
          <el-table-column prop="group" label="组织结构" width="100"></el-table-column>
          <el-table-column prop="entryTime" label="入职时间" width="150"></el-table-column>
          <el-table-column prop="station" label="现任岗位" width="150"></el-table-column>
          <el-table-column prop="rewards" label="获得奖励" width="150"></el-table-column>
          <el-table-column prop="marriage" label="婚姻状况" width="80"></el-table-column>
          <el-table-column prop="mate" label="配偶身份证号" width="150"></el-table-column>
          <el-table-column prop="isBeiJingRegistered" label="是否属于北京市户籍" width="150"></el-table-column>
          <el-table-column prop="registerLocation" label="户籍所在地" width="150"></el-table-column>
          <el-table-column prop="needBeiJingResidentPermit" label="是否办理北京居住证" width="150"></el-table-column>
          <el-table-column prop="isSocialSecurityOverSixtyMonth" label="是否在京连续缴纳社保或个税满60个月" width="150"></el-table-column>
          <el-table-column prop="haveHouseTransitionRecord" label="是否在北京市范围内有住房转出记录" width="150"></el-table-column>
          <el-table-column prop="haveHouseInBeiJing" label="北京市范围内有无住房" width="150"></el-table-column>
          <el-table-column prop="haveElseFavouratePolicy" label="是否享受过中央或北京市的其他优惠住房政策" width="150"></el-table-column>
          <el-table-column prop="phoneNumber" label="联系电话" width="150"></el-table-column>
          <el-table-column prop="qualifications" label="学历" width="120"></el-table-column>
          <el-table-column prop="else" label="备注" width="150"></el-table-column>
        </el-table>
      </el-col>
      <el-col>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalCount"
          style="text-align:center;margin-top:20px"
          :current-page.sync="page">
        </el-pagination>        
      </el-col>
      <router-link to="/" id="toLogin"></router-link>
    </el-row>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'manage',
  data () {
    return {
      tableData: [],
      page: 1,
      totalCount: 0
    }
  },
  async created () {
    let res = await axios({
      method: 'GET',
      url: `${this.path}/api/session`,
      withCredentials: true
    })
    if (res.data.data) {
      this.set_isLogin({ isLogin: true })
      this.set_userId({ userId: res.data.data.id })
      this.set_username({ username: res.data.data.username })
    } else {
      document.getElementById('toLogin').click()
    }
    this.refresh()
  },
  computed: {
    ...mapState({
      path: state => state.path,
      isLogin: state => state.isLogin,
      userId: state => state.userId,
      username: state => state.username
    }),
    downloadPath () {
      return this.path + '/api/download/export-as-excel'
    }
  },
  methods: {
    ...mapMutations([
      'set_isLogin',
      'set_userId',
      'set_username'
    ]),
    async refresh () {
      let res = await axios.get(`${this.path}/api/apply_infomation?page=${this.page}&pageSize=10`)
      let data = res.data.data
      data.info.forEach(i => {
        i['updatedAt'] = moment(i['updatedAt']).format("YYYY-MM-DD").toString()
        i['entryTime'] = moment(i['entryTime']).format("YYYY-MM-DD").toString()
      })
      this.tableData = data.info
      this.totalCount = data.count
    },
    exportAsExcel () {
      document.getElementById('exportAsExcel').click()
    }
  },
  watch: {
    page () {
      this.refresh()
    }
  }
}
</script>
<style scoped>
</style>
