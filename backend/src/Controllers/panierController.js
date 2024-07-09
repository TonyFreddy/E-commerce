const Article = require('../models/article');

exports.ajouterArticle = async (req, res) => {
    const { nom, prix, quantite } = req.body;
    const article = new Article({ nom, prix, quantite });
    await article.save();
    res.status(201).send(article);
};

exports.supprimerArticle = async (req, res) => {
    await article.findByIdAndDelete(req.params.id);
    res.status(204).send();
};

exports.mettreAJourQuantite = async (req, res) => {
    const article = await Article.findById(req.params.id);
    article.quantite = req.body.quantite;
    await article.save();
    res.send(article);
};

exports.obtenirArticles = async (req, res) => {
    const articles = await Article.find();
    res.send(articles);
};
