// TODO: Criar rota GET /usuarios/:id/sombras que usa listarSombrasDoUsuario

const express = require("express");
const router = express.Router();
const { listarSombrasDoUsuario } = require("../controllers/sombrasController");

router.get("/:id/sombras", listarSombrasDoUsuario);

module.exports = router;
