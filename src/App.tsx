import React,{useEffect} from 'react';
import './App.css';
import PageRoutes from './Routes';
import getCityList, { getTopCities } from './store/actions';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppDispatch } from './store';

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
