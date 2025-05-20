// TODO: criar rota GET /usuarios/:id/sombras
// deve usar validarIdUsuario e listarSombrasDoUsuario

const express = require("express");
const router = express.Router();

const validarIdUsuario = require("../middlewares/validarIdUsuario");
const { listarSombrasDoUsuario } = require("../controllers/sombrasController");

router.get("/:id/sombras", validarIdUsuario, listarSombrasDoUsuario);

module.exports = router;
