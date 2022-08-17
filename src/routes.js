const { getMovies, getApiMovies, postMovies, getLanding } = require('./controllers');
const router = require('express').Router();

// router.get('/', getMovies);
router.get('/apiMovies', getApiMovies);
router.get(['/movies', '/'], getMovies);
router.post('/search', postMovies);

module.exports = router;


