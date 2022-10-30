import { useState } from "react"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/UseClima"
import Historial from "./Historial"
import Mapa from "./Mapa"


const MostrarClima = () => {

    const { busqueda } = useClima()

    const { name, coord, main} = busqueda

    const [climaHistorial, setclimaHistorial] = useState()

    return (
        <main>
            <div className="dos-columnas"> 
                <Formulario />
                <Resultado  />
            </div>
            <div className="contenedor">
                <Mapa />
            </div>
            <div className="contenedor">
                <Historial climaHistorial={climaHistorial} setclimaHistorial={{ N:name,H: main ? main.humidity : null, LT: coord ? coord.lat : null, LN: coord ? coord.lon : null }} />
            </div>
            
        </main>
    )
}

export default MostrarClima