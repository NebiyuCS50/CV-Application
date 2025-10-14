import React from "react";
import "./General.css";

const GeneralInfo = ({ formData, handleChange }) => {
  return (
    <div className="general-info">
      <h2>General Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        About Me:
        <textarea
          name="aboutMe"
          value={formData.aboutMe}
          onChange={handleChange}
          required
        ></textarea>
      </label>
    </div>
  );
};

export default GeneralInfo;
