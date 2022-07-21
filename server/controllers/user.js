const User = require('../models/userModel');

async function register(req, res) {
    const { username, email, password } = req.body;
    try {
        const user = await User.register(username, email, password);
        res.status(200).json({username, user});
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = { login, register }
