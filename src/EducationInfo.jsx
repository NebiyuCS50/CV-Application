import React from "react";
import "./Education.css";
const EducationInfo = ({ formData, handleArrayChange, addEntry }) => {
  return (
    <div className="education-info">
      <h2>Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index}>
          <input
            name="schoolName"
            value={edu.schoolName}
            onChange={(e) => handleArrayChange("education", index, e)}
            placeholder="School Name"
          />
          <input
            name="titleOfStudy"
            value={edu.titleOfStudy}
            onChange={(e) => handleArrayChange("education", index, e)}
            placeholder="Title of Study"
          />
          <input
            type="date"
            name="dateOfStudy"
            value={edu.dateOfStudy}
            onChange={(e) => handleArrayChange("education", index, e)}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          addEntry("education", {
            schoolName: "",
            titleOfStudy: "",
            dateOfStudy: "",
          })
        }
      >
        + Add Education
      </button>
    </div>
  );
};
export default EducationInfo;
