const router = require('koa-router')()
const { ApplyInfomation, User } = require('../../model')

router.prefix('/apply_infomation')

router.get('/', async ctx => {
  let infos = await ApplyInfomation.findAll()
  let { page, pageSize } = ctx.query
  let count = infos.length
  let info = infos.splice((page-1)*pageSize, pageSize)
  ctx.body = {
    err: 0,
    msg: 'query success!',
    data: {
      info,
      count
    }
  }
})

router.get('/:id', async ctx => {
  const id = ctx.params.id
  let info = await ApplyInfomation.findOne({ id })
  ctx.body = {
    err: 0,
    msg: 'query success!',
    data: info
  }
})

router.post('/', async ctx => {
  const apply_infomation = ctx.request.body
  let userId = apply_infomation.userId
  let info = await ApplyInfomation.findOne({ where: { userId } })
  let user = await User.findOne({ id: userId })
  if (info) {
    info = await info.update(apply_infomation)
  } else {
    await user.createApplyInfomation(apply_infomation)
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