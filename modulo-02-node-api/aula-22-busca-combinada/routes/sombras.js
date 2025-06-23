// TODO: importar express e controller
const express = require("express");
const router = express.Router();
const { buscarSombrasComFiltros } = require("../controllers/sombrasController");

// TODO: criar rota GET / com filtros por query: nome e tipo
router.get("/", buscarSombrasComFiltros);

module.exports = router;
