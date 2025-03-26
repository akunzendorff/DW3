import express from "express";
import mongoose from "./config/db-connection.js";
import Awards from "./models/awards.js";

const app = express;

import awardRoutes from "./routes/awardRoutes.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", awardRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/api-oscar");

app.get("/", (req, res) => {
  const awards = [
    {
      title: "Melhor Filme",
      winner: "Ainda estou aqui",
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
