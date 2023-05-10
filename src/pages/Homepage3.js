import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import About from "../components/sections/About";
import Blogs from "../components/sections/Blogs";
import Brandlogos from "../components/sections/Brandlogos";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experiences";
import Herosection from "../components/sections/Herosection";
import Pricing from "../components/sections/Pricing";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Works from "../components/sections/Works";
import Skillsection from "../components/sections/SkillsSecion";
import CurrentProjectdetails from "../components/sections/CurrentProjectdetails";
import ContactDetails from "../components/sections/ContactDetails";

function Homepage3(props) {
  return (
    <>
      <Header3 logoSource="/images/logo.svg" />
      <main className="content-3">
        <Element name="section-home" style={{paddingTop:'70px'}} >
          <ReactCursorPosition>
            <Herosection downloadlink = {props.downloadlink} />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About downloadlink = {props.downloadlink} />
        </Element>
        <Element name="section-skills">
          <Skillsection />
        </Element>
        <Element name="section-services">
          <Services />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-works">      
          <CurrentProjectdetails />
        </Element>
        <Element name="section-brandlogos">
          <Brandlogos />
        </Element>
        <Element name="section-contact">
          <ContactDetails />
        </Element>
       
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
     
    </>
  );
}

export default Homepage3;
