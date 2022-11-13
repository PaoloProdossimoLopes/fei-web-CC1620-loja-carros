const mongoose = require('mongoose')

const scheme = mongoose.Schema({
  name: String,
  model: String, 
  year: Number,
  qtd: Number
})

const CarModel = mongoose.model('CarModel', scheme)
module.exports = CarModel