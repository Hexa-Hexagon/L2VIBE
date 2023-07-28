const express = require('express');
const MODEL = require('./model/');
const app = express();

app.use(express.json());

app.get('/', async(req, res) => {
    try {
        const sites = MODEL.site.find();
        res.json(sites);
    } catch (error) {
        res.status(500).send(error);
    }
})


module.exports = app;