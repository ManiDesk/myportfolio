import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img width="61.2" src={logoSource} alt="Mani" />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <img width="61.2" src={logoSource} alt="Mani" />
      </Link>
    </div>
  );
}

export default Logo;
