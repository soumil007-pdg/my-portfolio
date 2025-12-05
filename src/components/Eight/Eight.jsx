import React from "react";
import "./eight.css";

export const Eight = () => {
  return (
    <div className="eight">
      <div className="eight-bloc"></div>
      
      {/* Headline */}
      <p className="art">journey</p>
      
      <div className="art-des">
        My path hasn't been a straight line. <br />
        It's a curated mix of logic, code, <br />
        performance, and storytelling. <br />
        Here is how I built my foundation.
      </div>

      <div className="awwwards">Education</div>
      <div className="com">
        <b>Information and Technology</b> <br />
        Dr. Akhilesh Das Gupta Institute of Professional Studies <br />
      </div>

      <div className="testimonials-section">
        {/* Radio Inputs for CSS Slider */}
        <input type="radio" name="slider" title="Engineering" checked="checked" className="slider__nav"/>
        <input type="radio" name="slider" title="Acting" className="slider__nav"/>
        <input type="radio" name="slider" title="Tech Stack" className="slider__nav"/>
        <input type="radio" name="slider" title="Creative" className="slider__nav"/>
        
        <div className="slider__inner">
          
          {/* SLIDE 1: ENGINEERING */}
          <div className="slider__contents">
            <quote>01</quote>
            <h2 className="slider__caption">Engineering</h2>
            <p className="slider__txt">
              pursued IT. Built a strong foundation in <br />
              Algorithms, Data Structures, and Computational Logic.
            </p>
          </div>

          {/* SLIDE 2: ACTING */}
          <div className="slider__contents">
            <quote>02</quote>
            <h2 className="slider__caption">Theatre (NSD)</h2>
            <p className="slider__txt">
              Trained at the National School of Drama. Learned the art of <br />
              empathy, stage presence, and narrative structure.
            </p>
          </div>

          {/* SLIDE 3: TECH STACK */}
          <div className="slider__contents">
            <quote>03</quote>
            <h2 className="slider__caption">The Tech Stack</h2>
            <p className="slider__txt">
              Frontend: React.js, Tailwind, GSAP. <br />
              Backend: Node.js, Python, MongoDB. <br />
              ML: K-Means Clustering, Signal Processing.
            </p>
          </div>

          {/* SLIDE 4: CREATIVE */}
          <div className="slider__contents">
            <quote>04</quote>
            <h2 className="slider__caption">Creative Suite</h2>
            <p className="slider__txt">
              Direction, Screenwriting, Video Editing. <br />
              Merging visual aesthetics with functional design.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eight;