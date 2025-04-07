import express from "express";
const movieRoutes = express.Router();
import movieController from '../controllers/movieController.js';

movieRoutes.post('/create', movieController.createMovie);
movieRoutes.get('/', movieController.getAllMovies);
movieRoutes.get('/:id', movieController.getMovieById);
movieRoutes.put('/update/:id', movieController.updateMovie);
movieRoutes.delete('/delete/:id', movieController.deleteMovie);

export default movieRoutes;
