function tratarErros(err, req, res, next) {
  console.error("Erro:", err.message);

  return res.status(400).json({
    mensagem: err.message || "Erro inesperado no servidor"
  });
}

module.exports = {
  tratarErros
};
