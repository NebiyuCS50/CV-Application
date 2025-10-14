import React from "react";
import "./Experience.css";

const Experience = ({ formData, handleArrayChange, addEntry }) => {
  return (
    <div className="experience-info">
      <h2>Practical Experience</h2>
      {formData.experience.map((exp, index) => (
        <div key={index}>
          <input
            type="text"
            name="companyName"
            value={exp.companyName}
            onChange={(e) => handleArrayChange("experience", index, e)}
            placeholder="Company Name"
            required
          />

          <input
            type="text"
            name="positionTitle"
            value={exp.positionTitle}
            onChange={(e) => handleArrayChange("experience", index, e)}
            placeholder="Position Title"
            required
          />

          <textarea
            name="mainTasks"
            value={exp.mainTasks}
            onChange={(e) => handleArrayChange("experience", index, e)}
            placeholder="Main Tasks"
            required
          />

          <input
            type="date"
            name="startDate"
            value={exp.startDate}
            onChange={(e) => handleArrayChange("experience", index, e)}
            placeholder="Start Date"
            required
          />

          <input
            type="date"
            name="endDate"
            value={exp.endDate}
            onChange={(e) => handleArrayChange("experience", index, e)}
            placeholder="End Date"
            required
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          addEntry("experience", {
            companyName: "",
            positionTitle: "",
            mainTasks: "",
            startDate: "",
            endDate: "",
          })
        }
      >
        + Add Experience
      </button>
    </div>
  );
};

export default Experience;
