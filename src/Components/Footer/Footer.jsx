import React, { useEffect } from "react";
import "./footer.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className="footer">
      <div className="inner-container">
        <h1 data-aos="fade-right">
          Ohore<span className="span">Glass</span>Mart
        </h1>
        <h2 data-aos="fade-right">Your Ideal Glassing Company</h2>
      </div>
      <div className="footer-box">
        <h4>Quick Links</h4>
        <div className="footer-links">
          {pathName !== "/" ? (
            <Link to="/#about">About Us</Link>
          ) : (
            <a href="#about">About Us</a>
          )}
          {pathName !== "/" ? (
            <Link to="/#contacts">Contact Us</Link>
          ) : (
            <a href="#contacts">Contact Us</a>
          )}
          <a href="#privacyPolicy">Privacy & Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
      <div className="footer-box">
        <h4>Follow</h4>
        <div className="footer-links">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="footer-box">
        <h4>Contacts us</h4>
        <div className="footer-contact">
          <p>
            <FaMapMarkedAlt /> &nbsp; Address: Nairobi.
          </p>
          <p>
            <FaPhoneAlt /> &nbsp; Phone: +254727939656.
          </p>
          <p>
            <FaEnvelope /> &nbsp; Email: georgeohore0@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="u-small-text">
          &copy; Copyright {new Date().getFullYear()} OhoreGlassMart, Inc. All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
