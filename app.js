const express = require('express');
const MODEL = require('./model/');
const app = express();

app.use(express.json());

module.exports = app;