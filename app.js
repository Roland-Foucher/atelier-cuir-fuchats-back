const express = require('express');
const path = require('path');
const itemToSale = require('./datas/itemToSale');
const news = require('./datas/news');
const photos = require('./datas/photos');


const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
 
app.use('/api/shoppingList', (req, res, next) => {
    res.status(200).json(itemToSale);
    next();
})
app.use('/api/news', (req, res, next) => {
    res.status(200).json(news);
    next();
})
app.use('/api/photos', (req, res, next) => {
    res.status(200).json(photos);
    next();
})
app.post('/api/contact', (req, res, next) => {
    console.log(req.body);
    res.status(201).json(req.body);
    next();
  });
app.use('/assets', express.static(path.join(__dirname, 'assets')));

module.exports = app;