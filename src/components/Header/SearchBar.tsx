import React, { useState } from "react";
import Select from "react-select";


const   customStyles = {
    option : (provided:any, state:any) => ({
      ...provided,
      borderBottom: 'none',
      color: state.isSelected ? 'red' : '#727272',
      padding: 10,
      cursor: 'pointer',
      background: state.isSelected ? 'white' : 'white',
      fontSize: '13px',
      textAlign: 'left',
      paddingLeft: '20px',
      width: 150
    }),
    control: () => ({
      width: 150,
      display: 'flex',
      marginTop: '10px',
      marginLeft: '30px',
      fontSize: '14px'
    }),
    singleValue: (provided:any, state:any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  };

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
  

const SearchBar = (props:any) => {

    const [selectedOption,setSelectedOption]= useState(null);

    const  handleChange = (selectedOption:any) => {
       setSelectedOption(selectedOption);
      };
  return (
    <div className="search-bar">
      <div className="select-city-large">
        <div className="select-div">
          <Select
            styles={customStyles}
            placeholder="Select City"
            options={options}
            value={selectedOption}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="select-experience-large" />
      {/* <button id="go">Search</button> */}
    </div>
  );
};

export default SearchBar;
