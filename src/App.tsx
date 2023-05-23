import React,{useEffect} from 'react';
import './App.css';
import PageRoutes from './Routes';
import getCityList, { getHotelListByCityId } from './store/actions';

import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppDispatch } from './store';
import { getTopCities } from './store/actions';
import Index from './components/Header';


function App() {

  const dispatch =useDispatch<AppDispatch>();
  // const {city}:any = useSelector(state=>state);
  // console.log(topCities);

  useEffect(() => {
    dispatch(getCityList());
    dispatch(getTopCities());
    
  }, [])
  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}

export default App;
