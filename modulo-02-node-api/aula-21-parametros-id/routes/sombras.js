// TODO: importar express e controller
const express = require("express");
const router = express.Router();
const { buscarSombraPorId } = require("../controllers/sombrasController");

// TODO: Criar rota GET /:id para buscar sombra por ID
router.get("/:id", buscarSombraPorId);

module.exports = router;
