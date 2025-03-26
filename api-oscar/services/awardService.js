import Award from "../models/awards.js";

class awardService {
  async getAll() {
    try {
      const awards = await Award.find();
    } catch (error) {
      console.log(error);
    }
  }

  async Create(title, winner) {
    try {
        const newAward = new Award({
            title,
            winner
        })

        await newAward.save()
    } catch (error) {
        console.log(error)
    }
  }

  async Delete(id){
    try {
        await Award.findByIdAndDelete(id)
        console.log(`Prêmio com a id: ${id} foi excluído.`)
    } catch (error) {
        console.log(error)
    }
  }

}

export default new awardService()