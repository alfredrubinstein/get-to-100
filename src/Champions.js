import React from 'react';



const guardarGanadorLocalStorage = (nombreGanador) => {
  let ganadores = JSON.parse(localStorage.getItem('ganadores')) || [];
  
  const existingWinner = ganadores.find((ganador) => ganador.nombre === nombreGanador);
  if (existingWinner) {
    existingWinner.ganancias++;
  } else {
    ganadores.push({ nombre: nombreGanador, ganancias: 1 });
  }

  ganadores.sort((a, b) => b.ganancias - a.ganancias); 
  localStorage.setItem('ganadores', JSON.stringify(ganadores.slice(0, 3))); 
};


const Champions = () => {
  const obtenerTresMayoresGanadores = () => {
console.log('entrada a local storage');
    let ganadores = JSON.parse(localStorage.getItem('ganadores')) || [];
    return ganadores.slice(0, 3);
  };

  const renderChampions = () => {
    const tresMayoresGanadores = obtenerTresMayoresGanadores();
    if (tresMayoresGanadores.length < 1) {
      return null; 
    }
    return (
      <div className="champions">
        <h2>שחקני המאה!</h2>
        {tresMayoresGanadores.map((ganador, index) => (
          <div key={index}>
            <p>שם: {ganador.nombre}</p>
            <p>מספר נצחונות: {ganador.ganancias}</p>
          </div>
        ))}
      </div>
    );
  };

  return <div>{renderChampions()}</div>;
};

export default Champions;
