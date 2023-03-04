import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

// usarlo directamente de la clase
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  // ciclo de vida de las pruebas
  beforeEach(() => {
    jest.clearAllMocks(); // limpiar las pruebas
  });
  
  test('debe de mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasHerror: null,
    });

    render( <MultipleCustomHooks /> );

    expect( screen.getByText('Loading...') );
    expect( screen.getByText('Breaking Bad Quotes') );

    const nextButton = screen.getByRole('button', {
      name: "Next quote"
    });

    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test('debe de mostrar un Quote', () => {
    // Simular valor de respuesta de un hook
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Angel',
          quote: 'Hola Mundo'
        }
      ],
      isLoading: false,
      hasHerror: null,
    });

    render( <MultipleCustomHooks /> );
    // screen.debug();

    expect( screen.getByText('Hola Mundo') ).toBeTruthy();
    expect( screen.getByText('Angel') ).toBeTruthy();

    const nextButton = screen.getByRole('button', {
      name: 'Next quote'
    });

    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar la función de incrementar', () => {
    // Simular valor de respuesta de un hook
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Angel',
          quote: 'Hola Mundo'
        }
      ],
      isLoading: false,
      hasHerror: null,
    });

    render( <MultipleCustomHooks /> );

    const nextButton = screen.getByRole('button', {
      name: 'Next quote'
    });

    fireEvent.click( nextButton );

    expect( mockIncrement ).toHaveBeenCalled();
    
  });
  
});