import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCityList = createAsyncThunk("getCityList", async () => {
  const { data } = await axios.get("https://localhost:7252/api/City");
  return data;
});
