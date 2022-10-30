import { useState, createContext } from 'react'

const ClimaContext = createContext()


const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({})
    
    const { ciudad } = busqueda 

    const [climaCiudades, setClimaCiudades] = useState({})


    const datoSelect = e => {
        setBusqueda({
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async () => {
        try {
            const apiId = "1f48ccf35d5a116c7df4757647c8120c"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad ? ciudad : null},US&appid=${apiId}`
            const climaCiudad = await fetch(url)
            const consultaApi = await climaCiudad.json()
            setBusqueda(consultaApi)
            setClimaCiudades(consultaApi)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datoSelect,
                consultarClima,
                climaCiudades
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}
export default ClimaContext