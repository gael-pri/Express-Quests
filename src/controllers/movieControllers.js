const movies = [/* ... */];

const database = require("../../database");

const getMovies = (req, res) => {
  database
    .query("select * from movies")
    .then(([movies]) => {
      res.json(movies); // use res.json instead of console.log
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  const movie = movies.find((movie) => movie.id === id);

  if (movie != null) {
    res.json(movie);
  } else {
    res.status(404).send("Not Found");
  }
};

module.exports = {
  getMovies,
  getMovieById,
};
