import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Background = () => {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  const backgroundImagesData = [
    {
      id: 1,
      url:
        'https://cdn-imgix-open.headout.com/desktop-flaps/cashback-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
    },
    {
      id: 2,
      url:
        'https://cdn-imgix-open.headout.com/desktop-flaps/about-01-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
    },
    {
      id: 3,
      url:
        'https://cdn-imgix-open.headout.com/flaps/non-city-specific/desktop/experience-desktop.png?auto=compress&fm=webp&h=501&crop=faces&fit=min'
    }
  ];
  return (
    <div className="slider-div ">
        <Slider {...settings}>
          {backgroundImagesData &&
            backgroundImagesData.map(({ id, url }) => (
              <img className='background-image-div' src={url} key={id}  />
            ))}
        </Slider>
      </div>
  )
}



export default Background
