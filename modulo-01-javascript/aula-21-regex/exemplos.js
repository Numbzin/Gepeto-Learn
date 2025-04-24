const texto = "Beru está chamando às 10h com 2 sombras.";

// .test()
console.log(/Beru/.test(texto)); // true
console.log(/beru/i.test(texto)); // true

// .match()
console.log(texto.match(/\d/g)); // ["1", "0", "2"]

// .replace()
console.log(texto.replace(/sombras/, "sombreados")); // troca a palavra
