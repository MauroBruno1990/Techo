import React from "react";
import './index.css'



export default function Navbar() {
  return (
   <div className="navbarProp">
        <div className="column1">
      <nav className=" navbar navbar-expand-lg navbar-dark bg-primary ">
        <a className="navbar-brand" href="http://localhost:3001/">
        <img src="https://www.techo.org/UY/assets/images/logo_1.png" class="logo logo-display m-top-10" alt="techo" />
        
        {/* segunda imagen que cambia de color al hacer scroll */}

        <img src="assets/images/logo_2.png" class="logo logo-scrolled m-top-10" alt="" />
        </a>
     {/*    <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}



        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="">
                Inicio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Aliados
              </a>
            </li> <li className="nav-item">
              <a className="nav-link" href="">
                Contacto
              </a>
            </li>
          </ul>
         
          
        </div>
      </nav>
          </div>
          <div className="column2 bg-primary" >

          <button type="button" class="btn btn-outline-secondary" className="btnDona">Donar</button>
      {/*     <a  href="https://fundacionsi.org.ar/comoayudar" data-event="Click Botón Header" data-event-category="Donar">Donar</a> */}
          </div>
      </div>

  );
}

