import actorService from "../services/actorService.js";
import { ObjectId } from "mongodb";

const getAllActors = async (req, res) => {
  try {
    const actors = await actorService.getAll();
    res.status(200).json({ actors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const createActor = async (req, res) => {
  try {
    const { name, birthdate, movies_ids } = req.body;
    await actorService.create(name, birthdate, movies_ids);
    res.status(201).json({ message: "Ator criado com sucesso." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao criar ator." });
  }
};

const deleteActor = async (req, res) => {
  try {
    const id = req.params.id;

    if (ObjectId.isValid(id)) {
      await actorService.delete(id);
      res.sendStatus(204);
    } else {
      res.status(400).json({ error: "ID inválido." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao deletar ator." });
  }
};

const updateActor = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    if (ObjectId.isValid(id)) {
      await actorService.update(id, data);
      res.status(200).json({ message: "Ator atualizado com sucesso." });
    } else {
      res.status(400).json({ error: "ID inválido." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao atualizar ator." });
  }
};

export default { getAllActors, createActor, deleteActor, updateActor };
