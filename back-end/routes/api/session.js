const router = require('koa-router')()
const { User } = require('../../model')

router.prefix('/session')

router.get('/', async ctx => {
  let id = ctx.session.userId
  let user = await User.findOne({where: { id }})
  if (user) delete user.password
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
  console.log(ctx.session.userId)

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