// Cadastro
function cadastrarSombra(nome, nivel, tipo) {
  const novaSombra = { nome, nivel, tipo };
  sombras.push(novaSombra);
}

// Listagem
function listarSombras() {
  console.table(sombras);
}

// Relatório
function gerarRelatorio() {
  const media = sombras.reduce((acc, s) => acc + s.nivel, 0) / sombras.length;
  console.log("Média de nível:", media.toFixed(2));
}

// Dados iniciais
const sombras = [];

cadastrarSombra("Beru", 10, "assassino");
cadastrarSombra("Igris", 9, "tanque");

listarSombras();
gerarRelatorio();
