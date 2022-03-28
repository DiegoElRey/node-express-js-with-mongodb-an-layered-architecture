const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    DNI: String,
    name: String,
    age: Number,
    email: String
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('users',  UserSchema)