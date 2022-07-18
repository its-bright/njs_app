module.exports = {
  HOST: "njs-app-db.cqzb5eqc6o8t.us-east-1.rds.amazonaws.com",
  USER: "root",
  PASSWORD: "98765321",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
