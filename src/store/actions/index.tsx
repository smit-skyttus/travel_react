import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCityList = createAsyncThunk("getCityList",async()=>{
    const{data} = await axios.get("https://localhost:7252/api/City");
    return data;
})

const getTopCities = createAsyncThunk("getTopCities",async()=>{
    const{data} = await axios.get("https://localhost:7252/api/City/GetAllTopCities");
    return data;
})

export default getCityList;
export {getTopCities};