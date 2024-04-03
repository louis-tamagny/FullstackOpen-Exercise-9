import { DiaryEntry } from '../types';

const DiaryList = ({ diaries }: { diaries: DiaryEntry[] }) => {
  return (
    <div>
      <h2>Diaries</h2>
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
  );
};

export default DiaryList;
