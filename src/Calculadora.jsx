import React, { useState } from "react";

const Calculadora = () => {
    //const [bills, setBills] = useState(0) //al principio el dinero va a estar en 0 porque aun no sabemos cuanto gastamos
    //const [props, setProps] = useState([5, 10, 15, 25, 50]) // en un array coloco el porcentaje que viene por default
    //const [personas, setPersonas] = useState(0) //seteamos las personas en 0 al principio
    const [datos, setDatos] = useState({
        bills: 0,
        tips: [5, 10, 15, 25, 50],
        people: 0
    })

    return (
        <div>
            <div className="izquierda">
                <form>
                    <label>Bills: </label>
                        <input 
                        required
                        type="text"
                        name='bills'
                        value={datos.bills}
                        placeholder="$"
                       />
                </form>
            </div>



            <div className="derecha">

            </div>
            
        </div>
    )
}

export default Calculadora