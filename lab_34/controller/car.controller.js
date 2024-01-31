const mdcar = require('../model/car.model');

const listCar = async (req, res) => {
    try {
        const dataCar = await mdcar.carModel.find();
        return res.status(200).json({ message: 'Success', dataCar: dataCar });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


const addCar = async (req,res)=>{
    try {
 const {name,brand,price} = req.body;
        const newCar = new mdcar.carModel({
                name:name,
                brand:brand,
                price:price
            });

           await newCar.save();

        return res.status(201).json({ message: 'Car added successfully',newCar:newCar });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
module.exports = { listCar, addCar };
