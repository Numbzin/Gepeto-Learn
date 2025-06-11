/**
 * Aula 20 — Sistema de Filtros com Query String
 *
 * Objetivo:
 * Criar um endpoint GET /sombras que permita filtrar sombras por tipo e/ou nível mínimo
 *
 * Instruções:
 * - Leia os parâmetros tipo e nivelMin da query string
 * - Se tipo estiver presente, filtre por tipo
 * - Se nivelMin estiver presente, filtre por nivel >= nivelMin
 * - Os dois filtros podem ser combinados
 * - Use os dados do arquivo sombras.json (já prontos)
 *
 * Exemplo de uso:
 * GET /sombras?tipo=tank&nivelMin=50
 * GET /sombras?nivelMin=80
 * GET /sombras?tipo=mago
 */
