import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/common/html.png",
    title:'HTML 5'
  },
  {
    id: 2,
    image: "images/common/css3.png",
    title:'CSS 3'
  },
  {
    id: 3,
    image: "images/common/bootstrap.png",
    title:'Bootstrap 5'
  },
  {
    id: 4,
    image: "images/common/jquery.png",
    title:'Jquery'
  },
  
  {
    id: 5,
    image: "images/common/react.png",
    title:'React'
  },
  {
    id: 6,
    image: "images/common/redux.png",
    title:'Redux'
  },
  {
    id: 7,
    image: "images/common/wordpress.png",
    title:'wordpress'
  },
  {
    id: 8,
    image: "images/common/photoshop.png",
    title:'Photoshop'
  },
  {
    id: 9,
    image: "images/common/figma.png",
    title:'Figma'
  },
];

function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row justify-content-center">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-2 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner" title={brandlogo.title}>
                  <img src={brandlogo.image} title={brandlogo.title} alt={brandlogo.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
