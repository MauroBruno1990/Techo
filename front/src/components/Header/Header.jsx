import React from "react";
import "./index.css";

import { Link } from "react-scroll";

export default function Header() {
  return (
    <>
    <div className="imagen">
      {/* <img src="construccion.jpg" alt="" className="img-fluid" /> */}
     {/*  <img
      src="https://www.techo.org/UY/assets/images/background/header.jpg" 
        alt=""
        className="imgagen"
      /> */}


<div className="botonDona">
        <span className=" btnHover">
          <Link to="dona" smooth duration ={1000}>
          <button className="btn" type="submit" >
            <span className="letraBtn">Doná</span>
            
          </button>
        
          </Link>
        </span>
        </div>
        </div>
    </>
  );
}
