const mongoose = require('mongoose');

const configureLoginRoute = ((application) => {
    const endpoint = '/login';

    const schema = new mongoose.Schema({
        email: String,
        password: String
    })
    const model = mongoose.model('User', schema)

    // GET Route
    application.get(endpoint, (request, response) => {
        response.redirect('/login-scene/index.html')
    });

    // POST
    application.post(endpoint, (request, response) => {
        const email = request.body?.emailField
        const password = request.body?.passwordField
        model.find({ email,  password }, (error, object) => {
            console.error('Error:', error)
            console.log('object:', object)
        })
    });
});

module.exports = configureLoginRoute