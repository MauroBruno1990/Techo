import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../state/reducers/user";
import { useInput } from "../../hooks/useInput";
import "./index.css";

// Este componente debería poder recibir el input del Nombre, Apellido, Mail y Teléfono de la persona.
// Debería poder guardar esa información en una base de datos.
// Al apretar continuar, esta primera información debería ser guardada, sin importar si la persona realiza una donación o no.

// Los datos del formulario deben conservarse para el segundo paso, mantenerse en un estado (de redux supongo)
const Form1 = ({ handleCallback, handleContinuar, handleData, data }) => {
  const history = useHistory();
  const dispatch = useDispatch();

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

  const toggleClass = (e) => {
    //si tiene la clase active se la saco, split(" ")
    console.log(e.target.classList);
    const name = "active";
    const arr = e.target.className.split(" ");
    if (arr.indexOf(name) == -1) {
      e.target.className += " " + name;
      //continuar
    }
  };

  return (
    <div className="container">
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
                <div className="col-3">
                  <h5 className="card-title">Doná</h5>
                </div>
                <div className="col-6">
                  <p className="card-text">
                    Seleccioná el monto con el cual te querés sumar mensualmente
                  </p>
                </div>
                <div className="col-3 text-right">
                  <h6>Paso 1/2</h6>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="btn-toolbar mb-2" role="toolbar">
                  <div className="btn-group me-2 mr-3" role="group">
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Si logramos que 14 personas donen $500 podemos comprar las herramientas para la construcción"
                      onClick={(handleData, toggleClass)}
                      value={500}
                    >
                      500 ARS
                    </button>
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary active"
                      onClick={(handleData, toggleClass)}
                      value={600}
                    >
                      600 ARS
                    </button>
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={(handleData, toggleClass)}
                      value={700}
                    >
                      700 ARS
                    </button>
                  </div>
                  <div className="input-group">
                    <div className="input-group-text" id="btnGroupAddon">
                      ARS
                    </div>
                    <input
                      name="amount"
                      type="text"
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
                    />
                  </div>
                </div>
                <div class="card border border-primary">
                  <div class="card-body text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-tools"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                    </svg> {" "}
                    Si logramos que 14 personas donen $500 podemos comprar las
                    herramientas para la construcción{" "}
                  </div>
                </div>
                <div>
                  <label className="form-label mt-2">Nombre</label>
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
                <div className="mt-2">
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
                <div className="mt-2">
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
                <div className="mt-2">
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
                <button type="submit" className="btn btn-primary mt-2">
                  Continuar
                </button>
              </form>
              <p className="mt-2">
                {" "}
                Si querés donar por única vez, completá los datos y hacé click{" "}
                <a href="/unicaVez">AQUÍ</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
