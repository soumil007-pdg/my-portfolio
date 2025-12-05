import React from "react";
import "./third.css";
import side from "../assets/avat1.png";
export const Third = () => {
  return (<div className="third">
    <div className="pic-side-boc">
        <img src={side} alt="side" className="boc-fill" />
    </div>
    <div className="third-line"></div>
    <div className="third-line-two"></div>
    <div className="third-line-three"></div>
    <div className="third-line-four"></div>
    <p className="text-one">SOFTWARE ENGINEER</p>
    <p className="text-two">VISUAL STORYTELLER</p>
    <p className="text-three">CREATIVE DEVELOPER</p>
    <p className="text-four">based in <b>INDIA</b></p>
    <div className="block-a"><p className="block-a-let">I</p></div>
    <p className="text-ablaz">
        am a multidisciplinary engineer <br />
        exploring the intersection of <br />
        technology and storytelling, <br />
    </p>
    <p className="ablaz-two">building intelligent applications and <br />
                  memorable projects that bridge the gap <br />
                  between logic and imagination.</p>
  </div>
  );
};
export default Third;
