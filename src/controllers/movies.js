const path = require('path');
const fetch = require('node-fetch')


const getMovies = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'movies.html'));
};

const getApiMovies = (req, res) => {
    // fetch movies from other endpoint
    // send it to front
    console.log();
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}`
    fetch(url)
        .then(data => data.json())
        .then(data => res.json(data))
        .catch(err => console.log(err))

}


const postMovies = (req, res) => {
    const query = req.body.name
    fetchMovies(query)
        .then(data => data.json())
        .then(data => res.json(data))
        .catch(err => console.log(err))
}


const fetchMovies = (query) => {
    const editedQuery = editQuery(query)
    const url = editUrl(editedQuery)
    return fetch(url);
}

const editQuery = (query) => {
    return query.replaceAll(' ', '+')
}

const editUrl = (query) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}`
}


module.exports = { getMovies, getApiMovies, postMovies };