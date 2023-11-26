//ENTRADA-------------------------------------------------------------------
import React, { useState } from 'react';
import './styles/Entrada.css';

function Entrada({ nombre, setNombre, agregarNombre, entrarGaleria }) {
  const [nombresAgregados, setNombresAgregados] = useState([]);

  const agregarNombreLista = () => {
    console.log('agregarNombreLista (en Entrada)');
    if (nombre.trim() !=='') {
      setNombresAgregados([...nombresAgregados, nombre.trim()]);
    }
  };

  return (
    <div className="input-container">
    
      <input
        type="text"
        placeholder="רשום שחקן"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={() => {agregarNombre(); agregarNombreLista();}}>הכנס שם</button>
      <button onClick={entrarGaleria}>כניסה</button>

      <ul className="nombres-lista">
        {nombresAgregados.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Entrada;
