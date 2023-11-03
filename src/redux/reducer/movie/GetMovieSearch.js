import { createSlice } from "@reduxjs/toolkit";

const initialState = { search: [] };

const searchSlicer = createSlice({
  name: "movieAuth",
  initialState,
  reducers: {
    setSearchMovie: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearchMovie } = searchSlicer.actions;

export default searchSlicer.reducer;
