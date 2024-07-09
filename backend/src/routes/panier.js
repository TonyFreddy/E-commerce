const express = require('express');
const { ajouterArticle, supprimerArticle, mettreAJourQuantite, obtenirArticles } = require('../Controllers/panierController');
const router = express.Router();

router.post('/articles', ajouterArticle);
router.delete('/articles/:id', supprimerArticle);
router.put('/articles/:id', mettreAJourQuantite);
router.get('/articles', obtenirArticles);

module.exports = router;
