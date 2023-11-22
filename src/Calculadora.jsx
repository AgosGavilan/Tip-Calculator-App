import React, { useState } from "react";

export const Calculadora = () => {
    const [bills, setBills] = useState(0) //al principio el dinero va a estar en 0 porque aun no sabemos cuanto gastamos
    const [props, setProps] = useState([5, 10, 15, 25, 500]) // en un array coloco el porcentaje que viene por default
    const [personas, setPersonas] = useState(0) //seteamos las personas en 0 al principio

    return (
        <div>
            <div className="izquierda">
                <form>
                    <label>Bills: </label>
                </form>
            </div>



            <div className="derecha">

            </div>
            
        </div>
    )
}