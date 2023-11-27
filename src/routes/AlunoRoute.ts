import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const AlunoRoute = Router();

AlunoRoute.get("/", AlunoController.getAll);

AlunoRoute.post("/insert", AlunoController.insert);

AlunoRoute.patch("/update", AlunoController.update);

AlunoRoute.delete("/delete/:matricula", AlunoController.delete);

export default AlunoRoute;