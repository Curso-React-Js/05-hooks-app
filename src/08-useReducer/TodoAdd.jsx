import { useForm } from '../hooks';

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = ( event ) => {
    event.preventDefault();

    if ( description.trim().length === 0 ) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    }

    onNewTodo(newTodo);
    onResetForm(); // clean
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input 
        className="form-control"
        type="text"
        placeholder="¿Qué hay que hacer?"
        name='description'
        value={ description }
        onChange={ onInputChange } />

      <button 
        type="submit"
        className="btn btn-outline-primary mt-1">Agregar</button>
    </form>
  );
}