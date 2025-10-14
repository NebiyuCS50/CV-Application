import React from "react";
import "./General.css";
const QualificationInfo = ({ formData, handleChange }) => {
  return (
    <div className="general-info">
      <h2>Qualifications</h2>
      <label>
        Title:
        <input
          type="text"
          name="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Institution:
        <input
          type="text"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Year Obtained:
        <input
          type="date"
          name="yearObtained"
          value={formData.yearObtained}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
};

export default QualificationInfo;
