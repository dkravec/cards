const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const reqNum = {
    type: Number,
    required: true
};

const interactTokens = mongoose.Schema({
    _id: reqString, // userid
    accessToken: reqString,
    userToken: reqString,
});

const privateUserSchema = mongoose.Schema({
    _id: reqString, // userid
    userToken: reqString, // just one token per user
    password: reqString, // password for login
    interactTokens: interactTokens, 
});

module.exports = mongoose.model('user-private-schema', privateUserSchema);