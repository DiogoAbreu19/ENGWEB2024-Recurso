var express = require('express');
var router = express.Router();
var axios = require('axios');

const api_url = 'http://localhost:17000';

router.get('/', function(req, res, next) {
  axios.get(api_url + '/books')
    .then(response => {
      res.render('index', { livros: response.data });
    })
    .catch(error => {
      res.render('error', { error: error });
    });
});

router.get('/:id', function(req, res, next) {
  axios.get(api_url + '/books/' + req.params.id)
    .then(response => {
      res.render('livro', { livro: response.data });
    })
    .catch(error => {
      res.render('error', { error: error });
    });
});

module.exports = router;