var express = require('express');
var router = express.Router();

var LivroController = require('../controllers/livros');

router.get('/', (req, res) => {
  if (req.query.charater) {
    LivroController.listByCharacter(req.query.charater)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));

    return
  }

  if (req.query.genre) {
    LivroController.listByGenre(req.query.genre)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));

    return
  }

  LivroController.list()
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err));
});

router.get('/genres', function(req, res, next) {
  LivroController.listGenres()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/characters', function(req, res, next) {
  LivroController.listCharacters()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:id', function(req, res, next) {
  LivroController.findById(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/', function(req, res, next) {
  LivroController.insert(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.delete('/:id', function(req, res, next) {
  LivroController.remove(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* Atualiza o registo com identificador id */
router.put('/:id', function(req, res, next) {
  LivroController.update(req.params.id, req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
