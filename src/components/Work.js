import React from "react";
import {
  MdEmail,
  MdWifiCalling2,
  MdPendingActions,
  MdCode,
  MdWork,
} from "react-icons/md";

const Work = () => {
  const workInfoData = [
    {
      image: <MdEmail />,
      title: "Apply",
      text: "Enter your email address in the bottom of the page or send us an email to info@mail.com",
    },
    {
      image: <MdWifiCalling2 />,
      title: "Interview",
      text: "Our admissions team will review your application and schedule an interview with you.",
    },
    {
      image: <MdPendingActions />,
      title: "Enroll",
      text: "If you are accepted, you will receive an offer to join our program. Simply accept the offer and fill the enrollment form.",
    },
    // {
    //   image: <MdCode />,
    //   title: "Learn",
    //   text: "Our 12-week program is intensive and hands-on. You will learn to code and develop real-world projects.",
    // },
    {
      image: <MdWork />,
      title: "Job Placement",
      text: "We work with our hiring partners to help you find a job in tech after you graduate.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Work</p> */}
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          At CodeCamp, we believe that anyone can learn to code and start a
          career in tech, regardless of their background or previous experience.
          Our program is designed to be accessible to everyone, and we welcome
          students from all walks of life.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              {data.image}
              {/* <img src={data.image} alt="" /> */}
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
