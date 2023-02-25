import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

  // https://react-hook-form.com/get-started => manejo de formularios avanzado

  const {
    formState,
    onInputChange,
    username,
    email,
    password,
    onResetForm, // estandar de eventos con onNombreFunciont()
  } = useForm({
    username: '',
    email: '',
    password: '',
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con custom Hook</h1>

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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={ password }
        onChange={ onInputChange } />
      
      <button 
        className='btn btn-primary mt-2'
        onClick={ onResetForm }>Borrar</button>

    </>
  );
}