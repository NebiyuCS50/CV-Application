import React from "react";
import logo from "./assets/logo.png";
import "./LandingPage.css";
import imgae_1 from "./assets/pexels-danxavier-1239291.jpg";
import image_2 from "./assets/pexels-olly-733872.jpg";
import image_3 from "./assets/pexels-stefanstefancik-91227.jpg";

const LandingPage = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo" />
        <p>CVgenZ</p>
      </nav>
      <main>
        <div className="border o"></div>
        <div className="border t">
          <img src={imgae_1} alt="Image-1" />
        </div>
        <div className="border th"></div>
        <div className="border f"></div>
        <div className="border fi"></div>
        <div className="border s"></div>
        <div className="border se">
          <img src={image_2} alt="Image-2" />
        </div>
        <div className="border e"></div>
        <div className="border n">
          <img src={image_3} alt="Image-3" />
        </div>
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
