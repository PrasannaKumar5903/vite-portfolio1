import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import dot from "../images/orangeDot.png";
import blog1 from "../images/blogOne.png";
import blog2 from "../images/blogTwo.png";
import blog3 from "../images/blogThree.png";


function Blog() {
  return (
    <div id="blog">
      <div className="blogdot">
        <img src={dot} alt="Dotimg" />
        <p>My Blog</p>
      </div>
      <div className="bloghead">
        <h2>LATEST BLOG</h2>
      </div>
      <div className="blogcardshead">
        <div className="blogcards">
          <img src={blog1} alt="blog1 image" />
          <p>22 July, 2024</p>
          <h3>Building Scalable Web Applications: Full-Stack Best Practices</h3>
          <a className="link"  href="">
            Read More
            <FaArrowRight className="arrow"/>
          </a>
        </div>
        <div className="blogcards">
          <img src={blog2} alt="blog 2 image" />
          <p>20 January, 2024</p>
          <h3>Advancements in IoT and Connectivity</h3>
          <a className="link" href="">
            Read More
            <FaArrowRight className="arrow"/>
          </a>
        </div>
        <div className="blogcards">
          <img src={blog3} alt="blog 3 image" />
          <p>25 May, 2024</p>
          <h3>Smart Automation and Robotics</h3>
          <a className="link" href="">
            Read More
            <FaArrowRight className="arrow"/>
          </a>
        </div>
      </div>
      <div className="footer">
        <h2>Let's Make Consultation With Us!</h2>
        <input className="email" type="text"  placeholder="Enter Your Email"/>
        <button type="summit" className="button"> <BsFillSendFill className=""/></button>
        <div className="foot">
        <p> All rights reserved © 2023 </p>
        <a href="">Terms & Condition</a>
        <a href="">Privacy policy</a>

        
        </div>
      </div>
    </div>
  );
}

export default Blog;
