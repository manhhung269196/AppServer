module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Demo100@",
    DB: "data_todo",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };