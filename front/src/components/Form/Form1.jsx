import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../state/reducers/user";
import { useInput } from "../../hooks/useInput";
import "./index.css";
import Form2 from "./Form2";
/* import CarouselForm from './CarouselForm' */

// Este componente debería poder recibir el input del Nombre, Apellido, Mail y Teléfono de la persona.
// Debería poder guardar esa información en una base de datos.
// Al apretar continuar, esta primera información debería ser guardada, sin importar si la persona realiza una donación o no.

// Los datos del formulario deben conservarse para el segundo paso, mantenerse en un estado (de redux supongo)
const Form1 = ({ handleCallback, handleContinuar, handleData, data }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const user = useSelector(state => state.users)
  const donacion = useInput("donacion");
  const nombre = useInput("nombre");
  const apellido = useInput("apellido");

  const mail = useInput("mail");
  const telefono = useInput("telefono");
  const [check, setCheck] = useState(0);

  const handleClick = (e) => {
    setCheck(e.target.value);
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
  console.log(postData);

  console.log(data);

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
              <h3> Paso 1/2 </h3>
              <h5 className="card-title">Doná</h5>
              <p className="card-text">
                Seleccioná el monto con el cual te querés sumar mensualmente
              </p>
              <form onSubmit={handleSubmit}>
                <div
                  className="btn-toolbar"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  {/* cambiar el active del radio button con el click */}
                  <div
                    className="btn-group mr-3"
                    role="group"
                    aria-label="First group"
                  >
                    {/* <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleData}
                      value={500}
                    >
                      500 ARS
                    </button>
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary active"
                      onClick={handleData}
                      value={600}
                    >
                      600 ARS
                    </button>
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleData}
                      value={700}
                    >
                      700 ARS
                    </button> */}
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autocomplete="off"
                        checked
                      />
                      <label class="btn btn-outline-primary" for="btnradio1">
                        Radio 1
                      </label>

                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autocomplete="off"
                      />
                      <label class="btn btn-outline-primary" for="btnradio2">
                        Radio 2
                      </label>

                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        autocomplete="off"
                      />
                      <label class="btn btn-outline-primary" for="btnradio3">
                        Radio 3
                      </label>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-group-text" id="btnGroupAddon">
                      ARS
                    </div>
                    <input
                      // limpiar el input cuando selecciono otro botón
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
                <div>
                  <label className="form-label mt-3">Nombre</label>
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
                <button type="submit" className="btn btn-primary mt-3">
                  Continuar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
