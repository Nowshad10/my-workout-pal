const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

function createToken(_id) {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' });
};

async function register(req, res) {
    const { username, email, password } = req.body;
    try {
        const user = await User.register(username, email, password);
        const token = createToken(user._id);
        res.status(200).json({username, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

async function login(req, res) {
    const {username, password} = req.body;
    try {
        const user = await User.login(username, password);
        const token = createToken(user._id);
        res.status(200).json({username, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = { login, register }
