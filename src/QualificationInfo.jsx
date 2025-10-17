import React from "react";

const QualificationInfo = ({ formData, handleArrayChange, addEntry }) => {
  return (
    <div className="bg-[#f9f9fb] p-8 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] max-w-[600px] mx-auto my-10 font-['Roboto',sans-serif]">
      <h2 className="text-[1.6rem] font-semibold text-[#222] mb-6 text-center uppercase tracking-[0.5px]">
        Qualifications
      </h2>
      {formData.qualifications.map((qual, index) => (
        <div
          className="flex flex-col gap-3 mb-5 bg-white border border-[#e0e0e0] p-4 rounded-lg"
          key={index}
        >
          <input
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#333] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
            name="title"
            value={qual.title}
            onChange={(e) => handleArrayChange("qualifications", index, e)}
            placeholder="Title"
            required
          />

          <input
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#333] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
            type="text"
            name="institution"
            value={qual.institution}
            onChange={(e) => handleArrayChange("qualifications", index, e)}
            placeholder="Institution"
            required
          />

          <input
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#333] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
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
        className="bg-[#4b6bfb] text-white py-3 px-5 rounded-lg cursor-pointer text-base font-medium transition-all duration-300 hover:bg-[#3451d1] hover:-translate-y-[2px] block mx-auto"
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
