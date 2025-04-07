import awardService from "../services/awardService.js";

const getAllAwards = async (req, res) => {
  try {
    const awards = await awardService.getAll();
    res.status(200).json({ awards });
  } catch (error) {
    console.error("Erro ao buscar prêmios:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const createAward = async (req, res) => {
  try {
    const { category, year, nominees, winner } = req.body;

    await awardService.create({ category, year, nominees, winner });

    res.status(201).json({ message: "Prêmio criado com sucesso." });
  } catch (error) {
    console.error("Erro ao criar prêmio:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};


const deleteAward = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || id.length !== 24) {
      return res.status(400).json({ error: "ID inválido." });
    }

    await awardService.delete(id);
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar prêmio:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const updateAward = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updated = await awardService.update(id, updateData);
    res.status(200).json(updated);
  } catch (error) {
    console.error("Erro ao atualizar prêmio:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default { getAllAwards, createAward, deleteAward, updateAward };
