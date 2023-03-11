import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, content,role,technology,experience,educationdetail,percentage } = education;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <span className="time">{years}</span>
          <h3 className="title">{title}</h3>
          
          {experience ? <>
            <p className="fs-6">{content}</p>
          <p><span><b>Role : </b>{role}</span></p>
          <p><span><b>Technologies Using : </b>{technology}</span></p>
          </>
        :
        
        null}
        {educationdetail? <>
         <div className="d-flex align-items-center">
         <p className="fs-6">{content}</p>
         <p className="fs-6 ms-auto"><b>{percentage}</b></p>
         </div>
        
        </> : null}

          
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
