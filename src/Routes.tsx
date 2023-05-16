import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHome from "./components/Pages/MainHome";
import CityPage from "./components/Pages/CityPage";
import { useSelector } from "react-redux";

const PageRoutes = () => {
  
  const { city:{cityList} }: any = useSelector((state) => state);
  
  const s = '/'
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainHome} />
        {/* <Route path= "/City" Component={CityPage} /> */}
         {
          cityList.map((curEle:any) => {
            const  p=s.concat(curEle.cityName);
            return(
              <Route path={p}  Component={() => <CityPage {...curEle}/>} />
            )
          } )
         }
        
         
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
