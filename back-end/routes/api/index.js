const router = require('koa-router')()
router.prefix('/api')
const fs = require('fs')

fs.readdirSync(__dirname).filter(i => i != 'index.js').forEach(i => {
  let moudule = require(`./${i}`)
  router.use(moudule.routes(), moudule.allowedMethods())
})

module.exports = router