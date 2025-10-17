import React from "react";
// import "./Education.css";
const EducationInfo = ({ formData, handleArrayChange, addEntry }) => {
  return (
    <div className="bg-[#f9f9fb] p-8 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] max-w-[600px] mx-auto my-10 font-['Roboto',sans-serif]">
      <h2 className="text-[1.6rem] font-semibold text-[#222] mb-6 text-center uppercase tracking-[0.5px]">
        Education
      </h2>
      {formData.education.map((edu, index) => (
        <div
          className="flex flex-col gap-3 mb-5 bg-white border border-[#e0e0e0] p-4 rounded-lg"
          key={index}
        >
          <input
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#222] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
            name="schoolName"
            value={edu.schoolName}
            onChange={(e) => handleArrayChange("education", index, e)}
            placeholder="School Name"
          />
          <input
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#222] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
            name="titleOfStudy"
            value={edu.titleOfStudy}
            onChange={(e) => handleArrayChange("education", index, e)}
            placeholder="Title of Study"
          />
          <input
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#222] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
            type="date"
            name="dateOfStudy"
            value={edu.dateOfStudy}
            onChange={(e) => handleArrayChange("education", index, e)}
          />
        </div>
      ))}
      <button
        className="bg-[#4b6bfb] text-white border-none py-3 px-5 rounded-lg cursor-pointer text-base font-medium transition-all duration-300 hover:bg-[#3451d1] hover:-translate-y-[2px] block mx-auto"
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
