const { saveCard } = require('../saveCard');

async function saveMassiveCollection(searchResult) {
    if (searchResult.success != true) return { "success": false, "error" : "no data found" };
    if (!searchResult.data) return { "success" : false, "error" : "No data found" };

    const cards = [];

    for (let i = 0; i < searchResult.data.length; i++) {
        const card = await saveCard(searchResult.data[i]);
        cards.push(card);
    };

    return cards;
}

module.exports = { saveMassiveCollection };