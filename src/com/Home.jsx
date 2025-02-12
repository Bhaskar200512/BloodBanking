import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Pro1 from './Pro1.jpeg';
import Blood1 from './Blood1.jpg';
import Blood5 from './Blood5.jpg';
import Blood3 from './Blood3.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Pro1, Blood1, Blood5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
        <div className="menu">
        <Link to="/">
            <img src={Blood3} alt="NTR Trust Logo" style={{ height: "50px" }} />
          </Link>
          <ul>
            <li>About Us</li>
            <li>Areas We Serve</li>
            <li>Careers</li>
            <li>Register For Thalassemia</li>
            <li>Newsletter</li>
            <li>Annual Reports</li>
            <li>Location</li>
          </ul>
          <Link to="/Login">Login</Link>
        </div>

        <div className="header">
          <h1>Service to Humankind is Service to God.</h1>
        </div>

        <div className="slideshow">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Slideshow"
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="footer">
          <div className="footer-menu">
            <i className="fa fa-youtube" style={{ fontSize: "36px", color: "red" }}></i>
            <i className="fa fa-twitter" style={{ fontSize: "36px", color: "yellow" }}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
