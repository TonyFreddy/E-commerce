const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prix: { type: Number, required: true },
    quantite: { type: Number, default: 1 },
});

module.exports = mongoose.model('article', articleSchema);
