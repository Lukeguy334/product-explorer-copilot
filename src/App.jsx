import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";
import RefreshButton from "./components/RefreshButton";

/*
  App: Quote Generator
  Features:
    - Fetch and display a random quote
    - Show author name
    - Refresh to get a new quote
  Components: QuoteCard, RefreshButton
  API: https://api.quotable.io/random
*/

// Fetch a random quote from the Quotable API and store it in state
function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      if (!res.ok) throw new Error("Failed to fetch quote");
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Error fetching quote:", err);
      setQuote({ content: "Could not load quote. Try again.", author: "Error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Random Quote Generator</h1>
      {loading ? <p>Loading...</p> : <QuoteCard quote={quote} />}
      <RefreshButton onClick={fetchQuote} />
    </div>
  );
}

export default App;
