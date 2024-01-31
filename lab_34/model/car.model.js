var db = require('../db');

const car_SChema = new db.mongoose.Schema(
    {
        name: { type: String, require: true },
        brand: { type: String, require: true },
        price: { type: String, required: true },
    },
    {
        collection: 'car'
    }
)
let carModel = db.mongoose.model('carModel', car_SChema);

module.exports = { carModel }