import React from "react";
import "./fourth.css";
import stamp from "../assets/stamp.png";
// CHANGED: Imported your actual project image instead of the yellow placeholder
import artImg from "../assets/artiulation.png"; 

export const Fourth = () => {
  return (
    <div className="fourth">
      <div className="four-bloc"></div>
      
      {/* Changed "website" to "showcase" to sound more portfolio-like */}
      <p className="web">showcase</p>
      
      <img src={stamp} alt="stamp" className="stamp"/>
      <div className="four-line"></div>
      
      <div className="latest">Latest Release</div>
      
      <div className="des-lat">
        Fresh from the lab — <br />
        A convergence of signal <br />
        processing & design.
      </div>
      
      <div className="tip">view!</div>
      <div className="tp-des">Click the image to explore</div>
      <div className="four-line-two"></div>
      
      <div className="yell-blocl">
        {/* CHANGED: Used artImg here */}
        <img src={artImg} alt="Articulation Project" className="yell-fill" />
      </div>
      
      {/* CHANGED: Project Title */}
      <div className="think">ARTICULATION</div>
      
      <div className="new-org"></div>
      <div className="new">new</div>
      
      {/* CHANGED: Project Description */}
      <div className="new-des-think">
        Articulation is a specialized computational model focusing on <br />
        signal processing and structural analysis. It bridges the gap <br />
        between raw data and visual representation.
      </div>
      
      <div className="four-lin"></div>
      <div className="four-lin-del"></div>
      
      {/* CHANGED: Philosophy Header - Merging Acting & Engineering */}
      <div className="text-head-one">Script, Code</div>
      <div className="delivery">Perform</div>
      
      <div className="block-a-four"><p className="block-a-let-four">A</p></div>
      
      {/* CHANGED: The Manifesto Text */}
      <p className="go-des">
        great product requires the <br />
        discipline of an actor and the <br />
        logic of an engineer. I build
      </p>
      <p className="go-des-two">
        experiences that feel human.
      </p>
    </div>
  );
};

export default Fourth;