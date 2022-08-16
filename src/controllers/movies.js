const path = require('path');

const getMovies = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'movies.html'));
};


const postMovies = (req, res) => {
    console.log('query arrived backend:', req);
    // console.log(req.body.name, req.body.image_url);
    // res.sendFile('test passed!')
    // res.redirect('/movies');
};

module.exports = { getMovies, postMovies };