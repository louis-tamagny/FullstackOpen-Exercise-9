import { Gender, NewPatient } from './types';

const isString = (object: unknown): object is string => {
  return typeof object === 'string' || object instanceof String;
};

const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error('Incorrect or missing name');
  }
  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error('Incorrect or missing date of birth');
  }
  return dateOfBirth;
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error('Incorrect or missing occupation');
  }
  return occupation;
};

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error('Incorrect or missing ssn');
  }
  return ssn;
};

const isGender = (object: string): object is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(object);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender');
  }
  return gender;
};

const toNewPatient = (data: unknown): NewPatient => {
  if (!data || typeof data !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (
    'name' in data &&
    'gender' in data &&
    'dateOfBirth' in data &&
    'occupation' in data &&
    'ssn' in data
  ) {
    const newPatient: NewPatient = {
      name: parseName(data.name),
      gender: parseGender(data.gender),
      dateOfBirth: parseDateOfBirth(data.dateOfBirth),
      occupation: parseOccupation(data.occupation),
      ssn: parseSsn(data.ssn),
      entries: [],
    };
    return newPatient;
  }
  throw new Error('Incorrect data: some fields are missing');
};

export { toNewPatient };
