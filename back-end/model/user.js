const {sequelize, Sequelize} = require('./base')
const Role = require('./role')

const User = sequelize.define('user', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  roleId: {
    type: Sequelize.INTEGER,
    references: {
      model: Role,
      key: 'id'
    }
  }
})

module.exports = User