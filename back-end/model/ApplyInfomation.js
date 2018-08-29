const {sequelize, Sequelize} = require('./base')

const ApplyInfomation = sequelize.define('ApplyInfomation', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  place: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  sex: {
    type: Sequelize.STRING
  },
  idCard: {
    type: Sequelize.STRING
  },
  humanRelation: {
    type: Sequelize.STRING
  },
  group: {
    type: Sequelize.STRING
  },
  entryTime: {
    type: Sequelize.STRING
  },
  station: {
    type: Sequelize.STRING
  },
  rewards: {
    type: Sequelize.TEXT
  },
  marriage: {
    type: Sequelize.STRING
  },
  isBeiJingRegistered: {
    type: Sequelize.STRING
  },
  registerLocation: {
    type: Sequelize.STRING
  },
  needBeiJingResidentPermit: {
    type: Sequelize.STRING
  },
  isSocialSecurityOverSixtyMonth: {
    type: Sequelize.STRING
  },
  haveHouseTransitionRecord: {
    type: Sequelize.STRING
  },
  haveHouseInBeiJing: {
    type: Sequelize.STRING
  },
  haveElseFavouratePolicy: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  mate: {
    type: Sequelize.STRING
  },
  qualifications: {
    type: Sequelize.STRING
  },
  else: {
    type: Sequelize.TEXT
  }
})

module.exports = ApplyInfomation