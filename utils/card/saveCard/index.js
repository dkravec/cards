const CardsSchema = require('../../../schemas/CardsSchema');
const { v4: uuidv4 } = require('uuid');

async function saveCard(data) {
    if (data.id) {
        const card = await CardsSchema.findOne({ id: data.id });
        if (card) return { "success" : false, "error" : "Card already exists", "cardData" : card };
    };

    const cardID = uuidv4();

    await CardsSchema.findOneAndUpdate({
        _id: cardID,
    }, {
        _id: cardID,
        API_ID: data.id ? data.id : null,
        // images: data.images ? data.images : null,
        card_number: data.onCardCode ? data.onCardCode : null,
        player_name: data.firstname ? data.firstname : null,
        series_name: data.set ? data.set : null,
        publisher_name: data.publisher ? data.publisher : null,
        card_year: data.year ? data.year : null,
        sport: data.sport ? data.sport : null,
        max_price: data.maxPrice ? data.maxPrice : null,
        min_price: data.minPrice ? data.minPrice : null,
        average_price: data.avgPrice ? data.avgPrice : null,
        timestamp: data.timestamp ? data.timestamp : null,
    }, {
        upsert: true,
    });

    return { "success" : true, "error" : null, "cardData" : await CardsSchema.findOne({ id: data.id })};
}

module.exports = { saveCard };