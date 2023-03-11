import React from "react";

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container">
        <span className="copyright">
          &copy; {new Date().getFullYear()} Manikandan
        </span>
        <p>I hereby declare that the above mentioned information is true and correct to the best of my knowledge.</p>
      </div>
    </footer>
  );
}

export default Footer;
