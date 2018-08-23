<template>
  <el-row :gutter="20" style="margin-top:15px">
    <el-col :span="12" :offset="6">
      <div class="baseInfo">申请表</div>
      <div style="margin-bottom: 10px">申请住房地址:</div>
      <el-select v-model="info.place" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.places" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div style="margin-bottom: 10px">姓名:</div>
      <el-input v-model="info.name" style="margin-bottom: 20px"></el-input>
      <div style="margin-bottom: 10px">性别:</div>
      <el-select v-model="info.sex" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.sexs" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>      
      <div style="margin-bottom: 10px">身份证号:</div>
      <el-input v-model="info.idCard" style="margin-bottom: 20px"></el-input>
      <div style="margin-bottom: 10px">人事关系所在实体:</div>
      <el-select v-model="info.humanRelation" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.humanRelations" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div style="margin-bottom: 10px">组织结构所在实体:</div>
      <el-select v-model="info.group" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.groups" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div style="margin-bottom: 10px">入职时间:</div>
      <el-date-picker v-model="info.entryTime" type="date" style="width:100%;margin-bottom: 20px"></el-date-picker>
      <div style="margin-bottom: 10px">现任岗位:</div>
      <el-input v-model="info.station" style="margin-bottom: 20px"></el-input>
      <div style="margin-bottom: 10px">于哪年获计算所、团队哪项奖励/荣誉:</div>
      <el-input type="textarea" autosize v-model="info.rewards" style="margin-bottom: 20px"></el-input>
      <div style="margin-bottom: 10px">婚姻状况:</div>
      <el-select v-model="info.marriage" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.marriages" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div style="margin-bottom: 10px">是否属于北京市户籍:</div>
      <el-select v-model="info.isBeiJingRegistered" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.isBeiJingRegistereds" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div style="margin-bottom: 10px">户籍所在地（省、自治区、直辖市）:</div>
      <el-input v-model="info.registerLocation" style="margin-bottom: 20px"></el-input>
      <div style="margin-bottom: 10px">是否办理北京居住证:</div>
      <el-select v-model="info.needBeiJingResidentPermit" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.needBeiJingResidentPermits" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div style="margin-bottom: 10px">是否在京连续缴纳社保或个税满60个月:</div>
      <el-select v-model="info.isSocialSecurityOverSixtyMonth" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.isSocialSecurityOverSixtyMonths" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>     
      <div style="margin-bottom: 10px">是否在北京市范围内有住房转出记录:</div>
      <el-select v-model="info.haveHouseTransitionRecord" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.haveHouseTransitionRecords" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select> 
      <div style="margin-bottom: 10px">北京市范围内有无住房:</div>
      <el-select v-model="info.haveHouseInBeiJing" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.haveHouseInBeiJings" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>       
      <div style="margin-bottom: 10px">是否享受过中央或北京市的其他优惠住房政策:</div>
      <el-select v-model="info.haveElseFavouratePolicy" style="width:100%;margin-bottom: 20px">
        <el-option v-for="item in info.haveElseFavouratePolicys" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>           
      <div style="margin-bottom: 10px">联系电话:</div>
      <el-input v-model="info.phoneNumber" style="margin-bottom: 20px"></el-input>
      <div style="margin-bottom: 10px">备注:</div>
      <el-input type="textarea" autosize v-model="info.else" style="margin-bottom: 20px"></el-input>
      <el-col style="color:white; text-align:center;padding:0">
        <v-btn color="blue darken-3" depressed @click="confirmApply">确认申请</v-btn> 
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
        places: [{ value: '创客小镇', label: '创客小镇' }],
        place: '',
        name: '',
        sexs: [{ value: '男', label: '男' }, { value: '女', label: '女' }],
        sex: '',
        idCard: '',
        humanRelations: [{ value: '实验室', label: '实验室' },{ value: '公司', label: '公司' },{ value: '创嘉', label: '创嘉' }],
        humanRelation: '',
        groups: [{ value: '实验室', label: '实验室' },{ value: '公司', label: '公司' },{ value: '其他', label: '其他' }],
        group: '',
        entryTime: '',
        station: '',
        rewards: '',
        marriages: [{ value: '已婚', label: '已婚' }, { value: '未婚', label: '未婚' }],
        marriage: '',
        isBeiJingRegistereds: [{ value: '是', label: '是' }, { value: '否', label: '否' }],
        isBeiJingRegistered: '',
        registerLocation: '',
        needBeiJingResidentPermits: [{ value: '是', label: '是' }, { value: '否', label: '否' }],
        needBeiJingResidentPermit: '',
        isSocialSecurityOverSixtyMonths: [{ value: '是', label: '是' }, { value: '否', label: '否' }],
        isSocialSecurityOverSixtyMonth: '',
        haveHouseTransitionRecords: [{ value: '是', label: '是' }, { value: '否', label: '否' }],
        haveHouseTransitionRecord: '',
        haveHouseInBeiJings: [{ value: '有', label: '有' }, { value: '无', label: '无' }],
        haveHouseInBeiJing: '',
        haveElseFavouratePolicys: [{ value: '是', label: '是' }, { value: '否', label: '否' }],
        haveElseFavouratePolicy: '',
        phoneNumber: '',
        else: ''
      }
    }
  },
  methods: {
    async confirmApply() {
      for (let i in this.info) {
        if (i != 'else' && this.info[i] == '') {
          this.$message({
            showClose: true,
            message: '请填写完整后再提交!',
            type: 'warning'
          });      
          return      
        }
      }
    }
  }
}
</script>
<style scoped>
.baseInfo{
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
}
</style>

