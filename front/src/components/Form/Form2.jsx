import React, {useEffect} from "react";
import { useInput } from "../../hooks/useInput";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../state/reducers/user";
import ReactGA from 'react-ga'

const Form2 = ({ handleVolver, handleData, data }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const DNI = useInput("DNI");
  const provincia = useInput("provincia");
  const numTarjeta = useInput("numTarjeta");
  const tipoTarjeta = useInput("tipoTarjeta");

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     handleVolver
  //   };

  useEffect(() => {
    ReactGA.initialize('UA-26808512-1');
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    // isValidCard(data.creditCard)
    dispatch(
      postData({
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        amount: data.amount,
        time: data.time,
        dni: data.dni,
        province: data.province,
        creditCard: data.creditCard,
        typeCard: data.typeCard,
      })
    );
    //.then(() => handleContinuar());
  };

  console.log(data, "dataaaaaaaaaaaaa form 2");
  return (
    <div className="formulario">
      <h3> Paso 2/2 </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            DNI
          </label>
          <input
            name="dni"
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese su DNI"
            onChange={handleData}
            value={data.dni}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Provincia
          </label>
          <select name="province" onChange={handleData} value={data.province}
            className="form-select" aria-label="Default select example">
            <option value="Buenos Aires">Bs. As.</option>
            <option value="Catamarca">Catamarca</option>
            <option value="Chaco">Chaco</option>
            <option value="Chubut">Chubut</option>
            <option value="Cordoba">Cordoba</option>
            <option value="Corrientes">Corrientes</option>
            <option value="Entre Rios">Entre Rios</option>
            <option value="Formosa">Formosa</option>
            <option value="Jujuy">Jujuy</option>
            <option value="La Pampa">La Pampa</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Islas Malvinas">Islas Malvinas</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Misiones">Misiones</option>
            <option value="Neuquen">Neuquen</option>
            <option value="Rio Negro">Rio Negro</option>
            <option value="Salta">Salta</option>
            <option value="San Juan">San Juan</option>
            <option value="San Luis">San Luis</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Sgo. del Estero">Sgo. del Estero</option>
            <option value="Tierra del Fuego">Tierra del Fuego</option>
            <option value="Tucuman">Tucuman</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Numero de la tarjeta
          </label>
          <input
            name="creditCard"
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese el numero de la tarjeta"
            onChange={handleData}
            value={data.creditCard}
            maxlength="16" 
            oninput={data.creditCard.length > 16 ? data.creditCard = data.creditCard.slice(0, 16) : null}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Tipo de tarjeta
          </label>

          <select name="typeCard" onChange={handleData} value={data.typeCard}
            className="form-select" aria-label="Default select example">
            <option value="" disabled="" className="_1uxfS _36dZ-"></option>
            <option value="Visa Crédito" className="_1uxfS">
              Visa Crédito
            </option>
            <option value="Visa Débito" className="_1uxfS">
              Visa Débito
            </option>
            <option value="Mastercard" className="_1uxfS">
              Mastercard
            </option>
            <option value="American Express" className="_1uxfS">
              American Express
            </option>
            <option value="Cabal" className="_1uxfS">
              Cabal
            </option>
            <option value="Naranja" className="_1uxfS">
              Naranja
            </option>
            <option value="Nevada" className="_1uxfS">
              Nevada
            </option>
            <option value="Shopping" className="_1uxfS">
              Shopping
            </option>
            <option value="Nativa" className="_1uxfS">
              Nativa
            </option>
            <option value="Cencosud" className="_1uxfS">
              Cencosud
            </option>
          </select>
        </div>

        <button
          className="botonVolver"
          variant="primary"
          type="button"
          onClick={() => handleVolver()}
        >
          Volver
        </button>
        <button 
          className="botonForm disabledButton" 
          variant="primary" 
          type="submit" 
          data-toggle="modal" 
          data-target="#exampleModalCenter" 
          required
          disabled={data.dni === '' || data.province === '' || data.creditCard === '' || data.typeCard === '' ? 
          true
          : 
          false}
        >
            Quiero ser socio/a
        </button>

        <div className="modal fade " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered " role="document">
            <div className="modal-content ">
              <div className="modalThanks">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Gracias {data.name} por hacerte socio de Techo</h5>
                  {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button> */}
                  <img src=""></img>
                </div>
                <div className="modal-body descriptivo">   Gracias por su donación   </div>
                <div className="modal-footer">
                  
                  <a  href="/" type="button" className="btn btn-primary">Volver a inicio </a>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Form2;
