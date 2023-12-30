// Jugadores.jsx
import React from 'react';
import './PlayersPage.scss';

const PlayersPage = () => {
  // Supongamos que tienes una lista de jugadores con sus estadísticas
  const jugadores = [
    { id: 1, nombre: 'Jugador 1', posicion: 'Catcher', dorsal: 10, edad: 25, hits: 30, carreras_anotadas: 15 },
    { id: 2, nombre: 'Jugador 2', posicion: 'Outfielder', dorsal: 7, edad: 28, hits: 25, carreras_anotadas: 12 },
    { id: 3, nombre: 'Jugador 3', posicion: 'Pitcher', dorsal: 22, edad: 30, hits: 20, carreras_anotadas: 10 },
    { id: 4, nombre: 'Jugador 4', posicion: 'Infielder', dorsal: 15, edad: 24, hits: 35, carreras_anotadas: 18 },
    // Agrega más jugadores...
    { id: 5, nombre: 'Jugador 5', posicion: 'Outfielder', dorsal: 18, edad: 26, hits: 28, carreras_anotadas: 14 },
    { id: 6, nombre: 'Jugador 6', posicion: 'Pitcher', dorsal: 33, edad: 29, hits: 22, carreras_anotadas: 12 },
    { id: 7, nombre: 'Jugador 7', posicion: 'Infielder', dorsal: 25, edad: 27, hits: 32, carreras_anotadas: 16 },
    // Agrega más jugadores según sea necesario
  ];

  return (
    <div className="jugadores-container">
      <h2>Tabla de Jugadores:</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Posición</th>
            <th>Edad</th>
            <th>Dorsal</th>
            
            <th>Hits</th>
            <th>Carreras</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador, index) => (
            <tr key={index}>
              <td>{jugador.nombre}</td>
              <td>{jugador.posicion}</td>
              <td>{jugador.hits}</td>
              <td>{jugador.dorsal}</td>
              <td>{jugador.edad}</td>
              <td>{jugador.carreras_anotadas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersPage;