
// 1. Tenemos un estado inicial
const initialState = [
  {
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
  },
];

// Funcion pura
// 2. Ese estado inicial lo inicializamos en el state
// 3. Tener una action = {}
const todoReducer = ( state = initialState, action = {} ) => {

  if ( action.type === '[TODO] add todo' ) {
    return [ ...state, action.payload ];
  }

  return state;
}

let todos = todoReducer();
// console.log(todos);

// Al agregar no usar el .push
const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del Poder',
  done: false,
}

// Estandar
const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );

console.log({ state: todos });

