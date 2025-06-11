// Resolva aqui os desafios da Aula 06 — Objetos Aninhados
// Copie o array "personagens" de desafio.js para testar com console.log
const personagens = [
  {
    nome: "Igris",
    classe: "tank",
    nivel: 90,
    inventario: ["espada", "escudo"],
    atributos: { forca: 80, agilidade: 40, inteligencia: 30 },
  },
  {
    nome: "Tusk",
    classe: "mago",
    nivel: 75,
    inventario: ["cajado", "poção", "livro"],
    atributos: { forca: 30, agilidade: 20, inteligencia: 90 },
  },
  {
    nome: "Kaisel",
    classe: "montaria",
    nivel: 85,
    inventario: [],
    atributos: { forca: 60, agilidade: 60, inteligencia: 20 },
  },
];

// DESAFIO 1
// TODO: Crie uma função chamada `inventarioCheio()`
// Deve retornar os personagens que possuem 2 ou mais itens no inventário
function inventarioCheio() {
  let resultado = [];
  for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].inventario.length >= 2) {
      resultado.push(personagens[i]);
    }
  }
  return resultado;
}

console.log("Personagens com inventário cheio:", inventarioCheio());

// DESAFIO 2
// TODO: Crie uma função chamada `mediaInteligencia()`
// Deve retornar a média da inteligência de todos os personagens

function mediaInteligencia() {
  let mediaInteligencia = 0;
  let somaInteligencia = 0;
  for (let i = 0; i < personagens.length; i++) {
    somaInteligencia += personagens[i].atributos.inteligencia;
    mediaInteligencia = somaInteligencia / personagens.length;
  }
  return parseInt(mediaInteligencia);
}

console.log(mediaInteligencia());

// DESAFIO 3
// TODO: Crie uma função chamada `nomeDosTanquesFortes()`
// Retorna um array com nomes dos personagens da classe "tank" com força > 70

function nomeDosTanquesFortes() {
  let tanquesFortes = [];
  for (let i = 0; i < personagens.length; i++) {
    if (
      personagens[i].classe === "tank" &&
      personagens[i].atributos.forca > 70
    ) {
      tanquesFortes.push(personagens[i].nome);
    }
  }
  return tanquesFortes;
}

console.log("Tanques fortes:", nomeDosTanquesFortes());

// DESAFIO 4
// TODO: Crie uma função chamada `atributoMaisForte(personagem)`
// Deve retornar qual atributo é o mais alto (força, agilidade ou inteligência) para aquele personagem

function atributoMaisForte(personagem) {
  const forcaDoPersonagem = personagem.atributos.forca;
  const agilidadeDoPersonagem = personagem.atributos.agilidade;
  const inteligenciaDoPersonagem = personagem.atributos.inteligencia;
  if (
    forcaDoPersonagem >= agilidadeDoPersonagem &&
    forcaDoPersonagem >= inteligenciaDoPersonagem
  ) {
    return "forca";
  } else if (agilidadeDoPersonagem >= inteligenciaDoPersonagem) {
    return "agilidade";
  } else {
    return "inteligencia";
  }
}
console.log(atributoMaisForte(personagens[0])); // Deve retornar "forca" para Igris
console.log(atributoMaisForte(personagens[1])); // Deve retornar "inteligencia" para Tusk
console.log(atributoMaisForte(personagens[2])); // Deve retornar "forca" ou "agilidade" para Kaisel (ambos são 60)
