const router = require('koa-router')()
const { User } = require('../../model')

router.prefix('/session')

router.get('/', async ctx => {
  let user = await User.findOne({where: {id: ctx.session.userId}})
  delete user.password
  ctx.body = {
    err: 0,
    info: '',
    data: user
  }
})

router.post('/', async ctx => {
  const {username, password} = ctx.request.body
  let user = await User.findOne({where: {username}})
  if (!user || password != user.password) {
    ctx.body = {
      err: 10101,
      info: 'login failed!',
      data: null
    }
    return
  }

  delete user.password
  ctx.session.userId = user.id

  ctx.body = {
    err: 0,
    info: '',
    data: user
  }
})

router.delete('/', async ctx => {
  ctx.session = null
  ctx.body = {
    err: 0,
    info: 'logout success',
    data: null
  }
})

module.exports = router