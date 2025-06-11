// Resolva aqui os desafios da Aula 08 — Validação de Dados
// Copie o array "personagens" do desafio.js para testar com console.log
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
function verificarCamposObrigatorios() {
  let camposFaltando = [];
  for (let i = 0; i < personagens.length; i++) {
    if (
      typeof personagens[i].nome !== "string" ||
      personagens[i].classe === undefined ||
      !personagens[i].hasOwnProperty("nivel")
    ) {
      camposFaltando.push(personagens[i]);
    }
  }
  return camposFaltando;
}

console.log(verificarCamposObrigatorios());

// DESAFIO 2
// TODO: Crie uma função `verificarTiposValidos()`
// Deve retornar um array com os personagens que têm tipos inválidos (nome ≠ string, nivel ≠ número)
function verificarTiposValidos() {
  let tiposInvalidos = [];
  for (let i = 0; i < personagens.length; i++) {
    if (
      typeof personagens[i].nome !== "string" ||
      typeof personagens[i].nivel !== "number"
    ) {
      tiposInvalidos.push(personagens[i]);
    }
  }
  return tiposInvalidos;
}

console.log(verificarTiposValidos());

// DESAFIO 3
// TODO: Crie uma função `separarPersonagensValidos()`
// Deve retornar um objeto com duas listas: `validos` e `invalidos` (baseado nos dois critérios acima)
function separarPersonagensValidos() {
  let validos = [];
  let invalidos = [];
  for (let i = 0; i < personagens.length; i++) {
    if (
      typeof personagens[i].nome !== "string" ||
      typeof personagens[i].nivel !== "number" ||
      typeof personagens[i].classe !== "string"
    ) {
      invalidos.push(personagens[i]);
    } else {
      validos.push(personagens[i]);
    }
  }
  return { validos: validos, invalidos: invalidos };
}

console.log(separarPersonagensValidos());
