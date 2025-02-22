const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const userController = require('../controllers/user.controller');


router.post('/register', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be 3 characters or more'),
    body('password').isLength({min: 6})
], 
    userController.registerUser
)

module.exports = router;