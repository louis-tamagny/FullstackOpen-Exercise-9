import { useEffect, useState } from 'react';
import { DiaryEntry } from './types';
import NewDiaryForm from './components/NewDiaryForm';
import DiaryList from './components/DiaryList';
import { getDiaries } from './diaryService';

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getDiaries().then((data) => setDiaries(data));
  }, []);

  return (
    <div>
      <NewDiaryForm diaries={diaries} setDiaries={setDiaries} />
      <DiaryList diaries={diaries} />
    </div>
  );
}

export default App;
