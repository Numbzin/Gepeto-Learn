// Desafio – Arrays de Objetos (Avançado)

const sombras = [
  { nome: "Beru", nivel: 10 },
  { nome: "Igris", nivel: 9 },
  { nome: "Iron", nivel: 7 },
  { nome: "Bellion", nivel: 15 },
  { nome: "Kaisel", nivel: 5 },
];

// 1. Crie uma lista com os nomes das sombras em MAIÚSCULO
const nomesMaiusculos = sombras.map((sombra) => sombra.nome.toUpperCase());
console.log("Nomes em maiúsculo:", nomesMaiusculos);

// 2. Filtre as sombras com nível 9 ou mais
const sombrasFortissimas = sombras.filter((sombra) => sombra.nivel >= 9);
console.log("Sombras nível 9+:", sombrasFortissimas);

// 3. Calcule a média de nível das sombras
const mediaNivel =
  sombras.reduce((soma, sombra) => soma + sombra.nivel, 0) / sombras.length;
console.log("Média de nível:", mediaNivel);

// 4. Verifique se alguma sombra tem nível menor que 6
const temNivelBaixo = sombras.some((sombra) => sombra.nivel < 6);
console.log("Existe sombra com nível < 6?", temNivelBaixo);

// 5. Ordene as sombras por nível (decrescente)
const sombrasOrdenadas = [...sombras].sort((a, b) => b.nivel - a.nivel);
console.log("Sombras ordenadas por nível:", sombrasOrdenadas);

// 6. Encontre a sombra com o nome "Igris"
const igris = sombras.find((sombra) => sombra.nome === "Igris");
console.log("Sombra Igris:", igris);

// 7. Verifique se todas têm nível pelo menos 5
const todasFortinhas = sombras.every((sombra) => sombra.nivel >= 5);
console.log("Todas têm nível 5+?", todasFortinhas);
