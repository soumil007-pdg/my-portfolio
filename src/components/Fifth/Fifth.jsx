import React from "react";
import "./fifth.css";
import bih from "../assets/avat6.jpeg";

export const Fifth = () => {
  return (
    <div className="five">
      <div className="down-text">
        I build digital stages. <br />
        Where <b>logic</b> meets <b>emotion</b>. <br />
        My process isn't just about syntax; <br />
        it's about the <i>subtext</i> — crafting <br />
        experiences that resonate long <br />
        after the screen goes dark.
      </div>
      
      {/* A clean link to your technical work */}
      <a href="https://github.com/soumil007-pdg" target="_blank" rel="noreferrer" className="myButton">
        GitHub
      </a>
      
      <div className="big-block">
        <img src={bih} alt="Soumil" className="con-bi" />
      </div>
    </div>
  );
};

export default Fifth;
