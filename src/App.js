//APP--------------------------------------------------------
import React, { useState } from 'react';

import Entrada from './Entrada';
import Elemento from './Elemento';
import Teclado from './Teclado';
import Ganador from './Ganador';
import Champion from './Champions';

import './styles/App.css'; 

function App() {
  const [nombre, setNombre] = useState('');
  const [nombres, setNombres] = useState([]);//el arreglo de muchos objetos "nombre"
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [elementoActivo, setElementoActivo] = useState(null);
  const [indexo, setIndexo] = useState(0);
  const [esTurnoActivo, setEsTurnoActivo] = useState(false); 
  const [mostrarGanador,setMostrarGanador]=useState(false);

  const agregarNombre = () => {
    if (nombre !== '') {
      console.log('agregarNombre (en App)');
//el objeto nombre
      const nuevoNombre = {
        id: nombres.length,
        rating: Math.floor(Math.random() * 99) + 1,
        cambios: 0,
        nombre: nombre,
        ganancias: 0,
      };
      setNombres([...nombres, nuevoNombre]);
      setNombre('');
    }
  };




  const entrarGaleria = () => {
    if (nombres.length !==0) {
    console.log('entrarGaleria (en App)');
    setMostrarGaleria(true);
    const nuevosNombres = nombres.map((nombre) => (
      {
      ...nombre,
      rating: Math.floor(Math.random() * 99) + 1,
      cambios: 0,
    }));
    setNombres(nuevosNombres);



    const lowestId = nuevosNombres.reduce(
      (min, nombre) => (nombre.id < min ? nombre.id : min),
      nuevosNombres[0].id
    );

    // Establecer el elemento con el ID más bajo como activo
    setElementoActivo(lowestId);

    setMostrarGaleria(true);

  }};

  const cerrarGaleria=()=>{
    window.location.reload();}


  const eliminarNombre = (id) => {
    console.log('eliminarNombre (en App)');
    const nuevosNombres = nombres.filter((nombre) => nombre.id !== id);
    setNombres(nuevosNombres);
    if (nuevosNombres.length === 0) {
      window.location.reload();}
  };

  const checkGanador = () => {
    console.log('checkGanador (en App)');
    const campeon = nombres.find((nombre1) => nombre1.rating === 100);
    if (campeon) {
      const nombreGanador = campeon.nombre;
      campeon.rating = 0;
      campeon.ganancias=+1; 
      alert(` :המנצח הוא ${nombreGanador}`);
      setMostrarGanador(true);
    } else {
      return null;
    }
  };
  
  

  const nextElement = (calculo) => {
    console.log('nextElement (en App)');
    let index = indexo % nombres.length;

    if (nombres.length > 0) {
      switch (calculo) {
        case 'sumar':
          nombres[index].rating += 1;
          break;
        case 'restar':
          nombres[index].rating -= 1;
          break;
        case 'multiplicar':
          nombres[index].rating *= 2;
          break;
        case 'dividir':
          nombres[index].rating = Math.floor(nombres[index].rating / 2);
          break; 

        default:
          break;
      }

      nombres[index].cambios += 1;
      setNombres([...nombres]);
      setElementoActivo(nombres[index].id);
      

      setEsTurnoActivo(true);
      checkGanador();
      setIndexo(indexo + 1);
      let nextIndex = (indexo + 1) % nombres.length;
      setElementoActivo(nombres[nextIndex].id);
    } else {
      window.location.reload();
    }
  };



  const seguirJugando = () => {
    setMostrarGanador(false);
    nombres.forEach(objeto => {
      objeto.rating = Math.floor(Math.random() * 99) + 1;
      objeto.cambios = 0;
    });
  };
  
  

 return (
    <div className='container'>
      <div className='header'>
        <h1>"משחק ה100"</h1>
        <h3>the centenary game</h3>
      </div>

      {!mostrarGaleria && (
        <Entrada
          nombre={nombre}
          setNombre={setNombre}
          agregarNombre={agregarNombre}
          entrarGaleria={entrarGaleria}
        />
      )}

      {mostrarGaleria && (
        <div>
          {mostrarGanador ? (
            <>
            <Ganador
              cerrarGaleria={cerrarGaleria}
              onVolverAJugar={seguirJugando}
              onSalir={() => {setMostrarGaleria(false);
                window.location.reload();}}
            />

          </>
          ) : (
            <Teclado
              onSumar={() => nextElement('sumar')}
              onRestar={() => nextElement('restar')}
              onDividir={() => nextElement('dividir')}
              onMultiplicar={() => nextElement('multiplicar')}
            />
          )}






<div className="galeria">
{nombres.map((nombre) => (
  <Elemento
    key={nombre.id}
    id={nombre.id}
    nombre={nombre.nombre}
    rating={nombre.rating}
    cambios={nombre.cambios}
    onDelete={eliminarNombre}
    isActive={elementoActivo === nombre.id}
  />
))}
</div>
<div className='campeon'>
<h5>המובילים:</h5>
          <Champion nombres={nombres} />
        </div>
        </div>
      )}
    </div>
  );
}

export default App;