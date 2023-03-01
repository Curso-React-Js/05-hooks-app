
export const todoReducer = ( initialState = [], action ) => {

  switch ( action.type ) {
    case '[TODO] Add Todo':
      // throw new Error('Action.type = ABC no esta implementadas');
      return [ action.payload, ...initialState ];
  
    default:
      return initialState;
  }

}