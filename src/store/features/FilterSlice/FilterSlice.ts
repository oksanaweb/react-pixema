import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

const filterSlice = createSlice({
  name: "filterMovies",
  initialState,
  reducers: {},
});

export default filterSlice.reducer;
