const express = require('express');
const app = express();
const PORT = process.env.PORT || 2002;
// const cors = require('cors');
const mongoose = require('mongoose');
const requests = require('./requests');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/requests', requests)

// app.use(cors({
//     origin: [ 
//         'https://interact.novapro.net', 
//         'http://localhost:5500', 
//         'https://interact.dkravec.repl.co',
//         'http://localhost:3000',
//         'http://127.0.0.1:5500',
//         'https://interact-analytics.novapro.net'
//     ],
//     credentials: true
// }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/html/script.js');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));