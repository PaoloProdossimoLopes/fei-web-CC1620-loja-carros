function configureRegisterRoute(application) {
    // GET
    application.get('/register', (request, response) => {
        response.send('Voce esta na rota de cadastro!');
    });

    //TODO: POST Implementation here
}

module.exports = configureRegisterRoute