const Sequelize = require('sequelize');
const Op = Sequelize.Op
const sequelize = new Sequelize('house_manage', 'root', '1491748s', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = { sequelize, Sequelize }