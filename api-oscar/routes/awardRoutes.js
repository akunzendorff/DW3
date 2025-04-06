import express from "express";
const awardRoutes = express.Router();
import awardController from "../controllers/awardsController.js";

awardRoutes.get("/", awardController.getAllAwards);
awardRoutes.post("/create", awardController.createAward);
awardRoutes.delete("/delete/:id", awardController.deleteAward);

export default awardRoutes;
