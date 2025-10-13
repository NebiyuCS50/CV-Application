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
          few Minutes, Absolutely Free!
        </h1>
      </main>
    </div>
  );
};

export default LandingPage;
