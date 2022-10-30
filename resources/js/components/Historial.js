import React, { useState } from 'react'


const Historial = ({ climaHistorial, setclimaHistorial }) => {

  // const [climaHistorial, setclimaHistorial] = useState([objetoClimaHistorial])

  const [Historial, setHistorial] = useState([])
  const cargarClimaCiudad = () => {
    setHistorial([...Historial, setclimaHistorial])
    }
  // cargarClimaCiudad(cargarClimaCiudad)

  return (
    <div>
      <h1>Historial</h1>
      <p>Lista de Climas  Consultados Previamente </p>
      {/* <button onClick={cargarClimaCiudad}>Cargar Historial</button> */}
      <input
        onClick={cargarClimaCiudad}
        type="submit"
        className=""
        value='Cargar Historial'
      />
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Ciudad</th>
            <th scope='col'>Humedad</th>
            <th scope='col'>Coordenadas</th>
          </tr>
        </thead>
        <tbody>
          {/* {Historial.forEach(itemHistorial => {
          <tr>
            <th scope='row'>{itemHistorial}</th>
            <td>{itemHistorial.N}</td>
            <td>{itemHistorial.H}</td>
            <td>{itemHistorial.LT} / {itemHistorial.LN}</td>
          </tr>
          })} */}

          {
            Historial.map( (itemHistorial) => {
              return(
                <tr>
                  <td>
                    {itemHistorial.N}
                  </td>
                  <td>
                    {itemHistorial.H}%
                  </td>
                  <td>
                    {itemHistorial.LT} / {itemHistorial.LN}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Historial
