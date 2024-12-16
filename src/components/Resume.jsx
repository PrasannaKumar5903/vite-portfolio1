import React from "react";
import dot from "../images/orangeDot.png";

function Resume() {
  return (
    <div id="resume">
      <div className="resumepar">
        <img src={dot} alt="dot image" />
        <p>Resume</p>
      </div>
      <div className="edex">
        <h2>EDUCATION & EXPERIENCE</h2>
      </div>
      <div className="resumeparent">
        <div className="resume">
          <h3>Bachelor of Engineering </h3>
          <p>Electronics and Communication Engineering</p>
          <p>Jeppiaar Engineering College</p>
          <p>CGPA : 8.61</p>
          <div className="reschild">
            <p>2021 - 2025</p>
          </div>
        </div>

        <div className="resume">
          <h3>HSC</h3>
          <p>M.L.M Mamallan Matriculation Higher Seconday School</p>
          <p>Percentage : 89.47</p>
          <div className="reschild">
            <p>2020 - 2021</p>
          </div>
        </div>

        <div className="resume">
          <h3>SSLC</h3>
          <p>Anderson Higher Secondary School</p>
          <p>Percentage : 84.2</p>
          <div className="reschild">
            <p>2018 - 2019</p>
          </div>
        </div>

        <div className="resume">
          <h3> Full Stack Developer</h3>
          <p>Courseinn Acadamy</p>
          <div className="reschild">
            <p>2024 - Running</p>
          </div>
        </div>

        <div className="resume">
          <h3>Web Development</h3>
          <p>Courseinn Academy </p>
          <div className="reschild">
            <p>2024 - Running</p>
          </div>
        </div>

        <div className="resume">
          <h3>Python</h3>
          <p>NPTEL</p>
          <div className="reschild">
            <p>2024 </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Resume;
