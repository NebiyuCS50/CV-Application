import React from "react";
import logo from "./assets/logo.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo" />
        <p>CVgenZ</p>
      </nav>
      <main>
        <div className="border o"></div>
        <div className="border t"></div>
        <div className="border th"></div>
        <div className="border f"></div>
        <div className="border fi"></div>
        <div className="border s"></div>
        <div className="border se"></div>
        <div className="border e"></div>
        <div className="border n"></div>
        <h1>
          Create a Professional CV in just a <br />
          <span>few Minutes, Absolutely Free!</span>
        </h1>
        <p>Just fill in the form and your CV ready to use </p>
        <div className="button-group">
          <button>Create CV Now</button>
          <button>See Demo</button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
