import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./index";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, IsLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {IsLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={IsLoading}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};
