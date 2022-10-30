import useClima from "../hooks/UseClima"
import React from "react"
import Maps from "./Maps"

// const Mapa = () => {
function Mapa() {

    const { busqueda } = useClima()

    const { name, coord } = busqueda

    // const lat = coord ? coord.lat : null

    // const lon = coord ? coord.lon : null

    return (
        <div>
            <h1>Mapa</h1>
            <div className="contenedor clima text-center d-flex justify-content-center">
                {coord ? <h1 className="m-auto p-auto">Las Coordenadas de {name} son Lat:{coord.lat} y Lon:{coord.lon} </h1> : null}
            </div>
            <Maps dato1={name} dato2={coord ? coord.lat : null} dato3={coord ? coord.lon : null} />
        </div>
    )

}

export default Mapa