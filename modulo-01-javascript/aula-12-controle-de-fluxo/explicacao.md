# Aula 12 – Controle de Fluxo: switch, try/catch, throw

## switch
Permite lidar com múltiplos casos:

```js
const rank = "A";
switch (rank) {
  case "S":
    console.log("Rank S!");
    break;
  case "A":
    console.log("Rank A!");
    break;
  default:
    console.log("Desconhecido");
}
```

## try/catch
Usado para capturar erros de forma segura:

```js
try {
  let x = JSON.parse("erro");
} catch (e) {
  console.log("Erro capturado:", e.message);
}
```

## throw
Permite lançar erros manualmente:

```js
function executar(nome) {
  if (!nome) throw new Error("Nome obrigatório");
}
```
