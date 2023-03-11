import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Pagetitle({ title }) {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeInOut"
        animateOnce={true}
      >
        <div className="text-center"><h2 className="section-title d-inline-block">{title}</h2></div>
      </ScrollAnimation>
      <div className="spacer" data-height="60"></div>
    </>
  );
}

export default Pagetitle;
