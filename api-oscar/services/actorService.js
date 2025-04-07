import Actor from "../models/actors.js";

class actorService {
  async getAll() {
    try {
      const actors = await Actor.find();
      return actors;
    } catch (error) {
      console.log(error);
    }
  }

  async create(name, birthdate, movies_ids, nominations) {
    try {
      const newActor = new Actor({
        name,
        birthdate,
        movies_ids,
        nominations,
      });

      await newActor.save();
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      await Actor.findByIdAndDelete(id);
      console.log(`Ator com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      await Actor.findByIdAndUpdate(id, data, { new: true });
      console.log(`Ator com a id: ${id} foi atualizado.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new actorService();
