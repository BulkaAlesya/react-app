import axios from 'axios';

const url = `http://localhost:4000/movies?limit=50`;
export const getAllMovies =  async () => {
  const response = await axios.get(url);
  return response.data.data;
}

export const getSotredMovies = async (sortBy: string) => {
  const response = await axios.get(`${url}&sortBy=${sortBy}&sortOrder=asc`);
  return response.data.data;
}

export const getMoviesByGenre = async (genre: string) => {
  const response = await axios.get(`${url}&filter=${genre}`);
  return response.data.data;
}
