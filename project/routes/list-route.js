const CarModel = require("../models/car-model");

function configureListRoute(application) {
    const endpoint = '/list';

    // GET Route
    application.post(endpoint, (request, response) => {
        total_cars = []
        CarModel.find({}, (error, cars) => {
            cars.forEach((car) => {
                console.log(car)
                total_cars.push({
                    name: car.name,
                    model: car.model,
                    qtd: car.qtd
                })
            })

            const object = { cars: total_cars }
            console.log(object)
            response.render('./list-scene/index', object);
        })
    });

    //TODO: POST Implementation here
}

module.exports = configureListRoute