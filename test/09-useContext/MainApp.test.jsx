import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <MainApp />', () => {
  
  test('debe de mostrar el HomePage', () => {

    // Para la raiz del route
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();
    expect( screen.getByText('HomePage') ).toBeTruthy();
    
  });

  test('debe de mostrar el LoginPage', () => {

    // Para la raiz del route
    // initialEntries para simular que estamos en el login
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();
    expect( screen.getByText('LoginPage') ).toBeTruthy();
    
  });
  
});