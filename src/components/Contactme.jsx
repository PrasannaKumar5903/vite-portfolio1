import React from "react";
import dot from "../images/orangeDot.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Contactme() {
  return (
    <div>
      <div className="headcon">
        <img src={dot} alt="dot image" />
        <p>Contact Me</p>
      </div>
      <div className="contactmeparent">
        <div className="contace">
          <h2>Need help? Get in touch now!</h2>
          <div className="cm">
            <FaPhoneVolume className="phone" />
            <div className="pm">
              <p>Phone</p>
              <h4>+91 78259 85872</h4>
            </div>
          </div>
          <div className="cm">
            <IoIosMail className="mail" />
            <div className="pm">
              <p>Mail</p>
              <h4>prasannakumar@gmail.com</h4>
            </div>
          </div>
        </div>

        <div className="contace">
          <form action="">
            <div className="layout">
              <input type="text" placeholder="Email" />
            </div>
            <div className="layout">
              <input type="text" placeholder="Phone" />
            </div>
            <div className="layout">
              <select name="" id="" placeholder="Package">
                <option value="">Package</option>
                <option value="">Basic</option>
                <option value="">Intermediate</option>
                <option value="">Advance</option>
              </select>
            </div>
            <div className="layout">
              <input type="date" required />
            </div>
            <textarea name="" id="" rows={5}></textarea>
          </form>
          <button type="summit" className="button">Send Me Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
