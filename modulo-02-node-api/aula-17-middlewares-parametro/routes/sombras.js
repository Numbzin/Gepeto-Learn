// TODO: importar express, controller e middleware
// TODO: criar rota GET /elite com middleware verificarNivel(80)

const express = require("express");
const router = express.Router();
const { listarSombrasElite } = require("../controllers/sombrasController");
const verificarNivel = require("../middlewares/verificarNivel");

router.get("/elite", verificarNivel(80), listarSombrasElite);

module.exports = router;
