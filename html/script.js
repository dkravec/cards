var userDefaultsLocal = localStorage.getItem("cards.userDefaults");

// document.getElementById("mainArea").innerHTML = "Hello World!";

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
    }
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

function putDefaults() {
    const userDefaultsLocal = localStorage.getItem("cards.userDefaults");
    const userDefaults = JSON.parse(userStorageLogin);

    const ele = `
        <form id="searchBar" class="searchSelect search" onsubmit="createPost()">
            <input type="text" id="newPostTextArea" placeholder="Type out your next update...">
        </form>
    `
}
