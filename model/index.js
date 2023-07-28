const mongoose = require('mongoose');
const { DB } = require('../config/index');
const DB_URL = `mongodb://${DB.DB_HOST}:${DB.DB_PORT}/${DB.DB_PORT}`;
const site = require('./siteModel')
async function connect() {
    try {
        await mongoose.connect(DB_URL);
    } catch (error) {
        console.log(error);
    }
}

connect();

module.exports = { site };