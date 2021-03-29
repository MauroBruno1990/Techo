import React from "react";
import "./index.css";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.backgroundColor = "rgb(0, 146, 221)";
  }
   else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}

export default function Navbar() {
  
  return (
    <nav
      className="navbar navbar-expand-lg navbarProp"
      id="header"

    >
      <a className="navbar-brand" href="http://localhost:3000/">
        <img
          src="https://www.techo.org/UY/assets/images/logo_1.png"
          alt="techo"
        />

        {/* segunda imagen que cambia de color al hacer scroll */}

        <img
          src="assets/images/logo_2.png"
          className="logo logo-scrolled m-top-10"
          alt=""
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active" >
            <a className="nav-link" href="#" >
              Inicio <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Aliados
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
          <li className="nav-item dropdown"></li>
        </ul>
        <span className="d-flex botonDona btnHover">
          <button className="btn" type="submit">
            <span className="letraBtn">DONA</span>
          </button>
        </span>
      </div>
    </nav>
  );
}
