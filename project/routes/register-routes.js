const mongoose = require('mongoose')

function configureRegisterRoute(application) {
    const endpoint = '/register'

    const schema = new mongoose.Schema({
        email: String,
        password: String,
        name: String
    })
    const UserModel = mongoose.model('UserModel', schema)

    // GET
    application.get(endpoint, (request, response) => {
        response.redirect('/register-scene/index.html')
    });

    //TODO: POST Implementation here
    application.post(endpoint, (request, response) => {
        const email = request.body?.emailField
        const name = request.body?.nameField
        const password = request.body?.passwordField

        UserModel.find({ name: name }, (error, user) => {
            console.log(error)
            if (user) {
                return response.send(`Ola ${name}, voce ja esta registrado`)
            }
        })

        const user = new UserModel({ name, email, password })
        user.save()

        UserModel.find({ name: name }, (error, user) => {
            console.log(error)
            if (error) {
                return response.send('Falha ao registrar!')
            } else if (user) {
                return response.send(`Ola ${name}, voce foi cadastrado com sucesso!`)
            } else {
                return response.send('Ocorreu um problema inesperado!')
            }
        })
    });
}

module.exports = configureRegisterRoute