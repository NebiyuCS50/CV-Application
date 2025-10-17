import React from "react";
// import "./General.css";

const GeneralInfo = ({ formData, handleChange }) => {
  return (
    <div className="flex flex-col gap-[10px] text-black font-['Roboto',sans-serif]">
      <h2 className="text-black text-xl font-semibold">General Information</h2>
      <label className="text-black flex flex-col gap-[5px]">
        Name:
        <input
          className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#333] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="text-black flex flex-col gap-[5px]">
        Email:
        <input
          className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#333] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className="text-black flex flex-col gap-[5px]">
        Phone:
        <input
          className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#333] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)]"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label className="text-black flex flex-col gap-[5px]">
        About Me:
        <textarea
          className="p-[12px_14px] border border-[#ccc] rounded-lg text-base text-[#333] bg-white outline-none transition-all duration-200 focus:border-[#4b6bfb] focus:shadow-[0_0_0_3px_rgba(75,107,251,0.1)] resize-none"
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
