import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

// url alternativa =>  https://breakingbadquotes.xyz/
export const Layout = () => {

  const { counter, increment } = useCounter(1);
  const url = `https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`;
  const { data, isLoading, hasError } = useFetch(url);

  const { quote, author } = !!data && data[0];
 
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        (isLoading) 
            ? <LoadingQuote />
            : <Quote quote={ quote } author={ author } /> 
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