// Create a button that triggers a quote refresh on click
function RefreshButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        marginTop: "1rem"
      }}
    >
      Get New Quote
    </button>
  );
}

export default RefreshButton;
