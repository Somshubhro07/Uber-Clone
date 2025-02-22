const userModel = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistTokenModel = require('../models/blacklistToken.models');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies?.token ?? req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const isblacklisted = await BlacklistTokenModel.findOne({token:token}); 
    if(isblacklisted){
        return res.status(401).json({ message: "Unauthorized" });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (err) {
        console.error("Auth Error:", err);
        return res.status(401).json({ message: "Unauthorized" });
    }
}

