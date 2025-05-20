// TODO: criar middleware para validar req.query.nivel
// deve ser número >=

function validarNivelQuery(req, res, next) {
  const { nivel } = req.query;

  if (!nivel || isNaN(nivel) || Number(nivel) < 0) {
    return res
      .status(400)
      .json({ erro: "Nivel invalido. Deve ser um numero positivo" });
  }

  next();
}

module.exports = validarNivelQuery;
