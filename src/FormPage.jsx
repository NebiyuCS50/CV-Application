import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import Experience from "./Experience";
import QualificationInfo from "./QualificationInfo";

const FormPage = ({ onClose, formData, setFormData, onSubmitComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (section, index, e) => {
    if (!Array.isArray(formData[section])) return;

    const newArray = [...formData[section]];
    newArray[index] = {
      ...newArray[index],
      [e.target.name]: e.target.value,
    };

    setFormData({
      ...formData,
      [section]: newArray,
    });
  };

  const addEntry = (section, newEntry) => {
    if (!Array.isArray(formData[section])) return;

    setFormData({
      ...formData,
      [section]: [...formData[section], newEntry],
    });
  };

  const handleNext = () => {
    if (!validateCurrentStep()) {
      alert("Please fill all required fields before continuing.");
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    onSubmitComplete();
  };
  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return formData.name && formData.email && formData.phone;
      case 1:
        return formData.education.every(
          (edu) => edu.schoolName && edu.titleOfStudy && edu.dateOfStudy
        );
      case 2:
        return formData.qualifications.every(
          (qual) => qual.title && qual.institution && qual.yearObtained
        );
      case 3:
        return formData.experience.every(
          (exp) =>
            exp.companyName &&
            exp.positionTitle &&
            exp.mainTasks &&
            exp.startDate &&
            exp.endDate
        );
      case 4:
        return formData.aboutMe.trim() !== "";
      default:
        return false;
    }
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
    <form className="" onSubmit={handleSubmit}>
      {renderStep()}

      <div className="flex items-center justify-center gap-4 mt-5 sticky bottom-0 bg-white p-4 z-10">
        {currentStep > 0 && (
          <button
            type="button"
            onClick={handlePrev}
            className="bg-[#534caf] text-white border-none py-2.5 px-5 rounded-md cursor-pointer text-center hover:bg-[#3b2f7b]"
          >
            Previous
          </button>
        )}
        {currentStep < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="bg-[#534caf] text-white border-none py-2.5 px-5 rounded-md cursor-pointer text-center hover:bg-[#3b2f7b]"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="bg-[#534caf] text-white border-none py-2.5 px-5 rounded-md cursor-pointer text-center hover:bg-[#3b2f7b]"
          >
            Submit
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          className="bg-[#534caf] text-white border-none py-2.5 px-5 rounded-md cursor-pointer text-center hover:bg-[#3b2f7b]"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default FormPage;
