import React from "react";

const Experience = ({ formData, handleArrayChange, addEntry }) => {
  return (
    <div className="bg-[#f9f9fb] p-8 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] max-w-[600px] mx-auto my-10 font-['Roboto',sans-serif]">
      <h2 className="text-[1.6rem] font-semibold text-[#222] mb-6 text-center uppercase tracking-[0.5px]">
        Practical Experience
      </h2>
      {formData.experience.map((exp, index) => (
        <div
          className="flex flex-col gap-3 mb-5 bg-white border border-[#e0e0e0] p-4 rounded-lg"
          key={index}
        >
          <input
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#222] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
            type="text"
            name="companyName"
            value={exp.companyName}
            onChange={(e) => handleArrayChange("experience", index, e)}
            placeholder="Company Name"
            required
          />

          <input
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#222] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
            type="text"
            name="positionTitle"
            value={exp.positionTitle}
            onChange={(e) => handleArrayChange("experience", index, e)}
            placeholder="Position Title"
            required
          />

          <textarea
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#222] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)] min-h-[80px]"
            name="mainTasks"
            value={exp.mainTasks}
            onChange={(e) => handleArrayChange("experience", index, e)}
            placeholder="Main Tasks"
            required
          />

          <input
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#222] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
            type="date"
            name="startDate"
            value={exp.startDate}
            onChange={(e) => handleArrayChange("experience", index, e)}
            placeholder="Start Date"
            required
          />

          <input
            className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#222] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
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
        className="bg-[#4b6bfb] text-white border-none py-3 px-5 rounded-lg cursor-pointer text-base font-medium transition-all duration-300 hover:bg-[#3451d1] hover:-translate-y-[2px] block mx-auto"
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
