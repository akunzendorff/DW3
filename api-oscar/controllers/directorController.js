import directorService from "../services/directorService.js";
import { ObjectId } from "mongodb";

const getAllDirectors = async (req, res) => {
  try {
    const directors = await directorService.getAll();
    res.status(200).json({ directors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const createDirector = async (req, res) => {
  try {
    const { name, birthdate, movies_ids } = req.body;
    await directorService.create(name, birthdate, movies_ids);
    res.status(201).json({ message: "Diretor criado com sucesso." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao criar diretor." });
  }
};

const deleteDirector = async (req, res) => {
  try {
    const id = req.params.id;

    if (ObjectId.isValid(id)) {
      await directorService.delete(id);
      res.sendStatus(204);
    } else {
      res.status(400).json({ error: "ID inválido." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao deletar diretor." });
  }
};

const updateDirector = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    if (ObjectId.isValid(id)) {
      await directorService.update(id, data);
      res.status(200).json({ message: "Diretor atualizado com sucesso." });
    } else {
      res.status(400).json({ error: "ID inválido." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao atualizar diretor." });
  }
};

export default { getAllDirectors, createDirector, deleteDirector, updateDirector };
