const SearchSchema = require('../../../schemas/SearchSchema');
const {findCard} = require("../../card/findCard");

async function findSearchTerm({ searchTerm, page }) {
    const result = {
        found: false,
        cards: []
    };

    const searchResultEarlier = await SearchSchema.findOne({ _id: searchTerm, page });
    if (!searchResultEarlier) return result;
    if (!searchResultEarlier.page) return result;
    // if (searchResultEarlier != )
    if (searchResultEarlier && searchResultEarlier.cards) {
        for (const cardID of searchResultEarlier.cards) {
            const card = await findCard(cardID._id);
            result.cards.push(card);
        };

        result.found = true
    };
    

    return result
};

module.exports = { findSearchTerm };