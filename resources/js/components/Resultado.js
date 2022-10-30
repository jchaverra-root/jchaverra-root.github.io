import useClima from "../hooks/UseClima"
import React from "react";

function Resultado() {

    const { busqueda } = useClima()

    const { name, main } = busqueda

    // console.log(resultado)

    // const [climaCiudad, setClimaCiudad] = React.useState([])

    // React.useEffect(() => {
    //     obtenerDatos()
    // }, [])

    // const obtenerDatos = async () => {

    //     const apiId = "1f48ccf35d5a116c7df4757647c8120c"
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=${apiId}`
    //     const datos = await fetch(url)
    //     const climaCiudad = await datos.json()
    //     console.log(climaCiudad)
    //     setClimaCiudad(climaCiudad)
    // }

    return (
        <div className="contenedor clima text-center d-flex justify-content-center">
            {main ? <h1 className="m-auto p-auto">La Humedad de {name} es {main.humidity}%</h1> : null}
        </div>
    )
}

export default Resultado
