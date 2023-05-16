import React from "react";
import {Link } from 'react-router-dom';
import '../Styles/Header.css';
import Select from 'react-select';
import { useSelector } from "react-redux/es/hooks/useSelector";

const navigationData = [
  {
    id: 1,
    name: "Headout Picks",
  },
  {
    id: 2,
    name: "Best Sellers",
  },
  {
    id: 3,
    name: "Abu Dhabi City Tours",
  },
  {
    id: 4,
    name: "Amsterdam Attractions",
  },
  {
    id: 5,
    name: "Burj Khalifa",
  },
];


const HeaderNav = () => {
  return (
    
    <div className="header-wrap">
      <div className="header-wrapper navbar-fixed-top">
        <div className="header-left">
          <div className="nav">
            <div className="first-line">
              <Link to={{ pathname: `/` }}>
                <div>
                
             <img id="logo" src='https://i.postimg.cc/pdnt2Zgs/logo.png' alt='my logo img' className='logo' />
     
                </div>
              </Link> 
              <div className="select-city">
                <SearchBar
                  style = {smallSearchbar}
                //   history={this.props.history}
                //   selectedCity={this.props.selectedCity}
                />
              </div>
              <div className="select-experience">
                <input
                  type="text"
                  placeholder="Search for experiences"
                //   onChange={this.changeExperience}
                //   value={this.props.experience}
                />
                <i className="fas fa-search" />
              </div>
            </div>
            <div className="second-line">
              <div className="best-picked">
                {navigationData &&
                  navigationData.map(({ id, name }) => <p key={id}>{name}</p>)}
              </div>
              <div className="support">
                <p>
                  24/7 Support{" "}
                  <span className="arrow-down">
                    {" "}
                    <i className="fas fa-angle-down" />
                  </span>
                </p>
                <p
                  style={{
                    marginRight: "0px",
                  }}
                >
                  English/USD
                  <span className="arrow-down">
                    {" "}
                    <i className="fas fa-angle-down" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="header-right">
            <a
              href="https://lastnamearya.github.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="sign-in">
                {/* <i className="fas fa-user-circle sign-in-user" /> */}
                <div className="lastnamearya-img">
                  <img
                    src="https://secure.gravatar.com/avatar/413b990ccd2cf5ba69d609fdba4f0302"
                    alt="lastnamearya"
                  />
                </div>
                <p style={{ color: "#ec1943", marginLeft: "5px" }}>
                  lastnamearya
                  <span className="arrow-down">
                    {" "}
                    <i className="fas fa-angle-down" />
                  </span>
                </p>
              </div>
            </a>
            <Link
              to={{ pathname: `/app` }}
              style={{
                textDecoration: "none",
              }}
            >
              <div className="download-app">
                {/* <img src={MobileApp} id="mobile-app" alt="Download our App" />
                <p style={{ color: "#24a1b2" }}>Download App</p> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const smallSearchbar = {
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
    fontSize: '11px',
    marginLeft: '15px'
  }),
  singleValue: (provided:any, state:any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};
const options = [
  { value: 'new-york', label: 'New York' },
  { value: 'las-vegas', label: 'Las Vegas' },
  { value: 'rome', label: 'Rome' },
  { value: 'paris', label: 'Paris' },
  { value: 'london', label: 'London' },
  { value: 'dubai', label: 'Dubai' },
  { value: 'barcelona', label: 'Barcelona' },
  { value: 'madrid', label: 'Madrid' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'venice', label: 'Venice' },
  { value: 'milan', label: 'Milan' },
  { value: 'naples', label: 'Naples' },
  { value: 'budapest', label: 'Budapest' },
  { value: 'edinburg', label: 'Edinburg' },
  { value: 'florence', label: 'Florence' }
];
const SearchBar = (props:any) =>{
    const {city}:any = useSelector(state=>state);
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
  );
}

export default HeaderNav;
