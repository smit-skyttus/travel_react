import React from 'react'
import './Styles/arrow.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const Left = (props:any) => {
    const { style, onClick } = props;
    return (
      <div
        className="slick-arrow-left"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
       
        <div className="fas fa-arrow-left left-arrow" >
        <FaArrowLeft/>
        </div>
        
      </div>
    );
  };

  export const Right = (props:any) => {
    const { style, onClick } = props;
    return (
      <div
        className="slick-arrow-right"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
      
        <div className="fas fa-arrow-right right-arrow">
        <FaArrowRight/></div> 
      </div>
    );
  };

  