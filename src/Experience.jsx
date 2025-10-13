import React from "react";

const Experience = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Practical Experience</h2>
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Position Title:
        <input
          type="text"
          name="positionTitle"
          value={formData.positionTitle}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Main Tasks:
        <textarea
          name="mainTasks"
          value={formData.mainTask}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <label>
        Date of Work:
        <input
          type="date"
          name="dateOfWork"
          value={formData.dateOfWork}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
};

export default Experience;
