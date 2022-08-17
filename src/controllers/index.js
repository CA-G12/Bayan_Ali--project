const { getMovies, getApiMovies, postMovies } = require('./movies');
const { handleClintError, handleServerError } = require('./error')
const getLanding = require('./landing')


module.exports = { handleClintError, handleServerError, getMovies, getApiMovies, postMovies, getLanding };