import React from "react";
import "./CVPage.css";
import image from "./assets/pexels-danxavier-1239291.jpg";
const CVPage = ({ data, onClose }) => {
  return (
    <div className="cv-container">
      <div className="header-content">
        <img className="cv-header-img " src={image} alt="" />
        <div>
          <h1 className="header-content1">ELIAS MEKONNEN</h1>
          <h3 className="header-content3">SOFTWARE ENGINEER</h3>
        </div>
      </div>
      <div className="main">
        <div className="info">
          <h2 className="header-content2">CONTACT</h2>
          <div id="line1"></div>
          <div className="contact-info">
            <p>Email: test@gmail.com</p>
            <p>Phone: 0947811360</p>
          </div>
          <h2 className="header-content2">EDUCATION</h2>
          <div id="line1"></div>
          <div className="education-info">
            <p>School Name: test@gmail.com</p>
            <p> Title of study: 0947811360</p>
            <p>Date of study:</p>
          </div>
          <h2 className="header-content2">QUALIFICATION</h2>
          <div id="line1"></div>
          <div className="education-info">
            <p>School Name: test@gmail.com</p>
            <p> Title of study: 0947811360</p>
            <p>Date of study:</p>
          </div>
        </div>
        <div className="right-side">
          <h2 className="header-content2">ABOUT ME</h2>
          <div id="line2"></div>
          <p className="about-me">
            I am a dedicated and passionate software engineer with a strong
            foundation in computer science and a keen interest in developing
            innovative solutions. With experience in various programming
            languages and frameworks, I thrive in collaborative environments
            where I can contribute to impactful projects. My goal is to
            continuously learn and grow in the ever-evolving field of
            technology, while delivering high-quality software that meets user
            needs.
          </p>
          <h2 className="header-content2">Work Experience</h2>
          <div id="line2"></div>
          <h3 className="right-h3">Company Name: </h3>
          <h3 className="right-h3">02/25/2001 - 02/10/2008</h3>
        </div>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CVPage;
