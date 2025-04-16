// Desafio – Funções de Alta Ordem

// 1. Crie uma função que receba uma função de callback e a execute
// 2. Crie uma função que retorne outra função, e essa interna imprime "Sombra NOME invocada!"
// 3. Crie uma função 'compor' que recebe duas funções e retorna uma nova que combina as duas
function executar(acao) {
  console.log("Executando:...");
  acao();
}

function invocar(nome) {
  return () => {
    console.log(`Sombra ${nome} invocada!`);
  };
}

const compor = (f1, f2) => {
  return (arg) => {
    const funcaoInterna = f2(arg); // Isso pega o resultado de invocar(nome)
    f1(funcaoInterna); // Isso passa a função retornada para executar()
  };
};

const funcaoCombinada = compor(executar, invocar);

funcaoCombinada("Beru");
