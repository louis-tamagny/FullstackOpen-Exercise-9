import axios from 'axios';

export const getDiaries = async () => {
  const res = await axios.get('http://localhost:3000/api/diaries');
  return res.data;
};

export const addNewDiary = async (
  date: string,
  comment: string,
  weather: string,
  visibility: string,
) => {
  const res = await axios.post('http://localhost:3000/api/diaries', {
    date,
    weather,
    visibility,
    comment,
  });
  return res.data;
};
