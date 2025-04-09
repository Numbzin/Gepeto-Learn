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

let products = [
  { nome: "fone", valor: 250, quantidade: 1 },
  { nome: "teclado", valor: 400, quantidade: 1 },
  { nome: "mouse", valor: 350, quantidade: 2 },
  { nome: "mousepad", valor: 150, quantidade: 3 },
];
for (let product of products) {
  let valorTotal = product.valor * product.quantidade;
  console.log(`Produto: ${product.nome}`);
  console.log(`Preço: R$ ${product.valor}`);
  console.log(`Quantidade: ${product.quantidade}`);
  console.log(`Valor total: R$ ${valorTotal}`);
  console.log("-----------");
}
