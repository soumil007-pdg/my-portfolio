import React from "react";
import "./second.css";
import face from "../assets/avat4.jpeg";
export const Second = () => {
  return (<div className="second">
    <div className="sec-line"></div>
    <div className="sec-line-two"></div>
    <p className="inter">Digital</p>
    <p className="artist">auteur!</p>
    <div className="sec-line-three"></div>
    <div className="pic-bay">
        <img src={face} alt="face" className="face" />
    </div>
    
  </div>
  );
};


export default Second;
