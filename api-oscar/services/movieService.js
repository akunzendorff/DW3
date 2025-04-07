import Movie from "../models/movies.js";

class movieService {
  async getAll() {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log(error);
    }
  }

  async create(title, description, release_date, director_id, actors_ids) {
    try {
      const newMovie = new Movie({
        title,
        description,
        release_date,
        director_id,
        actors_ids,
      });

      await newMovie.save();
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      await Movie.findByIdAndDelete(id);
      console.log(`Filme com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }

  async updateMovie(id, data) {
    try {
      await Movie.findByIdAndUpdate(id, data, { new: true });
      console.log(`Filme com a id: ${id} foi atualizado.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new movieService();
