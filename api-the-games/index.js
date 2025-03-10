import express from "express";
import mongoose from "mongoose";
import Games from "./models/games.js";
const app = express();

// IMportando as rotas (endpoints) de Games
import gameRoutes from "./routes/gameRoutes.js";

// Configurando o express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", gameRoutes);

// Iniciando a conexão om o banco de dados MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games");

// Rota principal
app.get("/", (req, res) => {
  //   res.send("API iniciada com sucesso!");
  const games = [
    {
      title: "Game 1",
      year: 2020,
      plataform: "PC",
      price: 20,
    },
    {
      title: "Game 2",
      year: 2024,
      plataform: "PlayStation 5",
      price: 200,
    },
  ];
  res.json(games);
});

//Iniciando o servidor
const port = 8000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}`);
  }
});
