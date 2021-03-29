import React, { useState } from "react";
import axios from "axios";
import { useInput } from "../../hooks/useInput";
import "./index.css";
/* import CarouselForm from './CarouselForm' */

// Este componente debería poder recibir el input del Nombre, Apellido, Mail y Teléfono de la persona.
// Debería poder guardar esa información en una base de datos.
// Al apretar continuar, esta primera información debería ser guardada, sin importar si la persona realiza una donación o no.

// Los datos del formulario deben conservarse para el segundo paso, mantenerse en un estado (de redux supongo)
const Form1 = () => {
  const donacion = useInput("donacion");
  const nombre = useInput("nombre");
  const apellido = useInput("apellido");
  const mail = useInput("mail");
  const telefono = useInput("telefono");
  const [check, setCheck] = useState(0);

  const handleClick = (e) => {
    setCheck(e.target.value);
  };

  console.log(check);
  return (
    <div>
      <div className="formulario">
        <form>
          <h5 > Paso 1/3 </h5>
          
         
            <h3 className="tituloh2"> Selecciona el monto con el cual te querés sumar </h3>
            <div className= "containerForm">
            <button className="botonDonar" onClick={handleClick} value={500}>
              500 ARS
            </button>
            <button className="botonDonar" onClick={handleClick} value={600}>
              600 ARS
            </button>
            <button className="botonDonar" onClick={handleClick} value={700}>
              700 ARS
            </button>
            <button className="botonDonar">Otro</button>
            <input
              onChange={handleClick}
              value={check}
              min="0"
              type="number"
              id="name"
              name="name"
              required
              minlength="4"
              maxlength="8"
              size="40"
              class="form-control"
            ></input>
            </div>
            <label for="exampleFormControlInput1" class="form-label" className="containerForm">
              ¿Cada cuánto querés donar?
              <select
                as="select"
                defaultValue="Donar mensualmente"
                {...donacion}
                class="form-control"
                required
              >
                <option>...</option>
                <option>Donar mensualmente</option>
                <option>Por única vez</option>
              </select>
            </label>

         <div className= "containerForm">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese su nombre"
              {...nombre}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Apellido
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese su apellido"
              {...apellido}
              required
            />
          </div>
          </div>

          <div className= "containerForm">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Mail
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese su mail"
              {...mail}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Teléfono
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese su teléfono"
              {...telefono}
              required
            />
          </div>
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

        <p>
          {" "}
          Todas las donaciones a TECHO son deducibles del Impuesto a las
          Ganancias según el Art. 81 de la Ley N° 20.628. Política de
          privacidad.
        </p>
      </div>
    </div>
  );
};

export default Form1;
