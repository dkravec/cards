const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const reqNum = {
    type: Number,
    required: true
};

const ownedCards = {
    _id: reqString, // card id (not from main api, but a new one)
    timestamp: reqNum, // timestamp of when the card was added to the user's owned cards
    customTimestamp : reqNum, // user inputed timestamp of when the card was added to the user's collection
};

const OwnedCardsSchema = mongoose.Schema({
   _id: reqString,
   cards: [ownedCards]
});

module.exports = mongoose.model('collection-owned-cards-schema', OwnedCardsSchema);