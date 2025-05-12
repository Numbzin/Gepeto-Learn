# Desafio Bônus – O Traidor Entre Nós 🕵️‍♂️

Este desafio vai testar sua **capacidade de lógica, leitura de dados e geração de relatórios** com base no exército de sombras.

## 📘 Objetivo

Criar uma rota `/relatorio-lealdade` que:

- Mostre o número total de sombras
- Mostre quantas são leais
- Mostre quantas são traidoras
- Mostre a porcentagem de traidores com uma casa decimal

## 📦 Exemplo de resposta esperada (JSON)

```json
{
  "total": 5,
  "leais": 3,
  "traidoras": 2,
  "porcentagemTraidoras": "40.0%"
}
```

## 📁 Arquivos

- `database/shadows.json` → contém os dados
- `shadowdb.js` → módulo para leitura
- `desafio.js` → instruções
- `desafio-feito.js` → onde você irá resolver
