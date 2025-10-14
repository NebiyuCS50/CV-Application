import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import Experience from "./Experience";
import QualificationInfo from "./QualificationInfo";
import "./FormPage.css";

const FormPage = ({ onClose, formData, setFormData, onSubmitComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleArrayChange = (section, index, e) => {
    const newArray = [...formData[section]];
    newArray[index][e.target.name] = e.target.value;
    setFormData({ ...formData, [section]: newArray });
  };

  const addEntry = (section, newEntry) => {
    setFormData({ ...formData, [section]: [...formData[section], newEntry] });
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    onSubmitComplete();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <GeneralInfo formData={formData} handleChange={handleChange} />;
      case 1:
        return (
          <EducationInfo
            formData={formData}
            handleArrayChange={handleArrayChange}
            addEntry={addEntry}
          />
        );
      case 2:
        return (
          <QualificationInfo
            formData={formData}
            handleArrayChange={handleArrayChange}
            addEntry={addEntry}
          />
        );
      case 3:
        return (
          <Experience
            formData={formData}
            handleArrayChange={handleArrayChange}
            addEntry={addEntry}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form className="form-page" onSubmit={handleSubmit}>
      {renderStep()}

      <div className="form-buttons">
        {currentStep > 0 && (
          <button type="button" onClick={handlePrev}>
            Previous
          </button>
        )}
        {currentStep < 3 ? (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </form>
  );
};

export default FormPage;
