const personagens = [
  {
    nome: "Igris",
    classe: "tank",
    nivel: 90,
    inventario: ["espada", "escudo"],
    atributos: { forca: 80, agilidade: 40, inteligencia: 30 }
  },
  {
    nome: "Tusk",
    classe: "mago",
    nivel: 75,
    inventario: ["cajado", "poção", "livro"],
    atributos: { forca: 30, agilidade: 20, inteligencia: 90 }
  },
  {
    nome: "Kaisel",
    classe: "montaria",
    nivel: 85,
    inventario: [],
    atributos: { forca: 60, agilidade: 60, inteligencia: 20 }
  }
];

// DESAFIO 1
// TODO: Crie uma função chamada `inventarioCheio()`
// Deve retornar os personagens que possuem 2 ou mais itens no inventário

// DESAFIO 2
// TODO: Crie uma função chamada `mediaInteligencia()`
// Deve retornar a média da inteligência de todos os personagens

// DESAFIO 3
// TODO: Crie uma função chamada `nomeDosTanquesFortes()`
// Retorna um array com nomes dos personagens da classe "tank" com força > 70

// DESAFIO 4
// TODO: Crie uma função chamada `atributoMaisForte(personagem)`
// Deve retornar qual atributo é o mais alto (força, agilidade ou inteligência) para aquele personagem
