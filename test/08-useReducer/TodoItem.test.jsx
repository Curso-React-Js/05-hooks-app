import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem />', () => {

  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false,
  }

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  })
  
  test('debe de mostrar el Todo Pendiente de completar', () => {
    
    render( 
      <TodoItem 
        todo={ todo }
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock } /> 
    );
    // screen.debug();

    const liElement = screen.getByRole('listitem');
    // console.log(liElement.innerHTML);

    expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

    // cuando no se encuentra el elemento en el html, crear un aria-label con algun nombre
    // const spanElement = screen.getByRole('span');
    // Y utilizar el getByLabelText
    const spanElement = screen.getByLabelText('span');
    // console.log(spanElement);

    // console.log(spanElement.className);
    // TENER CUIDADO CON LOS ESPACIOS EN BLANCO
    // expect( spanElement.className ).toBe('align-self-center ');

    // Para no mover el html usar el toContain (No es preciso)
    expect( spanElement.className ).toContain('align-self-center');
    expect( spanElement.className ).not.toContain('ext-decoration-line-through'); // para el tachado
    
  });

  test('debe de mostrar el Todo completado', () => {
    todo.done = true;
    
    render( 
      <TodoItem 
        todo={ todo }
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock } /> 
    );

    const spanElement = screen.getByLabelText('span');
    expect( spanElement.className ).toContain('ext-decoration-line-through'); // para el tachado
    
  });

  test('span debe de llamar el ToggleTodo cuando se hace click', () => {

    render( 
      <TodoItem 
        todo={ todo }
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock } /> 
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click( spanElement );

    expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

  });

  test('button debe de llamar el deleteTodo', () => {

    render( 
      <TodoItem
        todo={ todo }
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock } /> 
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click( buttonElement );

    expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

  });
  
});