const path = require('path');
// const fetch = require('node-fetch')


const getMovies = (req, res) => {
    console.log("Get is Working");
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'movies.html'));
};


const postMovies = (req, res) => {
    console.log('Post is Working:', req.body.name);



    // fetchMovies(req.body)
    //     .then(res => res.json())
    //     .then(data => res.json(data))
    //     .then(data => console.log('fetched data:', data))
    //     .catch(err => console.log(err))


    // res.sendFile('test passed!')
    res.redirect('/movies');
}


// const fetchMovies = (query) => {
//     const apiKey = '6d16c97231f4eadcb5ba5ab27aa3338d'
//     const query = editQuery(query)
//     const url = editUrl(query, apiKey)
//     fetch(url);
// }

// const editQuery = (query) => {
//     return query.replaceAll(' ', '+')
// }

// const editUrl = (query, apiKey) => {
//     return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
// }


module.exports = { getMovies, postMovies };