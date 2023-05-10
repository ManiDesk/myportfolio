import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

const allData = [
    {
        id: 11,
        title: "Tactive + ",
        projtitle: 'Product',
        image: "images/project/lnt.png",
        projLink: 'https://lntdev.oreapps.com/',
        websitebadge1: 'React ',
        websitebadge2: 'Bootstrap',
        websitebadge3: '',


    },
    {
        id: 2,
        title: "Sterlo",
        projtitle: 'Product',
        image: "images/project/sterloproductmain.png",
        projLink: 'https://studio.sterlo.io/',
        websitebadge1: 'React ',
        websitebadge2: 'Bootstrap',

    },
    {
        id: 1,
        title: "Sterlo",
        projtitle: 'Website',
        image: "images/project/sterloproduct.png",
        projLink: 'https://www.sterlo.io/',
        websitebadge1: '',
        websitebadge2: '',
        websitebadge3: 'wordpress',


    },
   
    {
        id: 3,
        title: "Sterlo",
        projtitle: 'Blog',
        image: "images/project/sterloblog.png",
        projLink: 'https://www.sterlo.io/blog/',
        websitebadge1: '',
        websitebadge2: '',
        websitebadge3: 'wordpress',

    },
    {
        id: 4,
        title: "Sterlo",
        projtitle: 'Help',
        image: "images/project/sterlohelp.png",
        projLink: 'https://www.sterlo.io/help/documentation/getting-started/',
        websitebadge1: '',
        websitebadge2: '',
        websitebadge3: 'wordpress',

    },
    {
        id: 5,
        title: "Sterlo",
        projtitle: 'Support',
        image: "images/project/sterlosupport.png",
        projLink: 'https://support.sterlo.io/portal/en/home',
        websitebadge1: '',
        websitebadge2: '',
        websitebadge3: 'wordpress',

    },
    {
        id: 6,
        title: "Sterlo",
        projtitle: 'Marketplace',
        image: "images/project/store.png",
        projLink: 'https://stageweb.sterlo.io/store',
        websitebadge1: '',
        websitebadge2: '',
        websitebadge3: 'wordpress',

    },
    {
        id: 7,
        title: "ILCE",
        projtitle: 'Website',
        image: "images/project/ilce.png",
        projLink: 'https://www.ilce.in/',
        websitebadge1: '',
        websitebadge2: '',
        websitebadge3: 'wordpress',

    },

];

const owndata = [
    {
        id: 11,
        title: "PWA",
        projtitle: 'TodoApp',
        image: "images/project/own.png",
        projLink: 'https://manitodoapp.web.app/',
        websitebadge1: 'React ',
        websitebadge2: 'Bootstrap',
        websitebadge3: '',

    },

];
const olddata = [
    {
        id: 1,
        title: "The Pomegranates",
        projtitle: 'Website',
        image: "images/project/oldwebsite/pomegranetes.png",
        projLink: 'https://thepomegranates.in/',
        websitebadge1: 'HTML,CSS ',
        websitebadge2: 'Bootstrap,Jquery',
       

    },
    {
        id: 2,
        title: "Nature Milk",
        projtitle: 'Website',
        image: "images/project/oldwebsite/naturemilk.png",
        projLink: 'http://naturemilk.in/',
        websitebadge1: 'HTML,CSS ',
        websitebadge2: 'Bootstrap,Jquery',
      

    },
    {
        id: 3,
        title: "Aestiq",
        projtitle: 'Website',
        image: "images/project/oldwebsite/aestiq.png",
        projLink: 'http://aestiqclinic.com/',
        websitebadge1: 'HTML,CSS ',
        websitebadge2: 'Bootstrap,Jquery',
      

    },
    {
        id: 4,
        title: "ABRB",
        projtitle: 'Website',
        image: "images/project/oldwebsite/abrb.png",
        projLink: 'https://abrb.co.in/',
        websitebadge1: 'HTML,CSS ',
        websitebadge2: 'Bootstrap,Jquery',
      

    },
    {
        id: 5,
        title: "Swagger Events",
        projtitle: 'Website',
        image: "images/project/oldwebsite/swagger.png",
        projLink: 'https://swaggerevents.com/',
        websitebadge1: 'HTML,CSS ',
        websitebadge2: 'Bootstrap,Jquery',
      

    },
    {
        id: 6,
        title: "Chennai Emergency Care Center",
        projtitle: 'Website',
        image: "images/project/oldwebsite/chennaiemergency.png",
        projLink: 'https://chennaiemergency.com/',
        websitebadge1: 'HTML,CSS ',
        websitebadge2: 'Bootstrap,Jquery',
      

    },

    {
        id: 7,
        title: "Best Gastro Care Center",
        projtitle: 'Website',
        image: "images/project/oldwebsite/bcc.png",
        projLink: 'https://bestgastrocare.com/',
        websitebadge1: 'HTML,CSS ',
        websitebadge2: 'Bootstrap,Jquery',
      

    },
    {
        id: 8,
        title: "Your Perfect Stitches",
        projtitle: 'Website',
        image: "images/project/oldwebsite/yps.png",
        projLink: 'https://yourperfectstitches.com/',
        websitebadge1: 'HTML,CSS ',
        websitebadge2: 'Bootstrap,Jquery',
      

    },
    {
        id: 9,
        title: "Alike Store",
        projtitle: 'Website',
        image: "images/project/oldwebsite/alike.png",
        projLink: 'https://alikestore.in/',
        websitebadge1: 'HTML,CSS ',
        websitebadge2: 'Bootstrap,Jquery',
      

    },
    {
        id: 10,
        title: "Shvedh ",
        projtitle: 'Website',
        image: "images/project/oldwebsite/shvedh.png",
        projLink: 'https://www.shvedh.com/ ',
        websitebadge1: 'HTML,CSS ',
        websitebadge2: 'Bootstrap,Jquery',
      

    }

];

function CurrentProjectdetails() {

    return (
        <>
            <section id="works">
                <div className="container">
                    <Pagetitle title="Current Projects" />
                    {/* Start Portfolio Filters */}


                    {/* Start Portfolio Items */}
                    <div className="row portfolio-wrapper justify-content-center">
                        {allData.map((item) => (
                            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
                                <div className="bg-white rounded shadow-dark  overflow-hidden position-relative">
                                     <div className="categorybadgecontainer">
                                        {(item.websitebadge1 == '') || (item.websitebadge1 == undefined) || (item.websitebadge1 == null) ?null : <span className="categorybadge bg-danger text-white">{item.websitebadge1}</span>  }
                                        {(item.websitebadge2 == '') || (item.websitebadge2 == undefined) || (item.websitebadge2 == null) ? null : <span className="categorybadge bg-primary text-white">{item.websitebadge2}</span>}
                                        {(item.websitebadge3 == '') || (item.websitebadge3 == undefined) || (item.websitebadge3 == null) ? null : <span className="categorybadge bg-info text-dark">{item.websitebadge3}</span> }
                                    </div> 

                                    <div className="screen">
                                        <img src={item.image} />
                                    </div>

                                    {/* <img src={item.image} alt="Portfolio-title" /> */}
                                    <div className="d-flex align-items-center px-3 gap-2">
                                    <span className="liveon" title="Now on Live"><span className="badge-circle"></span></span> 
                                        <h4 className="title text-truncate" title={item.title}>{item.title} {item.projtitle}</h4>
                                        <div className="ms-auto"><a href={item.projLink} title="View website" target='_blank' className="btn btn-warning py-2 px-3 text-uppercase" style={{ fontSize: '12px',minWidth:'100px' }}><i className="far fa-eye me-2"></i> View</a></div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                    {/* End Portfolio Items */}


                </div>
            </section>
            <section id="ownworks">
                <div className="container">
                    <Pagetitle title="Own Work" />
                    {/* Start Portfolio Filters */}


                    {/* Start Portfolio Items */}
                    <div className="row portfolio-wrapper justify-content-center">
                        {owndata.map((item) => (
                            <div className="col-md-4 col-sm-6 grid-item blog-item" key={item.id}>
                                <div className="bg-white rounded shadow-dark  overflow-hidden position-relative">
                                <div className="categorybadgecontainer">
                                        {(item.websitebadge1 == '') || (item.websitebadge1 == undefined) || (item.websitebadge1 == null) ?null : <span className="categorybadge bg-danger text-white">{item.websitebadge1}</span>  }
                                        {(item.websitebadge2 == '') || (item.websitebadge2 == undefined) || (item.websitebadge2 == null) ? null : <span className="categorybadge bg-primary text-white">{item.websitebadge2}</span>}
                                        {(item.websitebadge3 == '') || (item.websitebadge3 == undefined) || (item.websitebadge3 == null) ? null : <span className="categorybadge bg-success text-black">{item.websitebadge3}</span> }
                                    </div> 
                                    <div className="screen">
                                        <img src={item.image} />
                                    </div>

                                    {/* <img src={item.image} alt="Portfolio-title" /> */}
                                    <div className="d-flex align-items-center px-3 gap-2">
                                    <span className="liveon"  title="Now on Live"><span className="badge-circle"></span></span> 
                                        <h4 className="title text-truncate" title={item.title}>{item.title} {item.projtitle}</h4>
                                        <div className="ms-auto"><a href={item.projLink} title="View website" target='_blank' className="btn btn-warning py-2 px-3 text-uppercase" style={{ fontSize: '12px',minWidth:'100px' }}><i className="far fa-eye me-2"></i> View</a></div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                    {/* End Portfolio Items */}


                </div>
            </section>

            <section id="oldworks">
                <div className="container">
                    <Pagetitle title="Previous Projects" />
                    {/* Start Portfolio Filters */}


                    {/* Start Portfolio Items */}
                    <div className="row portfolio-wrapper justify-content-center">
                        {olddata.map((item) => (
                            <div className="col-md-4 col-sm-6 grid-item blog-item" key={item.id}>
                                <div className="bg-white rounded shadow-dark  overflow-hidden position-relative">
                                 
                                <div className="categorybadgecontainer">
                                        {(item.websitebadge1 == '') || (item.websitebadge1 == undefined) || (item.websitebadge1 == null) ?null : <span className="categorybadge bg-danger text-white">{item.websitebadge1}</span>  }
                                        {(item.websitebadge2 == '') || (item.websitebadge2 == undefined) || (item.websitebadge2 == null) ? null : <span className="categorybadge bg-primary text-white">{item.websitebadge2}</span>}
                                        {(item.websitebadge3 == '') || (item.websitebadge3 == undefined) || (item.websitebadge3 == null) ? null : <span className="categorybadge bg-success text-black">{item.websitebadge3}</span> }
                                    </div> 
                                    <div className="screen">
                                        <img src={item.image} />
                                    </div>

                                    {/* <img src={item.image} alt="Portfolio-title" /> */}
                                    <div className="d-flex align-items-center px-3 gap-2">
                                    <span className="liveon"  title="Now on Live"><span className="badge-circle"></span></span>  <h4 className="title text-truncate" title={item.title}>{item.title} {item.projtitle}</h4>
                                        <div className="ms-auto"><a href={item.projLink} title="View website" target='_blank' className="btn btn-warning py-2 px-3 text-uppercase" style={{ fontSize: '12px',minWidth:'100px' }}><i className="far fa-eye me-2"></i> View</a></div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                    {/* End Portfolio Items */}


                </div>
            </section>
        </>
    );
}

export default CurrentProjectdetails;
