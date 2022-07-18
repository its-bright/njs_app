const dbConfig = require("../config/db.config.js");

//Reading the db password from secrets expoosed as env in the task
//USER_NAME = process.env.DB_USERNAME;
//PASSWORD = process.env.DB_PASSWORD;
//const sequelize = new Sequelize(dbConfig.DB, USER_NAME, PASSWORD, {

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
