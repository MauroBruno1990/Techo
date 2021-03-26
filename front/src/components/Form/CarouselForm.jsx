import React from 'react'
import Carousel from 'react-bootstrap/Carousel' 

// Este sería un carousel que mostraría imágenes del impacto que tiene la donación que está haciendo el donante.

const CarouselForm = () => {

    return (
    <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://www.cl24.cl/u/fotografias/m/2021/3/25/f1280x720-31218_162893_3474.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://www.trenquelauquen.gov.ar/wordpress/wp-content/uploads/fundacion-techo-Rosario-julio-2016-4.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://www.mqltv.com/wp-content/uploads/2016/03/foto1.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default CarouselForm

