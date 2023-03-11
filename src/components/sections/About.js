import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Bolby",
  avatarImage: "/images/avatar-2.svg",
  content:
    "Totally 6 years of IT Experience with strong focus on UI Technologies including Design, Code and Implementation.",
  content2:
    "Experience in designing and developing professional UI web applications using front - end technologies like HTML, CSS, JavaScript,  JQuery, Bootstrap, React Js,Redux",
  content3:
    "Experience in using Photoshop, Figma for creating Wireframes, Prototypes, Logos, Banners, and Images",
  content4:
    "Designed web applications and web contents utilizing various Search Engine Optimization (SEO) techniques and PWA (Progressive Web App).",
    content5: 'Expertise in Responsive Web Design (RWD) and Cross Browser Compatibility using Bootstrap.',
    content6: 'Experience in view rendering Java Script libraries such as React JS Library.',
    content7: 'Experience using all popular text-Editors and IDE’s like, Sublime Text, Notepad++, Microsoft Visual Studio and Code.',
    content8: 'Well Knowledge in CSS Flexbox Concept.',
    content9: 'Good Experience in Wordpress design development..',
};

const progressData = [
  {
    id: 1,
    title: "UI/UX Development",
    percantage: 95,
    progressColor: "#02ab46",
  },
  {
    id: 2,
    title: "Font-End Developement (React,Redux)",
    percantage: 70,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "UI/UX Design (Photoshop,Figma)",
    percantage: 60,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "Wordpress Design",
    percantage: 80,
    progressColor: "#FFD15C",
  },
];


function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">

          <div className="col-md-12 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center text-md-left mb-5" style={{ width: '100px', margin: 'auto' }}>
                    <img src={aboutContent.avatarImage} alt={aboutContent.name} />
                  </div>
                </div>

                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <p>{aboutContent.content2}</p>
                  <p>{aboutContent.content3}</p>
                  <p>{aboutContent.content4}</p>

                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                    <div className="mt-3">
                      <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn  btn-outline-secondary  ">
                        Read More
                      </button>
                      {/* <!-- Modal --> */}
 <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
 <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
   <div className="modal-content">
     <div className="modal-header">
       <h1 className="modal-title fs-5" id="staticBackdropLabel">About MySelf</h1>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div className="modal-body">
      <ul>
        <li>{aboutContent.content}</li>
        <li>{aboutContent.content2}</li>
        <li>{aboutContent.content3}</li>
        <li>{aboutContent.content4}</li>
        <li>{aboutContent.content5}</li>
        <li>{aboutContent.content6}</li>
        <li>{aboutContent.content7}</li>
        <li>{aboutContent.content8}</li>
        <li>{aboutContent.content9}</li>
      </ul>
    
     </div>
     <div className="modal-footer">
     <button type="button" className="btn btn-default" data-bs-dismiss="modal">OK</button>
       <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
     </div>
   </div>
 </div>
</div>
                    </div>
                    <div className="mt-3">
                      <a href="https://firebasestorage.googleapis.com/v0/b/maniportfolio-1891c.appspot.com/o/maniresume.docx?alt=media&token=e6e3b22d-8d58-4ba9-b0ab-474eb7ba63cf" download className="btn btn-default">
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>



      </div>
  

    </section>
  );
}

export default About;
 