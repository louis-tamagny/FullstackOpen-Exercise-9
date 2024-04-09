import { useEffect, useState } from 'react';
import { Gender, Patient } from '../../types';
import patientService from '../../services/patients';
import { useParams } from 'react-router-dom';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const genderToIcon = (gender: Gender) => {
  return gender === Gender.Female ? (
    <FemaleIcon />
  ) : gender === Gender.Male ? (
    <MaleIcon />
  ) : (
    <></>
  );
};

const PatientPage = () => {
  const [patient, setPatient] = useState<Patient>();
  const patientId = useParams().id;

  useEffect(() => {
    const setPatientData = async (id: string) => {
      const patientData = await patientService.getOne(id);
      setPatient(patientData);
    };
    if (patientId) {
      setPatientData(patientId);
    }
  }, [patientId]);

  return (
    <div>
      {patient && (
        <div>
          <h2>
            {patient.name} {genderToIcon(patient.gender)}
          </h2>
          <p>
            ssn: {patient.ssn}
            <br />
            occupation: {patient.occupation}
          </p>
          <h3>entries</h3>
          {patient.entries.map((entry) => (
            <div key={entry.id}>
              {entry.date}
              <i>{entry.description}</i>
              <ul>
                {entry.diagnosisCodes &&
                  entry.diagnosisCodes.map((code) => (
                    <li key={code}>{code}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientPage;
