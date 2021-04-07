import React from 'react'
import "./index.css";
import CountUp from "react-countup";


export default function Numbers() {
    return (
        <>
            <div className="container-fluid justify-content-md-center mb-5">
            <h2 className="title">Cifras TECHO</h2>
                <div className="row col-md-12 justify-content-md-center mt-5">
                    <div className="cardBox col-xl-2  cardBackground" >
                        <div className="card-body">
                            <CountUp start={0} end={165.000} delay={0} duration={2.75} decimal="."  decimals={3}>
                                {({ countUpRef }) => (
                                    <div> 
                                    <span /> 
                                    <h5 ref={countUpRef} className="card-title cardNumber"></h5>
                                    
                                    </div>
                                )}
                            </CountUp>
                            <p className="cardText"> voluntarios/as que se movilizaron en Argentina en construcciones y eventos masivos.</p>
                        </div>
                    </div>
                    <div className="cardBox col-xl-2" >
                        <div className="card-body">
                        <CountUp start={0} end={15.644} delay={0} duration={2.75} decimal="."  decimals={3}>
                            {({ countUpRef }) => (
                                <div> 
                                <span />
                                <h5 ref={countUpRef} className="card-title cardNumber"></h5>
                                </div>
                            )}
                        </CountUp>
                            <p className="cardText">viviendas de emergencia construidas en asentamientos.</p>
                        </div>
                    </div>
                    <div className="cardBox col-xl-2 cardBackground" >
                        <div className="card-body">
                        <CountUp start={0} end={693} delay={0} duration={2.75}>
                            {({ countUpRef }) => (
                                <div> 
                                <span />
                                <h5 ref={countUpRef} className="card-title cardNumber"></h5>
                                </div>
                            )}
                        </CountUp>
                            <p className="cardText">voluntarios/as realizan un trabajo permanente en los barrios.</p>
                        </div>
                    </div>
                    <div className="cardBox col-xl-2" >
                        <div className="card-body">
                        <CountUp start={0} end={81} delay={0} duration={2.75}>
                            {({ countUpRef }) => (
                                <div> 
                                <span />
                                <h5 ref={countUpRef} className="card-title cardNumber"></h5>
                                </div>
                            )}
                        </CountUp>
                            <p className="cardText">en donde estamos trabajando, 58 de ellos con mesas de trabajo activas.</p>
                        </div>
                    </div>
                    <div className="cardBox col-xl-2 cardBackground" >
                        <div className="card-body">
                        <CountUp start={0} end={150} delay={0} duration={2.75}>
                            {({ countUpRef }) => (
                                <div> 
                                <span />
                                <h5 ref={countUpRef} className="card-title cardNumber"></h5>
                                </div>
                            )}
                        </CountUp>
                            <p className="cardText">proyectos de infraestructura y mejoramiento de hábitat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
