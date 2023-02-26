import { useRef } from 'react';

export const FocusScreen = () => {

  // Referencia que apunte a un HTML
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector('input').focus();
    // Permite seleccionar nuevamente con el focus
    // document.querySelector('input').select();

    // console.log(inputRef);
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>

      <hr />

      <input
        ref={ inputRef }
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre" />

      <button
        className="btn btn-primary mt-2"
        onClick={ onClick }>Set focus</button>
    </>
  );
}