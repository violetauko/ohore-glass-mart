import React, { useEffect } from "react";
import "./home.css";
import video from "../../images/video2.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="home" className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Make Your Sorrounding
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            {" "}
            Brighter and Shinier
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
