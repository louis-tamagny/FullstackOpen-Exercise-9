import express from 'express';
import { addPatient, getSecuredPatients } from '../services/patientService';
import { NewPatient } from '../types';
import { toNewPatient } from '../utils';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  res.status(200).send(getSecuredPatients());
});

patientRouter.post('/', (req, res) => {
  try {
    const newPatient: NewPatient = toNewPatient(req.body);
    res.status(200).send(addPatient(newPatient));
  } catch (error: unknown) {
    let errMessage = '';
    if (error instanceof Error) {
      errMessage = error.message;
    }
    res.status(400).send(errMessage);
  }
});

export default patientRouter;
