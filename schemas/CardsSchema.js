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
    api_urlbase: reqString,
    api_url: reqString,
}

const CardsSchema = mongoose.Schema({
    _id: reqString,
    API_ID: reqString,
    images: [images],


    card_number: reqString, // api: onCardCode
    player_name: reqString, // api: firstname
    series_name: reqString, // api: set
    publisher_name: reqString, // api: publisher
    card_year: reqNum, // api: year
    sport: reqString, // api: sport
    max_price: reqNum, // api: maxPrice
    min_price: reqNum, // api: minPrice
    average_price: reqNum, // api: avgPrice

    timestamp: reqString, // date added to database
});

module.exports = mongoose.model('collection-cards-schema', CardsSchema);