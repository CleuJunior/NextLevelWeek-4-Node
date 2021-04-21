import express from 'express';

const app = express();

/*
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Altereçao específica
*/

// http;//localhost:3333/users
app.get("/", (request, response) => {
    return response.json({"menssage": 'Hello World - NLW'});
});

// 1 param => Rota(Recurso API)
// 2 param => requeste, reponse

app.post("/", (request, response) => {
    return response.json({'message': 'Dados Salvo com sucesso'});
})

app.listen(3333, () =>
    console.log('Servidor funcionando!')
);