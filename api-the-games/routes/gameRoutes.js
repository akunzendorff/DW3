import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// EndPoint para listar todos os games (rota)
gameRoutes.get("/games", gameController.getAllGames);

// EndPoint para cadastrar um jogo
gameRoutes.post("/games", gameController.createGame);

// EndPoint para deletar um jogo
gameRoutes.delete("/games/:id", gameController.deleteGame);

export default gameRoutes;
