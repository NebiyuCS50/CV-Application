import React from "react";
import "./CVPage.css";
import image from "./assets/pexels-danxavier-1239291.jpg";

import { jsPDF } from "jspdf";
const CVPage = ({ data, onClose }) => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(22);
    doc.text(data.name, 20, 20);
    doc.setFontSize(16);
    doc.text(`Email: ${data.email}`, 20, 30);
    doc.text(`Phone: ${data.phone}`, 20, 40);

    let y = 50;

    // Education
    doc.setFontSize(18);
    doc.text("Education:", 20, y);
    y += 10;
    data.education.forEach((edu) => {
      doc.setFontSize(14);
      doc.text(`School: ${edu.schoolName}`, 20, y);
      y += 6;
      doc.text(`Title: ${edu.titleOfStudy}`, 20, y);
      y += 6;
      doc.text(`Date: ${edu.dateOfStudy}`, 20, y);
      y += 10;
    });

    // Qualifications
    if (data.qualifications.length > 0) {
      doc.setFontSize(18);
      doc.text("Qualifications:", 20, y);
      y += 10;
      data.qualifications.forEach((qual) => {
        doc.setFontSize(14);
        doc.text(`Title: ${qual.title}`, 20, y);
        y += 6;
        doc.text(`Institution: ${qual.institution}`, 20, y);
        y += 6;
        doc.text(`Year Obtained: ${qual.yearObtained}`, 20, y);
        y += 10;
      });
    }

    // Experience
    if (data.experience.length > 0) {
      doc.setFontSize(18);
      doc.text("Experience:", 20, y);
      y += 10;
      data.experience.forEach((exp) => {
        doc.setFontSize(14);
        doc.text(`Company: ${exp.companyName}`, 20, y);
        y += 6;
        doc.text(`Position: ${exp.positionTitle}`, 20, y);
        y += 6;
        doc.text(`Tasks: ${exp.mainTasks}`, 20, y);
        y += 6;
        doc.text(`Duration: ${exp.startDate} - ${exp.endDate}`, 20, y);
        y += 10;
      });
    }

    // About Me
    if (data.aboutMe) {
      doc.setFontSize(18);
      doc.text("About Me:", 20, y);
      y += 10;
      doc.setFontSize(14);
      const lines = doc.splitTextToSize(data.aboutMe, 170); // wrap text
      doc.text(lines, 20, y);
    }

    // Save the PDF
    doc.save(`${data.name}_CV.pdf`);
  };
  return (
    <div className="cv-container">
      <div className="header-content">
        <img className="cv-header-img " src={image} alt="" />
        <div>
          <h1 className="header-content1">{data.name}</h1>
          <h3 className="header-content3">
            {data.education[0].titleOfStudy || ""}
          </h3>
        </div>
      </div>
      <div className="main">
        <div className="info">
          <h2 className="header-content2">CONTACT</h2>
          <div id="line1"></div>
          <div className="contact-info">
            <p>Email: {data.email}</p>
            <p>Phone:{data.phone}</p>
          </div>
          <h2 className="header-content2">EDUCATION</h2>
          <div id="line1"></div>
          {data.education.map((edu, index) => (
            <div className="education-info" key={index}>
              <p>School Name: {edu.schoolName}</p>
              <p> Title of study: {edu.titleOfStudy}</p>
              <p>Date of study: {edu.dateOfStudy}</p>
            </div>
          ))}

          <h2 className="header-content2">QUALIFICATION</h2>
          <div id="line1"></div>
          {data.qualifications.map((qual, index) => (
            <div className="education-info" key={index}>
              <p>Title: {qual.title}</p>
              <p> Institution: {qual.institution}</p>
              <p>Year Obtained: {qual.yearObtained}</p>
            </div>
          ))}
        </div>
        <div className="right-side">
          <h2 className="header-content2">ABOUT ME</h2>
          <div id="line2"></div>
          <p className="about-me">
            {data.aboutMe || "No information provided"}
          </p>
          <h2 className="header-content2">Work Experience</h2>
          <div id="line2"></div>
          {data.experience.map((exp, index) => (
            <div className="work-info" key={index}>
              <h2 className="right-h3 companyName"> {exp.companyName}</h2>
              <h3 className="right-h3 Position"> {exp.positionTitle}</h3>
              <h3 className="right-h3 Date">
                {exp.startDate} - {exp.endDate}
              </h3>
              <p className="about-me">(O) {exp.mainTasks}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="buttonsCV">
        <button className="cvBtn2" onClick={downloadPDF}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cloud-download-icon lucide-cloud-download"
          >
            <path d="M12 13v8l-4-4" />
            <path d="m12 21 4-4" />
            <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
          </svg>
          Download
        </button>
        <button className="cvBtn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CVPage;
