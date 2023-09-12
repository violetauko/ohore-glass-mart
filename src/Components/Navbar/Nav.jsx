import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const [active, setActive] = useState("nav");

  const showNav = () => {
    setActive("nav activeNav");
  };

  const removeNav = () => {
    setActive("nav ");
  };
  return (
    <section className="NavSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>Ohore Glass Mart</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a className="navLink" href="#Home">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#aboutUs" className="navLink">
                AboutUs
              </a>
            </li>
            <li className="navItem">
              <a href="#main" className="navLink">
                Services
              </a>
            </li>
            <li className="navItem">
              <a href="#projects" className="navLink">
                Projects
              </a>
            </li>
            <li className="navItem">
              <a href="#contacts" className="navLink">
                Contacts
              </a>
            </li>
            <button className="btn">
              <a href="tel:254727939656">CALL NOW</a>
            </button>
          </ul>
          <div onClick={removeNav} className="closeNav">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNav">
          <PiDotsNineBold className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Nav;
