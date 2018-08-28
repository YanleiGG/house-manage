const router = require('koa-router')()
const send = require('koa-send'); 

router.prefix('/download')

router.get('/manage-regulation', async function (ctx) {
  // Set Content-Disposition to "attachment" to signal the client to prompt for download.
  // Optionally specify the filename of the download.
  // 设置实体头（表示消息体的附加信息的头字段）,提示浏览器以文件下载的方式打开
  // 也可以直接设置 ctx.set("Content-disposition", "attachment; filename=" + fileName);
  var fileName = '【2018】-003号文件-天玑团队职工流动公寓管理规定.pdf';
  ctx.attachment(fileName);
  await send(ctx, fileName, { root: __dirname.replace(/\/routes\/api/, '') + '/public' });
});

module.exports = router
