import { Form, Col } from 'react-bootstrap';
import React, { useState } from 'react'
import axios from "axios"
import { useInput } from '../../hooks/useInput'
import './index.css';

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

    console.log(donacion.value)
    return (
        <div className='formulario'>
            <Form>
            <h3> Paso 1/3 </h3>
            <fieldset>
                <h2> Selecciona el monto con el cual te querés sumar </h2>

                    <button className='botonForm' onClick ={handleClick} value={500}>500 ARS</button>
                    <button className='botonForm' onClick ={handleClick} value={600}>600 ARS</button>
                    <button className='botonForm' onClick ={handleClick} value={700}>700 ARS</button>
                    <button className='botonForm' >Otro</button>
                    <input onChange={handleClick}type="number" id="name" name="name" required
                    minlength="4" maxlength="8" size="10"></input>

                <Form.Row>               
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>¿Cada cuánto querés donar?</Form.Label>
                    <Form.Control as="select" defaultValue="Donar mensualmente" {...donacion}>
                        <option>Donar mensualmente</option>
                        <option>Por única vez</option>
                    </Form.Control>
                </Form.Group>

                </Form.Row>
            </fieldset>

                <Form.Row >
                    <Form.Group  as={Col} controlId="formGridEmail" required>
                        <Form.Label >Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre"  {...nombre}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" required>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Apellido"  {...apellido}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1" required>
                    <Form.Label>Mail</Form.Label>
                    <Form.Control type='email'placeholder="Ingrese su mail"  {...mail}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress2" required>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type='number' placeholder="Teléfono"  {...telefono}/>
                </Form.Group>

                <button className='botonForm' variant="primary" type="submit">
                    Continuar
                </button>
            </Form>

            <p> Todas las donaciones a TECHO son deducibles del Impuesto a las Ganancias según el Art. 81 de la Ley N° 20.628. Política de privacidad.</p>

        </div>
    )
}

export default Form1

