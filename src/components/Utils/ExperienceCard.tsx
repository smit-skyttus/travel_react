import React, { useState } from "react";

const ExperienceCard = (props: any) => {
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

  let style = {
    color: "#f43361",
    fontSize: "20px",
    position: "absolute",
    right: "10px",
    top: "15px",
    fontWeight: "700",
    transition: "transform 0.3s ease-in-out",
  };
  return (
    // <div classNameNameName="exp-card">
    //   {showMore ? (
    //     <div classNameName="show-more">
    //       <p>View All</p>
    //     </div>
    //   ) : (
    //     <React.Fragment>
    //       <div
    //         classNameName="exp-card-img"
    //         style={{
    //           backgroundImage:
    //             "https://images.unsplash.com/photo-1683966292865-c07ceecdbc3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    //         }}
    //       >
    //         {props.cashback ? (
    //           <div classNameName="cashback">
    //             <p>{`${props.cashback}% CASHBACK`}</p>
    //           </div>
    //         ) : null}
    //         {highlight ? (
    //           <div classNameName="cashback">
    //             <p>{highlight}</p>
    //           </div>
    //         ) : null}
    //         <div classNameName="exp-heart">
    //           <i
    //             classNameName="far fa-heart"
    //             role="button"
    //             // onClick={this.addtoWishlist}
    //             // style={style}
    //           />
    //         </div>
    //       </div>
    //       <div classNameName="exp-content-wrap">
    //         <div classNameName="exp-info-wrap">
    //           {city ? (
    //             <React.Fragment>
    //               <p id="exp-city">{city}</p>
    //               <p id="exp-description">{props.description}</p>
    //             </React.Fragment>
    //           ) : (
    //             <React.Fragment>
    //               <p id="exp-about">{about}</p>
    //               <p id="exp-description">{props.description}</p>
    //             </React.Fragment>
    //           )}
    //         </div>
    //         <div>
    //           <div classNameName="price-section">
    //             <div classNameName="div">
    //               {discount ? (
    //                 <div classNameName="discount">
    //                   <p>
    //                     <span>
    //                       <i classNameName="fas fa-gift" />
    //                     </span>
    //                     {`upto ${props.discount}% off`}
    //                   </p>
    //                 </div>
    //               ) : (
    //                 <div classNameName="discount" />
    //               )}
    //               <div classNameName="ratings-section">
    //                 {/* {stars ? (
    //                   <div classNameName="stars">
    //                     <p id="stars-p">
    //                       {parseFloat(Math.round(stars * 100) / 100).toFixed(1)}
    //                       <span id="star"> &#9733;</span>
    //                     </p>
    //                   </div>
    //                 ) : (
    //                   <div
    //                     style={{
    //                       width: "25px",
    //                       height: "20px",
    //                       borderRadius: "50%",
    //                       background:
    //                         "linear-gradient(340deg, #ffbb58, #f5c684)",
    //                       paddingTop: "3px",
    //                     }}
    //                   >
    //                     <p id="stars-p">
    //                       <span> &#9733;</span>
    //                     </p>
    //                   </div>
    //                 )}
    //                 {ratings ? (
    //                   ratings === 1 ? (
    //                     <p id="ratings">{`(${this.props.ratings} Rating)`}</p>
    //                   ) : (
    //                     <p id="ratings">{`(${this.props.ratings} Ratings)`}</p>
    //                   )
    //                 ) : (
    //                   <p id="ratings">Newly Arrived</p>
    //                 )} */}
    //               </div>
    //             </div>
    //             <div classNameName="price">
    //               <p>from</p>
    //               {lastPrice && props.city === "DUBAI" ? (
    //                 <p id="last-price">{`${props.currency} ${props.lastPrice}`}</p>
    //               ) : null}
    //               {lastPrice && props.city !== "DUBAI" ? (
    //                 <p id="last-price">{`${props.currency}${props.lastPrice}`}</p>
    //               ) : null}
    //               {currency === "AED" ? (
    //                 <p id="price">{`${props.currency} ${props.price}`}</p>
    //               ) : (
    //                 <p id="price">{`${props.currency}${props.price}`}</p>
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </React.Fragment>
    //   )}
    // </div>
    <div className="card">
      <img className="exp-card-img" src={props.url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.city}</h5>
        
      </div>
    </div>
  );
};

export default ExperienceCard;
