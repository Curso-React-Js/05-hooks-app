import { UserContext } from './UserContext';

const user = {
  id: 123,
  name: 'Angel FG',
  email: 'angefg@google.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user }}>
      { children }
    </UserContext.Provider>
  );
}
