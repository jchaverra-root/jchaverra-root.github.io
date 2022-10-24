import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/UseClima"

const MostrarClima = () => {

    const { resultado } = useClima()

    return (
        <main className="dos-columnas">
            <Formulario />

            
            <Resultado  />
            
            
        </main>
    )
}

export default MostrarClima