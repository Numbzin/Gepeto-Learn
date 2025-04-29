// Desafio:
// Crie um array de objetos chamado 'produtos'.
// Cada produto deve ter: nome, preco, quantidade
//
// Depois, para cada produto, imprima:
// - Nome
// - Preço
// - Quantidade
// - Valor total (preço * quantidade)
//
// Use for...of para percorrer a lista

const produtos = [
  { nome: "Fone", preco: 250, quantidade: 1 },
  { nome: "Teclado", preco: 400, quantidade: 1 },
  { nome: "Mouse", preco: 350, quantidade: 2 },
  { nome: "Mousepad", preco: 150, quantidade: 3 },
];

for (const produto of produtos) {
  const valorTotal = produto.preco * produto.quantidade;
  console.log(`Produto: ${produto.nome}`);
  console.log(`Preço: R$ ${produto.preco}`);
  console.log(`Quantidade: ${produto.quantidade}`);
  console.log(`Valor total: R$ ${valorTotal}`);
  console.log("-----------");
}
