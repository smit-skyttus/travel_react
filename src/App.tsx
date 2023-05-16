import React,{useEffect,useState} from 'react';
import PageRoutes from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import { getCityList } from './store/action';
import { AppDispatch } from './store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
    useEffect(()=> {
       dispatch(getCityList())
    },[])
  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}

export default App;
