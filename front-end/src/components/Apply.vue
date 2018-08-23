<template>
  <el-row :gutter="20" style="margin-top:15px">
      <el-col :span="12" :offset="6">
        <div class="baseInfo">基本信息</div>
        <el-select v-model="info.place" placeholder="申请住房地址" style="width:100%;margin-bottom: 20px">
          <el-option v-for="item in info.places" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input v-model="info.name" placeholder="姓名" style="margin-bottom: 20px"></el-input>
        <el-input v-model="info.sex" placeholder="性别" style="margin-bottom: 20px"></el-input>
        <el-input v-model="info.idCard" placeholder="身份证号" style="margin-bottom: 20px"></el-input>
        <el-select v-model="info.humanRelation" placeholder="人事关系所在实体" style="width:100%;margin-bottom: 20px">
          <el-option v-for="item in info.humanRelations" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-select v-model="info.group" placeholder="组织结构所在实体" style="width:100%;margin-bottom: 20px">
          <el-option v-for="item in info.groups" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-date-picker v-model="info.entryTime" type="date" placeholder="入职时间" style="width:100%;margin-bottom: 20px"></el-date-picker>
        <el-input v-model="info.station" placeholder="现任岗位" style="margin-bottom: 20px"></el-input>
        <el-input type="textarea" autosize v-model="info.rewards" placeholder="于哪年获计算所、团队哪项奖励/荣誉" style="margin-bottom: 20px"></el-input>
        <el-select v-model="info.marriage" placeholder="婚姻状况" style="width:100%;margin-bottom: 20px">
          <el-option v-for="item in info.marriages" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-select v-model="info.isBeiJingRegistered" placeholder="是否属于北京市户籍" style="width:100%;margin-bottom: 20px">
          <el-option v-for="item in info.isBeiJingRegistereds" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input v-model="info.registerLocation" placeholder="户籍所在地（省、自治区、直辖市）" style="margin-bottom: 20px"></el-input>
        <el-select v-model="info.needBeiJingResidentPermit" placeholder="是否办理北京居住证" style="width:100%;margin-bottom: 20px">
          <el-option v-for="item in info.needBeiJingResidentPermits" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-select v-model="info.isSocialSecurityOverSixtyMonth" placeholder="是否在京连续缴纳社保或个税满60个月" style="width:100%;margin-bottom: 20px">
          <el-option v-for="item in info.isSocialSecurityOverSixtyMonths" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>     
        <el-select v-model="info.haveHouseTransitionRecord" placeholder="是否在北京市范围内有住房转出记录" style="width:100%;margin-bottom: 20px">
          <el-option v-for="item in info.haveHouseTransitionRecords" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select> 
        <el-select v-model="info.haveHouseInBeiJing" placeholder="北京市范围内有无住房" style="width:100%;margin-bottom: 20px">
          <el-option v-for="item in info.haveHouseInBeiJings" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>       
        <el-select v-model="info.haveElseFavouratePolicy" placeholder="是否享受过中央或北京市的其他优惠住房政策" style="width:100%;margin-bottom: 20px">
          <el-option v-for="item in info.haveElseFavouratePolicys" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>           
        <el-input v-model="info.phoneNumber" placeholder="联系电话" style="margin-bottom: 20px"></el-input>
        <el-input type="textarea" autosize v-model="info.else" placeholder="备注" style="margin-bottom: 20px"></el-input>
        <el-col style="color:white; text-align:center;padding:0">
          <v-btn color="blue darken-3" depressed>确认申请</v-btn> 
          <v-btn color="grey lighten-1" depressed>取消</v-btn>
        </el-col>        
      </el-col>
    </el-row>
</template>
<script>
export default {
  name: 'Apply',
  data () {
    return {
      info: {
        places: [{ value: 0, label: '创客小镇' }],
        place: '',
        name: '',
        sex: '',
        idCard: '',
        humanRelations: [{ value: 0, label: '实验室' },{ value: 1, label: '公司' },{ value: 2, label: '创嘉' }],
        humanRelation: '',
        groups: [{ value: 0, label: '实验室' },{ value: 1, label: '公司' },{ value: 2, label: '其他' }],
        group: '',
        entryTime: '',
        station: '',
        rewards: '',
        marriages: [{ value: 0, label: '已婚' }, { value: 1, label: '未婚' }],
        marriage: '',
        isBeiJingRegistereds: [{ value: 0, label: '是' }, { value: 1, label: '否' }],
        isBeiJingRegistered: '',
        registerLocation: '',
        needBeiJingResidentPermits: [{ value: 0, label: '是' }, { value: 1, label: '否' }],
        needBeiJingResidentPermit: '',
        isSocialSecurityOverSixtyMonths: [{ value: 0, label: '是' }, { value: 1, label: '否' }],
        isSocialSecurityOverSixtyMonth: '',
        haveHouseTransitionRecords: [{ value: 0, label: '是' }, { value: 1, label: '否' }],
        haveHouseTransitionRecord: '',
        haveHouseInBeiJings: [{ value: 0, label: '有' }, { value: 1, label: '无' }],
        haveHouseInBeiJing: '',
        haveElseFavouratePolicys: [{ value: 0, label: '是' }, { value: 1, label: '否' }],
        haveElseFavouratePolicy: '',
        phoneNumber: '',
        else: ''
      }
    }
  }
}
</script>
<style scoped>
.baseInfo{
  font-size: 20px;
  margin-bottom: 20px;
}
</style>

