main site
https://www.priceguide.cards/search?q=upper%20deck

## API Requests


### Search
#### REQUEST
```js
fetch("https://api.priceguide.cards/v2/elastic-search/search", {
    "body": "{\"search_term\":\"pro set 1990 hockey\",\"page\":1,\"limit\":28,\"currency\":\"USD\",\"sort_dict\":{\"sort_value\":\"count\",\"sort_by\":\"desc\"}}",
    "cache": "default",
    "credentials": "include",
    "headers": {
        "Accept": "application/json;charset=UTF-8",
        "Accept-Language": "en-CA,en-US;q=0.9,en;q=0.8",
        "Authorization": "Bearer (token)",
        "Content-Type": "application/json",
        "langCode": "en",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15"
    },
    "method": "POST",
    "mode": "cors",
    "redirect": "follow",
    "referrer": "https://www.priceguide.cards/",
    "referrerPolicy": "strict-origin-when-cross-origin"
})
```
:method: POST
:scheme: https
:authority: api.priceguide.cards
:path: /v2/elastic-search/search
Content-Type: application/json
Accept: application/json;charset=UTF-8
Authorization: null
##### OR
Authorization: Bearer (token)

Accept-Language: en-CA,en-US;q=0.9,en;q=0.8
Accept-Encoding: gzip, deflate, br
Host: api.priceguide.cards
Origin: https://www.priceguide.cards
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15
Connection: keep-alive
Referer: https://www.priceguide.cards/
Content-Length: 117
langCode: en

``` js
curl 'https://api.priceguide.cards/v2/elastic-search/search' \
-X 'POST' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json;charset=UTF-8' \
-H 'Authorization: Bearer (token)' \
-H 'Accept-Language: en-CA,en-US;q=0.9,en;q=0.8' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'Host: api.priceguide.cards' \
-H 'Origin: https://www.priceguide.cards' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15' \
-H 'Connection: keep-alive' \
-H 'Referer: https://www.priceguide.cards/' \
-H 'Content-Length: 117' \
-H 'langCode: en' \
--data-binary '{"search_term":"upper deck","page":1,"limit":28,"currency":"USD","sort_dict":{"sort_value":"count","sort_by":"desc"}}'
```
```js
fetch("https://api.priceguide.cards/v2/elastic-search/search", {
    "body": "{\"search_term\":\"upper deck\",\"page\":1,\"limit\":28,\"currency\":\"USD\",\"sort_dict\":{\"sort_value\":\"count\",\"sort_by\":\"desc\"}}",
    "cache": "default",
    "credentials": "include",
    "headers": {
        "Accept": "application/json;charset=UTF-8",
        "Accept-Language": "en-CA,en-US;q=0.9,en;q=0.8",
        "Authorization": "Bearer (token)",
        "Content-Type": "application/json",
        "langCode": "en",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15"
    },
    "method": "POST",
    "mode": "cors",
    "redirect": "follow",
    "referrer": "https://www.priceguide.cards/",
    "referrerPolicy": "strict-origin-when-cross-origin"
})
```

```json
// request data

{"search_term":"upper deck","page":1,"limit":28,"currency":"USD","sort_dict":{"sort_value":"count","sort_by":"desc"}},
// signed in
{
    "success": true,
    "rows": 1503927,
    "page": 1,
    "limit": 28,
    "data": [
        {
            "id": 10091666,
            "code": "UBA1989-B-S-1",
            "webName": "1989 - Upper Deck - Upper Deck Baseball - Base - Standard - Ken Griffey Jr.",
            "onCardCode": "1",
            "maxPrice": 35100.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1989,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Ken Griffey Jr.",
            "lastname": "",
            "avgPrice": 43.66,
            "imgArr": [
                "b0aeb771-3d27-5c2e-82f6-f7bf1cdaf733",
                "822113a9-a761-5987-9bdc-dc90231c0b72",
                "11cc26ab-4e30-503d-b108-b35673880ca6",
                "dd236e0d-3c81-5e00-81d2-8f3627b47d96",
                "9ac9e47d-097f-527b-b6f1-902685f1df9f"
            ]
        },
        {
            "id": 8748790,
            "code": "UDG2001-B-S-1",
            "webName": "2001 - Upper Deck - Upper Deck Golf - Base - Standard - Tiger Woods",
            "onCardCode": "1",
            "maxPrice": 25100.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Golf",
            "set": "Upper Deck Golf",
            "year": 2001,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Tiger Woods",
            "lastname": "",
            "avgPrice": 31.77,
            "imgArr": [
                "df3bd5c4-768d-5ce3-a292-bd0f0261d002",
                "e24534bf-a283-518f-8514-1e1385000b3e",
                "175211f8-502a-5afd-b7fd-412f93948c63",
                "48d3bdbe-bb29-5279-b842-f768fd57b2c0",
                "34b6274b-0cba-532e-980b-23fac77aca49"
            ]
        },
        {
            "id": 1291648,
            "code": "UBA1993-B-S-449",
            "webName": "1993 - Upper Deck - Upper Deck Baseball - Base - Standard - Derek Jeter",
            "onCardCode": "449",
            "maxPrice": 21100.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1993,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Derek Jeter",
            "lastname": "",
            "avgPrice": 12.12,
            "imgArr": [
                "0b41fdfb-8781-5086-9a0a-bc162a778093",
                "76687d6b-5721-5544-b560-1a9c455a9556",
                "ececf98e-7fb3-5793-a8ed-2fcbe5a83bd8",
                "8ed6349d-e561-519b-8d3b-4acce0c3a1a4",
                "94096522-b28d-5e02-ab94-36ff3ed606dc"
            ]
        },
        {
            "id": 7124645,
            "code": "UF1991-B-S-13",
            "webName": "1991 - Upper Deck - Upper Deck Football - Base - Standard - Brett Favre",
            "onCardCode": "13",
            "maxPrice": 1500.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Football",
            "set": "Upper Deck Football",
            "year": 1991,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Brett Favre",
            "lastname": "",
            "avgPrice": 4.54,
            "imgArr": [
                "7538e756-3ab6-52fd-9c63-493dc4e5b8b6",
                "25138874-f115-59e5-a631-6501f6990910",
                "46da616a-3fdc-5a9e-89bb-0c973ecdeeb2",
                "11d9a79d-b163-52b4-b9a7-e931d753566f",
                "218e8fb1-8c37-5ab4-bd18-c792f4c94ec1"
            ]
        },
        {
            "id": 10091690,
            "code": "UBA1989-B-S-25",
            "webName": "1989 - Upper Deck - Upper Deck Baseball - Base - Standard - Randy Johnson",
            "onCardCode": "25",
            "maxPrice": 2866.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1989,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Randy Johnson",
            "lastname": "",
            "avgPrice": 6.08,
            "imgArr": [
                "f5b64e8c-08a1-5962-aa3e-065fb4b68a9a",
                "81b50f88-d38e-5eab-9348-248cbae6e81c",
                "3d931dd4-50c5-519c-9888-0754f2ca7e8b",
                "380136b4-4ec5-59e5-a3d2-b818e2d07bca",
                "380136b4-4ec5-59e5-a3d2-b818e2d07bca"
            ]
        },
        {
            "id": 516674,
            "code": "UBB2003-B-S-301",
            "webName": "2003 - Upper Deck - Upper Deck Basketball - Base - Standard - LeBron James",
            "onCardCode": "301",
            "maxPrice": 25000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 2003,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "LeBron James",
            "lastname": "",
            "avgPrice": 20.81,
            "imgArr": [
                "055dd887-12cc-529e-a10b-e7ff12cebcd6",
                "9c44996b-85ef-53d2-b378-e6b4c879e1bc",
                "19d8b92f-bc5a-5215-835a-e19b2754c0c0",
                "9dfb75ae-63f3-58f4-ac72-1832de832d6e",
                "fd60aca4-0138-5d0f-8264-d0f3e241d2c7"
            ]
        },
        {
            "id": 3520391,
            "code": "UBA1994-B-S-24",
            "webName": "1994 - Upper Deck - Upper Deck Baseball - Base - Standard - Alex Rodriguez",
            "onCardCode": "24",
            "maxPrice": 2337.5,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1994,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Alex Rodriguez",
            "lastname": "",
            "avgPrice": 8.53,
            "imgArr": [
                "76bded69-293b-5383-8aab-bc25faa8b69d",
                "2ba0d0f3-3006-52d1-ac7e-dac9fa36d28b",
                "b5bb14cd-1dd4-56a9-bd28-6a4db879272e",
                "4af089d1-01ff-5846-9718-503cea2283c4",
                "d5396be8-df7a-5d8b-b905-7bceaa368ae3"
            ]
        },
        {
            "id": 10217598,
            "code": "UBA2001-B-S-295",
            "webName": "2001 - Upper Deck - Upper Deck Baseball - Base - Standard - Albert Pujols",
            "onCardCode": "295",
            "maxPrice": 2575.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 2001,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Albert Pujols",
            "lastname": "",
            "avgPrice": 35.46,
            "imgArr": [
                "caea6dda-3da5-5368-8323-6259f8bcd969",
                "de798d13-f5cc-5246-9d51-1686e744b5d3",
                "bff75643-946c-5df1-a48f-788a57fe3dee",
                "2f86ef5b-c284-56c3-9336-9670156015e7",
                "1e909c6d-7684-5eda-9fa5-be45af0cf9db"
            ]
        },
        {
            "id": 4478,
            "code": "USPBA1993-B-S-279",
            "webName": "1993 - Upper Deck - SP - Base - Standard - Derek Jeter",
            "onCardCode": "279",
            "maxPrice": 35000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "SP",
            "year": 1993,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Derek Jeter",
            "lastname": "",
            "avgPrice": 159.52,
            "imgArr": [
                "36cc3821-9f51-5fd9-b61e-20dace8bbef3",
                "e84cdf3c-a66e-5e13-b2e9-7843db30a922",
                "a9813c98-3955-506d-a08a-efda05d1754b",
                "67695c9a-0938-57f2-94f1-35bb8c808dc8",
                "3cee8d67-ad21-52ab-91e3-82e9837da8bc"
            ]
        },
        {
            "id": 9163678,
            "code": "UBA1991-7-S-7-SP1",
            "webName": "1991 - Upper Deck - Upper Deck Baseball - Michael Jordan SP1 - Standard - Michael Jordan",
            "onCardCode": "SP1",
            "maxPrice": 18988.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1991,
            "type": "Michael Jordan SP1",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 22.88,
            "imgArr": [
                "d1419db5-45f6-5982-ac32-315563fe8513",
                "52a0871d-a9ec-52ab-9bb8-c0a8a8fb5abf",
                "52bef36c-fec8-5c21-b695-362082e9e760",
                "ab851cc5-511c-5c5f-8f3f-fcd660a96eca",
                "98291482-18b1-5435-a9be-b98b702076fa"
            ]
        },
        {
            "id": 1715733,
            "code": "UH2005-B-S-414",
            "webName": "2005 - Upper Deck - Upper Deck Hockey - Base - Standard - Scott Young",
            "onCardCode": "414",
            "maxPrice": 12403.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Hockey",
            "set": "Upper Deck Hockey",
            "year": 2005,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Scott Young",
            "lastname": "",
            "avgPrice": 74.47,
            "imgArr": [
                "02484455-52aa-52a1-8467-b777b8fb869c",
                "a8ba2c44-484e-58cd-8ec3-a077cd863875",
                "03e3d180-e175-5dc9-bf79-7a9601796017",
                "38cf2200-caea-5c50-b810-403ee35aa45f",
                "bfd20ea8-1a49-5b36-8b3f-c94b83e92d82"
            ]
        },
        {
            "id": 1153141,
            "code": "UBB1996-B-S-58",
            "webName": "1996 - Upper Deck - Upper Deck Basketball - Base - Standard - Kobe Bryant",
            "onCardCode": "58",
            "maxPrice": 4499.99,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1996,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Kobe Bryant",
            "lastname": "",
            "avgPrice": 16.1,
            "imgArr": [
                "f61297a6-4bf6-540d-888a-570f24b39ab7",
                "5e13638c-5157-57b1-9d0b-036dc6be2d3c",
                "10620900-a10b-50ec-a9e7-59bdf70ceefb",
                "76d56812-3576-5e0b-b01f-a5b1ce606da2",
                "d026206e-44b8-56cd-a01a-0ddeb4666c87"
            ]
        },
        {
            "id": 9162904,
            "code": "UBA1991-B-S-55",
            "webName": "1991 - Upper Deck - Upper Deck Baseball - Base - Standard - Chipper Jones",
            "onCardCode": "55",
            "maxPrice": 5397.22,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1991,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Chipper Jones",
            "lastname": "",
            "avgPrice": 7.82,
            "imgArr": [
                "3afc1d04-882e-50a6-8e4e-7a6494706f28",
                "ce9acab1-eec9-5cb0-a7dd-5ae14fd12465",
                "0344178c-3d6a-5953-a4e0-8ae39747cf6a",
                "1e3dc012-54ee-567e-a6f3-bf35a96ad17d",
                "ab23e1aa-db84-5b36-aa21-6046c0a7c2f0"
            ]
        },
        {
            "id": 9491564,
            "code": "USPBA1994-B-S-15",
            "webName": "1994 - Upper Deck - SP - Base - Standard - Alex Rodriguez",
            "onCardCode": "15",
            "maxPrice": 24600.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "SP",
            "year": 1994,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Alex Rodriguez",
            "lastname": "",
            "avgPrice": 50.95,
            "imgArr": [
                "8e80d421-37b7-5035-b690-3fa1996c55fa",
                "bfe93e8a-6d53-58bb-b5fa-11baa2a0cf24",
                "3709806e-30f2-5d46-8c12-179acc5b0de9",
                "c150e574-fa3a-5d2d-8c1b-7dcf29b66ec2",
                "bacb78cf-db9e-5ae4-8426-34982ec20b4e"
            ]
        },
        {
            "id": 1009646,
            "code": "UREB2003-B-S-1",
            "webName": "2003 - Upper Deck - Rookie Exclusives - Base - Standard - LeBron James",
            "onCardCode": "1",
            "maxPrice": 5000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Rookie Exclusives",
            "year": 2003,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "LeBron James",
            "lastname": "",
            "avgPrice": 67.56,
            "imgArr": [
                "20fecf81-b2d2-5a09-9325-601c65d993b8",
                "a1fa67f3-b2d0-5a74-9cd3-0e29335bc5be",
                "0d29090c-ce51-5e13-81fb-3590fb2635eb",
                "08e9e34a-5fd4-5f16-8e2d-e2aa1a8e095a",
                "430c4466-653a-5d5e-9bf1-5fc5ac63208f"
            ]
        },
        {
            "id": 196549,
            "code": "UBB1997-B-S-18",
            "webName": "1997 - Upper Deck - Upper Deck Basketball - Base - Standard - Michael Jordan",
            "onCardCode": "18",
            "maxPrice": 3551.23,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1997,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 13.18,
            "imgArr": [
                "80e97c25-cc28-5e38-a57b-36ed3a38d5fe",
                "5512e780-b402-5277-96b4-02ec4263ce83",
                "e48a85c0-9938-53d8-9b9b-9875db9174f9",
                "a371e1de-677b-5186-8844-dead8d3703bf",
                "84915ed0-3c60-5a50-9ad5-df87c1189578"
            ]
        },
        {
            "id": 6893084,
            "code": "UBA1990-B-S-17",
            "webName": "1990 - Upper Deck - Upper Deck Baseball - Base - Standard - Sammy Sosa",
            "onCardCode": "17",
            "maxPrice": 2499.99,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1990,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Sammy Sosa",
            "lastname": "",
            "avgPrice": 6.62,
            "imgArr": [
                "11d9e2d3-f50d-5855-a19c-bb8441c8fe3a",
                "f92c9da3-800b-5bae-a707-6516b674f23b",
                "fe833938-639c-51ef-9b78-83be526baf31",
                "a5e565f6-bce8-5c33-b1b6-fb4b4a2a8038",
                "39b57b57-5892-5fe7-ae50-1240b9d680e6"
            ]
        },
        {
            "id": 15983,
            "code": "UBB1991-B-S-22",
            "webName": "1991 - Upper Deck - Upper Deck Basketball - Base - Standard - Michael Jordan",
            "onCardCode": "22",
            "maxPrice": 3999.99,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1991,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 9.97,
            "imgArr": [
                "c3bdca87-a964-5420-9ab9-e33f806ad69a",
                "e48cb57a-4b84-5144-8d1b-f8c775e45d69",
                "b9235066-d943-5bf9-804e-b3a10ecceaad",
                "46b4b2d5-b805-5c14-9402-12073833cf7e",
                "ac1a36e5-c9ad-5c48-9f2b-e15cbf2904ff"
            ]
        },
        {
            "id": 2268335,
            "code": "UBB1993-B-S-23",
            "webName": "1993 - Upper Deck - Upper Deck Basketball - Base - Standard - Michael Jordan",
            "onCardCode": "23",
            "maxPrice": 4250.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1993,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 5.64,
            "imgArr": [
                "10249486-be54-5480-a95e-76e1c7366f98",
                "1b333536-5037-5b7f-ab0b-cf7f307901ff",
                "b3c2738a-220f-587d-b397-06a0e3fa07a7",
                "9f36f103-a5ac-5d81-be78-97009092b055",
                "a58f072b-0abe-5669-8820-19a8d03defbe"
            ]
        },
        {
            "id": 674818,
            "code": "UBB1998-B-S-23",
            "webName": "1998 - Upper Deck - Upper Deck Basketball - Base - Standard - Michael Jordan",
            "onCardCode": "23",
            "maxPrice": 1625.23,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1998,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 16.38,
            "imgArr": [
                "b791767b-6aa0-5f69-9118-d280cbea2d71",
                "13a23f08-4d31-5765-bd9e-c68e5308b04e",
                "a82b5342-d891-593a-8009-76438bc5afea",
                "9f08c9e0-ca2b-5779-9a23-31598bb5a6df",
                "ece7a63b-9d49-551f-bf5e-162dda338432"
            ]
        },
        {
            "id": 1310167,
            "code": "UCCBB1996-B-S-267",
            "webName": "1996 - Upper Deck - Collector's Choice - Base - Standard - Kobe Bryant",
            "onCardCode": "267",
            "maxPrice": 5000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Collector's Choice",
            "year": 1996,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Kobe Bryant",
            "lastname": "",
            "avgPrice": 24.61,
            "imgArr": [
                "12a96e51-da4d-5d52-b3e1-58f97fb0f78a",
                "47c676e3-fc6f-5eda-a87c-fe76dbff9cad",
                "47b02f1a-2327-516f-bc87-81d9dacbc059",
                "5e2ef324-b990-543d-b276-4f20f36cdd03",
                "0c9ae6c8-162e-55ac-8fed-3aaad2c9a24a"
            ]
        },
        {
            "id": 10217574,
            "code": "UBA2001-B-S-271",
            "webName": "2001 - Upper Deck - Upper Deck Baseball - Base - Standard - Ichiro Suzuki",
            "onCardCode": "271",
            "maxPrice": 1588.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 2001,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Ichiro Suzuki",
            "lastname": "",
            "avgPrice": 12.94,
            "imgArr": [
                "4d9d039f-4ec5-5149-9e51-1d8404fbf71d",
                "ab17f106-5915-559f-b0e3-1b90215532f6",
                "d7d2704f-f7c0-5c4c-a596-634212297cbc",
                "12aac4c4-f1bb-59a9-8578-1389b92aecc2",
                "1f0e69e5-9a09-54e9-9633-480be3e1ed27"
            ]
        },
        {
            "id": 9567114,
            "code": "UH2015-B-S-201",
            "webName": "2015 - Upper Deck - Upper Deck Hockey - Base - Standard - Connor McDavid",
            "onCardCode": "201",
            "maxPrice": 18100.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Hockey",
            "set": "Upper Deck Hockey",
            "year": 2015,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Connor McDavid",
            "lastname": "",
            "avgPrice": 267.44,
            "imgArr": [
                "9898b78c-a3ff-596f-b690-e6eb2096d9ab",
                "89783f24-ce50-5626-a6fb-c4d8a012c364",
                "5522627c-6172-5cd6-929b-72a8d2da7206",
                "26b9c0c1-f5d8-53d4-8f66-f90acd06597a",
                "ed569aa3-8706-5aed-8f28-2d34abf2cbec"
            ]
        },
        {
            "id": 2722200,
            "code": "U3BB1996-B-S-19",
            "webName": "1996 - Upper Deck - UD3 - Base - Standard - Kobe Bryant",
            "onCardCode": "19",
            "maxPrice": 11500.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "UD3",
            "year": 1996,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Kobe Bryant",
            "lastname": "",
            "avgPrice": 57.39,
            "imgArr": [
                "8857a1ab-960d-561d-a66d-0c1a7ca883cb",
                "8718e950-8dab-55aa-ab61-66bebbb6c40f",
                "e214a2f1-dbcc-51e2-9ca6-5f486a4c567b",
                "f11a57c3-e48b-5908-a3bf-3851a2a0975c",
                "c3b59192-1827-50d5-a3a8-1e0b83a79cc9"
            ]
        },
        {
            "id": 3520386,
            "code": "UBA1994-B-S-19",
            "webName": "1994 - Upper Deck - Upper Deck Baseball - Base - Standard - Michael Jordan",
            "onCardCode": "19",
            "maxPrice": 5000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1994,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 10.48,
            "imgArr": [
                "1c37e0c1-0feb-579e-8cb8-cb73c517a89e",
                "3954b073-b3fc-5278-8059-719ef5e7c5c4",
                "c2261b2e-ef7b-50fe-95c9-e182aa554c32",
                "9c94ec17-2efb-57a3-9dc8-80e9e4c3ba38",
                "c10710d6-492a-56fc-abc5-f15060d0d4ad"
            ]
        },
        {
            "id": 2561717,
            "code": "UBB1992-B-S-23",
            "webName": "1992 - Upper Deck - Upper Deck Basketball - Base - Standard - Michael Jordan",
            "onCardCode": "23",
            "maxPrice": 4000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1992,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 5.04,
            "imgArr": [
                "446bbb9c-33d6-5e55-86ae-6c52fa53d101",
                "42c4fec8-2e53-5ddf-845f-e0fed75075f3",
                "ffb7020b-6655-5a06-b123-4cadbdb37bef",
                "aeb6ece7-55dc-5200-bd23-702ad18e7558",
                "4ccafda6-ac2a-5941-82f9-0d7edd6788a4"
            ]
        },
        {
            "id": 10091682,
            "code": "UBA1989-B-S-17",
            "webName": "1989 - Upper Deck - Upper Deck Baseball - Base - Standard - John Smoltz",
            "onCardCode": "17",
            "maxPrice": 445.95,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1989,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "John Smoltz",
            "lastname": "",
            "avgPrice": 3.04,
            "imgArr": [
                "192f99de-1578-55c5-a5dc-503f1bb796b9",
                "ec0e2aef-019d-5ad3-bc16-dea2775bcb30",
                "8adf82a2-29a2-554b-8994-dc54cbf38848",
                "8dee2ad0-4433-514f-a1e7-fffd880df3ef",
                "9dc18d3b-51f5-55ca-ae7f-5428ec0a2588"
            ]
        },
        {
            "id": 10091678,
            "code": "UBA1989-B-S-13",
            "webName": "1989 - Upper Deck - Upper Deck Baseball - Base - Standard - Gary Sheffield",
            "onCardCode": "13",
            "maxPrice": 1009.99,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1989,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "portfolio": 0,
            "wishlist": 0,
            "firstname": "Gary Sheffield",
            "lastname": "",
            "avgPrice": 3.15,
            "imgArr": [
                "960ab07b-a23b-5c94-a34d-ab147e01c34b",
                "28dce7cc-f41a-5199-8d3d-2daf1360cfef",
                "32a18825-d1a1-5c43-957c-3648b84240bb",
                "927e9577-4a61-5a73-b4ea-c4bbca9dcbdc",
                "957a92c0-f97b-5e39-bd35-085f81a63469"
            ]
        }
    ]
}

// not signed in
{
    "success": true,
    "rows": 1503927,
    "page": 1,
    "limit": 28,
    "data": [
        {
            "id": 10091666,
            "code": "UBA1989-B-S-1",
            "webName": "1989 - Upper Deck - Upper Deck Baseball - Base - Standard - Ken Griffey Jr.",
            "onCardCode": "1",
            "maxPrice": 35100.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1989,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Ken Griffey Jr.",
            "lastname": "",
            "avgPrice": 43.66,
            "imgArr": [
                "b0aeb771-3d27-5c2e-82f6-f7bf1cdaf733",
                "822113a9-a761-5987-9bdc-dc90231c0b72",
                "11cc26ab-4e30-503d-b108-b35673880ca6",
                "dd236e0d-3c81-5e00-81d2-8f3627b47d96",
                "9ac9e47d-097f-527b-b6f1-902685f1df9f"
            ]
        },
        {
            "id": 8748790,
            "code": "UDG2001-B-S-1",
            "webName": "2001 - Upper Deck - Upper Deck Golf - Base - Standard - Tiger Woods",
            "onCardCode": "1",
            "maxPrice": 25100.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Golf",
            "set": "Upper Deck Golf",
            "year": 2001,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Tiger Woods",
            "lastname": "",
            "avgPrice": 31.77,
            "imgArr": [
                "df3bd5c4-768d-5ce3-a292-bd0f0261d002",
                "e24534bf-a283-518f-8514-1e1385000b3e",
                "175211f8-502a-5afd-b7fd-412f93948c63",
                "48d3bdbe-bb29-5279-b842-f768fd57b2c0",
                "34b6274b-0cba-532e-980b-23fac77aca49"
            ]
        },
        {
            "id": 1291648,
            "code": "UBA1993-B-S-449",
            "webName": "1993 - Upper Deck - Upper Deck Baseball - Base - Standard - Derek Jeter",
            "onCardCode": "449",
            "maxPrice": 21100.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1993,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Derek Jeter",
            "lastname": "",
            "avgPrice": 12.12,
            "imgArr": [
                "0b41fdfb-8781-5086-9a0a-bc162a778093",
                "76687d6b-5721-5544-b560-1a9c455a9556",
                "ececf98e-7fb3-5793-a8ed-2fcbe5a83bd8",
                "8ed6349d-e561-519b-8d3b-4acce0c3a1a4",
                "94096522-b28d-5e02-ab94-36ff3ed606dc"
            ]
        },
        {
            "id": 7124645,
            "code": "UF1991-B-S-13",
            "webName": "1991 - Upper Deck - Upper Deck Football - Base - Standard - Brett Favre",
            "onCardCode": "13",
            "maxPrice": 1500.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Football",
            "set": "Upper Deck Football",
            "year": 1991,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Brett Favre",
            "lastname": "",
            "avgPrice": 4.54,
            "imgArr": [
                "7538e756-3ab6-52fd-9c63-493dc4e5b8b6",
                "25138874-f115-59e5-a631-6501f6990910",
                "46da616a-3fdc-5a9e-89bb-0c973ecdeeb2",
                "11d9a79d-b163-52b4-b9a7-e931d753566f",
                "218e8fb1-8c37-5ab4-bd18-c792f4c94ec1"
            ]
        },
        {
            "id": 10091690,
            "code": "UBA1989-B-S-25",
            "webName": "1989 - Upper Deck - Upper Deck Baseball - Base - Standard - Randy Johnson",
            "onCardCode": "25",
            "maxPrice": 2866.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1989,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Randy Johnson",
            "lastname": "",
            "avgPrice": 6.08,
            "imgArr": [
                "f5b64e8c-08a1-5962-aa3e-065fb4b68a9a",
                "81b50f88-d38e-5eab-9348-248cbae6e81c",
                "3d931dd4-50c5-519c-9888-0754f2ca7e8b",
                "380136b4-4ec5-59e5-a3d2-b818e2d07bca",
                "380136b4-4ec5-59e5-a3d2-b818e2d07bca"
            ]
        },
        {
            "id": 516674,
            "code": "UBB2003-B-S-301",
            "webName": "2003 - Upper Deck - Upper Deck Basketball - Base - Standard - LeBron James",
            "onCardCode": "301",
            "maxPrice": 25000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 2003,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "LeBron James",
            "lastname": "",
            "avgPrice": 20.81,
            "imgArr": [
                "055dd887-12cc-529e-a10b-e7ff12cebcd6",
                "9c44996b-85ef-53d2-b378-e6b4c879e1bc",
                "19d8b92f-bc5a-5215-835a-e19b2754c0c0",
                "9dfb75ae-63f3-58f4-ac72-1832de832d6e",
                "fd60aca4-0138-5d0f-8264-d0f3e241d2c7"
            ]
        },
        {
            "id": 3520391,
            "code": "UBA1994-B-S-24",
            "webName": "1994 - Upper Deck - Upper Deck Baseball - Base - Standard - Alex Rodriguez",
            "onCardCode": "24",
            "maxPrice": 2337.5,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1994,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Alex Rodriguez",
            "lastname": "",
            "avgPrice": 8.53,
            "imgArr": [
                "76bded69-293b-5383-8aab-bc25faa8b69d",
                "2ba0d0f3-3006-52d1-ac7e-dac9fa36d28b",
                "b5bb14cd-1dd4-56a9-bd28-6a4db879272e",
                "4af089d1-01ff-5846-9718-503cea2283c4",
                "d5396be8-df7a-5d8b-b905-7bceaa368ae3"
            ]
        },
        {
            "id": 10217598,
            "code": "UBA2001-B-S-295",
            "webName": "2001 - Upper Deck - Upper Deck Baseball - Base - Standard - Albert Pujols",
            "onCardCode": "295",
            "maxPrice": 2575.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 2001,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Albert Pujols",
            "lastname": "",
            "avgPrice": 35.46,
            "imgArr": [
                "caea6dda-3da5-5368-8323-6259f8bcd969",
                "de798d13-f5cc-5246-9d51-1686e744b5d3",
                "bff75643-946c-5df1-a48f-788a57fe3dee",
                "2f86ef5b-c284-56c3-9336-9670156015e7",
                "1e909c6d-7684-5eda-9fa5-be45af0cf9db"
            ]
        },
        {
            "id": 4478,
            "code": "USPBA1993-B-S-279",
            "webName": "1993 - Upper Deck - SP - Base - Standard - Derek Jeter",
            "onCardCode": "279",
            "maxPrice": 35000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "SP",
            "year": 1993,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Derek Jeter",
            "lastname": "",
            "avgPrice": 159.52,
            "imgArr": [
                "36cc3821-9f51-5fd9-b61e-20dace8bbef3",
                "e84cdf3c-a66e-5e13-b2e9-7843db30a922",
                "a9813c98-3955-506d-a08a-efda05d1754b",
                "67695c9a-0938-57f2-94f1-35bb8c808dc8",
                "3cee8d67-ad21-52ab-91e3-82e9837da8bc"
            ]
        },
        {
            "id": 9163678,
            "code": "UBA1991-7-S-7-SP1",
            "webName": "1991 - Upper Deck - Upper Deck Baseball - Michael Jordan SP1 - Standard - Michael Jordan",
            "onCardCode": "SP1",
            "maxPrice": 18988.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1991,
            "type": "Michael Jordan SP1",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 22.88,
            "imgArr": [
                "d1419db5-45f6-5982-ac32-315563fe8513",
                "52a0871d-a9ec-52ab-9bb8-c0a8a8fb5abf",
                "52bef36c-fec8-5c21-b695-362082e9e760",
                "ab851cc5-511c-5c5f-8f3f-fcd660a96eca",
                "98291482-18b1-5435-a9be-b98b702076fa"
            ]
        },
        {
            "id": 1715733,
            "code": "UH2005-B-S-414",
            "webName": "2005 - Upper Deck - Upper Deck Hockey - Base - Standard - Scott Young",
            "onCardCode": "414",
            "maxPrice": 12403.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Hockey",
            "set": "Upper Deck Hockey",
            "year": 2005,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Scott Young",
            "lastname": "",
            "avgPrice": 74.47,
            "imgArr": [
                "02484455-52aa-52a1-8467-b777b8fb869c",
                "a8ba2c44-484e-58cd-8ec3-a077cd863875",
                "03e3d180-e175-5dc9-bf79-7a9601796017",
                "38cf2200-caea-5c50-b810-403ee35aa45f",
                "bfd20ea8-1a49-5b36-8b3f-c94b83e92d82"
            ]
        },
        {
            "id": 1153141,
            "code": "UBB1996-B-S-58",
            "webName": "1996 - Upper Deck - Upper Deck Basketball - Base - Standard - Kobe Bryant",
            "onCardCode": "58",
            "maxPrice": 4499.99,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1996,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Kobe Bryant",
            "lastname": "",
            "avgPrice": 16.1,
            "imgArr": [
                "f61297a6-4bf6-540d-888a-570f24b39ab7",
                "5e13638c-5157-57b1-9d0b-036dc6be2d3c",
                "10620900-a10b-50ec-a9e7-59bdf70ceefb",
                "76d56812-3576-5e0b-b01f-a5b1ce606da2",
                "d026206e-44b8-56cd-a01a-0ddeb4666c87"
            ]
        },
        {
            "id": 9162904,
            "code": "UBA1991-B-S-55",
            "webName": "1991 - Upper Deck - Upper Deck Baseball - Base - Standard - Chipper Jones",
            "onCardCode": "55",
            "maxPrice": 5397.22,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1991,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Chipper Jones",
            "lastname": "",
            "avgPrice": 7.82,
            "imgArr": [
                "3afc1d04-882e-50a6-8e4e-7a6494706f28",
                "ce9acab1-eec9-5cb0-a7dd-5ae14fd12465",
                "0344178c-3d6a-5953-a4e0-8ae39747cf6a",
                "1e3dc012-54ee-567e-a6f3-bf35a96ad17d",
                "ab23e1aa-db84-5b36-aa21-6046c0a7c2f0"
            ]
        },
        {
            "id": 9491564,
            "code": "USPBA1994-B-S-15",
            "webName": "1994 - Upper Deck - SP - Base - Standard - Alex Rodriguez",
            "onCardCode": "15",
            "maxPrice": 24600.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "SP",
            "year": 1994,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Alex Rodriguez",
            "lastname": "",
            "avgPrice": 50.95,
            "imgArr": [
                "8e80d421-37b7-5035-b690-3fa1996c55fa",
                "bfe93e8a-6d53-58bb-b5fa-11baa2a0cf24",
                "3709806e-30f2-5d46-8c12-179acc5b0de9",
                "c150e574-fa3a-5d2d-8c1b-7dcf29b66ec2",
                "bacb78cf-db9e-5ae4-8426-34982ec20b4e"
            ]
        },
        {
            "id": 1009646,
            "code": "UREB2003-B-S-1",
            "webName": "2003 - Upper Deck - Rookie Exclusives - Base - Standard - LeBron James",
            "onCardCode": "1",
            "maxPrice": 5000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Rookie Exclusives",
            "year": 2003,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "LeBron James",
            "lastname": "",
            "avgPrice": 67.56,
            "imgArr": [
                "20fecf81-b2d2-5a09-9325-601c65d993b8",
                "a1fa67f3-b2d0-5a74-9cd3-0e29335bc5be",
                "0d29090c-ce51-5e13-81fb-3590fb2635eb",
                "08e9e34a-5fd4-5f16-8e2d-e2aa1a8e095a",
                "430c4466-653a-5d5e-9bf1-5fc5ac63208f"
            ]
        },
        {
            "id": 196549,
            "code": "UBB1997-B-S-18",
            "webName": "1997 - Upper Deck - Upper Deck Basketball - Base - Standard - Michael Jordan",
            "onCardCode": "18",
            "maxPrice": 3551.23,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1997,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 13.18,
            "imgArr": [
                "80e97c25-cc28-5e38-a57b-36ed3a38d5fe",
                "5512e780-b402-5277-96b4-02ec4263ce83",
                "e48a85c0-9938-53d8-9b9b-9875db9174f9",
                "a371e1de-677b-5186-8844-dead8d3703bf",
                "84915ed0-3c60-5a50-9ad5-df87c1189578"
            ]
        },
        {
            "id": 6893084,
            "code": "UBA1990-B-S-17",
            "webName": "1990 - Upper Deck - Upper Deck Baseball - Base - Standard - Sammy Sosa",
            "onCardCode": "17",
            "maxPrice": 2499.99,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1990,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Sammy Sosa",
            "lastname": "",
            "avgPrice": 6.62,
            "imgArr": [
                "11d9e2d3-f50d-5855-a19c-bb8441c8fe3a",
                "f92c9da3-800b-5bae-a707-6516b674f23b",
                "fe833938-639c-51ef-9b78-83be526baf31",
                "a5e565f6-bce8-5c33-b1b6-fb4b4a2a8038",
                "39b57b57-5892-5fe7-ae50-1240b9d680e6"
            ]
        },
        {
            "id": 15983,
            "code": "UBB1991-B-S-22",
            "webName": "1991 - Upper Deck - Upper Deck Basketball - Base - Standard - Michael Jordan",
            "onCardCode": "22",
            "maxPrice": 3999.99,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1991,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 9.97,
            "imgArr": [
                "c3bdca87-a964-5420-9ab9-e33f806ad69a",
                "e48cb57a-4b84-5144-8d1b-f8c775e45d69",
                "b9235066-d943-5bf9-804e-b3a10ecceaad",
                "46b4b2d5-b805-5c14-9402-12073833cf7e",
                "ac1a36e5-c9ad-5c48-9f2b-e15cbf2904ff"
            ]
        },
        {
            "id": 2268335,
            "code": "UBB1993-B-S-23",
            "webName": "1993 - Upper Deck - Upper Deck Basketball - Base - Standard - Michael Jordan",
            "onCardCode": "23",
            "maxPrice": 4250.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1993,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 5.64,
            "imgArr": [
                "10249486-be54-5480-a95e-76e1c7366f98",
                "1b333536-5037-5b7f-ab0b-cf7f307901ff",
                "b3c2738a-220f-587d-b397-06a0e3fa07a7",
                "9f36f103-a5ac-5d81-be78-97009092b055",
                "a58f072b-0abe-5669-8820-19a8d03defbe"
            ]
        },
        {
            "id": 674818,
            "code": "UBB1998-B-S-23",
            "webName": "1998 - Upper Deck - Upper Deck Basketball - Base - Standard - Michael Jordan",
            "onCardCode": "23",
            "maxPrice": 1625.23,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1998,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 16.38,
            "imgArr": [
                "b791767b-6aa0-5f69-9118-d280cbea2d71",
                "13a23f08-4d31-5765-bd9e-c68e5308b04e",
                "a82b5342-d891-593a-8009-76438bc5afea",
                "9f08c9e0-ca2b-5779-9a23-31598bb5a6df",
                "ece7a63b-9d49-551f-bf5e-162dda338432"
            ]
        },
        {
            "id": 1310167,
            "code": "UCCBB1996-B-S-267",
            "webName": "1996 - Upper Deck - Collector's Choice - Base - Standard - Kobe Bryant",
            "onCardCode": "267",
            "maxPrice": 5000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Collector's Choice",
            "year": 1996,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Kobe Bryant",
            "lastname": "",
            "avgPrice": 24.61,
            "imgArr": [
                "12a96e51-da4d-5d52-b3e1-58f97fb0f78a",
                "47c676e3-fc6f-5eda-a87c-fe76dbff9cad",
                "47b02f1a-2327-516f-bc87-81d9dacbc059",
                "5e2ef324-b990-543d-b276-4f20f36cdd03",
                "0c9ae6c8-162e-55ac-8fed-3aaad2c9a24a"
            ]
        },
        {
            "id": 10217574,
            "code": "UBA2001-B-S-271",
            "webName": "2001 - Upper Deck - Upper Deck Baseball - Base - Standard - Ichiro Suzuki",
            "onCardCode": "271",
            "maxPrice": 1588.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 2001,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Ichiro Suzuki",
            "lastname": "",
            "avgPrice": 12.94,
            "imgArr": [
                "4d9d039f-4ec5-5149-9e51-1d8404fbf71d",
                "ab17f106-5915-559f-b0e3-1b90215532f6",
                "d7d2704f-f7c0-5c4c-a596-634212297cbc",
                "12aac4c4-f1bb-59a9-8578-1389b92aecc2",
                "1f0e69e5-9a09-54e9-9633-480be3e1ed27"
            ]
        },
        {
            "id": 9567114,
            "code": "UH2015-B-S-201",
            "webName": "2015 - Upper Deck - Upper Deck Hockey - Base - Standard - Connor McDavid",
            "onCardCode": "201",
            "maxPrice": 18100.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Hockey",
            "set": "Upper Deck Hockey",
            "year": 2015,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Connor McDavid",
            "lastname": "",
            "avgPrice": 267.44,
            "imgArr": [
                "9898b78c-a3ff-596f-b690-e6eb2096d9ab",
                "89783f24-ce50-5626-a6fb-c4d8a012c364",
                "5522627c-6172-5cd6-929b-72a8d2da7206",
                "26b9c0c1-f5d8-53d4-8f66-f90acd06597a",
                "ed569aa3-8706-5aed-8f28-2d34abf2cbec"
            ]
        },
        {
            "id": 2722200,
            "code": "U3BB1996-B-S-19",
            "webName": "1996 - Upper Deck - UD3 - Base - Standard - Kobe Bryant",
            "onCardCode": "19",
            "maxPrice": 11500.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "UD3",
            "year": 1996,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Kobe Bryant",
            "lastname": "",
            "avgPrice": 57.39,
            "imgArr": [
                "8857a1ab-960d-561d-a66d-0c1a7ca883cb",
                "8718e950-8dab-55aa-ab61-66bebbb6c40f",
                "e214a2f1-dbcc-51e2-9ca6-5f486a4c567b",
                "f11a57c3-e48b-5908-a3bf-3851a2a0975c",
                "c3b59192-1827-50d5-a3a8-1e0b83a79cc9"
            ]
        },
        {
            "id": 3520386,
            "code": "UBA1994-B-S-19",
            "webName": "1994 - Upper Deck - Upper Deck Baseball - Base - Standard - Michael Jordan",
            "onCardCode": "19",
            "maxPrice": 5000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1994,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 10.48,
            "imgArr": [
                "1c37e0c1-0feb-579e-8cb8-cb73c517a89e",
                "3954b073-b3fc-5278-8059-719ef5e7c5c4",
                "c2261b2e-ef7b-50fe-95c9-e182aa554c32",
                "9c94ec17-2efb-57a3-9dc8-80e9e4c3ba38",
                "c10710d6-492a-56fc-abc5-f15060d0d4ad"
            ]
        },
        {
            "id": 2561717,
            "code": "UBB1992-B-S-23",
            "webName": "1992 - Upper Deck - Upper Deck Basketball - Base - Standard - Michael Jordan",
            "onCardCode": "23",
            "maxPrice": 4000.0,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Basketball",
            "set": "Upper Deck Basketball",
            "year": 1992,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Michael Jordan",
            "lastname": "",
            "avgPrice": 5.04,
            "imgArr": [
                "446bbb9c-33d6-5e55-86ae-6c52fa53d101",
                "42c4fec8-2e53-5ddf-845f-e0fed75075f3",
                "ffb7020b-6655-5a06-b123-4cadbdb37bef",
                "aeb6ece7-55dc-5200-bd23-702ad18e7558",
                "4ccafda6-ac2a-5941-82f9-0d7edd6788a4"
            ]
        },
        {
            "id": 10091682,
            "code": "UBA1989-B-S-17",
            "webName": "1989 - Upper Deck - Upper Deck Baseball - Base - Standard - John Smoltz",
            "onCardCode": "17",
            "maxPrice": 445.95,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1989,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "John Smoltz",
            "lastname": "",
            "avgPrice": 3.04,
            "imgArr": [
                "192f99de-1578-55c5-a5dc-503f1bb796b9",
                "ec0e2aef-019d-5ad3-bc16-dea2775bcb30",
                "8adf82a2-29a2-554b-8994-dc54cbf38848",
                "8dee2ad0-4433-514f-a1e7-fffd880df3ef",
                "9dc18d3b-51f5-55ca-ae7f-5428ec0a2588"
            ]
        },
        {
            "id": 10091678,
            "code": "UBA1989-B-S-13",
            "webName": "1989 - Upper Deck - Upper Deck Baseball - Base - Standard - Gary Sheffield",
            "onCardCode": "13",
            "maxPrice": 1009.99,
            "minPrice": 0.01,
            "printRun": 0,
            "publisher": "Upper Deck",
            "sport": "Baseball",
            "set": "Upper Deck Baseball",
            "year": 1989,
            "type": "Base",
            "auto": 0,
            "memo": 0,
            "color": "Standard",
            "firstname": "Gary Sheffield",
            "lastname": "",
            "avgPrice": 3.15,
            "imgArr": [
                "960ab07b-a23b-5c94-a34d-ab147e01c34b",
                "28dce7cc-f41a-5199-8d3d-2daf1360cfef",
                "32a18825-d1a1-5c43-957c-3648b84240bb",
                "927e9577-4a61-5a73-b4ea-c4bbca9dcbdc",
                "957a92c0-f97b-5e39-bd35-085f81a63469"
            ]
        }
    ]
}
```

#### REQUEST Page 2
:method: POST
:scheme: https
:authority: api.priceguide.cards
:path: /v2/elastic-search/search
Content-Type: application/json
Accept: application/json;charset=UTF-8
Authorization: null
Accept-Language: en-CA,en-US;q=0.9,en;q=0.8
Accept-Encoding: gzip, deflate, br
Host: api.priceguide.cards
Origin: https://www.priceguide.cards
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15
Connection: keep-alive
Referer: https://www.priceguide.cards/
Content-Length: 129
langCode: en


### SIGNIN
:method: POST
:scheme: https
:authority: api.priceguide.cards
:path: /v2/account/social-login
Content-Type: application/json
Accept: application/json;charset=UTF-8
Authorization: null
Accept-Language: en-CA,en-US;q=0.9,en;q=0.8
Accept-Encoding: gzip, deflate, br
Host: api.priceguide.cards
Origin: https://www.priceguide.cards
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15
Connection: keep-alive
Referer: https://www.priceguide.cards/
Content-Length: 147
langCode: en

```json
{
    "success": true,
    "data": {
        "token": "(token)",
        "token_expiration": 1668129603,
        "user_data": {
            "userid": 158672,
            "firstname": "Kravec",
            "lastname": "Daniel",
            "username": "dkravec",
            "email": "(email)",
            "user_img": "",
            "bio": null,
            "location": null,
            "timezone": "--4",
            "user_default_sport": 1,
            "user_default_currency": "USD",
            "activated": true
        }
    }
}
```

### card detail
```js 
fetch("https://api.priceguide.cards/v2/card_details/pg_app_card_detail", {
    "body": "{\"card_code\":\"PROH1990-B-S-632A\",\"currency\":\"USD\"}",
    "cache": "default",
    "credentials": "include",
    "headers": {
        "Accept": "application/json",
        "Accept-Language": "en-CA,en-US;q=0.9,en;q=0.8",
        "Authorization": "Bearer (token)",
        "Content-Type": "application/json",
        "langCode": "en",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15"
    },
    "method": "POST",
    "mode": "cors",
    "redirect": "follow",
    "referrer": "https://www.priceguide.cards/",
    "referrerPolicy": "strict-origin-when-cross-origin"
})
// response
{
  "success": true, 
  "data": {
    "card_detail": {
      "id": 9602937, 
      "code": "PROH1990-B-S-632A", 
      "webName": "1990 - Pro Set - Pro Set Hockey - Base - Standard - Jaromir Jagr: Stat headers shifted right", 
      "cardFrontImage": {
        "id": 116851698, 
        "img": "5e129e38-ff02-5009-b0e2-c547c2d5afa6"
      }, 
      "firstname": "Jaromir Jagr: Stat headers shifted right", 
      "lastname": "", 
      "sport": {
        "id": 5, 
        "name": "Hockey"
      }, 
      "year": 1990, 
      "OnCardCode": "632", 
      "publisher": {
        "id": 107, 
        "name": "Pro Set"
      }, 
      "type": {
        "id": 73999, 
        "name": "Base"
      }, 
      "set": {
        "id": 6931, 
        "name": "Pro Set Hockey", 
        "title": "1990 Pro Set Hockey", 
        "url": "collection/6931/1990-pro-set-hockey-cards"
      }, 
      "color": {
        "code": "S", 
        "name": "Standard", 
        "url": "1990-pro-set-hockey-cards---base-standard"
      }, 
      "auto": null, 
      "memo": null, 
      "printRun": "None", 
      "maxPrice": 817.5, 
      "minPrice": 0.01, 
      "portfolio": 0, 
      "wishlist": 0
    }, 
    "collectors_catalog": {
      "portfolio": 91
    }
  }
}
```


### sales detail
```js
fetch("https://api.priceguide.cards/v2/card_details/pg_app_sales_data", {
    "body": "{\"card_code\":\"PROH1990-B-S-632A\",\"currency\":\"USD\"}",
    "cache": "default",
    "credentials": "include",
    "headers": {
        "Accept": "application/json",
        "Accept-Language": "en-CA,en-US;q=0.9,en;q=0.8",
        "Authorization": "Bearer (token)",
        "Content-Type": "application/json",
        "langCode": "en",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15"
    },
    "method": "POST",
    "mode": "cors",
    "redirect": "follow",
    "referrer": "https://www.priceguide.cards/",
    "referrerPolicy": "strict-origin-when-cross-origin"
})
{
  "success": true, 
  "data": {
    "price_data": {
      "count": "748", 
      "maxPrice": 263.87, 
      "minPrice": 0.01, 
      "lastPrice": 1.0, 
      "averagePrice": 5.18
    }, 
    "sale_data": [
      {
        "cardID": 9602937, 
        "id": 8129856947, 
        "link": null, 
        "date": "2022-07-11 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "d5c591f5-4bc6-5668-b26a-ab530b7525e2"
      }, 
      {
        "cardID": 9602937, 
        "id": 8129856966, 
        "link": null, 
        "date": "2022-07-10 00:00:00", 
        "price": 139.86, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8129856965, 
        "link": null, 
        "date": "2022-07-10 00:00:00", 
        "price": 57.88, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "thumb/25819384-04ed-526e-a7cc-6d1608fd82da"
      }, 
      {
        "cardID": 9602937, 
        "id": 8129856961, 
        "link": null, 
        "date": "2022-07-10 00:00:00", 
        "price": 56.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "1821b5bb-3213-5864-be1e-a9ee219e5387"
      }, 
      {
        "cardID": 9602937, 
        "id": 8129693880, 
        "link": null, 
        "date": "2022-07-07 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/5bffd085-7175-5a30-a950-af96c0e934ea"
      }, 
      {
        "cardID": 9602937, 
        "id": 8129643425, 
        "link": null, 
        "date": "2022-07-05 00:00:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "44a5c826-bb8e-5c79-be28-972116b965e6"
      }, 
      {
        "cardID": 9602937, 
        "id": 8129693891, 
        "link": null, 
        "date": "2022-07-05 00:00:00", 
        "price": 1.57, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "3a445e32-e584-547c-b1af-ee463af1412a"
      }, 
      {
        "cardID": 9602937, 
        "id": 8129548927, 
        "link": null, 
        "date": "2022-07-03 00:00:00", 
        "price": 1.04, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "666cb26a-afde-5f38-a969-f6e3fceaa027"
      }, 
      {
        "cardID": 9602937, 
        "id": 8129249490, 
        "link": null, 
        "date": "2022-06-28 00:00:00", 
        "price": 83.82, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "c7ce97af-991a-57f7-8681-6de1085e7c1b"
      }, 
      {
        "cardID": 9602937, 
        "id": 8129060985, 
        "link": null, 
        "date": "2022-06-25 00:00:00", 
        "price": 2.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "3352dec2-c12d-55c1-bc8a-862c958d90dc"
      }, 
      {
        "cardID": 9602937, 
        "id": 8129060999, 
        "link": null, 
        "date": "2022-06-24 00:00:00", 
        "price": 2.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "c67b5c9d-1a0b-5515-8148-54677da587ad"
      }, 
      {
        "cardID": 9602937, 
        "id": 8129004476, 
        "link": null, 
        "date": "2022-06-23 00:00:00", 
        "price": 2.76, 
        "grade_company": "PSA", 
        "grade_value": "6", 
        "img": "thumb/c7c35316-c1b6-56ea-a0c7-57dc518c1cb4"
      }, 
      {
        "cardID": 9602937, 
        "id": 8128973717, 
        "link": null, 
        "date": "2022-06-21 00:00:00", 
        "price": 1.92, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/18410473-7229-5153-9317-b46a0b110f0f"
      }, 
      {
        "cardID": 9602937, 
        "id": 8128869550, 
        "link": null, 
        "date": "2022-06-20 00:00:00", 
        "price": 2.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/2f4a477c-52f5-5855-a03f-3f2598ff34ad"
      }, 
      {
        "cardID": 9602937, 
        "id": 8128869558, 
        "link": null, 
        "date": "2022-06-20 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/4e6e9ecb-9aa0-5749-a579-73d85d4e74d0"
      }, 
      {
        "cardID": 9602937, 
        "id": 8128477955, 
        "link": null, 
        "date": "2022-06-13 00:00:00", 
        "price": 15.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "b75c0c47-082c-58b3-ae9e-7ed0a7fd4119"
      }, 
      {
        "cardID": 9602937, 
        "id": 8128119771, 
        "link": null, 
        "date": "2022-06-06 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "029d4bc3-d1d5-5f1e-8280-341dbab4134e"
      }, 
      {
        "cardID": 9602937, 
        "id": 8128119683, 
        "link": null, 
        "date": "2022-06-06 00:00:00", 
        "price": 2.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "8e23204b-33bc-5a46-9cf5-964d56fbe264"
      }, 
      {
        "cardID": 9602937, 
        "id": 8128119006, 
        "link": null, 
        "date": "2022-06-06 00:00:00", 
        "price": 7.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/3767bf11-cbbc-58ac-ae99-a5bb3d461b02"
      }, 
      {
        "cardID": 9602937, 
        "id": 8128005671, 
        "link": null, 
        "date": "2022-06-05 00:00:00", 
        "price": 79.46, 
        "grade_company": "KSA", 
        "grade_value": "10", 
        "img": "thumb/39520d3b-dcf5-50b5-baef-f0446bd93d24"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127903202, 
        "link": null, 
        "date": "2022-06-02 00:00:00", 
        "price": 6.35, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/1cc4a9a6-03ff-5964-a6ee-01b566b92420"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127903189, 
        "link": null, 
        "date": "2022-06-02 00:00:00", 
        "price": 9.5, 
        "grade_company": "PSA", 
        "grade_value": "6", 
        "img": "a335a907-7a22-5615-9609-3621179b9b7c"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127792776, 
        "link": null, 
        "date": "2022-05-31 00:00:00", 
        "price": 7.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/6198f4a3-49f6-5a26-bdaa-1fd8b1ebd5f4"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127703880, 
        "link": null, 
        "date": "2022-05-29 00:00:00", 
        "price": 15.64, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9574a572-4512-52fb-b178-1bfb637fa60f"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127703877, 
        "link": null, 
        "date": "2022-05-29 00:00:00", 
        "price": 0.78, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a69af6b0-9d55-5d03-a8dc-8297c28066c6"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127596530, 
        "link": null, 
        "date": "2022-05-28 00:00:00", 
        "price": 0.78, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "ce299b40-9ac7-54df-bf62-19db0273193a"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127596548, 
        "link": null, 
        "date": "2022-05-28 00:00:00", 
        "price": 1.95, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/01057c1b-5199-50a4-94f5-4f86f92130ac"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127514219, 
        "link": null, 
        "date": "2022-05-26 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "cdf5d151-d3a8-5e47-b8c5-ca942614946e"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127280978, 
        "link": null, 
        "date": "2022-05-23 00:00:00", 
        "price": 65.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8127202566, 
        "link": null, 
        "date": "2022-05-22 00:00:00", 
        "price": 2.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "76dbe006-0a07-58b4-9778-49adae4c31ec"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127202565, 
        "link": null, 
        "date": "2022-05-22 00:00:00", 
        "price": 4.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "8c140e0e-0dd6-5d9b-bcc7-90fa03a303e5"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127202549, 
        "link": null, 
        "date": "2022-05-22 00:00:00", 
        "price": 56.01, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "d74780a1-c7b1-54ff-9f10-806133c429c6"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127202587, 
        "link": null, 
        "date": "2022-05-21 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "33ab8cd8-4006-586d-94df-fed04d09d2c4"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127202633, 
        "link": null, 
        "date": "2022-05-19 00:00:00", 
        "price": 2.69, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/aa04f31e-4c90-517e-bd1d-52b6746b376e"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127202638, 
        "link": null, 
        "date": "2022-05-19 00:00:00", 
        "price": 1.55, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f992e2d6-2615-5397-b37f-fbf5f9df025a"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127202636, 
        "link": null, 
        "date": "2022-05-19 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "1ab0963b-118c-5ae9-8893-591b6baae2d8"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126982474, 
        "link": null, 
        "date": "2022-05-14 00:00:00", 
        "price": 5.02, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f9e8ea48-01d8-517f-8851-a016f515db03"
      }, 
      {
        "cardID": 9602937, 
        "id": 8127054000, 
        "link": null, 
        "date": "2022-05-14 00:00:00", 
        "price": 1.54, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/ca1206c3-b5db-5ad7-87f5-07373ed983ce"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126910188, 
        "link": null, 
        "date": "2022-05-12 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/aa990824-360f-5678-b07a-c99e1d055891"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126846043, 
        "link": null, 
        "date": "2022-05-11 00:00:00", 
        "price": 23.05, 
        "grade_company": "KSA", 
        "grade_value": "9", 
        "img": "f0d91190-8f3c-55ed-8039-741b0660905b"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126790487, 
        "link": null, 
        "date": "2022-05-10 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/da19cddb-3254-5ab9-bd51-bbc6d75f4515"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126790486, 
        "link": null, 
        "date": "2022-05-10 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "7e81a289-d9d1-5c88-9bc2-38a02d0d9212"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126790468, 
        "link": null, 
        "date": "2022-05-10 00:00:00", 
        "price": 7.7, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "2b3a8865-a94c-5617-b823-b2f50251dd05"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126790491, 
        "link": null, 
        "date": "2022-05-10 00:00:00", 
        "price": 98.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "6506fed0-0e95-5b22-961e-f7d6ddfcbc5c"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126703492, 
        "link": null, 
        "date": "2022-05-09 00:00:00", 
        "price": 74.11, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "thumb/f327f688-0ace-5106-8749-bb3b89e5294b"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126466810, 
        "link": null, 
        "date": "2022-05-04 00:00:00", 
        "price": 5.25, 
        "grade_company": "PSA", 
        "grade_value": "6", 
        "img": "05f6c978-477f-51e8-b99a-2c63a00e4ce8"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126377324, 
        "link": null, 
        "date": "2022-05-04 00:00:00", 
        "price": 55.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "5e42ea08-eebc-5b47-9633-cc8ef7ebc283"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126377343, 
        "link": null, 
        "date": "2022-05-03 00:00:00", 
        "price": 14.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "ae3d8864-08ad-5d26-aeed-5d153154a54a"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126284492, 
        "link": null, 
        "date": "2022-05-01 00:00:00", 
        "price": 56.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "thumb/ea425d0c-7023-53dd-880c-3fbe0b347a2e"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126176763, 
        "link": null, 
        "date": "2022-04-30 00:00:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "10e7d43d-d969-5d24-8825-571e1cc98ed0"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126209787, 
        "link": null, 
        "date": "2022-04-30 00:00:00", 
        "price": 8.01, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a7a65dd9-228f-5543-b952-2545dcab9d55"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126095207, 
        "link": null, 
        "date": "2022-04-29 00:00:00", 
        "price": 3.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "e6961b1d-d7c8-546b-a116-69f600a42625"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126095212, 
        "link": null, 
        "date": "2022-04-28 00:00:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f76bc4f8-0097-5673-bfc1-46fd3e714f0b"
      }, 
      {
        "cardID": 9602937, 
        "id": 8125814837, 
        "link": null, 
        "date": "2022-04-23 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/8cb6dc84-4df9-500d-a522-62eccb72c71f"
      }, 
      {
        "cardID": 9602937, 
        "id": 8125692799, 
        "link": null, 
        "date": "2022-04-22 00:00:00", 
        "price": 3.11, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8125546506, 
        "link": null, 
        "date": "2022-04-19 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "4dafbe03-7bf0-52cf-890a-aa500f59a4b0"
      }, 
      {
        "cardID": 9602937, 
        "id": 8125369870, 
        "link": null, 
        "date": "2022-04-14 00:00:00", 
        "price": 2.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "294023ab-5134-5845-a78f-a8907cfb8cd1"
      }, 
      {
        "cardID": 9602937, 
        "id": 8125217696, 
        "link": null, 
        "date": "2022-04-10 00:00:00", 
        "price": 56.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "f6f01088-a1c8-5efb-8c76-accb36048ce7"
      }, 
      {
        "cardID": 9602937, 
        "id": 8126846080, 
        "link": null, 
        "date": "2022-04-09 00:00:00", 
        "price": 16.5, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "fb32e55a-76a1-5587-bb01-143c21f54b45"
      }, 
      {
        "cardID": 9602937, 
        "id": 8125003742, 
        "link": null, 
        "date": "2022-04-08 00:00:00", 
        "price": 3.97, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "78aff55b-ac9c-5e0b-971f-4e8deb4b2a2c"
      }, 
      {
        "cardID": 9602937, 
        "id": 8125003744, 
        "link": null, 
        "date": "2022-04-08 00:00:00", 
        "price": 1.82, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "44d979c3-6ac5-50cf-af48-e81a726f174b"
      }, 
      {
        "cardID": 9602937, 
        "id": 8125003741, 
        "link": null, 
        "date": "2022-04-08 00:00:00", 
        "price": 52.14, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "thumb/9d7865db-fd9e-53ed-9cb0-b223e92f8427"
      }, 
      {
        "cardID": 9602937, 
        "id": 8125003760, 
        "link": null, 
        "date": "2022-04-07 00:00:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "7e619380-071a-5c74-b6ec-ade9192b8028"
      }, 
      {
        "cardID": 9602937, 
        "id": 8124854921, 
        "link": null, 
        "date": "2022-04-03 00:00:00", 
        "price": 3.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "e37b773a-72be-5031-bb9c-e90a12584e27"
      }, 
      {
        "cardID": 9602937, 
        "id": 8124782271, 
        "link": null, 
        "date": "2022-04-03 00:00:00", 
        "price": 6.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/5f77f0fc-b24f-5cf8-9029-bb7594d3ee57"
      }, 
      {
        "cardID": 9602937, 
        "id": 8124756121, 
        "link": null, 
        "date": "2022-04-02 00:00:00", 
        "price": 11.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/2aad57ee-243e-5875-9813-b4fefa13746f"
      }, 
      {
        "cardID": 9602937, 
        "id": 8124654726, 
        "link": null, 
        "date": "2022-03-30 00:00:00", 
        "price": 9.5, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "ab73fe1e-0982-55d6-a9c3-2f88102866c0"
      }, 
      {
        "cardID": 9602937, 
        "id": 8124502157, 
        "link": null, 
        "date": "2022-03-28 00:00:00", 
        "price": 7.5, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "8d9c18f2-968a-56c3-8156-2853ff90da15"
      }, 
      {
        "cardID": 9602937, 
        "id": 8124381140, 
        "link": null, 
        "date": "2022-03-26 00:00:00", 
        "price": 4.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/6ca44628-db99-565e-9279-68b94cff191b"
      }, 
      {
        "cardID": 9602937, 
        "id": 8124381157, 
        "link": null, 
        "date": "2022-03-24 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "228f9599-a924-541f-8935-a818780cc33b"
      }, 
      {
        "cardID": 9602937, 
        "id": 8124372445, 
        "link": null, 
        "date": "2022-03-24 00:00:00", 
        "price": 50.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "422d8e55-bbf4-52c2-baa8-055f2ba12370"
      }, 
      {
        "cardID": 9602937, 
        "id": 8124166773, 
        "link": null, 
        "date": "2022-03-20 00:00:00", 
        "price": 2.39, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "7113c9b1-73b0-556a-908e-64c4949373fc"
      }, 
      {
        "cardID": 9602937, 
        "id": 8124038766, 
        "link": null, 
        "date": "2022-03-18 00:00:00", 
        "price": 1.81, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b1ab64f3-5a82-53d0-825e-c58453e04c63"
      }, 
      {
        "cardID": 9602937, 
        "id": 8123926355, 
        "link": null, 
        "date": "2022-03-17 00:00:00", 
        "price": 1.56, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "4c48ccb3-dfd5-5672-a65d-22810376748f"
      }, 
      {
        "cardID": 9602937, 
        "id": 8123926279, 
        "link": null, 
        "date": "2022-03-15 00:00:00", 
        "price": 89.94, 
        "grade_company": "KSA", 
        "grade_value": "10", 
        "img": "b303b283-4a32-5468-a178-b6d94a0c7163"
      }, 
      {
        "cardID": 9602937, 
        "id": 8123703409, 
        "link": null, 
        "date": "2022-03-12 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9657e3a7-63fc-5227-9652-da922a43071f"
      }, 
      {
        "cardID": 9602937, 
        "id": 8123703431, 
        "link": null, 
        "date": "2022-03-11 00:00:00", 
        "price": 14.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "da07cd86-c39e-555a-9bcc-4f7af1218fea"
      }, 
      {
        "cardID": 9602937, 
        "id": 8123703449, 
        "link": null, 
        "date": "2022-03-10 00:00:00", 
        "price": 23.62, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "4ab12552-9f0b-5209-aef9-028cf750de7d"
      }, 
      {
        "cardID": 9602937, 
        "id": 8123432686, 
        "link": null, 
        "date": "2022-03-06 00:00:00", 
        "price": 2.48, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b5f91953-385a-5dc4-a693-c9f185b739e6"
      }, 
      {
        "cardID": 9602937, 
        "id": 8123432696, 
        "link": null, 
        "date": "2022-03-06 00:00:00", 
        "price": 8.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "07341780-ecae-5b90-863a-9e1d5407850d"
      }, 
      {
        "cardID": 9602937, 
        "id": 8123127634, 
        "link": null, 
        "date": "2022-02-28 00:00:00", 
        "price": 7.01, 
        "grade_company": "SGC", 
        "grade_value": "96", 
        "img": "47a4f951-0bf2-5ab8-86ca-582492298ce0"
      }, 
      {
        "cardID": 9602937, 
        "id": 8122789334, 
        "link": null, 
        "date": "2022-02-22 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f4588237-ff85-530d-845f-01b3380f230d"
      }, 
      {
        "cardID": 9602937, 
        "id": 8122789376, 
        "link": null, 
        "date": "2022-02-21 00:00:00", 
        "price": 38.51, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "58cad9b4-eb66-5211-823a-39f5d8bf6f79"
      }, 
      {
        "cardID": 9602937, 
        "id": 8122659003, 
        "link": null, 
        "date": "2022-02-20 00:00:00", 
        "price": 4.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b6701599-180b-5216-80fa-493c0d02e0d3"
      }, 
      {
        "cardID": 9602937, 
        "id": 8122659001, 
        "link": null, 
        "date": "2022-02-20 00:00:00", 
        "price": 1.88, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "43bc69b5-739d-504b-9701-e79ab1568070"
      }, 
      {
        "cardID": 9602937, 
        "id": 8122480103, 
        "link": null, 
        "date": "2022-02-15 00:00:00", 
        "price": 2.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "49a58b11-70ff-51ea-8f6a-5b3d7c0170e5"
      }, 
      {
        "cardID": 9602937, 
        "id": 8122253916, 
        "link": null, 
        "date": "2022-02-12 00:00:00", 
        "price": 1.54, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/7b6cd9ae-2ba6-52b7-91ad-655b05c8f91b"
      }, 
      {
        "cardID": 9602937, 
        "id": 8122253915, 
        "link": null, 
        "date": "2022-02-12 00:00:00", 
        "price": 1.54, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "029916e0-149b-5ff2-a54c-8d7ace049e2f"
      }, 
      {
        "cardID": 9602937, 
        "id": 8122051129, 
        "link": null, 
        "date": "2022-02-08 00:00:00", 
        "price": 2.48, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "be76b8fc-d6cf-5ca0-b6a3-8eaf46968ce7"
      }, 
      {
        "cardID": 9602937, 
        "id": 8122051134, 
        "link": null, 
        "date": "2022-02-08 00:00:00", 
        "price": 10.1, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "7c36d5b8-b834-560a-a7cb-84d796e34f2b"
      }, 
      {
        "cardID": 9602937, 
        "id": 8122051257, 
        "link": null, 
        "date": "2022-02-06 00:00:00", 
        "price": 15.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "ece6e543-e41f-5a0c-828e-8883be2a8c31"
      }, 
      {
        "cardID": 9602937, 
        "id": 8121894301, 
        "link": null, 
        "date": "2022-02-03 00:00:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a77dc0db-b6c4-594e-9f9f-eccc384adb9a"
      }, 
      {
        "cardID": 9602937, 
        "id": 8121894305, 
        "link": null, 
        "date": "2022-02-03 00:00:00", 
        "price": 69.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "0e35c1dd-7fb2-52c6-9da5-a1154bcaa6d0"
      }, 
      {
        "cardID": 9602937, 
        "id": 8121666700, 
        "link": null, 
        "date": "2022-01-31 00:00:00", 
        "price": 3.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "44e08cd3-8d47-525c-8763-a5c6a0a689eb"
      }, 
      {
        "cardID": 9602937, 
        "id": 8121463572, 
        "link": null, 
        "date": "2022-01-27 00:00:00", 
        "price": 817.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "35090a4c-8e41-550b-b409-112211978026"
      }, 
      {
        "cardID": 9602937, 
        "id": 8121387633, 
        "link": null, 
        "date": "2022-01-26 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/4b7f5d6b-2029-5526-8108-52d035976334"
      }, 
      {
        "cardID": 9602937, 
        "id": 8121121166, 
        "link": null, 
        "date": "2022-01-22 00:00:00", 
        "price": 3.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f4616fbe-1ff3-5162-b6b6-35a3ced0e0a9"
      }, 
      {
        "cardID": 9602937, 
        "id": 8121004939, 
        "link": null, 
        "date": "2022-01-20 00:00:00", 
        "price": 72.04, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "thumb/a13b4d6b-f931-5312-a3b3-cb1ec4bfdfba"
      }, 
      {
        "cardID": 9602937, 
        "id": 8120853414, 
        "link": null, 
        "date": "2022-01-17 00:00:00", 
        "price": 1.04, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "d965d3be-82f7-5aef-8962-25b6b0a8e0d9"
      }, 
      {
        "cardID": 9602937, 
        "id": 8120788227, 
        "link": null, 
        "date": "2022-01-16 00:00:00", 
        "price": 20.89, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "0a28e20e-6885-5184-b20c-784b5a2fa30c"
      }, 
      {
        "cardID": 9602937, 
        "id": 8120701955, 
        "link": null, 
        "date": "2022-01-14 00:00:00", 
        "price": 2.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "63f3d12b-c3e4-5903-adb1-babfa61c9d05"
      }, 
      {
        "cardID": 9602937, 
        "id": 8120594345, 
        "link": null, 
        "date": "2022-01-13 00:00:00", 
        "price": 12.94, 
        "grade_company": "KSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8120524254, 
        "link": null, 
        "date": "2022-01-11 00:00:00", 
        "price": 99.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b3e52290-e41d-50a5-8dbd-7956cadba9ef"
      }, 
      {
        "cardID": 9602937, 
        "id": 8120436211, 
        "link": null, 
        "date": "2022-01-10 00:00:00", 
        "price": 99.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "042b6284-daf4-5285-a4c8-ddc6f9b5423c"
      }, 
      {
        "cardID": 9602937, 
        "id": 8120355888, 
        "link": null, 
        "date": "2022-01-08 00:00:00", 
        "price": 0.78, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "bcaf0f23-d224-54f5-977e-b355c8a34ae8"
      }, 
      {
        "cardID": 9602937, 
        "id": 8120228514, 
        "link": null, 
        "date": "2022-01-05 00:00:00", 
        "price": 0.98, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a898c633-1f56-5387-83fe-d6042b5453d8"
      }, 
      {
        "cardID": 9602937, 
        "id": 8120080643, 
        "link": null, 
        "date": "2022-01-02 00:00:00", 
        "price": 14.99, 
        "grade_company": "BGS", 
        "grade_value": "9", 
        "img": "ad02f4bf-147a-56d8-b9d1-277c5f497f81"
      }, 
      {
        "cardID": 9602937, 
        "id": 8120080662, 
        "link": null, 
        "date": "2022-01-02 00:00:00", 
        "price": 162.75, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8119924939, 
        "link": null, 
        "date": "2021-12-30 00:00:00", 
        "price": 5.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "ba67ca0e-813e-5ece-ad30-9fd828cb57c4"
      }, 
      {
        "cardID": 9602937, 
        "id": 8119705304, 
        "link": null, 
        "date": "2021-12-26 00:00:00", 
        "price": 1.37, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "294c823d-4ec3-5974-bfda-46fd8268ef23"
      }, 
      {
        "cardID": 9602937, 
        "id": 8119545656, 
        "link": null, 
        "date": "2021-12-21 00:00:00", 
        "price": 2.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "4bb308b5-1bde-523f-98bd-73215b4bbe5a"
      }, 
      {
        "cardID": 9602937, 
        "id": 8119431982, 
        "link": null, 
        "date": "2021-12-20 00:00:00", 
        "price": 28.6, 
        "grade_company": "KSA", 
        "grade_value": "10", 
        "img": "fc48f5b6-d54d-56bf-bcb3-933c5933df36"
      }, 
      {
        "cardID": 9602937, 
        "id": 8119432000, 
        "link": null, 
        "date": "2021-12-19 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "fc275e01-3ada-58e1-a81f-f4f7822333f9"
      }, 
      {
        "cardID": 9602937, 
        "id": 8119352142, 
        "link": null, 
        "date": "2021-12-19 00:00:00", 
        "price": 57.01, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "3bf7037b-e092-547a-b171-1fb363325d00"
      }, 
      {
        "cardID": 9602937, 
        "id": 8119221994, 
        "link": null, 
        "date": "2021-12-15 00:00:00", 
        "price": 642.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "7b55b2c0-18e4-5a4e-8b67-7467b05b0910"
      }, 
      {
        "cardID": 9602937, 
        "id": 8119222131, 
        "link": null, 
        "date": "2021-12-14 00:00:00", 
        "price": 2.75, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "363a751f-ffd6-50a4-8b24-a03d403d7291"
      }, 
      {
        "cardID": 9602937, 
        "id": 8119086981, 
        "link": null, 
        "date": "2021-12-11 00:00:00", 
        "price": 5.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "2684f039-a755-5555-b05e-0faa30f6d3f9"
      }, 
      {
        "cardID": 9602937, 
        "id": 8119086769, 
        "link": null, 
        "date": "2021-12-11 00:00:00", 
        "price": 1.01, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9a9320be-fcfb-55a1-9f19-d01acb46d807"
      }, 
      {
        "cardID": 9602937, 
        "id": 8119086972, 
        "link": null, 
        "date": "2021-12-10 00:00:00", 
        "price": 162.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "d78fb0ab-6db0-5061-806d-4793fccb8f16"
      }, 
      {
        "cardID": 9602937, 
        "id": 8118721268, 
        "link": null, 
        "date": "2021-12-02 00:00:00", 
        "price": 2.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "8a94789e-482d-5a1a-b297-443186fba74f"
      }, 
      {
        "cardID": 9602937, 
        "id": 8118649946, 
        "link": null, 
        "date": "2021-12-01 00:00:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b793231b-27a5-5ea6-b4b1-ed144c78dec2"
      }, 
      {
        "cardID": 9602937, 
        "id": 8118583852, 
        "link": null, 
        "date": "2021-11-29 00:00:00", 
        "price": 1.17, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "45753045-2719-5426-bbca-c7cd316283aa"
      }, 
      {
        "cardID": 9602937, 
        "id": 8118483221, 
        "link": null, 
        "date": "2021-11-28 00:00:00", 
        "price": 0.39, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "85133ca2-ad4e-50c3-b347-1043477008db"
      }, 
      {
        "cardID": 9602937, 
        "id": 8118483258, 
        "link": null, 
        "date": "2021-11-26 00:00:00", 
        "price": 5.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "270190bf-916e-58f2-be6e-a259d304cd02"
      }, 
      {
        "cardID": 9602937, 
        "id": 8118282697, 
        "link": null, 
        "date": "2021-11-22 00:00:00", 
        "price": 1.7, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "35f8c9ae-f01d-5c15-a2c4-51cfd9067fc3"
      }, 
      {
        "cardID": 9602937, 
        "id": 8118225968, 
        "link": null, 
        "date": "2021-11-20 00:00:00", 
        "price": 2.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b0e62e55-5cd2-5181-adb0-730314499980"
      }, 
      {
        "cardID": 9602937, 
        "id": 8118225956, 
        "link": null, 
        "date": "2021-11-20 00:00:00", 
        "price": 3.95, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "4101c589-8765-5dc1-b6fe-666a920c8a1d"
      }, 
      {
        "cardID": 9602937, 
        "id": 8118002026, 
        "link": null, 
        "date": "2021-11-14 00:00:00", 
        "price": 2.54, 
        "grade_company": "SGC", 
        "grade_value": "92", 
        "img": "d7406063-4a7a-5413-a5b5-23c9d74017cd"
      }, 
      {
        "cardID": 9602937, 
        "id": 8117842654, 
        "link": null, 
        "date": "2021-11-11 00:00:00", 
        "price": 263.87, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9813dd63-eb21-5e50-82ec-3da1de1e7eda"
      }, 
      {
        "cardID": 9602937, 
        "id": 8117772953, 
        "link": null, 
        "date": "2021-11-09 00:00:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b3a77707-55cb-56d0-a24a-debf8398cb59"
      }, 
      {
        "cardID": 9602937, 
        "id": 8117512463, 
        "link": null, 
        "date": "2021-11-04 00:00:00", 
        "price": 2.81, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "1c998965-4d1f-5939-9e26-7c545ee3fae7"
      }, 
      {
        "cardID": 9602937, 
        "id": 8117412322, 
        "link": null, 
        "date": "2021-11-02 00:00:00", 
        "price": 163.02, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8117359566, 
        "link": null, 
        "date": "2021-11-01 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "5b9c4a0c-15b4-5d51-af9d-8a0e353d65e4"
      }, 
      {
        "cardID": 9602937, 
        "id": 8117412398, 
        "link": null, 
        "date": "2021-10-31 00:00:00", 
        "price": 18.5, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "515bf74c-2837-5282-9b3b-84d0e3c3d9fa"
      }, 
      {
        "cardID": 9602937, 
        "id": 8117270397, 
        "link": null, 
        "date": "2021-10-29 00:00:00", 
        "price": 1.61, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "169a8386-f037-5f6e-8b72-5ab5ab170e90"
      }, 
      {
        "cardID": 9602937, 
        "id": 8117359637, 
        "link": null, 
        "date": "2021-10-28 00:00:00", 
        "price": 0.8, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b17a71ca-bdcb-59ea-92a4-f8c5d8181387"
      }, 
      {
        "cardID": 9602937, 
        "id": 8116989204, 
        "link": null, 
        "date": "2021-10-22 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "c9b6dd39-80b8-5fcc-a0dd-edf9b1417a46"
      }, 
      {
        "cardID": 9602937, 
        "id": 8116800778, 
        "link": null, 
        "date": "2021-10-13 00:00:00", 
        "price": 5.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "e5da58d3-49b3-5520-912f-8e0b2e620923"
      }, 
      {
        "cardID": 9602937, 
        "id": 8116502251, 
        "link": null, 
        "date": "2021-10-09 00:00:00", 
        "price": 0.84, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "02d8a127-3a6b-572a-aa1c-879525eceb2f"
      }, 
      {
        "cardID": 9602937, 
        "id": 8116088814, 
        "link": null, 
        "date": "2021-09-28 00:00:00", 
        "price": 1.47, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/472a0168-7d22-5fd5-8e58-d89c1cd38bba"
      }, 
      {
        "cardID": 9602937, 
        "id": 8115782699, 
        "link": null, 
        "date": "2021-09-23 00:00:00", 
        "price": 39.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "fd2f5dfb-0f89-573d-8b1d-60c46cdefce1"
      }, 
      {
        "cardID": 9602937, 
        "id": 8115648376, 
        "link": null, 
        "date": "2021-09-17 00:00:00", 
        "price": 1.1, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/5e458749-bd59-5184-add7-fd52aa7c47a4"
      }, 
      {
        "cardID": 9602937, 
        "id": 8115648399, 
        "link": null, 
        "date": "2021-09-16 00:00:00", 
        "price": 4.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/6adafae3-e2ff-5123-a2be-ba4ea016b72d"
      }, 
      {
        "cardID": 9602937, 
        "id": 8115508506, 
        "link": null, 
        "date": "2021-09-15 00:00:00", 
        "price": 5.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "fe36ed72-2f63-5374-8545-e622b8d16b98"
      }, 
      {
        "cardID": 9602937, 
        "id": 8115508508, 
        "link": null, 
        "date": "2021-09-15 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f248bf09-d13f-52a3-b2ab-9180534e99bd"
      }, 
      {
        "cardID": 9602937, 
        "id": 8115263746, 
        "link": null, 
        "date": "2021-09-06 00:00:00", 
        "price": 10.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "91fed65a-4824-5f2f-9ae8-9bc9bc215ca3"
      }, 
      {
        "cardID": 9602937, 
        "id": 8115026859, 
        "link": null, 
        "date": "2021-08-31 00:00:00", 
        "price": 5.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "48d2145b-956d-5b25-84c6-8c78521517d9"
      }, 
      {
        "cardID": 9602937, 
        "id": 8114750738, 
        "link": null, 
        "date": "2021-08-24 00:00:00", 
        "price": 2.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "917737c7-b2e2-562a-b8a4-7ac807f2cb32"
      }, 
      {
        "cardID": 9602937, 
        "id": 8114749171, 
        "link": null, 
        "date": "2021-08-24 00:00:00", 
        "price": 24.5, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "cee19f95-9d8d-580b-9c9f-1e924a24452f"
      }, 
      {
        "cardID": 9602937, 
        "id": 8114750742, 
        "link": null, 
        "date": "2021-08-23 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/072c411d-fe10-5198-a24d-f01b4bf0b464"
      }, 
      {
        "cardID": 9602937, 
        "id": 8114750748, 
        "link": null, 
        "date": "2021-08-23 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "aa5b48bf-1eee-5bbf-be94-879b9b7c3c02"
      }, 
      {
        "cardID": 9602937, 
        "id": 8114599574, 
        "link": null, 
        "date": "2021-08-21 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "47adc2e2-917a-5c6e-95fa-7fe9f0735581"
      }, 
      {
        "cardID": 9602937, 
        "id": 8114483576, 
        "link": null, 
        "date": "2021-08-17 00:00:00", 
        "price": 87.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "62985677-1805-5f8d-affb-2b80591f52c3"
      }, 
      {
        "cardID": 9602937, 
        "id": 8114337274, 
        "link": null, 
        "date": "2021-08-15 00:00:00", 
        "price": 163.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "8651c02f-f3b7-55b1-ad3f-6ed34a0930b8"
      }, 
      {
        "cardID": 9602937, 
        "id": 8114341173, 
        "link": null, 
        "date": "2021-08-14 00:00:00", 
        "price": 1.83, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "efe724e3-751e-5773-8203-9a6926e94fbf"
      }, 
      {
        "cardID": 9602937, 
        "id": 8114341171, 
        "link": null, 
        "date": "2021-08-14 00:00:00", 
        "price": 4.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "60ce6075-f69b-5946-9e0d-2622b5df1920"
      }, 
      {
        "cardID": 9602937, 
        "id": 8114341228, 
        "link": null, 
        "date": "2021-08-12 00:00:00", 
        "price": 5.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "c374dc5f-9fc6-5404-8008-9de918dafced"
      }, 
      {
        "cardID": 9602937, 
        "id": 8113869449, 
        "link": null, 
        "date": "2021-07-31 00:00:00", 
        "price": 2.2, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "thumb/2ac4228d-dc53-5b95-bd84-e67837054d87"
      }, 
      {
        "cardID": 9602937, 
        "id": 8113726002, 
        "link": null, 
        "date": "2021-07-26 00:00:00", 
        "price": 56.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "thumb/14048d11-52cc-5857-a5ee-edf4b4137ff0"
      }, 
      {
        "cardID": 9602937, 
        "id": 8113575873, 
        "link": null, 
        "date": "2021-07-24 00:00:00", 
        "price": 0.79, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "34c33ccf-eb0c-5df6-a072-5e1332b57a59"
      }, 
      {
        "cardID": 9602937, 
        "id": 8113575896, 
        "link": null, 
        "date": "2021-07-22 00:00:00", 
        "price": 15.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9fd57510-335d-5265-9e16-7101ad384ef1"
      }, 
      {
        "cardID": 9602937, 
        "id": 8113308224, 
        "link": null, 
        "date": "2021-07-17 00:00:00", 
        "price": 1.18, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "65aed54a-da67-5165-85c3-8ebf6712d241"
      }, 
      {
        "cardID": 9602937, 
        "id": 8113308223, 
        "link": null, 
        "date": "2021-07-17 00:00:00", 
        "price": 48.0, 
        "grade_company": "SGC", 
        "grade_value": "98", 
        "img": "50f07014-f32c-5f3e-809a-d0d47972dce4"
      }, 
      {
        "cardID": 9602937, 
        "id": 8113042311, 
        "link": null, 
        "date": "2021-07-11 00:00:00", 
        "price": 1.84, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "19f372a1-1536-5f38-81b2-82bf890ad781"
      }, 
      {
        "cardID": 9602937, 
        "id": 8113042313, 
        "link": null, 
        "date": "2021-07-11 00:00:00", 
        "price": 1.19, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "1e872c39-6319-5c98-a2ae-c0f2d5c3ee8e"
      }, 
      {
        "cardID": 9602937, 
        "id": 8113042315, 
        "link": null, 
        "date": "2021-07-11 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "4eda62db-566b-5ebe-a2dc-6598b9a8a03d"
      }, 
      {
        "cardID": 9602937, 
        "id": 8112742076, 
        "link": null, 
        "date": "2021-07-08 00:00:00", 
        "price": 1.08, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9dbe5241-2b76-51ac-bb22-be9adb9f0289"
      }, 
      {
        "cardID": 9602937, 
        "id": 8113042341, 
        "link": null, 
        "date": "2021-07-07 00:00:00", 
        "price": 4.81, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "ad42bcc6-43e3-5de1-a182-551f1042a12c"
      }, 
      {
        "cardID": 9602937, 
        "id": 8112742094, 
        "link": null, 
        "date": "2021-07-06 00:00:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "d6d51d27-4700-5a2a-894e-942ff10aef6c"
      }, 
      {
        "cardID": 9602937, 
        "id": 8112742146, 
        "link": null, 
        "date": "2021-07-03 00:00:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "6969e3c7-2072-5c12-9ab3-3ff6da6d0db2"
      }, 
      {
        "cardID": 9602937, 
        "id": 8112629977, 
        "link": null, 
        "date": "2021-07-02 00:00:00", 
        "price": 32.34, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "64ead723-83fd-5642-84e1-a000f5eebdbe"
      }, 
      {
        "cardID": 9602937, 
        "id": 8112210738, 
        "link": null, 
        "date": "2021-06-28 00:00:00", 
        "price": 1.34, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "4e8f9ad0-8818-5739-b0db-8b43adced677"
      }, 
      {
        "cardID": 9602937, 
        "id": 8111793214, 
        "link": null, 
        "date": "2021-06-23 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8111793271, 
        "link": null, 
        "date": "2021-06-06 00:00:00", 
        "price": 5.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8112742516, 
        "link": null, 
        "date": "2021-06-04 00:00:00", 
        "price": 14.99, 
        "grade_company": "PSA", 
        "grade_value": "8", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8113659193, 
        "link": null, 
        "date": "2021-06-03 00:00:00", 
        "price": 0.79, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8112742522, 
        "link": null, 
        "date": "2021-05-30 00:00:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8113659215, 
        "link": null, 
        "date": "2021-05-29 00:00:00", 
        "price": 0.79, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8111793313, 
        "link": null, 
        "date": "2021-05-27 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8111263003, 
        "link": null, 
        "date": "2021-05-27 00:00:00", 
        "price": 4.1, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8112742490, 
        "link": null, 
        "date": "2021-05-27 00:00:00", 
        "price": 17.99, 
        "grade_company": "PSA", 
        "grade_value": "6", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8111793317, 
        "link": null, 
        "date": "2021-05-19 00:00:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8111793294, 
        "link": null, 
        "date": "2021-05-17 00:00:00", 
        "price": 0.81, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8111793310, 
        "link": null, 
        "date": "2021-05-15 00:00:00", 
        "price": 1.62, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8111793268, 
        "link": null, 
        "date": "2021-05-13 00:00:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8111793300, 
        "link": null, 
        "date": "2021-05-12 00:00:00", 
        "price": 4.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8110648546, 
        "link": null, 
        "date": "2021-05-08 00:00:00", 
        "price": 1.07, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8110648544, 
        "link": null, 
        "date": "2021-05-08 00:00:00", 
        "price": 4.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8110648542, 
        "link": null, 
        "date": "2021-05-08 00:00:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8110776330, 
        "link": null, 
        "date": "2021-05-08 00:00:00", 
        "price": 51.92, 
        "grade_company": "KSA", 
        "grade_value": "9.5", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8110648585, 
        "link": null, 
        "date": "2021-05-07 00:00:00", 
        "price": 1.18, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8110461160, 
        "link": null, 
        "date": "2021-05-05 00:00:00", 
        "price": 0.4, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109968206, 
        "link": null, 
        "date": "2021-05-03 00:00:00", 
        "price": 4.89, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109968181, 
        "link": null, 
        "date": "2021-05-03 00:00:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109968229, 
        "link": null, 
        "date": "2021-05-02 00:00:00", 
        "price": 3.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109968221, 
        "link": null, 
        "date": "2021-05-02 00:00:00", 
        "price": 1.05, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109968215, 
        "link": null, 
        "date": "2021-05-02 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109968272, 
        "link": null, 
        "date": "2021-05-01 00:00:00", 
        "price": 3.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109968309, 
        "link": null, 
        "date": "2021-04-30 00:00:00", 
        "price": 0.81, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8110061873, 
        "link": null, 
        "date": "2021-04-29 00:00:00", 
        "price": 0.81, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8110061883, 
        "link": null, 
        "date": "2021-04-28 00:00:00", 
        "price": 3.19, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108100094, 
        "link": null, 
        "date": "2021-04-27 00:00:00", 
        "price": 4.03, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108100096, 
        "link": null, 
        "date": "2021-04-27 00:00:00", 
        "price": 4.03, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8107911114, 
        "link": null, 
        "date": "2021-04-27 00:00:00", 
        "price": 2.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109735357, 
        "link": null, 
        "date": "2021-04-26 00:00:00", 
        "price": 1.57, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108829633, 
        "link": null, 
        "date": "2021-04-25 00:00:00", 
        "price": 80.6, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109624133, 
        "link": null, 
        "date": "2021-04-25 00:00:00", 
        "price": 1.01, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8107616789, 
        "link": null, 
        "date": "2021-04-24 00:00:00", 
        "price": 1.41, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108663273, 
        "link": null, 
        "date": "2021-04-23 00:00:00", 
        "price": 2.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109617231, 
        "link": null, 
        "date": "2021-04-21 00:00:00", 
        "price": 0.69, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109299930, 
        "link": null, 
        "date": "2021-04-21 00:00:00", 
        "price": 181.35, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109394925, 
        "link": null, 
        "date": "2021-04-21 00:00:00", 
        "price": 120.9, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108177234, 
        "link": null, 
        "date": "2021-04-20 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108299651, 
        "link": null, 
        "date": "2021-04-18 00:00:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8107503273, 
        "link": null, 
        "date": "2021-04-18 00:00:00", 
        "price": 0.8, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109720490, 
        "link": null, 
        "date": "2021-04-18 00:00:00", 
        "price": 2.22, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8107794858, 
        "link": null, 
        "date": "2021-04-16 00:00:00", 
        "price": 2.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8107536018, 
        "link": null, 
        "date": "2021-04-16 00:00:00", 
        "price": 23.01, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108087646, 
        "link": null, 
        "date": "2021-04-14 00:00:00", 
        "price": 130.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108212034, 
        "link": null, 
        "date": "2021-04-13 00:00:00", 
        "price": 5.68, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108917189, 
        "link": null, 
        "date": "2021-04-08 00:00:00", 
        "price": 2.22, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109855588, 
        "link": null, 
        "date": "2021-04-07 00:00:00", 
        "price": 3.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109369490, 
        "link": null, 
        "date": "2021-04-04 00:00:00", 
        "price": 13.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109369505, 
        "link": null, 
        "date": "2021-04-04 00:00:00", 
        "price": 2.76, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109287783, 
        "link": null, 
        "date": "2021-04-04 00:00:00", 
        "price": 2.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8107776460, 
        "link": null, 
        "date": "2021-04-03 00:00:00", 
        "price": 3.43, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109322615, 
        "link": null, 
        "date": "2021-04-02 00:00:00", 
        "price": 15.0, 
        "grade_company": "SGC", 
        "grade_value": "92", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8107475777, 
        "link": null, 
        "date": "2021-04-01 00:00:00", 
        "price": 2.89, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109194467, 
        "link": null, 
        "date": "2021-03-31 00:00:00", 
        "price": 71.5, 
        "grade_company": "KSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109154204, 
        "link": null, 
        "date": "2021-03-31 00:00:00", 
        "price": 36.95, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109364847, 
        "link": null, 
        "date": "2021-03-31 00:00:00", 
        "price": 71.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109595954, 
        "link": null, 
        "date": "2021-03-27 00:00:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8107394524, 
        "link": null, 
        "date": "2021-03-26 00:00:00", 
        "price": 8.06, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108233514, 
        "link": null, 
        "date": "2021-03-26 00:00:00", 
        "price": 19.99, 
        "grade_company": "PSA", 
        "grade_value": "8", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109848840, 
        "link": null, 
        "date": "2021-03-26 00:00:00", 
        "price": 98.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8110290023, 
        "link": null, 
        "date": "2021-03-25 00:00:00", 
        "price": 2.22, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 180535085, 
        "link": null, 
        "date": "2021-03-22 07:23:00", 
        "price": 3.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109828228, 
        "link": null, 
        "date": "2021-03-22 00:00:00", 
        "price": 3.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 180295011, 
        "link": null, 
        "date": "2021-03-20 12:19:00", 
        "price": 79.0, 
        "grade_company": "KSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 180294899, 
        "link": null, 
        "date": "2021-03-20 06:54:00", 
        "price": 2.39, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109099987, 
        "link": null, 
        "date": "2021-03-20 00:00:00", 
        "price": 2.41, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108331781, 
        "link": null, 
        "date": "2021-03-20 00:00:00", 
        "price": 79.99, 
        "grade_company": "KSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 180294976, 
        "link": null, 
        "date": "2021-03-18 03:18:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108142802, 
        "link": null, 
        "date": "2021-03-18 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 180295000, 
        "link": null, 
        "date": "2021-03-17 06:51:00", 
        "price": 29.31, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108267187, 
        "link": null, 
        "date": "2021-03-17 00:00:00", 
        "price": 29.31, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 180093507, 
        "link": null, 
        "date": "2021-03-14 17:44:00", 
        "price": 3.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179647029, 
        "link": null, 
        "date": "2021-03-08 19:07:00", 
        "price": 1.34, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179647065, 
        "link": null, 
        "date": "2021-03-07 18:12:00", 
        "price": 9.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179647176, 
        "link": null, 
        "date": "2021-03-07 16:52:00", 
        "price": 21.25, 
        "grade_company": "KSA", 
        "grade_value": "8.5", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108841719, 
        "link": null, 
        "date": "2021-03-07 00:00:00", 
        "price": 9.68, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109760359, 
        "link": null, 
        "date": "2021-03-07 00:00:00", 
        "price": 18.52, 
        "grade_company": "KSA", 
        "grade_value": "8.5", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179647171, 
        "link": null, 
        "date": "2021-03-06 22:00:00", 
        "price": 98.0, 
        "grade_company": "KSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109161618, 
        "link": null, 
        "date": "2021-03-06 00:00:00", 
        "price": 95.0, 
        "grade_company": "KSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179483997, 
        "link": null, 
        "date": "2021-03-04 17:06:00", 
        "price": 89.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108216850, 
        "link": null, 
        "date": "2021-03-04 00:00:00", 
        "price": 89.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179484066, 
        "link": null, 
        "date": "2021-03-03 10:00:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179348573, 
        "link": null, 
        "date": "2021-03-01 14:54:00", 
        "price": 2.26, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179348579, 
        "link": null, 
        "date": "2021-03-01 11:13:00", 
        "price": 0.79, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179151062, 
        "link": null, 
        "date": "2021-02-28 19:55:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179151168, 
        "link": null, 
        "date": "2021-02-26 21:22:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179151170, 
        "link": null, 
        "date": "2021-02-26 20:49:00", 
        "price": 21.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8107655685, 
        "link": null, 
        "date": "2021-02-26 00:00:00", 
        "price": 21.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 179151196, 
        "link": null, 
        "date": "2021-02-25 06:50:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178944357, 
        "link": null, 
        "date": "2021-02-24 06:30:00", 
        "price": 0.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178944368, 
        "link": null, 
        "date": "2021-02-23 18:01:00", 
        "price": 203.52, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109471222, 
        "link": null, 
        "date": "2021-02-23 00:00:00", 
        "price": 203.52, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178944422, 
        "link": null, 
        "date": "2021-02-22 10:51:00", 
        "price": 1.8, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178815620, 
        "link": null, 
        "date": "2021-02-21 15:35:00", 
        "price": 2.22, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178815623, 
        "link": null, 
        "date": "2021-02-21 14:28:00", 
        "price": 0.79, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178656248, 
        "link": null, 
        "date": "2021-02-20 15:34:00", 
        "price": 2.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178815650, 
        "link": null, 
        "date": "2021-02-18 20:47:00", 
        "price": 2.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178434173, 
        "link": null, 
        "date": "2021-02-17 20:42:00", 
        "price": 86.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8109336783, 
        "link": null, 
        "date": "2021-02-17 00:00:00", 
        "price": 86.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178233750, 
        "link": null, 
        "date": "2021-02-13 09:51:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178233805, 
        "link": null, 
        "date": "2021-02-11 22:00:00", 
        "price": 1.57, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178233806, 
        "link": null, 
        "date": "2021-02-11 21:59:00", 
        "price": 1.57, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178233819, 
        "link": null, 
        "date": "2021-02-11 16:16:00", 
        "price": 19.68, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178233833, 
        "link": null, 
        "date": "2021-02-11 08:07:00", 
        "price": 3.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108830529, 
        "link": null, 
        "date": "2021-02-11 00:00:00", 
        "price": 20.15, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 178150045, 
        "link": null, 
        "date": "2021-02-09 18:22:00", 
        "price": 1.09, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177930233, 
        "link": null, 
        "date": "2021-02-07 18:30:00", 
        "price": 14.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177930266, 
        "link": null, 
        "date": "2021-02-06 20:16:00", 
        "price": 2.08, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177930308, 
        "link": null, 
        "date": "2021-02-05 22:16:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177792397, 
        "link": null, 
        "date": "2021-02-04 16:39:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177792479, 
        "link": null, 
        "date": "2021-02-03 12:43:00", 
        "price": 1.79, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177607478, 
        "link": null, 
        "date": "2021-02-01 12:44:00", 
        "price": 77.31, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108033967, 
        "link": null, 
        "date": "2021-02-01 00:00:00", 
        "price": 71.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177607446, 
        "link": null, 
        "date": "2021-01-31 11:34:00", 
        "price": 2.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177403498, 
        "link": null, 
        "date": "2021-01-30 18:23:00", 
        "price": 2.95, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177403515, 
        "link": null, 
        "date": "2021-01-30 10:52:00", 
        "price": 4.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8108545650, 
        "link": null, 
        "date": "2021-01-30 00:00:00", 
        "price": 4.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177403647, 
        "link": null, 
        "date": "2021-01-26 17:59:00", 
        "price": 3.91, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177207617, 
        "link": null, 
        "date": "2021-01-25 20:29:00", 
        "price": 1.18, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177207621, 
        "link": null, 
        "date": "2021-01-25 19:48:00", 
        "price": 1.09, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 177068848, 
        "link": null, 
        "date": "2021-01-23 12:03:00", 
        "price": 190.8, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176750746, 
        "link": null, 
        "date": "2021-01-18 01:57:00", 
        "price": 1.01, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176484507, 
        "link": null, 
        "date": "2021-01-12 21:35:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176349210, 
        "link": null, 
        "date": "2021-01-10 21:32:00", 
        "price": 65.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176349212, 
        "link": null, 
        "date": "2021-01-10 21:15:00", 
        "price": 109.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176349213, 
        "link": null, 
        "date": "2021-01-10 20:54:00", 
        "price": 199.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176349214, 
        "link": null, 
        "date": "2021-01-10 20:45:00", 
        "price": 0.39, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176349220, 
        "link": null, 
        "date": "2021-01-10 17:28:00", 
        "price": 0.08, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176349238, 
        "link": null, 
        "date": "2021-01-10 09:34:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176225831, 
        "link": null, 
        "date": "2021-01-09 16:08:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176225834, 
        "link": null, 
        "date": "2021-01-09 15:39:00", 
        "price": 197.01, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 176118969, 
        "link": null, 
        "date": "2021-01-06 21:43:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175748335, 
        "link": null, 
        "date": "2021-01-03 13:29:00", 
        "price": 89.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175748337, 
        "link": null, 
        "date": "2021-01-03 12:28:00", 
        "price": 0.78, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175748357, 
        "link": null, 
        "date": "2021-01-02 15:40:00", 
        "price": 149.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175748547, 
        "link": null, 
        "date": "2021-01-02 06:26:00", 
        "price": 10.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175748376, 
        "link": null, 
        "date": "2021-01-02 06:11:00", 
        "price": 115.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175748393, 
        "link": null, 
        "date": "2021-01-01 15:49:00", 
        "price": 0.78, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175748395, 
        "link": null, 
        "date": "2021-01-01 14:03:00", 
        "price": 68.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175748445, 
        "link": null, 
        "date": "2020-12-31 20:01:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175748456, 
        "link": null, 
        "date": "2020-12-31 13:47:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175634993, 
        "link": null, 
        "date": "2020-12-27 10:52:00", 
        "price": 4.95, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175536493, 
        "link": null, 
        "date": "2020-12-26 14:41:00", 
        "price": 1.16, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175536495, 
        "link": null, 
        "date": "2020-12-26 14:12:00", 
        "price": 1.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175536529, 
        "link": null, 
        "date": "2020-12-26 06:56:00", 
        "price": 0.78, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175536591, 
        "link": null, 
        "date": "2020-12-25 15:55:00", 
        "price": 16.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175536553, 
        "link": null, 
        "date": "2020-12-25 14:43:00", 
        "price": 0.77, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175413710, 
        "link": null, 
        "date": "2020-12-24 08:25:00", 
        "price": 1.56, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 175413712, 
        "link": null, 
        "date": "2020-12-24 08:22:00", 
        "price": 0.97, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 174827606, 
        "link": null, 
        "date": "2020-12-14 18:45:00", 
        "price": 24.97, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 174715383, 
        "link": null, 
        "date": "2020-12-11 19:13:00", 
        "price": 44.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 174498866, 
        "link": null, 
        "date": "2020-12-08 19:10:00", 
        "price": 25.63, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 174498939, 
        "link": null, 
        "date": "2020-12-07 12:54:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 174498941, 
        "link": null, 
        "date": "2020-12-07 11:52:00", 
        "price": 3.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 174498942, 
        "link": null, 
        "date": "2020-12-07 11:50:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 174498945, 
        "link": null, 
        "date": "2020-12-07 06:12:00", 
        "price": 26.7, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 174498967, 
        "link": null, 
        "date": "2020-12-06 12:05:00", 
        "price": 9.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 174375423, 
        "link": null, 
        "date": "2020-12-05 17:00:00", 
        "price": 8.2, 
        "grade_company": "PSA", 
        "grade_value": "7", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 174375474, 
        "link": null, 
        "date": "2020-12-03 21:40:00", 
        "price": 59.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173837719, 
        "link": null, 
        "date": "2020-11-25 20:00:00", 
        "price": 39.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173837725, 
        "link": null, 
        "date": "2020-11-25 19:35:00", 
        "price": 11.5, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173837723, 
        "link": null, 
        "date": "2020-11-25 19:35:00", 
        "price": 26.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173837722, 
        "link": null, 
        "date": "2020-11-25 19:35:00", 
        "price": 33.98, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173837724, 
        "link": null, 
        "date": "2020-11-25 19:35:00", 
        "price": 32.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173597870, 
        "link": null, 
        "date": "2020-11-22 04:01:00", 
        "price": 37.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173597914, 
        "link": null, 
        "date": "2020-11-21 09:13:00", 
        "price": 24.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173597899, 
        "link": null, 
        "date": "2020-11-20 14:40:00", 
        "price": 42.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173597910, 
        "link": null, 
        "date": "2020-11-19 18:00:00", 
        "price": 20.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173478619, 
        "link": null, 
        "date": "2020-11-19 07:30:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173478626, 
        "link": null, 
        "date": "2020-11-18 19:21:00", 
        "price": 53.65, 
        "grade_company": "BGS", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173478631, 
        "link": null, 
        "date": "2020-11-18 14:14:00", 
        "price": 14.13, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173478632, 
        "link": null, 
        "date": "2020-11-18 14:13:00", 
        "price": 6.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173251302, 
        "link": null, 
        "date": "2020-11-16 18:57:00", 
        "price": 0.28, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173251309, 
        "link": null, 
        "date": "2020-11-16 17:09:00", 
        "price": 1.71, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 173251369, 
        "link": null, 
        "date": "2020-11-16 15:37:00", 
        "price": 24.87, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 172936107, 
        "link": null, 
        "date": "2020-11-09 19:06:00", 
        "price": 37.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 172823784, 
        "link": null, 
        "date": "2020-11-07 06:31:00", 
        "price": 37.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 172823801, 
        "link": null, 
        "date": "2020-11-06 06:47:00", 
        "price": 29.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 172697775, 
        "link": null, 
        "date": "2020-11-03 15:06:00", 
        "price": 24.65, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 172368115, 
        "link": null, 
        "date": "2020-10-30 06:29:00", 
        "price": 42.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 172368117, 
        "link": null, 
        "date": "2020-10-29 21:53:00", 
        "price": 1.41, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 171509332, 
        "link": null, 
        "date": "2020-10-12 20:33:00", 
        "price": 1.44, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 171509333, 
        "link": null, 
        "date": "2020-10-12 20:33:00", 
        "price": 1.44, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 171509335, 
        "link": null, 
        "date": "2020-10-12 20:32:00", 
        "price": 1.44, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 171509334, 
        "link": null, 
        "date": "2020-10-12 20:32:00", 
        "price": 1.44, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 171509338, 
        "link": null, 
        "date": "2020-10-12 20:31:00", 
        "price": 1.44, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 171509337, 
        "link": null, 
        "date": "2020-10-12 20:31:00", 
        "price": 1.44, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 171509336, 
        "link": null, 
        "date": "2020-10-12 20:31:00", 
        "price": 1.44, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 171292783, 
        "link": null, 
        "date": "2020-10-08 20:01:00", 
        "price": 42.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 171118117, 
        "link": null, 
        "date": "2020-10-05 08:34:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 171118118, 
        "link": null, 
        "date": "2020-10-05 08:33:00", 
        "price": 1.39, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 170966134, 
        "link": null, 
        "date": "2020-10-03 18:53:00", 
        "price": 0.75, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 170828907, 
        "link": null, 
        "date": "2020-09-30 20:56:00", 
        "price": 30.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 170697930, 
        "link": null, 
        "date": "2020-09-27 18:49:00", 
        "price": 29.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 170591653, 
        "link": null, 
        "date": "2020-09-25 07:45:00", 
        "price": 42.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 170528820, 
        "link": null, 
        "date": "2020-09-24 16:08:00", 
        "price": 0.75, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 170422762, 
        "link": null, 
        "date": "2020-09-22 13:19:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 170298712, 
        "link": null, 
        "date": "2020-09-21 13:32:00", 
        "price": 2.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 170298722, 
        "link": null, 
        "date": "2020-09-20 19:58:00", 
        "price": 2.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 169909398, 
        "link": null, 
        "date": "2020-09-14 19:48:00", 
        "price": 51.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 169632752, 
        "link": null, 
        "date": "2020-09-09 19:27:00", 
        "price": 4.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 169378746, 
        "link": null, 
        "date": "2020-09-04 09:05:00", 
        "price": 28.45, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 169286095, 
        "link": null, 
        "date": "2020-09-02 14:38:00", 
        "price": 10.0, 
        "grade_company": "PSA", 
        "grade_value": "8", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 168857846, 
        "link": null, 
        "date": "2020-08-25 19:13:00", 
        "price": 17.51, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 168774009, 
        "link": null, 
        "date": "2020-08-25 19:13:00", 
        "price": 18.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 168857847, 
        "link": null, 
        "date": "2020-08-25 19:06:00", 
        "price": 17.19, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 168857849, 
        "link": null, 
        "date": "2020-08-25 19:00:00", 
        "price": 21.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 168774014, 
        "link": null, 
        "date": "2020-08-25 09:44:00", 
        "price": 44.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 168175444, 
        "link": null, 
        "date": "2020-08-16 11:42:00", 
        "price": 42.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 168175450, 
        "link": null, 
        "date": "2020-08-16 04:45:00", 
        "price": 2.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 167981911, 
        "link": null, 
        "date": "2020-08-14 09:43:00", 
        "price": 44.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 167807334, 
        "link": null, 
        "date": "2020-08-11 19:32:00", 
        "price": 44.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 167807335, 
        "link": null, 
        "date": "2020-08-11 19:10:00", 
        "price": 20.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 167807336, 
        "link": null, 
        "date": "2020-08-11 19:02:00", 
        "price": 21.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 166883033, 
        "link": null, 
        "date": "2020-07-27 19:17:00", 
        "price": 23.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 166883034, 
        "link": null, 
        "date": "2020-07-27 19:16:00", 
        "price": 20.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 166716101, 
        "link": null, 
        "date": "2020-07-23 19:07:00", 
        "price": 24.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 166378854, 
        "link": null, 
        "date": "2020-07-19 11:01:00", 
        "price": 39.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 166378855, 
        "link": null, 
        "date": "2020-07-19 10:58:00", 
        "price": 57.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 166282734, 
        "link": null, 
        "date": "2020-07-17 11:12:00", 
        "price": 23.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 166078167, 
        "link": null, 
        "date": "2020-07-14 19:12:00", 
        "price": 19.69, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 166078199, 
        "link": null, 
        "date": "2020-07-12 19:25:00", 
        "price": 27.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 165719643, 
        "link": null, 
        "date": "2020-07-06 19:47:00", 
        "price": 21.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "9d200ebe-51d5-5c74-b298-20bfb868b576"
      }, 
      {
        "cardID": 9602937, 
        "id": 165719650, 
        "link": null, 
        "date": "2020-07-06 11:03:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "0c79e37b-714a-52fb-95b3-c066e03f101c"
      }, 
      {
        "cardID": 9602937, 
        "id": 165214053, 
        "link": null, 
        "date": "2020-06-29 19:07:00", 
        "price": 38.19, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "d284a7b2-8e6c-5797-8010-9196e88ebb56"
      }, 
      {
        "cardID": 9602937, 
        "id": 164928974, 
        "link": null, 
        "date": "2020-06-24 20:12:00", 
        "price": 1.99, 
        "grade_company": "KSA", 
        "grade_value": "9", 
        "img": "e912d317-6874-5c30-a202-153e9b9fbec6"
      }, 
      {
        "cardID": 9602937, 
        "id": 164795935, 
        "link": null, 
        "date": "2020-06-22 19:00:00", 
        "price": 17.49, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "993f40c9-184b-57e4-8ed0-f411e24ea8f0"
      }, 
      {
        "cardID": 9602937, 
        "id": 164566671, 
        "link": null, 
        "date": "2020-06-17 19:48:00", 
        "price": 31.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "642e5c45-b4c6-52ee-a4f3-e0d56eb4c5db"
      }, 
      {
        "cardID": 9602937, 
        "id": 164396391, 
        "link": null, 
        "date": "2020-06-14 20:33:00", 
        "price": 39.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "5eba579d-beed-5e75-83e5-644d7deeeab8"
      }, 
      {
        "cardID": 9602937, 
        "id": 163939308, 
        "link": null, 
        "date": "2020-06-07 11:03:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f5c87c94-0b8c-5ecc-8503-493fabb73740"
      }, 
      {
        "cardID": 9602937, 
        "id": 163939313, 
        "link": null, 
        "date": "2020-06-06 18:59:00", 
        "price": 0.74, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "0bb3d2ed-294c-5b00-80ab-46728296ce29"
      }, 
      {
        "cardID": 9602937, 
        "id": 163756754, 
        "link": null, 
        "date": "2020-06-05 20:15:00", 
        "price": 9.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "e10085f0-6cc2-505b-a0b7-c1c4ed77e423"
      }, 
      {
        "cardID": 9602937, 
        "id": 163378842, 
        "link": null, 
        "date": "2020-05-30 14:22:00", 
        "price": 39.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "bd00cd34-476a-5a4e-b8a1-b511a5f76259"
      }, 
      {
        "cardID": 9602937, 
        "id": 163378888, 
        "link": null, 
        "date": "2020-05-29 06:12:00", 
        "price": 0.72, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "03401219-858c-5ddb-a4af-8c91a88167b6"
      }, 
      {
        "cardID": 9602937, 
        "id": 162978330, 
        "link": null, 
        "date": "2020-05-23 06:17:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "edb67e66-4eb8-53bd-9ca7-a86a54a47662"
      }, 
      {
        "cardID": 9602937, 
        "id": 162327621, 
        "link": null, 
        "date": "2020-05-14 07:59:00", 
        "price": 24.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "714a4b97-adb3-5ce1-9079-bc02a9ccdd0f"
      }, 
      {
        "cardID": 9602937, 
        "id": 162327620, 
        "link": null, 
        "date": "2020-05-14 07:59:00", 
        "price": 34.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "027c5122-bb74-54f9-8988-5ac44e42530d"
      }, 
      {
        "cardID": 9602937, 
        "id": 162206467, 
        "link": null, 
        "date": "2020-05-12 15:05:00", 
        "price": 9.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "359b7fe3-33e7-5bdd-921a-44e2febf0e2b"
      }, 
      {
        "cardID": 9602937, 
        "id": 162206468, 
        "link": null, 
        "date": "2020-05-12 15:01:00", 
        "price": 20.47, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "e60bb129-1f6e-54b5-8d96-ba92e73bef21"
      }, 
      {
        "cardID": 9602937, 
        "id": 162083050, 
        "link": null, 
        "date": "2020-05-10 18:30:00", 
        "price": 18.98, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "4ea7a268-16d2-5d1c-b405-803c6b9117f2"
      }, 
      {
        "cardID": 9602937, 
        "id": 162083051, 
        "link": null, 
        "date": "2020-05-10 18:20:00", 
        "price": 17.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "bfc049fe-a1d6-5a0f-9623-a6f5cb167079"
      }, 
      {
        "cardID": 9602937, 
        "id": 162083052, 
        "link": null, 
        "date": "2020-05-10 18:10:00", 
        "price": 18.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "a1e2c0b0-6961-5292-aa7a-00440d59354d"
      }, 
      {
        "cardID": 9602937, 
        "id": 162083053, 
        "link": null, 
        "date": "2020-05-10 18:00:00", 
        "price": 15.51, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "eff83a99-da35-5a7c-b539-e462c7d03b73"
      }, 
      {
        "cardID": 9602937, 
        "id": 162083070, 
        "link": null, 
        "date": "2020-05-09 18:59:00", 
        "price": 23.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "d1fcb7bd-2537-5534-a327-c7f94ea1f040"
      }, 
      {
        "cardID": 9602937, 
        "id": 161986522, 
        "link": null, 
        "date": "2020-05-08 14:45:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "89838d2e-acab-5e1c-8a57-c6f95b115973"
      }, 
      {
        "cardID": 9602937, 
        "id": 161866358, 
        "link": null, 
        "date": "2020-05-07 14:44:00", 
        "price": 19.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "cc62a010-fff0-5cf9-8cae-5a7eb68ac6f0"
      }, 
      {
        "cardID": 9602937, 
        "id": 161548173, 
        "link": null, 
        "date": "2020-05-02 23:22:00", 
        "price": 6.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "8b4f15c8-876b-55af-9edf-cad011646f5d"
      }, 
      {
        "cardID": 9602937, 
        "id": 161548216, 
        "link": null, 
        "date": "2020-05-01 13:47:00", 
        "price": 0.18, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a99ce915-034b-5d29-92e7-7a750a1e732c"
      }, 
      {
        "cardID": 9602937, 
        "id": 161053631, 
        "link": null, 
        "date": "2020-04-25 00:48:00", 
        "price": 1.41, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "24e82c6b-bb4a-512c-b783-9d5ea3510c9d"
      }, 
      {
        "cardID": 9602937, 
        "id": 160821248, 
        "link": null, 
        "date": "2020-04-22 18:10:00", 
        "price": 16.01, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "32876f02-e0ea-58d0-80b7-48727a7b80c5"
      }, 
      {
        "cardID": 9602937, 
        "id": 160821254, 
        "link": null, 
        "date": "2020-04-22 11:59:00", 
        "price": 17.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "c60d3397-34f1-583c-b39e-5c57d10dd4c6"
      }, 
      {
        "cardID": 9602937, 
        "id": 160524286, 
        "link": null, 
        "date": "2020-04-16 11:51:00", 
        "price": 1.42, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "127de931-9cc1-5711-befc-7f75a97d1523"
      }, 
      {
        "cardID": 9602937, 
        "id": 160524289, 
        "link": null, 
        "date": "2020-04-16 10:49:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "d44567ec-108b-553a-a2be-ad17bf833953"
      }, 
      {
        "cardID": 9602937, 
        "id": 159847170, 
        "link": null, 
        "date": "2020-04-03 16:56:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "50ebc495-8a0f-54b1-8341-fdfe8ef077fd"
      }, 
      {
        "cardID": 9602937, 
        "id": 159687880, 
        "link": null, 
        "date": "2020-03-30 07:25:00", 
        "price": 0.35, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "434c3c64-b544-5368-805f-fca82d88f568"
      }, 
      {
        "cardID": 9602937, 
        "id": 159304709, 
        "link": null, 
        "date": "2020-03-22 17:12:00", 
        "price": 0.55, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "66cd49f7-739a-5171-a9e7-ff240d6571b2"
      }, 
      {
        "cardID": 9602937, 
        "id": 159202715, 
        "link": null, 
        "date": "2020-03-17 09:22:00", 
        "price": 5.37, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "07002924-d186-5ea4-9040-247732844293"
      }, 
      {
        "cardID": 9602937, 
        "id": 158876186, 
        "link": null, 
        "date": "2020-03-11 13:32:00", 
        "price": 2.18, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "c575d794-5c95-5c16-92b8-f7d58ff09860"
      }, 
      {
        "cardID": 9602937, 
        "id": 158484341, 
        "link": null, 
        "date": "2020-02-28 18:15:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9a9476ff-e7f5-5abe-8ca5-be2a23bb7382"
      }, 
      {
        "cardID": 9602937, 
        "id": 158207421, 
        "link": null, 
        "date": "2020-02-23 19:07:00", 
        "price": 0.8, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "690015ca-77f8-5612-a052-7a469593ad17"
      }, 
      {
        "cardID": 9602937, 
        "id": 157995795, 
        "link": null, 
        "date": "2020-02-20 16:11:00", 
        "price": 0.6, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "0a0b4897-a253-5ac7-b568-58ea0f5f8f60"
      }, 
      {
        "cardID": 9602937, 
        "id": 157544441, 
        "link": null, 
        "date": "2020-02-09 07:31:00", 
        "price": 0.74, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9206da73-c6c7-53db-aa03-c54754f5fe0f"
      }, 
      {
        "cardID": 9602937, 
        "id": 157544452, 
        "link": null, 
        "date": "2020-02-08 09:46:00", 
        "price": 3.99, 
        "grade_company": "PSA", 
        "grade_value": "8", 
        "img": "2873a3f0-a92b-57bd-9f50-bd87b6eed139"
      }, 
      {
        "cardID": 9602937, 
        "id": 157544482, 
        "link": null, 
        "date": "2020-02-05 17:04:00", 
        "price": 0.19, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "8f5861e6-eb75-58af-aa26-e9d30700e65a"
      }, 
      {
        "cardID": 9602937, 
        "id": 157361755, 
        "link": null, 
        "date": "2020-02-03 18:01:00", 
        "price": 11.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "a6d05896-5d34-589e-9fc5-ce7ca9afda06"
      }, 
      {
        "cardID": 9602937, 
        "id": 156706168, 
        "link": null, 
        "date": "2020-01-17 19:04:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "080801dc-4882-5b2d-b87a-ae862a1e6b9e"
      }, 
      {
        "cardID": 9602937, 
        "id": 156596916, 
        "link": null, 
        "date": "2020-01-15 09:06:00", 
        "price": 19.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "88765762-a8ed-574c-9492-e9714e202156"
      }, 
      {
        "cardID": 9602937, 
        "id": 156417026, 
        "link": null, 
        "date": "2020-01-12 03:52:00", 
        "price": 19.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "525efab3-2571-52f9-8cc9-8e921ffc350d"
      }, 
      {
        "cardID": 9602937, 
        "id": 156417077, 
        "link": null, 
        "date": "2020-01-10 13:22:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "1ce283e0-229a-5285-9e66-dc5c2608301a"
      }, 
      {
        "cardID": 9602937, 
        "id": 156030087, 
        "link": null, 
        "date": "2019-12-29 13:25:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "12e9561f-6c90-5c10-aa76-b1ed1d5c852b"
      }, 
      {
        "cardID": 9602937, 
        "id": 155730917, 
        "link": null, 
        "date": "2019-12-22 17:11:00", 
        "price": 1.34, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "c79a2d4b-6867-54cb-8786-94e3d6add77a"
      }, 
      {
        "cardID": 9602937, 
        "id": 155141087, 
        "link": null, 
        "date": "2019-12-08 06:54:00", 
        "price": 9.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "72f11a05-113b-5fe0-b605-f2a231261180"
      }, 
      {
        "cardID": 9602937, 
        "id": 154386541, 
        "link": null, 
        "date": "2019-11-15 18:30:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a58aac6f-34a6-5608-91f8-bbf151edb475"
      }, 
      {
        "cardID": 9602937, 
        "id": 154269272, 
        "link": null, 
        "date": "2019-11-13 18:25:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "becb1799-3be4-5785-86a0-d43c16f21ed9"
      }, 
      {
        "cardID": 9602937, 
        "id": 153682393, 
        "link": null, 
        "date": "2019-10-25 15:47:00", 
        "price": 0.52, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "15a835ce-c65d-58a2-ac4b-08fda22fdb99"
      }, 
      {
        "cardID": 9602937, 
        "id": 153534220, 
        "link": null, 
        "date": "2019-10-22 18:55:00", 
        "price": 11.76, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "13e9b871-ee7d-5ffd-b7dd-70b3acbebbf6"
      }, 
      {
        "cardID": 9602937, 
        "id": 153176695, 
        "link": null, 
        "date": "2019-10-10 05:57:00", 
        "price": 0.75, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 152668538, 
        "link": null, 
        "date": "2019-09-27 05:23:00", 
        "price": 0.75, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "ae42801f-b0e9-5345-8d7e-3268da8210fa"
      }, 
      {
        "cardID": 9602937, 
        "id": 152475954, 
        "link": null, 
        "date": "2019-09-20 07:04:00", 
        "price": 1.88, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "eb75288c-e30c-563d-b4bd-8bfbe52e2d22"
      }, 
      {
        "cardID": 9602937, 
        "id": 152312712, 
        "link": null, 
        "date": "2019-09-13 13:49:00", 
        "price": 10.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "03a22abe-c726-5e3b-ab79-1a9a86bfc1c2"
      }, 
      {
        "cardID": 9602937, 
        "id": 151692208, 
        "link": null, 
        "date": "2019-08-29 02:46:00", 
        "price": 19.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "88c26bce-b91d-5e03-8a2b-7fa81a9bbe2c"
      }, 
      {
        "cardID": 9602937, 
        "id": 151488375, 
        "link": null, 
        "date": "2019-08-21 07:33:00", 
        "price": 1.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "c06a3c66-75b0-544a-a94d-b8e75893b313"
      }, 
      {
        "cardID": 9602937, 
        "id": 151488379, 
        "link": null, 
        "date": "2019-08-20 09:59:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "da89e9ac-ee28-52fd-aaf6-af265982faa3"
      }, 
      {
        "cardID": 9602937, 
        "id": 151263959, 
        "link": null, 
        "date": "2019-08-10 11:05:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "449242da-ce82-5a9e-8dce-bfc6a42a1a64"
      }, 
      {
        "cardID": 9602937, 
        "id": 151118624, 
        "link": null, 
        "date": "2019-08-07 13:01:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "55bd5de5-4016-5cc9-8304-8e6ecfe2a682"
      }, 
      {
        "cardID": 9602937, 
        "id": 151118630, 
        "link": null, 
        "date": "2019-08-06 10:45:00", 
        "price": 24.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "175ab6c6-0803-5c60-a929-c056975c550b"
      }, 
      {
        "cardID": 9602937, 
        "id": 150460102, 
        "link": null, 
        "date": "2019-07-16 21:12:00", 
        "price": 0.76, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "dfb66db8-bd93-5372-b684-85ff61fa3390"
      }, 
      {
        "cardID": 9602937, 
        "id": 150268209, 
        "link": null, 
        "date": "2019-07-12 06:48:00", 
        "price": 17.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "22acf287-14ab-5f99-b1a7-4f4ad7d08136"
      }, 
      {
        "cardID": 9602937, 
        "id": 150268210, 
        "link": null, 
        "date": "2019-07-12 06:48:00", 
        "price": 24.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "0bf9daca-1445-5a9c-a974-0985028b8736"
      }, 
      {
        "cardID": 9602937, 
        "id": 149890318, 
        "link": null, 
        "date": "2019-06-29 12:27:00", 
        "price": 24.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "b08ce626-58cc-589a-b565-8be9fd776dcc"
      }, 
      {
        "cardID": 9602937, 
        "id": 149647911, 
        "link": null, 
        "date": "2019-06-17 18:02:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "30b26b81-4e56-5084-99a4-42cbc5ada3db"
      }, 
      {
        "cardID": 9602937, 
        "id": 149479371, 
        "link": null, 
        "date": "2019-06-11 14:50:00", 
        "price": 13.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "52cd95bc-2cdf-55d4-8f5d-7c50b3a62144"
      }, 
      {
        "cardID": 9602937, 
        "id": 148970344, 
        "link": null, 
        "date": "2019-06-03 07:32:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "39af42fd-80ee-52fc-9e2c-6b7898864946"
      }, 
      {
        "cardID": 9602937, 
        "id": 148970428, 
        "link": null, 
        "date": "2019-05-23 19:09:00", 
        "price": 6.1, 
        "grade_company": "SGC", 
        "grade_value": "98", 
        "img": "704bba4f-82dd-5751-9098-959bc511c9b1"
      }, 
      {
        "cardID": 9602937, 
        "id": 148970427, 
        "link": null, 
        "date": "2019-05-23 19:09:00", 
        "price": 5.65, 
        "grade_company": "SGC", 
        "grade_value": "98", 
        "img": "fb2e951e-b49f-565d-ad4b-30f67629fba9"
      }, 
      {
        "cardID": 9602937, 
        "id": 148052911, 
        "link": null, 
        "date": "2019-04-24 16:38:00", 
        "price": 49.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "a4cfeba3-c110-5633-81ad-7001578bc195"
      }, 
      {
        "cardID": 9602937, 
        "id": 147852354, 
        "link": null, 
        "date": "2019-04-19 20:11:00", 
        "price": 13.94, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "c56f440c-e6cc-5858-a2f3-f028956c90f0"
      }, 
      {
        "cardID": 9602937, 
        "id": 147852364, 
        "link": null, 
        "date": "2019-04-18 08:01:00", 
        "price": 15.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "2f5e7ded-60b8-54f4-8287-5af2ea3747b1"
      }, 
      {
        "cardID": 9602937, 
        "id": 146908864, 
        "link": null, 
        "date": "2019-03-24 19:26:00", 
        "price": 21.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "84252103-ca10-5470-891d-15895a93267f"
      }, 
      {
        "cardID": 9602937, 
        "id": 146908861, 
        "link": null, 
        "date": "2019-03-24 19:25:00", 
        "price": 31.55, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "e994a558-9cdf-56ed-98c5-c9767716bee0"
      }, 
      {
        "cardID": 9602937, 
        "id": 147743147, 
        "link": null, 
        "date": "2019-03-23 17:59:00", 
        "price": 0.75, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9e01d65f-e204-5778-977f-cf8364c0a92c"
      }, 
      {
        "cardID": 9602937, 
        "id": 146188496, 
        "link": null, 
        "date": "2019-03-05 12:27:00", 
        "price": 1.38, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b8ecf975-4b96-5adf-894f-e6f79dafb042"
      }, 
      {
        "cardID": 9602937, 
        "id": 146188520, 
        "link": null, 
        "date": "2019-03-02 08:16:00", 
        "price": 2.3, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "4f38fe6b-4ae0-5ef5-b604-1a300ea9e716"
      }, 
      {
        "cardID": 9602937, 
        "id": 145866446, 
        "link": null, 
        "date": "2019-02-21 20:29:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "e7f5859c-4838-57ee-8cd2-55767b848b30"
      }, 
      {
        "cardID": 9602937, 
        "id": 145603413, 
        "link": null, 
        "date": "2019-02-17 13:26:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "bfebd53c-61cd-5aa0-a9ee-a47dcc35d0a3"
      }, 
      {
        "cardID": 9602937, 
        "id": 145603421, 
        "link": null, 
        "date": "2019-02-16 10:06:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "e8768307-e33c-56e5-a0f1-aa42850986b3"
      }, 
      {
        "cardID": 9602937, 
        "id": 145448730, 
        "link": null, 
        "date": "2019-02-11 12:26:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "c430ee2e-728d-5a84-93f5-6068101807f4"
      }, 
      {
        "cardID": 9602937, 
        "id": 145103621, 
        "link": null, 
        "date": "2019-02-01 19:11:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "fab526fd-6e59-5d92-af42-6f6513467793"
      }, 
      {
        "cardID": 9602937, 
        "id": 145103630, 
        "link": null, 
        "date": "2019-01-31 21:11:00", 
        "price": 28.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "7fba15db-7107-50de-a73b-ad5980f2df59"
      }, 
      {
        "cardID": 9602937, 
        "id": 144981722, 
        "link": null, 
        "date": "2019-01-28 07:27:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "670d4a4e-ea40-56c2-8eb3-2426b9bcff39"
      }, 
      {
        "cardID": 9602937, 
        "id": 144767148, 
        "link": null, 
        "date": "2019-01-23 17:34:00", 
        "price": 5.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a33086f3-2899-57aa-a8a8-93579a4f5122"
      }, 
      {
        "cardID": 9602937, 
        "id": 143955383, 
        "link": null, 
        "date": "2018-12-29 19:32:00", 
        "price": 13.38, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "a4c6ed3c-d131-5bac-af46-fee248c41693"
      }, 
      {
        "cardID": 9602937, 
        "id": 143712018, 
        "link": null, 
        "date": "2018-12-20 08:47:00", 
        "price": 7.95, 
        "grade_company": "BGS", 
        "grade_value": "9", 
        "img": "0598c31e-0736-5fdc-866c-917a39cacef2"
      }, 
      {
        "cardID": 9602937, 
        "id": 142651284, 
        "link": null, 
        "date": "2018-11-19 11:21:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9faaff2d-b42b-5eed-9efd-4aec1f7deb8f"
      }, 
      {
        "cardID": 9602937, 
        "id": 142343175, 
        "link": null, 
        "date": "2018-11-07 10:15:00", 
        "price": 25.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "a255d248-b2d4-5d00-8559-35dd6491b626"
      }, 
      {
        "cardID": 9602937, 
        "id": 141397867, 
        "link": null, 
        "date": "2018-10-11 04:25:00", 
        "price": 0.4, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "11a49322-5d90-564f-b06c-b46ed4a903db"
      }, 
      {
        "cardID": 9602937, 
        "id": 141157367, 
        "link": null, 
        "date": "2018-10-03 12:47:00", 
        "price": 13.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "e7f7a2d0-c349-5bce-8de1-94cf23726e5e"
      }, 
      {
        "cardID": 9602937, 
        "id": 140962269, 
        "link": null, 
        "date": "2018-09-29 21:06:00", 
        "price": 1.51, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "7a0f5c68-879b-520c-9385-82ac52f486a5"
      }, 
      {
        "cardID": 9602937, 
        "id": 140710634, 
        "link": null, 
        "date": "2018-09-17 16:09:00", 
        "price": 46.14, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "648afeaf-4820-5f69-977b-051a6c2497fe"
      }, 
      {
        "cardID": 9602937, 
        "id": 139336073, 
        "link": null, 
        "date": "2018-08-09 10:36:00", 
        "price": 17.19, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "e5d61d67-7411-5af5-a193-a54f602a1c79"
      }, 
      {
        "cardID": 9602937, 
        "id": 139024435, 
        "link": null, 
        "date": "2018-07-30 15:22:00", 
        "price": 2.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9e8d5d97-38d1-5733-93ad-4870e6e839bb"
      }, 
      {
        "cardID": 9602937, 
        "id": 138640111, 
        "link": null, 
        "date": "2018-07-19 08:51:00", 
        "price": 0.57, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "cdabeef1-6983-5f3b-b658-beea28f1a91d"
      }, 
      {
        "cardID": 9602937, 
        "id": 138149196, 
        "link": null, 
        "date": "2018-07-09 21:14:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "63598000-7128-568e-b620-295fd5e3ab04"
      }, 
      {
        "cardID": 9602937, 
        "id": 137958660, 
        "link": null, 
        "date": "2018-06-29 08:26:00", 
        "price": 2.6, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "202c6eb3-6156-5291-9729-689eed93d709"
      }, 
      {
        "cardID": 9602937, 
        "id": 137958678, 
        "link": null, 
        "date": "2018-06-27 04:24:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "806432ac-bf33-5fc5-ae1d-510effb5ff49"
      }, 
      {
        "cardID": 9602937, 
        "id": 137723365, 
        "link": null, 
        "date": "2018-06-22 18:21:00", 
        "price": 13.27, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "fb84adb4-be12-5d29-ba28-e44118debea0"
      }, 
      {
        "cardID": 9602937, 
        "id": 137473676, 
        "link": null, 
        "date": "2018-06-11 15:50:00", 
        "price": 1.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "91bf89ba-19a1-53bc-9c18-75f444a21824"
      }, 
      {
        "cardID": 9602937, 
        "id": 137723401, 
        "link": null, 
        "date": "2018-06-08 17:15:00", 
        "price": 14.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "3f96bd43-19fb-5109-bbed-45b0ee8e4304"
      }, 
      {
        "cardID": 9602937, 
        "id": 137818458, 
        "link": null, 
        "date": "2018-06-02 16:44:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "cf681453-474e-52f7-acc8-411f0a01b08f"
      }, 
      {
        "cardID": 9602937, 
        "id": 136988657, 
        "link": null, 
        "date": "2018-05-27 21:30:00", 
        "price": 54.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 137818459, 
        "link": null, 
        "date": "2018-05-25 18:31:00", 
        "price": 6.26, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 136871327, 
        "link": null, 
        "date": "2018-05-25 16:52:00", 
        "price": 54.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 136632349, 
        "link": null, 
        "date": "2018-05-20 17:00:00", 
        "price": 2.32, 
        "grade_company": "PSA", 
        "grade_value": "8", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 137723403, 
        "link": null, 
        "date": "2018-05-19 14:35:00", 
        "price": 43.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 136632322, 
        "link": null, 
        "date": "2018-05-18 19:14:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 137723406, 
        "link": null, 
        "date": "2018-05-18 18:44:00", 
        "price": 25.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 137723408, 
        "link": null, 
        "date": "2018-05-11 16:34:00", 
        "price": 15.51, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 136414307, 
        "link": null, 
        "date": "2018-05-09 18:25:00", 
        "price": 1.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 136213721, 
        "link": null, 
        "date": "2018-05-05 19:56:00", 
        "price": 1.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 135966109, 
        "link": null, 
        "date": "2018-04-27 07:01:00", 
        "price": 1.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "55a230e7-f071-5fcf-8ddc-a5a2c9d97f84"
      }, 
      {
        "cardID": 9602937, 
        "id": 137723409, 
        "link": null, 
        "date": "2018-04-26 02:29:00", 
        "price": 15.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 137818460, 
        "link": null, 
        "date": "2018-04-23 21:17:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 137723410, 
        "link": null, 
        "date": "2018-04-19 05:08:00", 
        "price": 13.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 135055118, 
        "link": null, 
        "date": "2018-03-30 06:57:00", 
        "price": 45.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "f700fdde-9e80-5477-b2dd-209c51cb02e2"
      }, 
      {
        "cardID": 9602937, 
        "id": 134553179, 
        "link": null, 
        "date": "2018-03-13 22:59:00", 
        "price": 13.18, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "b0f4c2d4-9be6-5b67-af11-fda14c5680f2"
      }, 
      {
        "cardID": 9602937, 
        "id": 133328589, 
        "link": null, 
        "date": "2018-02-08 03:10:00", 
        "price": 9.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "5c381f7c-5784-515b-88c9-71ccbab7aba8"
      }, 
      {
        "cardID": 9602937, 
        "id": 133328588, 
        "link": null, 
        "date": "2018-02-08 03:10:00", 
        "price": 9.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "948fe7b9-8811-5c01-9b85-2ffdebe16b3d"
      }, 
      {
        "cardID": 9602937, 
        "id": 132926296, 
        "link": null, 
        "date": "2018-01-24 18:22:00", 
        "price": 30.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "8d6efe05-0507-56f5-a958-89ac4bdadc95"
      }, 
      {
        "cardID": 9602937, 
        "id": 132826335, 
        "link": null, 
        "date": "2018-01-23 15:23:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "2fa32646-6cf4-54d0-ba9e-52f70be76de2"
      }, 
      {
        "cardID": 9602937, 
        "id": 132360409, 
        "link": null, 
        "date": "2018-01-09 17:16:00", 
        "price": 2.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "7b3c357e-863a-5749-8957-cb28d3433bca"
      }, 
      {
        "cardID": 9602937, 
        "id": 132155106, 
        "link": null, 
        "date": "2018-01-04 03:06:00", 
        "price": 30.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "c75ea674-72f0-52f5-86ff-128ff4989321"
      }, 
      {
        "cardID": 9602937, 
        "id": 132155108, 
        "link": null, 
        "date": "2018-01-02 08:55:00", 
        "price": 13.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a381535c-cccd-5257-ab31-8a080b1e5831"
      }, 
      {
        "cardID": 9602937, 
        "id": 131981440, 
        "link": null, 
        "date": "2017-12-31 14:17:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "3ca8216c-1907-5e2e-80b1-f6120cacc404"
      }, 
      {
        "cardID": 9602937, 
        "id": 131981461, 
        "link": null, 
        "date": "2017-12-29 12:54:00", 
        "price": 80.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "9d6c005e-0f6e-579e-86dd-be48bab98cab"
      }, 
      {
        "cardID": 9602937, 
        "id": 131868849, 
        "link": null, 
        "date": "2017-12-26 11:36:00", 
        "price": 50.5, 
        "grade_company": "BGS", 
        "grade_value": "9.5", 
        "img": "dae4d6d1-5980-5427-98cd-a5044d3d4345"
      }, 
      {
        "cardID": 9602937, 
        "id": 132926307, 
        "link": null, 
        "date": "2017-12-23 16:23:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "fc8b0516-976a-5a2f-9c0c-739788e9c2fb"
      }, 
      {
        "cardID": 9602937, 
        "id": 131868847, 
        "link": null, 
        "date": "2017-12-23 16:22:00", 
        "price": 1.79, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "6dae489e-3ba8-534f-88fb-e20b0555ddbf"
      }, 
      {
        "cardID": 9602937, 
        "id": 131054163, 
        "link": null, 
        "date": "2017-11-30 17:45:00", 
        "price": 1.57, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "93732929-9484-5d3b-b7cd-9add14220094"
      }, 
      {
        "cardID": 9602937, 
        "id": 130797928, 
        "link": null, 
        "date": "2017-11-27 09:06:00", 
        "price": 2.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a3fe7fc3-d6e6-5f3d-a374-02fb53f20f86"
      }, 
      {
        "cardID": 9602937, 
        "id": 131826403, 
        "link": null, 
        "date": "2017-11-13 15:23:00", 
        "price": 51.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "a399d713-b596-550f-8e37-982f91d30566"
      }, 
      {
        "cardID": 9602937, 
        "id": 129806345, 
        "link": null, 
        "date": "2017-10-29 18:32:00", 
        "price": 9.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "5f027892-1225-5d0c-8066-657edca479fb"
      }, 
      {
        "cardID": 9602937, 
        "id": 129806366, 
        "link": null, 
        "date": "2017-10-27 11:18:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9fe3033f-7a95-570e-8fe2-94ee9d220470"
      }, 
      {
        "cardID": 9602937, 
        "id": 129005669, 
        "link": null, 
        "date": "2017-10-21 12:09:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 128804082, 
        "link": null, 
        "date": "2017-10-21 12:09:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "cb756cd8-d28a-540e-a88e-34a2f66c3eee"
      }, 
      {
        "cardID": 9602937, 
        "id": 129005713, 
        "link": null, 
        "date": "2017-10-17 12:19:00", 
        "price": 21.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 128011330, 
        "link": null, 
        "date": "2017-10-17 12:19:00", 
        "price": 21.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "756855c9-d458-5655-b21d-b572ab3e529f"
      }, 
      {
        "cardID": 9602937, 
        "id": 127725726, 
        "link": null, 
        "date": "2017-10-11 13:35:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b56df258-9e6a-59f0-a2d2-8288c3cabf72"
      }, 
      {
        "cardID": 9602937, 
        "id": 129005744, 
        "link": null, 
        "date": "2017-10-11 13:35:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 128011364, 
        "link": null, 
        "date": "2017-10-11 13:35:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 128011483, 
        "link": null, 
        "date": "2017-09-30 19:19:00", 
        "price": 9.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 129005861, 
        "link": null, 
        "date": "2017-09-30 19:19:00", 
        "price": 9.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 127347987, 
        "link": null, 
        "date": "2017-09-30 19:19:00", 
        "price": 9.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "991498a5-9fb0-5e70-9566-4c671b9f95f5"
      }, 
      {
        "cardID": 9602937, 
        "id": 127087238, 
        "link": null, 
        "date": "2017-09-23 12:16:00", 
        "price": 0.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "4ecd80d1-216b-58cc-b509-eaa895acfe82"
      }, 
      {
        "cardID": 9602937, 
        "id": 129005918, 
        "link": null, 
        "date": "2017-09-23 12:16:00", 
        "price": 0.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 128011541, 
        "link": null, 
        "date": "2017-09-23 12:16:00", 
        "price": 0.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 128011629, 
        "link": null, 
        "date": "2017-09-10 17:46:00", 
        "price": 6.4, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 126629496, 
        "link": null, 
        "date": "2017-09-10 17:46:00", 
        "price": 6.58, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "9a61c69a-0d97-59a9-bf99-efbd5d0e8631"
      }, 
      {
        "cardID": 9602937, 
        "id": 129006005, 
        "link": null, 
        "date": "2017-09-10 17:46:00", 
        "price": 6.32, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 129006019, 
        "link": null, 
        "date": "2017-09-07 16:47:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 128011643, 
        "link": null, 
        "date": "2017-09-07 16:47:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 126629512, 
        "link": null, 
        "date": "2017-09-07 16:47:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f7e86143-726f-567a-a751-6afb1b1f1353"
      }, 
      {
        "cardID": 9602937, 
        "id": 126185918, 
        "link": null, 
        "date": "2017-08-25 14:05:00", 
        "price": 9.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "bc329203-f109-5edf-b71d-7ef0de7e0cf1"
      }, 
      {
        "cardID": 9602937, 
        "id": 128011797, 
        "link": null, 
        "date": "2017-08-25 14:05:00", 
        "price": 9.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 129006173, 
        "link": null, 
        "date": "2017-08-25 14:05:00", 
        "price": 9.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 125259538, 
        "link": null, 
        "date": "2017-07-30 18:20:00", 
        "price": 2.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "ffd4d7c6-5685-5503-aea8-811f4338a6fc"
      }, 
      {
        "cardID": 9602937, 
        "id": 124871249, 
        "link": null, 
        "date": "2017-07-23 11:25:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "b6435c3e-c3e0-509a-aa91-beefa7b202b5"
      }, 
      {
        "cardID": 9602937, 
        "id": 124656577, 
        "link": null, 
        "date": "2017-07-12 16:51:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "4846a124-90ab-57a6-bf4b-358f24abc864"
      }, 
      {
        "cardID": 9602937, 
        "id": 124369272, 
        "link": null, 
        "date": "2017-07-06 19:26:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f24ea894-5f98-59c3-94e6-56968fbb84aa"
      }, 
      {
        "cardID": 9602937, 
        "id": 124369347, 
        "link": null, 
        "date": "2017-06-29 16:47:00", 
        "price": 18.47, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "a4820e38-07df-5b21-ad8e-cf0cfe178b69"
      }, 
      {
        "cardID": 9602937, 
        "id": 124232912, 
        "link": null, 
        "date": "2017-06-22 23:06:00", 
        "price": 45.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "6fedc5e7-6314-521b-89db-ced7b3302d4f"
      }, 
      {
        "cardID": 9602937, 
        "id": 124232913, 
        "link": null, 
        "date": "2017-06-22 21:50:00", 
        "price": 26.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "8baa6774-42ad-50d1-908c-3ea096b0c0ba"
      }, 
      {
        "cardID": 9602937, 
        "id": 124143552, 
        "link": null, 
        "date": "2017-06-20 19:57:00", 
        "price": 31.68, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "9dcac99b-504c-55ef-b09a-ff42130a126e"
      }, 
      {
        "cardID": 9602937, 
        "id": 123917667, 
        "link": null, 
        "date": "2017-06-12 15:58:00", 
        "price": 2.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "aa068bae-c909-5edf-9699-068bf675c10a"
      }, 
      {
        "cardID": 9602937, 
        "id": 123542866, 
        "link": null, 
        "date": "2017-06-04 10:32:00", 
        "price": 26.68, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "245e66ec-abc0-5b0a-9e5a-5c8df5ff2942"
      }, 
      {
        "cardID": 9602937, 
        "id": 123266526, 
        "link": null, 
        "date": "2017-05-19 17:28:00", 
        "price": 1.48, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f44ba7eb-d430-5743-b994-7a08416fb8b8"
      }, 
      {
        "cardID": 9602937, 
        "id": 123266532, 
        "link": null, 
        "date": "2017-05-19 04:27:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "22af6e67-46b3-5e20-a21c-41f2930ec856"
      }, 
      {
        "cardID": 9602937, 
        "id": 122959596, 
        "link": null, 
        "date": "2017-05-11 22:16:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "e6c1b58e-e388-5609-ad3e-c501fd837488"
      }, 
      {
        "cardID": 9602937, 
        "id": 123179927, 
        "link": null, 
        "date": "2017-05-06 05:39:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "fa1bd3a0-04e8-52d2-aad8-ef33e728b47b"
      }, 
      {
        "cardID": 9602937, 
        "id": 122643114, 
        "link": null, 
        "date": "2017-05-02 18:54:00", 
        "price": 4.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "754758b0-64e3-585a-86f8-d77e772583ee"
      }, 
      {
        "cardID": 9602937, 
        "id": 121861979, 
        "link": null, 
        "date": "2017-04-15 15:56:00", 
        "price": 0.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9817bf7c-22f3-5461-a8e7-17959c5a5f44"
      }, 
      {
        "cardID": 9602937, 
        "id": 121319239, 
        "link": null, 
        "date": "2017-03-26 20:41:00", 
        "price": 39.78, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 121319261, 
        "link": null, 
        "date": "2017-03-25 12:25:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "2d0cf35a-ea27-5cf1-81a6-cc2bd93da2c0"
      }, 
      {
        "cardID": 9602937, 
        "id": 121105456, 
        "link": null, 
        "date": "2017-03-18 12:59:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "e4a936f2-1966-572f-9402-74cd216c7d54"
      }, 
      {
        "cardID": 9602937, 
        "id": 120812431, 
        "link": null, 
        "date": "2017-03-12 21:22:00", 
        "price": 0.81, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "ca5564c1-941b-5238-9d2f-4c7ea100e8e8"
      }, 
      {
        "cardID": 9602937, 
        "id": 120812458, 
        "link": null, 
        "date": "2017-03-11 14:19:00", 
        "price": 7.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "316caa85-e7ce-5407-bccd-a00739475531"
      }, 
      {
        "cardID": 9602937, 
        "id": 120625449, 
        "link": null, 
        "date": "2017-03-01 19:17:00", 
        "price": 59.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "c9e17456-4e41-552d-b63b-58cef44ca154"
      }, 
      {
        "cardID": 9602937, 
        "id": 120577657, 
        "link": null, 
        "date": "2017-02-27 19:00:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "cf0f5cd4-b1a1-52ec-bfa4-025c6dd2b407"
      }, 
      {
        "cardID": 9602937, 
        "id": 120436811, 
        "link": null, 
        "date": "2017-02-26 18:16:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "d877f7f6-c4b2-5836-bb6a-9f2e2aacacaf"
      }, 
      {
        "cardID": 9602937, 
        "id": 120436814, 
        "link": null, 
        "date": "2017-02-26 17:43:00", 
        "price": 49.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "7e3bbc33-1f61-50bb-8dec-e5a5ef2144d4"
      }, 
      {
        "cardID": 9602937, 
        "id": 120436819, 
        "link": null, 
        "date": "2017-02-26 00:04:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "9fec349a-4d5b-5685-93ce-cce2f7e6be1f"
      }, 
      {
        "cardID": 9602937, 
        "id": 120436845, 
        "link": null, 
        "date": "2017-02-22 11:42:00", 
        "price": 28.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "b1ae08be-3283-50e4-8424-52d27597a08e"
      }, 
      {
        "cardID": 9602937, 
        "id": 120129513, 
        "link": null, 
        "date": "2017-02-19 19:24:00", 
        "price": 28.98, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "78174395-354d-5562-81e3-de906d7acc3b"
      }, 
      {
        "cardID": 9602937, 
        "id": 120129521, 
        "link": null, 
        "date": "2017-02-18 20:50:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "e43b0925-e03d-5990-9288-4d9425582e06"
      }, 
      {
        "cardID": 9602937, 
        "id": 120129552, 
        "link": null, 
        "date": "2017-02-15 18:32:00", 
        "price": 4.6, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "c840c427-d327-5085-8480-3e72f648cbaa"
      }, 
      {
        "cardID": 9602937, 
        "id": 119845769, 
        "link": null, 
        "date": "2017-02-06 19:19:00", 
        "price": 124.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "bb698382-11e9-58f9-adee-5d48975af243"
      }, 
      {
        "cardID": 9602937, 
        "id": 119708415, 
        "link": null, 
        "date": "2017-02-03 18:17:00", 
        "price": 69.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "93a09575-0e36-5a38-8a4e-71a1353bc547"
      }, 
      {
        "cardID": 9602937, 
        "id": 119601097, 
        "link": null, 
        "date": "2017-01-30 09:23:00", 
        "price": 49.95, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "c541c72f-ff07-5b08-b5f3-35445db712d6"
      }, 
      {
        "cardID": 9602937, 
        "id": 118741911, 
        "link": null, 
        "date": "2017-01-05 06:11:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "937fe37c-ea11-582a-a84a-46b340e96281"
      }, 
      {
        "cardID": 9602937, 
        "id": 118734214, 
        "link": null, 
        "date": "2017-01-05 00:25:00", 
        "price": 4.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "68f0dc03-1652-5a27-86fb-2ce9f5691c25"
      }, 
      {
        "cardID": 9602937, 
        "id": 118552159, 
        "link": null, 
        "date": "2017-01-01 16:17:00", 
        "price": 99.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "afeb734c-c91f-5f24-b6b3-b13c6c2ce87b"
      }, 
      {
        "cardID": 9602937, 
        "id": 118356455, 
        "link": null, 
        "date": "2016-12-29 13:30:00", 
        "price": 99.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "7c3c4ea1-d7a8-5cc5-9e1c-5be0bd0a4baf"
      }, 
      {
        "cardID": 9602937, 
        "id": 118356499, 
        "link": null, 
        "date": "2016-12-28 17:20:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "47818f3b-db27-5e10-a8d0-318dfeb1b181"
      }, 
      {
        "cardID": 9602937, 
        "id": 118356529, 
        "link": null, 
        "date": "2016-12-24 23:45:00", 
        "price": 1.05, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "137248ab-5b92-5105-abbf-e784b7eb03cb"
      }, 
      {
        "cardID": 9602937, 
        "id": 118356533, 
        "link": null, 
        "date": "2016-12-24 11:57:00", 
        "price": 62.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "a1c1336f-721d-5ac4-a11c-dd67e2cf3f8f"
      }, 
      {
        "cardID": 9602937, 
        "id": 118356536, 
        "link": null, 
        "date": "2016-12-23 17:12:00", 
        "price": 63.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "9a241f19-5a32-5bc8-a957-35c392d6f5e4"
      }, 
      {
        "cardID": 9602937, 
        "id": 118179808, 
        "link": null, 
        "date": "2016-12-16 07:21:00", 
        "price": 11.69, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f2b49184-5c04-57d5-82e8-7568aa276fb5"
      }, 
      {
        "cardID": 9602937, 
        "id": 117898450, 
        "link": null, 
        "date": "2016-12-10 18:07:00", 
        "price": 5.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": "a7ac7f5e-71bc-526a-ade3-4bdcdaa5b719"
      }, 
      {
        "cardID": 9602937, 
        "id": 117574161, 
        "link": null, 
        "date": "2016-11-27 18:48:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "94df4294-5a57-54c9-8a75-b919c9fe3393"
      }, 
      {
        "cardID": 9602937, 
        "id": 117098978, 
        "link": null, 
        "date": "2016-11-15 06:52:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 116948601, 
        "link": null, 
        "date": "2016-11-12 10:10:00", 
        "price": 0.73, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a10ce0ab-65e8-55e3-99ad-36e91b890906"
      }, 
      {
        "cardID": 9602937, 
        "id": 116851320, 
        "link": null, 
        "date": "2016-11-02 17:30:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "3c42e398-6beb-561a-8e78-31f24774cccb"
      }, 
      {
        "cardID": 9602937, 
        "id": 116851429, 
        "link": null, 
        "date": "2016-10-17 18:35:00", 
        "price": 0.74, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "f1bf6006-268e-5b13-8831-16ff961bfce5"
      }, 
      {
        "cardID": 9602937, 
        "id": 116851767, 
        "link": null, 
        "date": "2016-10-10 11:32:00", 
        "price": 26.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "1f2a6dc8-ace6-5862-ba22-53c578a5bb95"
      }, 
      {
        "cardID": 9602937, 
        "id": 116851766, 
        "link": null, 
        "date": "2016-10-10 11:14:00", 
        "price": 26.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": "673b662e-78df-5bbe-b74f-3791af03acfa"
      }, 
      {
        "cardID": 9602937, 
        "id": 116851626, 
        "link": null, 
        "date": "2016-09-14 13:38:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "c3961d63-22ad-5471-96cb-2a1bfd79bb9d"
      }, 
      {
        "cardID": 9602937, 
        "id": 116851660, 
        "link": null, 
        "date": "2016-09-03 23:36:00", 
        "price": 1.45, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "a1a7b524-55aa-5261-8f56-526ee5c88731"
      }, 
      {
        "cardID": 9602937, 
        "id": 116851698, 
        "link": null, 
        "date": "2016-08-30 05:56:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": "5e129e38-ff02-5009-b0e2-c547c2d5afa6"
      }, 
      {
        "cardID": 9602937, 
        "id": 8104808068, 
        "link": null, 
        "date": "2015-12-22 00:00:00", 
        "price": 44.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104812953, 
        "link": null, 
        "date": "2015-12-09 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104813821, 
        "link": null, 
        "date": "2015-12-06 00:00:00", 
        "price": 1.1, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104817118, 
        "link": null, 
        "date": "2015-11-24 00:00:00", 
        "price": 0.57, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104817618, 
        "link": null, 
        "date": "2015-11-22 00:00:00", 
        "price": 30.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104818311, 
        "link": null, 
        "date": "2015-11-19 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104820564, 
        "link": null, 
        "date": "2015-11-11 00:00:00", 
        "price": 29.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104828146, 
        "link": null, 
        "date": "2015-10-16 00:00:00", 
        "price": 19.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104847854, 
        "link": null, 
        "date": "2015-08-06 00:00:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104849752, 
        "link": null, 
        "date": "2015-07-30 00:00:00", 
        "price": 74.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104852317, 
        "link": null, 
        "date": "2015-07-20 00:00:00", 
        "price": 12.49, 
        "grade_company": "BGS", 
        "grade_value": "9.5", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104867063, 
        "link": null, 
        "date": "2015-05-27 00:00:00", 
        "price": 20.0, 
        "grade_company": "SGC", 
        "grade_value": "96", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104868297, 
        "link": null, 
        "date": "2015-05-22 00:00:00", 
        "price": 14.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104873578, 
        "link": null, 
        "date": "2015-05-03 00:00:00", 
        "price": 26.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104882429, 
        "link": null, 
        "date": "2015-04-05 00:00:00", 
        "price": 5.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104889847, 
        "link": null, 
        "date": "2015-03-11 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104893017, 
        "link": null, 
        "date": "2015-03-02 00:00:00", 
        "price": 3.93, 
        "grade_company": "BGS", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104897086, 
        "link": null, 
        "date": "2015-02-19 00:00:00", 
        "price": 35.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104900812, 
        "link": null, 
        "date": "2015-02-07 00:00:00", 
        "price": 0.99, 
        "grade_company": "ISA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104909043, 
        "link": null, 
        "date": "2015-01-11 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 8104911355, 
        "link": null, 
        "date": "2015-01-03 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891753520, 
        "link": null, 
        "date": "2014-12-11 00:00:00", 
        "price": 0.7, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891759217, 
        "link": null, 
        "date": "2014-11-24 00:00:00", 
        "price": 3.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891769541, 
        "link": null, 
        "date": "2014-10-23 00:00:00", 
        "price": 0.59, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891775638, 
        "link": null, 
        "date": "2014-10-01 00:00:00", 
        "price": 1.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891786112, 
        "link": null, 
        "date": "2014-08-24 00:00:00", 
        "price": 0.79, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891794449, 
        "link": null, 
        "date": "2014-07-25 00:00:00", 
        "price": 39.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891799548, 
        "link": null, 
        "date": "2014-07-07 00:00:00", 
        "price": 34.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891808520, 
        "link": null, 
        "date": "2014-06-07 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891823157, 
        "link": null, 
        "date": "2014-04-15 00:00:00", 
        "price": 2.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891824460, 
        "link": null, 
        "date": "2014-04-10 00:00:00", 
        "price": 35.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891825182, 
        "link": null, 
        "date": "2014-04-08 00:00:00", 
        "price": 0.15, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891835227, 
        "link": null, 
        "date": "2014-03-09 00:00:00", 
        "price": 31.83, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891838142, 
        "link": null, 
        "date": "2014-03-01 00:00:00", 
        "price": 0.01, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891844415, 
        "link": null, 
        "date": "2014-02-10 00:00:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891845941, 
        "link": null, 
        "date": "2014-02-05 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891846268, 
        "link": null, 
        "date": "2014-02-04 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891848605, 
        "link": null, 
        "date": "2014-01-28 00:00:00", 
        "price": 9.99, 
        "grade_company": "BCCG", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 891853628, 
        "link": null, 
        "date": "2014-01-14 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879114300, 
        "link": null, 
        "date": "2013-12-26 00:00:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879121239, 
        "link": null, 
        "date": "2013-12-01 00:00:00", 
        "price": 2.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879125560, 
        "link": null, 
        "date": "2013-11-17 00:00:00", 
        "price": 25.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879127508, 
        "link": null, 
        "date": "2013-11-10 00:00:00", 
        "price": 5.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879148689, 
        "link": null, 
        "date": "2013-08-23 00:00:00", 
        "price": 2.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879161362, 
        "link": null, 
        "date": "2013-07-07 00:00:00", 
        "price": 17.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879163411, 
        "link": null, 
        "date": "2013-06-28 00:00:00", 
        "price": 17.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879164819, 
        "link": null, 
        "date": "2013-06-23 00:00:00", 
        "price": 6.18, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879165549, 
        "link": null, 
        "date": "2013-06-20 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879165838, 
        "link": null, 
        "date": "2013-06-19 00:00:00", 
        "price": 5.49, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879066515, 
        "link": null, 
        "date": "2013-06-02 00:00:00", 
        "price": 5.53, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879067703, 
        "link": null, 
        "date": "2013-05-28 00:00:00", 
        "price": 29.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879070289, 
        "link": null, 
        "date": "2013-05-18 00:00:00", 
        "price": 1.04, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879074750, 
        "link": null, 
        "date": "2013-05-03 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879092219, 
        "link": null, 
        "date": "2013-03-07 00:00:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 879096675, 
        "link": null, 
        "date": "2013-02-21 00:00:00", 
        "price": 2.91, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866574587, 
        "link": null, 
        "date": "2012-12-29 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866583421, 
        "link": null, 
        "date": "2012-12-04 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866587521, 
        "link": null, 
        "date": "2012-11-21 00:00:00", 
        "price": 17.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866589487, 
        "link": null, 
        "date": "2012-11-14 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866591610, 
        "link": null, 
        "date": "2012-11-05 00:00:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866594936, 
        "link": null, 
        "date": "2012-10-25 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866608680, 
        "link": null, 
        "date": "2012-09-04 00:00:00", 
        "price": 0.24, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866617968, 
        "link": null, 
        "date": "2012-07-30 00:00:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866627355, 
        "link": null, 
        "date": "2012-06-26 00:00:00", 
        "price": 17.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866631546, 
        "link": null, 
        "date": "2012-06-10 00:00:00", 
        "price": 29.99, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866635456, 
        "link": null, 
        "date": "2012-05-26 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866637797, 
        "link": null, 
        "date": "2012-05-17 00:00:00", 
        "price": 0.65, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866641996, 
        "link": null, 
        "date": "2012-05-04 00:00:00", 
        "price": 1.75, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866644941, 
        "link": null, 
        "date": "2012-04-24 00:00:00", 
        "price": 14.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866648079, 
        "link": null, 
        "date": "2012-04-11 00:00:00", 
        "price": 17.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866656204, 
        "link": null, 
        "date": "2012-03-15 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866662184, 
        "link": null, 
        "date": "2012-02-26 00:00:00", 
        "price": 1.29, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866674062, 
        "link": null, 
        "date": "2012-01-19 00:00:00", 
        "price": 0.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 866677987, 
        "link": null, 
        "date": "2012-01-05 00:00:00", 
        "price": 3.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 855898364, 
        "link": null, 
        "date": "2011-12-06 00:00:00", 
        "price": 0.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 855905808, 
        "link": null, 
        "date": "2011-11-06 00:00:00", 
        "price": 0.01, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 855919411, 
        "link": null, 
        "date": "2011-09-04 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 855925998, 
        "link": null, 
        "date": "2011-08-06 00:00:00", 
        "price": 10.0, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 855943291, 
        "link": null, 
        "date": "2011-05-15 00:00:00", 
        "price": 0.01, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 855959167, 
        "link": null, 
        "date": "2011-03-06 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846517006, 
        "link": null, 
        "date": "2010-12-05 00:00:00", 
        "price": 0.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846520921, 
        "link": null, 
        "date": "2010-11-17 00:00:00", 
        "price": 2.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846523169, 
        "link": null, 
        "date": "2010-11-05 00:00:00", 
        "price": 10.0, 
        "grade_company": "SGC", 
        "grade_value": "98", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846524549, 
        "link": null, 
        "date": "2010-10-28 00:00:00", 
        "price": 1.5, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846535259, 
        "link": null, 
        "date": "2010-09-03 00:00:00", 
        "price": 12.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846536444, 
        "link": null, 
        "date": "2010-08-28 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846555910, 
        "link": null, 
        "date": "2010-05-23 00:00:00", 
        "price": 8.55, 
        "grade_company": "SGC", 
        "grade_value": "98", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846558995, 
        "link": null, 
        "date": "2010-05-09 00:00:00", 
        "price": 7.02, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846562156, 
        "link": null, 
        "date": "2010-04-25 00:00:00", 
        "price": 20.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846564588, 
        "link": null, 
        "date": "2010-04-13 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846567043, 
        "link": null, 
        "date": "2010-04-02 00:00:00", 
        "price": 0.01, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846571814, 
        "link": null, 
        "date": "2010-03-11 00:00:00", 
        "price": 36.0, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 846580182, 
        "link": null, 
        "date": "2010-02-07 00:00:00", 
        "price": 42.05, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837820999, 
        "link": null, 
        "date": "2009-11-30 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837820870, 
        "link": null, 
        "date": "2009-11-30 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837822760, 
        "link": null, 
        "date": "2009-11-20 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837823511, 
        "link": null, 
        "date": "2009-11-16 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837834461, 
        "link": null, 
        "date": "2009-09-20 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837838463, 
        "link": null, 
        "date": "2009-08-30 00:00:00", 
        "price": 15.99, 
        "grade_company": "BGS", 
        "grade_value": "9.5", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837845026, 
        "link": null, 
        "date": "2009-07-30 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837855786, 
        "link": null, 
        "date": "2009-06-04 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837864298, 
        "link": null, 
        "date": "2009-04-23 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837871184, 
        "link": null, 
        "date": "2009-03-26 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837872864, 
        "link": null, 
        "date": "2009-03-19 00:00:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837878159, 
        "link": null, 
        "date": "2009-02-23 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837882173, 
        "link": null, 
        "date": "2009-02-05 00:00:00", 
        "price": 0.75, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 837882517, 
        "link": null, 
        "date": "2009-02-03 00:00:00", 
        "price": 1.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 828964955, 
        "link": null, 
        "date": "2008-11-26 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 828969489, 
        "link": null, 
        "date": "2008-11-04 00:00:00", 
        "price": 0.99, 
        "grade_company": "PSA", 
        "grade_value": "8", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 828984485, 
        "link": null, 
        "date": "2008-08-14 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 828988406, 
        "link": null, 
        "date": "2008-07-25 00:00:00", 
        "price": 27.5, 
        "grade_company": "PSA", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 828993742, 
        "link": null, 
        "date": "2008-06-27 00:00:00", 
        "price": 1.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 829006618, 
        "link": null, 
        "date": "2008-04-23 00:00:00", 
        "price": 2.99, 
        "grade_company": "PSA", 
        "grade_value": "9", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 829016305, 
        "link": null, 
        "date": "2008-03-12 00:00:00", 
        "price": 4.0, 
        "grade_company": "BCCG", 
        "grade_value": "10", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 829024414, 
        "link": null, 
        "date": "2008-02-03 00:00:00", 
        "price": 0.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 829024718, 
        "link": null, 
        "date": "2008-02-01 00:00:00", 
        "price": 2.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 820454020, 
        "link": null, 
        "date": "2007-08-16 00:00:00", 
        "price": 0.74, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 820502016, 
        "link": null, 
        "date": "2007-01-02 00:00:00", 
        "price": 24.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812796879, 
        "link": null, 
        "date": "2006-10-25 00:00:00", 
        "price": 37.99, 
        "grade_company": "BGS", 
        "grade_value": "9.5", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812811522, 
        "link": null, 
        "date": "2006-08-04 00:00:00", 
        "price": 24.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812812876, 
        "link": null, 
        "date": "2006-07-28 00:00:00", 
        "price": 24.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812812874, 
        "link": null, 
        "date": "2006-07-28 00:00:00", 
        "price": 24.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812816414, 
        "link": null, 
        "date": "2006-07-10 00:00:00", 
        "price": 35.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812820390, 
        "link": null, 
        "date": "2006-06-19 00:00:00", 
        "price": 10.98, 
        "grade_company": "BGS", 
        "grade_value": "9.5", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812823061, 
        "link": null, 
        "date": "2006-06-05 00:00:00", 
        "price": 24.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812833677, 
        "link": null, 
        "date": "2006-04-11 00:00:00", 
        "price": 35.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812834135, 
        "link": null, 
        "date": "2006-04-08 00:00:00", 
        "price": 65.0, 
        "grade_company": "BGS", 
        "grade_value": "9.5", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812835868, 
        "link": null, 
        "date": "2006-03-30 00:00:00", 
        "price": 35.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812836124, 
        "link": null, 
        "date": "2006-03-28 00:00:00", 
        "price": 36.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812841397, 
        "link": null, 
        "date": "2006-03-04 00:00:00", 
        "price": 25.49, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812841465, 
        "link": null, 
        "date": "2006-03-04 00:00:00", 
        "price": 51.0, 
        "grade_company": "BGS", 
        "grade_value": "9.5", 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812843667, 
        "link": null, 
        "date": "2006-02-22 00:00:00", 
        "price": 24.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812845052, 
        "link": null, 
        "date": "2006-02-16 00:00:00", 
        "price": 1.25, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 812845054, 
        "link": null, 
        "date": "2006-02-16 00:00:00", 
        "price": 24.99, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 86447752, 
        "link": null, 
        "date": "2005-11-30 00:00:00", 
        "price": 35.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }, 
      {
        "cardID": 9602937, 
        "id": 86450758, 
        "link": null, 
        "date": "2005-11-12 00:00:00", 
        "price": 35.0, 
        "grade_company": null, 
        "grade_value": null, 
        "img": null
      }
    ]
  }
}

```

### pricing grid
```js
fetch("https://api.priceguide.cards/v2/card_details/pg_app_pricing_grid", {
    "body": "{\"cardcode\":\"PROH1990-B-S-632A\",\"currency\":\"USD\",\"userid\":158672}",
    "cache": "default",
    "credentials": "include",
    "headers": {
        "Accept": "application/json",
        "Accept-Language": "en-CA,en-US;q=0.9,en;q=0.8",
        "Authorization": "Bearer (token)",
        "Content-Type": "application/json",
        "langCode": "en",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15"
    },
    "method": "POST",
    "mode": "cors",
    "redirect": "follow",
    "referrer": "https://www.priceguide.cards/",
    "referrerPolicy": "strict-origin-when-cross-origin"
})
{
  "success": true, 
  "data": [
    {
      "year": 2005, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 35.0, 
      "max": 35.0, 
      "min": 35.0, 
      "count": 2
    }, 
    {
      "year": 2006, 
      "gradeCompany": "BGS", 
      "gradeValue": "9.5", 
      "avg": 41.2425, 
      "max": 65.0, 
      "min": 10.98, 
      "count": 4
    }, 
    {
      "year": 2006, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 26.473333333333333, 
      "max": 36.0, 
      "min": 1.25, 
      "count": 12
    }, 
    {
      "year": 2007, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 12.864999999999998, 
      "max": 24.99, 
      "min": 0.74, 
      "count": 2
    }, 
    {
      "year": 2008, 
      "gradeCompany": "BCCG", 
      "gradeValue": "10", 
      "avg": 4.0, 
      "max": 4.0, 
      "min": 4.0, 
      "count": 1
    }, 
    {
      "year": 2008, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 27.5, 
      "max": 27.5, 
      "min": 27.5, 
      "count": 1
    }, 
    {
      "year": 2008, 
      "gradeCompany": "PSA", 
      "gradeValue": "8", 
      "avg": 0.99, 
      "max": 0.99, 
      "min": 0.99, 
      "count": 1
    }, 
    {
      "year": 2008, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 2.99, 
      "max": 2.99, 
      "min": 2.99, 
      "count": 1
    }, 
    {
      "year": 2008, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 1.1960000000000002, 
      "max": 2.0, 
      "min": 0.99, 
      "count": 5
    }, 
    {
      "year": 2009, 
      "gradeCompany": "BGS", 
      "gradeValue": "9.5", 
      "avg": 15.99, 
      "max": 15.99, 
      "min": 15.99, 
      "count": 1
    }, 
    {
      "year": 2009, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 1.0692307692307692, 
      "max": 1.99, 
      "min": 0.75, 
      "count": 13
    }, 
    {
      "year": 2010, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 23.514, 
      "max": 42.05, 
      "min": 7.02, 
      "count": 5
    }, 
    {
      "year": 2010, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 0.99, 
      "max": 0.99, 
      "min": 0.99, 
      "count": 1
    }, 
    {
      "year": 2010, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 1.298, 
      "max": 2.99, 
      "min": 0.01, 
      "count": 5
    }, 
    {
      "year": 2010, 
      "gradeCompany": "SGC", 
      "gradeValue": "98", 
      "avg": 9.275, 
      "max": 10.0, 
      "min": 8.55, 
      "count": 2
    }, 
    {
      "year": 2011, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 10.0, 
      "max": 10.0, 
      "min": 10.0, 
      "count": 1
    }, 
    {
      "year": 2011, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 0.502, 
      "max": 1.0, 
      "min": 0.01, 
      "count": 5
    }, 
    {
      "year": 2012, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 19.494, 
      "max": 29.99, 
      "min": 14.0, 
      "count": 5
    }, 
    {
      "year": 2012, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 1.1871428571428573, 
      "max": 3.0, 
      "min": 0.24, 
      "count": 14
    }, 
    {
      "year": 2013, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 16.676666666666666, 
      "max": 29.99, 
      "min": 2.91, 
      "count": 6
    }, 
    {
      "year": 2013, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 5.0, 
      "max": 5.99, 
      "min": 2.99, 
      "count": 4
    }, 
    {
      "year": 2013, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 1.2550000000000001, 
      "max": 2.0, 
      "min": 0.99, 
      "count": 6
    }, 
    {
      "year": 2014, 
      "gradeCompany": "BCCG", 
      "gradeValue": "10", 
      "avg": 9.99, 
      "max": 9.99, 
      "min": 9.99, 
      "count": 1
    }, 
    {
      "year": 2014, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 35.4525, 
      "max": 39.99, 
      "min": 31.83, 
      "count": 4
    }, 
    {
      "year": 2014, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 1.0723076923076922, 
      "max": 3.0, 
      "min": 0.01, 
      "count": 13
    }, 
    {
      "year": 2015, 
      "gradeCompany": "BGS", 
      "gradeValue": "9", 
      "avg": 3.93, 
      "max": 3.93, 
      "min": 3.93, 
      "count": 1
    }, 
    {
      "year": 2015, 
      "gradeCompany": "BGS", 
      "gradeValue": "9.5", 
      "avg": 12.49, 
      "max": 12.49, 
      "min": 12.49, 
      "count": 1
    }, 
    {
      "year": 2015, 
      "gradeCompany": "ISA", 
      "gradeValue": "9", 
      "avg": 0.99, 
      "max": 0.99, 
      "min": 0.99, 
      "count": 1
    }, 
    {
      "year": 2015, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 37.42142857142857, 
      "max": 74.99, 
      "min": 19.99, 
      "count": 7
    }, 
    {
      "year": 2015, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 14.99, 
      "max": 14.99, 
      "min": 14.99, 
      "count": 1
    }, 
    {
      "year": 2015, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 1.5155555555555555, 
      "max": 5.0, 
      "min": 0.57, 
      "count": 9
    }, 
    {
      "year": 2015, 
      "gradeCompany": "SGC", 
      "gradeValue": "96", 
      "avg": 20.0, 
      "max": 20.0, 
      "min": 20.0, 
      "count": 1
    }, 
    {
      "year": 2016, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 56.092, 
      "max": 99.99, 
      "min": 26.99, 
      "count": 5
    }, 
    {
      "year": 2016, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 5.0, 
      "max": 5.0, 
      "min": 5.0, 
      "count": 1
    }, 
    {
      "year": 2016, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 2.286363636363636, 
      "max": 11.69, 
      "min": 0.73, 
      "count": 11
    }, 
    {
      "year": 2017, 
      "gradeCompany": "BGS", 
      "gradeValue": "9.5", 
      "avg": 50.5, 
      "max": 50.5, 
      "min": 50.5, 
      "count": 1
    }, 
    {
      "year": 2017, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 51.894375, 
      "max": 124.99, 
      "min": 21.99, 
      "count": 16
    }, 
    {
      "year": 2017, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 10.875384615384615, 
      "max": 26.68, 
      "min": 6.32, 
      "count": 13
    }, 
    {
      "year": 2017, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 1.6721052631578948, 
      "max": 4.99, 
      "min": 0.49, 
      "count": 38
    }, 
    {
      "year": 2018, 
      "gradeCompany": "BGS", 
      "gradeValue": "9", 
      "avg": 7.95, 
      "max": 7.95, 
      "min": 7.95, 
      "count": 1
    }, 
    {
      "year": 2018, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 29.22714285714286, 
      "max": 54.99, 
      "min": 6.26, 
      "count": 14
    }, 
    {
      "year": 2018, 
      "gradeCompany": "PSA", 
      "gradeValue": "8", 
      "avg": 2.32, 
      "max": 2.32, 
      "min": 2.32, 
      "count": 1
    }, 
    {
      "year": 2018, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 16.663333333333334, 
      "max": 25.0, 
      "min": 9.99, 
      "count": 3
    }, 
    {
      "year": 2018, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 4.154545454545455, 
      "max": 17.19, 
      "min": 0.4, 
      "count": 22
    }, 
    {
      "year": 2019, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 25.75111111111111, 
      "max": 49.99, 
      "min": 11.76, 
      "count": 9
    }, 
    {
      "year": 2019, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 17.99, 
      "max": 17.99, 
      "min": 17.99, 
      "count": 1
    }, 
    {
      "year": 2019, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 3.4923333333333333, 
      "max": 19.99, 
      "min": 0.52, 
      "count": 30
    }, 
    {
      "year": 2019, 
      "gradeCompany": "SGC", 
      "gradeValue": "98", 
      "avg": 5.875, 
      "max": 6.1, 
      "min": 5.65, 
      "count": 2
    }, 
    {
      "year": 2020, 
      "gradeCompany": "BGS", 
      "gradeValue": "9", 
      "avg": 53.65, 
      "max": 53.65, 
      "min": 53.65, 
      "count": 1
    }, 
    {
      "year": 2020, 
      "gradeCompany": "KSA", 
      "gradeValue": "9", 
      "avg": 1.99, 
      "max": 1.99, 
      "min": 1.99, 
      "count": 1
    }, 
    {
      "year": 2020, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 29.0845, 
      "max": 59.99, 
      "min": 5.37, 
      "count": 60
    }, 
    {
      "year": 2020, 
      "gradeCompany": "PSA", 
      "gradeValue": "7", 
      "avg": 8.2, 
      "max": 8.2, 
      "min": 8.2, 
      "count": 1
    }, 
    {
      "year": 2020, 
      "gradeCompany": "PSA", 
      "gradeValue": "8", 
      "avg": 6.995, 
      "max": 10.0, 
      "min": 3.99, 
      "count": 2
    }, 
    {
      "year": 2020, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 13.992857142857144, 
      "max": 24.0, 
      "min": 6.99, 
      "count": 7
    }, 
    {
      "year": 2020, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 3.190689655172414, 
      "max": 51.99, 
      "min": 0.18, 
      "count": 58
    }, 
    {
      "year": 2021, 
      "gradeCompany": "KSA", 
      "gradeValue": "10", 
      "avg": 75.34833333333333, 
      "max": 98.0, 
      "min": 28.6, 
      "count": 6
    }, 
    {
      "year": 2021, 
      "gradeCompany": "KSA", 
      "gradeValue": "8.5", 
      "avg": 19.884999999999998, 
      "max": 21.25, 
      "min": 18.52, 
      "count": 2
    }, 
    {
      "year": 2021, 
      "gradeCompany": "KSA", 
      "gradeValue": "9.5", 
      "avg": 51.92, 
      "max": 51.92, 
      "min": 51.92, 
      "count": 1
    }, 
    {
      "year": 2021, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 137.99464285714285, 
      "max": 642.5, 
      "min": 56.0, 
      "count": 28
    }, 
    {
      "year": 2021, 
      "gradeCompany": "PSA", 
      "gradeValue": "6", 
      "avg": 17.99, 
      "max": 17.99, 
      "min": 17.99, 
      "count": 1
    }, 
    {
      "year": 2021, 
      "gradeCompany": "PSA", 
      "gradeValue": "8", 
      "avg": 17.49, 
      "max": 19.99, 
      "min": 14.99, 
      "count": 2
    }, 
    {
      "year": 2021, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 24.32125, 
      "max": 36.95, 
      "min": 14.0, 
      "count": 8
    }, 
    {
      "year": 2021, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 6.513225806451612, 
      "max": 263.87, 
      "min": 0.08, 
      "count": 155
    }, 
    {
      "year": 2021, 
      "gradeCompany": "SGC", 
      "gradeValue": "92", 
      "avg": 8.77, 
      "max": 15.0, 
      "min": 2.54, 
      "count": 2
    }, 
    {
      "year": 2021, 
      "gradeCompany": "SGC", 
      "gradeValue": "98", 
      "avg": 48.0, 
      "max": 48.0, 
      "min": 48.0, 
      "count": 1
    }, 
    {
      "year": 2022, 
      "gradeCompany": "BGS", 
      "gradeValue": "9", 
      "avg": 14.99, 
      "max": 14.99, 
      "min": 14.99, 
      "count": 1
    }, 
    {
      "year": 2022, 
      "gradeCompany": "KSA", 
      "gradeValue": "10", 
      "avg": 84.69999999999999, 
      "max": 89.94, 
      "min": 79.46, 
      "count": 2
    }, 
    {
      "year": 2022, 
      "gradeCompany": "KSA", 
      "gradeValue": "9", 
      "avg": 17.995, 
      "max": 23.05, 
      "min": 12.94, 
      "count": 2
    }, 
    {
      "year": 2022, 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 127.90599999999999, 
      "max": 817.5, 
      "min": 52.14, 
      "count": 15
    }, 
    {
      "year": 2022, 
      "gradeCompany": "PSA", 
      "gradeValue": "6", 
      "avg": 5.836666666666666, 
      "max": 9.5, 
      "min": 2.76, 
      "count": 3
    }, 
    {
      "year": 2022, 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 27.43, 
      "max": 55.0, 
      "min": 7.5, 
      "count": 7
    }, 
    {
      "year": 2022, 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 6.434935064935065, 
      "max": 99.99, 
      "min": 0.78, 
      "count": 77
    }, 
    {
      "year": 2022, 
      "gradeCompany": "SGC", 
      "gradeValue": "96", 
      "avg": 7.01, 
      "max": 7.01, 
      "min": 7.01, 
      "count": 1
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "BCCG", 
      "gradeValue": "10", 
      "avg": 6.995, 
      "max": 9.99, 
      "min": 4.0, 
      "count": 2
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "BGS", 
      "gradeValue": "9", 
      "avg": 20.13, 
      "max": 53.65, 
      "min": 3.93, 
      "count": 4
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "BGS", 
      "gradeValue": "9.5", 
      "avg": 34.85, 
      "max": 65.0, 
      "min": 10.98, 
      "count": 7
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "ISA", 
      "gradeValue": "9", 
      "avg": 0.99, 
      "max": 0.99, 
      "min": 0.99, 
      "count": 1
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "KSA", 
      "gradeValue": "10", 
      "avg": 77.68625, 
      "max": 98.0, 
      "min": 28.6, 
      "count": 8
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "KSA", 
      "gradeValue": "8.5", 
      "avg": 19.884999999999998, 
      "max": 21.25, 
      "min": 18.52, 
      "count": 2
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "KSA", 
      "gradeValue": "9", 
      "avg": 12.659999999999998, 
      "max": 23.05, 
      "min": 1.99, 
      "count": 3
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "KSA", 
      "gradeValue": "9.5", 
      "avg": 51.92, 
      "max": 51.92, 
      "min": 51.92, 
      "count": 1
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "PSA", 
      "gradeValue": "10", 
      "avg": 57.289028571428574, 
      "max": 817.5, 
      "min": 2.91, 
      "count": 175
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "PSA", 
      "gradeValue": "6", 
      "avg": 8.875, 
      "max": 17.99, 
      "min": 2.76, 
      "count": 4
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "PSA", 
      "gradeValue": "7", 
      "avg": 8.2, 
      "max": 8.2, 
      "min": 8.2, 
      "count": 1
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "PSA", 
      "gradeValue": "8", 
      "avg": 8.713333333333333, 
      "max": 19.99, 
      "min": 0.99, 
      "count": 6
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "PSA", 
      "gradeValue": "9", 
      "avg": 15.580416666666666, 
      "max": 55.0, 
      "min": 0.99, 
      "count": 48
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "RAW", 
      "gradeValue": "RAW", 
      "avg": 5.176058700209643, 
      "max": 263.87, 
      "min": 0.01, 
      "count": 477
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "SGC", 
      "gradeValue": "92", 
      "avg": 8.77, 
      "max": 15.0, 
      "min": 2.54, 
      "count": 2
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "SGC", 
      "gradeValue": "96", 
      "avg": 13.504999999999999, 
      "max": 20.0, 
      "min": 7.01, 
      "count": 2
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "SGC", 
      "gradeValue": "98", 
      "avg": 15.66, 
      "max": 48.0, 
      "min": 5.65, 
      "count": 5
    }, 
    {
      "year": 2005, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 35.0, 
      "max": 35.0, 
      "min": 35.0, 
      "count": 2
    }, 
    {
      "year": 2006, 
      "gradeCompany": "BGS", 
      "gradeValue": "ALL", 
      "avg": 41.2425, 
      "max": 65.0, 
      "min": 10.98, 
      "count": 4
    }, 
    {
      "year": 2006, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 26.473333333333333, 
      "max": 36.0, 
      "min": 1.25, 
      "count": 12
    }, 
    {
      "year": 2007, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 12.864999999999998, 
      "max": 24.99, 
      "min": 0.74, 
      "count": 2
    }, 
    {
      "year": 2008, 
      "gradeCompany": "BCCG", 
      "gradeValue": "ALL", 
      "avg": 4.0, 
      "max": 4.0, 
      "min": 4.0, 
      "count": 1
    }, 
    {
      "year": 2008, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 10.493333333333332, 
      "max": 27.5, 
      "min": 0.99, 
      "count": 3
    }, 
    {
      "year": 2008, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 1.1960000000000002, 
      "max": 2.0, 
      "min": 0.99, 
      "count": 5
    }, 
    {
      "year": 2009, 
      "gradeCompany": "BGS", 
      "gradeValue": "ALL", 
      "avg": 15.99, 
      "max": 15.99, 
      "min": 15.99, 
      "count": 1
    }, 
    {
      "year": 2009, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 1.0692307692307692, 
      "max": 1.99, 
      "min": 0.75, 
      "count": 13
    }, 
    {
      "year": 2010, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 19.76, 
      "max": 42.05, 
      "min": 0.99, 
      "count": 6
    }, 
    {
      "year": 2010, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 1.298, 
      "max": 2.99, 
      "min": 0.01, 
      "count": 5
    }, 
    {
      "year": 2010, 
      "gradeCompany": "SGC", 
      "gradeValue": "ALL", 
      "avg": 9.275, 
      "max": 10.0, 
      "min": 8.55, 
      "count": 2
    }, 
    {
      "year": 2011, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 10.0, 
      "max": 10.0, 
      "min": 10.0, 
      "count": 1
    }, 
    {
      "year": 2011, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 0.502, 
      "max": 1.0, 
      "min": 0.01, 
      "count": 5
    }, 
    {
      "year": 2012, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 19.494, 
      "max": 29.99, 
      "min": 14.0, 
      "count": 5
    }, 
    {
      "year": 2012, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 1.1871428571428573, 
      "max": 3.0, 
      "min": 0.24, 
      "count": 14
    }, 
    {
      "year": 2013, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 12.006, 
      "max": 29.99, 
      "min": 2.91, 
      "count": 10
    }, 
    {
      "year": 2013, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 1.2550000000000001, 
      "max": 2.0, 
      "min": 0.99, 
      "count": 6
    }, 
    {
      "year": 2014, 
      "gradeCompany": "BCCG", 
      "gradeValue": "ALL", 
      "avg": 9.99, 
      "max": 9.99, 
      "min": 9.99, 
      "count": 1
    }, 
    {
      "year": 2014, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 35.4525, 
      "max": 39.99, 
      "min": 31.83, 
      "count": 4
    }, 
    {
      "year": 2014, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 1.0723076923076922, 
      "max": 3.0, 
      "min": 0.01, 
      "count": 13
    }, 
    {
      "year": 2015, 
      "gradeCompany": "BGS", 
      "gradeValue": "ALL", 
      "avg": 8.21, 
      "max": 12.49, 
      "min": 3.93, 
      "count": 2
    }, 
    {
      "year": 2015, 
      "gradeCompany": "ISA", 
      "gradeValue": "ALL", 
      "avg": 0.99, 
      "max": 0.99, 
      "min": 0.99, 
      "count": 1
    }, 
    {
      "year": 2015, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 34.6175, 
      "max": 74.99, 
      "min": 14.99, 
      "count": 8
    }, 
    {
      "year": 2015, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 1.5155555555555555, 
      "max": 5.0, 
      "min": 0.57, 
      "count": 9
    }, 
    {
      "year": 2015, 
      "gradeCompany": "SGC", 
      "gradeValue": "ALL", 
      "avg": 20.0, 
      "max": 20.0, 
      "min": 20.0, 
      "count": 1
    }, 
    {
      "year": 2016, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 47.57666666666666, 
      "max": 99.99, 
      "min": 5.0, 
      "count": 6
    }, 
    {
      "year": 2016, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 2.286363636363636, 
      "max": 11.69, 
      "min": 0.73, 
      "count": 11
    }, 
    {
      "year": 2017, 
      "gradeCompany": "BGS", 
      "gradeValue": "ALL", 
      "avg": 50.5, 
      "max": 50.5, 
      "min": 50.5, 
      "count": 1
    }, 
    {
      "year": 2017, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 33.506551724137935, 
      "max": 124.99, 
      "min": 6.32, 
      "count": 29
    }, 
    {
      "year": 2017, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 1.6721052631578948, 
      "max": 4.99, 
      "min": 0.49, 
      "count": 38
    }, 
    {
      "year": 2018, 
      "gradeCompany": "BGS", 
      "gradeValue": "ALL", 
      "avg": 7.95, 
      "max": 7.95, 
      "min": 7.95, 
      "count": 1
    }, 
    {
      "year": 2018, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 25.638333333333335, 
      "max": 54.99, 
      "min": 2.32, 
      "count": 18
    }, 
    {
      "year": 2018, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 4.154545454545455, 
      "max": 17.19, 
      "min": 0.4, 
      "count": 22
    }, 
    {
      "year": 2019, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 24.975, 
      "max": 49.99, 
      "min": 11.76, 
      "count": 10
    }, 
    {
      "year": 2019, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 3.4923333333333333, 
      "max": 19.99, 
      "min": 0.52, 
      "count": 30
    }, 
    {
      "year": 2019, 
      "gradeCompany": "SGC", 
      "gradeValue": "ALL", 
      "avg": 5.875, 
      "max": 6.1, 
      "min": 5.65, 
      "count": 2
    }, 
    {
      "year": 2020, 
      "gradeCompany": "BGS", 
      "gradeValue": "ALL", 
      "avg": 53.65, 
      "max": 53.65, 
      "min": 53.65, 
      "count": 1
    }, 
    {
      "year": 2020, 
      "gradeCompany": "KSA", 
      "gradeValue": "ALL", 
      "avg": 1.99, 
      "max": 1.99, 
      "min": 1.99, 
      "count": 1
    }, 
    {
      "year": 2020, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 26.645857142857142, 
      "max": 59.99, 
      "min": 3.99, 
      "count": 70
    }, 
    {
      "year": 2020, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 3.190689655172414, 
      "max": 51.99, 
      "min": 0.18, 
      "count": 58
    }, 
    {
      "year": 2021, 
      "gradeCompany": "KSA", 
      "gradeValue": "ALL", 
      "avg": 60.419999999999995, 
      "max": 98.0, 
      "min": 18.52, 
      "count": 9
    }, 
    {
      "year": 2021, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 105.42025641025641, 
      "max": 642.5, 
      "min": 14.0, 
      "count": 39
    }, 
    {
      "year": 2021, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 6.513225806451612, 
      "max": 263.87, 
      "min": 0.08, 
      "count": 155
    }, 
    {
      "year": 2021, 
      "gradeCompany": "SGC", 
      "gradeValue": "ALL", 
      "avg": 21.846666666666664, 
      "max": 48.0, 
      "min": 2.54, 
      "count": 3
    }, 
    {
      "year": 2022, 
      "gradeCompany": "BGS", 
      "gradeValue": "ALL", 
      "avg": 14.99, 
      "max": 14.99, 
      "min": 14.99, 
      "count": 1
    }, 
    {
      "year": 2022, 
      "gradeCompany": "KSA", 
      "gradeValue": "ALL", 
      "avg": 51.3475, 
      "max": 89.94, 
      "min": 12.94, 
      "count": 4
    }, 
    {
      "year": 2022, 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 85.12440000000001, 
      "max": 817.5, 
      "min": 2.76, 
      "count": 25
    }, 
    {
      "year": 2022, 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 6.434935064935065, 
      "max": 99.99, 
      "min": 0.78, 
      "count": 77
    }, 
    {
      "year": 2022, 
      "gradeCompany": "SGC", 
      "gradeValue": "ALL", 
      "avg": 7.01, 
      "max": 7.01, 
      "min": 7.01, 
      "count": 1
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "BCCG", 
      "gradeValue": "ALL", 
      "avg": 6.995, 
      "max": 9.99, 
      "min": 4.0, 
      "count": 2
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "BGS", 
      "gradeValue": "ALL", 
      "avg": 29.49727272727273, 
      "max": 65.0, 
      "min": 3.93, 
      "count": 11
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "ISA", 
      "gradeValue": "ALL", 
      "avg": 0.99, 
      "max": 0.99, 
      "min": 0.99, 
      "count": 1
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "KSA", 
      "gradeValue": "ALL", 
      "avg": 53.65428571428571, 
      "max": 98.0, 
      "min": 1.99, 
      "count": 14
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "PSA", 
      "gradeValue": "ALL", 
      "avg": 46.45051282051282, 
      "max": 817.5, 
      "min": 0.99, 
      "count": 234
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "RAW", 
      "gradeValue": "ALL", 
      "avg": 5.176058700209643, 
      "max": 263.87, 
      "min": 0.01, 
      "count": 477
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "SGC", 
      "gradeValue": "ALL", 
      "avg": 13.649999999999999, 
      "max": 48.0, 
      "min": 2.54, 
      "count": 9
    }, 
    {
      "year": 2006, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 30.165625, 
      "max": 65.0, 
      "min": 1.25, 
      "count": 16
    }, 
    {
      "year": 2008, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 4.6066666666666665, 
      "max": 27.5, 
      "min": 0.99, 
      "count": 9
    }, 
    {
      "year": 2009, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 2.1350000000000002, 
      "max": 15.99, 
      "min": 0.75, 
      "count": 14
    }, 
    {
      "year": 2010, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 11.046153846153846, 
      "max": 42.05, 
      "min": 0.01, 
      "count": 13
    }, 
    {
      "year": 2011, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 2.085, 
      "max": 10.0, 
      "min": 0.01, 
      "count": 6
    }, 
    {
      "year": 2012, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 6.004736842105263, 
      "max": 29.99, 
      "min": 0.24, 
      "count": 19
    }, 
    {
      "year": 2013, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 7.974374999999999, 
      "max": 29.99, 
      "min": 0.99, 
      "count": 16
    }, 
    {
      "year": 2014, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 9.207777777777778, 
      "max": 39.99, 
      "min": 0.01, 
      "count": 18
    }, 
    {
      "year": 2015, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 15.618571428571428, 
      "max": 74.99, 
      "min": 0.57, 
      "count": 21
    }, 
    {
      "year": 2016, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 18.271176470588237, 
      "max": 99.99, 
      "min": 0.73, 
      "count": 17
    }, 
    {
      "year": 2017, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 15.966617647058824, 
      "max": 124.99, 
      "min": 0.49, 
      "count": 68
    }, 
    {
      "year": 2018, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 13.679024390243903, 
      "max": 54.99, 
      "min": 0.4, 
      "count": 41
    }, 
    {
      "year": 2019, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 8.720714285714285, 
      "max": 49.99, 
      "min": 0.52, 
      "count": 42
    }, 
    {
      "year": 2020, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 16.19930769230769, 
      "max": 59.99, 
      "min": 0.18, 
      "count": 130
    }, 
    {
      "year": 2021, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 27.816796116504854, 
      "max": 642.5, 
      "min": 0.08, 
      "count": 206
    }, 
    {
      "year": 2022, 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 26.398055555555555, 
      "max": 817.5, 
      "min": 0.78, 
      "count": 108
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "ALL", 
      "gradeValue": "ALL", 
      "avg": 19.454358288770056, 
      "max": 817.5, 
      "min": 0.01, 
      "count": 748
    }, 
    {
      "year": 2006, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 41.2425, 
      "max": 65.0, 
      "min": 10.98, 
      "count": 4
    }, 
    {
      "year": 2008, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 8.87, 
      "max": 27.5, 
      "min": 0.99, 
      "count": 4
    }, 
    {
      "year": 2009, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 15.99, 
      "max": 15.99, 
      "min": 15.99, 
      "count": 1
    }, 
    {
      "year": 2010, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 17.13875, 
      "max": 42.05, 
      "min": 0.99, 
      "count": 8
    }, 
    {
      "year": 2011, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 10.0, 
      "max": 10.0, 
      "min": 10.0, 
      "count": 1
    }, 
    {
      "year": 2012, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 19.494, 
      "max": 29.99, 
      "min": 14.0, 
      "count": 5
    }, 
    {
      "year": 2013, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 12.006, 
      "max": 29.99, 
      "min": 2.91, 
      "count": 10
    }, 
    {
      "year": 2014, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 30.360000000000003, 
      "max": 39.99, 
      "min": 9.99, 
      "count": 5
    }, 
    {
      "year": 2015, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 26.195833333333336, 
      "max": 74.99, 
      "min": 0.99, 
      "count": 12
    }, 
    {
      "year": 2016, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 47.57666666666666, 
      "max": 99.99, 
      "min": 5.0, 
      "count": 6
    }, 
    {
      "year": 2017, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 34.073, 
      "max": 124.99, 
      "min": 6.32, 
      "count": 30
    }, 
    {
      "year": 2018, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 24.70736842105263, 
      "max": 54.99, 
      "min": 2.32, 
      "count": 19
    }, 
    {
      "year": 2019, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 21.791666666666668, 
      "max": 49.99, 
      "min": 5.65, 
      "count": 12
    }, 
    {
      "year": 2020, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 26.678472222222226, 
      "max": 59.99, 
      "min": 1.99, 
      "count": 72
    }, 
    {
      "year": 2021, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 92.56294117647059, 
      "max": 642.5, 
      "min": 2.54, 
      "count": 51
    }, 
    {
      "year": 2022, 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 75.98387096774194, 
      "max": 817.5, 
      "min": 2.76, 
      "count": 31
    }, 
    {
      "year": "ALL", 
      "gradeCompany": "Graded", 
      "gradeValue": "ALL", 
      "avg": 44.58627306273064, 
      "max": 817.5, 
      "min": 0.99, 
      "count": 271
    }
  ], 
  "drop_down_options": {
    "All": "ALL", 
    "BGS": "BGS", 
    "BCCG": "BCCG", 
    "PSA": "PSA", 
    "SGC": "SGC", 
    "ISA": "ISA", 
    "KSA": "KSA"
  }, 
  "drop_down_options_by_year": {
    "2005": {
      "All": "ALL"
    }, 
    "2006": {
      "All": "ALL", 
      "BGS": "BGS"
    }, 
    "2007": {
      "All": "ALL"
    }, 
    "2008": {
      "All": "ALL", 
      "BCCG": "BCCG", 
      "PSA": "PSA"
    }, 
    "2009": {
      "All": "ALL", 
      "BGS": "BGS"
    }, 
    "2010": {
      "All": "ALL", 
      "PSA": "PSA", 
      "SGC": "SGC"
    }, 
    "2011": {
      "All": "ALL", 
      "PSA": "PSA"
    }, 
    "2012": {
      "All": "ALL", 
      "PSA": "PSA"
    }, 
    "2013": {
      "All": "ALL", 
      "PSA": "PSA"
    }, 
    "2014": {
      "All": "ALL", 
      "BCCG": "BCCG", 
      "PSA": "PSA"
    }, 
    "2015": {
      "All": "ALL", 
      "BGS": "BGS", 
      "ISA": "ISA", 
      "PSA": "PSA", 
      "SGC": "SGC"
    }, 
    "2016": {
      "All": "ALL", 
      "PSA": "PSA"
    }, 
    "2017": {
      "All": "ALL", 
      "BGS": "BGS", 
      "PSA": "PSA"
    }, 
    "2018": {
      "All": "ALL", 
      "BGS": "BGS", 
      "PSA": "PSA"
    }, 
    "2019": {
      "All": "ALL", 
      "PSA": "PSA", 
      "SGC": "SGC"
    }, 
    "2020": {
      "All": "ALL", 
      "BGS": "BGS", 
      "KSA": "KSA", 
      "PSA": "PSA"
    }, 
    "2021": {
      "All": "ALL", 
      "KSA": "KSA", 
      "PSA": "PSA", 
      "SGC": "SGC"
    }, 
    "2022": {
      "All": "ALL", 
      "BGS": "BGS", 
      "KSA": "KSA", 
      "PSA": "PSA", 
      "SGC": "SGC"
    }, 
    "ALL": {
      "All": "ALL", 
      "BCCG": "BCCG", 
      "BGS": "BGS", 
      "ISA": "ISA", 
      "KSA": "KSA", 
      "PSA": "PSA", 
      "SGC": "SGC"
    }
  }
}
```