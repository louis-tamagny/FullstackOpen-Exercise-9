import { useState } from 'react';
import { DiaryEntry, Visibility, Weather } from '../types';
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
        setDiaries(diaries.concat(data));
      })
      .catch((error) => {
        if (error instanceof Error) {
          setErrorMessage(error.message);
          setInterval(() => setErrorMessage(''), 5000);
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
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <br />
        visibility:
        {Object.values(Visibility).map((v) => (
          <>
            <input
              id={'visibility-input-' + v}
              type="radio"
              key={v}
              name="visibility"
              value={v}
              onChange={(e) => setVisibility(e.target.value)}
            />
            <label htmlFor={'visibility-input-' + v}>{v}</label>
          </>
        ))}
        <br />
        weather:
        {Object.values(Weather).map((v) => (
          <>
            <input
              id={'weather-input-' + v}
              type="radio"
              key={v}
              name="weather"
              value={v}
              onChange={(e) => setWeather(e.target.value)}
            />
            <label htmlFor={'weather-input-' + v}>{v}</label>
          </>
        ))}
        <br />
        <label htmlFor="comment-input">comment </label>
        <input
          id="comment-input"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <br />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewDiaryForm;
