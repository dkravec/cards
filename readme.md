# Cards
Created by Daniel Kravec, on August 12th, 2022.
## Version History

### 1.0 (1.2022.08.12)
- Uses search api (tested+works)
- Uses cardimage api (untested)
- created cardschema and ownedcardsschema 

### 1.0 (2.2022.08.13)
- created private and public user schemas
- added mongo connection
- added more routes to api 
    - /auth/newUser
        - client can create a new user, with username, password, description.
    - /auth/login
        - client can login, and will send token to frontend for later reconnection.
    - /auth/checkToken
        - makes sure frontend can connect with the token and userid it has.
    - /get/search <- /search
- added /auth/checktoken 
    - used for /atuh/checkToken
    - will be used later for additional features with other routes

### 1.0 (3.2022.08.17)
- added indexes to collection-cards-schema
    - basic card information (and what it is in the database)
- created saveCard Function, which will import data and put it into the database.

### 1.0 (4.2022.08.18)
- added a route for css. (and added to html)
    - added html, body and then p colours.
- added a proper title to html.
- added defer to script loading.
- html/script.js
    - Updated putDefaults().
        - added a select form to ele, which will let you select a currency.
        - makes sure your default currency is in the list, if not itll keep USD.
    - runs putDefaults() at top of script.
    - added firstRunDefaults().
        - saves USD as default currency.
    - added selectNewCurrency().
        - saves new currency to localstorage.
- /get/search.
    - now takes in userinput.
    - if no searchterm, it returns.
    - runs saveMassiveCollection().
- moved /utils/auth/checktoken/card/saveCard -> /utils/card/saveCard.
    - now also looks for the same card (if it was already added to the database).
- added /utils/card/saveMassiveCollection.
    - it will run after a search, and save every single card inside the database.

## ideas

pro set 1990 #400 hockey

[sport] [set] [year] [number]