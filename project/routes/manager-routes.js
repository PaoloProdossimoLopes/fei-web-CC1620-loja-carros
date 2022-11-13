const CarModel = require("../models/car-model")

function configureUserRouters(application) {

  application.post('/addCar', (request, response) => {
    const owner = 'none'
    const name = request.body?.name
    const model = request.body?.model
    const year = request.body?.year
    const qtd = request.body?.qtd

    const car = new CarModel({
      owner, name, model, year, qtd
    })

    car.save()
  })

  application.post('/removeCar', (request, response) => {
    const name = request.body?.name

    CarModel.findOneAndRemove({ name }, (error, car) => {
      if (car.n == 0) {
        alert('Error')
      } else {
        response.redirect('/manager')
      }
    })
  })

  application.post('/updateCar', (request, response) => {
    const oldName = request.body?.oldName
    const newQTD = request.body?.newQTD
    
    CarModel.update({ oldName }, {$set: { 'qtd': newQTD }}, (error, car) => {
      if (car.n == 0) {
        alert('Error')
      } else {
        response.redirect('/manager')
      }
    })
  })
}

module.exports = configureUserRouters