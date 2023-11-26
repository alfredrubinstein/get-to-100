//TECLADO-----------------------------------------------
import React from 'react';
import './styles/Teclado.css';


function Teclado({ onSumar, onRestar, onDividir, onMultiplicar }) {
  const handleSumar = () => {
    console.log('Teclado mando a llamar a la funcion sumar de App');
    onSumar();
  };

  const handleRestar = () => {
    console.log('Teclado mando a llamar a la funcion restar de App');
    onRestar();
  };

  const handleDividir = () => {
    console.log('Teclado mando a llamar a la funcion dividir de App');
    onDividir();
  };

  const handleMultiplicar = () => {
    console.log('Teclado mando a llamar a la funcion multiplicar de App');
    onMultiplicar();
  };

  return (
    <div className="teclado">
      <button onClick={handleSumar}>הוסף 1</button>
      <button onClick={handleRestar}>הורד 1</button>
      <button onClick={handleDividir}>חלק ב 2</button>
      <button onClick={handleMultiplicar}>הכפל ב 2</button>
    </div>
  );
}

export default Teclado;
