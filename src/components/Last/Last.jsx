import React from "react";
import "./last.css";

export const Last = () => {
  return (
    <div className="last">
        <div className="last-line"></div>
        
        {/* Scrolling Marquee */}
        <div className="chaniru">
            <div className="marquee">
                <div className="img1">Let's</div>  
                <div className="img1">Tell</div> 
                <div className="img1">Your</div> 
                <div className="img1">Story</div>
                <div className="img1">
                    <div className="last-blk">@soumil</div>
                </div>
            </div>
        </div>

        <div className="last-line-two"></div>
        
        <div className="names">&#169;Soumil</div>
        

        
        {/* Social Links - Update hrefs with your actual URLs */}
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="last-link-one">LinkedIn</a>
        <a href="https://github.com/soumil007-pdg" target="_blank" rel="noreferrer" className="last-link-two">GitHub</a>
  </div>
  );
};

export default Last;