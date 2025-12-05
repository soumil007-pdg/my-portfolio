import React from "react";
// REPLACE these with your actual project screenshots
import logo from "../assets/logoheader.png"; 
import advocatImg from "../assets/advocate.png"; // Image for Advocat
import artImg from "../assets/artiulation.png";     // Image for Articulation (Rename your screenshot to match)
import mlImg from "../assets/project3.png";      // Image for ML Project
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="nav">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="hamburger">
        <div className="top-bun"></div>
        <div className="meat"></div>
      </div>
      
      <div className='location'>New Delhi, INDIA</div>
      <div className="line"></div>

      {/* --- PROJECT 1: ADVOCAT-EASY --- */}
      <div className='pic-block'>
        <img src={advocatImg} alt='Advocat-Easy' className='image-og'></img>
      </div>
      <p className='tagger-one'>ADVOCAT-EASY</p>
      <p className='tagger-des'>
        A dedicated legal guidance web application designed <br></br>
        to simplify legal processes and provide accessible resources.
      </p>

      {/* --- PROJECT 2: ARTICULATION (Replaced Cine-Resource) --- */}
      <div className='pic-block-two'>
        <img src={artImg} alt='Articulation' className='image-og'></img>
      </div>
      <p className='tagger-two'>ARTICULATION</p>
      <p className='tagger-des-two'>
        {/* Update this description to match your specific project */}
        A specialized project focused on signal processing and <br></br>
        structural analysis using advanced computational models.
      </p>

      {/* --- PROJECT 3: ML & PATTERN REC. --- */}
      <div className='pic-block-three'>
        <img src={mlImg} alt='ML Projects' className='image-og'></img>
      </div>
      <p className='tagger-three'>CUSTOMER SEGMENTATION</p>
      <p className='tagger-des-three'>
        
    Built a strategic marketing tool using K-Means clustering for customer segmentation 
    and a Lookalike model to target high-value users.
      </p>

      <div className='name-block'></div>
      <div className='name'>SOUMIL</div>
    </div>
  );
};

export default Home;