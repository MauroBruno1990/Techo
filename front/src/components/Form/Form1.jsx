import React, { useState } from 'react'
import axios from "axios"
import { useInput } from '../../hooks/useInput'
import './index.css';
/* import CarouselForm from './CarouselForm' */

// Este componente debería poder recibir el input del Nombre, Apellido, Mail y Teléfono de la persona.
// Debería poder guardar esa información en una base de datos.
// Al apretar continuar, esta primera información debería ser guardada, sin importar si la persona realiza una donación o no.

// Los datos del formulario deben conservarse para el segundo paso, mantenerse en un estado (de redux supongo)
const Form1 = () => {
    const donacion = useInput('donacion')
    const nombre = useInput('nombre')
    const apellido = useInput('apellido')
    const mail = useInput('mail')
    const telefono = useInput('telefono')
    const [check, setCheck] = useState(0)

    
    const handleClick = (e) => {
        setCheck(e.target.value)
    }

    console.log(check)
    return (
        <div>
            <div className='formulario containerForm'>
                <form >
                <h3> Paso 1/3 </h3>
                <fieldset>
                    <h2> Selecciona el monto con el cual te querés sumar </h2>

                        <button className='botonForm' onClick ={handleClick} value={500}>500 ARS</button>
                        <button className='botonForm' onClick ={handleClick} value={600}>600 ARS</button>
                        <button className='botonForm' onClick ={handleClick} value={700}>700 ARS</button>
                        <button className='botonForm' >Otro</button>
                        <input onChange={handleClick} value={check} min='0' type="number" id="name" name="name" required
                        minlength="4" maxlength="8" size="10"></input>
                    
                    <label for="exampleFormControlInput1" class="form-label">¿Cada cuánto querés donar?
                        <select as="select" defaultValue="Donar mensualmente" {...donacion} required>
                            <option>...</option>
                            <option>Donar mensualmente</option>
                            <option>Por única vez</option>
                        </select>              
                    </label>
                </fieldset>
                
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su nombre" {...nombre} required/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su apellido" {...apellido} required/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Mail</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su mail" {...mail} required/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Teléfono</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su teléfono" {...telefono} required/>
                    </div>

                    <button className='botonForm' variant="primary" type="submit" required>
                        Continuar
                    </button>

                {/* <CarouselForm/> */} {/* ese es un componente hecho con react-bootstrap */}
                </form>

                
            </div>
            <p> Todas las donaciones a TECHO son deducibles del Impuesto a las Ganancias según el Art. 81 de la Ley N° 20.628. Política de privacidad.</p>
        </div>
    )
}

export default Form1

