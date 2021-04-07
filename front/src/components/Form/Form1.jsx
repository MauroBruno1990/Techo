import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../state/reducers/user";
import { useInput } from "../../hooks/useInput";
import "./index.css";
import SinglePayment from "../SinglePayment/SinglePayment";

const Form1 = ({ handleCallback, handleContinuar, handleData, data }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [amountFlag, setAmountFlag] = useState(1000);

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
    history.push("/unicavez");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleContinuar();
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
    //.then(() => handleContinuar());
  };
  //console.log(postData);

  const removeActive = () => {
    const buttons = document.querySelectorAll("button[name='amount']");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = "";
      buttons[i].className = "btn btn-outline-primary";
    }
  };

  const toggleClass = (e) => {
    removeActive();
    const name = "active";
    e.target.className += " " + name;
    const input = document.querySelector("input[name='amount']");
    input.value = null;
    input.required = false;
    setAmountFlag(e.target.value);
  };

  const handleInput = (e) => {
    removeActive();
    e.target.required = true;
  };

  return (
    <div className="container" id="dona">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://institucional.techo.org/wp-content/uploads/sites/8/2018/02/home-foto-mobile1.jpg"
              className="img-fluid"
              alt="Responsive image"
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h5 className="card-title">Doná</h5>
                </div>
                <div className="col-6 text-right">
                  <h6>Paso 1/2</h6>
                </div>
              </div>
              <div className="mt-1">
                <p className="card-text">
                  Seleccioná el monto con el cual te querés sumar mensualmente
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="btn-toolbar mt-3" role="toolbar">
                  <div className="btn-group me-2 mr-3" role="group">
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={(handleData, toggleClass)}
                      value={700}
                    >
                      700 ARS
                    </button>
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary active"
                      onClick={(handleData, toggleClass)}
                      value={1000}
                    >
                      1000 ARS
                    </button>
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={(handleData, toggleClass)}
                      value={1300}
                    >
                      1300 ARS
                    </button>
                  </div>
                  <div className="input-group">
                    <div className="input-group-text" id="btnGroupAddon">
                      ARS
                    </div>
                    <input
                      name="amount"
                      type="number"
                      min="0"
                      minLength={2}
                      maxLength={5}
                      className="form-control"
                      onChange={handleData}
                      value={data.amount}
                      placeholder="Otro monto"
                      aria-label="Input group example"
                      aria-describedby="btnGroupAddon"
                      style={{ width: 150 }}
                      onClick={handleInput}
                    />
                  </div>
                </div>
                {console.log(amountFlag)}
                {amountFlag == 700 ? (
                  <div class="card border border-primary mt-3">
                    <div class="card-body text-primary">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-bicycle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
                      </svg>{" "} */}
                      Con 10 personas que donen <b>$700</b>, en un año{" "}
                      <b>
                        construimos 100 metros de veredas para que las personas
                        con movilidad reducida puedan transitar por su barrio
                      </b>
                      .
                    </div>
                  </div>
                ) : null}
                {amountFlag == 1000 ? (
                  <div class="card border border-primary mt-3">
                    <div class="card-body text-primary">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-house-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                        />
                      </svg>{" "} */}
                      Con 8 personas que donen <b>$1000</b> en un año
                      construimos{" "}
                      <b>
                        una vivienda de emergencia para una familia que lo
                        necesita
                      </b>
                      .
                    </div>
                  </div>
                ) : null}
                {amountFlag == 1300 ? (
                  <div class="card border border-primary mt-3">
                    <div class="card-body text-primary">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-book-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                      </svg>{" "} */}
                      Con tu donación de <b>$1300</b> por 6 meses, logramos
                      financiar{" "}
                      <b>
                        un curso de formación legal para referentes comunitarios
                      </b>
                      .
                    </div>
                  </div>
                ) : null}
                <div className="row">
                  <div className="col-md-6 mt-3">
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
                  <div className="col-md-6 mt-3">
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
                </div>
                <div className="row">
                  <div className="col-md-6 mt-3">
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
                  <div className="col-md-6 mt-3">
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
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Continuar
                </button>
              </form>
              <p className="mt-5">
                {" "}
                Si querés donar por única vez, completá los datos y hacé click{" "}
                <a
                  type="button"
                  /* class="btn btn-primary" */
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  href="/unicaVez"
                >
                  aqui
                </a>
              </p>
              <div
                class="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <SinglePayment />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
