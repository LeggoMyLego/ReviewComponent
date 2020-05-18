const express = require('express');
const bodyParser = require('body-parser');
const Reviews = require('../controllers/reviews');
const url = require('url');

const app = express();

app.use(express.static('public/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  next();
});

app.get('/api/products/:product_id/reviews', (req, res) => {
  const query = url.parse(req.url, true).query;
  const filters = {
    ...query,
    ...req.params
  };

  Reviews.getReviewsForProduct(filters)
    .then((reviews) => {
      if (reviews.count === undefined) {
        throw 'Reviews not found';
      } else {
        res.status(200).json(reviews);
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.put('/api/products/:product_id/reviews/:review_id', (req, res) => {
  const { product_id: productId, review_id: reviewId } = req.params;
  const data = req.body;

  Reviews.updateReviewForProduct(productId, reviewId, data)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/api/products/:product_id/reviews/:review_id', (req, res) => {
  const { product_id: productId, review_id: reviewId } = req.params;

  Reviews.getReview(productId, reviewId)
    .then((review) => {
      res.json(review);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

module.exports = app;
