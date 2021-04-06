import React from "react";
import "./index.css";

export default function SinglePayment() {
  const valor = "mercadoPago"

  return (
    <div className="container">
      <h2>Quiero realizar una donación por única vez</h2>
      <img
        src="https://static.wixstatic.com/media/8c9b2b_381d80c389424c5f92692feb8965ce65~mv2.jpg/v1/crop/x_0,y_0,w_2024,h_226/fill/w_1439,h_161,al_c,q_80,usm_0.66_1.00_0.01/DSC_1534_edited.webp"
        alt=""
      />
      <div className="containerColumns">
        <div className="columna1">
          <div>
            <h3 className="titles"> Transferencia bancaria </h3>
            <br />
            <p>
              <b>Banco Hipotecario </b> <br />
              Tipo y Nº de cuenta: <b>Cta Cte Esp </b> <br />
              <b>$ 400000013297761 </b> <br />
              Nº de CBU: <b> 0440000440000132977618 </b>
              <br />
              CBU ALIAS: <b> TECHO.DONACIONES.S </b>
              <br />
              Titular de la cuenta: <b> Un Techo Para Argentina AC </b>
              <br />
              CUIT del titular: <b>30708357363 </b> <br />
            </p>
            <h3 className="titles">Bank transfer from abroad</h3>
            <br />
            <h5>
              {" "}
              <b> Beneficiary Bank </b>
            </h5>
            <p>
              <br />
              <b> Bank name: BANCO HIPOTECARIO </b>
              <br />
              Swift code: <b>BHIPARBAXXX </b> <br />
              Beneficiary’s name: <b> UN TECHO </b>
              <br />
              <b> PARA ARGENTINA A.C. </b> <br />
              Beneficiary’s account number: <b> 200000028125066 </b>
              <br />
            </p>
          </div>
        </div>

        <div className="columna2">
          <div className={valor}>
            <h3 className="titles">Mercado Pago</h3>
            <img
              src="https://static.wixstatic.com/media/8c9b2b_d1e0cee8b3ba42c5a8962f104c1e0c9e~mv2.png/v1/fill/w_40,h_38,al_c,q_85,usm_0.66_1.00_0.01/logo%20mp.webp"
              alt="logo mp.png"
              width="40px"
              height="40px"
            ></img>
          </div>
          <br />
          <div>
            <div>
              <button className="singleButton">$500</button>
              <button className="singleButton">$700</button>
              <button className="singleButton">$1200</button>
            </div>
            <div>
              <button className="singleButton">$2000</button>
              <button className="singleButton">$3000</button>
              <button className="singleButton">$5000</button>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div>
            <br />
            <h5>
              {" "}
              <b> Intermediary Bank </b>
            </h5>
            <br />
            <p>
              Citibank NA – <b>NEW YORK – USA 111 Wall Street </b>
              <br />
              <b>New York, NY 10043, USA </b> <br />
              Swift Code <b> CITIUS33XXX - ABA 021000089 </b>
              <br />
              Account Numer: <b> 10954887 DE BANCO </b>
              <br />
              <b>HIPOTECARIO S.A. (SWIFT: BHIPARBAXXX) </b> <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
