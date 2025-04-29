// Desafio – Lista de Shadows com Registros

// 1. Crie um array vazio para armazenar shadows
// 2. Crie uma função que receba nome e nível, crie um objeto e adicione ao array
// 3. Registre pelo menos 3 shadows
// 4. Percorra o array mostrando no console:
//    "NOME foi convocado em DATA (Nível: NIVEL)"

const shadows = [];

function registrarShadow(nome, nivel) {
  if (!nome || typeof nivel !== "number") {
    console.warn("Nome e nível válidos são obrigatórios.");
    return;
  }

  const shadow = {
    nome,
    nivel,
    data: new Date().toLocaleDateString("pt-BR"),
  };

  shadows.push(shadow);
}

registrarShadow("Beru", 10);
registrarShadow("Igris", 15);
registrarShadow("Bellion", 20);

function listarShadows(lista) {
  console.log("\n📜 Registro de Sombras:");
  for (const { nome, nivel, data } of lista) {
    console.log(`${nome} foi convocado em ${data} (Nível: ${nivel})`);
  }
}

listarShadows(shadows);
