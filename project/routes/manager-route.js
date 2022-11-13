const configureUserRouters = require('./manager-routes')

function configureManagerRoute(application) {
    configureUserRouters(application)
    const endpoint = '/manager'

    // GET Route
    application.get(endpoint, (request, response) => {
        const object = {}
        response.render('./manager-scene/index', object);
    });

    //TODO: POST Implementation here
}

module.exports = configureManagerRoute