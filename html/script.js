var userDefaultsLocal = localStorage.getItem("cards.userDefaults");

document.getElementById("mainArea").innerHTML = "<p>Hello World!</p>";
putDefaults();

async function getSearch( search, page, currency ) { 
    console.log(currency);

    const getData = await fetch(`/requests/get/search?page=${page}&searchTerm=${search}&currency=${currency}`, {
        // body: { search, page, limit: 28, currency },
        cache: 'default',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    });
    // console.log(data)
    // console.log(getData);
    const data = await getData.json();
    addResults(data);
    return data;
};

function addResults(data) {
    var fullEle = "<h1>Results</h1>";

    for (let i = 0; i < data.length; i++) {
        fullEle += cardEle(data[i].cardData);
    };

    console.log(fullEle)
    document.getElementById("searchResults").innerHTML = fullEle;
};

function cardEle(cardData) {
    const ele = `
        <div class="card">
            <div class="cardBody">
                <h5>${cardData.player_name}</h5>
                <p>Card Number: ${cardData.card_number}</p>
                <p>Series: ${cardData.series_name}</p>
                <p>Year: ${cardData.card_year}</p>
                ${
                    cardData.min_price ? `
                        ${cardData.max_price ? `
                            <p>Price min/max: ${cardData.min_price} - ${cardData.max_price}</p>
                        ` : `
                            <p>Min Price: ${cardData.min_price}</p>
                        `}
                    ` : `
                        ${cardData.max_price ? `
                            <p>Max Price: ${cardData.max_price}</p>
                        ` : ``}
                    `
                }
                ${cardData.min_price && cardData.max_price ? `
                    <p>Average Price: ${cardData.average_price}</p>
                ` : `
                    ${cardData.min_price && !cardData.max_price ? `
                        <p>Min Price: ${cardData.min_price}</p>
                    ` : `
                        ${cardData.max_price && !cardData.min_price ? `
                            <p>Max Price: ${cardData.max_price}</p>
                        ` : "e"}
                    `}
                `}
                <p>Publisher: ${cardData.publisher_name}</p>
                <p>Sport: ${cardData.sport}</p>
            </div>
        </div>
    `;
    console.log(ele)
    return ele;
};
/*
function defaults() {
    const userDefaultsLocal = localStorage.getItem("cards.userDefaults");

    if (userDefaultsLocal) {
        const userDefaults = JSON.parse(userStorageLogin);
        const { search, page, limit, currency } = userDefaults;

    } else {
        const userDefaults = {
            search: '',
            page: 1,
            limit: 28,
            currency: 'USD',
        };

        localStorage.setItem("cards.userDefaults", JSON.stringify(userDefaults));
    };

    // `;
    // const test = `
    //     <form id="searchBar" class="searchSelect search" onsubmit="createPost()">
    //         <input type="text" id="newPostTextArea" placeholder="Type out your next update...">
    //     </form>
    // `

    putDefaults();
};
*/

function putSearch() {

};

async function searchAPI(pageNum) {
    const userDefaultsLocal = localStorage.getItem("cards.userDefaults");
    const userDefaults = JSON.parse(userDefaultsLocal);
    const search = document.getElementById("newSearchTerm").value;
    // const page = document.getElementById("formSearchNum").value || 1;
    const { currency } = userDefaults;
    var page = pageNum || 1;
    // if (pageNum) 
    console.log(search)
    const data = await getSearch(search, page, currency);
    return data;
};

function firstRunDefaults() {
    const userDefaults = {
        currency: 'USD',
    };

    localStorage.setItem("cards.userDefaults", JSON.stringify(userDefaults));
    putDefaults();
};

function selectNewCurrency() {
    const userDefaultsLocal = localStorage.getItem("cards.userDefaults");
    // console.log(userDefaultsLocal);
    const userDefaults = JSON.parse(userDefaultsLocal);

    userDefaults["currency"] = document.getElementById("currencyDefault").value;
    // const currency = document.getElementById("currencyDefault").value;
    // const userDefaults = {
    //     currency,
    // };

    console.log(userDefaults);
    localStorage.setItem("cards.userDefaults", JSON.stringify(userDefaults));
    putDefaults();
};

async function putDefaults() {
    const userDefaultsLocal = localStorage.getItem("cards.userDefaults");
    const userDefaults = JSON.parse(userDefaultsLocal);
    // console.log(userDefaultsLocal);

    if (!userDefaults) {
        return firstRunDefaults();
    }
    const currencies = "USD EUR JPY BGN CZK DKK GBP HUF PLN RON SEK CHF NOK HRK RUB TRY AUD BRL CAD CNY HKD IDR ILS INR KRW MXN MYR NZD PHP SGD THB ZAR ISK";
    const currenciesArray = currencies.split(" ");

    var currencyDefault = null;
    if (userDefaults?.currency) {
        if (currenciesArray.includes(userDefaults.currency)) {
            currencyDefault = userDefaults.currency;
        } else { 
            currencyDefault = "USD";
        };
    } else {
        currencyDefault = "USD";
    };
    // console.log(currencyDefault);

    const ele = `
        <div class="inline"> 
            <p>Currency:</p>
            <select id="currencyDefault" onchange="selectNewCurrency()">
                ${currenciesArray.map(currency => {
                    if (currency == currencyDefault) return `<option selected value="${currency}">${currency}</option>`
                    else return `<option value="${currency}">${currency}</option>`
                }).join("")}
            </select>
        </div>
        <form id="searchBar" class="searchSelect search" onsubmit="searchAPI(1)">
            <input type="text" id="newSearchTerm" placeholder="Search for cards.">
        </form>
        <div id="searchResults"></div>
    `;

    document.getElementById("mainArea").innerHTML = ele;
    document.getElementById("searchBar").addEventListener("submit", function (e) { e.preventDefault()})
};