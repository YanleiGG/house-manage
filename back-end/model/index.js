const User = require('./user')
const Role = require('./role')
const ApplyInfomation = require('./apply_infomation')
const { sequelize, Sequelize } = require('./base')

Role.hasMany(User)
User.belongsTo(Role)

User.hasOne(ApplyInfomation)

Role.sync()   // 一对多关系中的'一'需要在'多'之前初始化
User.sync()
ApplyInfomation.sync()

module.exports = {
  User,
  Role,
  ApplyInfomation,
  sequelize, 
  Sequelize
}