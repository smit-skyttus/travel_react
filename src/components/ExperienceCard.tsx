import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ExperienceCard = (props: any) => {
  const [listed, setListed] = useState(true);

  const url = props.url;
  const {
    discount,
    cashback,
    currency,
    lastPrice,
    ratings,
    stars,
    city,
    about,
    showMore,
    highlight,
  } = props;

  let style;

  if (listed) {
    style = {
      color: "#f43361",
      fontSize: "20px",
      position: "absolute",
      right: "10px",
      top: "15px",
      fontWeight: "700",
      transition: "transform 0.3s ease-in-out",
    };
  } else {
    style = {
      color: "white",
      fontSize: "20px",
      position: "absolute",
      right: "10px",
      top: "15px",
      fontWeight: "400",
      transition: "transform 0.3s ease-in-out",
    };
  }

  return (
    <NavLink to="/">
    <div className="card" >
      <img className="exp-card-img" src={props.url} alt="Card image cap"  />

      <div className="card-body">
        <h5 className="card-title">{props.city}</h5>
      </div>
    </div>
    </NavLink>
    // <div className="exp-card">
    //     {showMore ? (
    //       <div className="show-more">
    //         <p>View All</p>
    //       </div>
    //     ) : (
    //       <React.Fragment>
    //         <div
    //           className="exp-card-img"
    //           style={{
    //             backgroundImage: url
    //           }}
    //         >
    //           {cashback ? (
    //             <div className="cashback">
    //               <p>{`${props.cashback}% CASHBACK`}</p>
    //             </div>
    //           ) : null}
    //           {highlight ? (
    //             <div className="cashback">
    //               <p>{highlight}</p>
    //             </div>
    //           ) : null}
    //           <div className="exp-heart">
    //             <i
    //               className="far fa-heart"
    //               role="button"
    //             //   onClick={addtoWishlist}
    //             //   style={style}
    //             />
    //           </div>
    //         </div>
    //         <div className="exp-content-wrap">
    //           <div className="exp-info-wrap">
    //             {city ? (
    //               <React.Fragment>
    //                 <p id="exp-city">{city}</p>
    //                 <p id="exp-description">{props.description}</p>
    //               </React.Fragment>
    //             ) : (
    //               <React.Fragment>
    //                 <p id="exp-about">{about}</p>
    //                 <p id="exp-description">{props.description}</p>
    //               </React.Fragment>
    //             )}
    //           </div>
    //           <div>
    //             <div className="price-section">
    //               <div className="div">
    //                 {discount ? (
    //                   <div className="discount">
    //                     <p>
    //                       <span>
    //                         <i className="fas fa-gift" />
    //                       </span>
    //                       {`upto ${props.discount}% off`}
    //                     </p>
    //                   </div>
    //                 ) : (
    //                   <div className="discount" />
    //                 )}
    //                 <div className="ratings-section">
    //                   {stars ? (
    //                     <div className="stars">
    //                       <p id="stars-p">
    //                         {/* {parseFloat(Math.round(stars * 100) / 100).toFixed(
    //                           1
    //                         )} */}
    //                         <span id="star"> &#9733;</span>
    //                       </p>
    //                     </div>
    //                   ) : (
    //                     <div
    //                       style={{
    //                         width: '25px',
    //                         height: '20px',
    //                         borderRadius: '50%',
    //                         background:
    //                           'linear-gradient(340deg, #ffbb58, #f5c684)',
    //                         paddingTop: '3px'
    //                       }}
    //                     >
    //                       <p id="stars-p">
    //                         <span> &#9733;</span>
    //                       </p>
    //                     </div>
    //                   )}
    //                   {ratings ? (
    //                     ratings === 1 ? (
    //                       <p id="ratings">{`(${props.ratings} Rating)`}</p>
    //                     ) : (
    //                       <p id="ratings">{`(${
    //                         props.ratings
    //                       } Ratings)`}</p>
    //                     )
    //                   ) : (
    //                     <p id="ratings">Newly Arrived</p>
    //                   )}
    //                 </div>
    //               </div>
    //               <div className="price">
    //                 <p>from</p>
    //                 {lastPrice && props.city === 'DUBAI' ? (
    //                   <p id="last-price">{`${props.currency} ${
    //                     props.lastPrice
    //                   }`}</p>
    //                 ) : null}
    //                 {lastPrice && props.city !== 'DUBAI' ? (
    //                   <p id="last-price">{`${props.currency}${
    //                     props.lastPrice
    //                   }`}</p>
    //                 ) : null}
    //                 {currency === 'AED' ? (
    //                   <p id="price">{`${props.currency} ${
    //                     props.price
    //                   }`}</p>
    //                 ) : (
    //                   <p id="price">{`${props.currency}${
    //                     props.price
    //                   }`}</p>
    //                 )}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </React.Fragment>
    //     )}
    //   </div>
  );
};

export default ExperienceCard;
