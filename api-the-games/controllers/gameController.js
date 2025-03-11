import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// Função para listar os jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // requisição feita com sucesso, código 200
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Função para cadastrar os jogos
const createGame = async (req, res) => {
  try {
    const { title, platform, year, price } = req.body; // Captura os valores
    await gameService.Create(title, platform, year, price); // Cadastra no banco
    res.sendStatus(201); // Código 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor. " });
  }
};

// Função para deletar jogos
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204); // Código 204 (NO CONTENT) - excluiu e não tem retorno
    } else {
      res.sendStatus(400); // Código 400 (BAD REQUEST) - requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default { getAllGames, createGame, deleteGame };
