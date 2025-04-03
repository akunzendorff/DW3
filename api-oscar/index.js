import express from "express";
import mongoose from "./config/db-connection.js";
import Awards from "./models/awards.js";
const app = express();

import awardRoutes from "./routes/awardRoutes.js"

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/awards", awardRoutes);

app.get("/", (req, res) => {
  const awards = [
    {
      title: "Melhor filme internacional",
      winner: "Ainda estou aqui.",
    },
    {
      title: "Melhor filme",
      winner: "Anora",
    },
  ];
  res.json(awards);
});

const port = 8000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}`);
  }
});
