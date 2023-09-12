import React, { useEffect } from "react";
import "./main.css";
import door from "../../images/door.jpeg";
import elevator from "../../images/escalator.jpg";
import balcony from "../../images/balcony.jpg";
import bathroom from "../../images/bathroom.jpeg";
import walls from "../../images/walls.jpg";
import officeDoor from "../../images/officeDoor.webp";
import pet from "../../images/petitioning.jpg";
import stairscase from "../../images/staircase.jpg";
import window from "../../images/Windows.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    img: door,
    name: "Door",
  },

  {
    id: 2,
    img: bathroom,
    name: "Bathroom",
  },

  {
    id: 3,
    img: balcony,
    name: "Balcony",
  },
  {
    id: 4,
    img: elevator,
    name: "Elevator",
  },

  {
    id: 5,
    img: window,
    name: "Window",
  },

  {
    id: 6,
    img: officeDoor,
    name: "Office Door",
  },

  {
    id: 7,
    img: walls,
    name: "Building Wall",
  },

  {
    id: 8,
    img: stairscase,
    name: "StairCase",
  },

  {
    id: 9,
    img: pet,
    name: "Office ",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="main" className="main container section">
      <div className="secTitle">
        <h1 data-aos="fade-right" className="title">
          What we offer
        </h1>
      </div>
      <div className="secContent grid">
        {Data.map(({ id, img, name }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleInstallation">
              <div className="imageDiv">
                <img src={img} alt="" />

                <div className="cardInfo">
                  <h4 className="serviceName">{name}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
