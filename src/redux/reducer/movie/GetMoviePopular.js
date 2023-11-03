import { createSlice } from "@reduxjs/toolkit";

const initialState = { movies: [] };

const popularSlicer = createSlice({
  name: "movieAuth",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovie } = popularSlicer.actions;

export default popularSlicer.reducer;
