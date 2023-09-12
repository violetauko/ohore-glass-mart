import React, { useEffect } from "react";
import "./Reviews.css";
import { ImQuotesLeft } from "react-icons/im";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
// import windows from "../../images/Windows.jpg";
// import door from "../../images/door.jpeg";
// import balcony from "../../images/balcony.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="reviews" className="reviews container section ">
      <h2 data-aos="fade-right">Satisfied Customers</h2>
      <div className="r-cards">
        <div className="r-card">
          <ImQuotesLeft id="im-icon" size={35} />
          <p>
            Ohore glass Mart installed the most perfect shower enclosure I've
            ever seen. Ahead of schedule, on budget, exactly what was ordered.
            This was a GREAT deal. Thank you.
          </p>
          <br />
          <h3>- Dennis B.</h3>
          <div className="ri-icons">
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
          </div>
        </div>
        <div className="r-card">
          <ImQuotesLeft id="im-icon" size={35} />
          <p>
            Props go out to George from the Ohore Glass Mart for taking care of
            my car window. Showed up on time, got it done quickly and priced
            right. They have my recommendation.
          </p>
          <br />
          <h3>- Paul O.</h3>
          <div className="ri-icons">
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
          </div>
        </div>
        <div className="r-card">
          <ImQuotesLeft id="im-icon" size={35} />
          <p>
            The installation went well. I was happy that the installers were
            able to use the original framing around the windows. They very
            efficient and cleaned up well afterwards. I’m glad I have working
            windows! You have a great product.
          </p>
          <br />
          <h3>Karen S</h3>
          <div className="ri-icons">
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
            <RiStarSFill size={24} />
            <RiStarSLine size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
