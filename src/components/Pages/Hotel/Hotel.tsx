import React from "react";
import "../../Styles/hotel.css";
import HotelCard from "../HotelCard";
import { useSelector } from "react-redux";

const Hotel = (props: any) => {
  const {hotel:{hotelList}}:any = useSelector(state=>state);
  return (
    <div>
      <div id="filter-section">
        <h3>Filters</h3>
      </div>

      <div id="hotel-list">
       {
        hotelList.map((curEle:any,index:number) => {
          return(
            <HotelCard key={index} hotel={curEle} />
          )
        })
       }
      </div>
    </div>
  );
};

export default Hotel;
