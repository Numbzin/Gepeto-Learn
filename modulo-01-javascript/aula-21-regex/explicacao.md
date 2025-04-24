# Aula 21 – Regex (Expressões Regulares)

## 🤔 O que é regex?
Regex é uma linguagem para encontrar **padrões dentro de strings**.

## 🧠 Como usar no JS:
```js
const regex = /padrão/;
regex.test("texto");       // retorna true ou false
texto.match(/padrão/);     // retorna o que encontrou
texto.replace(/padrão/, "novo");
```

---

## 🔹 Exemplos de padrões:
| Regex         | O que faz                            |
|---------------|--------------------------------------|
| `/a/`         | Procura a letra "a"                  |
| `/\d/`       | Qualquer dígito (0–9)                |
| `/\w/`       | Qualquer letra ou número             |
| `/\s/`       | Espaços                             |
| `/^a/`        | Começa com "a"                       |
| `/b$/`        | Termina com "b"                      |
| `/beru/i`     | Procura "beru" sem diferenciar maiúsculas/minúsculas |
| `/[aeiou]/g`  | Todas as vogais                      |
| `/[A-Z]/g`    | Todas as letras maiúsculas           |

## 💡 Bandeiras (flags):
- `g`: global (pega tudo, não só a 1ª)
- `i`: case insensitive (ignora maiúsc./minúsc.)

---

## 🧩 Exemplo:
```js
const texto = "Beru está chamando...";
const resultado = texto.match(/beru/i); // ["Beru"]
```
