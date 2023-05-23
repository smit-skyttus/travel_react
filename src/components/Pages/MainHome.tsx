import React, { useEffect } from "react";
import Background from "../Header/Background";
import Index from "../Header";
import SearchBar from "../Header/SearchBar";
import '../Styles/main-home.css';
import TopCities from "../TopCities";
import Footer from "../Footer";
import Media from "../Media";

import { Outlet } from "react-router-dom";

const MainHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Index />
      <p id="external">
        {" "}
        <span role="img" aria-label="Warn">
          👷
        </span>{" "}
        Currently Building{" "}
        <span role="img" aria-label="Warn">
          🛠💪🔧
        </span>{" "}
        New York City{" "}
        <span role="img" aria-label="Warn">
          🌆
        </span>{" "}
        <span role="img" aria-label="Warn">
          🦇
        </span>
      </p>
      
      <Outlet />
      <Media/>
      <Footer/>
    </div>  
  );
};


export default MainHome;
