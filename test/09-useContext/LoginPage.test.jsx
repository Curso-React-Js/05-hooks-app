import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en <LoginPage />', () => {
  
  test('debe de mostrar el componente sin el usuario', () => {
     // Uso del useContext
     render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    // screen.debug();

    const preTag = screen.getByLabelText('pre'); // aria-label="pre"
    
    expect( preTag.innerHTML ).toBe('null');

  });

  test('debe de llamar el setUser cuando se hace click en el boton', () => {

    const setUserMock = jest.fn();

    // Uso del useContext
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    // screen.debug();

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect( setUserMock ).toHaveBeenCalled();
    expect( setUserMock ).toHaveBeenCalledWith({
      "email": "test@test.com", 
      "id": 132, 
      "name": "Luis"
    });
    
  });
  
});