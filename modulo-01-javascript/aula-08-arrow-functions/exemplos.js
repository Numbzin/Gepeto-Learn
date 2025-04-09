const saudacao = () => console.log("Olá, rei!");
saudacao();

const dobro = (num) => num * 2;
console.log("Dobro de 4:", dobro(4));

const media = (n1, n2) => (n1 + n2) / 2;
console.log("Média de 8 e 7:", media(8, 7));

const mensagem = (nome) => {
  const frase = "Bem-vindo, " + nome;
  return frase;
};
console.log(mensagem("Fernando"));
