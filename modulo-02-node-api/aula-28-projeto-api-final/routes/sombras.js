const express = require("express");
const router = express.Router();
const {
  listarSombras,
  obterSombra,
  criarSombra,
  atualizarParcialmente,
  deletarSombra
} = require("../controllers/sombrasController");
const { sanitizarBody } = require("../middlewares/sanitizar");

router.get("/", listarSombras);
router.get("/:id", obterSombra);
router.post("/", sanitizarBody, criarSombra);
router.patch("/:id", sanitizarBody, atualizarParcialmente);
router.delete("/:id", deletarSombra);

module.exports = router;
