import React from 'react'
import {FaGooglePlusG, FaInstagram,FaTwitter,FaFacebook,FaPinterest} from 'react-icons/fa';
import './Styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-wrap">
    <div className="footer-wrapper">
      <div className="column-one">
        <img id="footer" src='https://i.postimg.cc/pdnt2Zgs/logo.png' alt="Headout" />
        <p>RS is building the future of how we experience our cities.</p>
        <p
          style={{
            color: '#2980b9',
            fontSize: '14px'
          }}
        >
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          by SMit. . .
        </p>
        <p>&copy; RS Inc.</p>
      </div>
      <div className="column-two">
        <h3>Cities</h3>
        <ul>
          <li>New York</li>
          <li>Las Vegas</li>
          <li>Rome</li>
          <li>Paris</li>
          <li>London</li>
          <li>Dubai</li>
          <li>Barcelona</li>
          <li>+8 more</li>
        </ul>
      </div>
      <div className="column-three">
        <h3>About us</h3>
        <ul>
          <li>About RS</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Usage</li>
        </ul>
      </div>
      <div className="column-four">
        <h3>Contact</h3>
        <p>Feel free to get in touch via email:</p>
        <p style={{ color: '#4fc3f7', cursor: 'pointer' }}>
          RStravels@gmail.com
        </p>
        <div className="social-media-contact">
        <FaGooglePlusG className="social-connect"/>
          <FaTwitter className="social-connect"/>
         <FaFacebook className="social-connect"/>
         <FaPinterest className="social-connect"/>
         <FaInstagram className="social-connect"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer