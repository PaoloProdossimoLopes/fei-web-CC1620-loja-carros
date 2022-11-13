function configureRegisterRoute(application) {
    const endpoint = '/register'

    // GET
    application.get(endpoint, (request, response) => {
        response.redirect('/register-scene/index.html')
    });

    //TODO: POST Implementation here
}

module.exports = configureRegisterRoute