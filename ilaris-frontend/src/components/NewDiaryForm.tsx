import { useState } from 'react';
import { DiaryEntry } from '../types';
import { addNewDiary } from '../diaryService';

interface newDiaryProps {
  setDiaries: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
  diaries: DiaryEntry[];
}

const NewDiaryForm = ({ setDiaries, diaries }: newDiaryProps) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleAddNewDiary = (event: React.SyntheticEvent) => {
    event.preventDefault();

    addNewDiary(date, comment, weather, visibility)
      .then((data) => {
        setDate('');
        setComment('');
        setVisibility('');
        setWeather('');
        setDiaries(diaries.concat(data));
      })
      .catch((error) => {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
      });
  };
  return (
    <div>
      <h2>New diary entry</h2>
      {errorMessage !== '' && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={(e) => handleAddNewDiary(e)}>
        <label htmlFor="date-input">date </label>
        <input
          id="date-input"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <br />
        <label htmlFor="visibility-input">visibility </label>
        <input
          id="visibility-input"
          type="dropdown"
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
        ></input>
        <br />
        <label htmlFor="weather-input">weather </label>
        <input
          id="weather-input"
          type="text"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        ></input>
        <br />
        <label htmlFor="comment-input">comment </label>
        <input
          id="comment-input"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewDiaryForm;
