import {createSlice } from '@reduxjs/toolkit';
import getCityList, { getTopCities } from '../actions';

const initialState = {
    cityList:[],
}

export const citySlice = createSlice({
  name: "city",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCityList.fulfilled, (state, action) => {
        state.cityList = action.payload;
    });
    builder.addCase(getTopCities.fulfilled, (state, action) => {
        state.cityList = action.payload;
    });
  },
  reducers: {}
})

export default citySlice.reducer;