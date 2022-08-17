const request = require('supertest');
const app = require("../src/app");

test('/movies should return the movies page', (done) => {
    request(app)
    .get('/movies')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
        if (err) return done(err);
        done();
    })
})
test('/apiMovies should return the movies page with default items', (done) => {
    request(app)
    .get('/apiMovies')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
        if (err) return done(err);
        done();
    })
})