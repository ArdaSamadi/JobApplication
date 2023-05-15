import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Testimonial</p> */}
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          We witness the amazing transformations of our students, who work
          incredibly smart to improve their lives.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          I was hesitant to join CodeCamp because I had no coding experience,
          but I'm so glad I did! The program was challenging but rewarding, and
          the support I received from my classmates and instructors was
          invaluable. I'm now working as a front-end developer and loving it.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Eden Blunt</h2>
      </div>
    </div>
  );
};

export default Testimonial;
