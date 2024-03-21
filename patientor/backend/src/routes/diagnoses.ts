import express from "express";
import diagnoses from "../../data/diagnoses";

const diagnosesRouter = express.Router();

diagnosesRouter.get("/", (_req, res) => {
  res.status(200).json(diagnoses);
});

export default diagnosesRouter;
