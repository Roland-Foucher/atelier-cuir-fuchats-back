const express = require('express');
const path = require('path');
const itemToSale = require('../datas/itemToSale');
const news = require('../datas/news');
const photos = require('../datas/photos');
const serverless = require("serverless-http");


const app = express();
const router = express.Router();

app.use(express.json());
 
router.get('/shoppingList', (req, res, next) => {
    res.status(200).json(itemToSale);
    next();
})
router.get('/news', (req, res, next) => {
    res.status(200).json({news : 'news'});
    next();
})
router.get('/photos', (req, res, next) => {
    res.status(200).json(photos);
    next();
})
router.get('/test',(req,res, next) => {
  res.status(200).json({
      hello: "test!"
    });
    next();

})
router.post('/contact', (req, res, next) => {
    console.log(req.body);
    res.status(201).json(req.body);
    next();
  });
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(`/.netlify/functions/app`, router);

module.exports = app;
module.exports.handler = serverless(app);