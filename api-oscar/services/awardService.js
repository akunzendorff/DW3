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

  async Create(title, candidates, winner) {
    try {
      const newAward = new Award({
        title,
        candidates,
        winner,
      });

      await newAward.save();
    } catch (error) {
      console.log(error);
    }
  }

  async Delete(id) {
    try {
      await Award.findByIdAndDelete(id);
      console.log(`Prêmio com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }

  async updateAward(id, data) {
    try {
      await Award.findByIdAndUpdate(id, data, { new: true });
      console.log(`Prêmio com a id: ${id} foi atualiado.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new awardService();
