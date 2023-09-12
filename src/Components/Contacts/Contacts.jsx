import React, { useEffect } from "react";
import "./Contacts.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import whatsapp from "../../images/WhatsApp.svg.webp";
import call from "../../images/call.png";
import sms from "../../images/sms.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="contacts" className="contacts container section">
      <h2 data-aos="fade-right">Call or text us</h2>
      <div className="contacts-contents">
        <div>
          <img
            data-aos="fade-up"
            className="contact-img"
            src={whatsapp}
            alt=""
          />
          <a href="tel:254727939656"></a>
          <h4>+254727939656</h4>
        </div>

        <div>
          <img
            data-aos="fade-right"
            className="contact-img"
            src={call}
            alt=""
          />
          <a href="tel:254727939656"></a>
          <h4>+254727939656</h4>
        </div>

        <div>
          <img data-aos="fade-left" className="contact-img" src={sms} alt="" />
          <a href="sms:254727939656"></a>
          <h4>+254727939656</h4>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
