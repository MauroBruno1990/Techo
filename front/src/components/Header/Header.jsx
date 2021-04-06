import React from "react";
import "./index.css";
import { Link } from "react-scroll";
export default function Header() {
  return (
    <>
      {/* <img src="https://argentilemon.com/gestor/wp-content/uploads/2017/05/TECHO-despues.jpg" alt="" className="imagen"/> */}
      <img
        src="https://www.techo.org/UY/assets/images/background/header.jpg"
        alt=""
        className="img-fluid"
      />

<div className="botonDona">
        <span className=" btnHover">
          <Link to="dona" smooth duration ={1000}>
          <button className="btn" type="submit" >
            <span className="letraBtn">Doná</span>
            
          </button>
        
          </Link>
        </span>
        </div>
    </>
  );
}
