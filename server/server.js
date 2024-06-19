const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 5173;

app.use(bodyParser.json());

app.get('api/tracks/search', async (req, res) => {
    const {query} = req.query;

    try {
        const response = await axios.get(`https://api.soundcloud.com/tracks?q=${query}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error searching tracks:', error);
        res.status(500).json({error: 'Failed to fetch tracks'});
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});