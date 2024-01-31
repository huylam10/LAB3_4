var express = require('express');
var router = express.Router();
const carController = require('../controller/car.controller');

/* GET home page. */
router.get('/listCar',carController.listCar);
router.post('/add',carController.addCar);
ádasd
module.exports = router;
