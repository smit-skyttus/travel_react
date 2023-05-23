import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHome from "./components/Pages/MainHome";
import { useSelector } from "react-redux";
import CityPage from "./components/Pages/CityPage";
import Home from "./components/Pages/Home";
import HotelPage from "./components/Pages/Hotel/HotelPage";
const city = [
  "Gangtok",
  "Surat",
  "Cochin",
  "Madurai",
  "Chittaurgarh",
  "Kozhikode",
  "Dharamshala",
  "Goa",
  "Daman",
  "Mathura",
  "Amritsar",
  "Matheran",
  "Bangalore",
  "Haridwar",
  "Mumbai",
  "Shimla",
  "Valsad",
  "Jajpur",
  "Nainital",
  "Tirupati",
  "Delhi",
  "Pondicherry",
  "Thiruvananthapuram",
  "Manali",
  "Agra",
  "Darjeeling",
  "Jammu",
  "Vapi",
  "Kutch",
  "Shirdi",
  "Guwahati",
  "Lonavala",
  "Siliguri",
  "Chennai",
  "Allahabad",
  "Mysore",
  "Mussoorie",
  "Shillong",
  "Rishikesh",
  "Khandala",
  "Dalhousie",
  "Kullu",
  "Havelock Island",
  "Udaipur",
  "Alibag",
  "Dwarka",
  "Kolkata",
  "Pushkar",
  "Gulmarg",
  "Aizawl",
  "Chandigarh",
  "Cuttack",
  "Ujjain",
  "Ahmedabad",
  "Mount Abu",
  "Nashik",
  "Bodh Gaya",
  "Pune",
  "Somnath",
  "Srinagar",
  "Hyderabad",
  "Diu",
];
const PageRoutes = () => {
  const slash = "/";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainHome}>
          <Route path="" element={<Home />} />
          {city.map((curEle: any, index: number) => {
            const p = slash.concat(curEle);
            return (
              <Route
                key={index}
                path={p}
                Component={() => <CityPage city={curEle} />}
              />
            );
          })}
          
        </Route>
        <Route path="hotel/:hotelid" Component={HotelPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
