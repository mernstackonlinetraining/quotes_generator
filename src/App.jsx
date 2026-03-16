import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import QuotesCard from "./components/QuotesCard";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setIsLoading(false);
      });
  };

  const generateNewQuote = (e) => {
    e.preventDefault();
    fetchRandomQuote();
  };

  console.log("quote  :: ", quote);

  return (
    <div>
      <Header title="Quotes Generator" />
      <div className="container">
        <p>
          This React.js project, the "Quotes Generator," fetches random quotes
          from an API and dynamically displays them on the web page. With a
          click of a button, users can generate a new quote, inspiring them with
          profound wisdom and insights. The clean and intuitive user interface
          allows users to easily interact with the application and discover new
          quotes that resonate with them.
        </p>
        <div>
          <QuotesCard
            quote={quote}
            generateNewQuote={generateNewQuote}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;