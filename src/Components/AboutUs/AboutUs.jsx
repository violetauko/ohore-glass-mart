import React, { useEffect } from "react";
import "./aboutUs.css";

import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="aboutUs" className="about container section">
      <h2 data-aos="fade-right">Why choose us</h2>
      <div className="us">
        <div>
          <h3>Customer Service</h3>
          <p data-aos="fade-in">
            You deserve to work with a company that is receptive and responsive
            to your needs, and will answer any questions you may have throughout
            the installation process.
          </p>
        </div>
        <div>
          <h3>Quality</h3>
          <p data-aos="fade-in">
            We prioritise quality and will ensure your installation is done
            correctly the first time and reduce the likelihood of future repairs
            or replacements.
          </p>
        </div>
        <div>
          <h3>Pricing</h3>
          <p data-aos="fade-in">
            Our pricing strategies are pocket friendly and our team is ready for
            negotiation where possible
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
