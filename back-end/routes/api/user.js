const router = require('koa-router')()
const { User } = require('../../model')

router.prefix('/user')

router.post('/', async ctx => {
  const {username, password} = ctx.request.body

  let user = await User.findOne({ where: {username} })
  if (user) {
    ctx.body = {
      err: 10103,
      info: 'username existed!',
      data: { username }
    }
    return
  }

  user = await User.create({username, password})
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