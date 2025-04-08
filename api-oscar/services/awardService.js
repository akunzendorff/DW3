import Award from "../models/awards.js";

class awardService {
  async getAll() {
    try {
      const awards = await Award.find();
      return awards;
    } catch (error) {
      console.log(error);
    }
  }

  async create(data) {
    try {
      const newAward = new Award(data);
      await newAward.save();
      return newAward;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }  

  async delete(id) {
    try {
      await Award.findByIdAndDelete(id);
      console.log(`Prêmio com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      const updatedAward = await Award.findByIdAndUpdate(id, data, { new: true });
      console.log(`Prêmio com a id: ${id} foi atualizado.`);
      return updatedAward;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }  
}

export default new awardService();
