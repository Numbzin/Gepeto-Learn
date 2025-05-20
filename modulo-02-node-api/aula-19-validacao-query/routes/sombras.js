// TODO: criar rota GET /sombras com query ?nivel=
// deve usar validarNivelQuery
const validarNivelQuery = require("../middlewares/validarNivelQuery");
const express = require("express");
const router = express.Router();

router.get("/", validarNivelQuery, (req, res) => {
  res.json({ mensagem: "Rota /sombras com query validada!" });
});

module.exports = router;
