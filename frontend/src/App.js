import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [articles, setArticles] = useState([]);
    const [nom, setNom] = useState('');
    const [prix, setPrix] = useState('');

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = () => {
        axios.get('/api/articles')
            .then(response => setArticles(response.data))
            .catch(error => console.error('Erreur lors de la récupération des articles:', error));
    };

    const ajouterArticle = () => {
        axios.post('/api/articles', { nom, prix })
            .then(response => {
                setArticles([...articles, response.data]);
                setNom('');
                setPrix('');
            })
            .catch(error => console.error('Erreur lors de l\'ajout de l\'article:', error));
    };

    const supprimerArticle = (id) => {
        axios.delete(`/api/articles/${id}`)
            .then(() => {
                setArticles(articles.filter(article => article._id !== id));
            })
            .catch(error => console.error('Erreur lors de la suppression de l\'article:', error));
    };

    return (
        <div className="App">
            <h1>Panier d'Achat</h1>
            <div>
                <input value={nom} onChange={e => setNom(e.target.value)} placeholder="Nom de l'article" />
                <input value={prix} onChange={e => setPrix(e.target.value)} placeholder="Prix de l'article" />
                <button onClick={ajouterArticle}>Ajouter</button>
            </div>
            <ul>
                {articles.map(article => (
                    <li key={article._id}>
                        {article.nom} - ${article.prix} x {article.quantite}
                        <button onClick={() => supprimerArticle(article._id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
