import express from "express";
const actorRoutes = express.Router();
import actorController from '../controllers/actorController.js';

actorRoutes.post('/create', actorController.createActor);
actorRoutes.get('/', actorController.getAllActors);
actorRoutes.put('/update/:id', actorController.updateActor);
actorRoutes.delete('/delete/:id', actorController.deleteActor);

export default actorRoutes;
