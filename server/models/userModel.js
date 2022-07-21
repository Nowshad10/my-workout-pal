const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.register = async function (username, email, password) {

    const emailExists = await this.findOne({ email });
    const usernameExists = await this.findOne({ username });

    if (emailExists || usernameExists) {
        throw Error('Email/Username already in use.')
    };

    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(password, salt);

    const user = await this.create({ username, email, password: hashed });

    return user;
};

module.exports = mongoose.model('User', userSchema);
