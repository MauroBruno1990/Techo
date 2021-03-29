import React from 'react'
import { useInput } from '../../hooks/useInput'


const Form2 = () => {
    const DNI = useInput('DNI')
    const provincia = useInput('provincia')
    const numTarjeta = useInput('numTarjeta')
    const tipoTarjeta = useInput('tipoTarjeta')


    return (
        <div className='formulario'>
            <h5> Paso 2/3 </h5>
            <form>
                <div className= "containerForm">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">DNI</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su DNI" {...DNI} required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Provincia</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su provincia" {...provincia} required/>
                </div>
                </div>

                <div className= "containerForm" >
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Numero de la tarjeta</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese el numero de la tarjeta" {...numTarjeta} required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Tipo de tarjeta</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Seleccione el tipo de tarjeta" {...tipoTarjeta} required/>
                </div>

                </div>
                <div>
                <button className='botonForm' variant="primary" type="submit" required>
                    Quiero ser socio/a
                </button>
                </div>
                <div>
                <button className='botonVolver' variant="primary" type="submit">
                    Volver
                </button>
                </div>
            </form>
            <p>
          {" "}
          Todas las donaciones a TECHO son deducibles del Impuesto a las
          Ganancias según el Art. 81 de la Ley N° 20.628. Política de
          privacidad.
        </p>
        </div>
    )
}

export default Form2

