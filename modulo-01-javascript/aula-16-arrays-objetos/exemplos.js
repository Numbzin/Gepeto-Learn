const sombras = [];

function registrarShadow(nome, nivel) {
  const registro = {
    nome,
    nivel,
    data: new Date().toLocaleDateString("pt-BR")
  };
  sombras.push(registro);
}

// Simulando convocações
registrarShadow("Igris", 9);
registrarShadow("Beru", 10);

// Exibindo registros
for (const sombra of sombras) {
  console.log(`${sombra.nome} foi convocado em ${sombra.data}`);
}
