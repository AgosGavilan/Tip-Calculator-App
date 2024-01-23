import React, { useState } from "react";

const Calculadora = () => {
    //const [bills, setBills] = useState(0) //al principio el dinero va a estar en 0 porque aun no sabemos cuanto gastamos
    //const [props, setProps] = useState([5, 10, 15, 25, 50]) // en un array coloco el porcentaje que viene por default
    //const [personas, setPersonas] = useState(0) //seteamos las personas en 0 al principio
    const [datos, setDatos] = useState({
        bills: 0,
        tips: {
            dados: [5, 10, 15, 25, 50],
            custom: 0},
        people: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div className="izquierda">
                <form onSubmit={handleSubmit}>
                    <label>Bills: </label>
                        <input 
                        required
                        type="number"
                        name='bills'
                        value={datos.bills}
                        placeholder="$"
                       />
                    <label>Select tip: </label>
                        {datos.tips.dados.map(e => {
                            return (
                                <button>{e}</button>
                            )
                        })}
                        <input 
                        type="number"
                        name='custom'
                        value={datos.tips.custom}
                        placeholder="custom"/>
                    <label>Number of people </label>
                        <input
                        required
                        type='number'
                        name='people'
                        value={datos.people}
                        />
                </form>
            </div>



            <div className="derecha">
                <section>
                        Tip Amount <span> / person</span>
                        <div>
                            $ {datos.bills}
                        </div>
                </section>
                <section>
                        Total <span> / person</span>
                        <div>
                            $ {}
                        </div>
                </section>
                <button>RESET</button>
            </div>
            
        </div>
    )
}

export default Calculadora

//empezamos el 2024