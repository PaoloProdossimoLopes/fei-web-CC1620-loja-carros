const configureLoginRoute = ((application) => {
    // GET Route
    application.get('/' || '/login', (request, response) => {
        response.send('Vode esta na rota de login!');
    });

    //TODO: POST Implementation here
});

module.exports = configureLoginRoute