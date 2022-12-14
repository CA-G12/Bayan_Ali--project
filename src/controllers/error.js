const path = require('path');


const handleClintError = (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', "..", 'public', '404.html'));
}

const handleServerError = (err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, '..', "..", 'public', '500.html'));
}

module.exports = { handleClintError, handleServerError }