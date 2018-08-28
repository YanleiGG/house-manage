const xlsx = require('node-xlsx').default;
const router = require('koa-router')()
const fs = require('fs')
const { ApplyInfomation } = require('../../model')
const moment = require('moment');

router.prefix('/export-as-excel')

router.get('/', async function (ctx) {
  let data = [
    ['申请时间', '姓名', '申请住房地址', '性别', '身份证号', '人事关系', '组织机构', '入职时间', '现任岗位', '获得奖励', '婚姻状况', '配偶身份证号', '是否属于北京市户籍', '户籍所在地', '是否办理北京居住证', '是否在京连续缴纳社保或个税满60个月', '是否在北京市范围内有住房转出记录', '北京市范围内有无住房', '是否享受过中央或北京市的其他优惠住房政策', '联系电话', '学历', '备注'], 
  ];
  let infos = await ApplyInfomation.findAll()
  let mappedInfos = infos.map(i => {
    let arr = []
    i.attributes.forEach(key => {
      arr.push(i[key])
    })
    arr.splice(arr.length-3,3)
    arr.unshift(i['createdAt'])
    console.log(moment(i['createdAt']))
    return arr
  })
  data = [...data, ...mappedInfos]
  let buffer = xlsx.build([{name: "mySheetName", data: data}]);

  fs.writeFile('./public/excel.xlsx', buffer, 'utf8', () => {})
  ctx.body = {
    err: 0
  }
});

module.exports = router

