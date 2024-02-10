import React from "react";
import Calculadora from './Calculadora.jsx'
import s from './style/app.module.css'

function App () {
    return (
        <div className={s.contenedor}> 
            <Calculadora />
        </div>
    )

}

export default App