// Crie seu código aqui conforme instruções do README
const name = "NMB";
const age = 22;
const job = "Programador";
const isEmployed = true;
const salary = 3500;

const sumAnualSalary = salary * 12;
const estimatedSalary = sumAnualSalary * 0.1; // 10% de comissão, desconto ou outro

console.log(`Nome: ${name}`);
console.log(`Idade: ${age}`);
console.log(`Profissão: ${job}`);
console.log(`Empregado: ${isEmployed ? "Sim" : "Não"}`);
console.log(`Salário: R$ ${salary}`);
console.log(`Salário Anual estimado: R$ ${sumAnualSalary}`);
console.log(`10% do salário anual: R$ ${estimatedSalary}`);
