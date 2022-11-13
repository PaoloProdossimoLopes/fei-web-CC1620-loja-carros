function configureSaleRoute(application) {
    const endpoint = '/sale'

    // GET Route
    application.get(endpoint, (request, response) => {
        response.redirect('/sale-scene/index.html')
    });

    //TODO: POST Implementation here
}

module.exports = configureSaleRoute