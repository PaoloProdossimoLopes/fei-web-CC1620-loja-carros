const express = require('express');
const application = express();

application.get('/' || '/login', (request, response) => {
    response.send('Vode esta na rota de login!');
});

application.get('/Cadastro', (request, response) => {
    response.send('Voce esta na rota de cadastro!');
});

const port = 8080;
application.listen(port, console.log(`available on http://localhost:${port}`));