const { getMovies, getApiMovies, postMovies } = require('./movies');
const { handleClintError, handleServerError } = require('./error')



module.exports = { handleClintError, handleServerError, getMovies, getApiMovies, postMovies };