import { createSlice } from "@reduxjs/toolkit";

const initialState = { moviesDetail: "" };

const detailSlicer = createSlice({
  name: "movieDetailAuth",
  initialState,
  reducers: {
    setDetailMovie: (state, action) => {
      state.moviesDetail = action.payload;
    },
  },
});

export const { setDetailMovie } = detailSlicer.actions;

export default detailSlicer.reducer;