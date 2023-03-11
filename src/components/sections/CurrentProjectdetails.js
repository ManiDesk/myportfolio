import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

const allData = [
    {
        id: 11,
        title: "L&T",
        projtitle: 'Website',
        image: "images/project/lnt.png",
        projLink: 'https://lntdev.oreapps.com/',

    },
    {
        id: 1,
        title: "Sterlo",
        projtitle: 'Website',
        image: "images/project/sterloproduct.png",
        projLink: 'https://www.sterlo.io/',

    },
    {
        id: 2,
        title: "Sterlo",
        projtitle: 'Product',
        image: "images/project/sterloproductmain.png",
        projLink: 'https://studio.sterlo.io/',

    },
    {
        id: 3,
        title: "Sterlo",
        projtitle: 'Blog',
        image: "images/project/sterloblog.png",
        projLink: 'https://www.sterlo.io/blog/',

    },
    {
        id: 4,
        title: "Sterlo",
        projtitle: 'Help',
        image: "images/project/sterlohelp.png",
        projLink: 'https://www.sterlo.io/help/documentation/getting-started/',

    },
    {
        id: 5,
        title: "Sterlo",
        projtitle: 'Support',
        image: "images/project/sterlosupport.png",
        projLink: 'https://support.sterlo.io/portal/en/home',

    },
    {
        id: 6,
        title: "Sterlo",
        projtitle: 'Marketplace',
        image: "images/project/store.png",
        projLink: 'https://stageweb.sterlo.io/store',

    },
    {
        id: 7,
        title: "ILCE",
        projtitle: 'Website',
        image: "images/project/ilce.png",
        projLink: 'https://www.ilce.in/',

    },
    
];

const owndata = [
    {
        id: 11,
        title: "PWA",
        projtitle: 'TodoApp',
        image: "images/project/own.png",
        projLink: 'https://manitodoapp.web.app/',

    },
   
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
                            <div className="bg-white rounded shadow-dark  overflow-hidden">
                                <div className="screen">
                                    <img src={item.image} />
                                </div>

                                {/* <img src={item.image} alt="Portfolio-title" /> */}
                                <div className="d-flex align-items-center px-3">
                                    <h4 className="title">{item.title} {item.projtitle}</h4>
                                    <div className="ms-auto"><a href={item.projLink} target ='_blank' className="btn btn-warning py-2 px-3 text-uppercase" style={{fontSize:'12px'}}><i className="far fa-eye me-2"></i> View</a></div>
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
                        <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
                            <div className="bg-white rounded shadow-dark  overflow-hidden">
                                <div className="screen">
                                    <img src={item.image} />
                                </div>

                                {/* <img src={item.image} alt="Portfolio-title" /> */}
                                <div className="d-flex align-items-center px-3">
                                    <h4 className="title">{item.title} {item.projtitle}</h4>
                                    <div className="ms-auto"><a target ='_blank' href={item.projLink} className="btn btn-warning py-2 px-3 text-uppercase" style={{fontSize:'12px'}}><i className="far fa-eye me-2"></i> View</a></div>
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
