const express = require('express');
const path = require('path');
const itemToSale = require('../datas/itemToSale');
const news = require('../datas/news');
const photos = require('../datas/photos');
const serverless = require("serverless-http");


const app = express();
const router = express.Router();

app.use(express.json());
 
app.use('/shoppingList', (req, res, next) => {
    res.status(200).json(itemToSale);
    next();
})
app.use('/news', (req, res, next) => {
    res.status(200).json(news);
    next();
})
app.use('/photos', (req, res, next) => {
    res.status(200).json(photos);
    next();
})
router.get('/test',(req,res) => {
  res.json({
      hello: "test!"
    });
    next();

})
app.post('/contact', (req, res, next) => {
    console.log(req.body);
    res.status(201).json(req.body);
    next();
  });
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(`/.netlify/functions/app`, router);

module.exports = app;
module.exports.handler = serverless(app);