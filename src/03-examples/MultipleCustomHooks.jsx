import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

// url alternativa =>  https://breakingbadquotes.xyz/
export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const url = `https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`;
  const { data, isLoading, hasError } = useFetch(url);

  // si la data tiene valor entonces toma el primer elemento del arreglo
  const { quote, author } = !!data && data[0];
  // EJEMPLO DE !!undefined ó !!null
  // La negacion en algo que no tiene data, lo transforma a algo que si tiene
  // !undefined => true
  // !null => true
  // Entonces la doble negacion tranforma lo que si tiene a lo contrario
  // !!undefined => false
  // !!null => false

  // console.log({ data, isLoading, hasError });

  // if ( isLoading ) {
  //   return (
  //     <h1>Cargando....</h1>
  //   );
  // }

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        (isLoading) 
            ? 
            (
              <div className="alert alert-info text-center">
                Loading...
              </div>
            )
            : 
            (
              <blockquote className="blockquote text-end">
                <p className="mb-1">{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
              </blockquote>
            )
      }

      <button 
        className="btn btn-primary"
        disabled={ isLoading }
        onClick={ () => increment(1) }>
        Next quote
      </button>

    </>
  );
}