# Aula 07 – JSON + fs (Node.js)

Nesta aula você vai praticar:

✅ Leitura de arquivos `.json`  
✅ Uso do módulo interno `fs` do Node.js  
✅ Caminhos absolutos com `path.join`  
✅ Conversão de string para objeto com `JSON.parse`

---

## 🧪 Desafio

### Objetivo:

1. Crie uma pasta `database/` com um arquivo `shadows.json`
2. Leia esse arquivo com `fs.readFileSync` e mostre os dados no terminal
3. Use `JSON.parse` para transformar em array de objetos
4. Percorra o array e imprima as sombras no seguinte formato:
   ```
   Nome - Nível X
   ```

---

✅ Exemplo de dado no `shadows.json`:
```json
[
  { "nome": "Beru", "nivel": 10 },
  { "nome": "Igris", "nivel": 9 }
]
```
