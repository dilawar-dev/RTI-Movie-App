import {MovieType} from '@/types/Movies';
import {createSlice} from '@reduxjs/toolkit';

interface State {
  prefetcted: boolean;
  data: MovieType[];
}

const initialState: State = {
  prefetcted: false,
  data: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    resetMovies: () => initialState,
    setPrefetched: (state, action: {payload: boolean}) => {
      state.prefetcted = action.payload;
    },
    setMovies: (state, action: {payload: MovieType[]}) => {
      state.data = action.payload;
    },
  },
});

export const {resetMovies, setPrefetched, setMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
