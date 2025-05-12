# Aula 13 – Criando sombras com POST

Nesta aula você vai aprender a trabalhar com requisições do tipo POST no Express, recebendo dados de fora para salvar no JSON.

## ✅ Objetivos

- Criar a rota `POST /sombra`
- Receber `nome`, `nivel` e `tipo` via `req.body`
- Validar se todos os campos foram enviados
- Salvar a nova sombra com `adicionarShadow`
- Retornar a sombra criada com `status 201`

## 🧪 Exemplo de uso com POST (via Insomnia, Postman ou fetch)

```json
POST /sombra
{
  "nome": "Tusk",
  "nivel": 8,
  "tipo": "mago"
}
```

Resposta esperada:

```json
{
  "mensagem": "Sombra criada com sucesso",
  "sombra": {
    "id": 4,
    "nome": "Tusk",
    "nivel": 8,
    "tipo": "mago"
  }
}
```

## 📁 Arquivos

- `shadowdb.js` – módulo para leitura e escrita
- `database/shadows.json` – base de dados
- `desafio.js` – instruções
- `desafio-feito.js` – onde resolver
