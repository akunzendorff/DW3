import gameService from "../services/gameService.js";

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

export default { getAllGames };
