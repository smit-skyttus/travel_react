import React, { useEffect } from "react";
import Background from "../Header/Background";
import Index from "../Header";
import SearchBar from "../Header/SearchBar";
import '../Styles/main-home.css';
import TopCities from "./TopCities";
import Media from "./Media";
import Footer from "./Footer";
import HeadoutPicks from "./HeadoutPicks";

const MainHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="App">
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
      <TopCities />
      <HeadoutPicks />
      <Media />
      <Footer />
    </div>
  );
};

export default MainHome;
