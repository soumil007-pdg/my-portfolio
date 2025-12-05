import React from "react";
import "./six.css";

export const Six = () => {
  return (
    <div className="six">
      <div className="six-line"></div>
      
      <div className="row">
        {/* COLUMN 1: Theatre - NSD */}
        <div className="column">
          <div className="sotd">Theatre</div>
          <div className="st-head">NSD Festival</div>
          <div className="award-text">Official Selection</div>
          <div className="role-tag">Writer & Actor</div>
        </div>

        {/* COLUMN 2: Cinema - Goa */}
        <div className="column">
          <div className="sotd-two">Cinema</div>
          <div className="st-head-two">Goa Film Fest</div>
          <div className="award-text">3rd Prize</div>
          <div className="role-tag">Actor (Sanskrit)</div>
        </div>

        {/* COLUMN 3: Cinema - Ahmedabad */}
        <div className="column">
          <div className="sotd-three">Cinema</div>
          <div className="st-head">Ahmedabad Fest</div>
          <div className="award-text">Official Selection</div>
          <div className="role-tag">Actor</div>
        </div>

        {/* COLUMN 4: Tech - SIH (Fancy Version) */}
        <div className="column">
          <div className="sotd-three">Innovation</div>
          <div className="st-head">Smart India Hackathon</div>
          <div className="award-text">National Finalist</div>
          <div className="role-tag">Tech Lead</div>
        </div>
      </div>

      <div className="six-line-two"></div>
    </div>
  );
};

export default Six;