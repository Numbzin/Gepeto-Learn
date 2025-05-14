const express = require("express");
const router = express.Router();
const { listarSombras } = require("../controllers/sombrasController");

router.get("/", listarSombras);

module.exports = router;
