import { Router } from "express";
import TaskController from "./app/controllers/TaskController";

const routes = Router();

routes.post("/Task", TaskController.store);

export default routes;
