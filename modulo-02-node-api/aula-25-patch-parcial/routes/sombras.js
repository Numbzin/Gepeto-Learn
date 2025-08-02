const express = require("express");
const router = express.Router();
const { atualizarParcialmente } = require("../controllers/sombrasController");

router.patch("/:id", atualizarParcialmente);

module.exports = router;
