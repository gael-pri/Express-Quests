const express = require("express");
const app = express();
app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

const validateMovie = require("./middlewares/validateMovie");
app.post("/api/movies", validateMovie, movieControllers.postMovie);

app.put("/api/movies/:id", movieControllers.updateMovie);

const userControllers = require("./controllers/userControllers");
app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);

const validateUser = require("./middlewares/validateUser");
app.post("/api/users", validateUser, userControllers.postUser);

app.put("/api/users/:id", userControllers.updateUser);

module.exports = app;
