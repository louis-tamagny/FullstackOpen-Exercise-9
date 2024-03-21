import express from "express";
import { getSecuredPatients } from "../services/patientService";

const patientRouter = express.Router();

patientRouter.get("/", (_req, res) => {
  res.status(200).send(getSecuredPatients());
});

export default patientRouter;
