import movieService from '../services/movieService.js';

const createMovie = async (req, res) => {
  try {
    const movie = await movieService.create(req.body);
    res.status(201).json({ message: "Filme criado com sucesso.", movie });
  } catch (error) {
    console.error("Erro ao criar filme:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await movieService.getMovieById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Filme não encontrado' });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await movieService.update(req.params.id, req.body);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    await movieService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { createMovie, getAllMovies, getMovieById, deleteMovie, updateMovie}
