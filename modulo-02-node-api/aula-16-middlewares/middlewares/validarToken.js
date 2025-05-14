// TODO: completar o middleware
function validarToken(req, res, next) {
  const token = req.query.token;

  // Dica: use um token fictício como "shadow123"

  // Exemplo de lógica:
  // Se o token for inválido ou ausente, retorne 401
  if (!token || token !== "shadow123") {
    return res
      .status(401)
      .json({ error: "Token inválido ou ausente, acesso negado." });
  }
  // Caso contrário, chame next()
  next();
}

module.exports = validarToken;
