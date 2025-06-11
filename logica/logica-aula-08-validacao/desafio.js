const personagens = [
  { nome: "Igris", classe: "tank", nivel: 90 },
  { nome: "Tusk", classe: "mago", nivel: 75 },
  { nome: "Kaisel", nivel: 85 }, // classe ausente
  { nome: 42, classe: "montaria", nivel: 60 }, // nome inválido
  { nome: "Beru", classe: "assassino", nivel: "cem" }, // nível inválido
  { nome: "Jin-Woo", classe: "invocador" }, // nível ausente
  { classe: "tank", nivel: 40 }, // nome ausente
];

// DESAFIO 1
// TODO: Crie uma função `verificarCamposObrigatorios()`
// Deve retornar um array com os personagens que estão com campos faltando (nome, classe ou nivel)

// DESAFIO 2
// TODO: Crie uma função `verificarTiposValidos()`
// Deve retornar um array com os personagens que têm tipos inválidos (nome ≠ string, nivel ≠ número)

// DESAFIO 3
// TODO: Crie uma função `separarPersonagensValidos()`
// Deve retornar um objeto com duas listas: `validos` e `invalidos` (baseado nos dois critérios acima)
