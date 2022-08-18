const router = require('express').Router();
const { saveMassiveCollection } = require('../../../utils/card/saveMassiveCollection');

const currencies = "USD EUR JPY BGN CZK DKK GBP HUF PLN RON SEK CHF NOK HRK RUB TRY AUD BRL CAD CNY HKD IDR ILS INR KRW MXN MYR NZD PHP SGD THB ZAR ISK";
const currenciesArray = currencies.split(" ");

router.get('/', async (req, res) => {
    const { page, limit, currency, searchTerm } = req.query;
    if (!searchTerm) return res.status(400).send({"error": "Search term is required"});

    const pageNumber = page || 1;
    const limitNumber = limit || 28;
    const currencyCode = currency || "USD";

    const getData = await fetch("https://api.priceguide.cards/v2/elastic-search/search", {
        // "body": "{\"search_term\":\"upper deck\",\"page\":1,\"limit\":28,\"currency\":\"USD\",\"sort_dict\":{\"sort_value\":\"count\",\"sort_by\":\"desc\"}}",
        "body": {
            "search_term": searchTerm,
            "page": pageNumber,
            "limit": limitNumber,
            "currency": currencyCode,
            "sort_dict": {
                "sort_value": "count",
                "sort_by": "desc"
            }
        },
        "cache": "default",
        "credentials": "include",
        "headers": {
            "Accept": "application/json;charset=UTF-8",
            "Accept-Language": "en-CA,en-US;q=0.9,en;q=0.8",
            "Authorization": `Bearer ${process.env.TOKEN}`,
            "Content-Type": "application/json",
            "langCode": "en",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15"
        },
        "method": "POST",
        "mode": "cors",
        "redirect": "follow",
        "referrer": "https://www.priceguide.cards/",
        "referrerPolicy": "strict-origin-when-cross-origin"
    });

    const data = await getData.json();
    const newData = await saveMassiveCollection(data);
    return res.status(200).send(newData);
});

module.exports = router;