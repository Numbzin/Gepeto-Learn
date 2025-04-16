// Desenvolva aqui sua solução

const sombras = ["Beru", "Igris", "Iron"];

// Funções a serem compostas:
// - gritar
// - marcarComFogo
// - convocar
// - compor

// Use for...of ou map para aplicar as transformações
const gritar = (nome) => nome.toUpperCase();
const marcarComFogo = (nome) => `🔥 ${nome}`;
const convocar = (nome) => {
  console.log(`${nome} foi convocado!`);
};

const compor = (f1, f2) => (arg) => f1(f2(arg));

for (const sombra of sombras) {
  const processarSombra = compor(convocar, compor(marcarComFogo, gritar));
  processarSombra(sombra);
}
