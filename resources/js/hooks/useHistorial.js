import { useContext } from "react";
import ClimaContext from '../context/ClimaProvider'

const useHistorial = () => {
    return useContext(ClimaContext)
}

export default useHistorial