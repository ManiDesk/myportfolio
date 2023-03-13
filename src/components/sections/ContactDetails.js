import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

function ContactDetails() {

    return (
        <section id="contact">
            <div className="container">
                <Pagetitle title="Get in Touch" />
                <h3 className="text-center">Let's talk about everything!</h3>
                <div className="row">


                    <div className="col-md-12">
                    <ul className="social-icons light d-flex flex-wrap list-inline mb-0 mt-4 text-center justify-content-center gap-3">
            <li className="list-inline-item">
              <a href="tel:7904779032" className="text-secondary  fs-5 text-decoration-none">
              <i className="fas fa-mobile-alt me-1"></i>  7904779032
              </a>
            </li>
            <li className="list-inline-item">
              <a href="tel:8883469792" className="text-secondary  fs-5 text-decoration-none">
              <i className="fas fa-phone-volume me-1"></i> 8883469792
              </a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:manimp2496@gmail.com" className="text-secondary fs-5 text-decoration-none">
              <i className="fas fa-envelope-open-text me-1"></i> manimp2496@gmail.com
              </a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:manikandanrnp24@gmail.com" className="text-secondary fs-5 text-decoration-none">
              <i className="fas fa-paper-plane me-1"></i> manikandanrnp24@gmail.com
              </a>
            </li>
           
          </ul>

                    </div>
                  
                </div>
                <h3 className="text-center">Address</h3>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p>
                    4/38-21 Kullamedu, Therkkupalayam,
Pallipalayam, Agraharam(POST), 
Namakkal – 638008,
TamilNadu

                    </p>
                  </div>
                  <div className="col-md-12 mt-3">
                    <h3 className="text-center">Social Media</h3>
                    <ul className="social-icons light list-inline mb-0 mt-4 text-center">
            <li className="list-inline-item">
              <a target="_blank" href="https://www.linkedin.com/in/manikandan-r-052aa6198" className="text-secondary  fs-5">
                <i className="fab fa-linkedin"></i> 
              </a>
            </li>
            <li className="list-inline-item">
              <a target="_blank" href="https://twitter.com/Manikan67445619?s=09" className="text-secondary  fs-5">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100010409919677" className="text-secondary  fs-5">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          
           
          </ul>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactDetails;
