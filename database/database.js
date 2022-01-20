const Sequelize = require('sequelize');

//const state = process.env.NODE_ENV || 'development';
const state = 'production';
const config = require('../config/config.js')[state];

const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
      host: config.database.host,
      dialect: config.database.dialect,
      timezone: '-03:00',
      dialectOptions: {
        useUTC: false
      },
    }
);

module.exports = sequelize;