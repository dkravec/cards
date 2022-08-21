const SearchSchema = require('../../../schemas/SearchSchema');
const { saveCard } = require('../saveCard');
const { findCard } = require('../findCard');

async function saveMassiveCollection(searchResult, searchTerm) {
    if (searchResult.success != true) return { "success": false, "error" : "no data found" };
    if (!searchResult.data) return { "success" : false, "error" : "No data found" };
    
    const cards = [];

    const searchResultEarlier = await SearchSchema.findOne({ _id: searchTerm });
    if (searchResultEarlier && searchResultEarlier.cards) {
        for (const cardID of searchResultEarlier.cards) {
            const card = await findCard(cardID);
            cards.push(card);
        };

        return cards
    };

    await SearchSchema.findOneAndUpdate(
        { _id: searchTerm },
        {
            page: searchResult.page,
            timestamp: checktime(),
        }, 
        { upsert: true }
    );
    
    for (let i = 0; i < searchResult.data.length; i++) {
        const card = await saveCard(searchResult.data[i]);
        await saveCardDataSearch(searchTerm, card);
        cards.push(card);
    };

    return cards;
};

module.exports = { saveMassiveCollection };

async function saveCardDataSearch(searchTerm, cardData) {
    await SearchSchema.findOneAndUpdate( 
        { _id: searchTerm },
        { $push : { "cards" : { 
            _id: cardData._id,
        }}},
        { upsert: true }
    );
};

function checktime() {
    var d = new Date();
    const timeMS = d.getTime();

    return timeMS;
};
