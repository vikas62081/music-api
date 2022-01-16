const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    phone: Number,
    paidSubscription: Boolean,
    createdAt: { type: Date, default: Date.now }
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel