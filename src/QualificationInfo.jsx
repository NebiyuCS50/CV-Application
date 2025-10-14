import React from "react";
import "./Qualification.css";
const QualificationInfo = ({ formData, handleArrayChange, addEntry }) => {
  return (
    <div className="qualification-info">
      <h2>Qualifications</h2>
      {formData.qualifications.map((qual, index) => (
        <div key={index}>
          <input
            name="title"
            value={qual.title}
            onChange={(e) => handleArrayChange("qualifications", index, e)}
            placeholder="Title"
            required
          />

          <input
            type="text"
            name="institution"
            value={qual.institution}
            onChange={(e) => handleArrayChange("qualifications", index, e)}
            placeholder="Institution"
            required
          />

          <input
            type="date"
            name="yearObtained"
            value={qual.yearObtained}
            onChange={(e) => handleArrayChange("qualifications", index, e)}
            placeholder="Year Obtained"
            required
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          addEntry("qualifications", {
            title: "",
            institution: "",
            yearObtained: "",
          })
        }
      >
        + Add Qualification
      </button>
    </div>
  );
};

export default QualificationInfo;
