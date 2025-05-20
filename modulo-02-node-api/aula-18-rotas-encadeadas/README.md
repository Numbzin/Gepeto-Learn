# Aula 18 – Rota aninhada com parâmetro

## Objetivo:

Criar uma API REST com rotas encadeadas, modulares e com leitura de parâmetros.

## Exemplo de uso:

GET /usuarios/1/sombras → retorna as sombras do usuário 1

## Estrutura esperada:

/routes
└── usuarios.js → rota GET /usuarios/:id/sombras
/controllers
└── sombrasController.js → lógica de filtro
/database
├── sombras.json
└── usuarios.json
