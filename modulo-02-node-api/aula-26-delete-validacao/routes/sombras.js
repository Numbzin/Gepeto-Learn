const express = require("express");
const router = express.Router();
const { deletarSombra } = require("../controllers/sombrasController");

router.delete("/:id", deletarSombra);

module.exports = router;
