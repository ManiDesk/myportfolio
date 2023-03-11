import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    experience :true,
    title: "OREOPS Framework Pvt Ltd - Erode",
    years: "OCTOBER 2019  —  PRESENT",
    content:
      "OREOPS is low code platform web application tool to develop mobile application Android and iOS apps without a single line of code.",
      companyname:'OREOPS Framework Pvt Ltd - Erode',
      role:'Senior UI  Developer',
      technology:'HTML, CSS, Bootstrap ,JavaScript, jQuery, React JS, Redux. Wordpress, Photoshop',
      companydescription:'OREOPS is low code platform web application tool to develop mobile application Android and iOS apps without a single line of code.'

  },
  {
    id: 2,
    experience :true,
    title: "Red Ant Media LLP - Chennai",
    years: "FEBRUARY 2019  —  OCTOBER 2019",
    content:
      "Red ant media is a creative digital agency, offering digital marketing services and technology services(Web and mobile app) to clients.",
      companyname:'Red Ant Media LLP - Chennai',
      role:'Software Engineer – Web designer',
      technology:'HTML, CSS, Bootstrap ,JavaScript, jQuery, PHP, Wordpress',
      companydescription:'Red ant media is a creative digital agency, offering digital marketing services and technology services(Web and mobile app) to clients.'
  },
  {
    id: 3,
    experience :true,
    title: "Panamon Technologies - Chennai",
    years: "JUNE 2017  —  FEBRUARY 2019",
    content:
      "Panamon Technologies is a creative design studio set up  in the Mobile and PC environment.",
      companyname:'Panamon Technologies - Chennai',
      role:'Junior Software Engineer – Web designer',
      technology:'HTML, CSS, Bootstrap ,JavaScript, jQuery, PHP, ',
      companydescription:'Panamon Technologies is a creative design studio set up  in the Mobile and PC environment.'
  },
];

const experienceData = [
  {
    id: 1,
    title: "BE (ECE)",
    educationdetail :true,
    years: "2013 - 2017",
    content:
      "Excel Engineering College , Kumarapalayam – Anna University",
      percentage : '6.76 CGPA'
  },
  {
    id: 2,
    educationdetail :true,
    title: "HSC",
    years: "2012 - 2013",
    content:
      "Government Boys Higher Secondary School, Pallipalayam – State Board",
      percentage : '83.6 %'
  },
  {
    id: 3,
    educationdetail :true,
    title: "SSLC",
    years: "2011 - 2012",
    content:
      "Government Boys Higher Secondary School, Pallipalayam – State Board",
      percentage:'86.6 %'
  },
];

function Experiences() {
  return (
    <>
    <section id="experience">
      <div className="container">
        <Pagetitle title="Work Experience" />
        <div className="row">
          <div className="col-md-12">
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section id="eduexperience">
      <div className="container">
        <Pagetitle title="Education Experience" />
        <div className="row">
                   <div className="col-md-12">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Experiences;
