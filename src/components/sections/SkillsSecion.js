import React from "react";
import Pagetitle from "../elements/Pagetitle";


const circleprogressbar = [
  {
    id: 1,
    title: "HTML",
    circlepercantage: 100,
    circleprogressColor: "#fb5607",
  },
  {
    id: 2,
    title: "CSS",
    circlepercantage: 100,
    circleprogressColor: "#ff006e",
  },
  {
    id: 3,
    title: "Jquery",
    circlepercantage: 80,
    circleprogressColor: "#8338ec",
  },
  {
    id: 4,
    title: "Bootstrap",
    circlepercantage: 95,
    circleprogressColor: "#3a86ff",
  },
  {
    id: 5,
    title: "React",
    circlepercantage: 85,
    circleprogressColor: "#00b4d8",
  }  ,
  {
    id: 6,
    title: "Redux",
    circlepercantage: 70,
    circleprogressColor: "#f15bb5",
  },
  {
    id: 7,
    title: "Photoshop",
    circlepercantage: 80,
    circleprogressColor: "#4361ee",
  },
  {
    id: 8,
    title: "Wordpress",
    circlepercantage: 70,
    circleprogressColor: "#ff006e",
  },
  {
    id: 9,
    title: "Figma",
    circlepercantage: 80,
    circleprogressColor: "#8338ec",
  },
  {
    id: 10,
    title: "CSS Flexbox",
    circlepercantage: 95,
    circleprogressColor: "#06d6a0",
  }



]

function Skillsection() {
  return (
    <section id="skillsection">
      <div className="container">
        <Pagetitle title="Technical Skills" />
       
      
        <div className="row">


          <div className="circle-progress-container">
            <div className="row fix-spacing justify-content-center">
              {circleprogressbar.map((circleprogress) => (
                <div key={circleprogress.id} className="col-lg-3 col-md-3  col-sm-4">
                  <div className="circle-progress" data-percentage={circleprogress.circlepercantage}>
                    <span className="circle-progress-left">
                      <span className="circle-progress-bar" style={{ borderColor: circleprogress.circleprogressColor }}></span>
                    </span>
                    <span className="circle-progress-right">
                      <span className="circle-progress-bar" style={{ borderColor: circleprogress.circleprogressColor }}></span>
                    </span>
                    <div className="circle-progress-value">
                      <div className="skill-item p-3">
                        <div className="skill-info clearfix">
                          <span className="fs-6 mb-2"> {circleprogress.circlepercantage} %</span>
                          <h4 className="m-0  text-uppercase">{circleprogress.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>




        </div>
       


      </div>

    </section>
  );
}

export default Skillsection;
