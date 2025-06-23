// TODO: importar express e controller
const express = require("express");
const router = express.Router();
const { listarSombrasOrdenadas } = require("../controllers/sombrasController");

// TODO: criar rota GET /ordenar com ?ordenar=nome|nivel
router.get("/ordenar", listarSombrasOrdenadas);

module.exports = router;
