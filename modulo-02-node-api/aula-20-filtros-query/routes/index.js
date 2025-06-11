// TODO: importar express e sombrasRoutes
// TODO: conectar a rota /sombras ao router

const express = require("express");
const router = express.Router();
const sombrasRoutes = require("./sombras");

router.use("/sombras", sombrasRoutes);

module.exports = router;
