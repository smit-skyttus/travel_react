import React, { useState } from "react";
import Background from "./Background";
import HeaderNav from "./HeaderNav";
import Select from 'react-select';
import '../Styles/Header.css';
import { useSelector } from "react-redux/es/hooks/useSelector";
import SearchBar from "./SearchBar";

const Index = () => {
    const [experience,setExperience] = useState("");
  return (
    <div>
      <HeaderNav />
      <Background />
      <div className="search-bar-div">
       
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

export default Index;
