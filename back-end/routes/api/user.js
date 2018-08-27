const router = require('koa-router')()
const { sequelize, User } = require('../../model')

router.prefix('/session')

router.post('/', async ctx => {
  const {username, password, email} = ctx.request.body

  let user
  try {
    user = User.create({username, password, email})
  } catch(e){
    ctx.body = {
      err: 10103,
      info: 'user existed',
      data: null
    }
    return
  }

  user = JSON.parse(JSON.stringify(user))
  delete user.password

  ctx.session.userId = user.id

  ctx.body = {
    err: 0,
    info: '',
    data: user
  }
})

module.exports = router