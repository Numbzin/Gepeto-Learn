const express = require("express");
const router = express.Router();
const validarToken = require("../middlewares/validarToken");
const { listarSombras } = require("../controllers/sombrasController");

router.get("/", (_, res) => {
  res.json({ mensagem: "Bem vindo ao servidor de sombras" });
});

router.get("/sombras", validarToken, listarSombras);

module.exports = router;
