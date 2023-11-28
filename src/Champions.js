// Champions.js
import React from 'react';
import './styles/Champions.css'; 

const Champion = ({ nombres }) => {
  //REVISAR ARREGLAR ACA
  const getTopChampions = () => {
    const topChampions = [];
    nombres.forEach((nombre) => {
      const sortedGanancias = [...nombres]
        .sort((a, b) => b.ganancias - a.ganancias)
        .filter((n) => n.id !== nombre.id)
        .slice(0, 3); // Obtener las tres unidades con ganancias más altas
      topChampions.push({
        nombre: nombre.nombre,
        top: sortedGanancias,
      });
    });
    return topChampions;
  };

  const champions = getTopChampions();

  return (
    <div className="champions">
      {champions.map((champ, index) => (
        <div key={index}>
          <ul>
              <li><h6>
                {champ.nombre} 
                {/* - {champ.ganancias} */}
              </h6></li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Champion;
