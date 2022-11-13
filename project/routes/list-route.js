function configureListRoute(application) {
    const endpoint = '/list';

    // GET Route
    application.get(endpoint, (request, response) => {
        const object = {}
        response.render('./list-scene/index', object);
    });

    //TODO: POST Implementation here
}

module.exports = configureListRoute