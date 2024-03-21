import express from "express";
import { getDiagnoses } from "../services/diagnosisService";

const diagnosesRouter = express.Router();

diagnosesRouter.get("/", (_req, res) => {
  res.status(200).json(getDiagnoses());
});

export default diagnosesRouter;
