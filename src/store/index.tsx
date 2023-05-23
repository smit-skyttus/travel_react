import {configureStore} from '@reduxjs/toolkit';
import {citySlice} from './slices/citySlice';
import {topCitiesSlice }from './slices/topCitiesSlice';
import {hotelSlice} from './slices/hotelSlice';

const store = configureStore({
    reducer:{
        city : citySlice.reducer,
        topCities : topCitiesSlice.reducer,
        hotel: hotelSlice.reducer
    }
})
export type AppDispatch = typeof store.dispatch;
export default store;   