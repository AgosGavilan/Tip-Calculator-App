import React, { useEffect, useState } from "react";

const Calculadora = () => {
    const [datos, setDatos] = useState({
        bill: 0,
        tip: {
            dados: [5, 10, 15, 25, 50],
            custom: 0
        },
        persons: 0
    })
    
    let elegido = ''
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)

    function handleSubmit (e) {
        e.preventDefault()
    }

    // useEffect(() => {
    //     console.log('soy bill',datos.bill)
    //     console.log('soy persons',datos.persons)
    //     console.log('soy tips dados',datos.tip.dados)
    // })

    function handleChange (e) { // con esta funcion manejo los valores que reciben mis inputs //BILL y PERSONAS
        setDatos((prev) => ({
            ...prev, //utilizo el prev asi no me modifica TODOS MIS DATOS, sino los target que necesito
            [e.target.name]: e.target.value
        }))
    }

    function handleClick (e) { //con esta funcion capturo el valor del boton elegido // TIP
        elegido = e.target.value //aca guardo el valor del boton elegido
        console.log('soy elegido', elegido)
    }

    // if(datos.bill || datos.persons || elegido) { //si datos.bill y datos.persons y elegido es DISTINTO DE CERO
    //     useEffect(() => {
    //         let tipAm = (datos.bill * elegido) / datos.persons
    //         console.log('soy tipAm',tipAm)
    //         setTipAmount(tipAm)
    //     })
    // } else {
    //     alert('esta todo mal')
    // }



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
                        {datos.tip.dados.map(t => {
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
                        value={datos.tip.custom}
                        placeholder="custom"
                        onChange={handleChange}
                        />

                    <label>Number of people </label>
                        <input
                        type='number'
                        name='persons'
                        placeholder="0"
                        value={datos.persons}
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