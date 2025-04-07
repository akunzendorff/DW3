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

  async create(data) {
    try {
      const newMovie = new Movie(data);
      await newMovie.save();
      return newMovie; 
    } catch (error) {
      console.log(error);
      throw error; 
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

  async update(id, data) {
    try {
      await Movie.findByIdAndUpdate(id, data, { new: true });
      console.log(`Filme com a id: ${id} foi atualizado.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new movieService();
