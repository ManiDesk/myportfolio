import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../elements/Logo";

function Header3({ light, logoSource, bootstrapNav }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content-3")) {
      setToggleNavbar(false);
    }
  });
  const [bgcolor] = useState(["#3d0066","#660000","#660047","#5b0066", '#1e0066' ,'#003766','#00664e','#066600' ,'#662600'])
  const [bgcolorval , setBgcolorval] = useState(0)
  useEffect(() => {
    const fnbgcolor = setInterval(() => {
      setBgcolorval((v)=> (v === bgcolor.length  ? 0 : v + 1));
      console.log(bgcolorval)
    //  ++i;
     
    }, 1000);
    return () => {
      clearInterval(fnbgcolor);
    };
  }, [bgcolorval]);

  return (
    <header
      className={
        light
          ? "desktop-header-3 fixed-top light"
          : "desktop-header-3 fixed-top"
      }
      style ={{backgroundColor : bgcolor[bgcolorval],transition:'0.5s'}}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Logo logoSource={logoSource} bootstrapNav={bootstrapNav} />
          <button 
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler ms-auto"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
            onClick={handleMobilenav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggleNavbar
                ? "justify-content-center collapse navbar-collapse show"
                : "justify-content-center collapse navbar-collapse"
            }
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ml-auto mr-auto scrollspy">
              <li className="nav-item">
                <Link
                  activeclassName="active"
                  className="nav-link"
                  to="section-home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeclassName="active"
                  className="nav-link"
                  to="section-about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeclassName="active"
                  className="nav-link"
                  to="section-skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeclassName="active"
                  className="nav-link"
                  to="section-services"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeclassName="active"
                  className="nav-link"
                  to="section-experiences"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeclassName="active"
                  className="nav-link"
                  to="section-works"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Works
                </Link>
               
             
              </li>
              <li className="nav-item">
                <Link
                  activeclassName="active"
                  className="nav-link"
                  to="section-contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a href="https://wa.me/qr/KXIRY574WU7RJ1" className="btn btn-sm btn-success py-2 px-2 mx-2 " style={{borderColor:'#1ad03f',backgroundColor:'#1ad03f'}}><i className="fab fa-whatsapp fs-6"></i></a>
        </nav>
      </div>
    </header>
  );
}

export default Header3;
