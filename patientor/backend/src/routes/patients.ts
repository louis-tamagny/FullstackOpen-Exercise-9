import express from "express";
import { addPatient, getSecuredPatients } from "../services/patientService";
import { NewPatient } from "../types";

const patientRouter = express.Router();

patientRouter.get("/", (_req, res) => {
  res.status(200).send(getSecuredPatients());
});

patientRouter.post("/", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newPatient: NewPatient = req.body;
  res.status(200).send(addPatient(newPatient));
});

export default patientRouter;
