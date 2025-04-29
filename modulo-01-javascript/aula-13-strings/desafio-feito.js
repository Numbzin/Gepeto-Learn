// Desafio – Strings

// 1. Crie uma string com uma mensagem secreta ex: "  igRis está chAmando   "
// 2. Use métodos para:
//    a) Tirar espaços
//    b) Colocar tudo em minúsculo
//    c) Trocar "igris" por "Beru"
//    d) Verificar se a mensagem final contém a palavra "beru"
//    e) Dividir a frase final em palavras (em array)

const secret = "    IgRis está cHaMandO       ";

const limpa = secret.trim().toLowerCase(); // tira espaços e normaliza
const trocada = limpa.replace("igris", "beru"); // troca o nome
const contemBeru = trocada.includes("beru"); // verifica se contém "beru"
const palavras = trocada.split(" "); // quebra em palavras

console.log("Final normalizado:", trocada);
console.log("Contém 'beru'?", contemBeru);
console.log("Frase em palavras:", palavras);
