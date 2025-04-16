// .trim()
console.log("  Beru  ".trim()); // "Beru"

// .replace()
console.log("Igris".replace("I", "A")); // "Agris"

// .split() + .join()
const partes = "Beru-Igris-Iron".split("-");
console.log(partes); // ["Beru", "Igris", "Iron"]
console.log(partes.join(" + ")); // "Beru + Igris + Iron"

// .includes()
console.log("Bellion".includes("ll")); // true

// .startsWith() e .endsWith()
console.log("Beru".startsWith("Be")); // true
console.log("Beru".endsWith("u")); // true
