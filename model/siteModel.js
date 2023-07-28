const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    nameSite: { type: String, required: true, min: 1, max: 64 },
    status: { type: String, required: true, min: 1, max: 8 },
    dateOfStartingServer: { type: Date, required: true },
    dateOfEndingContract: { type: Date, required: true }
});

module.exports = mongoose.model("sites", siteSchema);