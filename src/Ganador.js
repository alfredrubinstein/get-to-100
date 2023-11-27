//GANADOR------------------------------------------------------------
import React from 'react';
import './styles/Ganador.css';

function Ganador({ onVolverAJugar, onSalir }) {
  const handleVolverAJugar = () => {
    console.log('Ganador recivio el cambio');
    onVolverAJugar();
  };

  const handleSalir = () => {
    console.log('Ganador recivio el cambio');
    onSalir();
  };

  return (
    
    <div className="ganador-container">
      <p>המשחק נגמר!</p>
      <button className='button-ganador' onClick={handleVolverAJugar}>שחק שוב</button>
      <button className='button-ganador' onClick={handleSalir}>יציאה</button>
    </div>
  );
}

export default Ganador;
