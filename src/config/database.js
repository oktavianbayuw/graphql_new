const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dea_ms_spp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
