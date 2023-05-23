import React,{useEffect, useState} from "react";
import Hotel from "./Hotel/Hotel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { getHotelListByCityId, getTopCities } from "../../store/actions";
import Index from "../Header";

const CityPage = (props:any) => {
  
  const dispatch =useDispatch<AppDispatch>()
  // console.log(props);
 
  
    
  useEffect(() =>{
    dispatch(getHotelListByCityId(props.city));
  },[])
  
  return (
    <Hotel />
  );
};


export default CityPage;
