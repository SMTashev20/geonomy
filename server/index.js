const axios = require('axios').default;
const cache = require('./cache');
const express = require('express');
const cors = require('cors');
const path = require('path');

if (process.env.MODE === 'dev')
    require('dotenv').config();

const NINJA_API_KEY = process.env.NINJA_API_KEY;
const NINJA_ENDPOINT = process.env.NINJA_ENDPOINT;

const app = express();

app.use(cors({ origin: '*' }));

app.get('/country/:name', (req, res) => {
    cache.fetchCountryData(req.params.name, NINJA_ENDPOINT, NINJA_API_KEY)
        .then(data => res.json(data))
        .catch(e => res.status(500).json({ error: e.toString() }));
});

app.use('/', express.static('public'));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(process.env.PORT || 8080, () => {
    console.log('server is running');
})