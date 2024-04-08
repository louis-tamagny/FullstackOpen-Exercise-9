import patients from '../../data/patients';
import { Patient, NewPatient, NonSensitivePatient } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): Patient[] => {
  return patients;
};

const getPatient = (id: string): Patient | null => {
  const patient = patients.find((p) => p.id == id) || null;
  return patient;
};

const getSecuredPatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    };
  });
};

const addPatient = (newPatient: NewPatient): Patient => {
  const id = uuid();
  const patient = {
    id,
    ...newPatient,
    entries: [],
  };
  patients.push(patient);
  return patient;
};

export { getPatients, getPatient, getSecuredPatients, addPatient };
