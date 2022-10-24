import { useState, createContext } from 'react'

const ClimaContext = createContext()


const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: ''
    })

    const [resultado, setResultado] = useState({})

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    

    const consultarClima = async datos => {
        console.log(datos);
        try {
            const { ciudad } = datos

            const apiId = "1f48ccf35d5a116c7df4757647c8120c"

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},US&limit=1&appid=${apiId}`
            console.log(url)

            fetch(url)
            .then((response) => response.json())
            .then((json) => 
                {
                    setResultado(json[0])
                
                }
            )
            

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado
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