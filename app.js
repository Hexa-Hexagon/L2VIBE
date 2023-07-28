const express = require('express');
const MODEL = require('./model/');
const app = express();

app.use(express.json());

app.get('/', async(req, res) => {
    try {
        const sites = await MODEL.site.find();
        res.json(sites);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/', async(req, res) => {
    try {
        const site = await MODEL.site.create(req.body);
        res.json(site);
    } catch (error) {
        res.status(500).send(error);
    }
})
app.put('/', async(req, res) => {
    try {
        const body = req.body;
        const site = await MODEL.site.findOneAndUpdate(body);
        res.json(site);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.delete('/', async(req, res) => {
    try {
        const body = req.body;
        const site = await MODEL.site.findOneAndDelete(body);
        res.json(site);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = app;