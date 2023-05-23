// import '../node_modules/font-awesome/css/font-awesome.min.css';
import React from "react";
import "../../Styles/navbar.css";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch()
  
  
  

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="https://i.ibb.co/FqKTWS4/tth3.png" alt="not visible" />
        </Link>
      </div>
      <div className="icons">
        <Link to="/flight" className="iconCard">
          <i className="fa fa-plane"></i>
          <h1>Flight</h1>
        </Link>
        <Link to="/hotel" className="iconCard">
          <i className="fa fa-hotel"></i>
          <h1>Hotel</h1>
        </Link>
        <Link to="" className="iconCard">
          <i className="fa fa-home"></i>
          <h1>Home Style</h1>
        </Link>
     
        <Link to="" className="iconCard">
          <i className="fa fa-train"></i>
          <h1>Train</h1>
        </Link>
        <Link to="" className="iconCard">
          <i className="fa fa-bus"></i>
          <h1>Bus</h1>
        </Link>
        <Link to="" className="iconCard">
          <i className="fa fa-car"></i>
          <h1>Car</h1>
        </Link>
        <Link to="" className="iconCard">
          <i className="fa fa-money"></i>
          <h1>Forex</h1>
        </Link>
        <Link to="" className="iconCard">
          <i className="fa fa-plane"></i>
          <h1>Charter Plane</h1>
        </Link>
      
      </div>

      <div className="login" id="loginpro">
        
      </div>




{/* menu button for smallscreens */}


<div className="Menu">

  <input type="checkbox" id="check" />
  <label htmlFor="check">

  <i className="fa fa-bars">
</i>
  </label>



<ul className="dropmenu">

<li>
<Link to="/flight" className="iconCard">
          <i className="fa fa-plane">
            <span>Flight</span>
          </i>
          
        </Link>
</li>


<li>
<Link to="/hotel" className="iconCard">
          <i className="fa fa-hotel">
            <span>
            Hotel
            </span>
          </i>
          
        </Link>
</li>



        
      
  

        <li>
        <Link to="" className="iconCard">
          <i className="fa fa-home">
          <span>Home Style</span>
          </i>
         
        </Link>
        </li>
      

     

        <li>
        <Link to="" className="iconCard">
          <i className="fa fa-train">
          <span>Train</span>
          </i>
          
        </Link>
        </li>
     
    

       

        <li>
        <Link to="" className="iconCard">
          <i className="fa fa-bus">
          <span>Bus</span>
          </i>
          
        </Link>

        </li>
     
     

        <li>
        <Link to="" className="iconCard">
          <i className="fa fa-car"><span>Car</span></i>
          
        </Link>
        </li>

       

       
</ul>


 
      


</div>





    </header>
  );
};
