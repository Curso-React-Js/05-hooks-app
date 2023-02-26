import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    // console.log('setCounter( counter + 1 );'); // Lo manda a llamar
    // setCounter( counter + 1 );
    setCounter( (c) => c + value );
  }, []);

  // Cada valor es diferente por eso no puede memorizarlo
  // en el componente de ShowIncrement
  // const incrementFather = () => {
  //   setCounter( counter + 1 );
  // }

  // Otro uso, y no utilizamos el memo, lo volveria a redibujar
  // se haria un ciclo infinito
  // useEffect(() => {
  //   incrementFather();
  // }, [incrementFather]);
  
  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ incrementFather } />
    </>
  );
}