function verificarNivel(minimo) {
  return function (req, res, next) {
    const { nivel } = req.query;

    if (!nivel || isNaN(nivel)) {
      return res.status(400).json({ erro: "Nivel invalido!" });
    }

    if (Number(nivel) < minimo) {
      return res.status(403).json({ erro: `Nivel minimo exigido ${minimo}` });
    }

    next();
  };
}

module.exports = verificarNivel;
