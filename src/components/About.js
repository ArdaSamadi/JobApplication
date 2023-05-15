import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading">What Makes Bootcamp Different?</h1>
        <p className="primary-text">
          Our Coding Bootcamp is designed to equip you with the skills and
          knowledge necessary to start a career in tech. With our intensive and
          hands-on curriculum, you will learn to code and develop real-world
          projects in just 12 weeks. Our experienced instructors and mentors
          will guide you every step of the way, providing you with personalized
          attention and support.
        </p>
      </div>
    </div>
  );
};

export default About;
