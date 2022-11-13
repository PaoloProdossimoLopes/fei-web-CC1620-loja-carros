function configureManagerRoute(application) {
    const endpoint = '/manager'

    // GET Route
    application.get(endpoint, (request, response) => {
        const object = {}
        response.render('./manager-scene/index', object);
    });

    //TODO: POST Implementation here
}

module.exports = configureManagerRoute