const configureLoginRoute = ((application) => {
    const endpoint = '/login';

    // GET Route
    application.get(endpoint, (request, response) => {
        response.redirect('/login-scene/index.html')
    });

    // POST
    application.post(endpoint, (request, response) => {
        const email = request.body?.emailField
        const password = request.body?.passwordField

    });
});

module.exports = configureLoginRoute