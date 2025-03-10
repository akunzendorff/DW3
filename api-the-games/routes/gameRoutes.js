import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// EndPoint para listar todos os games (rota)
gameRoutes.get("/games", gameController.getAllGames);

export default gameRoutes;
