export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export enum Gender {
  Female = "female",
  Male = "male",
  Other = "other",
}

export type SecuredPatient = Omit<Patient, "ssn">;
export type NewPatient = Omit<Patient, "id">;
