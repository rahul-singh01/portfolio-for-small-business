const mongoose = require('mongoose')

const Schema = mongoose.Schema

const set = {
    block: false,
    role: "user"

}

const User = new Schema({
    username: { type: 'String', required: true, unique: true, minlength: 3 },
    email: { type: 'string', required: false, unique: true },
    password: { type: 'string', required: true },
    set: { type: 'object', default: set }

}, { timestamps: true });

module.exports = mongoose.model('User', User)