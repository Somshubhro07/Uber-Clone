const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captain = new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength:[3, 'First name must be 3 characters or more'],
        },
        lastname: {
            type: String,
            minlength:[3, 'Last name must be 3 characters or more'],
        },
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/\S+@\S+\.\S+/, 'Email is not valid'],
        }, 
        password: {
            type: String,
            required: true,
            minlength:[6, 'Password must be 6 characters or more'],
        },
        soketid: {
            type: String,
        },
        statue: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'inactive'
        },
        vehicle: {
            color: {
                type: String,
                required: true,
                minlength:[3, 'Color must be 3 characters or more'],
            },
            plate: {
                type: String,
                required: true,
                minlength:[3, 'Plate must be 3 characters or more'],
            },
            capacity: {
                type: Number,
                required: true,
                min: [1, 'Capacity must be 1 or more'],
            },
            vehicleType: {
                type: String,
                enum: ['car', 'motorcycle', 'auto'],
                required: true,
            },
            location: {
                lat:{
                    type: Number,
                },
                lng:{
                    type: Number,
                }  
            }
        }

});

captain.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}


captain.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

captain.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 12);
}

const captainModel = mongoose.model('captain', captain);

module.exports = captainModel;