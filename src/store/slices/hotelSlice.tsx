import {createSlice } from '@reduxjs/toolkit';
import { getHotelListByCityId } from '../actions';

const initialState = {
    hotelList:[],
}

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getHotelListByCityId.fulfilled, (state, action) => {
        state.hotelList = action.payload;
    });
    
  },
  reducers: {}
})

export default hotelSlice.reducer;