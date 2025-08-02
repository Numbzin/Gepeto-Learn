function sanitizarBody(req, res, next) {
  if (req.body.nome) {
    req.body.nome = req.body.nome.trim();
  }
  if (req.body.tipo) {
    req.body.tipo = req.body.tipo.toLowerCase();
  }
  next();
}

module.exports = {
  sanitizarBody
};
