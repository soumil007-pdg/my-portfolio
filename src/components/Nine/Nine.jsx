import React from "react";
import "./nine.css";
// Replace these with actual images of your film/project
import filmImg from  "../assets/vector6.jpeg"; 
import techImg from  "../assets/vector5.jpeg";

export const Nine = () => {
  return (
    <div className="nine">
        <div className="nine-line"></div>
        <div className="nine-line-two"></div>
        <div className="nine-line-three"></div>
        
        {/* --- PROJECT 1: SHORT FILM --- */}
        <div className="nine-block">
            <img src={filmImg} alt="Sanskrit Short Film" className="nine-fill" />
        </div>
        <p className='tagr-one'>THE FORGOTTEN SCRIPT</p> {/* Replace with Film Title */}
        
        <div className="new-org-nine"></div>
        <div className="new-nine">Film</div>
        
        <div className="nine-des-think">
            <b>Award Winning Short Film</b> <br />
            Won 3rd Prize at International Goa Film Festival. <br />
            A narrative exploration in Sanskrit.
        </div>


        {/* --- PROJECT 2: TECH / EXPERIMENT --- */}
        <div className="nine-block-two">
            <img src={techImg} alt="Creative Project" className="nine-fill" />
        </div>
        <p className='tagr-two'>SMART INDIA HACKATHON</p>
        
        <div className="new-org-nine-two"></div>
        <div className="new-nine-two">Tech</div>
        
        <div className="nine-des-think-two">
            <b>National Finalist Project</b> <br />
            An innovative solution developed for the <br />
            Smart India Hackathon 2023.
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="cap-work">All Projects</div>
        <div className="credit">
            Check out my GitHub <br />
        </div>
        <a href="https://github.com/soumil007-pdg" target="_blank" rel="noreferrer" className="here">Click Here</a>
  </div>
  );
};

export default Nine;