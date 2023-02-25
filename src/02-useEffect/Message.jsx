import { useEffect, useState } from 'react';

export const Message = () => {

  const [ coords, setCoords ] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    // console.log('Message Mounted');

    // Para limpiar el listener se debe de llamar antes, para
    // despues poder cerrarlo
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      // console.log(coords);
      setCoords({ x, y });
    }

    // Evento para saber donde esta el mouse o cursor
    // window.addEventListener('mousemove', (event) => {
    //   // console.log(event);
    //   console.log(event.x, event.y);
    // });

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      //console.log('Message Unmunted');

      // Para limpiar un listener
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <h3>Usuario ya existe</h3>

      { JSON.stringify(coords) }
    </>
  );
}