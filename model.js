const mongoose = require('mongoose')
const schema = mongoose.Schema;

const userSchema =  new mongoose.Schema({
    id: Number,
    name: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;