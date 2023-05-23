import React, { useState } from "react";
import { useSelector } from "react-redux";
import HotelLayout from "./HotelLayout";
import HotelDetails from "./HotelDetails";
import { Navbar } from "./Navbar";
const HotelPage = () => {
  return (
    <div>
      <Navbar />
      <div >
       
      </div>

      <div id="hotel-list">
       <HotelDetails />
      </div>
    </div>
  )
};

export default HotelPage;
