// Display quote text and author in a styled card
function QuoteCard({ quote }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1.5rem",
      borderRadius: "10px",
      marginBottom: "1rem",
      backgroundColor: "#f9f9f9",
      maxWidth: "600px",
      margin: "0 auto"
    }}>
      <p style={{ fontSize: "1.5rem", fontStyle: "italic", color: "#333" }}>"{quote.content}"</p>
      <p style={{ fontWeight: "bold", marginTop: "1rem", color: "#555" }}>— {quote.author}</p>
    </div>
  );
}

export default QuoteCard;
