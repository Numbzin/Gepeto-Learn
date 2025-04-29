// Desafio – Escopo e Callback

function registrarShadow(nome, nivel) {
  if (!nome || !nivel) {
    return { erro: "Nome e nível são obrigatórios." };
  }

  const sombra = {
    nome,
    nivel,
  };

  function formatarConvocacao() {
    console.log(`Sombra: ${sombra.nome} (Nível: ${sombra.nivel})`);
  }

  // Retorna a função, sem executar ela aqui
  return formatarConvocacao;
}

const registro = [
  registrarShadow("Igris", 10),
  registrarShadow("Beru", 15),
  registrarShadow("Kaisel", 11),
];

function callback(funcao) {
  funcao(); // Aqui você chama a função recebida
}

for (const registros of registro) {
  callback(registros); // cada registro é uma função
}
