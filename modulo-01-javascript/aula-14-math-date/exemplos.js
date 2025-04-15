// Math
console.log("Aleatório:", Math.random());
console.log("Arredondado:", Math.round(4.6));
console.log("Mínimo:", Math.min(5, 2, 8));
console.log("Potência:", Math.pow(2, 3));

// Date
const agora = new Date();
console.log("Agora:", agora);
console.log("Ano:", agora.getFullYear());
console.log("Mês:", agora.getMonth() + 1); // de 0 a 11
console.log("Dia:", agora.getDate());
console.log("Data formatada:", agora.toLocaleDateString());
