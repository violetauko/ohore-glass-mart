import React, { useEffect } from "react";
import "./OurWork.css";
import imgb from "../../images/imgb.jpeg";
import img13 from "../../images/img13.jpeg";
import img11 from "../../images/img11.jpeg";
import imgh from "../../images/imgh.jpeg";
import imghd from "../../images/imghd.jpeg";
import img5 from "../../images/img5.jpeg";
import imgst from "../../images/imgst.jpeg";
import img8 from "../../images/img8.jpeg";
import img6 from "../../images/img6.jpeg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    img: imgb,
  },

  {
    id: 2,
    img: img13,
  },

  {
    id: 3,
    img: img11,
  },
  {
    id: 4,
    img: imgh,
  },

  {
    id: 5,
    img: imghd,
  },

  {
    id: 6,
    img: img5,
  },

  {
    id: 7,
    img: imgst,
  },

  {
    id: 8,
    img: img8,
  },

  {
    id: 9,
    img: img6,
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="projects" className="ourWork container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Our Projects
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(({ id, img }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleInstallation">
              <div className="imageDiv">
                <img src={img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
