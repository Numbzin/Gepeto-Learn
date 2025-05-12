# Aula 14 – Atualizando e Removendo Sombras com Express

Agora que você sabe criar e listar dados, é hora de aprender a **atualizar (PUT)** e **remover (DELETE)** usando Express.js.

## ✅ Objetivos

- Criar rota `PUT /sombra/:id` para atualizar uma sombra
- Criar rota `DELETE /sombra/:id` para remover uma sombra
- Usar `req.params.id` para capturar o ID
- Validar se a sombra existe antes de alterar ou excluir
- Retornar mensagens de sucesso ou erro

## 🧪 Exemplo PUT

```http
PUT /sombra/2
{
  "nome": "Igris",
  "nivel": 10,
  "tipo": "comandante"
}
```

## 🧪 Exemplo DELETE

```http
DELETE /sombra/3
```

## 📁 Arquivos

- `shadowdb.js` – leitura e gravação
- `database/shadows.json` – dados base
- `desafio.js` – instruções
- `desafio-feito.js` – onde resolver
