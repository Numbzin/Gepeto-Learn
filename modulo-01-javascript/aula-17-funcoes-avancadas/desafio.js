// Desafio – Escopo e Callback

// 1. Crie uma função que registre uma sombra com nome e nível
// 2. Dentro dela, crie uma função interna que formate a mensagem de convocação
// 3. Depois, crie uma função que recebe um callback, e chame ela passando a função de registro
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

// Armazena a função formatadora (sem executar ainda)
const registro = [
  registrarShadow("Igris", 10),
  registrarShadow("Beru", 15),
  registrarShadow("Kaisel", 11),
];

function callback(funcao) {
  funcao(); // Aqui você chama a função recebida
}

// Chama o callback passando a função como argumento
for (const registros of registro) {
  callback(registros); // cada registro é uma função
}
