const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const apiRouter = require('./routes/api')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
const session = require('koa-session')

app.keys = ['house-manage']

const CONFIG = {
  key: 'houseManage:koa:sess',
  maxAge: 86400000
}
 
app.use(session(CONFIG, app));

// 设置跨域
app.use(cors({
  credentials: true  // 这里是为了允许在跨域的情况下也可以将 Cookie 传到后端，同时前端 axios 也要设置为 true
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(apiRouter.routes(), apiRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
