const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength:[2, 'First name must be 3 characters or more'],
        },
        lastname: {
            type: String,
            minlength:[2, 'Last name must be 3 characters or more'],
            
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength:[6, 'Email must be 6 characters or more'],
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength:[6, 'Password must be 6 characters or more'],
    },
    socketid: {
        type: String,
    },

});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bycrypt.compare(enteredPassword, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bycrypt.hash(password, 12);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;