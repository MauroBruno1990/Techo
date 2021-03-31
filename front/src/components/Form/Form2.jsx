import React from "react";
import { useInput } from "../../hooks/useInput";
import { useHistory } from "react-router-dom";

const Form2 = ({ handleVolver }) => {
  const history = useHistory();

  const DNI = useInput("DNI");
  const provincia = useInput("provincia");
  const numTarjeta = useInput("numTarjeta");
  const tipoTarjeta = useInput("tipoTarjeta");

//   const handleClick = (e) => {
//     e.preventDefault();
//     handleVolver
//   };

  return (
    <div className="formulario">
      <h3> Paso 2/2 </h3>
      <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            DNI
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese su DNI"
            {...DNI}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Provincia
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese su provincia"
            {...provincia}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Numero de la tarjeta
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese el numero de la tarjeta"
            {...numTarjeta}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Tipo de tarjeta
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Seleccione el tipo de tarjeta"
            {...tipoTarjeta}
            required
          />
        </div>

        <button
          className="botonVolver"
          variant="primary"
          type="button"
          onClick={ () => handleVolver() }
        >
          Volver
        </button>
        <button className="botonForm" variant="primary" type="submit" required>
          Quiero ser socio/a
        </button>
      </form>
    </div>
  );
};

export default Form2;
