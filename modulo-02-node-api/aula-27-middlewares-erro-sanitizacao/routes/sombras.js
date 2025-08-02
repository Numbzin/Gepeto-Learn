const express = require("express");
const router = express.Router();
const { criarSombra } = require("../controllers/sombrasController");
const { sanitizarBody } = require("../middlewares/sanitizar");

router.post("/", sanitizarBody, criarSombra);

module.exports = router;
