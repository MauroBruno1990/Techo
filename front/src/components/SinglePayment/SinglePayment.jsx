import React, { useState } from "react";
/* import { useHistory } from "react-router-dom"; */
import { useDispatch } from "react-redux";
import { postData } from "../../state/reducers/user";
import Footer from "../Footer/Footer";
import "./index.css";

export default function SinglePayment() {
  const dispatch = useDispatch();
  /*   const history = useHistory();
   */
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    amount: 0,
    time: "unicaVez",
  });
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    dispatch(
      postData({
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        amount: data.amount,
        time: data.time,
      })
    );

    /* history.push("/"); */
  };

  let valor = "";

  return (
    <>
      <div className="container mb-5">
        <h2>Quiero realizar una donación por única vez</h2>
        <img src="header-sp.jpg" alt="" className="img-fluid"/>
        <form className="row divMercadoPago">
          <div className="col-sm-6">
            <div className="mt-4">
              <label className="form-label">Nombre</label>
              <input
                name="name"
                type="text"
                onChange={handleData}
                value={data.name}
                className="form-control"
                placeholder="Ingrese su nombre"
                required
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Apellido</label>
              <input
                name="lastname"
                type="text"
                onChange={handleData}
                value={data.lastname}
                className="form-control"
                placeholder="Ingrese su apellido"
                required
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Mail</label>
              <input
                name="email"
                type="email"
                onChange={handleData}
                value={data.email}
                className="form-control"
                placeholder="Ingrese su mail"
                required
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Teléfono</label>
              <input
                name="phone"
                type="number"
                onChange={handleData}
                value={data.phone}
                className="form-control"
                placeholder="Ingrese su teléfono"
                required
              />
            </div>
            <button
              className="btn btn-primary mt-5"
              type="submit"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              onSubmit={handleRedirect}
              /* onClick={valor="collapseExample"} */
            >
              Donar por única vez
            </button>
          </div>
        </form>

        <div className="collapse" id={valor}>
          <div className="card card-body">
            <div className="container">
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
                  <div className="mercadoPago">
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
                      <a
                        href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/5c5bc789-3602-4f39-af34-bfe6bb1c3f93/express/?source=link&preference-id=156146314-8405f297-06b6-47ac-b07b-bf21319e2ac8&p=626a5366dc3a8e506444719203a19dbf"
                        target="blank"
                      >
                        <button className="singleButton">$500</button>
                      </a>
                      <a
                        href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/9eefc613-100d-49b1-b5d4-547e41a240bb/express/?source=link&preference-id=156146314-2b57bed7-8d15-4cef-8fb7-dfce810ee052&p=626a5366dc3a8e506444719203a19dbf"
                        target="blank"
                      >
                        <button className="singleButton">$700</button>
                      </a>
                      <a
                        href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/29283afa-2f93-46a4-b3b5-c1e911bb7d37/express/?source=link&preference-id=156146314-9a847fa6-5190-4a77-ad14-aef5a98cab28&p=626a5366dc3a8e506444719203a19dbf"
                        target="blank"
                      >
                        <button className="singleButton">$1000</button>
                      </a>

                      <a
                        href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/338bc11d-e77e-49e0-bba3-9e51e3825d95/express/?source=link&preference-id=156146314-1315ff81-cbd4-471f-ba1b-f43a1e53b28f&p=626a5366dc3a8e506444719203a19dbf"
                        target="blank"
                      >
                        <button className="singleButton">$2000</button>
                      </a>
                      <a
                        href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/25647eb5-000a-4245-bd7c-4f9f88a37422/express/?preference-id=156146314-021f4baa-32f1-4d69-903a-cff016743f6b&source=link&p=626a5366dc3a8e506444719203a19dbf"
                        target="blank"
                      >
                        <button className="singleButton">$3000</button>
                      </a>
                      <a
                        href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/f82fd680-1bdc-4433-91ac-d49f7e9becbb/express/?source=link&preference-id=156146314-021f4baa-32f1-4d69-903a-cff016743f6b&p=626a5366dc3a8e506444719203a19dbf"
                        target="blank"
                      >
                        <button className="singleButton">$5000</button>
                      </a>
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
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
