const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const reqNum = {
    type: Number,
    required: true
}

const SearchSchema = mongoose.Schema({
    _id: reqString, // search term
    page: reqNum,
    totalResults: reqNum,
    timestamp: reqString,
    cards: [reqString], // card ids
});

module.exports = mongoose.model('collection-search-schema', SearchSchema);