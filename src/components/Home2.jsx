import React, { useState, useEffect } from 'react';
import './Home2.css';
//import Login from "./Login.jsx";
//import { Link, Route, Routes } from "react-router-dom";
import Blood1 from './Blood1.jpg';
import Blood2 from './Blood2.jpg';
import Blood3 from './Blood3.jpg';
import KLlogo1 from './KLlogo1.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { Link } from 'react-router-dom';

function Blood() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Blood1, Blood2,Blood3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="container">
        <div className="menu">
          <img src={KLlogo1} alt="NTR Trust Logo" />
          <ul>
            <li>About Us</li>
            <li>Areas We Serve</li>
            <li>Careers</li>
            <li>Register For Thalassemia</li>
            <li>Newsletter</li>
            <li>Annual Reports</li>
            <li>Alumni</li>
          </ul>
          <ul>
          <button>SignUp</button>
          <Link  to= "/Login">
          <button>Login</button>
          </Link>
          </ul>
        </div>
        <div className="header">
          <h1>A Small Act of Kindness Can Create a Big Impact – Donate Blood!</h1>
        </div>
        <div className="slideshow">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slideshow image ${index + 1}`}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="btable">
          <h2>Blood Group Compatibility</h2>
          <table>
            <thead>
              <tr>
                <th>Blood Type</th>
                <th>Can Donate To</th>
                <th>Can Receive From</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>O-</td>
                <td>O+, O-, A+, A-, B+, B-, AB+, AB-</td>
                <td>O-</td>
              </tr>
              <tr>
                <td>O+</td>
                <td>O+, A+, B+, AB+</td>
                <td>O-, O+</td>
              </tr>
              <tr>
                <td>A-</td>
                <td>A+, A-, AB+, AB-</td>
                <td>A-, O-</td>
              </tr>
              <tr>
                <td>A+</td>
                <td>A+, AB+</td>
                <td>A+, A-, O+, O-</td>
              </tr>
              <tr>
                <td>B-</td>
                <td>B+, B-, AB+, AB-</td>
                <td>B-, O-</td>
              </tr>
              <tr>
                <td>B+</td>
                <td>B+, AB+</td>
                <td>B+, B-, O+, O-</td>
              </tr>
              <tr>
                <td>AB-</td>
                <td>AB+, AB-</td>
                <td>A-, B-, AB-, O-</td>
              </tr>
              <tr>
                <td>AB+</td>
                <td>AB+</td>
                <td>O+, O-, A+, A-, B+, B-, AB+, AB-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="footer">
          <div className="footer-menu">
            <i className="fab fa-facebook" style={{ fontSize: "36px", color: "blue" }}></i>
            <i className="fab fa-instagram" style={{ fontSize: "36px", color: "green" }}></i>
            <i className="fab fa-youtube" style={{ fontSize: "36px", color: "red" }}></i>
            <i className="fab fa-twitter" style={{ fontSize: "36px", color: "yellow" }}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blood;
