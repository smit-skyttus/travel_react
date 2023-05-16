import React from "react";

const CityCard = (props:any) => {
    // console.log(props.url);
  return (
    <div className="city-card-wrapper">
      <div className="city-card">
        <img
          className="city-card-img"
          src={props.url}
        //   style={{
        //     backgroundImage: `${props.url}`,
        //   }}
        />
        <div className="city-details">
          <div id="triangle" />
          <p>{props.city}</p>
          <div id="city-hidden">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
