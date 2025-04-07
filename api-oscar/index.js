import express from "express";
import awardRoutes from "./routes/awardRoutes.js"
import actorRoutes from "./routes/actorRoutes.js"
import directorRoutes from "./routes/directorRoutes.js"
import movieRoutes from "./routes/movieRoutes.js"

import mongoose from './config/db-connection.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/awards", awardRoutes);
app.use("/actors", actorRoutes);
app.use("/directors", directorRoutes);
app.use("/movies", movieRoutes);

const port = 8000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}`);
  }
});
