var router = require('koa-router')();

router.prefix('/users');

router.get('/', function *(next) {
});

module.exports = router;
