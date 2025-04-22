/*
  App: Quote Generator
  Features:
    - Fetch and display a random quote
    - Show author name
    - Refresh to get a new quote
  Components: QuoteCard, RefreshButton
  API: https://api.quotable.io/random
*/

import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";
import RefreshButton from "./components/RefreshButton";

// Fetch a random quote from the Quotable API and store it in state
function App() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app" style={{ padding: "2rem", textAlign: "center" }}>
      {quote ? <QuoteCard quote={quote} /> : <p>Loading...</p>}
      <RefreshButton onClick={fetchQuote} />
    </div>
  );
}

export default App;
