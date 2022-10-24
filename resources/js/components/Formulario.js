import React from 'react';
import './estilos.css';
import ReactDOM from 'react-dom';
import useClima from '../hooks/UseClima';
import { useState } from 'react'

const Formulario = () => {

    const [alerta, setAlerta] = useState('')

    const { busqueda, datosBusqueda, consultarClima } = useClima()

    const { ciudad } = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        if (Object.values(busqueda).includes('')) {
            setAlerta('Slecciona una Ciudad');
            return
        }
        setAlerta('')
        consultarClima(busqueda)


    }

    return (
        <div className="contenedor">
            
            {alerta && <p>{alerta}</p>}

            <form className="" onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="ciudad" className=""> Ciudad: </label>
                    <select
                        name="ciudad"
                        id="ciudad"
                        value={ciudad}
                        onChange={datosBusqueda}
                        className=""
                    >
                        <option>-- Seleccione una Ciudad --</option>
                        <option value="Miami">Miami</option>
                        <option value="Orlando">Orlando</option>
                        <option value="new%20york">New York</option>

                    </select>
                </div>
                    <input
                        type="submit"
                        className=""
                        value='Consultar Clima'
                    />
                </form>
        </div>
    );
} 

export default Formulario;

if (document.getElementById('formulario')) {
    ReactDOM.render(<Formulario />, document.getElementById('formulario'));
}