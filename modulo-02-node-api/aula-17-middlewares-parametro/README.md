# Aula 17 — Middlewares com Parâmetro (verificarNivel)

## Objetivo:
Aprender a criar middlewares dinâmicos que recebem parâmetros e controlam acesso.

## Desafio:
- Criar um middleware `verificarNivel(minimo)`
- Só permitir acesso à rota `/sombras/elite` se `?nivel=80` ou mais
- Aplicar esse middleware na rota
- Usar o controller `listarSombrasElite` para responder com as sombras de elite

## Exemplo de uso:
GET /sombras/elite?nivel=50 → bloqueia (403)  
GET /sombras/elite?nivel=90 → responde com JSON
