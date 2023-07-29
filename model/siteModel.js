const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    nameSite: { type: String, required: true, min: 1, max: 64 },
    status: { type: String, required: true, min: 1, max: 8 },
    dateOfStartingServer: { type: Date, required: true },
    dateOfEndingContract: { type: Date, required: true }
});
siteSchema.path('dateOfEndingContract').index({ expires: 1 });

module.exports = mongoose.model("sites", siteSchema);