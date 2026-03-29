import { useEffect, useState } from "react";
import Header from "./components/Header";
import QuotesCard from "./components/QuotesCard";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const mapToCardShape = (content, author) => ({
    content,
    author: (author && String(author).trim()) || "Unknown",
  });

  const fetchRandomQuote = () => {
    setIsLoading(true);
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => {
        if (!res.ok) throw new Error("Primary API failed");
        return res.json();
      })
      .then((data) => {
        setQuote(mapToCardShape(data.quote, data.author));
      })
      .catch(() =>
        fetch("https://zenquotes.io/api/random")
          .then((res) => {
            if (!res.ok) throw new Error("Fallback failed");
            return res.json();
          })
          .then((arr) => {
            const item = Array.isArray(arr) ? arr[0] : null;
            if (!item?.q) throw new Error("Invalid fallback payload");
            setQuote(mapToCardShape(item.q, item.a));
          })
      )
      .catch(() => {
        setQuote({
          content:
            "Could not load a quote right now. Please try again in a moment.",
        });
      })
      .finally(() => setIsLoading(false));
  };

  const generateNewQuote = (e) => {
    e.preventDefault();
    fetchRandomQuote();
  };

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