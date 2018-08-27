const {sequelize, Sequelize} = require('./base')

const ApplyInfomation = sequelize.define('apply_infomation', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  place: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idCard: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  humanRelation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  group: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  entryTime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  station: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rewards: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  marriage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isBeiJingRegistered: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  registerLocation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  needBeiJingResidentPermit: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isSocialSecurityOverSixtyMonth: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  haveHouseTransitionRecord: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  haveHouseInBeiJing: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  haveElseFavouratePolicy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  else: {
    type: Sequelize.TEXT
  }
})

module.exports = ApplyInfomation