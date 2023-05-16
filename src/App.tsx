import React,{useEffect,useState} from 'react';
import PageRoutes from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import { getCityList } from './store/action';
import { AppDispatch } from './store';
import { getTopCities } from './store/actions';

function App() {
  const dispatch = useDispatch<AppDispatch>();
    useEffect(()=> {
       dispatch(getCityList())
       dispatch(getTopCities());
    },[])
  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}

export default App;
