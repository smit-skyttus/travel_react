import {configureStore} from '@reduxjs/toolkit';
import {citySlice} from './slices/citySlice';

const store = configureStore({
    reducer:{
        city : citySlice.reducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export default store;