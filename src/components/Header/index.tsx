import React, { useState } from "react";
import Background from "./Background";
import HeaderNav from "./HeaderNav";
import '../Styles/Header.css';
import Select from "react-select";
import { useSelector } from "react-redux";

const options = [
  { value: 'New York', label: 'New York' },
  { value: 'Las Vegas', label: 'Las Vegas' },
  { value: 'Rome', label: 'Rome' },
  { value: 'Paris', label: 'Paris' },
  { value: 'London', label: 'London' },
  { value: 'Dubai', label: 'Dubai' },
  { value: 'Barcelona', label: 'Barcelona' },
  { value: 'Madrid', label: 'Madrid' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Venice', label: 'Venice' },
  { value: 'Milan', label: 'Milan' },
  { value: 'Naples', label: 'Naples' },
  { value: 'Budapest', label: 'Budapest' },
  { value: 'Edinburg', label: 'Edinburg' },
  { value: 'Florence', label: 'Florence' }
];


const Index = () => {
    const [experience,setExperience] = useState("");
  return (
    <div>
      <HeaderNav  />
      <Background />
      <div className="search-bar-div">
        <div className="select-city-large">
          <i className="fas fa-map-marker" />
          <SearchBar style={customStyles}  />
        </div>
        <div className="select-experience-large">
          <input
            type="text"
            placeholder="Search for experiences"
            // onChange={this.changeExperience}
            value={experience}
          />
          <i className="fas fa-search" />
        </div>
        <button id="go">Let's Go</button>
      </div>

      
    </div>
  );
};
const customStyles = {
  option: (provided:any, state:any) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    width: 120
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '14px',
    marginTop: '10px',
    paddingLeft: '5px'
  }),
  singleValue: (provided:any, state:any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};
const SearchBar = (props:any) => {
  const { city }: any = useSelector((state) => state);
  return(
    <Select
        styles={props.style}
        placeholder="Select City"
        // value={selectedOption}
        // onChange={this.handleChange}
        options={city.cityList}
        getOptionLabel={(option:any) => option.cityName}
        getOptionValue={(option:any) => option.cityName}
        className="city-select-dropdown"
      />
  )
}
export default Index;
