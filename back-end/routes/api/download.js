const router = require('koa-router')()
const send = require('koa-send'); 
const xlsx = require('node-xlsx').default;
const fs = require('fs')
const { ApplyInfomation } = require('../../model')
const moment = require('moment');

router.prefix('/download')

router.get('/manage-regulation', async function (ctx) {
  // Set Content-Disposition to "attachment" to signal the client to prompt for download.
  // Optionally specify the filename of the download.
  // 设置实体头（表示消息体的附加信息的头字段）,提示浏览器以文件下载的方式打开
  // 也可以直接设置 ctx.set("Content-disposition", "attachment; filename=" + fileName);
  var fileName = '【2018】-003号文件-天玑团队职工流动公寓管理规定.pdf';
  ctx.attachment(fileName);
  await send(ctx, fileName, { root: __dirname.replace(/\/routes\/api/, '') + '/public' });
});

router.get('/export-as-excel', async function (ctx) {
  // 创建文件
  let data = [
    ['申请时间', '申请住房地址', '姓名', '性别', '身份证号', '人事关系', '组织机构', '入职时间', '现任岗位', '获得奖励', '婚姻状况', '配偶身份证号', '是否属于北京市户籍', '户籍所在地', '是否办理北京居住证', '是否在京连续缴纳社保或个税满60个月', '是否在北京市范围内有住房转出记录', '北京市范围内有无住房', '是否享受过中央或北京市的其他优惠住房政策', '联系电话', '学历', '备注'], 
  ];
  let infos = await ApplyInfomation.findAll()
  let mappedInfos = infos.map(i => {
    let arr = []
    let sort = ['updatedAt', 'place', 'name', 'sex', 'idCard', 'humanRelation', 'group', 'entryTime', 'station', 'rewards', 'marriage', 'mate', 'isBeiJingRegistered', 'registerLocation', 'needBeiJingResidentPermit', 'isSocialSecurityOverSixtyMonth', 'haveHouseTransitionRecord', 'haveHouseInBeiJing', 'haveElseFavouratePolicy', 'phoneNumber', 'qualifications', 'else']
    sort.forEach(key => {
      if (key == 'entryTime' || key == 'updatedAt') {
        arr.push(moment(i[key]).format("YYYY-MM-DD").toString())
      } else {
        arr.push(i[key])
      }
    })
    return arr
  })
  data = [...data, ...mappedInfos]
  let buffer = xlsx.build([{name: "mySheetName", data: data}]);

  fs.writeFile('./public/申请信息.xlsx', buffer, 'utf8', () => {})

  // 返回下载
  var fileName = '申请信息.xlsx';
  ctx.attachment(fileName);
  await send(ctx, fileName, { root: __dirname.replace(/\/routes\/api/, '') + '/public' });
});

module.exports = router
