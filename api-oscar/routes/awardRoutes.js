import express from "express";
const awardRoutes = express.Router();
import awardController from "../controllers/awardsController.js";

awardRoutes.get("/awards", awardController.getAllAwards);
awardRoutes.post("/awards", awardController.createAward);
awardRoutes.delete("/awards/:id", awardController.deleteAward);

export default awardRoutes;
