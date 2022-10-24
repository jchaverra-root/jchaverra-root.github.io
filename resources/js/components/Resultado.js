import useClima from "../hooks/UseClima"

function Resultado() {


    const { resultado } = useClima()

    const { name, lat, lon } = resultado

    // Grados Kelvin
    const kelvin = 273.15

    return (
        <div className="contenedor clima">
            <h2>El Clima de {name} es: </h2>
            <h2>El Clima de {lat} es: </h2>
            <h2>El Clima de {lon} es: </h2>
        </div>
    )
}

export default Resultado