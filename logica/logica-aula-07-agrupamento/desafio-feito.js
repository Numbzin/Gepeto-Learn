// Resolva aqui os desafios da Aula 07 — Agrupamento e Contagem
// Copie o array "personagens" do desafio.js para fa zer os testes
const personagens = [
  { nome: "Igris", classe: "tank", nivel: 90 },
  { nome: "Tusk", classe: "mago", nivel: 75 },
  { nome: "Iron", classe: "tank", nivel: 40 },
  { nome: "Kaisel", classe: "montaria", nivel: 85 },
  { nome: "Beru", classe: "assassino", nivel: 100 },
  { nome: "Jin-Woo", classe: "invocador", nivel: 120 },
];

// DESAFIO 1
// TODO: Crie uma função `contarPorClasse()`
// Deve retornar um objeto com a contagem de personagens por classe

function contarPorClasse() {
  let contagemPorClasse = {};
  for (let i = 0; i < personagens.length; i++) {
    const personagemAtual = personagens[i];
    const classeDoPersonagem = personagemAtual.classe;
    if (classeDoPersonagem in contagemPorClasse) {
      contagemPorClasse[classeDoPersonagem]++;
    } else {
      contagemPorClasse[classeDoPersonagem] = 1;
    }
  }
  return contagemPorClasse;
}

console.log(contarPorClasse());

// DESAFIO 2
// TODO: Crie uma função `agruparPorClasse()`
// Deve retornar um objeto com arrays de personagens por classe
function agruparPorClasse() {
  let personagemPorClasse = {};
  for (let i = 0; i < personagens.length; i++) {
    const personagemAtual = personagens[i];
    const classeDoPersonagem = personagemAtual.classe;
    if (personagemPorClasse[classeDoPersonagem]) {
      personagemPorClasse[classeDoPersonagem].push(personagemAtual);
    } else {
      personagemPorClasse[classeDoPersonagem] = [personagemAtual];
    }
  }
  return personagemPorClasse;
}

console.log(agruparPorClasse());

// DESAFIO 3
// TODO: Crie uma função `contarPorFaixaDeNivel()`
// Baixo: até 60 | Médio: 61 a 90 | Alto: acima de 90
// Deve retornar um objeto com essas 3 categorias e as quantidades

function contarPorFaixaDeNivel() {
  let contagem = { Baixo: 0, Medio: 0, Alto: 0 };
  for (let i = 0; i < personagens.length; i++) {
    const PersonagemAtual = personagens[i];
    const nivel = PersonagemAtual.nivel;
    if (nivel <= 60) {
      contagem.Baixo++;
    } else if (nivel >= 61 && nivel <= 90) {
      contagem.Medio++;
    } else {
      contagem.Alto++;
    }
  }
  return contagem;
}

console.log(contarPorFaixaDeNivel());

// DESAFIO 4
// TODO: Crie uma função `percentualPorClasse()`
// Deve retornar um objeto com as classes e o percentual (%) de cada uma no total
function percentualPorClasse() {
  const contagens = contarPorClasse();
  const totalPersonagens = personagens.length;
  let percentuaisPorClasse = {};

  // 3. Iterar sobre as classes contadas
  for (const classe in contagens) {
    if (totalPersonagens > 0) {
      const quantidadeDaClasse = contagens[classe];
      // 4. Calcular e armazenar o percentual
      const percentual = (quantidadeDaClasse / totalPersonagens) * 100;
      percentuaisPorClasse[classe] = parseInt(percentual.toFixed(2));
    } else {
      percentuaisPorClasse[classe] = 0;
    }
  }

  return percentuaisPorClasse;
}

console.log(percentualPorClasse());
