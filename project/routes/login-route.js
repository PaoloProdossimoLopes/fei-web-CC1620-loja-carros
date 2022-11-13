const UserModel = require('../models/user-model');

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
        UserModel.findOne({ email: email, password: password }, (error, user) => {
            if (error) {
                return response.send('Ocorreu um problema inesperado!')
            } else if (user) {
                return response.render('./manager-scene/index')
            } else {
                return response.send('Dados invalidos!')
            }
        })
    });
});

module.exports = configureLoginRoute