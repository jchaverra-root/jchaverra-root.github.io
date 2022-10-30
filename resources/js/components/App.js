import React from 'react';
import './estilos.css';
import ReactDOM from 'react-dom';
import MostrarClima from "./MostrarClima"
import { ClimaProvider } from '../context/ClimaProvider'

import './estilos.css';


function App() {

    return (
        <>
        <ClimaProvider>
        <header>
            <h1>Buscador de Clima BTS</h1>
        </header>
            <MostrarClima />
        </ClimaProvider>
        </>
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<React.StrictMode>
                            <App />
                    </React.StrictMode>, 
    document.getElementById('app'));
}