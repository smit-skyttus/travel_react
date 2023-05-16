import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Left, Right } from "../Arrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CityCard from "./CityCard";
import { useSelector} from "react-redux/es/hooks/useSelector";
import { getTopCities } from "../../store/actions";
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import { AppDispatch } from "../../store";

const CitySlider = () => {
  const { topCities }: any = useSelector((state) => state);
  console.log(topCities);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <Right />,
    prevArrow: <Left />,
  }; 
  return (
    <Slider {...settings}>
      {topCities.topCities &&
        topCities.topCities.map(({ cityId, cityName, cityImage, cityDescription }:any) => (
          <Link to={{ pathname: `/cities/${cityName}` }} key={cityId} className="link">
            <CityCard city={cityName} url={cityImage} description={cityDescription} />
          </Link>
        ))}
    </Slider>
  );
};
const topCitiesData = [
  {
    id: 1,
    city: "New York",
    route: "new-york",
    description: "Take a bite of the Big Apple",
    url: "https://cdn-imgix.headout.com/cities/new-york/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 2,
    city: "Las Vegas",
    route: "las-vegas",
    description: "An offer you can't refuse",
    url: "https://cdn-imgix.headout.com/cities/las-vegas/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 3,
    city: "Rome",
    route: "rome",
    description: "Roam the eternal city",
    url: "https://cdn-imgix.headout.com/cities/rome/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 4,
    city: "Paris",
    route: "paris",
    description: "C'est La Vie",
    url: "https://cdn-imgix.headout.com/cities/paris/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 5,
    city: "London",
    route: "london",
    description: "For everything hunky-dory",
    url: "https://cdn-imgix.headout.com/cities/london/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 6,
    city: "Dubai",
    route: "dubai",
    description: "An Oasis like no other",
    url: "https://cdn-imgix.headout.com/cities/dubai/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 7,
    city: "Barcelona",
    route: "barcelona",
    description: "Hacer Peunte a Catalunya",
    url: "https://cdn-imgix.headout.com/cities/barcelona/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 8,
    city: "Madrid",
    route: "madrid",
    description: "Discover the hear of Spain",
    url: "https://cdn-imgix.headout.com/cities/madrid/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 9,
    city: "Singapore",
    route: "singapore",
    description: "The Lion City",
    url: "https://cdn-imgix.headout.com/cities/singapore/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 10,
    city: "Venice",
    route: "venice",
    description: "Enjoy and have fun in the City",
    url: "https://cdn-imgix.headout.com/cities/venice/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 11,
    city: "Milan",
    route: "milan",
    description: "Enjoy and have fun in the City",
    url: "https://cdn-imgix.headout.com/cities/milan/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 12,
    city: "Naples",
    route: "naples",
    description: "Enjoy and have fun in the City",
    url: "https://cdn-imgix.headout.com/cities/naples/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 13,
    city: "Budapest",
    route: "budapest",
    description: "Enjoy and have fun in the City",
    url: "https://cdn-imgix.headout.com/cities/budapest/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 14,
    city: "Edinburg",
    route: "edinburg",
    description: "Enjoy and have fun in the City",
    url: "https://cdn-imgix.headout.com/cities/edinburgh/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
  {
    id: 15,
    city: "Florence",
    route: "florence",
    description: "Enjoy and have fun in the City",
    url: "https://cdn-imgix.headout.com/cities/florence/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min",
  },
];
export default CitySlider;
