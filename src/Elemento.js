
function Elemento({ id, nombre, rating, cambios, onDelete, isActive }) {
  const borrarElemento = () => {
    console.log('Borrarse (en Elemento)');
    onDelete(id);
  };

  return (
    <div className={`elemento ${isActive ? 'nombre-activo' : 'galeria'}`}>
      <button className='sacar' onClick={borrarElemento}>❌</button>
      <p>שם: {nombre}</p>
      <p>ניקוד: {rating}</p>
      <p>צעדים: {cambios}</p>
    </div>
  );
}

export default Elemento;
