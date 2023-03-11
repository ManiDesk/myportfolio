import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-11.svg",
    title: "UI/UX Development",
    content:
      "5+ Year Experience in designing and developing professional UI web applications using front - end technologies like HTML, CSS, JavaScript,  JQuery, Bootstrap",
    color: "#ff006e",
    contentColor: "light",
    imgwidth:'95px',
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Front End Developement(React Js,Redux)",
    content:
      "3+ Year Experience in view rendering Java Script libraries such as React JS Library,Using Reactjs with rendering the html to individual components and Familiar with class component and functional component.",
    color: "#8338ec",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/service-1.svg",
    title: "UI/UX Design(Photoshop,Figma)",
    content:
      "Experience in using Photoshop, Figma for creating Wireframes, Prototypes, Logos, Banners, and Images.",
    color: "#0034ff",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Technology" />
        <div className="row fix-spacing align-items-center">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
}

export default Services;
