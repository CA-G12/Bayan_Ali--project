const { getMovies, getApiMovies, postMovies } = require('./controllers');
const router = require('express').Router();

router.get('/apiMovies', getApiMovies);
router.get('/movies', getMovies);
router.post('/search', postMovies);

module.exports = router;


