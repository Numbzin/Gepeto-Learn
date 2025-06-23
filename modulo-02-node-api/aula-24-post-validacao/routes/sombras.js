// TODO: importar express e controller
const express = require("express");
const router = express.Router();
const { criarSombra } = require("../controllers/sombrasController");

// TODO: criar rota POST / para criar nova sombra
router.post("/", criarSombra);

module.exports = router;
