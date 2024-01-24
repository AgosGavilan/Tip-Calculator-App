import React, { useEffect, useState } from "react";

const Calculadora = () => {
    //const [bills, setBills] = useState(0) //al principio el dinero va a estar en 0 porque aun no sabemos cuanto gastamos
    //const [props, setProps] = useState([5, 10, 15, 25, 50]) // en un array coloco el porcentaje que viene por default
    //const [personas, setPersonas] = useState(0) //seteamos las personas en 0 al principio
    const [datos, setDatos] = useState({
        bill: null,
        tips: {
            dados: [5, 10, 15, 25, 50],
            custom: null},
        person: null
    })
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)

    function handleSubmit (e) {
        e.preventDefault()
    }

    function handleChange (e) {
        e.preventDefault()
        setDatos (prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function handleClick (e) {
        console.log(e)

    }

    // useEffect(() => {
    //     let value = 0
    //     value = (datos.bill * datos.tips.custom) / datos.person
    //     console.log("soy value", value)
    //     setTipAmount(value)
    //     console.log("soy tipamount", tipAmount)
    // }, [])


    return ( 
        <div>
            <div className="izquierda">
                <form onSubmit={handleSubmit}>
                    <label>Bills: </label>
                        <input 
                        //required
                        type="number"
                        name='bill'
                        value={datos.bill}
                        placeholder="0"
                        onChange={handleChange}
                       />

                    <label>Select tip: </label>
                        {datos.tips.dados.map(t => {
                            return (
                                <button key={t.id} onClick={handleClick}>
                                    {t}%
                                </button>
                            )
                        })}
                        <input 
                        type="number"
                        name='custom'
                        value={datos.tips.custom}
                        placeholder="custom"
                        onChange={handleChange}
                        />

                    <label>Number of people </label>
                        <input
                        //required
                        type='number'
                        name='people'
                        placeholder="0"
                        value={datos.person}
                        onChange={handleChange}
                        />
                </form>
            </div>



            <div className="derecha">
                <section>
                        Tip Amount <span> / person</span>
                        <div>
                            $ {tipAmount}
                        </div>
                </section>
                <section>
                        Total <span> / person</span>
                        <div>
                            $ {total}
                        </div>
                </section>
                <button>RESET</button>
            </div>
            
        </div>
    )
}

export default Calculadora

//empezamos el 2024