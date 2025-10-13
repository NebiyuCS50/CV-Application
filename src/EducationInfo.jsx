import React from "react";

const EducationInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Educational Experience</h2>
      <label>
        School Name:
        <input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Title of study:
        <input
          type="text"
          name="titleOfStudy"
          value={formData.titleOfStudy}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date of study:
        <input
          type="date"
          name="dateOfStudy"
          value={formData.dateOfStudy}
          required
        />
      </label>
    </div>
  );
};

export default EducationInfo;
