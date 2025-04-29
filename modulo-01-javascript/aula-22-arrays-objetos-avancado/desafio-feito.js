// Desafio – Arrays de Objetos (Avançado)

const sombras = [
  { nome: "Beru", nivel: 10 },
  { nome: "Igris", nivel: 9 },
  { nome: "Iron", nivel: 7 },
  { nome: "Bellion", nivel: 15 },
  { nome: "Kaisel", nivel: 5 },
];

const nomesMaiusculos = sombras.map((sombra) => sombra.nome.toUpperCase());
console.log("Nomes em maiúsculo:", nomesMaiusculos);

const sombrasFortissimas = sombras.filter((sombra) => sombra.nivel >= 9);
console.log("Sombras nível 9+:", sombrasFortissimas);

const mediaNivel =
  sombras.reduce((soma, sombra) => soma + sombra.nivel, 0) / sombras.length;
console.log("Média de nível:", mediaNivel);

const temNivelBaixo = sombras.some((sombra) => sombra.nivel < 6);
console.log("Existe sombra com nível < 6?", temNivelBaixo);

const sombrasOrdenadas = [...sombras].sort((a, b) => b.nivel - a.nivel);
console.log("Sombras ordenadas por nível:", sombrasOrdenadas);

const igris = sombras.find((sombra) => sombra.nome === "Igris");
console.log("Sombra Igris:", igris);

const todasFortinhas = sombras.every((sombra) => sombra.nivel >= 5);
console.log("Todas têm nível 5+?", todasFortinhas);
