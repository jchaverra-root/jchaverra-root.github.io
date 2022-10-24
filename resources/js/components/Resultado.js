import useClima from "../hooks/UseClima"

function Resultado() {


    const { resultado } = useClima()

    const { name, lat, lon } = resultado

    // Grados Kelvin
    const kelvin = 273.15

    return (
        <div className="contenedor clima">
            <h2>El Clima de {name} es: </h2>
            <h2>Latitu {lat} </h2>
            <h2>Longitud {lon}  </h2>
        </div>
    )
}

export default Resultado