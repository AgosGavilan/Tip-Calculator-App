import React, { useEffect, useState } from "react";

const Calculadora = () => {

    const [datos, setDatos] = useState({
        bill: '',
        tips: {
            dados: [5, 10, 15, 25, 50],
            custom: ''
        },
        person: ''
    })
    let elegido = null
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)

    function handleSubmit (e) {
        e.preventDefault()
    }

    function handleChange (e) {
        setDatos (prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(datos.bill)
        console.log(datos.person)
    }

    function handleClick (e) { //en esta funcion capturo el valor del boton
        console.log('soy e', e.target.value)
        elegido = e.target.value
        console.log(elegido)
    }

    return ( 
        <div>
            <div className="izquierda">
                <form onSubmit={handleSubmit}>
                    <label>Bills: </label>
                        <input 
                        type="number"
                        name='bill' //utilizo este atributo para poder trabajar asi: e.target.name
                        value={datos.bill}
                        placeholder="0"
                        onChange={handleChange}
                       />

                    <label>Select tip: </label>
                        {datos.tips.dados.map(t => {
                            return (
                                <button
                                value={t} //utilizo este atributo para poder trabajar con el e.target.value
                                key={t}
                                onClick={handleClick}
                                >
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
                        type='number'
                        name='person'
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

//para capturar el valor de un boton, tengo que agregarle el atributo value a dicho boton
//<button value={t} key={t.id} onClick={handleClick}>