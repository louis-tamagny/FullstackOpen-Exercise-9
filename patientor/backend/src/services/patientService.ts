import patients from "../../data/patients";
import { Patient, SecuredPatient } from "../types";

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

export { getPatients, getSecuredPatients };
