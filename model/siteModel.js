const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    nameSite: { type: String, required: true, min: 1, max: 64 },
    status: { type: String, required: true, min: 1, max: 8 },
    difficulty: { type: Number, required: true },
    version: { type: String, required: true },
    dateOfStartingServer: { type: Date, required: true },
    dateOfEndingContract: { type: Date, required: true, expires: 1 }
});

module.exports = mongoose.model("sites", siteSchema);