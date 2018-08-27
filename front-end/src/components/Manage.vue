<template>
      <el-row :gutter="20">
      <el-col>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column prop="name" label="姓名" width="150"></el-table-column>
          <el-table-column prop="place" label="申请住房地址" width="150"></el-table-column>
          <el-table-column prop="sex" label="性别" width="150"></el-table-column>
          <el-table-column prop="idCard" label="身份证号" width="150"></el-table-column>
          <el-table-column prop="humanRelation" label="人事关系" width="150"></el-table-column>
          <el-table-column prop="group" label="组织结构" width="150"></el-table-column>
          <el-table-column prop="entryTime" label="入职时间" width="150"></el-table-column>
          <el-table-column prop="station" label="现任岗位" width="150"></el-table-column>
          <el-table-column prop="rewards" label="获得奖励" width="150"></el-table-column>
          <el-table-column prop="marriage" label="婚姻状况" width="150"></el-table-column>
          <el-table-column prop="isBeiJingRegistered" label="是否属于北京市户籍" width="150"></el-table-column>
          <el-table-column prop="registerLocation" label="户籍所在地" width="150"></el-table-column>
          <el-table-column prop="needBeiJingResidentPermit" label="是否办理北京居住证" width="150"></el-table-column>
          <el-table-column prop="isSocialSecurityOverSixtyMonth" label="是否在京连续缴纳社保或个税满60个月" width="150"></el-table-column>
          <el-table-column prop="haveHouseTransitionRecord" label="是否在北京市范围内有住房转出记录" width="150"></el-table-column>
          <el-table-column prop="haveHouseInBeiJing" label="北京市范围内有无住房" width="150"></el-table-column>
          <el-table-column prop="haveElseFavouratePolicy" label="是否享受过中央或北京市的其他优惠住房政策" width="150"></el-table-column>
          <el-table-column prop="phoneNumber" label="联系电话" width="150"></el-table-column>
          <el-table-column prop="else" label="备注" width="150"></el-table-column>
        </el-table> 
      </el-col>
    </el-row>  
</template>
<script>
export default {
  name: 'manage',
  data () {
    return {
      tableData: [{
        place: '创客小镇',
        name: '测试',
        sex: '男',
        idCard: '110293009287900',
        humanRelation: '实验室',
        group: '实验室',
        entryTime: '2018-08-01',
        station: 'Java工程师',
        rewards: '无',
        marriage: '未婚',
        isBeiJingRegistered: '否',
        registerLocation: '北京',
        needBeiJingResidentPermit: '否',
        isSocialSecurityOverSixtyMonth: '否',
        haveHouseTransitionRecord: '否',
        haveHouseInBeiJing: '无',
        haveElseFavouratePolicy: '否',
        phoneNumber: '12345678',
        else: ''
      }]
    }
  }
}
</script>
<style scoped>

</style>
