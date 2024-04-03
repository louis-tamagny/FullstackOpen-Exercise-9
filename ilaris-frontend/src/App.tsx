import { useEffect, useState } from 'react';
import { DiaryEntry } from './types';
import axios from 'axios';

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/diaries')
      .then((res) => setDiaries(res.data));
  }, []);

  return (
    <>
      <div>
        {diaries.map((diary) => (
          <div key={diary.id}>
            <h3>{diary.date}</h3>
            <p>
              visibility: {diary.visibility}
              <br />
              weather: {diary.weather}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
