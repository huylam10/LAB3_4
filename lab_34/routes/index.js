var express = require('express');
var router = express.Router();
const mdcar = require('../model/car.model');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const dataCar = await mdcar.carModel.find()
    return res.status(200).json({ message: 'Success', dataCar: dataCar });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
