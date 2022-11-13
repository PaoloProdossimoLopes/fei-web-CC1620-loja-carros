const configureLoginRoute = ((application) => {
    const endpoint = '/login';

    // GET Route
    application.get(endpoint, (request, response) => {
        response.redirect('/login-scene/index.html')
    });

    //TODO: POST Implementation here
});

module.exports = configureLoginRoute