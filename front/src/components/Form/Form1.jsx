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

  //const [user, setUser] = useState({})
  //   const [email, setEmail] = useState("")
  //console.log(user);

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

  console.log(data);

  return (
    <section id="dona">
      <div className="formulario containerForm">
        <form onSubmit={handleSubmit}>
          <h3> Paso 1/2 </h3>
          <fieldset>
            <h2> Selecciona el monto con el cual te querés sumar mensualmente</h2>

            <button
              type="button"
              name="amount"
              className="botonForm botonHover"
              onClick={handleData}
              value={500}
            >
              500 ARS
            </button>
            <button
              type="button"
              name="amount"
              className="botonDestacado botonHover"
              onClick={handleData}
              value={600}
            >
              600 ARS
            </button>
            <button
              type="button"
              name="amount"
              className="botonForm botonHover"
              onClick={handleData}
              value={700}
            >
              700 ARS
            </button>

            <button className="botonOtro botonHover">Otro</button>
            <input
              onChange={handleData}
              value={data.amount}
              min="0"
              type="number"
              id="name"
              name="amount"
              required
              minlength="4"
              maxlength="8"
              size="10"
            ></input>

           {/*  <label for="exampleFormControlInput1" class="form-label">
              ¿Cada cuánto querés donar?
              <select
                as="select"
                defaultValue="Donar mensualmente"
                name="time"
                value={data.time}
                onChange={handleData}
                required
              >
                <option>...</option>
                <option value="Donar mensualmente">Donar mensualmente</option>
                <option value="Por única vez">Por única vez</option>
              </select>
            </label> */}
          </fieldset>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Nombre
            </label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese su nombre"
              //   {...nombre}
              onChange={handleData}
              value={data.name}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Apellido
            </label>
            <input
              name="lastname"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese su apellido"
              //   {...apellido}
              onChange={handleData}
              value={data.lastname}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Mail
            </label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese su mail"
              //   {...mail}
              onChange={handleData}
              value={data.email}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Teléfono
            </label>
            <input
              name="phone"
              onChange={handleData}
              value={data.phone}
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese su teléfono"
              //   {...telefono}
              required
            />
          </div>
          
          
            <button
              className="botonForm"
              variant="primary"
              type="submit"
              required
            >
              Continuar
            </button>
            
            
          
         
          {/* <CarouselForm/> */}{" "}
          {/* ese es un componente hecho con react-bootstrap */}
        </form>
      </div>
    </section>
  );
};

export default Form1;
