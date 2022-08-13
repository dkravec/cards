const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const reqNum = {
    type: Number,
    required: true
}

const images = {
    _id: reqString,
    timestamp: reqString,
    api_urlbase: reqString,
    api_url: reqString,
}

const CardsSchema = mongoose.Schema({
    _id: reqString,
    API_ID: reqString,
    images: [images]
});

module.exports = mongoose.model('collection-cards-schema', CardsSchema);