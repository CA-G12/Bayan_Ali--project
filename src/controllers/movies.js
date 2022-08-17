const path = require('path');
const fetch = require('node-fetch')


const getMovies = (req, res) => {
    console.log("Get is Working");

    res.sendFile(path.join(__dirname, '..', '..', 'public', 'movies.html'));
};

const getApiMovies = (req, res) => {
    // fetch movies from other endpoint
    // send it to front
}



const postMovies = (req, res) => {
    console.log('Post is Working:', req.body.name);
    const query = req.body.name
    fetchMovies(query)
        .then(data => data.json())
        .then(data => res.send(data))

        // .then(data => console.log(data))
        // .then(data => res.redirect('/movies'))
        // .then(data => console.log('fetched data:', data))
        .catch(err => console.log(err))


}


const fetchMovies = (query) => {
    const apiKey = '6d16c97231f4eadcb5ba5ab27aa3338d'
    const editedQuery = editQuery(query)
    const url = editUrl(editedQuery, apiKey)
    return fetch(url);
}

const editQuery = (query) => {
    return query.replaceAll(' ', '+')
}

const editUrl = (query, apiKey) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
}


module.exports = { getMovies, getApiMovies, postMovies };