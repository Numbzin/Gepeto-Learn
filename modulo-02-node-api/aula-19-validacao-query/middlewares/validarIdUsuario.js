// TODO: criar middleware para validar req.params.id
// se não for número → 400
// se não existir no banco → 404
const fs = require("fs");
const path = require("path");

function validarIdUsuario(req, res, next) {
  const id = req.params.id;

  if (isNaN(id)) {
    return res.status(400).json({ erro: "ID do usuário inválido" });
  }

  const usuarioPath = path.join(__dirname, "../database/usuarios.json");
  const usuarios = JSON.parse(fs.readFileSync(usuarioPath));

  const usuarioExiste = usuarios.some((u) => u.id === Number(id));

  if (!usuarioExiste) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  next();
}
module.exports = validarIdUsuario;
