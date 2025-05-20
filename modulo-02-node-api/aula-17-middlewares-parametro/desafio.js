/**
 * Desafio da Aula 17 – Middleware com parâmetro
 *
 * Objetivo:
 * Criar um middleware chamado verificarNivel(minimo)
 * que só permite o acesso à rota GET /sombras/elite se o valor de req.query.nivel for >= minimo
 *
 * Instruções:
 * 1. Crie o middleware em middlewares/verificarNivel.js
 * 2. Aplique esse middleware na rota GET /sombras/elite com mínimo 80
 * 3. Teste acessos com e sem o nível mínimo na query string (?nivel=...)
 * 4. Utilize o controller listarSombrasElite para retornar apenas sombras elite
 */
