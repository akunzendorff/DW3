import Director from "../models/directors.js";

class directorService {
  async getAll() {
    try {
      const directors = await Director.find();
      return directors;
    } catch (error) {
      console.log(error);
    }
  }

  async create(name, birthdate, movies_ids, nominations) {
    try {
      const newDirector = new Director({
        name,
        birthdate,
        movies_ids,
        nominations,
      });

      await newDirector.save();
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      await Director.findByIdAndDelete(id);
      console.log(`Diretor com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      await Director.findByIdAndUpdate(id, data, { new: true });
      console.log(`Diretor com a id: ${id} foi atualizado.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new directorService();
