// Desafio – Funções de Alta Ordem

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
