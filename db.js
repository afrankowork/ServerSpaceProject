const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB_STRING);

module.exports = db;

