// TODO: importar express e rotas de usuarios e sombras

const express = require("express");
const router = express.Router();
const usuariosRoutes = require("./usuarios");
const sombrasRoutes = require("./sombras");

router.use("/usuarios", usuariosRoutes);
router.use("/sombras", sombrasRoutes);

module.exports = router;
