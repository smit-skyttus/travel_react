import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Select, { ActionMeta } from "react-select";

import '../Styles/search.css';

const city = [
  "Select City",
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

const SearchBar = (props: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.pathname.replace("/", "");
  console.log(result);
  
  const [selectOption,setSelectedOption] = useState('');
  const handleChange = (event:any) => {
    setSelectedOption(event.target.value);
    changeUrl(event.target.value);
  };
  
  const history = useNavigate();

  const changeUrl = (option: any) => {
    history(`/${option}`);
  };
  useEffect(() => {
    if(result!== selectOption){
      setSelectedOption(result);
    }
  },[result])
  return (
    
    // <Select
    //   styles={props.style}
      
    //   value={setSelectedOption}
    //   onChange={handleSelectionChange}
    //   options={myArray}
    //   // getOptionLabel={(option: any) => option.cityName}
    //   // getOptionValue={(option: any) => option.cityName}
    //   className="city-select-dropdown"
    // />
    <select className="search" value={selectOption} placeholder="Select City"  onChange={(e)=>handleChange(e)} style={props.style}>
        {
          city.map((cur:any) =>{
            if(cur == "Select City"){
             return(
              <option className="ops" value="" disabled selected>
                  {cur}
                </option>
             )     
            }
              return( 
                <option className="ops" value={cur}>
                  {cur}
                </option>
              ) 
          })
        }
      </select>
     
  );
};

export default SearchBar;
