import { createSlice } from "@reduxjs/toolkit";
import { getCityList } from "../action";

const initialState = {
  cityList: [],
  isLoading: true,
  errorMessage: "",
};

export const citySlice = createSlice({
  name: "Rishabh",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCityList.fulfilled, (state, action) => { 
        state.cityList = action.payload;
      })
      
  },
});

export default citySlice.reducer;
