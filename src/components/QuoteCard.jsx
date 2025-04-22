// Display quote text and author in a styled card
function QuoteCard({ quote }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>"{quote.content}"</p>
        <p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>— {quote.author}</p>
      </div>
    );
  }
  
  export default QuoteCard;
  