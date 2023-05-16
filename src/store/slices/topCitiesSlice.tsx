import {createSlice } from '@reduxjs/toolkit';
import { getTopCities } from '../actions';

const initialState = {
    topCities:[],
}

export const topCitiesSlice = createSlice({
  name: "topCities",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTopCities.fulfilled, (state, action) => {
        state.topCities = action.payload;
    });
  },
  reducers: {}
})

export default topCitiesSlice.reducer;