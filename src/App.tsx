/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import P, { Person } from "./quotes";

// JSX function
export function QuoteBox() {
  // Generate random index
  const randomIndex = () => {
    return Math.floor(Math.random() * P.length);
  };

  // Set initial state explicitly to a number
  const [index, setIndex] = useState<number>(randomIndex());

  // Set new state
  const handleClick = () => {
    const newIndex: number = randomIndex();
    if (index != newIndex) {
      setIndex(newIndex);
    } else {
      setIndex(newIndex + 1);
    }
  };

  // Target the quote from the import array
  let quote: Person = P[index];

  // HTML
  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${quote.url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div
        id="quote-box"
        className="py-4 px-5 rounded border border-dark text-center"
      >
        <div id="text" className="p-2 row justify-content-center">
          <p className="fst-italic fs-2 text-dark lh-base">"{quote.quote}"</p>
        </div>

        <div id="author" className="p-2 row justify-content-end">
          <p className="fs-5 col-6">- {quote.author}</p>
        </div>

        <div id="click-zone" className="p-2 row justify-content-end">
          <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
          <button
            id="new-quote"
            className="p-1 btn btn-dark col-3"
            onClick={handleClick}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}
