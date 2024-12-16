import React from "react";
import image1 from "../images/pic1.jpg";
import image2 from "../images/pic2.jpg";
import image3 from "../images/pic3.webp";
import { FaArrowRight } from "react-icons/fa";
import dot from "../images/orangeDot.png";
function Home() {
  return (
    <div id="home">
      <div className="homeparent">
        <div className="homechild">
          <img src={image1} alt="Profile picture" className="mainimage" />
        </div>

        <div className="homechild">
          <p className="gald">I'm GLAD YOU'RE HERE.</p>
          <h1>Hello I'm PRASANNA KUMAR A Freelance Web Developer</h1>
          <p>
            "I’m a passionate freelance web developer dedicated to crafting
            stunning, user-friendly websites that bring ideas to life. With a
            perfect blend of creativity and technical expertise, I transform
            concepts into engaging digital experiences. Whether you need a sleek
            portfolio, a responsive e-commerce site, or a dynamic web
            application, I’m here to make it happen. Let’s work together to
            build something extraordinary!"
          </p>
          <button type="summit" className="Chatbutton">
            {" "}
            Let's Chat <FaArrowRight className="righthomearrow" />{" "}
          </button>
        </div>
      </div>

      <div id="about" className="aboutmepar">
        <div className="aboutme">
          <img src={dot} alt="" />
          <p>About Me</p>
        </div>

        <div className="aboutmeparent">
          <div className="abooutmechild">
            <h2>I’m developing mobile and web applications.</h2>
            <p>
              Hello! I’m a passionate web developer with a knack for turning
              ideas into digital realities. With expertise in designing and
              building responsive, user-friendly websites, I specialize in
              creating seamless experiences that captivate users. I enjoy
              crafting clean, efficient code and collaborating on innovative
              projects that make a difference. Beyond coding, I’m a problem
              solver, a lifelong learner, and someone who’s always ready to
              tackle new challenges. Let’s create something extraordinary
              together!
            </p>
            <div className="progresscontainer">
              <div className="progressdata">
                <p>Transparency Services</p>
                <p className="percentage">90%</p>
              </div>
              <div className="bgbar">
              <div className="progressbar" style={{ width: "90%" }}></div>
              </div>
              <div className="progressdata">
                <p>Backend Development</p>
                <p className="percentage">80%</p>
              </div>
              <div className="bgbar">
              <div className="progressbar" style={{ width: "80%" }}></div>
              </div>
              <div className="progressdata">
                <p>Frontend Development</p>
                <p className="percentage">90%</p>
              </div>
              <div className="bgbar">
              <div className="progressbar" style={{ width: "90%" }}></div>
              </div>
              <div className="progressdata">
                <p>Relationship Advice</p>
                <p className="percentage">85%</p>
              </div>
              <div className="bgbar">
              <div className="progressbar" style={{ width: "85%" }}></div>
              </div>
            </div>

          </div>

          <div className="abooutmechild">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
