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


## ideas

pro set 1990 #400 hockey

[sport] [set] [year] [number]