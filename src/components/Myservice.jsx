import React from "react";
import webdesign from "../images/serviceNine.png";
import webdev from "../images/serviceTen.png";
import mobdev from "../images/serviceEleven.png";
import ios from "../images/serviceTwelve.png";
import dot from "../images/orangeDot.png";
function Myservice() {
  return (
    <>
      <div id="services" className="myserpar">
        <div className="myservice">
          <img src={dot} alt="Dot image" />
          <p>service</p>
        </div >
        <h2 className="heading">MY SERVICES</h2>
      </div>
      <div className="serviceparent">
        <div className="service">
          <img src={webdev} alt="Web Development" />
          <h3>Web Development</h3>
          <p>
            I make custom, responsive websites that are fast, reliable, and
            visually pleasing. My services include e-commerce development, API
            integration, performance optimization, and on-going maintenance to
            keep your site secure and up to date.
          </p>
        </div>

        <div className="service">
          <img src={webdesign} alt="webdesign" />
          <h3>Web Design</h3>
          <p>
            I design modern, responsive websites that are visually stunning,
            user-friendly, and tailored to your needs. My services include
            custom designs, mobile optimization, UX/UI enhancements, branding,
            and creating seamless digital experiences.
          </p>
        </div>

        <div className="service">
          <img src={mobdev} alt="Mobile Development" />
          <h3>Embedded System</h3>
          <p>
            My focus areas are designs of efficient embedded systems with the
            capability of using Embedded C while programming microcontrollers. I
            design innovative solutions for IoT and robotics in projects such as
            a Fire Alarm System, an Obstacle Avoidance Robot, a Real-Time Data
            Logger and many others.
          </p>
        </div>

        <div className="service">
          <img src={ios} alt="IOS Development" />
          <h3>IoT and Smart Systems</h3>
          <p>
            I design and develop IoT-enabled solutions where devices, sensors,
            and platforms are seamlessly connected to make smarter systems. I
            integrate communication protocols such as Wi-Fi, Bluetooth, and GSM
            to build efficient and scalable applications for home automation,
            industrial monitoring, and real-time data tracking. My projects
            include innovation, such as smart alarms, connected robots, and
            data-driven IoT dashboards.
          </p>
        </div>
      </div>
    </>
  );
}

export default Myservice;
