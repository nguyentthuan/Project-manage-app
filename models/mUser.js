const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    fullname: String,
    phone: String,
    birthday: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const Users = mongoose.model('Users', UsersSchema);

module.exports =  Users;