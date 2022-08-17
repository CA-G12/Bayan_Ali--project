const { getMovies, postMovies } = require('./movies');
const { clientErrors, serverErrors } = require('./error')


module.exports = { clientErrors, serverErrors, getMovies, postMovies };