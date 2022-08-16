const { getMovies, postMovies } = require('./controllers');
const router = require('express').Router();

router.get('/', getMovies);
router.get('/movies', getMovies);
router.post('/search', postMovies);

module.exports = router;