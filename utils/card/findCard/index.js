const CardsSchema = require('../../../schemas/CardsSchema');

async function findCard(cardID) {
    const card = await CardsSchema.findOne({ cardID: cardID });
    if (!card) return { "success": false, "error" : "no data found" };
    return { "success" : true, "error" : null, "cardData" : card };
};

module.exports = { findCard };