import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import Experience from "./Experience";
import QualificationInfo from "./QualificationInfo";

const FormPage = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
    title: "",
    institution: "",
    yearObtained: "",
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    dateOfWork: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <form className="form-page" onSubmit={handleSubmit}>
      <GeneralInfo formData={formData} handleChange={handleChange} />
      <EducationInfo formData={formData} handleChange={handleChange} />
      <QualificationInfo formData={formData} handleChange={handleChange} />
      <Experience formData={formData} handleChange={handleChange} />
      <div className="buttons">
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </form>
  );
};

export default FormPage;
