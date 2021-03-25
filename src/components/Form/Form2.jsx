import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap';
import { useInput } from '../../hooks/useInput'


const Form2 = () => {
    const DNI = useInput('DNI')
    const provincia = useInput('provincia')
    const numTarjeta = useInput('numTarjeta')
    const tipoTarjeta = useInput('tipoTarjeta')

    
    return (
        <div className='formulario'>
            <h3> Paso 2/3 </h3>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" required>
                        <Form.Label>DNI</Form.Label>
                        <Form.Control type="number" placeholder="DNI" {...DNI}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" required>
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control type="text" placeholder="Provincia" {...provincia}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1" required>
                    <Form.Label>Numero de la tarjeta</Form.Label>
                    <Form.Control type='number'placeholder="Numero de la tarjeta" {...numTarjeta}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress2" required>
                    <Form.Label>Tipo de tarjeta</Form.Label>
                    <Form.Control type='text' placeholder="Tipo de tarjeta" {...tipoTarjeta}/>
                </Form.Group>

                <button className='botonVolver' variant="primary" type="submit">
                    Volver
                </button>
                <button className='botonForm' variant="primary" type="submit" required>
                    Quiero ser socio/a
                </button>
            </Form>
        </div>
    )
}

export default Form2

