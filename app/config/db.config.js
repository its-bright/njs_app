module.exports = {
  HOST: "<Your host Name>",
  USER: "<Your user name>",
  PASSWORD: "<Your Passwd>",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
