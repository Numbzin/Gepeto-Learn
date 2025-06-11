// TODO: importar express e controller
// TODO: criar rota GET / que use filtro por query string

const express = require("express");
const router = express.Router();

const { filtrarSombras } = require("../controllers/sombrasController");
router.get("/", filtrarSombras);

module.exports = router;
