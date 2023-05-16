import React from 'react'
import Slider from 'react-slick'
import { Left, Right } from './Arrow';
import ExperienceCard from './ExperienceCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/headout-picks.css';


const PickedSlider = (props:any) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <Right />,
        prevArrow: <Left />
      };
  return (
    <Slider {...settings}>
        {props.pickedData &&
          props.pickedData.map(
            ({
              id,
              city,
              url,
              description,
              currency,
              currentPrice,
              ratings,
              stars,
              discount,
              cashback,
              lastPrice,
              about
            }:any) => (
              <ExperienceCard
                key={id}
                city={city}
                about={about}
                url={url}
                description={description}
                currency={currency}
                price={currentPrice}
                ratings={ratings}
                stars={stars}
                discount={discount}
                cashback={cashback}
                lastPrice={lastPrice}
              />
            )
          )}
      </Slider>
  )
}

export default PickedSlider
