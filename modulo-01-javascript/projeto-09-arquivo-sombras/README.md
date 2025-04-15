# Projeto 09 – Salvando Sombras em Arquivo JSON

## 🎯 Objetivo:
Criar um sistema que registre sombras em um array, e salve os dados em um arquivo .json no disco.

## 🧠 Você vai praticar:
- Uso do módulo `fs` do Node.js
- Gravar dados com `fs.writeFileSync`
- Ler dados com `fs.readFileSync`
- Usar JSON.parse e JSON.stringify com arquivos

## 📋 Instruções:
1. Ao registrar uma nova sombra (nome, nível, data), salve no arquivo sombras.json
2. Crie um comando para ler e exibir as sombras salvas
3. Estrutura do arquivo:
```json
[
  { "nome": "Beru", "nivel": 10, "data": "12/05/2025" }
]
```

## 💡 Dica:
Use `fs.existsSync()` para verificar se o arquivo já existe antes de ler.
