// Desafio – JSON

// 1. Crie um objeto com nome e nível de uma shadow
// 2. Converta esse objeto para JSON e exiba no console
// 3. Em seguida, transforme de volta em objeto
// 4. Acesse o nome e o nível do objeto final
const shadow = { name: "Beru", nivel: 10 };

const json = JSON.stringify(shadow);
console.log("JSON: ", json);

const object = JSON.parse(json);
console.log("Como objeto", object);
console.log("Nome da sombra", object.name);
