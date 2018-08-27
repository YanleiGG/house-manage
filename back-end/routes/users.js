const router = require('koa-router')()
const User = require('../model/user')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/login', async (ctx, next) => {
  let uid = ctx.session.userId
  if (uid) {
    let user = await User.findOne({
      where: {
        id: uid
      }
    })
    ctx.redirect('/login-success')
  } else {
    await ctx.render('login')
  }
})

router.get('/login-success', async ctx => {
  let uid = ctx.session.userId
  let user = await User.findOne({
    where: {
      id: uid
    }
  })
  await ctx.render('login-success', { username: user.username })
})

router.get('/signup', async (ctx, next) => {
  await ctx.render('sign-up')
})

router.post('/login', async (ctx, next) => {
  let { username, password } =  ctx.request.body
  let user = await User.findOne({
    where: {
      username
    }
  })
  if (!user) {
    await ctx.render('login-fail', { reason: '用户不存在' })
    return
  }
  if (user.password != password) {
    await ctx.render('login-fail', { reason: '密码不正确' })
    return
  }
  ctx.session.userId = user.id
    ctx.redirect('/users/login-success')
})

router.post('/signup', async (ctx, next) => {
  let { username } =  ctx.request.body
  let user = await User.findOne({
    where: {
      username
    }
  })
  if (user) {
    await ctx.render('signup-fail', {reason: '用户名已存在'})
    return
  }
  await ctx.render('signup-success', { username })
  User.create(ctx.request.body)
})

router.get('/signout', async ctx => {
  ctx.session = null
  await ctx.render('signout-success')
})

module.exports = router
