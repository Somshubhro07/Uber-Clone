const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be 3 characters or more'),
    body('password').isLength({min: 6})
], 
    userController.registerUser
)

router.post('/login',
    [
        body('email').isEmail().withMessage('Email is not valid'),
        body('password').isLength({min: 6}).withMessage('Password must be 6 characters or more')
    ],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.logoutUser)


module.exports = router;