const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const reqNum = {
    type: Number,
    required: true
}

const publicUserSchema = mongoose.Schema({
    _id: reqString, // userid
    timestamp: reqNum,
    username: reqString,
    description: reqString,
    interactUsername: reqString,
    interactUserID: reqString,
});

module.exports = mongoose.model('user-public-schema', publicUserSchema);