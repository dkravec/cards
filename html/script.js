var userDefaultsLocal = localStorage.getItem("cards.userDefaults");

document.getElementById("mainArea").innerHTML = "<p>Hello World!</p>";
putDefaults();

async function getSearch({ search, page, limit, currency }) { 
    const getData = await fetch('/search', {
        body: JSON.stringify({ search, page, limit, currency }),
        cache: 'default',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    });
    const data = await getData.json();
    return data;
};

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
}

function putSearch() {
}


function firstRunDefaults() {
    const userDefaults = {
        currency: 'USD',
    };

    localStorage.setItem("cards.userDefaults", JSON.stringify(userDefaults));
    putDefaults();
}

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
}
function putDefaults() {
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
        <form id="searchBar" class="searchSelect search" onsubmit="createPost()">
            <input type="text" id="newPostTextArea" placeholder="Type out your next update...">
        </form>
    `;

    document.getElementById("mainArea").innerHTML = ele;
}
