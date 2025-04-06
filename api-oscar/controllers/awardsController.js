import awardService from "../services/awardService.js";
import { ObjectId } from "mongodb";

const getAllAwards = async (req, res) => {
  try {
    const awards = await awardService.getAll();
    res.status(200).json({ awards: awards });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const createAward = async (req, res) => {
  try {
    const { title, candidates, winner } = req.body; 
    await awardService.Create(title, candidates, winner); 
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor. " });
  }
};

const deleteAward = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      awardService.Delete(id);
      res.sendStatus(204); 
    } else {
      res.sendStatus(400); 
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default { getAllAwards, createAward, deleteAward };
