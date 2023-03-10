const express = require("express");
const bodyParser = require("body-parser");
const knex = require("./src/config/postgres");

const app = express();
app.use(bodyParser.json());

const port = 3000;

// * Swagger
const swaggerUi = require("swagger-ui-express");
const apiDocumentation = require("./apidocs.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocumentation));

// * Routes
const router = require("./src/routes/routes");
app.use("/jenis", router);

app.get("/api/jenis", async (req, res) => {
  try {
    const jenis = await knex("jenis").orderBy("id", "asc");
    res.json(jenis);
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/jenis/:id", async (req, res) => {
  try {
    const jenis = await knex("jenis").where("id", req.params.id);
    res.json(jenis);
  } catch (e) {
    console.log(e);
  }
});

app.post("/api/jenis", async (req, res) => {
  const data = {
    id: req.body.id,
    nama: req.body.nama,
  };

  try {
    await knex("jenis").insert(data);
    res.status(201).json({ Status: "Data berhasil di input" });
  } catch (e) {
    console.log(e);
  }
});

app.put("/api/jenis/:id", async (req, res) => {
  const data = {
    nama: req.body.nama,
  };

  try {
    await knex("jenis").where({ id: req.params.id }).update(data);
    res.json({ Status: "Data berhasil di update" });
  } catch (e) {
    console.log(e);
  }
});

app.delete("/api/jenis/:id", async (req, res) => {
  try {
    await knex("jenis").where({ id: req.params.id }).del();
    res.json({ Status: "Data berhasil di hapus" });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
