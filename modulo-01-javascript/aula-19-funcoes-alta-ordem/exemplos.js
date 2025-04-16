// Exemplo 1 – função que recebe outra
function executar(acao) {
  console.log("Executando ação...");
  acao();
}

const invocar = () => console.log("Sombra convocada!");
executar(invocar);

// Exemplo 2 – função que retorna outra
function criarMensagem(nome) {
  return () => {
    console.log("Convocação: Sombra", nome);
  };
}

const mensagem = criarMensagem("Beru");
mensagem();

// Exemplo 3 – composição
const dobrar = x => x * 2;
const somar = x => x + 5;

const compor = (f, g) => x => f(g(x));
const resultado = compor(dobrar, somar)(3); // (3 + 5) * 2 = 16
console.log("Resultado da composição:", resultado);
