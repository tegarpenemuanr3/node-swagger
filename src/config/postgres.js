const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "12345678",
    database: "dbpenjualan",
  },
});

module.exports = knex;
