const { User } = require('../model')

const init = async () => {
  let user = await User.findOne({where: {username: 'zhangdong'}})
  if (!user) await User.create({username: 'zhangdong', password: 'ict@zhangdong'})
}

module.exports = init