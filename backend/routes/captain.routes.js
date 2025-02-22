const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require("express-validator");

router.post('/register', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be 3 characters or more'),
    body('password').isLength({min: 6}),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be 3 characters or more'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be 3 characters or more'),
    body('vehicle.capacity').isLength({min: 1}).withMessage('Capacity must be 1 or more'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be car, motorcycle or auto'),
], 
    captainController.registerCaptain 
)

module.exports = router;