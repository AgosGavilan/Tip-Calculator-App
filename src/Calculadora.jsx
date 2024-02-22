import React, { useEffect, useState } from "react";
import s from './style/calculadora.module.css'

const Calculadora = () => {
    const [datos, setDatos] = useState({
        bill: '',
        tip: [5, 10, 15, 25, 50],
        custom: '',
        persons: ''
    })
    const [elegido, setElegido] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)

    function handleSubmit (e) {
        e.preventDefault()
    }

    useEffect(() => {
        datos.bill.length > 0  && datos.persons.length > 0 ? setIsDisabled(false) : isDisabled
        console.log(isDisabled)
    })

    function handleChange (e) { // con esta funcion manejo los valores que reciben mis inputs //BILL y PERSONAS
        setDatos((prev) => ({
            ...prev, //utilizo el prev asi no me modifica TODOS MIS DATOS, sino los target que necesito
            [e.target.name]: e.target.value
        }))
        datos.custom.length > 0 ? setElegido(datos.custom) : ''
    }

    function handleClick (e) { //con esta funcion capturo el valor del boton elegido // TIP
        //elegido = e.target.value //aca guardo el valor del boton elegido
        setElegido(e.target.value)
    }

    function handleReset () {
      setDatos({
        bill: '',
        persons: '',
        tip: [5, 10, 15, 25, 50],
        custom: ''
      })
      setElegido(0),
      setTipAmount(0),
      setTotal(0)
      setIsDisabled(true)
    }

    useEffect(() => {
        if(datos.bill.length > 0 && datos.persons > 0 && elegido.length > 0) {
            let tipAm = (datos.bill * (elegido / 100)) / datos.persons
            tipAm > 0 ? setTipAmount(Number(tipAm.toFixed(2))) : ''
        } else {
            ''
        }
        
    }), [tipAmount, datos]

    useEffect(() => {
        if(tipAmount > 0) {
            let porcentaje = (datos.bill) * (elegido/100)
            let totalPer = (Number(datos.bill) + porcentaje) / datos.persons
            totalPer > 0 ? setTotal(Number(totalPer.toFixed(2))) : ''
        } else {
            ''
        }
    }, [total, datos, tipAmount])

    return ( 
        <div className={s.box}>
            <div className={s.izquierda}>
                <form onSubmit={handleSubmit} className={s.datos}>
                    <label className={s.labels}>Bill </label>
                    <span className={s.box_bill}>
                        <span className={s.box_signo}><p>$</p></span>
                        <input 
                        className={s.input}
                        type="number"
                        name='bill' //utilizo este atributo para poder trabajar asi: e.target.name
                        value={datos.bill}
                        placeholder="0"
                        onChange={handleChange}
                       />
                    </span>   

                    <label className={s.labels}>Select tip %</label>
                        <div className={s.tips}>
                            {datos.tip.map((t, i) => {
                                return (
                                    <button
                                    className={i === datos.tip.indexOf(Number(elegido)) ? s.btn_elegido : s.button_tip}
                                    value={t} //utilizo este atributo para poder trabajar con el e.target.value
                                    key={i} // i es el indice
                                    onClick={handleClick}
                                    >
                                        {t}%
                                    </button>
                                )
                            })}
                            <input 
                            className={s.input_custom}
                            type="number"
                            name='custom'
                            value={datos.custom}
                            placeholder="Custom"
                            onChange={handleChange}
                            />
                        </div>

                    <label className={s.labels}>Number of people </label>
                    <span className={s.box_bill}>
                        <span className={s.person}>person</span>
                        <input
                        className={s.input}
                        type='number'
                        name='persons'
                        placeholder="0"
                        value={datos.persons}
                        onChange={handleChange}
                        />
                    </span>
                </form>
            </div>
            
            <div className={s.derecha}>
                <section className={s.sub_box}>
                    <span className={s.sub_box_izq}>
                        <span className={s.palabras_mayor}>Tip Amount</span>
                        <span className={s.palabras_menor}>/ person</span>
                    </span> 
                    <div className={s.box_resultados}>
                        <span className={s.resultados}>
                            $ {tipAmount}
                        </span>
                    </div>
                </section>
                <section className={s.sub_box}>
                    <span className={s.sub_box_izq}>
                        <span className={s.palabras_mayor}>Total</span>
                        <span className={s.palabras_menor}>/person</span>
                    </span>
                    <div className={s.box_resultados}>
                        <span className={s.resultados}>
                            $ {new Intl.NumberFormat('es-AR').format(total)}
                        </span>
                    </div>
                </section>
                <div className={s.box_reset}>
                    <button 
                    className={isDisabled ? s.reset_disabled : s.reset} 
                    onClick={handleReset}
                    disabled={isDisabled}
                    >
                        RESET
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Calculadora

//empezamos el 2024

//para capturar el valor de un boton, tengo que agregarle el atributo value a dicho boton
//<button value={t} key={t.id} onClick={handleClick}>

//agregar la funcionalidad del boton reset -----> LISTO!!
//agregar la funcionalidad del input custom -----> LISTO!!
//arreglar el total con el tema de los decimales y redondeo ----> LISTO!!
//empezar con el css
//   |____> empezar con la estructura ----> LISTO!!
//        > darle color
