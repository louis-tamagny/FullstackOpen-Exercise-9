import patients from "../../data/patients";
import { Patient, SecuredPatient, NewPatient } from "../types";
import { v1 as uuid } from "uuid";

const getPatients = (): Patient[] => {
  return patients;
};

const getSecuredPatients = (): SecuredPatient[] => {
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
  };
  patients.push(patient);
  return patient;
};

export { getPatients, getSecuredPatients, addPatient };
