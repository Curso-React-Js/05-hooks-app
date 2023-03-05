import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <HomePage />', () => {

  const user = {
    id: 1,
    name: 'Angel',
  }
  
  test('debe de motrar el componente sin el usuario', () => {
    // Uso del useContext
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug();

    const preTag = screen.getByLabelText('pre'); // aria-label="pre"
    // console.log(preTag.innerHTML);

    expect(preTag.innerHTML).toBe('null');
  
  });
  
  test('debe de motrar el componente con el usuario', () => {
    // Uso del useContext
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug();

    const preTag = screen.getByLabelText('pre'); // aria-label="pre"
    // console.log(preTag.innerHTML);

    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  
  });
  
});