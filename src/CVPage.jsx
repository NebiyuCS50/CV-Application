import React from "react";
import image from "./assets/pexels-danxavier-1239291.jpg";

const CVPage = ({ data, onClose }) => {
  return (
    <div className="min-h-screen font-roboto bg-gray-100">
      <header className="bg-[#11073D] flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 px-6 md:px-12 py-6">
        <img
          className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white object-cover"
          src={image}
          alt="Profile"
        />
        <div className="flex flex-col justify-center md:ml-10 text-center md:text-left">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {data.name}
          </h1>
          <h3 className="text-white text-lg md:text-2xl mt-2">
            {data.education?.[0]?.titleOfStudy || ""}
          </h3>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 md:px-10 py-8">
        <aside className="bg-gray-100 w-full lg:w-[300px] flex-shrink-0 p-4 rounded-md overflow-y-auto max-h-[80vh] shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">CONTACT</h2>
          <div className="h-[1px] bg-gray-400 mb-3 w-11/12"></div>
          <div className="text-sm text-gray-700 space-y-1 ml-2">
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            EDUCATION
          </h2>
          <div className="h-[1px] bg-gray-400 mb-3 w-11/12"></div>
          {data.education?.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-md shadow-sm text-sm text-gray-700 space-y-1 ml-2"
            >
              <p className="font-medium">School: {edu.schoolName}</p>
              <p>Title: {edu.titleOfStudy}</p>
              <p>Date: {edu.dateOfStudy}</p>
            </div>
          ))}

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            QUALIFICATION
          </h2>
          <div className="h-[1px] bg-gray-400 mb-3 w-11/12"></div>
          {data.qualifications?.map((qual, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-md shadow-sm text-sm text-gray-700 space-y-1 ml-2"
            >
              <p>Title: {qual.title}</p>
              <p>Institution: {qual.institution}</p>
              <p>Year: {qual.yearObtained}</p>
            </div>
          ))}
        </aside>

        <section className="flex-1 bg-white rounded-md shadow-sm p-6 overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            ABOUT ME
          </h2>
          <div className="h-[1px] bg-gray-400 mb-4 w-11/12"></div>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            {data.aboutMe || "No information provided."}
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            WORK EXPERIENCE
          </h2>
          <div className="h-[1px] bg-gray-400 mb-4 w-11/12"></div>
          {data.experience?.map((exp, index) => (
            <div key={index} className="mb-6">
              <p className="text-lg font-semibold text-gray-800">
                {exp.companyName}
              </p>
              <p className="text-sm text-gray-600 -mt-1">{exp.positionTitle}</p>
              <p className="text-xs text-gray-500 -mt-1">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-gray-700 text-sm mt-2">
                • {exp.mainTasks || "No details provided"}
              </p>
            </div>
          ))}
        </section>
      </main>

      <div className="flex flex-col sm:flex-row justify-end gap-3 px-6 md:px-10 pb-8">
        <button
          onClick={() => {
            alert(
              "click the three dots on the right corner of the browser and click print then save"
            );
          }}
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-transform transform hover:-translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 13v8l-4-4" />
            <path d="m12 21 4-4" />
            <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
          </svg>
          Download
        </button>
        <button
          onClick={onClose}
          className="bg-[#11073D] hover:bg-[#1b1080] text-white px-5 py-2 rounded-md font-medium transition-transform transform hover:-translate-y-1"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CVPage;
