// Aula 11 – Query string, url.parse() e validação básica
//
// Objetivo:
// - Crie uma rota /verifica?nome=Beru&nivel=10
// - Extraia os parâmetros com url.parse()
// - Se algum parâmetro estiver ausente, retorne erro 400 com mensagem
// - Caso tudo esteja correto, exiba { mensagem: "Tudo certo, Beru nível 10!" }
//
// Use url.parse(req.url, true) e query.nome / query.nivel
