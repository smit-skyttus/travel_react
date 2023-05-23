import React, { useState } from "react";
import "../Styles/hotel.css";
import FormatPrice from '../helpers/FormatPrice';
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const HotelCard = (props:any) => {
  // const [isOpen,setIsOpen] =useState(fa/);
  const res = props.hotel;
  // console.log(res);
  return (
    <div className="card">
      <NavLink to={`/hotel/${props.hotel.hotelId}`} state ={res }  >
      <img
        src={props.hotel.hotelImage}
        className="card-image"
      />
      </NavLink>
      <div className="card-content">
        <h3 className="card-title">{props.hotel.hotelName}</h3>
        <p className="card-description">
          
          <FormatPrice price={props.hotel.hotelPrice} />

        </p>
        
      </div>
    </div>
  );
};

export default HotelCard;
