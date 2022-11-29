import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { Movie } from '../body/movie-list';
import { getAllMovies, getMoviesByGenre, getSotredMovies } from './movies-api-handler';

export interface MoviesState {
  value: Movie[];
  selected: Movie | null;
}
export const fetchAllMovies = createAsyncThunk(
  'movies/fetchAllMovies',
  async () => await getAllMovies()
)

export const fetchSotredMovies = createAsyncThunk(
  'movies/fetchSortedMovies',
  async (sortBy: string) => await getSotredMovies(sortBy)
)

export const fetchMoviesByGenre = createAsyncThunk(
  'movies/fetchMoviesByGenre',
  async (genre: string) => await getMoviesByGenre(genre)
)

const initialState = {
  value: [],
  selected: null,
} as MoviesState;

export const movieSlice = createReducer(
  initialState, (builder) => {
    builder.addCase(fetchAllMovies.fulfilled, (state, action) => {
      state.value = [... action.payload];
    });
    builder.addCase(fetchSotredMovies.fulfilled, (state, action) => {
      state.value = [... action.payload];
    });
    builder.addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
      state.value = [... action.payload];
    });
  }
);





