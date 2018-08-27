const router = require('koa-router')()
const { ApplyInfomation } = require('../../model')

router.prefix('/apply_infomation')

router.get('/', async ctx => {
  const { userId } = ctx.request.body
  let info = await ApplyInfomation.findOne({ where: { userId } })
  ctx.body = {
    err: 0,
    msg: 'query success!',
    data: info
  }
})

router.post('/', async ctx => {
  const apply_infomation = ctx.request.body
  let info = await ApplyInfomation.findOne({ where: { userId: apply_infomation.userId } })
  if (info) {
    info = info.update(apply_infomation)
  } else {
    info = ApplyInfomation.create(apply_infomation)
  }
  ctx.body = {
    err: 0,
    msg: 'update success!',
    data: info
  }
})

router.delete('/', async ctx => {
  const { id } = ctx.request.body
  let info = await ApplyInfomation.findOne({ where: { id } })
  await info.destroy()
  ctx.body = {
    err: 0,
    msg: 'delete success!'
  }
})

module.exports = router