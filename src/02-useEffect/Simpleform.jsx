import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

  const [ formState, setFormState ] = useState({
    username: 'strider',
    email: 'angel@google.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    // console.log(event.target.name);
    const { name, value } = target;

    setFormState({
      ...formState,
      [ name ]: value
    });
  }

  // en useEffect poner => [], significa que solo se llame una vez
  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  // Crear useEffect para cada cambio individual como los valores del input
  useEffect(() => {
    // console.log('formState changed!');
  }, [ formState ]);

  // Esta atento de los cambios del email
  useEffect(() => {
    // console.log('email changed');
  }, [ email ]);

  // useEffect(() => {
  //   // crear un listener
  //   first
  
  //   // Limpiar listener
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  return (
    <>
      <h1>Formulario Simple</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange } />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={ email }
        onChange={ onInputChange } />

        {
          (username === 'strider2') && <Message />
        }
    </>
  );
}