const {sequelize, Sequelize} = require('./base')

const Role = sequelize.define('role', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Role