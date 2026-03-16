import React from "react";
import Button from "../Button";
import "./quotesCard.css";

const QuotesCard = ({ generateNewQuote, quote, isLoading }) => {
  return (
    <div className="custom-quotes-card">
      <div className="quote-content">
        {quote.content && (
          <h2 className="quote-text">
            <q>{quote.content}</q>
          </h2>
        )}
        {quote.author && <h3 className="quote-author">-{quote.author}</h3>}
      </div>
      <Button
        isLoading={isLoading}
        name="Generate New Quote"
        onClick={generateNewQuote}
        className="generate-btn"
      />
    </div>
  );
};

export default QuotesCard;
