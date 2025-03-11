import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: String,
  platform: String,
  year: Number,
  price: Number,
});

// Criação da coleção games no banco de dados
const Game = mongoose.model("Game", gameSchema);

export default Game;
