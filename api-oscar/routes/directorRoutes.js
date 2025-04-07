import express from "express";
const directorRoutes = express.Router();
import directorController from '../controllers/directorController.js';

directorRoutes.post('/create', directorController.createDirector);
directorRoutes.get('/', directorController.getAllDirectors);
directorRoutes.put('/update/:id', directorController.updateDirector);
directorRoutes.delete('/delete/:id', directorController.deleteDirector);

export default directorRoutes;
