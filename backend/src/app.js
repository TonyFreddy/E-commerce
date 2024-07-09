const express = require('express');
const mongoose = require('mongoose');
const panier = require('./routes/panier');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/E-commerce')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Failed to connect to MongoDB', err));

app.use('/api', panier);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
