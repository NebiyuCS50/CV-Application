import React, { useState } from "react";
import logo from "./assets/logo.png";
import image_1 from "./assets/pexels-danxavier-1239291.jpg";
import image_2 from "./assets/pexels-olly-733872.jpg";
import image_3 from "./assets/pexels-stefanstefancik-91227.jpg";
import FormPage from "./FormPage";
import CVPage from "./CVPage";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCVPage, setShowCVPage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: [{ schoolName: "", titleOfStudy: "", dateOfStudy: "" }],
    qualifications: [{ title: "", institution: "", yearObtained: "" }],
    experience: [
      {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        startDate: "",
        endDate: "",
      },
    ],
    aboutMe: "",
  });

  return (
    <div>
      {!showCVPage && (
        <>
          <nav className="flex items-center mt-3 justify-start ">
            <img className="h-20 w-20 ml-0 lg:h-10w-10" src={logo} alt="logo" />
            <p className="italic font-bold text-3xl">CVgenZ</p>
          </nav>

          <main className="mt-[-20px] lg:-mt-10">
            <div className="relative h-5 w-5 rounded-full border-4 border-white bg-[#006eff] top-45 hidden sm:block lg:left-72 lg:top-60"></div>

            <div className="h-12 w-12 absolute border-4 border-white left-80 top-100 rounded-full lg:left-100 lg:top-47">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={image_1}
                alt="Image-1"
              />
            </div>

            <div className="relative h-5 w-5 border-4 border-white rounded-full top-60 left-2 bg-[#006eff] lg:left-250 lg:top-45"></div>
            <div className="relative h-5 w-5 left-25 border-3 border-white rounded-full top-75 bg-[#006eff] lg:left-240 lg:top-65 lg:w-3 lg:h-3"></div>
            <div className="relative h-5 w-5 left-45 border-4 border-white rounded-full top-32 bg-amber-400 lg:left-170 lg:top-30"></div>
            <div className="relative h-5 w-5 left-65 border-3 border-white rounded-full top-65 bg-amber-400 lg:left-82 lg:top-54 lg:w-3 lg:h-3"></div>

            <div className="relative h-12 w-12 left-5 top-60 rounded-full border-4 border-white lg:top-70 lg:left-90">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={image_2}
                alt="Image-2"
              />
            </div>

            <div className="relative h-5 w-5 left-80 top-5 rounded-full border-3 border-white bg-[#ff5e00] lg:left-210 lg:top-65 lg:h-3 lg:w-3"></div>

            <div className="relative h-12 w-12 left-6 bottom-5 rounded-full border-4 border-white lg:left-230 lg:top-55">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={image_3}
                alt="Image-3"
              />
            </div>

            <p className="text-2xl flex justify-center items-center flex-wrap mt-3 lg:text-4xl lg:font-bold lg:block lg:text-center lg:tracking-wider  ">
              Create a Professional CV in just a
              <br className="hidden lg:block" />
              <span className="m-0 lg:flex lg:justify-center lg:align-middle">
                few Minutes, Absolutely Free!
              </span>
            </p>

            <p className="flex justify-center mt-0.5 lg:mt-1.5text-xl text-pretty font-light italic">
              Just fill in the form and your CV is ready to use
            </p>

            <div className="button-group flex justify-center gap-5 mt-30 lg:mt-15 lg:gap-10">
              <button
                onClick={() => setShowForm(true)}
                className="text-2xl pt-2.5 pl-5 hover:bg-blue-400 rounded-md text-white border-0 bg-[#534caf]"
              >
                Create CV
              </button>
              <button className="text-2xl pt-2.5 pl-5 rounded-md">
                See Demo
              </button>
            </div>
          </main>

          {showForm && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm">
              <div className="bg-white p-6 rounded-lg w-full max-w-[600px] shadow-xl overflow-y-auto max-h-[90vh]">
                <FormPage
                  onClose={() => setShowForm(false)}
                  formData={formData}
                  setFormData={setFormData}
                  onSubmitComplete={() => {
                    setShowForm(false);
                    setShowCVPage(true);
                  }}
                />
              </div>
            </div>
          )}
        </>
      )}

      {showCVPage && (
        <div className="w-full min-h-screen bg-white">
          <CVPage data={formData} onClose={() => setShowCVPage(false)} />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
