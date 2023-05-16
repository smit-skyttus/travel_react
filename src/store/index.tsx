import {configureStore} from '@reduxjs/toolkit';
import {citySlice} from './slices/citySlice';
import {topCitiesSlice }from './slices/topCitiesSlice';

const store = configureStore({
    reducer:{
        city : citySlice.reducer,
        topCities : topCitiesSlice.reducer,
    }
})
export type AppDispatch = typeof store.dispatch;
export default store;   