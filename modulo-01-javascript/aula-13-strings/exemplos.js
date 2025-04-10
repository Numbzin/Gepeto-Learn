const sombra = " Bellion ";

console.log("Tamanho:", sombra.length);
console.log("Maiúsculo:", sombra.toUpperCase());
console.log("Minúsculo:", sombra.toLowerCase());
console.log("Inclui 'lli'?", sombra.includes("lli"));
console.log("Começa com 'B'?", sombra.trim().startsWith("B"));
console.log("Corte (0 a 3):", sombra.slice(0, 3));
console.log("Replace:", sombra.replace("Bellion", "Beru"));
console.log("Trim:", sombra.trim());
console.log("Split:", "Beru-Igris-Iron".split("-"));
